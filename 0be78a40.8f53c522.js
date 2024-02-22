/*! For license information please see 0be78a40.8f53c522.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(9),r=(n(0),n(160)),o=n(165),c=n(164),s={title:"Guide de style"},l={id:"fr/style",title:"Guide de style",description:"## Comment est-ce qu'on \xe9crit une fonction (arrow function vs function declaration)",source:"@site/docs/fr/style.mdx",permalink:"/best-practices/docs/fr/style",editUrl:"https://github.com/mapado/best-practices/edit/master/docs/fr/style.mdx",sidebar:"fr",previous:{title:"Bonnes pratiques \xe0 Mapado",permalink:"/best-practices/docs/fr"},next:{title:"ReactJS",permalink:"/best-practices/docs/fr/react"}},u=[{value:"Comment est-ce qu&#39;on \xe9crit une fonction (arrow function vs function declaration)",id:"comment-est-ce-quon-\xe9crit-une-fonction-arrow-function-vs-function-declaration",children:[]},{value:"Constantes &amp; Enums",id:"constantes--enums",children:[]},{value:"Espacements entre les types de d\xe9clarations",id:"espacements-entre-les-types-de-d\xe9clarations",children:[]},{value:"&quot;Array destructuring&quot;",id:"array-destructuring",children:[]},{value:"Extension de fichier dans les imports",id:"extension-de-fichier-dans-les-imports",children:[]}],b={rightToc:u};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"comment-est-ce-quon-\xe9crit-une-fonction-arrow-function-vs-function-declaration"},"Comment est-ce qu'on \xe9crit une fonction (arrow function vs function declaration)"),Object(r.b)("p",null,'Javascript permet la d\xe9finition de "arrow functions". Bien qu\'ayant des ',Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"}),"diff\xe9rences non n\xe9gligeables")," avec leurs cons\u0153urs, on utilise l'une ou l'autre syntaxe en fonction des pr\xe9f\xe9rences personnelles."),Object(r.b)("p",null,"On DEVRAIT utiliser la d\xe9claration de fonction ",Object(r.b)("strong",{parentName:"p"},"seulement")," dans le cas o\xf9 la fonction est au premier niveau (comme souvent avec les utils ou les composants) :"),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Attention")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},'On ne DEVRAIT jamais avoir de d\xe9claration de fonction dans une d\xe9claration de fonction ! Une fois la d\xe9claration de fonction faite au premier niveau, les fonctions qu\'elle contient DEVRAIENT \xeatre des "arrow functions".'))),Object(r.b)(o.a,{defaultValue:"good",values:[{label:"Pas bien \ud83d\udc4e",value:"bad"},{label:"Bien \ud83d\udc4d",value:"good"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"bad",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="/src/utils/foo.js"',title:'"/src/utils/foo.js"'}),"function foo(callback) {\n  const value = callback();\n\n  function getUser() {\n    // Do something\n  }\n\n  if (value === true) {\n    getUser();\n  }\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="/src/components/Content.js"',title:'"/src/components/Content.js"'}),"function Content() {\n  function handleClick() {\n    // Do something\n  }\n\n  return <button onClick={handleClick}>DO NOT PRESS</button>;\n}\n"))),Object(r.b)(c.a,{value:"good",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="/src/utils/foo.js"',title:'"/src/utils/foo.js"'}),"function foo(callback) {\n  const value = callback();\n  const getUser = () => {\n    // Do something\n  };\n\n  if (value === true) {\n    getUser();\n  }\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="/src/components/Content.js"',title:'"/src/components/Content.js"'}),"function Content() {\n  const handleClick = () => {\n    // Do something\n  };\n\n  return <button onClick={handleClick}>DO NOT PRESS</button>;\n}\n")))),Object(r.b)("p",null,'On DEVRAIT utiliser les "arrow functions" dans tous les autres cas :'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'Dans des "callback" :')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"list\n  .map((entity) => entity.id)\n  .filter((id) => id > 5)\n  .some((id) => id % 2 === 0);\n\n<button onClick={() => setVisible(true)}>show</button>;\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Si sa d\xe9finition ne fait qu'une seule ligne, avec un seul retour possible :")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const isValid = (entity) => entity.itemList.some((item) => item.isValid);\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\xc0 lire aussi")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Le guide JavaScript de AirBnB ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/airbnb/javascript#arrow-functions"}),"sur les arrow functions")," donne des informations int\xe9ressantes sur la fa\xe7on d'utiliser les arrow functions. Ils d\xe9finissent pour leur part les cas suivants:"),Object(r.b)("blockquote",{parentName:"div"},Object(r.b)("p",{parentName:"blockquote"},'Lorsque vous devez utiliser des fonctions anonymes (comme pour passer une fonction de retour en-ligne), utilisez la notation "arrow-function"'),Object(r.b)("p",{parentName:"blockquote"},"Pourquoi ? Cela cr\xe9e une version de la fonction qui s'execute dans le contexte actuel (this), qui est habituellement ce que l'on souhaite, et la syntaxe est plus concise.")))),Object(r.b)("h2",{id:"constantes--enums"},"Constantes & Enums"),Object(r.b)("p",null,"On DEVRAIT utiliser des constantes lorsqu'on utilise une donn\xe9e simple (",Object(r.b)("inlineCode",{parentName:"p"},"string")," | ",Object(r.b)("inlineCode",{parentName:"p"},"number")," | ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"...) en tant que valeur de configuration (d'une fonction ou autre)."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const TIMEOUT_DELAY = 1000;\n\nsetTimeout(doSomething, TIMEOUT_DELAY);\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'const EVENT_DATE_BY_LIST = "list";\nconst EVENT_DATE_BY_DATE = "date";\n// ...\nconst [selectedTab, setSelectedTab] = useState(EVENT_DATE_BY_LIST);\n')),Object(r.b)("p",null,"Dans le cas o\xf9 plusieurs constantes sont utilis\xe9es \xe0 plusieurs endroits, on privil\xe9giera de les regrouper sous un ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/enums.html"}),"enum TypeScript"),". Cela rend \xe9galement le typage beaucoup plus simple."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'export enum MODULE_TYPE {\n  INFORMATION = "information",\n  RECOMMENDATION = "recommendation",\n  PROMOTE = "promote",\n}\n\nfunction generateModule(moduleType: MODULE_TYPE) {\n  if (moduleType === MODULE_TYPE.INFORMATION) {\n    // do something\n  }\n\n  // do something else\n}\n')),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Attention")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"On ",Object(r.b)("strong",{parentName:"p"},"DEVRAIT toujours assigner une valeur")," \xe0 la cl\xe9 de l'enum afin d'\xe9viter des effets ind\xe9sirables (voir pourquoi dans ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://blog.beraliv.dev/2022-09-10-with-or-without-enums#numeric-enums-are-not-type-safe"}),"cet article (En)"),")."))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Convention")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"On DEVRAIT \xe9crire les constantes de configuration et enums en MAJUSCULE."))),Object(r.b)("h2",{id:"espacements-entre-les-types-de-d\xe9clarations"},"Espacements entre les types de d\xe9clarations"),Object(r.b)("p",null,"Afin de gagner en lisibilit\xe9 dans la lecture du code, on DOIT ajouter une ligne vide au-dessus d'un type de d\xe9claration quand le pr\xe9c\xe9dent est diff\xe9rent."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'function Foo() {\n  const { t } = useTranslation();\n  const [loading, setLoading] = useState(true);\n  let name = "JD";\n\n  if (!loading) {\n    name = "Chris";\n  }\n\n  useEffect(() => {\n    const timeout = setTimeout(() => setLoading(false), 500);\n\n    return () => clearTimeout(timeout);\n  }, []);\n\n  if (loading) {\n    return <MpdLoader />;\n  }\n\n  return <div>{t("hello", { name })}</div>;\n}\n')),Object(r.b)("p",null,"Dans l'exemple ci-dessus, on remarque la construction suivante :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Un espace est pr\xe9sent entre les variables et le ",Object(r.b)("inlineCode",{parentName:"li"},"if")," ;"),Object(r.b)("li",{parentName:"ul"},"Un espace est pr\xe9sent entre le ",Object(r.b)("inlineCode",{parentName:"li"},"if")," et le ",Object(r.b)("inlineCode",{parentName:"li"},"useEffect")," ;"),Object(r.b)("li",{parentName:"ul"},"\xc0 l'int\xe9rieur du ",Object(r.b)("inlineCode",{parentName:"li"},"useEffect"),", un espace est pr\xe9sent entre la variable et le ",Object(r.b)("inlineCode",{parentName:"li"},"return")," ;"),Object(r.b)("li",{parentName:"ul"},"Un espace est pr\xe9sent entre le ",Object(r.b)("inlineCode",{parentName:"li"},"useEffect")," et le ",Object(r.b)("inlineCode",{parentName:"li"},"if")," ;"),Object(r.b)("li",{parentName:"ul"},"Le ",Object(r.b)("inlineCode",{parentName:"li"},"return")," dans le ",Object(r.b)("inlineCode",{parentName:"li"},"if")," n'a pas d'espacement car il est tout seul ;"),Object(r.b)("li",{parentName:"ul"},"Un espace est pr\xe9sent entre le ",Object(r.b)("inlineCode",{parentName:"li"},"if")," et le ",Object(r.b)("inlineCode",{parentName:"li"},"return")," ;")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Eslint")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"La r\xe8gle eslint ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://eslint.org/docs/latest/rules/padding-line-between-statements"}),"padding-line-between-statements")," est disponible sur les projets pour d\xe9tecter une erreur si ce sch\xe9ma n'est pas respect\xe9."))),Object(r.b)("h2",{id:"array-destructuring"},'"Array destructuring"'),Object(r.b)("p",null,"On ",Object(r.b)("strong",{parentName:"p"},"DEVRAIT"),' utiliser le "array destructuring" quand on affecte des variables'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"const [counter, setCounter] = useState(0);\n")),Object(r.b)("p",null,"On ne ",Object(r.b)("strong",{parentName:"p"},"DEVRAIT PAS")," utiliser le array destructuring si l'on n'a pas les mots cl\xe9s ",Object(r.b)("inlineCode",{parentName:"p"},"const")," ou ",Object(r.b)("inlineCode",{parentName:"p"},"let")," devant le tableau."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"let counter = 0;\n\n[counter] = generateCounter();\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Pourquoi ?")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Cette syntaxe est difficilement compr\xe9hensible car on ne comprends pas directement que l'on est en train d'affecter des variables (on dirait que l'on cr\xe9e un tableau)."))),Object(r.b)("h2",{id:"extension-de-fichier-dans-les-imports"},"Extension de fichier dans les imports"),Object(r.b)("p",null,"On ",Object(r.b)("strong",{parentName:"p"},"NE DEVRAIT PAS")," avoir le nom de l'extension dans les imports "),Object(r.b)(o.a,{defaultValue:"good",values:[{label:"Pas bien \ud83d\udc4e",value:"bad"},{label:"Bien \ud83d\udc4d",value:"good"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"bad",mdxType:"TabItem"},"```tsx import Component from './components.jsx'; ```"),Object(r.b)(c.a,{value:"good",mdxType:"TabItem"},"```tsx import Component from './components'; ```")))}d.isMDXComponent=!0},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,m=b["".concat(o,".").concat(p)]||b[p]||d[p]||r;return n?i.a.createElement(m,c({ref:t},l,{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},161:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var o=i.apply(null,a);o&&e.push(o)}else if("object"===r)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(a=function(){return i}.apply(t,[]))||(e.exports=a)}()},163:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=i},164:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){return i.a.createElement("div",null,e.children)}},165:function(e,t,n){"use strict";n(24),n(19),n(20);var a=n(0),i=n.n(a),r=n(163);var o=function(){return Object(a.useContext)(r.a)},c=n(161),s=n.n(c),l=n(130),u=n.n(l),b=37,d=39;t.a=function(e){var t=e.block,n=e.children,r=e.defaultValue,c=e.values,l=e.groupId,p=o(),m=p.tabGroupChoices,O=p.setTabGroupChoices,j=Object(a.useState)(r),f=j[0],v=j[1];if(null!=l){var g=m[l];null!=g&&g!==f&&v(g)}var N=function(e){v(e),null!=l&&O(l,e)},h=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":f===t,className:s()("tab-item",u.a.tabItem,{"tab-item--active":f===t}),key:t,ref:function(e){return h.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(h,e.target,e)},onFocus:function(){return N(t)},onClick:function(){return N(t)}},n)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===f}))[0]))}}}]);