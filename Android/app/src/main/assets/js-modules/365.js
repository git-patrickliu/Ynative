__d(function(e,t,n,i){"use strict";var a=t(37),r=t(17),s=(t(27),t(13)),l=r.IntentAndroid,o=function(e){function t(){return babelHelpers.classCallCheck(this,t),babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,l))}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"addEventListener",value:function(e,t){this.addListener(e,t)}},{key:"removeEventListener",value:function(e,t){this.removeListener(e,t)}},{key:"openURL",value:function(e){return this._validateURL(e),l.openURL(e)}},{key:"canOpenURL",value:function(e){return this._validateURL(e),l.canOpenURL(e)}},{key:"getInitialURL",value:function(){return l.getInitialURL()}},{key:"_validateURL",value:function(e){s("string"==typeof e,"Invalid URL: should be a string. Was: "+e),s(e,"Invalid URL: cannot be empty")}}]),t}(a);n.exports=new o},365);