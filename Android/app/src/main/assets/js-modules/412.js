__d(function(t,e,s,n){"use strict";var i=e(13),a=function(){function t(){babelHelpers.classCallCheck(this,t),this._list=[]}return babelHelpers.createClass(t,[{key:"get",value:function(t,e,s){var n=void 0;return this._list.length>0?(n=this._list.pop(),n.constructor.call(n,t,e,s)):n=new u(t,e,s),n}},{key:"put",value:function(t){this._list.push(t)}}]),t}(),r=new a,u=function(){function t(e,s,n){babelHelpers.classCallCheck(this,t),this.target=s,this.eventPhase=t.NONE,this._type=e,this._currentTarget=s,this._data=n,this._defaultPrevented=!1,this._disposed=!1,this._propagationStopped=!1}return babelHelpers.createClass(t,null,[{key:"pool",value:function(t,e,s){return r.get(t,e,s)}}]),babelHelpers.createClass(t,[{key:"preventDefault",value:function(){this._defaultPrevented=!0}},{key:"stopPropagation",value:function(){this._propagationStopped=!0}},{key:"stop",value:function(){this.preventDefault(),this.stopPropagation()}},{key:"isPropagationStopped",value:function(){return this._propagationStopped}},{key:"dispose",value:function(){i(!this._disposed,"NavigationEvent is already disposed"),this._disposed=!0,this.target=null,this.eventPhase=t.NONE,this._type="",this._currentTarget=null,this._data=null,this._defaultPrevented=!1,r.put(this)}},{key:"type",get:function(){return this._type}},{key:"currentTarget",get:function(){return this._currentTarget}},{key:"data",get:function(){return this._data}},{key:"defaultPrevented",get:function(){return this._defaultPrevented}}]),t}();u.NONE=0,u.CAPTURING_PHASE=1,u.AT_TARGET=2,u.BUBBLING_PHASE=3,s.exports=u},412);