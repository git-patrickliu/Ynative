__d(function(e,t,r,n){"use strict";var a=t(129),i=t(130),u=t(131),o=t(132);r.exports=function(e,t){function r(e,t){if(l(t)){var r=x(t);return e._objectIndex[r]}var n=v+t;return"string"==typeof t?e._stringIndex[n]:e._otherIndex[n]}function n(e,t,r){var n=null==r;if(l(t)){var a=x(t);n?delete e._objectIndex[a]:e._objectIndex[a]=r}else{var i=v+t;"string"==typeof t?n?delete e._stringIndex[i]:e._stringIndex[i]=r:n?delete e._otherIndex[i]:e._otherIndex[i]=r}}function s(e){e._mapData=[],e._objectIndex={},e._stringIndex={},e._otherIndex={},e.size=0}function l(e){return null!=e&&("object"==typeof e||"function"==typeof e)}function p(e,t){return{value:e,done:t}}function f(e){return!I||Object.isExtensible(e)}function c(e){var t;switch(e.nodeType){case 1:t=e.uniqueID;break;case 9:t=e.documentElement.uniqueID;break;default:return null}return t?_+t:null}if(!a("Map"))return e.Map;var h="key",b="value",y="key+value",v="$map_",_="IE_HASH_",d=function(){function e(t){if(babelHelpers.classCallCheck(this,e),!l(this))throw new TypeError("Wrong map object type.");if(s(this),null!=t)for(var r,n=o(t);!(r=n.next()).done;){if(!l(r.value))throw new TypeError("Expected iterable items to be pair objects.");this.set(r.value[0],r.value[1])}}return babelHelpers.createClass(e,[{key:"clear",value:function(){s(this)}},{key:"has",value:function(e){var t=r(this,e);return!(null==t||!this._mapData[t])}},{key:"set",value:function(e,t){var a=r(this,e);return null!=a&&this._mapData[a]?this._mapData[a][1]=t:(a=this._mapData.push([e,t])-1,n(this,e,a),this.size+=1),this}},{key:"get",value:function(e){var n=r(this,e);return null==n?t:this._mapData[n][1]}},{key:"delete",value:function(e){var a=r(this,e);return!(null==a||!this._mapData[a])&&(n(this,e,t),this._mapData[a]=t,this.size-=1,!0)}},{key:"entries",value:function(){return new m(this,y)}},{key:"keys",value:function(){return new m(this,h)}},{key:"values",value:function(){return new m(this,b)}},{key:"forEach",value:function(e,r){if("function"!=typeof e)throw new TypeError("Callback must be callable.");for(var n=e.bind(r||t),a=this._mapData,i=0;i<a.length;i++){var u=a[i];null!=u&&n(u[1],u[0],this)}}}]),e}();d.prototype[o.ITERATOR_SYMBOL]=d.prototype.entries;var m=function(){function e(t,r){if(babelHelpers.classCallCheck(this,e),!l(t)||!t._mapData)throw new TypeError("Object is not a map.");if([h,y,b].indexOf(r)===-1)throw new Error("Invalid iteration kind.");this._map=t,this._nextIndex=0,this._kind=r}return babelHelpers.createClass(e,[{key:"next",value:function(){if(!this instanceof d)throw new TypeError("Expected to be called on a MapIterator.");var e=this._map,r=this._nextIndex,n=this._kind;if(null==e)return p(t,!0);for(var a=e._mapData;r<a.length;){var i=a[r];if(r+=1,this._nextIndex=r,i){if(n===h)return p(i[0],!1);if(n===b)return p(i[1],!1);if(n)return p(i,!1)}}return this._map=t,p(t,!0)}}]),e}();m.prototype[o.ITERATOR_SYMBOL]=function(){return this};var I=function(){try{return Object.defineProperty({},"x",{}),!0}catch(e){return!1}}(),x=function(){var e=Object.prototype.propertyIsEnumerable,t=i(),r=0;return function(n){if(n[t])return n[t];if(!I&&n.propertyIsEnumerable&&n.propertyIsEnumerable[t])return n.propertyIsEnumerable[t];if(!I&&u(n)&&c(n))return c(n);if(!I&&n[t])return n[t];if(f(n)){if(r+=1,I)Object.defineProperty(n,t,{enumerable:!1,writable:!1,configurable:!1,value:r});else if(n.propertyIsEnumerable)n.propertyIsEnumerable=function(){return e.apply(this,arguments)},n.propertyIsEnumerable[t]=r;else{if(!u(n))throw new Error("Unable to set a non-enumerable property on object.");n[t]=r}return r}throw new Error("Non-extensible objects are not allowed as keys.")}}();return d}(Function("return this")())},128);