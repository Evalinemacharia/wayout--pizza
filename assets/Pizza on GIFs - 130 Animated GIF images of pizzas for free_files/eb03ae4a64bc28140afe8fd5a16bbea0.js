(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var g=this||self;function l(a,b){a=a.split(".");var c=g;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b};var m={},n=null;var p="function"===typeof Uint8Array;const q=Symbol(void 0);function r(a,b){Object.isFrozen(a)||(q?a[q]|=b:void 0!==a.m?a.m|=b:Object.defineProperties(a,{m:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}function t(a){let b;q?b=a[q]:b=a.m;return null==b?0:b}function w(a){r(a,1);return a}function x(a){return Array.isArray(a)?!!(t(a)&2):!1};function y(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}var z=Object.freeze(w([]));function A(a){if(x(a.j))throw Error("Cannot mutate an immutable Message");}function B(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}};function C(a,b=aa){return D(a,b)}function E(a,b){if(null!=a){if(Array.isArray(a))a=D(a,b);else if(y(a)){const c={};for(let d in a)c[d]=E(a[d],b);a=c}else a=b(a);return a}}function D(a,b){const c=a.slice();for(let d=0;d<c.length;d++)c[d]=E(c[d],b);Array.isArray(a)&&t(a)&1&&w(c);return c}
function F(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a:switch(typeof a){case "number":a=isFinite(a)?a:String(a);break a;case "object":if(a&&!Array.isArray(a)&&p&&null!=a&&a instanceof Uint8Array){var b;void 0===b&&(b=0);if(!n){n={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));m[e]=f;for(var h=0;h<f.length;h++){var k=f[h];void 0===n[k]&&(n[k]=h)}}}b=m[b];c=Array(Math.floor(a.length/
3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var u=a[f],v=a[f+1];k=a[f+2];h=b[u>>2];u=b[(u&3)<<4|v>>4];v=b[(v&15)<<2|k>>6];k=b[k&63];c[e++]=h+u+v+k}h=0;k=d;switch(a.length-f){case 2:h=a[f+1],k=b[(h&15)<<2]||d;case 1:a=a[f],c[e]=b[a>>2]+b[(a&3)<<4|h>>4]+k+d}a=c.join("")}}return Array.isArray(a)?C(a,F):a}function aa(a){return p&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a};function G(a,b,c=!1){return-1===b?null:b>=a.i?a.g?a.g[b]:void 0:c&&a.g&&(c=a.g[b],null!=c)?c:a.j[b+a.h]}function H(a,b,c,d=!1,e=!1){e||A(a);b<a.i&&!d?a.j[b+a.h]=c:(a.g||(a.g=a.j[a.i+a.h]={}))[b]=c}function I(a,b){a=G(a,b);return null==a?a:!!a}function ba(a){a=G(a,3);return null==a?0:a}function ca(a){a=I(a,1);return null==a?!1:a}function J(a,b,c,d){A(a);c!==d?H(a,b,c):H(a,b,void 0,!1,!1)}
function K(a,b,c){if(-1===c)return null;a.l||(a.l={});var d=a.l[c];if(d)return d;let e=G(a,c,!1);if(null==e)return d;b=new b(e);if(x(a.j)){d=b.j;if(!Array.isArray(d))throw Error("cannot mark non-array as immutable");r(d,2)}return a.l[c]=b};function da(a){g.setTimeout(()=>{throw a;},0)};function L(a,b){if(null==b||""==b)return new a;b=JSON.parse(b);if(!Array.isArray(b)){var c=typeof b;da(Error("Expected to deserialize an Array but got "+("object"!=c?c:b?Array.isArray(b)?"array":c:"null")+": "+b))}M=b;a=new a(b);M=null;return a}
var N=class{constructor(a,b,c){a||(a=M);M=null;var d=this.constructor.h;a||(a=d?[d]:[]);this.h=(d?0:-1)-(this.constructor.g||0);this.l=void 0;this.j=a;a:{d=this.j.length;a=d-1;if(d&&(d=this.j[a],y(d))){this.i=a-this.h;this.g=d;break a}void 0!==b&&-1<b?(this.i=Math.max(b,a+1-this.h),this.g=void 0):this.i=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.i)a+=this.h,(d=this.j[a])?Array.isArray(d)&&w(d):this.j[a]=z;else{d=this.g||(this.g=this.j[this.i+this.h]={});let e=d[a];e?Array.isArray(e)&&
w(e):d[a]=z}}toJSON(){return C(this.j,F)}};N.prototype.toString=function(){return this.j.toString()};let M;var O=class extends N{};Object.defineProperties(O,{[Symbol.hasInstance]:B(()=>{throw Error("Cannot perform instanceof checks for MutableMessage");})});class P extends O{}Object.defineProperties(P,{[Symbol.hasInstance]:B(Object[Symbol.hasInstance])});var Q=class extends P{constructor(a){super(a,-1,ea)}},ea=[8];var R=class extends P{constructor(a){super(a,-1,fa)}},fa=[17];var ia=class extends P{constructor(a){super(a,-1,ha)}},ha=[27];var ja=class extends P{constructor(a){super(a)}};var la=class extends P{constructor(a){super(a,-1,ka)}},ka=[1,2,3,6];var na=class extends P{constructor(){super(void 0,-1,ma)}},ma=[12];/*

 SPDX-License-Identifier: Apache-2.0
*/
function S(a,b){a=a.getElementsByTagName("META");for(let c=0;c<a.length;++c)if(a[c].getAttribute("name")===b)return a[c].getAttribute("content")||"";return""};function T(a){if(!(0<a.g.length)){var b=S(a.body,"environment");for(const c of b.split("|"))c&&a.g.push(c)}}function U(a,b){a=a.body;var c={detail:void 0};let d;"function"===typeof window.CustomEvent?d=new CustomEvent(b,c):(d=document.createEvent("CustomEvent"),d.initCustomEvent(b,!!c.bubbles,!!c.cancelable,c.detail));a.dispatchEvent(d)}
var oa=class{constructor(a){this.body=a;this.g=[];this.h={};S(a,"sampling_mod");var b=S(a,"namespace");if(!b){b="ns-"+(0,Math.random)().toString(36).substr(2,5);a:{var c=a.getElementsByTagName("META");for(let d=0;d<c.length;++d)if("namespace"===c[d].getAttribute("name")&&c[d].getAttribute("index")===(0).toString()){c[d].setAttribute("content",b);break a}c=a.querySelector("#mys-meta");c||(c=document.createElement("div"),c.id="mys-meta",c.style.position="absolute",c.style.display="none",a.appendChild(c));
a=document.createElement("META");a.setAttribute("name","namespace");a.setAttribute("content",b);a.setAttribute("index",(0).toString());c.appendChild(a)}}T(this);!this.h.hasOwnProperty("META_LOCKED")&&(a=S(this.body,"custom_flags"))&&(this.h=JSON.parse(a))}addEventListener(a,b){this.body.addEventListener(a,b)}};var pa=class extends P{constructor(){super(void 0)}};function V(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)};function W(a){if(1>=a.h.offsetWidth||1>=a.h.offsetHeight)return!1;a.g.remove();U(a.context,"spanReady");return!0}
var qa=class{constructor(a,b){this.context=a;this.i=b;this.h=V("SPAN");this.g=V("DIV");this.h.style.fontSize="6px";this.h.textContent="go";this.g.style.position="absolute";this.g.style.top="100%";this.g.style.left="100%";this.g.style.width="1px";this.g.style.height="0";this.g.style.overflow="hidden";this.g.style.visibility="hidden";this.g.appendChild(this.h)}wait(){if(!ca(this.i)&&(U(this.context,"spanStart"),this.context.body.appendChild(this.g),!W(this)))return new Promise(a=>{const b=setInterval(()=>
{W(this)&&(clearInterval(b),a())},ba(this.i))})}};var ra=class{constructor(a,b){this.context=a;this.h=K(b,ia,1);this.g=K(b,Q,12)||new Q;K(this.h,R,10)||new R}};var sa=class{constructor(){this.channel=3;(this.g=!(!window.mys||!window.mys.pingback))&&this.setData(43,Date.now()-window.mys.pingback.getBaseTime())}setAttribute(a,b){this.g&&window.mys.pingback.setAttribute(a,b)}setData(a,b){this.g&&window.mys.pingback.setData(a,b,this.channel)}send(a){this.g&&window.mys.pingback.send(a)}};function X(a){a.g&=-31}function Y(a,b){a.g|=b}var ta=class{constructor(a,b){this.context=a;this.l=b;new na;this.g=0;this.pingback=new sa}h(){}};function Z(a){L(la,S(a.context.body,"engine_msg")||"[]");return a.g.h()||Promise.resolve()}
var ua=class{constructor(a,b,c,d){this.g=d(a,b,c);this.context=this.g.context}init(){X(this.g);Y(this.g,1);let a;null==(a=window.AFMA_Communicator)||a.addEventListener("onshow",()=>{Y(this.g,32)});let b=0;const c=this.context.body;c.addEventListener("browserRender",()=>{++b;if(1===b)U(this.context,"overallStart"),Z(this).then(()=>{U(this.context,"overallQuiet")});else{var d=c.clientHeight;c.clientWidth&&d&&Z(this)}})}};function va(a){a.i.length=0;a.h=!0}function wa(a,b){a.g=!0;const c=()=>{a.h=!1;const d=a.i.shift();return void 0===d?(a.g=!1,Promise.resolve()):wa(a,d())};return b?b.then(c,()=>{if(a.h)return c();a.g=!1;return Promise.reject()}):c()}function xa(a,b){for(const c of b)a.i.push(c);if(!a.g)return wa(a)}var ya=class{constructor(){this.h=this.g=!1;this.i=[]}};var za=class extends ta{constructor(){super(...arguments);this.i=new ya}h(){va(this.i);return xa(this.i,[()=>{},()=>{let a;var b=this.l;const c=new pa;J(c,3,100,0);J(c,4,1E4,0);J(c,5,!0,!1);I(b.g,3)&&J(c,2,!0,!1);b=b.context;T(b);0<=b.g.indexOf("amp")&&J(c,2,!0,!1);c&&(a=(new qa(this.context,c)).wait());U(this.context,"browserStart");U(this.context,"browserStartEnd");X(this);Y(this,2);return a},()=>{U(this.context,"browserReady");U(this.context,"browserReadyEnd");Y(this,4);U(this.context,"overallReady")},
()=>{U(this.context,"browserQuiet");U(this.context,"browserQuietEnd");Y(this,8)}])}};(function(a){let b=null;l("mys.engine.init",(c,d)=>{const e=L(ja,S(d,"render_config")||"[]");b=new ua(c,d,e,a);b.init()});l("mys.engine.stage",()=>b?b.g.g:0)})(function(a,b,c){a=new oa(b);c=new ra(a,c);return new za(a,c)});}).call(this);
