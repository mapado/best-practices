(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{136:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(9),o=(r(0),r(161)),c={title:"Pull request"},i={id:"common/pull-request",title:"Pull request",description:"Une pull request doit respecter les r\xe8gles suivantes avant d'\xeatre merg\xe9e :",source:"@site/docs/common/pull-request.md",permalink:"/best-practices/docs/common/pull-request",editUrl:"https://github.com/mapado/best-practices/edit/master/docs/common/pull-request.md",sidebar:"common",previous:{title:"Bonne pratiques g\xe9n\xe9rales",permalink:"/best-practices/docs/common"}},s=[{value:"Statuts des reviews",id:"statuts-des-reviews",children:[]}],l={rightToc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Une pull request doit respecter les r\xe8gles suivantes avant d'\xeatre merg\xe9e :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"2 reviewers minimum (cas exceptionnel : pompier urgent ou upgrade de package) sans contrainte de dur\xe9e"),Object(o.b)("li",{parentName:"ul"},"Favoriser les PR de - de 1000 lignes (avec tests) / 600 lignes de code pur")),Object(o.b)("p",null,"NB : en cas d'absence de review, c'est \xe0 l'auteur de la PR de relancer. Si l'\xe9quipe concern\xe9e ne review pas la PR rapidement, le remonter au point tech en rappelant la responsabilit\xe9 collective de la review."),Object(o.b)("h3",{id:"statuts-des-reviews"},"Statuts des reviews"),Object(o.b)("h4",{id:"approved"},"Approved"),Object(o.b)("p",null,"La PR est valid\xe9e, la relecture peut contenir des commentaires et suggestions qui PEUVENT \xeatre pris en compte."),Object(o.b)("h4",{id:"request-changes"},"Request Changes"),Object(o.b)("p",null,"La PR est rejet\xe9e. Le rejet comporte des commentaires qui DOIVENT \xeatre pris en compte."),Object(o.b)("p",null,"Une fois la PR corrig\xe9e, l'auteur DOIT \"re-request\" les reviewers. Si une PR comporte au moins 1 rejet, elle NE DOIT PAS \xeatre merg\xe9e en l'\xe9tat."),Object(o.b)("h4",{id:"comment"},"Comment"),Object(o.b)("p",null,"PEUT exister dans le cas de question qui m\xe9rite des \xe9changes, mais dans l'id\xe9al NE DEVRAIT PAS exister. Chaque PR relue DEVRAIT \xeatre valid\xe9e ou rejet\xe9e."))}u.isMDXComponent=!0},161:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?a.a.createElement(b,i({ref:t},l,{components:r})):a.a.createElement(b,i({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);