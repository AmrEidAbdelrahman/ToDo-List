(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(3678)}])},8045:function(t,n,e){"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,i=[],c=!0,a=!1;try{for(e=e.call(t);!(c=(r=e.next()).done)&&(i.push(r.value),!n||i.length!==n);c=!0);}catch(u){a=!0,o=u}finally{try{c||null==e.return||e.return()}finally{if(a)throw o}}return i}}(t,n)||a(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||a(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,n){if(t){if("string"===typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}var u,l=function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,e):{};r.get||r.set?Object.defineProperty(n,e,r):n[e]=t[e]}return n.default=t,n}(e(7294)),s=(u=e(5443))&&u.__esModule?u:{default:u},f=e(5809),d=e(7190),h=e(9977);function p(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function g(t){for(var n=arguments,e=function(e){var r=null!=n[e]?n[e]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),o.forEach((function(n){p(t,n,r[n])}))},r=1;r<arguments.length;r++)e(r);return t}var m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"},y=new Set,v=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var b=new Map([["default",function(t){var n=t.config,e=t.src,r=t.width,o=t.quality;0;if(e.endsWith(".svg")&&!n.dangerouslyAllowSVG)return e;return"".concat(n.path,"?url=").concat(encodeURIComponent(e),"&w=").concat(r,"&q=").concat(o||75)}],["imgix",function(t){var n=t.config,e=t.src,r=t.width,o=t.quality,i=new URL("".concat(n.path).concat(O(e))),c=i.searchParams;c.set("auto",c.get("auto")||"format"),c.set("fit",c.get("fit")||"max"),c.set("w",c.get("w")||r.toString()),o&&c.set("q",o.toString());return i.href}],["cloudinary",function(t){var n=t.config,e=t.src,r=t.width,o=t.quality,i=["f_auto","c_limit","w_"+r,"q_"+(o||"auto")].join(",")+"/";return"".concat(n.path).concat(i).concat(O(e))}],["akamai",function(t){var n=t.config,e=t.src,r=t.width;return"".concat(n.path).concat(O(e),"?imwidth=").concat(r)}],["custom",function(t){var n=t.src;throw new Error('Image with src "'.concat(n,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function w(t){return void 0!==t.default}function A(t){var n=t.config,e=t.src,r=t.unoptimized,o=t.layout,i=t.width,a=t.quality,u=t.sizes,l=t.loader;if(r)return{src:e,srcSet:void 0,sizes:void 0};var s=function(t,n,e,r){var o=t.deviceSizes,i=t.allSizes;if(r&&("fill"===e||"responsive"===e)){for(var a,u=/(^|\s)(1?\d?\d)vw/g,l=[];a=u.exec(r);a)l.push(parseInt(a[2]));if(l.length){var s,f=.01*(s=Math).min.apply(s,c(l));return{widths:i.filter((function(t){return t>=o[0]*f})),kind:"w"}}return{widths:i,kind:"w"}}return"number"!==typeof n||"fill"===e||"responsive"===e?{widths:o,kind:"w"}:{widths:c(new Set([n,2*n].map((function(t){return i.find((function(n){return n>=t}))||i[i.length-1]})))),kind:"x"}}(n,i,o,u),f=s.widths,d=s.kind,h=f.length-1;return{sizes:u||"w"!==d?u:"100vw",srcSet:f.map((function(t,r){return"".concat(l({config:n,src:e,quality:a,width:t})," ").concat("w"===d?t:r+1).concat(d)})).join(", "),src:l({config:n,src:e,quality:a,width:f[h]})}}function j(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function S(t){var n,e=(null===(n=t.config)||void 0===n?void 0:n.loader)||"default",r=b.get(e);if(r)return r(t);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(e))}function O(t){return"/"===t[0]?t.slice(1):t}},7190:function(t,n,e){"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,i=[],c=!0,a=!1;try{for(e=e.call(t);!(c=(r=e.next()).done)&&(i.push(r.value),!n||i.length!==n);c=!0);}catch(u){a=!0,o=u}finally{try{c||null==e.return||e.return()}finally{if(a)throw o}}return i}}(t,n)||function(t,n){if(!t)return;if("string"===typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return r(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(t){var n=t.rootRef,e=t.rootMargin,r=t.disabled||!a,s=i.useRef(),f=o(i.useState(!1),2),d=f[0],h=f[1],p=o(i.useState(n?n.current:null),2),g=p[0],m=p[1],y=i.useCallback((function(t){s.current&&(s.current(),s.current=void 0),r||d||t&&t.tagName&&(s.current=function(t,n,e){var r=function(t){var n,e={root:t.root||null,margin:t.rootMargin||""},r=l.find((function(t){return t.root===e.root&&t.margin===e.margin}));r?n=u.get(r):(n=u.get(e),l.push(e));if(n)return n;var o=new Map,i=new IntersectionObserver((function(t){t.forEach((function(t){var n=o.get(t.target),e=t.isIntersecting||t.intersectionRatio>0;n&&e&&n(e)}))}),t);return u.set(e,n={id:e,observer:i,elements:o}),n}(e),o=r.id,i=r.observer,c=r.elements;return c.set(t,n),i.observe(t),function(){if(c.delete(t),i.unobserve(t),0===c.size){i.disconnect(),u.delete(o);var n=l.findIndex((function(t){return t.root===o.root&&t.margin===o.margin}));n>-1&&l.splice(n,1)}}}(t,(function(t){return t&&h(t)}),{root:g,rootMargin:e}))}),[r,g,e,d]);return i.useEffect((function(){if(!a&&!d){var t=c.requestIdleCallback((function(){return h(!0)}));return function(){return c.cancelIdleCallback(t)}}}),[d]),i.useEffect((function(){n&&m(n.current)}),[n]),[y,d]};var i=e(7294),c=e(9311),a="undefined"!==typeof IntersectionObserver;var u=new Map,l=[]},3678:function(t,n,e){"use strict";e.r(n),e.d(n,{__N_SSG:function(){return a}});var r=e(5893),o=(e(9008),e(5675),e(7294)),i=e(214),c=e.n(i),a=!0;n.default=function(t){var n=t.Tasks,e=(0,o.useState)(n),i=e[0],a=e[1],u=(0,o.useState)(!1),l=u[0],s=u[1],f=(0,o.useState)(null),d=f[0],h=f[1],p=(0,o.useState)(null),g=p[0],m=p[1],y=(0,o.useRef)(),v=function(){fetch("http://127.0.0.1:8000/api/tasks/").then((function(t){if(!t.ok)throw Error("There is something wrone");return t.json()})).then((function(t){console.log("fetching...",t),a(t)})).catch((function(t){"AbortError"===!t.name?console.log("fetching an Error"):console.log("fetch aborted")}))},b=function(t){console.log("Done");var n="http://127.0.0.1:8000/api/task-doneUndone/".concat(t,"/");fetch(n,{method:"PUT",headers:{"Content-type":"application/json"}}).then((function(t){console.log(t),y.current.value="",console.log(t.status)})).then((function(){return v()}))};return(0,r.jsx)("div",{className:c().container,children:(0,r.jsxs)("div",{className:c().tasksBody,children:[(0,r.jsxs)("form",{className:"row mb-5",onSubmit:function(t){t.preventDefault();var n=null;l?(console.log("updated"),console.log({content:d}),n="http://127.0.0.1:8000/api/task/".concat(g.id,"/"),console.log(n),fetch(n,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify({content:d})}).then((function(t){console.log(t),console.log("Updated successfully"),s(!1),y.current.value=""})).then((function(){return v()}))):(console.log("added"),console.log(d),n="http://127.0.0.1:8000/api/tasks/",console.log(n),fetch(n,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({content:d})}).then((function(t){console.log(t),console.log("Added successfully"),y.current.value=""})).then((function(){return v()})))},children:[(0,r.jsx)("div",{className:"col-8",children:(0,r.jsx)("input",{className:"form-control form-control",type:"text","aria-label":".form-control-lg example",ref:y,onChange:function(t){return function(t){0===t.target.value.length&&s(!1),h(t.target.value)}(t)}})}),(0,r.jsx)("div",{className:"col-3",children:(0,r.jsxs)("button",{className:"btn btn-primary d-inline",children:[l&&"Update",!l&&"ADD"]})})]}),(0,r.jsx)("div",{children:i.map((function(t){return(0,r.jsxs)("div",{className:"mt-3 row",children:[t.done?(0,r.jsx)("p",{className:"d-inline col-8 text-decoration-line-through",onClick:function(){return b(t.id)},children:t.content}):(0,r.jsx)("p",{className:"d-inline col-8",onClick:function(){return b(t.id)},children:t.content}),(0,r.jsx)("div",{className:"col-2",children:(0,r.jsx)("button",{className:"btn btn-primary mr-5",onClick:function(){return function(t){s(!0),h(t.id),m(t),y.current.focus(),y.current.value=t.content}(t)},children:"Edit"})}),(0,r.jsx)("div",{className:"col-2",children:(0,r.jsx)("button",{className:"btn btn-danger ml-2 float-right",onClick:function(){return function(t){console.log("Deleted");var n="http://127.0.0.1:8000/api/task/".concat(t,"/");fetch(n,{method:"DELETE",headers:{"Content-type":"application/json"},body:JSON.stringify(g)}).then((function(n){console.log(n),console.log("deleted successfully"),y.current.value="",console.log(n.status),204===n.status&&(console.log(n.status),a((function(n){return n.filter((function(n){return n.id!==t}))})))})).then((function(){return v()}))}(t.id)},children:" - "})})]},t.id)}))})]})})}},214:function(t){t.exports={tasksBody:"Home_tasksBody__mbDAN"}},9008:function(t,n,e){e(5443)},5675:function(t,n,e){e(8045)}},function(t){t.O(0,[774,888,179],(function(){return n=8581,t(t.s=n);var n}));var n=t.O();_N_E=n}]);