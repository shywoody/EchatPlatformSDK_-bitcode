!function(n){function e(e){for(var r,i,l=e[0],u=e[1],c=e[2],f=0,p=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&p.push(t[i][0]),t[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(n[r]=u[r]);for(s&&s(e);p.length;)p.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var n,e=0;e<a.length;e++){for(var o=a[e],r=!0,l=1;l<o.length;l++){var u=o[l];0!==t[u]&&(r=!1)}r&&(a.splice(e--,1),n=i(i.s=o[0]))}return n}var r={},t={2:0},a=[];function i(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=n,i.c=r,i.d=function(n,e,o){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)i.d(o,r,function(e){return n[e]}.bind(null,r));return o},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="../";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var s=u;a.push([182,0]),o()}({182:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o(3),o(21),o(62),o(64),o(65),o(45),o(114);var r=o(192);function t(n){var e=new RegExp("(^|&)"+n+"=([^&]*)(&|$)","i"),o=location.search.substr(1).match(e);return null!=o?decodeURIComponent(o[2]):""}o(194),window.SDK=navigator.userAgent.match(/Android/i)?"Android":"IOS",window.__uri=function(n){return n},window.lanRes={};var a,i=t("lan"),l=(0,r.pickLan)(i,t);(a=t("noConsole"))&&"0"==a&&window.VConsole&&(window.vConsole=new VConsole),(0,r.appendScript)("../../res/emoji/emoji_"+("zhcn"==l||"zhtw"==l?"zh":"en")+".json");var u=window.lanResName;e.default=u},192:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.appendScript=a,e.pickLan=function(n,e){var o,i,l=n||navigator.language||navigator.browserLanguage||"zh-CN";l=l.toLowerCase().replace("_","-"),(i=t(l))||(o=e("defaultlan")||e("defaultLan")||"",i=o&&t(o)||"enus");return window.lanResName=i,a(r[i]),i},o(3),o(9);var r={zhcn:"../common/lang/langzhcn.js",enus:"../common/lang/langenus.js",fr:"../common/lang/langfr.js",ja:"../common/lang/langja.js",de:"../common/lang/langde.js",ko:"../common/lang/langko.js",zhtw:"../common/lang/langzhtw.js",pt:"../common/lang/langpt.js",id:"../common/lang/langid.js",in:"../common/lang/langid.js"};function t(n){if(!n)return"";var e,o=n.replace("-",""),t="",a=n.split("-")[0],i={zhhk:"zhtw",zhmo:"zhtw",zhcht:"zhtw",zhsg:"zhcn",jp:"ja"};if(r[o])t=o;else if(i[o])t=i[o];else for(e in r)if(0==e.indexOf(a)){t=e;break}return t}function a(n){document.write('<script src="'+n+'"><\/script>')}},194:function(n,e,o){}});