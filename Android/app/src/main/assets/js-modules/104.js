__d(function(e,t,a,r){"use strict";var n=t(17).AlertManager,l=function(){function e(){babelHelpers.classCallCheck(this,e)}return babelHelpers.createClass(e,null,[{key:"alert",value:function(e,t,a,r){return"undefined"!=typeof r?(console.warn('AlertIOS.alert() with a 4th "type" parameter is deprecated and will be removed. Use AlertIOS.prompt() instead.'),void this.prompt(e,t,a,r)):void this.prompt(e,t,a,"default")}},{key:"prompt",value:function(e,t,a){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"plain-text",l=arguments[4],i=arguments[5];if("function"==typeof r){console.warn('You passed a callback function as the "type" argument to AlertIOS.prompt(). React Native is assuming  you want to use the deprecated AlertIOS.prompt(title, defaultValue, buttons, callback) signature. The current signature is AlertIOS.prompt(title, message, callbackOrButtons, type, defaultValue, keyboardType) and the old syntax will be removed in a future version.');var o=r,l=t;return void n.alertWithArgs({title:e||void 0,type:"plain-text",defaultValue:l},function(e,t){o(t)})}var s,u,c=[],p=[];"function"==typeof a?c=[a]:a instanceof Array&&a.forEach(function(e,t){if(c[t]=e.onPress,"cancel"===e.style?s=String(t):"destructive"===e.style&&(u=String(t)),e.text||t<(a||[]).length-1){var r={};r[t]=e.text||"",p.push(r)}}),n.alertWithArgs({title:e||void 0,message:t||void 0,buttons:p,type:r||void 0,defaultValue:l,cancelButtonKey:s,destructiveButtonKey:u,keyboardType:i},function(e,t){var a=c[e];a&&a(t)})}}]),e}();a.exports=l},104);