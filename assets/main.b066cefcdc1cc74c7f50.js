(()=>{"use strict";var e,t,r,n,o,a,i={127:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(142),o=r.n(n),a=r(192),i=r.n(a)()(o());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),i.push([e.id,"*,*:before,*:after{margin:0;padding:0;box-sizing:border-box;list-style:none;transition:all .9s}html{font-family:Poppins}h1{color:#fff}",""]);const s=i},192:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);n&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},142:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],u=n.base?c[0]+n.base:c[0],l=a[u]||0,p="".concat(u," ").concat(l);a[u]=l+1;var d=r(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var v=o(f,n);n.byIndex=s,t.splice(s,0,{identifier:p,updater:v,references:1})}i.push(p)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=r(a[i]);t[s].references--}for(var c=n(e,o),u=0;u<a.length;u++){var l=r(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},s={};function c(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={id:e,exports:{}};return i[e](r,r.exports,c),r.exports}c.m=i,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},c.a=(o,a,i)=>{var s;i&&((s=[]).d=-1);var c,u,l,p=new Set,d=o.exports,f=new Promise(((e,t)=>{l=t,u=e}));f[t]=d,f[e]=e=>(s&&e(s),p.forEach(e),f.catch((e=>{}))),o.exports=f,a((o=>{var a;c=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var a=[];a.d=0,o.then((e=>{i[t]=e,n(a)}),(e=>{i[r]=e,n(a)}));var i={};return i[e]=e=>e(a),i}}var s={};return s[e]=e=>{},s[t]=o,s})))(o);var i=()=>c.map((e=>{if(e[r])throw e[r];return e[t]})),u=new Promise((t=>{(a=()=>t(i)).r=0;var r=e=>e!==s&&!p.has(e)&&(p.add(e),e&&!e.d&&(a.r++,e.push(a)));c.map((t=>t[e](r)))}));return a.r?u:i()}),(e=>(e?l(f[r]=e):u(d),n(s)))),s&&s.d<0&&(s.d=0)},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,r)=>(c.f[r](e,t),t)),[])),c.u=e=>"assets/"+e+"."+{19:"7d81110f1a76d14777ee",227:"8a8913c8ccff80237abe",271:"9877596bb8ce873cfacd",615:"c9228816bda4395f70aa"}[e]+".js",c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},a="standalone-javascript:",c.l=(e,t,r,n)=>{if(o[e])o[e].push(t);else{var i,s;if(void 0!==r)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var p=u[l];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==a+r){i=p;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.setAttribute("data-webpack",a+r),i.src=e),o[e]=[t];var d=(t,r)=>{i.onerror=i.onload=null,clearTimeout(f);var n=o[e];if(delete o[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),s&&document.head.appendChild(i)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;c.g.importScripts&&(e=c.g.location+"");var t=c.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&!e;)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e+"../"})(),(()=>{var e={179:0};c.f.j=(t,r)=>{var n=c.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var a=c.p+c.u(t),i=new Error;c.l(a,(r=>{if(c.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[a,i,s]=r,u=0;if(a.some((t=>0!==e[t]))){for(n in i)c.o(i,n)&&(c.m[n]=i[n]);s&&s(c)}for(t&&t(r);u<a.length;u++)o=a[u],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkstandalone_javascript=self.webpackChunkstandalone_javascript||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),c.nc=void 0,(()=>{var e=c(379),t=c.n(e),r=c(795),n=c.n(r),o=c(569),a=c.n(o),i=c(565),s=c.n(i),u=c(216),l=c.n(u),p=c(589),d=c.n(p),f=c(127),v={};v.styleTagTransform=d(),v.setAttributes=s(),v.insert=a().bind(null,"head"),v.domAPI=n(),v.insertStyleElement=l(),t()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;const m=document.querySelector("#app");Promise.all([(async()=>(await c.e(615).then(c.bind(c,615))).default)(),(async()=>(await c.e(19).then(c.bind(c,19))).default)()]).then((([e,t])=>{m.id=t(),e(m)}))})()})();