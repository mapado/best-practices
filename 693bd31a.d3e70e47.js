(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{147:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(2),c=r(9),a=(r(0),r(157)),i={title:"Mapado Best practices"},o={id:"en",title:"Mapado Best practices",description:"Here is a list of our best practices",source:"@site/docs/en.md",permalink:"/best-practices/docs/en",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/en.md",sidebar:"en",next:{title:"Redux best practices",permalink:"/best-practices/docs/en/redux"}},u=[{value:"Redux",id:"redux",children:[]},{value:"React",id:"react",children:[]},{value:"React-Redux",id:"react-redux",children:[]},{value:"JS / Frontend testing",id:"js--frontend-testing",children:[]}],l={rightToc:u};function b(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Here is a list of our best practices"),Object(a.b)("h2",{id:"redux"},"Redux"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"./redux"}),"Redux best practices"))),Object(a.b)("h2",{id:"react"},"React"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"./react"}),"React best practices"))),Object(a.b)("h2",{id:"react-redux"},"React-Redux"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"./react-redux"}),"React-redux best practices"))),Object(a.b)("h2",{id:"js--frontend-testing"},"JS / Frontend testing"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"./testing"}),"JS & Frontend Testing best practices"))))}b.isMDXComponent=!0},157:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=c.a.createContext({}),b=function(e){var t=c.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},p=function(e){var t=b(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=b(r),d=n,f=p["".concat(i,".").concat(d)]||p[d]||s[d]||a;return r?c.a.createElement(f,o({ref:t},l,{components:r})):c.a.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<a;l++)i[l]=r[l];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);