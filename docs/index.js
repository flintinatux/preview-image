!function i(u,a,f){function c(t,e){if(!a[t]){if(!u[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(l)return l(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var o=a[t]={exports:{}};u[t][0].call(o.exports,function(e){return c(u[t][1][e]||e)},o,o.exports,i,u,a,f)}return a[t].exports}for(var l="function"==typeof require&&require,e=0;e<f.length;e++)c(f[e]);return c}({1:[function(e,t,n){t.exports=function(o,a){if("string"==typeof o){var e=o;if(!(o=window.document.querySelector(o)))throw new Error('"'+e+'" does not match any HTML elements')}if(!o)throw new Error('"'+o+'" is not a valid HTML element');"function"==typeof a&&(a={onDrop:a});var f;return o.addEventListener("dragenter",t,!1),o.addEventListener("dragover",n,!1),o.addEventListener("dragleave",r,!1),o.addEventListener("drop",i,!1),function(){c(),o.removeEventListener("dragenter",t,!1),o.removeEventListener("dragover",n,!1),o.removeEventListener("dragleave",r,!1),o.removeEventListener("drop",i,!1)};function t(e){return a.onDragEnter&&a.onDragEnter(e),e.stopPropagation(),e.preventDefault(),!1}function n(e){if(e.stopPropagation(),e.preventDefault(),a.onDragOver&&a.onDragOver(e),e.dataTransfer.items){var t=Array.from(e.dataTransfer.items),n=t.filter(function(e){return"file"===e.kind}),r=t.filter(function(e){return"string"===e.kind});if(0===n.length&&!a.onDropText)return;if(0===r.length&&!a.onDrop)return;if(0===n.length&&0===r.length)return}return o.classList.add("drag"),clearTimeout(f),!(e.dataTransfer.dropEffect="copy")}function r(e){return e.stopPropagation(),e.preventDefault(),a.onDragLeave&&a.onDragLeave(e),clearTimeout(f),f=setTimeout(c,50),!1}function i(e){e.stopPropagation(),e.preventDefault(),a.onDragLeave&&a.onDragLeave(e),clearTimeout(f),c();var i={x:e.clientX,y:e.clientY},t=e.dataTransfer.getData("text");if(t&&a.onDropText&&a.onDropText(t,i),a.onDrop&&e.dataTransfer.items){var u=e.dataTransfer.files,n=Array.from(e.dataTransfer.items).filter(function(e){return"file"===e.kind});if(0===n.length)return;s(n.map(function(t){return function(e){!function(n,r){var t=[];if(n.isFile)n.file(function(e){e.fullPath=n.fullPath,e.isFile=!0,e.isDirectory=!1,r(null,e)},function(e){r(e)});else if(n.isDirectory){var e=n.createReader();o()}function o(){e.readEntries(function(e){0<e.length?(t=t.concat(Array.from(e)),o()):s(t.map(function(t){return function(e){d(t,e)}}),function(e,t){e?r(e):(t.push({fullPath:n.fullPath,name:n.name,isFile:!1,isDirectory:!0}),r(null,t))})})}}(t.webkitGetAsEntry(),e)}}),function(e,t){if(e)throw e;var n=l(t),r=n.filter(function(e){return e.isFile}),o=n.filter(function(e){return e.isDirectory});a.onDrop(r,i,u,o)})}return!1}function c(){o.classList.remove("drag")}};var l=e("flatten"),s=e("run-parallel");function d(n,r){var t=[];if(n.isFile){n.file(function(e){e.fullPath=n.fullPath;e.isFile=true;e.isDirectory=false;r(null,e)},function(e){r(e)})}else if(n.isDirectory){var e=n.createReader();o()}function o(){e.readEntries(function(e){if(e.length>0){t=t.concat(Array.from(e));o()}else{i()}})}function i(){s(t.map(function(t){return function(e){d(t,e)}}),function(e,t){if(e){r(e)}else{t.push({fullPath:n.fullPath,name:n.name,isFile:false,isDirectory:true});r(null,t)}})}}},{flatten:2,"run-parallel":17}],2:[function(e,t,n){t.exports=function(e,o){return(o="number"==typeof o?o:1/0)?function n(e,r){return e.reduce(function(e,t){return Array.isArray(t)&&r<o?e.concat(n(t,r+1)):e.concat(t)},[])}(e,1):Array.isArray(e)?e.map(function(e){return e}):e}},{}],3:[function(e,t,n){var r,o,i=t.exports={};function u(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function f(t){if(r===setTimeout)return setTimeout(t,0);if((r===u||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:u}catch(e){r=u}try{o="function"==typeof clearTimeout?clearTimeout:a}catch(e){o=a}}();var c,l=[],s=!1,d=-1;function p(){s&&c&&(s=!1,c.length?l=c.concat(l):d=-1,l.length&&v())}function v(){if(!s){var e=f(p);s=!0;for(var t=l.length;t;){for(c=l,l=[];++d<t;)c&&c[d].run();d=-1,t=l.length}c=null,s=!1,function(t){if(o===clearTimeout)return clearTimeout(t);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(t);try{o(t)}catch(e){try{return o.call(null,t)}catch(e){return o.call(this,t)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}i.nextTick=function(e){var t=arguments,n=new Array(arguments.length-1);if(1<arguments.length)for(var r=1;r<arguments.length;r++)n[r-1]=t[r];l.push(new m(e,n)),1!==l.length||s||f(v)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},{}],4:[function(e,t,n){var r=e("snabbdom/h").default;r.action=e("./lib/action"),r.error=e("./lib/error"),r.handle=e("./lib/handle"),r.mount=e("./lib/mount"),t.exports=r},{"./lib/action":5,"./lib/error":7,"./lib/handle":9,"./lib/mount":12,"snabbdom/h":18}],5:[function(e,t,n){var r=e("tinyfunk").curry;t.exports=r(function(e,t){return{type:e,payload:t}})},{tinyfunk:30}],6:[function(e,t,n){var r=e("tinyfunk"),o=r.curryN,i=r.mapObj;t.exports=o(3,function(e,n,r){return void 0===n&&(n={}),i(function(e,t){return e(n[t],r)},e)})},{tinyfunk:30}],7:[function(e,t,n){var r=e("tinyfunk").curry;t.exports=r(function(e,t){return{type:e,payload:t,error:!0}})},{tinyfunk:30}],8:[function(e,t,n){t.exports=function(){return location.pathname+location.search}},{}],9:[function(e,t,n){var r=e("tinyfunk").curry;t.exports=r(function(i,u){return function(e,t){void 0===e&&(e=i);var n=t.type,r=t.payload,o=t.error;return u[n]?u[n](e,r,o):e}})},{tinyfunk:30}],10:[function(t,e,n){var r=t("snabbdom"),o=t("./link");e.exports=function(e){return r.init([e.route?o(e):{},t("snabbdom/modules/attributes").default,t("snabbdom/modules/class").default,t("snabbdom/modules/dataset").default,t("snabbdom/modules/eventlisteners").default,t("snabbdom/modules/props").default,t("snabbdom/modules/style").default])}},{"./link":11,snabbdom:27,"snabbdom/modules/attributes":21,"snabbdom/modules/class":22,"snabbdom/modules/dataset":23,"snabbdom/modules/eventlisteners":24,"snabbdom/modules/props":25,"snabbdom/modules/style":26}],11:[function(e,t,n){var r=e("tinyfunk"),o=r.assocPath,i=r.compose,u=r.converge,a=r.curry,f=r.curryN,c=r.identity,l=r.merge,s=r.unless,d=e("./fullPath"),p=new RegExp("//(?!"+location.host+")","i"),v=/(?:https?:)?\/\/[^\/]+/i,m=a(function(e,t){t.preventDefault();var n=e.attrs.href.replace(v,"")||"/";n!==d()&&e.actions.route.go(n)}),h=a(function(e,t){return t.button||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||"_blank"===e.attrs.target||p.test(e.attrs.href)}),y=f(2,function(e,t,n){var r=(n=n||t).data.attrs;r&&r.href&&(n.data=i(b,l({actions:e}))(n.data))}),g=u(s,[h,m]),b=u(o(["on","click"]),[g,c]);t.exports=function(e){var t=y(e);return{create:t,destroy:t,update:t}}},{"./fullPath":8,tinyfunk:30}],12:[function(n,r,e){(function(e){var k=n("snabbdom/h").default,t=n("tinyfunk"),T=t.apply,E=t.compose,P=t.identity,D=t.map,A=t.mapObj,L=t.merge,_=t.prepend,O=t.tap,C=t.thrush,N=n("./combine"),j=n("./fullPath"),M=n("./init"),S=n("./route"),R=n("./throttle"),B=n("./thunk"),F=e.__REDUX_DEVTOOLS_EXTENSION__,q=function(t){return function(e){return"function"==typeof e?E(t,e):A(q(t),e)}};r.exports=function(e){var t=e.actions;void 0===t&&(t={});var n=e.dev;void 0===n&&(n=!0);var r=e.middleware;void 0===r&&(r=[]);var o=e.reducers;void 0===o&&(o={});var i=e.root,u=e.routes,a=e.view,f=P,c=P,l=!0,s=O(function(e){return l&&w(e)});if(u){var d=S(u);t=L(t,d.actions),f=E(s,t.route.back,j),o=L(o,d.reducers),a=d.view,addEventListener("popstate",f)}var p=N(o),v=p(void 0,{}),m=function(){return v},h=A(q(s),t),y=M(h),g=R(function(){i=y(i,a(h,v))}),b=n&&F&&F.connect();b&&(b.init(v),c=b.subscribe(function(e){"DISPATCH"===e.type&&(v=JSON.parse(e.state),g())}));var x={dispatch:s,getState:m},w=T(E)(D(C(x),_(B,r)))(function(e){v=p(v,e),g(),b&&b.send(e,v)});return g(),{dispatch:s,getState:m,teardown:function(){y(i,k("div")),removeEventListener("popstate",f),c(),l=!1}}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./combine":6,"./fullPath":8,"./init":10,"./route":13,"./throttle":14,"./thunk":15,"snabbdom/h":18,tinyfunk:30}],13:[function(e,t,n){var o=e("snabbdom/h").default,r=e("tinyfunk"),i=r.curry,u=r.match,a=r.replace,f=r.zipObj,c=e("./action"),l=e("./fullPath"),s=e("./handle"),d="puddles/route/BACK",p="puddles/route/GO",v=c(d),m=c(p),h=i(function(e,t,n){for(var r in e){var o=u(g(r),n);if(o.length){var i=u(/:[^\/]+/g,r).map(a(/:|\./g,""));return{params:f(i,o.slice(1).map(decodeURIComponent)),path:n,pattern:r}}}return console.error("Route not found: %s",n),t}),y=i(function(e,t,n){return history.pushState({},"",n),h(e,t,n)}),g=function(e){return new RegExp("^"+e.replace(/:[^\/]+?\+/g,"(.*?)").replace(/:[^\/]+/g,"([^\\/]+)")+"/?$")},b=i(function(e,t,n){var r=n.route.pattern;return o("div#root",[r?e[r](t,n):""])});t.exports=i(function(e){var t,n=h(e,{},l()),r=s(n,((t={})[d]=h(e),t[p]=y(e),t));return{actions:{route:{back:v,go:m}},reducers:{route:r},view:b(e)}})},{"./action":5,"./fullPath":8,"./handle":9,"snabbdom/h":18,tinyfunk:30}],14:[function(e,t,n){(function(e){var i=e.requestAnimationFrame||e.setTimeout;t.exports=function(e){var n,r=!1,o=function(){e.apply(null,n),r=!1};return function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];n=e,r||(i(o,1e3/60),r=!0)}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],15:[function(e,t,n){var r=e("tinyfunk").curry;t.exports=r(function(e,t,n){var r=e.dispatch,o=e.getState;"function"==typeof n?n(r,o):t(n)})},{tinyfunk:30}],16:[function(e,t,n){t.exports=function(n){return function(t){return function(e){"function"!=typeof e.map?t(e):e.map(n.dispatch)}}}},{}],17:[function(e,t,n){(function(f){t.exports=function(e,n){var r,o,t,i=!0;o=Array.isArray(e)?(r=[],e.length):(t=Object.keys(e),r={},t.length);function u(e){function t(){n&&n(e,r),n=null}i?f.nextTick(t):t()}function a(e,t,n){r[e]=n,(0==--o||t)&&u(t)}o?t?t.forEach(function(n){e[n](function(e,t){a(n,e,t)})}):e.forEach(function(e,n){e(function(e,t){a(n,e,t)})}):u(null);i=!1}}).call(this,e("_process"))},{_process:3}],18:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("./vnode"),f=e("./is");function r(e,t,n){var r,o,i,u={};if(void 0!==n?(u=t,f.array(n)?r=n:f.primitive(n)?o=n:n&&n.sel&&(r=[n])):void 0!==t&&(f.array(t)?r=t:f.primitive(t)?o=t:t&&t.sel?r=[t]:u=t),void 0!==r)for(i=0;i<r.length;++i)f.primitive(r[i])&&(r[i]=a.vnode(void 0,void 0,void 0,r[i],void 0));return"s"!==e[0]||"v"!==e[1]||"g"!==e[2]||3!==e.length&&"."!==e[3]&&"#"!==e[3]||function e(t,n,r){if(t.ns="http://www.w3.org/2000/svg","foreignObject"!==r&&void 0!==n)for(var o=0;o<n.length;++o){var i=n[o].data;void 0!==i&&e(i,n[o].children,n[o].sel)}}(u,r,e),a.vnode(e,u,r,o,void 0)}n.h=r,n.default=r},{"./is":20,"./vnode":29}],19:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.htmlDomApi={createElement:function(e){return document.createElement(e)},createElementNS:function(e,t){return document.createElementNS(e,t)},createTextNode:function(e){return document.createTextNode(e)},createComment:function(e){return document.createComment(e)},insertBefore:function(e,t,n){e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},appendChild:function(e,t){e.appendChild(t)},parentNode:function(e){return e.parentNode},nextSibling:function(e){return e.nextSibling},tagName:function(e){return e.tagName},setTextContent:function(e,t){e.textContent=t},getTextContent:function(e){return e.textContent},isElement:function(e){return 1===e.nodeType},isText:function(e){return 3===e.nodeType},isComment:function(e){return 8===e.nodeType}},n.default=n.htmlDomApi},{}],20:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.array=Array.isArray,n.primitive=function(e){return"string"==typeof e||"number"==typeof e}},{}],21:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});function r(e,t){var n,r=t.elm,o=e.data.attrs,i=t.data.attrs;if((o||i)&&o!==i){for(n in o=o||{},i=i||{}){var u=i[n];o[n]!==u&&(!0===u?r.setAttribute(n,""):!1===u?r.removeAttribute(n):120!==n.charCodeAt(0)?r.setAttribute(n,u):58===n.charCodeAt(3)?r.setAttributeNS("http://www.w3.org/XML/1998/namespace",n,u):58===n.charCodeAt(5)?r.setAttributeNS("http://www.w3.org/1999/xlink",n,u):r.setAttribute(n,u))}for(n in o)n in i||r.removeAttribute(n)}}n.attributesModule={create:r,update:r},n.default=n.attributesModule},{}],22:[function(e,t,n){"use strict";function r(e,t){var n,r,o=t.elm,i=e.data.class,u=t.data.class;if((i||u)&&i!==u){for(r in u=u||{},i=i||{})u[r]||o.classList.remove(r);for(r in u)(n=u[r])!==i[r]&&o.classList[n?"add":"remove"](r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.classModule={create:r,update:r},n.default=n.classModule},{}],23:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=/[A-Z]/g;function r(e,t){var n,r=t.elm,o=e.data.dataset,i=t.data.dataset;if((o||i)&&o!==i){o=o||{},i=i||{};var u=r.dataset;for(n in o)i[n]||(u?n in u&&delete u[n]:r.removeAttribute("data-"+n.replace(a,"-$&").toLowerCase()));for(n in i)o[n]!==i[n]&&(u?u[n]=i[n]:r.setAttribute("data-"+n.replace(a,"-$&").toLowerCase(),i[n]))}}n.datasetModule={create:r,update:r},n.default=n.datasetModule},{}],24:[function(e,t,n){"use strict";function c(e,t){var n=e.type,r=t.data.on;r&&r[n]&&function e(t,n,r){if("function"==typeof t)t.call(n,r,n);else if("object"==typeof t)if("function"==typeof t[0])if(2===t.length)t[0].call(n,t[1],r,n);else{var o=t.slice(1);o.push(r),o.push(n),t[0].apply(n,o)}else for(var i=0;i<t.length;i++)e(t[i],n,r)}(r[n],t,e)}function r(e,t){var n,r=e.data.on,o=e.listener,i=e.elm,u=t&&t.data.on,a=t&&t.elm;if(r!==u){if(r&&o)if(u)for(n in r)u[n]||i.removeEventListener(n,o,!1);else for(n in r)i.removeEventListener(n,o,!1);if(u){var f=t.listener=e.listener||function e(t){c(t,e.vnode)};if(f.vnode=t,r)for(n in u)r[n]||a.addEventListener(n,f,!1);else for(n in u)a.addEventListener(n,f,!1)}}}Object.defineProperty(n,"__esModule",{value:!0}),n.eventListenersModule={create:r,update:r,destroy:r},n.default=n.eventListenersModule},{}],25:[function(e,t,n){"use strict";function r(e,t){var n,r,o=t.elm,i=e.data.props,u=t.data.props;if((i||u)&&i!==u){for(n in u=u||{},i=i||{})u[n]||delete o[n];for(n in u)r=u[n],i[n]===r||"value"===n&&o[n]===r||(o[n]=r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.propsModule={create:r,update:r},n.default=n.propsModule},{}],26:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r="undefined"!=typeof window&&window.requestAnimationFrame.bind(window)||setTimeout,o=function(e){r(function(){r(e)})},l=!1;function c(e,t,n){o(function(){e[t]=n})}function i(e,t){var n,r,o=t.elm,i=e.data.style,u=t.data.style;if((i||u)&&i!==u){u=u||{};var a="delayed"in(i=i||{});for(r in i)u[r]||("-"===r[0]&&"-"===r[1]?o.style.removeProperty(r):o.style[r]="");for(r in u)if(n=u[r],"delayed"===r&&u.delayed)for(var f in u.delayed)n=u.delayed[f],a&&n===i.delayed[f]||c(o.style,f,n);else"remove"!==r&&n!==i[r]&&("-"===r[0]&&"-"===r[1]?o.style.setProperty(r,n):o.style[r]=n)}}n.styleModule={pre:function(){l=!1},create:i,update:i,destroy:function(e){var t,n,r=e.elm,o=e.data.style;if(o&&(t=o.destroy))for(n in t)r.style[n]=t[n]},remove:function(e,t){var n=e.data.style;if(n&&n.remove){l||(getComputedStyle(document.body).transform,l=!0);var r,o=e.elm,i=0,u=n.remove,a=0,f=[];for(r in u)f.push(r),o.style[r]=u[r];for(var c=getComputedStyle(o)["transition-property"].split(", ");i<c.length;++i)-1!==f.indexOf(c[i])&&a++;o.addEventListener("transitionend",function(e){e.target===o&&--a,0===a&&t()})}else t()}},n.default=n.styleModule},{}],27:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var l=e("./vnode"),v=e("./is"),i=e("./htmldomapi");function x(e){return void 0===e}function w(e){return void 0!==e}var k=l.default("",{},[],void 0,void 0);function T(e,t){return e.key===t.key&&e.sel===t.sel}function E(e,t,n){var r,o,i,u={};for(r=t;r<=n;++r)null!=(i=e[r])&&void 0!==(o=i.key)&&(u[o]=r);return u}var u=["create","update","remove","destroy","pre","post"],r=e("./h");n.h=r.h;var o=e("./thunk");n.thunk=o.thunk,n.init=function(e,t){var n,r,p={},m=void 0!==t?t:i.default;for(n=0;n<u.length;++n)for(p[u[n]]=[],r=0;r<e.length;++r){var o=e[r][u[n]];void 0!==o&&p[u[n]].push(o)}function f(t,n){return function(){if(0==--n){var e=m.parentNode(t);m.removeChild(e,t)}}}function h(e,t){var n,r=e.data;void 0!==r&&w(n=r.hook)&&w(n=n.init)&&(n(e),r=e.data);var o=e.children,i=e.sel;if("!"===i)x(e.text)&&(e.text=""),e.elm=m.createComment(e.text);else if(void 0!==i){var u=i.indexOf("#"),a=i.indexOf(".",u),f=0<u?u:i.length,c=0<a?a:i.length,l=-1!==u||-1!==a?i.slice(0,Math.min(f,c)):i,s=e.elm=w(r)&&w(n=r.ns)?m.createElementNS(n,l):m.createElement(l);for(f<c&&s.setAttribute("id",i.slice(f+1,c)),0<a&&s.setAttribute("class",i.slice(c+1).replace(/\./g," ")),n=0;n<p.create.length;++n)p.create[n](k,e);if(v.array(o))for(n=0;n<o.length;++n){var d=o[n];null!=d&&m.appendChild(s,h(d,t))}else v.primitive(e.text)&&m.appendChild(s,m.createTextNode(e.text));w(n=e.data.hook)&&(n.create&&n.create(k,e),n.insert&&t.push(e))}else e.elm=m.createTextNode(e.text);return e.elm}function y(e,t,n,r,o,i){for(;r<=o;++r){var u=n[r];null!=u&&m.insertBefore(e,h(u,i),t)}}function c(e){var t,n,r=e.data;if(void 0!==r){for(w(t=r.hook)&&w(t=t.destroy)&&t(e),t=0;t<p.destroy.length;++t)p.destroy[t](e);if(void 0!==e.children)for(n=0;n<e.children.length;++n)null!=(t=e.children[n])&&"string"!=typeof t&&c(t)}}function g(e,t,n,r){for(;n<=r;++n){var o=void 0,i=void 0,u=void 0,a=t[n];if(null!=a)if(w(a.sel)){for(c(a),i=p.remove.length+1,u=f(a.elm,i),o=0;o<p.remove.length;++o)p.remove[o](a,u);w(o=a.data)&&w(o=o.hook)&&w(o=o.remove)?o(a,u):u()}else m.removeChild(e,a.elm)}}function b(e,t,n){var r,o;w(r=t.data)&&w(o=r.hook)&&w(r=o.prepatch)&&r(e,t);var i=t.elm=e.elm,u=e.children,a=t.children;if(e!==t){if(void 0!==t.data){for(r=0;r<p.update.length;++r)p.update[r](e,t);w(r=t.data.hook)&&w(r=r.update)&&r(e,t)}x(t.text)?w(u)&&w(a)?u!==a&&function(e,t,n,r){for(var o,i,u,a=0,f=0,c=t.length-1,l=t[0],s=t[c],d=n.length-1,p=n[0],v=n[d];a<=c&&f<=d;)null==l?l=t[++a]:null==s?s=t[--c]:null==p?p=n[++f]:null==v?v=n[--d]:T(l,p)?(b(l,p,r),l=t[++a],p=n[++f]):T(s,v)?(b(s,v,r),s=t[--c],v=n[--d]):T(l,v)?(b(l,v,r),m.insertBefore(e,l.elm,m.nextSibling(s.elm)),l=t[++a],v=n[--d]):(T(s,p)?(b(s,p,r),m.insertBefore(e,s.elm,l.elm),s=t[--c]):(void 0===o&&(o=E(t,a,c)),x(i=o[p.key])?m.insertBefore(e,h(p,r),l.elm):(u=t[i]).sel!==p.sel?m.insertBefore(e,h(p,r),l.elm):(b(u,p,r),t[i]=void 0,m.insertBefore(e,u.elm,l.elm))),p=n[++f]);(a<=c||f<=d)&&(c<a?y(e,null==n[d+1]?null:n[d+1].elm,n,f,d,r):g(e,t,a,c))}(i,u,a,n):w(a)?(w(e.text)&&m.setTextContent(i,""),y(i,null,a,0,a.length-1,n)):w(u)?g(i,u,0,u.length-1):w(e.text)&&m.setTextContent(i,""):e.text!==t.text&&(w(u)&&g(i,u,0,u.length-1),m.setTextContent(i,t.text)),w(o)&&w(r=o.postpatch)&&r(e,t)}}return function(e,t){var n,r,o,i,u,a,f=[];for(n=0;n<p.pre.length;++n)p.pre[n]();for(void 0===e.sel&&(u=(i=e).id?"#"+i.id:"",a=i.className?"."+i.className.split(" ").join("."):"",e=l.default(m.tagName(i).toLowerCase()+u+a,{},[],void 0,i)),T(e,t)?b(e,t,f):(r=e.elm,o=m.parentNode(r),h(t,f),null!==o&&(m.insertBefore(o,t.elm,m.nextSibling(r)),g(o,[e],0,0))),n=0;n<f.length;++n)f[n].data.hook.insert(f[n]);for(n=0;n<p.post.length;++n)p.post[n]();return t}}},{"./h":18,"./htmldomapi":19,"./is":20,"./thunk":28,"./vnode":29}],28:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("./h");function a(e,t){t.elm=e.elm,e.data.fn=t.data.fn,e.data.args=t.data.args,t.data=e.data,t.children=e.children,t.text=e.text,t.elm=e.elm}function i(e){var t=e.data;a(t.fn.apply(void 0,t.args),e)}function u(e,t){var n,r=e.data,o=t.data,i=r.args,u=o.args;if(r.fn===o.fn&&i.length===u.length){for(n=0;n<u.length;++n)if(i[n]!==u[n])return void a(o.fn.apply(void 0,u),t);a(e,t)}else a(o.fn.apply(void 0,u),t)}n.thunk=function(e,t,n,r){return void 0===r&&(r=n,n=t,t=void 0),o.h(e,{key:t,hook:{init:i,prepatch:u},fn:n,args:r})},n.default=n.thunk},{"./h":18}],29:[function(e,t,n){"use strict";function r(e,t,n,r,o){return{sel:e,data:t,children:n,text:r,elm:o,key:void 0===t?void 0:t.key}}Object.defineProperty(n,"__esModule",{value:!0}),n.vnode=r,n.default=r},{}],30:[function(e,t,n){var o=function(e,t){for(var n in t)e[n]=t[n];return e},r=function(e,t){return e<t?-1:t<e?1:0},i=function(e,t){return h(t,1,e)},u=function(e,t){return e.bind.apply(e,[null].concat(t))},a=function(e){return e.length},f=function(n){return function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return n(e)}},c=function(n,r){return n<1?r:f(function(e){var t=n-a(e);return 0<t?c(t,u(r,e)):r.apply(null,e)})},l=c(2,c),s=function(e){return l(a(e),e)},d=s(function(e,t,n){var r=e[n]||_;return"object"==typeof r&&(r=P(r)),r(t)}),p=s(function(e,t){return e+t}),v=s(function(e,t){return b(t,[e])}),m=s(function(e,t){return e.apply(null,t)}),h=s(function(e,t,n){var r=o({},n);return r[e]=t,r}),y=s(function(e,t,n){var r=e[0],o=e.slice(1);return h(r,a(o)?y(o,t,n[r]):t,n)}),g=l(2,function(e){for(var t=[],n=arguments.length-1;0<n--;)t[n]=arguments[n+1];return m(e,t)}),b=s(function(e,t){return e.concat(t)}),x=s(function(e,t){return he(m(e),j(t))}),w=s(function(e,t){return null==t||t!=t?e:t}),k=s(function(e,t){var n=o({},t);return delete n[e],n}),T=s(function(e,t){var n=e[0],r=e.slice(1);return n?null==t[n]?t:a(r)?h(n,T(r,t[n]),t):k(n,t):t}),E=s(function(e,t,n){return e(n)||t(n)}),P=s(function(e,t){return S(d(e),t)}),D=s(function(e,t){return t.filter(e)}),A=s(function(e,t){return t.find(e)}),L=s(function(e,t,n){return s(e)(n,t)}),_=function(e){return e},O=s(function(e,t,n,r){return e(r)?t(r):n(r)}),C=s(function(e,t){return null!=t&&t.constructor===e||t instanceof e}),N=s(function(e,t){return t.join(e)}),j=s(function(e,t){return M(ce(t),e)}),M=s(function(e,t){return t.map(e)}),S=s(function(e,t){var n={};for(var r in t)n[r]=e(t[r],r);return n}),R=s(function(e,t){return t.match(e)||[]}),B=s(function(e,t){return Y(o,{},[e,t])}),F=s(function(e,t){return e*t}),q=s(function(e,t){return f(he(m(t),Le(e)))}),I=s(function(e,t){var n;return(n={})[e]=t,n}),U=s(function(e,t){var n=Y(i,{},e),r={};for(var o in t)n[o]||(r[o]=t[o]);return r}),G=s(u),K=l(3,function(e,t){for(var n=[],r=arguments.length-2;0<r--;)n[r]=arguments[r+2];return m(e,b(n,t))}),X=l(2,function(e,t){var n=e[0],r=e.slice(1);return void 0===t&&(t={}),a(r)?X(r,t[n]):t[n]}),H=s(function(e,t,n){return X(e,n)===t}),V=s(function(e,t){return me(e,W(e,t))}),$=s(function(e,t){return b([e],t)}),z=s(function(e,t){return t[e]}),J=s(function(e,t,n){return n[e]===t}),W=s(function(e,t){return M(L(z)(t),e)}),Y=s(function(e,t,n){return n.reduce(e,t)}),Z=s(function(e,t,n){for(var r in n)t=e(t,n[r],r);return t}),Q=s(function(e,t,n){return be.apply(void 0,M(le(L(e)),n))(t)}),ee=s(function(e,t,n){return n.reduceRight(e,t)}),te=s(function(e,t,n){return ye.apply(void 0,M(le(L(e)),n))(t)}),ne=s(function(e,t,n){return n.replace(e,t)}),re=s(function(e,t){return t.slice(0).sort(e)}),oe=s(function(e,t){return re(pe(r,[e,e]),t)}),ie=s(function(e,t){return t.split(e)}),ue=s(function(e,t){return e(t),t}),ae=s(function(e,t){return e.test(t)}),fe=s(function(e,t){return Promise.resolve(t).then(e)}),ce=s(function(e,t){return t(e)}),le=q(1),se=function(){},de=s(function(e,t,n){return e(n)?n:t(n)}),pe=s(function(e,t){return f(he(m(e),M(d(t))))}),ve=s(function(e,t,n){return e(n)?t(n):n}),me=s(function(e,t){for(var n={},r=a(e);r--;)n[e[r]]=t[r];return n}),he=f(L(ee(ce))),ye=f(L(ee(L(fe)))),ge=f(L(Y(ce))),be=f(L(Y(L(fe)))),xe=he(ee(ce,se),M(m(O))),we=ve(Array.isArray,Y(function(e,t){return b(e,we(t))},[])),ke=s(function(e,t){return M(z(e),t)}),Te=s(function(e,t,n){return n.slice(e,t)}),Ee=z(0),Pe=Te(0,-1),De=he(Ee,Te(-1,void 0)),Ae=Te(1,1/0),Le=Te(0),_e=Z(function(e,t,n){return v(n,e)},[]),Oe=Z(L(v),[]),Ce=s(function(e,t){return Y((n=e,function(e,t){return h(n(t),t,e)}),{},t);var n}),Ne=s(function(e,t){return he(Oe,Ce(e))(t)});o(n,{add:p,append:v,apply:m,assoc:h,assocPath:y,call:g,compose:he,composeP:ye,concat:b,cond:xe,constant:function(e){return function(){return e}},converge:x,curry:s,curryN:l,defaultTo:w,dissoc:k,dissocPath:T,either:E,evolve:P,filter:D,find:A,flatten:we,flip:L,head:Ee,identity:_,ifElse:O,indexBy:Ce,init:Pe,is:C,join:N,juxt:j,keys:_e,last:De,length:a,map:M,mapObj:S,match:R,merge:B,multiply:F,nAry:q,not:function(e){return!e},objOf:I,omit:U,partial:G,partialRight:K,path:X,pathEq:H,pick:V,pipe:ge,pipeP:be,pluck:ke,prepend:$,prop:z,propEq:J,props:W,reduce:Y,reduceObj:Z,reduceP:Q,reduceRight:ee,reduceRightP:te,replace:ne,slice:Te,sort:re,sortBy:oe,split:ie,tail:Ae,take:Le,tap:ue,test:ae,then:fe,thrush:ce,unapply:f,unary:le,uniqBy:Ne,unit:se,unless:de,useWith:pe,values:Oe,when:ve,zipObj:me})},{}],31:[function(e,t,n){var r,o=e("puddles"),i=o.action,u=o.handle,a=e("drag-drop"),f=e("tinyfunk"),c=f.assoc,l=f.compose,s=f.concat,d=f.flip,p=f.juxt,v=f.map,m=e("../lib/prevent"),h=e("../lib/targetVal"),y=e("../lib/trim"),g=/https?:\/\//i,b=s("preview-image/image/"),x=b("SET_CURRENT"),w=b("SET_DRAGGING"),k=b("SET_ERROR"),T=b("SET_NEXT"),E=d(c("current")),P=d(c("dragging")),D=d(c("error")),A=d(c("next"));n.reducer=u({current:"",dragging:!1,error:!1,next:""},((r={})[x]=E,r[w]=P,r[k]=D,r[T]=A,r));var L=function(n){return function(e){var t=new FileReader;t.addEventListener("load",function(){return e(i(x,t.result))}),t.readAsDataURL(n)}},_=p([i(T),function(e){return i(k,!(!e||g.test(e))&&"bad url")}]),O=l(_,y,h),C=l(function(){return function(e,t){var n=t().image.next;n&&e(i(x,n))}},m);n.actions={attachDragDrop:function(t){return function(e){return a(t.elm,l(e,v(L)))}},inputNext:O,submitForm:C}},{"../lib/prevent":34,"../lib/targetVal":35,"../lib/trim":36,"drag-drop":1,puddles:4,tinyfunk:30}],32:[function(e,t,n){var r=e("tinyfunk"),o=r.mapObj,i=r.prop,u={image:e("./image")};n.actions=o(i("actions"),u),n.reducers=o(i("reducer"),u)},{"./image":31,tinyfunk:30}],33:[function(e,t,n){var r=e("redux-functor"),o=e("puddles").mount,i=e("./ducks");o({actions:i.actions,middleware:[r],reducers:i.reducers,root:document.getElementById("root"),view:e("./views/previewer")})},{"./ducks":32,"./views/previewer":37,puddles:4,"redux-functor":16}],34:[function(e,t,n){var r=e("tinyfunk").tap;t.exports=r(function(e){return e.preventDefault()})},{tinyfunk:30}],35:[function(e,t,n){var r=(0,e("tinyfunk").path)(["target","value"]);t.exports=r},{tinyfunk:30}],36:[function(e,t,n){t.exports=function(e){return e.trim()}},{}],37:[function(e,t,n){var l=e("puddles");t.exports=function(e,t){var n=e.image,r=n.attachDragDrop,o=n.inputNext,i=n.submitForm,u=t.image,a=u.current,f=u.error,c=u.next;return l("div.previewer",[l("div.content",[l("h1.title","Image previewer"),l("div.dropbox",{hook:{insert:r}},[l("div.aspect-ratio"),l("div.container",[a?l("img.preview",{attrs:{src:a}}):l("img.placeholder",{attrs:{src:"https://user-images.githubusercontent.com/888052/51040338-35dcb080-1585-11e9-9fa2-1767ddc68612.png"}})])]),l("form.form",{on:{submit:i}},[l("input.input.url",{attrs:{placeholder:"Paste image url and press enter"},class:{error:f},on:{input:o},props:{value:c}}),l("button.btn.submit",{attrs:{disabled:!c||f,type:"submit"}},"Preview")])])])}},{puddles:4}]},{},[33]);