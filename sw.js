if(!self.define){let e,s={};const t=(t,i)=>(t=new URL(t+".js",i).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(i,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let o={};const c=e=>t(e,n),d={module:{uri:n},exports:o,require:c};s[n]=Promise.all(i.map((e=>d[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-8a9ef17b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"01_index.html",revision:"0aad90e3cb9dbbcd823412ea2ccd1163"},{url:"assets/js/app.js",revision:"863d090f19eb0a936d70d83cdc44c030"},{url:"assets/js/constants.js",revision:"f09df056c480949f09d5ff7027f73b0a"},{url:"index.html",revision:"fff42d7f036cee3023fd519eae391811"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
