---
title: "JS & Frontend testing best practices"
---

# JS & Frontend testing best practices

[*French version here*]({{ site.baseurl }}{% link fr/testing.md %})

This is mostly a reminder on how we create UI / JS tests at Mapado, and which libraries we use.

The configuration of each of those libraries will not be explained here, as it will depend on your project.

### Libraries

- [Jest](https://jestjs.io/) is our basic testing and assertion library
- [Enzyme](https://airbnb.io/enzyme/) is a library for testing React components

For mocking data, we use a few more libraries depending on the case.

To mock redux stores (ie. to test actions or reducers), you can use [redux-mock-store](https://github.com/dmitry-zaets/redux-mock-store).

To mock async calls, we use [nock](https://github.com/nock/nock) or [fetch-mock](http://www.wheresrhys.co.uk/fetch-mock/)

### How to test

The basic idea revolves around the idea of the [Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html), ie. find the right balance between fast, easy to code, but isolated unit tests, and slow, harder to code, but more integrated functional tests.

- Unit tests are easy and quick to code, so you can easily test your utils functions, and add more tests if one case was not handled by your function

- Integration tests should test that your React componends render without error, should test interactions, etc... Currently, we use mostly Enzyme for that, but it has its shortcomings, especially when testing interactions between multiple components, so maybe another library would be better. [More information here](https://medium.com/homeaway-tech-blog/integration-testing-in-react-21f92a55a894)

- [Snapshot tests](https://jestjs.io/docs/en/snapshot-testing) is a functionality offered by JEST that allows to serialize a function / a React component, save it in a file, and on subsequents runs will check if the the function / component has changed what it will output.
  It's a quick way to test React components, but it can be easy to add regressions.

- Functional tests should be rendered on real browsers (or real virtual browsers, with Browserstack or Puppeteer), but as they're slow to run, and more prone to errors, they should only test critical paths.

### Unit testing with Jest

```js
function getFullname(lastname, firstname) {
  const normalizedLastname = lastname || "";
  const normalizedFirstname = firstname || "";

  const label = `${normalizedLastname} ${normalizedFirstname}`;
  return label.trim();
}

describe("utils", () => {
  it("can craft a fullname", () => {
    expect(getFullname()).toEqual("");
    expect(getFullname("lastname")).toEqual("lastname");
    expect(getFullname(null, "firstname")).toEqual("firstname");
    expect(getFullname("lastname", "firstname")).toEqual("lastname firstname");
  });
});
```

### Snapshot testing with Jest

When using `toMatchSnapshot`, on the first run, Jest will create the snapshot and write it on a file in the same directory as your test file.

On following Jest runs, Jest will snapshot your component / function again and compare it against the snapshot stored in the file.

If the snapshot is the same, the test will pass, else, if the function / component does not render the same thing, the test will fail.

If the change is wanted, you can just update the stored snapshot with `jest -u`. Just be careful the change is really wanted and is not, in fact, a regression.

```js
describe("CustomerRow", () => {
  test("CustomerRow renders correctly", () => {
    const customerJson = {
      firstname: null,
      customerType: "organization",
      phone: ["+412273579317"],
      email: [],
      lastname: "AM STRAM GRAM / LE THÉÂTRE",
      _id: "1498-1342"
    };

    const element = <CustomerRow customer={customerJson} />;

    const tree = renderer.create(element).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("CustomerRow renders correctly with an invalid phone number", () => {
    const customerJson = {
      firstname: null,
      customerType: "organization",
      phone: ["+333", "+3387", "+3337", "+3338", "+3329"],
      email: [],
      lastname: "Mairie - Service des Affaires culturelles",
      _id: "1498-848"
    };

    const element = <CustomerRow customer={customerJson} />;

    const tree = renderer.create(element).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
```

### Integration testing with Jest and Enzyme

A few examples of the kind of things you can test with Enzyme:

Here, we test that a component will call a function to get its data, and, while it does not have its data yet, will display a loader.

```js
describe('MyComponent', () => {
  it('should render a loading', () => {
    const getInitialData = jest.fn();
    const onSubmit = jest.fn();

    const renderedComponent = mount(
      <MyComponent
        getInitialData={getInitialData}
        isLoadingInitialData
        onSubmit
      />
    );

    expect(getInitialData.mock.calls.length).toEqual(1);
    expect(onSubmit.mock.calls.length).toEqual(0);
    expect(renderedComponent.find('.loader').length).toEqual(1);
  });

```

We can also test that our component renders specific strings depending on its props

```js
describe("CustomerRow", () => {
  test("The customer main information are displayed", () => {
    const customerJson = {
      firstname: "Stephen",
      phone: ["+33600000000"],
      email: ["stephen.fry@futurama.fr"],
      lastname: "Fry"
    };

    const renderedComponent = mount(<CustomerRow customer={customerJson} />);

    expect(renderedComponent.contains("Stephen")).toBe(true);
    expect(renderedComponent.contains("Fry")).toBe(true);
    expect(renderedComponent.contains("stephen.fry@futurama.fr")).toBe(true);
    expect(renderedComponent.contains("06 00 00 00 00")).toBe(true);
  });
});
```

We can also test interactions between components, containers and redux stores

```js
import React from "react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { mount } from "enzyme";
import PriceListContainer from "../containers/PriceListContainer";
import PriceList from "../components/PriceList";

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

// Crafting the initial redux state, which the PriceListContainer will pass to the PriceList component
const cart = new Cart({
  "@type": "Cart",
  currency: "EUR"
});
const defaultState = {
  booking: Map({
    currentCart: cart
  })
};

const defaultState = {
  booking: {
    cart
  }
};

const store = mockStore(defaultState);
const container = mount(
  <PriceListContainer store={store} ticketPriceList={[]} />
);

const priceListComponent = container.find(PriceList);

// The PriceListContainer will render the PriceList component
expect(priceListComponent.exists()).toBe(true);

// ... with the proper props
expect(priceListComponent.prop("cart")).toEqual(cart);
expect(priceListComponent.prop("currency")).toBe("YOLO");

// And by doing so, will call a Redux action
expect(store.getActions()).toEqual([{ type: FETCH_OFFER_LIST }]);

// Manually call a property of the component (in this case, this function is also passed to the component from the container)
component.prop("refreshOfferList")(cart => cart);

// Test that another action will be triggered and sent to redux
expect(store.getActions()).toEqual([
  { type: FETCH_OFFER_LIST },
  { type: FETCH_OFFER_LIST }
]);
```

You can simulate DOM actions, and check that the component will trigger the right actions. In the following example, clicking on a radio input to select an item, and then on a submit button will trigger a prop, with the selected items list as parameters.

```js
describe("ItemSelectorModal", () => {
  it("should call onSelectedItem with an item after selecting it", () => {
    const mockOnCancel = jest.fn;
    const mockOnSelectedItem = jest.fn();
    const renderedComponent = mount(
      <ItemSelectorModal
        selectedItemList={["item1", "item2"]}
        fullItemList={["item1", "item2", "item3", "item4"]}
        onSelectedItem={mockOnSelectedItem}
        onCancel={mockOnCancel}
      />
    );

    renderedComponent
      .find('ul li input[type="radio"]')
      .at(1)
      .simulate("change", {
        target: {
          value: "item1",
          checked: true
        }
      });

    renderedComponent
      .find('button[type="submit"]')
      .at(0)
      .simulate("click");

    expect(mockOnSelectedItem.mock.calls.length).toEqual(1);
    expect(mockOnSelectedItem.mock.calls[0][0]).toBe("item1");
  });
});
```

You can also test async calls of your component's props, event if the Enzyme and Jest API are not always ideal.

```js
import React from "react";
import { mount } from "enzyme";

import PostMessageForm from "./PostMessageForm";

jest.useFakeTimers();

describe("PostMessageForm", () => {
  it("should call the onMessageCreated function on submit", done => {
    const mockOnMessageCreated = jest.fn();
    const renderedComponent = mount(
      <PostMessageForm onMessageCreated={mockOnMessageCreated} />
    );

    renderedComponent
      .find("textarea")
      .simulate("change", { target: { value: "Lorem ipsum dolor" } });
    renderedComponent.find("input[type='checkbox']").simulate("click");
    renderedComponent.find("form").simulate("submit");

    // In this component implementation, the submit will call a function within a setTimeout BEFORE calling the onMessageCreated prop. The way to handle it with jest might differ with an AJAX call.
    jest.runOnlyPendingTimers();

    setImmediate(() => {
      // Force the component to update
      renderedComponent.update();
      expect(mockOnMessageCreated).toBeCalled();
      expect(mockOnMessageCreated).toHaveBeenCalledTimes(1);
      done();
    });
  });
});
```

### Functional testing with Puppeteer

[Puppeteer](https://github.com/GoogleChrome/puppeteer) is a headless Chrome browser that you can use with CLI or with a script. It allows you to load web pages, and test stuff / take screenshots as if you were in a real browser.

Examples of what you can do with Puppeteer, but check its API to know what it's capable of:

```js
import PageFactory from "../pageFactory";
import { setDefaultOptions } from "expect-puppeteer";

describe("Home", () => {
  let page;

  beforeAll(async () => {
    page = await PageFactory(global.browser);
  });

  test("/fr/ is redirected on home page", async () => {
    const response = await page.gotoPath("/fr/");
    expect(response.ok).toBeTruthy();
    expect(response.url()).toEqual(`${HOST}/`);
  });

  // We can test specific selectors exist, or specific texts are displayed
  test("buckets / thumbnails / regions / cities", async () => {
    const response = await page.gotoPath("/");
    expect(response.ok).toBeTruthy();

    expect(await page.count(".mpd-vignette")).toEqual(0);
    expect(await page.count(".mpd-bucket")).toEqual(0);
    expect(await page.count(".regions li")).toEqual(13);
    expect(await page.count(".cities li")).toEqual(12);
    await expect(page).toMatchElement(".cities li", { text: "Paris" });
  });

  // We can also test that our forms work correctly
  test("search", async () => {
    expect(await page.count(".mpd-block-tab")).toEqual(3);
    expect(await page.count("form[name=what-to-do]")).toEqual(1);

    await page.fillInputHidden(
      'input[name="activitysearch[addressTree]"]',
      "Millau (12100)"
    );
    await expect(page).toClick("button", { text: "RECHERCHER" });
    await page.waitUntilPageLoaded();
    expect(await page.url()).toEqual(`${HOST}/millau/`);

    await page.gotoHomepage();
    await page.fillInputHidden(
      'input[name="activitysearch[addressTree]"]',
      "Paris (75000)"
    );
    await expect(page).toClick("button", { text: "RECHERCHER" });

    // The button will redirect, so we wait for the next page
    await page.waitUntilPageLoaded();

    // The redirection was done
    expect(await page.url()).toEqual(`${HOST}/paris/`);

    // Make sure the content is loaded
    await page.waitForSelector(".mpd-bucket__title");
    await expect(page).toMatchElement(".mpd-bucket__title", {
      text: /paris/gi
    });
    expect(await page.count(".mpd-bucket")).toEqual(5);
  });
});
```
