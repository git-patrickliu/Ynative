__d(function(e,n,t,r){"use strict";function o(e,n){if(!e)return null;var t=babelHelpers.slicedToArray(e,5),r=t[0],o=t[1],a=t[2],l=t[3],f=t[4];if(s(!r.startsWith("RCT")&&!r.startsWith("RK"),"Module name prefixes should've been stripped by the native side but wasn't for "+r),!o&&!a)return{name:r};var c={};return a&&a.forEach(function(e,t){var r=l&&u(l,t),o=f&&u(f,t);s(!r||!o,"Cannot have a method that is both async and a sync hook");var a=r?"promise":o?"sync":"async";c[e]=i(n,t,a)}),babelHelpers.extends(c,o),{name:r,module:c}}function a(n,t){s(e.nativeRequireModuleConfig,"Can't lazily create module without nativeRequireModuleConfig");var r=e.nativeRequireModuleConfig(n),a=o(r,t);return a&&a.module}function i(n,t,r){var o=null;return o="promise"===r?function(){for(var e=arguments.length,r=Array(e),o=0;o<e;o++)r[o]=arguments[o];return new Promise(function(e,o){f.enqueueNativeCall(n,t,r,function(n){return e(n)},function(e){return o(l(e))})})}:"sync"===r?function(){for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return e.nativeCallSyncHook(n,t,o)}:function(){for(var e=arguments.length,r=Array(e),o=0;o<e;o++)r[o]=arguments[o];var a=r.length>0?r[r.length-1]:null,i=r.length>1?r[r.length-2]:null,u="function"==typeof a,l="function"==typeof i;l&&s(u,"Cannot have a non-function arg after a function arg.");var c=u?a:null,v=l?i:null,d=u+l;r=r.slice(0,r.length-d),f.enqueueNativeCall(n,t,r,v,c)},o.type=r,o}function u(e,n){return e.indexOf(n)!==-1}function l(e){var n=e.message,t=babelHelpers.objectWithoutProperties(e,["message"]),r=new Error(n);return r.framesToPop=1,babelHelpers.extends(r,t)}var f=n(18),s=n(13);e.__fbGenNativeModule=o;var c={};if(e.nativeModuleProxy)c=e.nativeModuleProxy;else{var v=e.__fbBatchedBridgeConfig;s(v,"__fbBatchedBridgeConfig is not set, cannot invoke native modules");var d=n(30);(v.remoteModuleConfig||[]).forEach(function(e,n){var t=o(e,n);t&&(t.module?c[t.name]=t.module:d(c,t.name,{get:function(){return a(t.name,n)}}))})}t.exports=c},17);