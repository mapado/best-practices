(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(9),s=(n(0),n(159)),l={title:"Redux"},c={id:"js/redux",title:"Redux",description:"\xc0 [Mapado](https://www.mapado.com), nous commen\xe7ons de plus en plus \xe0 travailler avec du React + Redux, et \xe9tant donn\xe9 que ce sont simplement des librairies assez permissives, chaque d\xe9veloppeur a un peu sa mani\xe8re de faire.",source:"@site/docs/js/redux.md",permalink:"/best-practices/docs/js/redux",editUrl:"https://github.com/mapado/best-practices/edit/master/docs/js/redux.md",sidebar:"js",previous:{title:"ReactJS",permalink:"/best-practices/docs/js/react"},next:{title:"React-Redux",permalink:"/best-practices/docs/js/react-redux"}},i=[{value:"Quand utiliser Redux",id:"quand-utiliser-redux",children:[]},{value:"Librairies utilis\xe9es avec Redux",id:"librairies-utilis\xe9es-avec-redux",children:[]},{value:"Le guide de bonne pratique de redux",id:"le-guide-de-bonne-pratique-de-redux",children:[]},{value:"Immutabilit\xe9 des states",id:"immutabilit\xe9-des-states",children:[]},{value:"Initialisation du &quot;state&quot;",id:"initialisation-du-state",children:[]},{value:"Dispatch dans les actions",id:"dispatch-dans-les-actions",children:[]},{value:"Statut des actions effectu\xe9es sur les donn\xe9es",id:"statut-des-actions-effectu\xe9es-sur-les-donn\xe9es",children:[]},{value:"S\xe9lecteur vs state complexe",id:"s\xe9lecteur-vs-state-complexe",children:[]},{value:"List vs Map vs Collection",id:"list-vs-map-vs-collection",children:[]},{value:"Profondeur du state",id:"profondeur-du-state",children:[]},{value:"Mono-state vs multi-state",id:"mono-state-vs-multi-state",children:[]}],o={rightToc:i};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"\xc0 ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.mapado.com"}),"Mapado"),", nous commen\xe7ons de plus en plus \xe0 travailler avec du React + Redux, et \xe9tant donn\xe9 que ce sont simplement des librairies assez permissives, chaque d\xe9veloppeur a un peu sa mani\xe8re de faire."),Object(s.b)("p",null,"Nous avions donc besoin de standardiser nos fa\xe7ons de faire. C'est chose faite !"),Object(s.b)("p",null,"Ce document est encore \xe0 approuver, nous ne sommes pas forc\xe9ment s\xfbrs de nos choix, mais ils nous parraissent \xe0 l'heure actuelle les plus pertinents dans notre cas."),Object(s.b)("p",null,"Nous sommes d'ailleurs tr\xe8s preneurs de retours sur ces sujets si vous avez des utilisations diff\xe9rentes, soit en ouvrant ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mapado/best-practices/issues"}),"une issue"),"."),Object(s.b)("h3",{id:"quand-utiliser-redux"},"Quand utiliser Redux"),Object(s.b)("p",null,"Redux ",Object(s.b)("strong",{parentName:"p"},"NE DOIT \xcaTRE")," utilis\xe9 que lorsqu'il y a un besoin global de partage \xe0 travers toute l'application."),Object(s.b)("p",null,"React permet d\xe9j\xe0 d'avoir des infos dans son state, et depuis quelques temps maintenant ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/context.html"}),"l'API contexte")," permet de partager efficacement les donn\xe9es entre composants."),Object(s.b)("p",null,"En savoir plus : ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367"}),'"You might not need Redux" par Dan Abramov'),"."),Object(s.b)("h3",{id:"librairies-utilis\xe9es-avec-redux"},"Librairies utilis\xe9es avec Redux"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"S\xe9lecteurs: ",Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/reactjs/reselect"}),"reselect")),Object(s.b)("li",{parentName:"ul"},"Structures de donn\xe9es: ",Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"https://facebook.github.io/immutable-js/"}),"immutable-js")),Object(s.b)("li",{parentName:"ul"},"Middleware pour actions asynchrones: ",Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/gaearon/redux-thunk"}),"redux-thunk"))),Object(s.b)("h3",{id:"le-guide-de-bonne-pratique-de-redux"},"Le guide de bonne pratique de redux"),Object(s.b)("p",null,"Redux propose le ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://redux.js.org/style-guide/style-guide"}),"Redux Style Guide"),' qui est leur guide "officiel" pour \xe9crire du code redux. C\'est un tr\xe8s bon guide pour savoir quelle approche utiliser et savoir comment architecturer son code.'),Object(s.b)("h3",{id:"immutabilit\xe9-des-states"},"Immutabilit\xe9 des states"),Object(s.b)("p",null,"Les states ",Object(s.b)("strong",{parentName:"p"},"DOIVENT")," \xeatre des ",Object(s.b)("inlineCode",{parentName:"p"},"Map")," ou des ",Object(s.b)("inlineCode",{parentName:"p"},"Record")," immutable-js."),Object(s.b)("p",null,"Redux marque comme essentiel le fait de ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://redux.js.org/style-guide/style-guide#do-not-mutate-state"}),'ne pas "muter" les states')),Object(s.b)("h3",{id:"initialisation-du-state"},'Initialisation du "state"'),Object(s.b)("p",null,'Le "state" ',Object(s.b)("strong",{parentName:"p"},"DEVRAIT")," \xeatre initialis\xe9 par d\xe9faut avec toutes les cl\xe9s qu'il peut utiliser."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},'Cela permet aux composants de toujours avoir leur valeurs "sett\xe9e" et de ne pas traiter les cas ',Object(s.b)("inlineCode",{parentName:"p"},"if null"),"."),Object(s.b)("p",{parentName:"blockquote"},'Cela permet aussi aux "containers" de ne pas avoir cette logique \xe0 g\xe9rer, par exemple : ',Object(s.b)("inlineCode",{parentName:"p"},"state.foo.get('bar') || false"),".")),Object(s.b)("p",null,"On ",Object(s.b)("strong",{parentName:"p"},"PEUT")," utiliser un ",Object(s.b)("inlineCode",{parentName:"p"},"Record")," immutable pour interdire tout ajout de nouvelle cl\xe9, et ainsi avoir du sucre syntaxique pour y acc\xe9der (",Object(s.b)("inlineCode",{parentName:"p"},"state.foo.bar")," plut\xf4t que ",Object(s.b)("inlineCode",{parentName:"p"},"state.foo.get('bar')"),")."),Object(s.b)("h4",{id:"suppression-de-cl\xe9"},"Suppression de cl\xe9"),Object(s.b)("p",null,"On ne ",Object(s.b)("strong",{parentName:"p"},"DOIT PAS")," supprimer de cl\xe9 du state."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Si l'on supprime une cl\xe9, on se retrouve dans le m\xeame cas que pr\xe9c\xe9dement.")),Object(s.b)("p",null,"Du coup : pr\xe9f\xe9rez ",Object(s.b)("inlineCode",{parentName:"p"},"state.set('foo', false)"),", ou ",Object(s.b)("inlineCode",{parentName:"p"},"state.set('foo', null)")," plut\xf4t que ",Object(s.b)("inlineCode",{parentName:"p"},"state.remove('foo')"),"."),Object(s.b)("h3",{id:"dispatch-dans-les-actions"},"Dispatch dans les actions"),Object(s.b)("p",null,"On ne ",Object(s.b)("strong",{parentName:"p"},"DEVRAIT PAS")," envoyer trop de ",Object(s.b)("inlineCode",{parentName:"p"},"dispatch")," dans les actions."),Object(s.b)("p",null,"On ne ",Object(s.b)("strong",{parentName:"p"},"DEVRAIT PAS")," envoyer deux dispatch successifs s'il n'y a pas besoin de rafra\xeechir la vue."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Un ",Object(s.b)("inlineCode",{parentName:"p"},"dispatch")," entraine un rafra\xeechissement des composants React.")),Object(s.b)("p",null,"C'est plut\xf4t au reducer de faire ce job:"),Object(s.b)("p",null,"\ud83d\udc4e"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{21-28}","{21-28}":!0}),"function reducer(state, action) {\n  switch (action.type) {\n    case 'FOO':\n      return foo(state, action.foo);\n    case 'BAR':\n      return bar(state, action.bar);\n  }\n}\n\nfunction simpleAction() {\n  return (dispatch) => {\n    dispatch({\n      type: 'FOO',\n      foo: 'foo',\n    });\n  };\n}\n\nfunction complexAction() {\n  return (dispatch) => {\n    dispatch({\n      type: 'FOO',\n      foo: 'foo',\n    });\n    dispatch({\n      type: 'BAR',\n      bar: 'bar',\n    });\n  };\n}\n")),Object(s.b)("p",null,"\ud83d\udc4d"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{21-25}","{21-25}":!0}),"function reducer(state, action) {\n  switch (action.type) {\n    case 'FOO':\n      return foo(state, action.foo);\n    case 'FOO and BAR':\n      return fooAndBar(state, action.foo, action.bar);\n  }\n}\n\nfunction simpleAction() {\n  return (dispatch) => {\n    dispatch({\n      type: 'FOO',\n      foo: 'foo',\n    });\n  };\n}\n\nfunction complexAction() {\n  return (dispatch) => {\n    dispatch({\n      type: 'FOO and BAR',\n      foo: 'foo',\n      bar: 'bar',\n    });\n  };\n}\n")),Object(s.b)("p",null,"cf. ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://redux.js.org/style-guide/style-guide#avoid-dispatching-many-actions-sequentially"}),"Avoid Dispatching Many Actions Sequentially")),Object(s.b)("h3",{id:"statut-des-actions-effectu\xe9es-sur-les-donn\xe9es"},"Statut des actions effectu\xe9es sur les donn\xe9es"),Object(s.b)("p",null,"Lors d'un appel asynchrone, nous avons souvent besoin de savoir l'\xe9tat de cet appel (pour afficher un loader ou un message d'erreur, par exemple)."),Object(s.b)("p",null,'Appelons "cl\xe9 de la donn\xe9e" la cl\xe9 dans le state redux o\xf9 sera stock\xe9e notre donn\xe9e une fois r\xe9cup\xe9r\xe9e.'),Object(s.b)("p",null,"Nous ",Object(s.b)("strong",{parentName:"p"},"POUVONS")," stocker le ",Object(s.b)("em",{parentName:"p"},"status")," de cette donn\xe9e sous une autre cl\xe9 dans notre state redux."),Object(s.b)("p",null,"La cl\xe9 de la donn\xe9e concernant le status ",Object(s.b)("strong",{parentName:"p"},"DOIT")," avoir la forme suivante : ",Object(s.b)("inlineCode",{parentName:"p"},"<cl\xe9 de la donn\xe9e>-<action>-status"),"."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Les ",Object(s.b)("inlineCode",{parentName:"p"},"-")," ont ici la m\xeame utilit\xe9 que dans BEM par exemple."),Object(s.b)("p",{parentName:"blockquote"},"\xc9tant donn\xe9 que nos states sont des objets immutable, l'utilisation d'un ",Object(s.b)("inlineCode",{parentName:"p"},"-")," n'est pas tr\xe8s g\xeanant.")),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"<action>")," est le nom de l'action \xe9tant effectu\xe9e sur la donn\xe9e, par exemple \u201carticleList-fetch-status\u201d."),Object(s.b)("p",null,"La valeur ",Object(s.b)("strong",{parentName:"p"},"DOIT")," \xeatre une Map contenant une cl\xe9 ",Object(s.b)("inlineCode",{parentName:"p"},"status")," et une cl\xe9 ",Object(s.b)("inlineCode",{parentName:"p"},"error"),"."),Object(s.b)("h4",{id:"valeur-de-la-cl\xe9-status"},"Valeur de la cl\xe9 ",Object(s.b)("inlineCode",{parentName:"h4"},"status")),Object(s.b)("p",null,"La valeur de ",Object(s.b)("inlineCode",{parentName:"p"},"status")," ",Object(s.b)("strong",{parentName:"p"},"DEVRAIT")," prendre les valeurs suivantes :"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"null"),Object(s.b)("li",{parentName:"ul"},"IN_PROGRESS"),Object(s.b)("li",{parentName:"ul"},"SUCCEEDED"),Object(s.b)("li",{parentName:"ul"},"FAILED")),Object(s.b)("p",null,"Elle ",Object(s.b)("strong",{parentName:"p"},"PEUT")," aussi prendre une valeur personnalis\xe9e, par exemple :"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"IN_PROGRESS_BOTTOM"),Object(s.b)("li",{parentName:"ul"},"IN_PROGRESS_TOP")),Object(s.b)("h4",{id:"valeur-de-la-cl\xe9-error"},"Valeur de la cl\xe9 ",Object(s.b)("inlineCode",{parentName:"h4"},"error")),Object(s.b)("p",null,"L\u2019erreur ",Object(s.b)("strong",{parentName:"p"},"DOIT")," se trouver dans l\u2019objet de status avec la cl\xe9 ",Object(s.b)("inlineCode",{parentName:"p"},"error"),"."),Object(s.b)("p",null,"Sa valeur par d\xe9faut ",Object(s.b)("strong",{parentName:"p"},"DOIT")," \xeatre ",Object(s.b)("inlineCode",{parentName:"p"},"null"),"."),Object(s.b)("p",null,"Sa valeur ",Object(s.b)("strong",{parentName:"p"},"DEVRAIT")," \xeatre une string ou un objet."),Object(s.b)("p",null,"C\u2019est au composant d\u2019avoir la logique de quoi faire en fonction de l\u2019erreur."),Object(s.b)("h4",{id:"cas-particulier--op\xe9rations-sur-les-items-dune-liste"},"Cas particulier : Op\xe9rations sur les items d\u2019une liste"),Object(s.b)("p",null,"Les op\xe9rations sur les items d\u2019une liste ",Object(s.b)("strong",{parentName:"p"},"DOIVENT")," suivre la m\xeame logique, mais ",Object(s.b)("strong",{parentName:"p"},"PEUVENT")," \xeatre stock\xe9es dans une ",Object(s.b)("inlineCode",{parentName:"p"},"Map"),"."),Object(s.b)("p",null,"Les cl\xe9s de cette ",Object(s.b)("inlineCode",{parentName:"p"},"Map")," ",Object(s.b)("strong",{parentName:"p"},"DEVRAIT")," \xeatre l'identifiant de l'item concern\xe9."),Object(s.b)("p",null,"Exemple:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const state = {\n  ticketList: [],\n\n  'ticketList-fetch-status': {\n    status: 'SUCCEEDED',\n    error: null,\n  },\n\n  'ticketList-processingPrinting-status': {\n    8: {\n      status: 'IN_PROGRESS',\n      error: null,\n    },\n    9: {\n      status: 'ERROR',\n      error: 'No more paper',\n    },\n  },\n};\n")),Object(s.b)("h3",{id:"s\xe9lecteur-vs-state-complexe"},"S\xe9lecteur vs state complexe"),Object(s.b)("p",null,"Le state ",Object(s.b)("strong",{parentName:"p"},"DEVRAIT")," \xeatre utilis\xe9 pour stocker les donn\xe9es brutes."),Object(s.b)("p",null,"Un s\xe9lecteur ",Object(s.b)("strong",{parentName:"p"},"DEVRAIT")," \xeatre utilis\xe9 pour \u201cgrouper\u201d / \u201cfiltrer\u201d / \u201ctrier\u201d, finalement \u201ctravailler\u201d sur les donn\xe9es brutes pour les envoyer au composant."),Object(s.b)("p",null,"Vous pouvez consulter la doc de ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/reactjs/reselect"}),"reselect")," pour plus d'informations sur les s\xe9lecteurs."),Object(s.b)("p",null,"cf. ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://react-redux.js.org/using-react-redux/connect-mapstate#use-selector-functions-to-extract-and-transform-data"}),"Use Selector Functions to Extract and Transform Data")),Object(s.b)("h3",{id:"list-vs-map-vs-collection"},"List vs Map vs Collection"),Object(s.b)("p",null,"On ",Object(s.b)("strong",{parentName:"p"},"DEVRAIT")," suffixer le nom de la cl\xe9 par le type de donn\xe9e."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Si c'est une ",Object(s.b)("inlineCode",{parentName:"li"},"List")," d'articles, la cl\xe9 devrait s'appeler ",Object(s.b)("inlineCode",{parentName:"li"},"articleList"),"."),Object(s.b)("li",{parentName:"ul"},"Si c'est une ",Object(s.b)("inlineCode",{parentName:"li"},"Map")," d'articles, la cl\xe9 devrait s'appeler ",Object(s.b)("inlineCode",{parentName:"li"},"articleMap"),"."),Object(s.b)("li",{parentName:"ul"},"Si c'est un objet custom ",Object(s.b)("inlineCode",{parentName:"li"},"FooBarCollection")," contenant des articles, la cl\xe9 devrait s'appeler ",Object(s.b)("inlineCode",{parentName:"li"},"articleFooBarCollection"),".")),Object(s.b)("p",null,'Il faut bien conserver le nommage de la cl\xe9 de "status" en fonction.'),Object(s.b)("p",null,"Dans notre dernier exemple, la cl\xe9 de status se nommera par exemple ",Object(s.b)("inlineCode",{parentName:"p"},"articleFooBarCollection-fetch-status"),"."),Object(s.b)("h3",{id:"profondeur-du-state"},"Profondeur du state"),Object(s.b)("p",null,"On ",Object(s.b)("strong",{parentName:"p"},"NE DEVRAIT PAS")," avoir plus d'un niveau dans le state."),Object(s.b)("p",null,"\ud83d\udc4e"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{1,3-6}","{1,3-6}":!0}),"  article: {\n    items: [ /* some articles */ ],\n    'fetch-status': {\n      status: 'IN_PROGRESS',\n      error: null,\n    }\n  },\n  tag: {\n    items: [ /* some tags */ ],\n    'fetch-status': {\n      status: 'SUCCEEDED',\n      error: null,\n    }\n  },\n")),Object(s.b)("p",null,"\ud83d\udc4d"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{2-5}","{2-5}":!0}),"  articleList: [ /* some articles */ ],\n  'articleList-fetch-status': {\n    status: 'IN_PROGRESS',\n    error: null,\n  },\n  tagList: [ /* some tags */ ],\n  'tagList-fetch-status': {\n    status: 'SUCCEEDED',\n    error: null,\n  },\n")),Object(s.b)("h3",{id:"mono-state-vs-multi-state"},"Mono-state vs multi-state"),Object(s.b)("p",null,"On ",Object(s.b)("strong",{parentName:"p"},"DEVRAIT"),' avoir un seul "state" dans le cas d\'une application simple.'),Object(s.b)("p",null,"On ",Object(s.b)("strong",{parentName:"p"},"PEUT")," avoir un d\xe9coupage ",Object(s.b)("strong",{parentName:"p"},"fonctionnel")," des states dans le cas d'une application complexe."))}u.isMDXComponent=!0},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),u=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||b[d]||s;return n?r.a.createElement(m,c({ref:t},o,{components:n})):r.a.createElement(m,c({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<s;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);