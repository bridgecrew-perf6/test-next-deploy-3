(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(7057)}])},8418:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a=[],i=!0,u=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==t.return||t.return()}finally{if(u)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var a,i=(a=t(7294))&&a.__esModule?a:{default:a},u=t(6273),c=t(387),l=t(7190);var f={};function s(e,n,t,r){if(e&&u.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[n+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var n,t=!1!==e.prefetch,r=c.useRouter(),a=i.default.useMemo((function(){var n=o(u.resolveHref(r,e.href,!0),2),t=n[0],a=n[1];return{href:t,as:e.as?u.resolveHref(r,e.as):a||t}}),[r,e.href,e.as]),d=a.href,p=a.as,v=e.children,h=e.replace,y=e.shallow,b=e.scroll,m=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var _=(n=i.default.Children.only(v))&&"object"===typeof n&&n.ref,g=o(l.useIntersection({rootMargin:"200px"}),2),j=g[0],w=g[1],x=i.default.useCallback((function(e){j(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,j]);i.default.useEffect((function(){var e=w&&t&&u.isLocalURL(d),n="undefined"!==typeof m?m:r&&r.locale,o=f[d+"%"+p+(n?"%"+n:"")];e&&!o&&s(r,d,p,{locale:n})}),[p,d,w,m,t,r]);var E={ref:x,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,i,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(t))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:c,scroll:i}))}(e,r,d,p,h,y,b,m)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u.isLocalURL(d)&&s(r,d,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var O="undefined"!==typeof m?m:r&&r.locale,S=r&&r.isLocaleDomain&&u.getDomainLocale(p,O,r&&r.locales,r&&r.domainLocales);E.href=S||u.addBasePath(u.addLocale(p,O,r&&r.defaultLocale))}return i.default.cloneElement(n,E)};n.default=d},7190:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a=[],i=!0,u=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==t.return||t.return()}finally{if(u)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,t=e.rootMargin,r=e.disabled||!u,l=a.useRef(),f=o(a.useState(!1),2),s=f[0],d=f[1],p=o(a.useState(n?n.current:null),2),v=p[0],h=p[1],y=a.useCallback((function(e){l.current&&(l.current(),l.current=void 0),r||s||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,i=r.elements;return i.set(e,n),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{root:v,rootMargin:t}))}),[r,v,t,s]);return a.useEffect((function(){if(!u&&!s){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[s]),a.useEffect((function(){n&&h(n.current)}),[n]),[y,s]};var a=t(7294),i=t(9311),u="undefined"!==typeof IntersectionObserver;var c=new Map},7057:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return y}});var r=t(5893),o=t(3853),a=t.n(o),i=t(7911),u=t.n(i),c=t(1664);function l(){return(0,r.jsx)("nav",{className:u().nav,children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(c.default,{href:"/",children:"Home"})}),(0,r.jsx)("li",{children:(0,r.jsx)(c.default,{href:"/about",children:"About"})})]})})}var f=t(5606),s=t.n(f);function d(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)("h1",{className:s().title,children:[(0,r.jsx)("span",{children:"WebDev "})," News"]}),(0,r.jsx)("p",{className:s().description,children:"Keep up to date with the latest web dev news"})]})}var p=function(e){var n=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{}),(0,r.jsxs)("div",{className:a().container,children:[(0,r.jsx)(d,{}),(0,r.jsx)("main",{className:a().main,children:n})]})]})};t(906);function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){v(e,n,t[n])}))}return e}var y=function(e){var n=e.Component,t=e.pageProps;return(0,r.jsx)(p,{children:(0,r.jsx)(n,h({},t))})}},5606:function(e){e.exports={title:"Header_title__UlymB",description:"Header_description__YuMkT"}},3853:function(e){e.exports={container:"Layout_container__S4aNf",main:"Layout_main__c1pHS"}},7911:function(e){e.exports={nav:"Nav_nav__Bx_p6"}},906:function(){},1664:function(e,n,t){e.exports=t(8418)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(1780),n(387)}));var t=e.O();_N_E=t}]);