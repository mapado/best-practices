(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(9),o=(n(0),n(157)),i={title:"Redux best practices"},c={id:"en/redux",title:"Redux best practices",description:"[_Version fran\xe7aise ici_](../fr/redux)",source:"@site/docs/en/redux.md",permalink:"/best-practices/docs/en/redux",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/en/redux.md",sidebar:"en",previous:{title:"Mapado Best practices",permalink:"/best-practices/docs/en"},next:{title:"Best practice ReactJS",permalink:"/best-practices/docs/en/react"}},s=[{value:"When to use Redux",id:"when-to-use-redux",children:[]},{value:"Libraries we use with Redux",id:"libraries-we-use-with-redux",children:[]},{value:"Redux Style Guide",id:"redux-style-guide",children:[]},{value:"State immutability",id:"state-immutability",children:[]},{value:"State initialization",id:"state-initialization",children:[]},{value:"Dispatch in actions",id:"dispatch-in-actions",children:[]},{value:"Data action status",id:"data-action-status",children:[]},{value:"Selector vs complex state",id:"selector-vs-complex-state",children:[]},{value:"List vs Map vs Collection",id:"list-vs-map-vs-collection",children:[]},{value:"Nesting state",id:"nesting-state",children:[]},{value:"Mono-state vs multi-state",id:"mono-state-vs-multi-state",children:[]}],l={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../fr/redux"}),Object(o.b)("em",{parentName:"a"},"Version fran\xe7aise ici"))),Object(o.b)("p",null,"At ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.mapado.com"}),"Mapado"),", we are using more and more React and Redux. As they are very permissive librairies, each developer has its own way of coding with them."),Object(o.b)("p",null,"We needed to standardize how we do it. It's now done!"),Object(o.b)("p",null,'This document is still "in progress", we are not necessarily sure of some of our choices, but they seem to be the best for us right now.'),Object(o.b)("p",null,"Moreover, we would welcome your comments if you have different use cases, either by opening ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mapado/best-practices/issues"}),"an issue"),"."),Object(o.b)("h3",{id:"when-to-use-redux"},"When to use Redux"),Object(o.b)("p",null,"Redux ",Object(o.b)("strong",{parentName:"p"},"MUST ONLY")," be used when there is need to share information between all application."),Object(o.b)("p",null,"React can already contain informations in its local state, and the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/context.html"}),"context API")," allow to share data in different components."),Object(o.b)("p",null,"Learn more: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367"}),'"You might not need Redux" by Dan Abramov'),"."),Object(o.b)("h3",{id:"libraries-we-use-with-redux"},"Libraries we use with Redux"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Selectors: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/reactjs/reselect"}),"reselect")),Object(o.b)("li",{parentName:"ul"},"Data structure: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://facebook.github.io/immutable-js/"}),"immutable-js")),Object(o.b)("li",{parentName:"ul"},"Middleware for async actions: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/gaearon/redux-thunk"}),"redux-thunk"))),Object(o.b)("h3",{id:"redux-style-guide"},"Redux Style Guide"),Object(o.b)("p",null,"Redux maintainers wrote the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://redux.js.org/style-guide/style-guide"}),"Redux Style Guide"),". This is the official style guide for writing Redux code. It is a really good guide to know how to architecture our code and which pattern to follow."),Object(o.b)("h3",{id:"state-immutability"},"State immutability"),Object(o.b)("p",null,"States ",Object(o.b)("strong",{parentName:"p"},"MUST")," be an immutable-js ",Object(o.b)("inlineCode",{parentName:"p"},"Map")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Record"),"."),Object(o.b)("p",null,"Redux mark as essential to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://redux.js.org/style-guide/style-guide#do-not-mutate-state"}),"not mutate state")),Object(o.b)("h3",{id:"state-initialization"},"State initialization"),Object(o.b)("p",null,'The "state" ',Object(o.b)("strong",{parentName:"p"},"SHOULD")," be initialized by default with every key it can use."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"It allows components props to be set every time, without having to test ",Object(o.b)("inlineCode",{parentName:"p"},"if null")," cases."),Object(o.b)("p",{parentName:"blockquote"},'It frees the "containers" to avoid code like this: ',Object(o.b)("inlineCode",{parentName:"p"},"state.foo.get('bar') || false"),".")),Object(o.b)("p",null,"We ",Object(o.b)("strong",{parentName:"p"},"CAN")," use an immutable ",Object(o.b)("inlineCode",{parentName:"p"},"Record")," to forbid any new key in the state, and to give us some syntaxic sugar (",Object(o.b)("inlineCode",{parentName:"p"},"state.foo.bar")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"state.foo.get('bar')"),")."),Object(o.b)("h4",{id:"removing-keys"},"Removing keys"),Object(o.b)("p",null,"We ",Object(o.b)("strong",{parentName:"p"},"MUST NOT")," delete key from state."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If we delete a key, we will be in the same case as mentioned before.")),Object(o.b)("p",null,"Prefer ",Object(o.b)("inlineCode",{parentName:"p"},"state.set('foo', false)"),", or ",Object(o.b)("inlineCode",{parentName:"p"},"state.set('foo', null)")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"state.remove('foo')"),"."),Object(o.b)("h3",{id:"dispatch-in-actions"},"Dispatch in actions"),Object(o.b)("p",null,"We ",Object(o.b)("strong",{parentName:"p"},"SHOULD NOT")," send too many ",Object(o.b)("inlineCode",{parentName:"p"},"dispatch")," in actions."),Object(o.b)("p",null,"We ",Object(o.b)("strong",{parentName:"p"},"SHOULD NOT")," send two successive ",Object(o.b)("inlineCode",{parentName:"p"},"dispatch")," if there is no need to refresh the view."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Calling ",Object(o.b)("inlineCode",{parentName:"p"},"dispatch")," will refresh React components.")),Object(o.b)("p",null,"This job is more suited for the reducer:"),Object(o.b)("p",null,"\ud83d\udc4e"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function reducer(state, action) {\n  switch (action.type) {\n    case 'FOO':\n      return foo(state, action.foo);\n    case 'BAR':\n      return bar(state, action.bar);\n  }\n}\n\nfunction simpleAction() {\n  return (dispatch) => {\n    dispatch({\n      type: 'FOO',\n      foo: 'foo',\n    });\n  };\n}\n\nfunction complexAction() {\n  return (dispatch) => {\n    dispatch({\n      type: 'FOO',\n      foo: 'foo',\n    });\n    dispatch({\n      type: 'BAR',\n      bar: 'bar',\n    });\n  };\n}\n")),Object(o.b)("p",null,"\ud83d\udc4d"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function reducer(state, action) {\n  switch (action.type) {\n    case 'FOO':\n      return foo(state, action.foo);\n    case 'FOO and BAR':\n      return fooAndBar(state, action.foo, action.bar);\n  }\n}\n\nfunction simpleAction() {\n  return (dispatch) => {\n    dispatch({\n      type: 'FOO',\n      foo: 'foo',\n    });\n  };\n}\n\nfunction complexAction() {\n  return (dispatch) => {\n    dispatch({\n      type: 'FOO and BAR',\n      foo: 'foo',\n      bar: 'bar',\n    });\n  };\n}\n")),Object(o.b)("p",null,"cf. ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://redux.js.org/style-guide/style-guide#avoid-dispatching-many-actions-sequentially"}),"Avoid Dispatching Many Actions Sequentially")),Object(o.b)("h3",{id:"data-action-status"},"Data action status"),Object(o.b)("p",null,"When we make an async call, we often need to know the state of this call (to display a loader or an error message, for example)."),Object(o.b)("p",null,'Let\'s call "data key" the key in which the data will be stored in our redux state once fetched.'),Object(o.b)("p",null,"We ",Object(o.b)("strong",{parentName:"p"},"COULD")," store the ",Object(o.b)("em",{parentName:"p"},"status")," of its data in another redux state key."),Object(o.b)("p",null,"The data key concerning the status ",Object(o.b)("strong",{parentName:"p"},"MUST")," have the following form: ",Object(o.b)("inlineCode",{parentName:"p"},"<data key>-<action>-<status>"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"-")," separator here does the same job as they do in BEM."),Object(o.b)("p",{parentName:"blockquote"},"As our states are immutable-js objects, using ",Object(o.b)("inlineCode",{parentName:"p"},"-")," here is not really inconvenient.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"<action>"),' is the name of the action performed on the data, for example "articleList-fetch-status".'),Object(o.b)("p",null,"The value ",Object(o.b)("strong",{parentName:"p"},"MUST")," be a ",Object(o.b)("inlineCode",{parentName:"p"},"Map")," containing a ",Object(o.b)("inlineCode",{parentName:"p"},"status")," key and an ",Object(o.b)("inlineCode",{parentName:"p"},"error")," key."),Object(o.b)("h4",{id:"value-of-the-status-key"},"Value of the ",Object(o.b)("inlineCode",{parentName:"h4"},"status")," key"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"status")," key value ",Object(o.b)("strong",{parentName:"p"},"SHOULD")," take one of the following value:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"null"),Object(o.b)("li",{parentName:"ul"},"IN_PROGRESS"),Object(o.b)("li",{parentName:"ul"},"SUCCEEDED"),Object(o.b)("li",{parentName:"ul"},"FAILED")),Object(o.b)("p",null,"It ",Object(o.b)("strong",{parentName:"p"},"CAN")," also take a custom value, for example:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"IN_PROGRESS_BOTTOM"),Object(o.b)("li",{parentName:"ul"},"IN_PROGRESS_TOP")),Object(o.b)("h4",{id:"value-of-the-error-key"},"Value of the ",Object(o.b)("inlineCode",{parentName:"h4"},"error")," key"),Object(o.b)("p",null,"The error ",Object(o.b)("strong",{parentName:"p"},"MUST")," be in the status object and its key must be ",Object(o.b)("inlineCode",{parentName:"p"},"error"),"."),Object(o.b)("p",null,"Its default value ",Object(o.b)("strong",{parentName:"p"},"MUST")," be ",Object(o.b)("inlineCode",{parentName:"p"},"null"),"."),Object(o.b)("p",null,"Its value ",Object(o.b)("strong",{parentName:"p"},"SHOULD")," be a string or an object."),Object(o.b)("p",null,"The error logic is managed in the component."),Object(o.b)("h4",{id:"special-case--performing-operations-on-a-list-item"},"Special case : performing operations on a list item"),Object(o.b)("p",null,"Operations on a list item ",Object(o.b)("strong",{parentName:"p"},"MUST")," follow the same logic, but ",Object(o.b)("strong",{parentName:"p"},"CAN")," be stored in a ",Object(o.b)("inlineCode",{parentName:"p"},"Map"),"."),Object(o.b)("p",null,"The keys of these ",Object(o.b)("inlineCode",{parentName:"p"},"Map")," ",Object(o.b)("strong",{parentName:"p"},"SHOULD")," be the concerned item id."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const state = {\n  ticketList: [],\n\n  'ticketList-fetch-status': {\n    status: 'SUCCEEDED',\n    error: null,\n  },\n\n  'ticketList-processingPrinting-status': {\n    8: {\n      status: 'IN_PROGRESS',\n      error: null,\n    },\n    9: {\n      status: 'ERROR',\n      error: 'No more paper',\n    },\n  },\n};\n")),Object(o.b)("h3",{id:"selector-vs-complex-state"},"Selector vs complex state"),Object(o.b)("p",null,"The state ",Object(o.b)("strong",{parentName:"p"},"SHOULD"),' be used to store "raw" datas.'),Object(o.b)("p",null,"A selector ",Object(o.b)("strong",{parentName:"p"},"SHOULD"),' be used to "group" / "filter" / "sort" in other words, "work" on raw datas to send them to the component.'),Object(o.b)("p",null,"You can check out the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/reactjs/reselect"}),"reselect")," documentation to find out about selectors."),Object(o.b)("p",null,"cf. ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://react-redux.js.org/using-react-redux/connect-mapstate#use-selector-functions-to-extract-and-transform-data"}),"Use Selector Functions to Extract and Transform Data")),Object(o.b)("h3",{id:"list-vs-map-vs-collection"},"List vs Map vs Collection"),Object(o.b)("p",null,"We ",Object(o.b)("strong",{parentName:"p"},"SHOULD")," suffix the key name by the type of data:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If it's an article ",Object(o.b)("inlineCode",{parentName:"li"},"List"),", the key should be named ",Object(o.b)("inlineCode",{parentName:"li"},"articleList"),"."),Object(o.b)("li",{parentName:"ul"},"If it's an article ",Object(o.b)("inlineCode",{parentName:"li"},"Map"),", the key should be named ",Object(o.b)("inlineCode",{parentName:"li"},"articleMap"),"."),Object(o.b)("li",{parentName:"ul"},"If it's a custom ",Object(o.b)("inlineCode",{parentName:"li"},"FooBarCollection")," object containing articles, the key should be named ",Object(o.b)("inlineCode",{parentName:"li"},"articleFooBarCollection"),".")),Object(o.b)("p",null,'We need to keep the naming of the "status" key like previously.'),Object(o.b)("p",null,"In our example, the status key will be named ",Object(o.b)("inlineCode",{parentName:"p"},"articleFooBarCollection-fetch-status"),"."),Object(o.b)("h3",{id:"nesting-state"},"Nesting state"),Object(o.b)("p",null,"The state ",Object(o.b)("strong",{parentName:"p"},"SHOULD NOT")," have more than one nesting level."),Object(o.b)("p",null,"\ud83d\udc4e"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"  article: {\n    items: [ /* some articles */ ],\n    'fetch-status': {\n      status: 'IN_PROGRESS',\n      error: null,\n    }\n  },\n  tag: {\n    items: [ /* some tags */ ],\n    'fetch-status': {\n      status: 'SUCCEEDED',\n      error: null,\n    }\n  },\n")),Object(o.b)("p",null,"\ud83d\udc4d"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"  articleList: [ /* some articles */ ],\n  'articleList-fetch-status': {\n    status: 'IN_PROGRESS',\n    error: null,\n  },\n  tagList: [ /* some tags */ ],\n  'tagList-fetch-status': {\n    status: 'SUCCEEDED',\n    error: null,\n  },\n")),Object(o.b)("h3",{id:"mono-state-vs-multi-state"},"Mono-state vs multi-state"),Object(o.b)("p",null,"We ",Object(o.b)("strong",{parentName:"p"},"SHOULD"),' have only one "state" in a simple application.'),Object(o.b)("p",null,"We ",Object(o.b)("strong",{parentName:"p"},"CAN")," split ",Object(o.b)("strong",{parentName:"p"},"functionally")," the states in a complex application."))}b.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return n?r.a.createElement(m,c({ref:t},l,{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);