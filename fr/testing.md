---
title: "Bonnes pratiques de test JS & Front"
---

# Bonnes pratiques de test JS & Front

[*English version here*]({{ site.baseurl }}{% link en/testing.md %})

Cette liste est surtout un rappel de la façon dont on crée des tests UI / JS à Mapado, et de quelles librairires nous utilisons.

La configuration de chacune de ces librariries ne sera pas expliquée içi, car celà dépendra de votre projet.

### Librairies

- [Jest](https://jestjs.io/) est notre librairie de bases pour les tests et les assertions

- [Enzyme](https://airbnb.io/enzyme/) est une librairie pour tester des composants ReactJS

Pour simuler des données, nous utilisons d'autres librairies, en fonction du cas.

Pour simuler le `store` redux (afin de tester des actions ou des reducers), vous pouvez utiliser [redux-mock-store](https://github.com/dmitry-zaets/redux-mock-store).

Pour simuler des appels asynchrones, nous utilisations [nock](https://github.com/nock/nock) ou [fetch-mock](http://www.wheresrhys.co.uk/fetch-mock/)

### Comment tester

La façon de tester tourne autour de l'idée de la [Pyramide des tests](https://martinfowler.com/articles/practical-test-pyramid.html), c'est à dire de trouver le bon équilibre enntre la rapiditié d'exécution et de code, mais l'isolation des tests unitaires, et la lenteur d'exécution et de code des tests fonctionnels, qui seront toutefois mieux intégrés et testeront le réel.

- Les tests unitaires sont simple et rapide à écrire. C'est idéal pour tester vos fonctions utilitaires.

- Les tests d'intégration sont là pour tester que vos composants s'affichent sans error, pour tester les interactions, etc... Aujourd'hui nous utilisons principalement Enzime pour ça, mais la librairie n'est pas sans défaut, surtout pour tester les interactions entre plusieurs components. Peut-être qu'utiliser une autre librairie serait mieux. [Plus d'information](https://medium.com/homeaway-tech-blog/integration-testing-in-react-21f92a55a894)

- Le [_snapshot testing_](https://jestjs.io/docs/en/snapshot-testing) est une fonctionalité offerte par Jest qui permet de sérialiser une fonction / un composant React, de sauvegarder le résultat dans un fichier, et, par la suite de vérifier si le résultat de la fonction ou du composant a changé. C'est une manière simple et rapide de tester des composants React, mais il est facile d'ajouter des régressions.

- Les tests fonctionnels doivent fonctionner sur des vrais navigateurs ou des navigateurs virtuels (via Browserstack ou Puppeteer par exemple). Comme ils sont lent à lancer, ils ne devraient être utilisés que pour tester les chemins critiques de l'application.

### Tests unitaires avec Jest

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

### _Snapshot testing_ avec Jest

En utilisant `toMatchSnapshot`, au premier lancement, Jest va créer une capture, et la stocker dans un fichier dans le même dossier que votre fichier de test.

Sur les lancements qui suivront, Jest va refaire une capture de votre fonction / composer, et la comparer à la capture stockée dans le fichier.

Si cette capture est la même, le test va passer, sinon, si la fonction / le composant ne retourne pas la même chose, le test va échouer.

Si le changement est voulu, il est possible de mettre à jour la capture avec `jest -u`. Soyez certain que le changement est un changement réellement voulu et non une régression.

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

### Tests d'intégration avec Jest et Enzyme

Quelques exemples des choses que vous pouvez tester avec Enzyme:

Içi, nous testons qu'un composant va appeler une fonction pour récupérer ses données, et, tant que le composant n'a pas ses données, va afficher une barre de chargement.

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

Il est aussi possible de tester que le composant afficher des chaines de caractère spécifiques en fonction de ses propriétés.

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

Il est aussi possible de tester les interactions entre les composants, les conteneurs, et les _stores_ Redux

```js
import React from "react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { mount } from "enzyme";
import PriceListContainer from "../containers/PriceListContainer";
import PriceList from "../components/PriceList";

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

// On met en place l'état initial Redux, que le PriceListContainer va passer au composant PriceList
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

// Le PriceListContainer va afficher le composant PriceList
expect(priceListComponent.exists()).toBe(true);

// ... avec les bonnes proppriétés
expect(priceListComponent.prop("cart")).toEqual(cart);
expect(priceListComponent.prop("currency")).toBe("YOLO");

// Et va appeler une action Redux
expect(store.getActions()).toEqual([{ type: FETCH_OFFER_LIST }]);

// On peut appeler manuellement une propriété du composant (dans ce cas, la fonction est passée du conteneur au composant)
component.prop("refreshOfferList")(cart => cart);

// A ce moment là, une autre action va être déclenchée et envoyée à Redux
expect(store.getActions()).toEqual([
  { type: FETCH_OFFER_LIST },
  { type: FETCH_OFFER_LIST }
]);
```

Vous pouvez simuler des actions sur le DOM, et vérifier que le composant va déclencher les bonnes actions. Dans l'exemple suivant, cliquer sur un bouton radio va sélectionner un object, puis, cliquer sur le bouton de validation va déclencer une fonction passée dans les propriétés du composant, qui prendra en paramètre les objects séléctionnés.

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

Il est aussi possible de tester les appels asynchyrones effectués dans les propriétés de votre composant, même si les API d'Enzyme et de Jest ne sont pas forcément idéales selon les cas.

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

    // Dans l'implémentation de composant, la soumission du formulaire va appeler une fonction dans un setTimeout AVANT d'appeler la propriété onMessageCreated. La façon de gérer ça sera peut-être différente avec un appel AJAX.
    jest.runOnlyPendingTimers();

    setImmediate(() => {
      // Forcer le composant à se mettre à jour
      renderedComponent.update();
      expect(mockOnMessageCreated).toBeCalled();
      expect(mockOnMessageCreated).toHaveBeenCalledTimes(1);
      done();
    });
  });
});
```

### Functional testing with Puppeteer

[Puppeteer](https://github.com/GoogleChrome/puppeteer) est un navigateur Chrome sans interface graphique, que vous pouvez utiliser en ligne de commande ou via un script. Il permet de charger des pages, remplir des formulaires, prendre des captures d'écran, comme si vous étiez dans un navigateur classique.

Quelques examples de ce qu'il est possible de faire avec, mais regardez son API pour plus d'informations.

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

  // Il est possible de tester l'existence de sélecteurs DOM spécifiques, ou que des tests spécifiques sont affichés.
  test("buckets / thumbnails / regions / cities", async () => {
    const response = await page.gotoPath("/");
    expect(response.ok).toBeTruthy();

    expect(await page.count(".mpd-vignette")).toEqual(0);
    expect(await page.count(".mpd-bucket")).toEqual(0);
    expect(await page.count(".regions li")).toEqual(13);
    expect(await page.count(".cities li")).toEqual(12);
    await expect(page).toMatchElement(".cities li", { text: "Paris" });
  });

  // Il est possible de tester que les formulaires fonctionnent correctement
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

    // Le bouton va rediriger, on attend donc la page suivante.
    await page.waitUntilPageLoaded();

    // La redirection a été faite.
    expect(await page.url()).toEqual(`${HOST}/paris/`);

    await page.waitForSelector(".mpd-bucket__title");
    await expect(page).toMatchElement(".mpd-bucket__title", {
      text: /paris/gi
    });
    expect(await page.count(".mpd-bucket")).toEqual(5);
  });
});
```
