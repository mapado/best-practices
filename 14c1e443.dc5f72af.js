/*! For license information please see 14c1e443.dc5f72af.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(9),o=(n(0),n(160)),c=n(168),u=n(167),i={title:"React Router"},l={id:"fr/react-router",title:"React Router",description:"## Routing",source:"@site/docs/fr/react-router.mdx",permalink:"/best-practices/docs/fr/react-router",editUrl:"https://github.com/mapado/best-practices/edit/master/docs/fr/react-router.mdx",sidebar:"fr",previous:{title:"React-Redux",permalink:"/best-practices/docs/fr/react-redux"},next:{title:"Test JS & Front",permalink:"/best-practices/docs/fr/testing"}},s=[{value:"Routing",id:"routing",children:[]}],p={rightToc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"routing"},"Routing"),Object(o.b)("p",null,'En cas de besoin d\'un "bloc" partag\xe9 entre diff\xe9rentes pages (header, menu, etc.), on DEVRAIT encapsuler un "sous-router" dans un conteneur d\xe9di\xe9 \xe0 ces pages.'),Object(o.b)(c.a,{defaultValue:"good",values:[{label:"Pas bien \ud83d\udc4e",value:"bad"},{label:"Bien \ud83d\udc4d",value:"good"}],mdxType:"Tabs"},Object(o.b)(u.a,{value:"bad",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import { BrowserRouter, Route, Switch } from 'react-router-dom';\n\nconst ROUTE_CART_PROCEED = '/cart/:id/proceed';\nconst ROUTE_CART_REFUND = '/cart/:id/refund';\n\n<Router>\n  <Switch>\n    <Route exact path={ROUTE_CART_PROCEED}>\n      <CartDetail type=\"detail\" />\n    </Route>\n\n    <Route exact path={ROUTE_CART_REFUND}>\n      <CartDetail type=\"refund\" />\n    </Route>\n  </Switch>\n</Router>;\n\n// highlight-next-line\nfunction CartDetail({ type }) {\n  return (\n    <>\n      <CartHeader />\n\n      {/* highlight-start */}\n      {type === 'proceed' && <CartProceed />}\n      {type === 'refund' && <CartRefund />}\n      {/* highlight-end */}\n    </>\n  );\n}\n"))),Object(o.b)(u.a,{value:"good",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"{8-11,18-20}","{8-11,18-20}":!0}),"import { BrowserRouter, Route, Switch } from 'react-router-dom';\n\nconst ROUTE_CART_PROCEED = '/cart/:id/proceed';\nconst ROUTE_CART_REFUND = '/cart/:id/refund';\n\n<Router>\n  <Switch>\n    <Route exact path={[ROUTE_CART_PROCEED, ROUTE_CART_REFUND]}>\n      <CartContainer>\n        <Switch>\n          <Route exact path={ROUTE_CART_PROCEED}>\n            <CartProceed />\n          </Route>\n          <Route exact path={ROUTE_CART_REFUND}>\n            <CartRefund />\n          </Route>\n        </Switch>\n      </CartContainer>\n    </Route>\n  </Switch>\n</Router>;\n\nfunction CartContainer({ type, children }) {\n  return (\n    <>\n      <CartHeader />\n\n      {children}\n    </>\n  );\n}\n")))),Object(o.b)("p",null,'On PEUT aussi extraire tout le "sous-routeur" dans un composant sp\xe9cifique quand le nombre de route \xe0 g\xe9rer devient trop grand et que le module est autonome :'),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import { BrowserRouter, Route, Switch } from 'react-router-dom';\n\nconst ROUTE_CART_PROCEED = '/cart/:id/proceed';\nconst ROUTE_CART_REFUND = '/cart/:id/refund';\n\n<Router>\n  <Switch>\n    <Route exact path={[ROUTE_CART_PROCEED, ROUTE_CART_REFUND]}>\n      {/* highlight-next-line */}\n      <CartContainer />\n    </Route>\n  </Switch>\n</Router>;\n\nfunction CartContainer({ type }) {\n  return (\n    <>\n      <CartHeader />\n\n      {/* highlight-start */}\n      <Switch>\n        <Route exact path={ROUTE_CART_PROCEED}>\n          <CartProceed />\n        </Route>\n        <Route exact path={ROUTE_CART_REFUND}>\n          <CartRefund />\n        </Route>\n      </Switch>\n      {/* highlight-end */}\n    </>\n  );\n}\n")))}d.isMDXComponent=!0},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u({},t,{},e)),n},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,b=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?a.a.createElement(b,u({ref:t},l,{components:n})):a.a.createElement(b,u({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,c[1]=u;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},161:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var c=a.apply(null,r);c&&e.push(c)}else if("object"===o)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},163:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=a},167:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},168:function(e,t,n){"use strict";n(25),n(19),n(20);var r=n(0),a=n.n(r),o=n(163);var c=function(){return Object(r.useContext)(o.a)},u=n(161),i=n.n(u),l=n(130),s=n.n(l),p=37,d=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,u=e.values,l=e.groupId,f=c(),b=f.tabGroupChoices,R=f.setTabGroupChoices,m=Object(r.useState)(o),O=m[0],h=m[1];if(null!=l){var g=b[l];null!=g&&g!==O&&h(g)}var C=function(e){h(e),null!=l&&R(l,e)},E=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":t})},u.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":O===t,className:i()("tab-item",s.a.tabItem,{"tab-item--active":O===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(E,e.target,e)},onFocus:function(){return C(t)},onClick:function(){return C(t)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===O}))[0]))}}}]);