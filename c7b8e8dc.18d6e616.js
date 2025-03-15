(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(9),s=(n(0),n(161)),o={title:"Test JS & Front"},i={id:"js/testing",title:"Test JS & Front",description:"Cette liste est surtout un rappel de la fa\xe7on dont on cr\xe9e des tests UI / JS \xe0 Mapado, et de quelles librairires nous utilisons.",source:"@site/docs/js/testing.md",permalink:"/best-practices/docs/js/testing",editUrl:"https://github.com/mapado/best-practices/edit/master/docs/js/testing.md",sidebar:"js",previous:{title:"React Router",permalink:"/best-practices/docs/js/react-router"}},c=[{value:"Librairies",id:"librairies",children:[]},{value:"Comment tester",id:"comment-tester",children:[]},{value:"Tests unitaires avec Jest",id:"tests-unitaires-avec-jest",children:[]},{value:"<em>Snapshot testing</em> avec Jest",id:"snapshot-testing-avec-jest",children:[]},{value:"Tests d&#39;int\xe9gration avec Jest et Enzyme",id:"tests-dint\xe9gration-avec-jest-et-enzyme",children:[]},{value:"Functional testing with Puppeteer",id:"functional-testing-with-puppeteer",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Cette liste est surtout un rappel de la fa\xe7on dont on cr\xe9e des tests UI / JS \xe0 Mapado, et de quelles librairires nous utilisons."),Object(s.b)("p",null,"La configuration de chacune de ces librariries ne sera pas expliqu\xe9e i\xe7i, car cel\xe0 d\xe9pendra de votre projet."),Object(s.b)("h3",{id:"librairies"},"Librairies"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://jestjs.io/"}),"Jest")," est notre librairie de bases pour les tests et les assertions")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://airbnb.io/enzyme/"}),"Enzyme")," est une librairie pour tester des composants ReactJS"))),Object(s.b)("p",null,"Pour simuler des donn\xe9es, nous utilisons d'autres librairies, en fonction du cas."),Object(s.b)("p",null,"Pour simuler le ",Object(s.b)("inlineCode",{parentName:"p"},"store")," redux (afin de tester des actions ou des reducers), vous pouvez utiliser ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/dmitry-zaets/redux-mock-store"}),"redux-mock-store"),"."),Object(s.b)("p",null,"Pour simuler des appels asynchrones, nous utilisations ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mapado/metch-fock"}),"metch-fock"),", ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/nock/nock"}),"nock")," ou ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.wheresrhys.co.uk/fetch-mock/"}),"fetch-mock")),Object(s.b)("h3",{id:"comment-tester"},"Comment tester"),Object(s.b)("p",null,"La fa\xe7on de tester tourne autour de l'id\xe9e de la ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://martinfowler.com/articles/practical-test-pyramid.html"}),"Pyramide des tests"),", c'est \xe0 dire de trouver le bon \xe9quilibre enntre la rapiditi\xe9 d'ex\xe9cution et de code, mais l'isolation des tests unitaires, et la lenteur d'ex\xe9cution et de code des tests fonctionnels, qui seront toutefois mieux int\xe9gr\xe9s et testeront le r\xe9el."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Les tests unitaires sont simple et rapide \xe0 \xe9crire. C'est id\xe9al pour tester vos fonctions utilitaires.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Les tests d'int\xe9gration sont l\xe0 pour tester que vos composants s'affichent sans error, pour tester les interactions, etc... Aujourd'hui nous utilisons principalement Enzime pour \xe7a, mais la librairie n'est pas sans d\xe9faut, surtout pour tester les interactions entre plusieurs components. Peut-\xeatre qu'utiliser une autre librairie serait mieux. ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://medium.com/homeaway-tech-blog/integration-testing-in-react-21f92a55a894"}),"Plus d'information"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Le ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/snapshot-testing"}),Object(s.b)("em",{parentName:"a"},"snapshot testing"))," est une fonctionalit\xe9 offerte par Jest qui permet de s\xe9rialiser une fonction / un composant React, de sauvegarder le r\xe9sultat dans un fichier, et, par la suite de v\xe9rifier si le r\xe9sultat de la fonction ou du composant a chang\xe9. C'est une mani\xe8re simple et rapide de tester des composants React, mais il est facile d'ajouter des r\xe9gressions.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Les tests fonctionnels doivent fonctionner sur des vrais navigateurs ou des navigateurs virtuels (via Browserstack ou Puppeteer par exemple). Comme ils sont lent \xe0 lancer, ils ne devraient \xeatre utilis\xe9s que pour tester les chemins critiques de l'application."))),Object(s.b)("h3",{id:"tests-unitaires-avec-jest"},"Tests unitaires avec Jest"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function getFullname(lastname, firstname) {\n  const normalizedLastname = lastname || '';\n  const normalizedFirstname = firstname || '';\n\n  const label = `${normalizedLastname} ${normalizedFirstname}`;\n  return label.trim();\n}\n\ndescribe('utils', () => {\n  it('can craft a fullname', () => {\n    expect(getFullname()).toEqual('');\n    expect(getFullname('lastname')).toEqual('lastname');\n    expect(getFullname(null, 'firstname')).toEqual('firstname');\n    expect(getFullname('lastname', 'firstname')).toEqual('lastname firstname');\n  });\n});\n")),Object(s.b)("h3",{id:"snapshot-testing-avec-jest"},Object(s.b)("em",{parentName:"h3"},"Snapshot testing")," avec Jest"),Object(s.b)("p",null,"En utilisant ",Object(s.b)("inlineCode",{parentName:"p"},"toMatchSnapshot"),", au premier lancement, Jest va cr\xe9er une capture, et la stocker dans un fichier dans le m\xeame dossier que votre fichier de test."),Object(s.b)("p",null,"Sur les lancements qui suivront, Jest va refaire une capture de votre fonction / composer, et la comparer \xe0 la capture stock\xe9e dans le fichier."),Object(s.b)("p",null,"Si cette capture est la m\xeame, le test va passer, sinon, si la fonction / le composant ne retourne pas la m\xeame chose, le test va \xe9chouer."),Object(s.b)("p",null,"Si le changement est voulu, il est possible de mettre \xe0 jour la capture avec ",Object(s.b)("inlineCode",{parentName:"p"},"jest -u"),". Soyez certain que le changement est un changement r\xe9ellement voulu et non une r\xe9gression."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"describe('CustomerRow', () => {\n  test('CustomerRow renders correctly', () => {\n    const customerJson = {\n      firstname: null,\n      customerType: 'organization',\n      phone: ['+412273579317'],\n      email: [],\n      lastname: 'AM STRAM GRAM / LE TH\xc9\xc2TRE',\n      _id: '1498-1342',\n    };\n\n    const element = <CustomerRow customer={customerJson} />;\n\n    const tree = renderer.create(element).toJSON();\n    expect(tree).toMatchSnapshot();\n  });\n\n  test('CustomerRow renders correctly with an invalid phone number', () => {\n    const customerJson = {\n      firstname: null,\n      customerType: 'organization',\n      phone: ['+333', '+3387', '+3337', '+3338', '+3329'],\n      email: [],\n      lastname: 'Mairie - Service des Affaires culturelles',\n      _id: '1498-848',\n    };\n\n    const element = <CustomerRow customer={customerJson} />;\n\n    const tree = renderer.create(element).toJSON();\n    expect(tree).toMatchSnapshot();\n  });\n});\n")),Object(s.b)("h3",{id:"tests-dint\xe9gration-avec-jest-et-enzyme"},"Tests d'int\xe9gration avec Jest et Enzyme"),Object(s.b)("p",null,"Quelques exemples des choses que vous pouvez tester avec Enzyme:"),Object(s.b)("p",null,"I\xe7i, nous testons qu'un composant va appeler une fonction pour r\xe9cup\xe9rer ses donn\xe9es, et, tant que le composant n'a pas ses donn\xe9es, va afficher une barre de chargement."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"describe('MyComponent', () => {\n  it('should render a loading', () => {\n    const getInitialData = jest.fn();\n    const onSubmit = jest.fn();\n\n    const renderedComponent = mount(\n      <MyComponent\n        getInitialData={getInitialData}\n        isLoadingInitialData\n        onSubmit\n      />\n    );\n\n    expect(getInitialData.mock.calls.length).toEqual(1);\n    expect(onSubmit.mock.calls.length).toEqual(0);\n    expect(renderedComponent.find('.loader').length).toEqual(1);\n  });\n\n")),Object(s.b)("p",null,"Il est aussi possible de tester que le composant afficher des chaines de caract\xe8re sp\xe9cifiques en fonction de ses propri\xe9t\xe9s."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"describe('CustomerRow', () => {\n  test('The customer main information are displayed', () => {\n    const customerJson = {\n      firstname: 'Stephen',\n      phone: ['+33600000000'],\n      email: ['stephen.fry@futurama.fr'],\n      lastname: 'Fry',\n    };\n\n    const renderedComponent = mount(<CustomerRow customer={customerJson} />);\n\n    expect(renderedComponent.contains('Stephen')).toBe(true);\n    expect(renderedComponent.contains('Fry')).toBe(true);\n    expect(renderedComponent.contains('stephen.fry@futurama.fr')).toBe(true);\n    expect(renderedComponent.contains('06 00 00 00 00')).toBe(true);\n  });\n});\n")),Object(s.b)("p",null,"Il est aussi possible de tester les interactions entre les composants, les conteneurs, et les ",Object(s.b)("em",{parentName:"p"},"stores")," Redux"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react';\nimport configureMockStore from 'redux-mock-store';\nimport thunk from 'redux-thunk';\nimport { mount } from 'enzyme';\nimport PriceListContainer from '../containers/PriceListContainer';\nimport PriceList from '../components/PriceList';\n\nconst middleWares = [thunk];\nconst mockStore = configureMockStore(middleWares);\n\n// On met en place l'\xe9tat initial Redux, que le PriceListContainer va passer au composant PriceList\nconst cart = new Cart({\n  '@type': 'Cart',\n  currency: 'EUR',\n});\nconst defaultState = {\n  booking: Map({\n    currentCart: cart,\n  }),\n};\n\nconst defaultState = {\n  booking: {\n    cart,\n  },\n};\n\nconst store = mockStore(defaultState);\nconst container = mount(\n  <PriceListContainer store={store} ticketPriceList={[]} />\n);\n\nconst priceListComponent = container.find(PriceList);\n\n// Le PriceListContainer va afficher le composant PriceList\nexpect(priceListComponent.exists()).toBe(true);\n\n// ... avec les bonnes proppri\xe9t\xe9s\nexpect(priceListComponent.prop('cart')).toEqual(cart);\nexpect(priceListComponent.prop('currency')).toBe('YOLO');\n\n// Et va appeler une action Redux\nexpect(store.getActions()).toEqual([{ type: FETCH_OFFER_LIST }]);\n\n// On peut appeler manuellement une propri\xe9t\xe9 du composant (dans ce cas, la fonction est pass\xe9e du conteneur au composant)\ncomponent.prop('refreshOfferList')((cart) => cart);\n\n// A ce moment l\xe0, une autre action va \xeatre d\xe9clench\xe9e et envoy\xe9e \xe0 Redux\nexpect(store.getActions()).toEqual([\n  { type: FETCH_OFFER_LIST },\n  { type: FETCH_OFFER_LIST },\n]);\n")),Object(s.b)("p",null,"Vous pouvez simuler des actions sur le DOM, et v\xe9rifier que le composant va d\xe9clencher les bonnes actions. Dans l'exemple suivant, cliquer sur un bouton radio va s\xe9lectionner un object, puis, cliquer sur le bouton de validation va d\xe9clencer une fonction pass\xe9e dans les propri\xe9t\xe9s du composant, qui prendra en param\xe8tre les objects s\xe9l\xe9ctionn\xe9s."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"describe('ItemSelectorModal', () => {\n  it('should call onSelectedItem with an item after selecting it', () => {\n    const mockOnCancel = jest.fn;\n    const mockOnSelectedItem = jest.fn();\n    const renderedComponent = mount(\n      <ItemSelectorModal\n        selectedItemList={['item1', 'item2']}\n        fullItemList={['item1', 'item2', 'item3', 'item4']}\n        onSelectedItem={mockOnSelectedItem}\n        onCancel={mockOnCancel}\n      />\n    );\n\n    renderedComponent\n      .find('ul li input[type=\"radio\"]')\n      .at(1)\n      .simulate('change', {\n        target: {\n          value: 'item1',\n          checked: true,\n        },\n      });\n\n    renderedComponent.find('button[type=\"submit\"]').at(0).simulate('click');\n\n    expect(mockOnSelectedItem.mock.calls.length).toEqual(1);\n    expect(mockOnSelectedItem.mock.calls[0][0]).toBe('item1');\n  });\n});\n")),Object(s.b)("p",null,"Il est aussi possible de tester les appels asynchyrones effectu\xe9s dans les propri\xe9t\xe9s de votre composant, m\xeame si les API d'Enzyme et de Jest ne sont pas forc\xe9ment id\xe9ales selon les cas."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react';\nimport { mount } from 'enzyme';\n\nimport PostMessageForm from './PostMessageForm';\n\njest.useFakeTimers();\n\ndescribe('PostMessageForm', () => {\n  it('should call the onMessageCreated function on submit', (done) => {\n    const mockOnMessageCreated = jest.fn();\n    const renderedComponent = mount(\n      <PostMessageForm onMessageCreated={mockOnMessageCreated} />\n    );\n\n    renderedComponent\n      .find('textarea')\n      .simulate('change', { target: { value: 'Lorem ipsum dolor' } });\n    renderedComponent.find(\"input[type='checkbox']\").simulate('click');\n    renderedComponent.find('form').simulate('submit');\n\n    // Dans l'impl\xe9mentation de composant, la soumission du formulaire va appeler une fonction dans un setTimeout AVANT d'appeler la propri\xe9t\xe9 onMessageCreated. La fa\xe7on de g\xe9rer \xe7a sera peut-\xeatre diff\xe9rente avec un appel AJAX.\n    jest.runOnlyPendingTimers();\n\n    setImmediate(() => {\n      // Forcer le composant \xe0 se mettre \xe0 jour\n      renderedComponent.update();\n      expect(mockOnMessageCreated).toBeCalled();\n      expect(mockOnMessageCreated).toHaveBeenCalledTimes(1);\n      done();\n    });\n  });\n});\n")),Object(s.b)("h3",{id:"functional-testing-with-puppeteer"},"Functional testing with Puppeteer"),Object(s.b)("p",null,Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/GoogleChrome/puppeteer"}),"Puppeteer")," est un navigateur Chrome sans interface graphique, que vous pouvez utiliser en ligne de commande ou via un script. Il permet de charger des pages, remplir des formulaires, prendre des captures d'\xe9cran, comme si vous \xe9tiez dans un navigateur classique."),Object(s.b)("p",null,"Quelques examples de ce qu'il est possible de faire avec, mais regardez son API pour plus d'informations."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import PageFactory from '../pageFactory';\nimport { setDefaultOptions } from 'expect-puppeteer';\n\ndescribe('Home', () => {\n  let page;\n\n  beforeAll(async () => {\n    page = await PageFactory(global.browser);\n  });\n\n  test('/fr/ is redirected on home page', async () => {\n    const response = await page.gotoPath('/fr/');\n    expect(response.ok).toBeTruthy();\n    expect(response.url()).toEqual(`${HOST}/`);\n  });\n\n  // Il est possible de tester l'existence de s\xe9lecteurs DOM sp\xe9cifiques, ou que des tests sp\xe9cifiques sont affich\xe9s.\n  test('buckets / thumbnails / regions / cities', async () => {\n    const response = await page.gotoPath('/');\n    expect(response.ok).toBeTruthy();\n\n    expect(await page.count('.mpd-vignette')).toEqual(0);\n    expect(await page.count('.mpd-bucket')).toEqual(0);\n    expect(await page.count('.regions li')).toEqual(13);\n    expect(await page.count('.cities li')).toEqual(12);\n    await expect(page).toMatchElement('.cities li', { text: 'Paris' });\n  });\n\n  // Il est possible de tester que les formulaires fonctionnent correctement\n  test('search', async () => {\n    expect(await page.count('.mpd-block-tab')).toEqual(3);\n    expect(await page.count('form[name=what-to-do]')).toEqual(1);\n\n    await page.fillInputHidden(\n      'input[name=\"activitysearch[addressTree]\"]',\n      'Millau (12100)'\n    );\n    await expect(page).toClick('button', { text: 'RECHERCHER' });\n    await page.waitUntilPageLoaded();\n    expect(await page.url()).toEqual(`${HOST}/millau/`);\n\n    await page.gotoHomepage();\n    await page.fillInputHidden(\n      'input[name=\"activitysearch[addressTree]\"]',\n      'Paris (75000)'\n    );\n    await expect(page).toClick('button', { text: 'RECHERCHER' });\n\n    // Le bouton va rediriger, on attend donc la page suivante.\n    await page.waitUntilPageLoaded();\n\n    // La redirection a \xe9t\xe9 faite.\n    expect(await page.url()).toEqual(`${HOST}/paris/`);\n\n    await page.waitForSelector('.mpd-bucket__title');\n    await expect(page).toMatchElement('.mpd-bucket__title', {\n      text: /paris/gi,\n    });\n    expect(await page.count('.mpd-bucket')).toEqual(5);\n  });\n});\n")))}u.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,b=p["".concat(o,".").concat(d)]||p[d]||m[d]||s;return n?r.a.createElement(b,i({ref:t},l,{components:n})):r.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);