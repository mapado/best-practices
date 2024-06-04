/*! For license information please see decf0c15.b3adf175.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{154:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return b}));var a=t(2),s=t(9),r=(t(0),t(159)),o=t(167),i=t(166),c={title:"ReactJS"},l={id:"js/react",title:"ReactJS",description:'Cette liste de bonne pratique est surtout un retour sur certaines "mauvaise pratiques" que nous avons mis dans notre code et comment les corriger.',source:"@site/docs/js/react.mdx",permalink:"/best-practices/docs/js/react",editUrl:"https://github.com/mapado/best-practices/edit/master/docs/js/react.mdx",sidebar:"js",previous:{title:"Guide de style",permalink:"/best-practices/docs/js/style"},next:{title:"Redux",permalink:"/best-practices/docs/js/redux"}},d=[{value:"Nombre de composants par fichiers composants",id:"nombre-de-composants-par-fichiers-composants",children:[]},{value:"Nommage de m\xe9thodes",id:"nommage-de-m\xe9thodes",children:[]},{value:"bind(this) dans la methode <code>render</code>",id:"bindthis-dans-la-methode-render",children:[]},{value:"Composant &quot;classe&quot; : fonctions anonymes dans la methode <code>render</code>",id:"composant-classe--fonctions-anonymes-dans-la-methode-render",children:[]},{value:"Hooks : d\xe9finitions des fonctions de &quot;setters&quot;",id:"hooks--d\xe9finitions-des-fonctions-de-setters",children:[]},{value:"Hooks : extraction de hooks personnalis\xe9s",id:"hooks--extraction-de-hooks-personnalis\xe9s",children:[]},{value:"Hooks : <code>useState</code> multiples",id:"hooks--usestate-multiples",children:[]}],u={rightToc:d};function b(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,'Cette liste de bonne pratique est surtout un retour sur certaines "mauvaise pratiques" que nous avons mis dans notre code et comment les corriger.'),Object(r.b)("h3",{id:"nombre-de-composants-par-fichiers-composants"},"Nombre de composants par fichiers composants"),Object(r.b)("p",null,'Un fichier "composant" ne DEVRAIT pas avoir plus d\'un composant dedans :'),Object(r.b)(o.a,{defaultValue:"good",values:[{label:"Pas bien \ud83d\udc4e",value:"bad"},{label:"Bien \ud83d\udc4d",value:"good"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"bad",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="/src/components/Menu.js"',title:'"/src/components/Menu.js"'}),"function Label() {\n  return 'some label';\n}\n\nfunction Content() {\n  return 'some label';\n}\n\nfunction Menu() {\n  return (\n    <div>\n      <div>\n        <Label />\n      </div>\n\n      <div>\n        <Content />\n      </div>\n    </div>\n  );\n}\n"))),Object(r.b)(i.a,{value:"good",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="/src/components/Menu/Content.js"',title:'"/src/components/Menu/Content.js"'}),"function Label() {\n  return 'some label';\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="/src/components/Menu/Content.js"',title:'"/src/components/Menu/Content.js"'}),"function Content() {\n  return 'some label';\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="/src/components/Menu/index.js"',title:'"/src/components/Menu/index.js"'}),"function Menu() {\n  return (\n    <div>\n      <div>\n        <Label />\n      </div>\n\n      <div>\n        <Content />\n      </div>\n    </div>\n  );\n}\n")))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Int\xe9r\xeat")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Le but est de trouver le bon composant quand on ouvre le fichier en question, en pas de trouver plusieurs composants sans trouver celui qui est cens\xe9 \xeatre l\xe0."))),Object(r.b)("h4",{id:"cas-des-conteneurs--injecteurs"},'Cas des "conteneurs" / "injecteurs"'),Object(r.b)("h3",{id:"nommage-de-m\xe9thodes"},"Nommage de m\xe9thodes"),Object(r.b)("p",null,'Un m\xe9thode "r\xe9pondant" \xe0 un \xe9v\xe8nement ',Object(r.b)("inlineCode",{parentName:"p"},"onSomething")," DEVRAIT \xeatre pr\xe9fix\xe9e par ",Object(r.b)("inlineCode",{parentName:"p"},"handle"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{2,8}","{2,8}":!0}),"class Foo() {\n  handleClick() {\n    // do something\n  }\n\n  render() {\n    return (\n      <button onClick={this.handleClick}>\n        Click\n      </button>\n    );\n  }\n}\n")),Object(r.b)("h3",{id:"bindthis-dans-la-methode-render"},"bind(this) dans la methode ",Object(r.b)("inlineCode",{parentName:"h3"},"render")),Object(r.b)("p",null,"Le binding javascript ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/"}),"n'est pas simple"),"."),Object(r.b)("p",null,"Les nouvelles fonctionnalit\xe9s d'ECMAScript permettent de se rapprocher des autres langages et de ne plus avoir \xe0 connaitre les \"internes\", et c'est plut\xf4t bien (m\xeame si c'est encore mieux de connaitre comment \xe7a fonctionne sous le cap\xf4t)."),Object(r.b)("p",null,"Pour cette raison, le ",Object(r.b)("inlineCode",{parentName:"p"},"binding"),' et les appels de m\xe9thodes DEVRAIENT \xeatre le plus "simple" et le plus "logique" pour les d\xe9butants.'),Object(r.b)("p",null,"Cela facilite aussi la lisibilit\xe9 et la compr\xe9hension pour les d\xe9veloppeurs chevronn\xe9s."),Object(r.b)(o.a,{defaultValue:"good",values:[{label:"Pas bien \ud83d\udc4e",value:"bad"},{label:"Bien \ud83d\udc4d",value:"good"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"bad",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{7}","{7}":!0}),"class Foo extends Component {\n  handleClick(foo) {\n    // do someting\n  }\n\n  render() {\n    this.handleClick.bind(this, this.props.foo);\n\n    return <button onClick={this.handleClick}></button>;\n  }\n}\n"))),Object(r.b)(i.a,{value:"good",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{5}","{5}":!0}),"class Foo extends Component {\n  constructor(props) {\n    super(props);\n\n    this.handleClick = this.handleClick.bind(this);\n  }\n\n  handleClick() {\n    const foo = this.props.foo;\n    // do someting\n  }\n\n  render() {\n    return <button onClick={this.handleClick}></button>;\n  }\n}\n")))),Object(r.b)("h3",{id:"composant-classe--fonctions-anonymes-dans-la-methode-render"},'Composant "classe" : fonctions anonymes dans la methode ',Object(r.b)("inlineCode",{parentName:"h3"},"render")),Object(r.b)("p",null,"De la m\xeame mani\xe8re, on NE DOIT PAS cr\xe9er des fonctions anonymes dans la m\xe9thode ",Object(r.b)("inlineCode",{parentName:"p"},"render"),"."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Explications")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"Les fonctions anonymes sont reg\xe9n\xe9r\xe9es \xe0 chaque appel de ",Object(r.b)("inlineCode",{parentName:"li"},"render"),", ce qui consomme de la ressource pour rien."),Object(r.b)("li",{parentName:"ul"},"Cela rend la m\xe9thode ",Object(r.b)("inlineCode",{parentName:"li"},"render"),' moins lisible car il y a du code "m\xe9tier" dans le rendu.')))),Object(r.b)(o.a,{defaultValue:"good",values:[{label:"Pas bien \ud83d\udc4e",value:"bad"},{label:"Bien \ud83d\udc4d",value:"good"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"bad",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{14-16}","{14-16}":!0}),"class Foo extends PureComponent {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      foo: false,\n    };\n  }\n\n  render() {\n    return (\n      <div>\n        <button\n          onClick={() => {\n            this.setState({ foo: 'bar' });\n          }}\n        >\n          Hey, click-me !\n        </button>\n      </div>\n    );\n  }\n}\n"))),Object(r.b)(i.a,{value:"good",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{5,12-16,21}","{5,12-16,21}":!0}),"class Foo extends PureComponent {\n  constructor(props) {\n    super(props);\n\n    this.handleButtonClick = this.handleButtonClick.bind(this);\n\n    this.state = {\n      foo: false,\n    };\n  }\n\n  handleButtonClick() {\n    this.setState((prevState) => ({\n      foo: !prevState.foo,\n    }));\n  }\n\n  render() {\n    return (\n      <div>\n        <button onClick={this.handleButtonClick}>Hey, click-me !</button>\n      </div>\n    );\n  }\n}\n")))),Object(r.b)("h4",{id:"exception"},"Exception"),Object(r.b)("p",null,"La seule exception \xe9tant si l'on est en train d'it\xe9rer sur une liste et que l'on doit passer un object en param\xe8tre."),Object(r.b)("p",null,"On DOIT dans tous les cas limiter la fonction anonyme \xe0 un appel d'une autre m\xe9thode pour la lisibilit\xe9."),Object(r.b)("p",null,"On PEUT alors faire comme \xe7a:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{20-21}","{20-21}":!0}),"class Foo extends PureComponent {\n  constructor(props) {\n    super(props);\n\n    this.handleButtonClick = this.handleButtonClick.bind(this);\n\n    this.state = {\n      btnClicked: null,\n    };\n  }\n\n  handleButtonClick(item) {\n    this.setState({\n      btnClicked: item,\n    });\n  }\n\n  render() {\n    return (<div>\n      {this.props.myList.map(item =>\n        <button onClick={(item) => this.handleButtonClick(item)}>\n          Hey, click-me !\n        </button>\n      }\n    </div>);\n  }\n}\n")),Object(r.b)("h3",{id:"hooks--d\xe9finitions-des-fonctions-de-setters"},'Hooks : d\xe9finitions des fonctions de "setters"'),Object(r.b)("p",null,"\xc0 l'instar des composants de classe, on NE DEVRAIT PAS de d\xe9finir des fonctions dans le corps du rendu de la m\xe9thode pour faire des actions simples:"),Object(r.b)(o.a,{defaultValue:"good",values:[{label:"Pas bien \ud83d\udc4e",value:"bad"},{label:"Bien \ud83d\udc4d",value:"good"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"bad",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{4-6}","{4-6}":!0}),"function Container() {\n  const [isVisible, setIsVisible] = useState(false);\n\n  function handleClick() {\n    setIsVisible(true);\n  }\n\n  return <button onClick={handleClick}>Make visible</button>;\n}\n"))),Object(r.b)(i.a,{value:"good",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{4}","{4}":!0}),"function Container() {\n  const [isVisible, setIsVisible] = useState(false);\n\n  return <button onClick={() => setIsVisible(true)}>Make visible</button>;\n}\n")))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Explication")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"Dans tous les cas la fonction est reg\xe9n\xe9r\xe9e \xe0 chaque rendu"),Object(r.b)("li",{parentName:"ul"},"Le fait de d\xe9finir une fonction suppl\xe9mentaire peut complexifier la compr\xe9hension pour des cas simple")))),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Attention")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Il est par contre important d'extraire une fonction personnalis\xe9e quand le code devient complexe auquel cas la lisibilit\xe9 du rendu du composant s'en trouverait diminu\xe9e."))),Object(r.b)("h3",{id:"hooks--extraction-de-hooks-personnalis\xe9s"},"Hooks : extraction de hooks personnalis\xe9s"),Object(r.b)("p",null,"On DEVRAIT extraire les hooks personnalis\xe9s dans les cas suivants :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'Quand les "hooks" prennent plus de 40% de la taille du composant : extraire dans des hooks par "blocs fonctionnels"'),Object(r.b)("li",{parentName:"ul"},'Quand plusieurs "hooks" ont des "p\xe9rim\xe8tres fonctionnels" diff\xe9rents, sortir les hooks par blocs fonctionnels diff\xe9rents')),Object(r.b)("p",null,"Il est tr\xe8s facile \xe0 extraire des hooks : il suffit de copier coller tout son code dans une autre fonction."),Object(r.b)(o.a,{defaultValue:"good",values:[{label:"Pas bien \ud83d\udc4e",value:"bad"},{label:"Bien \ud83d\udc4d",value:"good"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"bad",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{2-10}","{2-10}":!0}),"function Cart() {\n  const sdk = useSdk();\n  const { cartId } = useParams();\n  const [cart, setCart] = useState(null);\n\n  useEffect(() => {\n    sdk.find(cartId).then((cart) => {\n      setCart(cart);\n    });\n  }, [sdk, cartId]);\n\n  if (cart === null) {\n    return <div>loading\u2026</div>;\n  }\n\n  return (\n    <div>\n      <h2>{cart.title}</h2>\n      <p>\n        {cart.amount} {cart.currency}\n      </p>\n    </div>\n  );\n}\n"))),Object(r.b)(i.a,{value:"good",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{1,16}","{1,16}":!0}),"function useCurrentCart() {\n  const sdk = useSdk();\n  const { cartId } = useParams();\n  const [cart, setCart] = useState(null);\n\n  useEffect(() => {\n    sdk.find(cartId).then((cart) => {\n      setCart(cart);\n    });\n  }, [sdk, cartId]);\n\n  return cart;\n}\n\nfunction Cart() {\n  const cart = useCurrentCart();\n\n  if (cart === null) {\n    return <div>loading\u2026</div>;\n  }\n\n  return (\n    <div>\n      <h2>{cart.title}</h2>\n      <p>\n        {cart.amount} {cart.currency}\n      </p>\n    </div>\n  );\n}\n")))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Int\xe9r\xeat")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Une meilleure lisibilit\xe9 du composant, possibilit\xe9 de tester les hooks."))),Object(r.b)("p",null,'Les hooks personnalis\xe9s PEUVENT \xeatre situ\xe9s dans le fichier \xe0 c\xf4t\xe9 du composant si ils restent petits et "priv\xe9s".'),Object(r.b)("p",null,'Ils DEVRAIENT \xeatre dans un fichiers autonome dans le dossier du composant si ils sont "priv\xe9s" mais complexes (plus de ~50 lignes).'),Object(r.b)("p",null,'Ils PEUVENT \xeatre situ\xe9s dans un dossier / fichier partag\xe9s si ils sont utilisables par plusieurs composants.\nDans ce cas ils DEVRAIENT \xeatre au plus pr\xe8s de leur utilisation m\xe9tier. (un "hook" concernant uniquement les paniers devrait se trouver avec le code des paniers, et pas \xe0 la racine).'),Object(r.b)("h3",{id:"hooks--usestate-multiples"},"Hooks : ",Object(r.b)("inlineCode",{parentName:"h3"},"useState")," multiples"),Object(r.b)("p",null,"On NE DEVRAIT PAS utiliser ",Object(r.b)("inlineCode",{parentName:"p"},"useState"),' plusieurs fois autour du m\xeame "bloc fonctionnel", mais on DEVRAIT utiliser ',Object(r.b)("inlineCode",{parentName:"p"},"useReducer")," dans ce cas."),Object(r.b)(o.a,{defaultValue:"good",values:[{label:"Pas bien \ud83d\udc4e",value:"bad"},{label:"Bien \ud83d\udc4d",value:"good"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"bad",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"function useCurrentCart(sdk, cartId) {\n  const [cart, setCart] = useState(null);\n  const [error, setError] = useState(null);\n  const [isLoadingCart, setIsLoadingCart] = useState(false);\n\n  useEffect(() => {\n    setIsLoadingCart(true);\n\n    sdk\n      .find(cartId)\n      .then((cart) => {\n        setCart(cart);\n        setIsLoadingCart(false);\n        setError(null);\n      })\n      .catch((error) => {\n        setCart(null);\n        setIsLoadingCart(false);\n        setError(error);\n      });\n  }, [cartId]);\n\n  return { isLoading, cart, error };\n}\n"))),Object(r.b)(i.a,{value:"good",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const initialState = {\n  isLoading: false,\n  cart: null,\n  error: null,\n};\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'FETCH_CART':\n      return {\n        isLoading: true,\n        cart: null,\n        error: null,\n      };\n    case 'CART_RECEIVED':\n      return {\n        isLoading: false,\n        cart: action.cart,\n        error: null,\n      };\n    case 'FETCH_CART_ERROR':\n      return {\n        isLoading: false,\n        cart: null,\n        error: action.error,\n      };\n    default:\n      throw new Error();\n  }\n}\n\nfunction useCurrentCart(sdk, cartId) {\n  const [state, dispatch] = useReducer(reducer, initialState);\n\n  useEffect(() => {\n    dispatch({ type: 'FETCH_CART' });\n\n    sdk\n      .find(cartId)\n      .then((cart) => {\n        dispatch({ type: 'CART_RECEIVED', cart });\n      })\n      .catch((error) => {\n        dispatch({ type: 'FETCH_CART_ERROR', error });\n      });\n  }, [cartId]);\n\n  return state;\n}\n")))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Int\xe9r\xeat")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},'Pouvoir modifier facilement en ajoutant une cl\xe9, ou un cas sans avoir un "setter" qui est mal (r\xe9-)initialis\xe9.'),Object(r.b)("li",{parentName:"ul"},"Avoir la liste de tous les cas et les actions lisibles facilement sans avoir besoin de comprendre la logique sous-jacente.")))))}b.isMDXComponent=!0},159:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),s=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=s.a.createContext({}),d=function(e){var n=s.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},u=function(e){var n=d(e.components);return s.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return s.a.createElement(s.a.Fragment,{},n)}},p=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(t),p=a,m=u["".concat(o,".").concat(p)]||u[p]||b[p]||r;return t?s.a.createElement(m,i({ref:n},l,{components:t})):s.a.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<r;l++)o[l]=t[l];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},160:function(e,n,t){var a;!function(){"use strict";var t={}.hasOwnProperty;function s(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var o=s.apply(null,a);o&&e.push(o)}else if("object"===r)for(var i in a)t.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(a=function(){return s}.apply(n,[]))||(e.exports=a)}()},162:function(e,n,t){"use strict";var a=t(0),s=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});n.a=s},166:function(e,n,t){"use strict";var a=t(0),s=t.n(a);n.a=function(e){return s.a.createElement("div",null,e.children)}},167:function(e,n,t){"use strict";t(25),t(19),t(20);var a=t(0),s=t.n(a),r=t(162);var o=function(){return Object(a.useContext)(r.a)},i=t(160),c=t.n(i),l=t(130),d=t.n(l),u=37,b=39;n.a=function(e){var n=e.block,t=e.children,r=e.defaultValue,i=e.values,l=e.groupId,p=o(),m=p.tabGroupChoices,j=p.setTabGroupChoices,O=Object(a.useState)(r),v=O[0],h=O[1];if(null!=l){var f=m[l];null!=f&&f!==v&&h(f)}var g=function(e){h(e),null!=l&&j(l,e)},N=[];return s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",{"tabs--block":n})},i.map((function(e){var n=e.value,t=e.label;return s.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":v===n,className:c()("tab-item",d.a.tabItem,{"tab-item--active":v===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:function(e){return function(e,n,t){switch(t.keyCode){case b:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case u:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(N,e.target,e)},onFocus:function(){return g(n)},onClick:function(){return g(n)}},t)}))),s.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter((function(e){return e.props.value===v}))[0]))}}}]);