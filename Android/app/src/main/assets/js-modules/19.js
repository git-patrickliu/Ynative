__d(function(e,t,l,u){"use strict";var s=t(20),i=t(21),a=t(22),n=(t(28),t(13)),h=(t(29),0),c=1,_=0,o=1,r=2,d=5,v=function(){function t(){babelHelpers.classCallCheck(this,t),this._callableModules={},this._queue=[[],[],[],0],this._callbacks=[],this._callbackID=0,this._callID=0,this._lastFlush=0,this._eventLoopStartTime=(new Date).getTime(),this.callFunctionReturnFlushedQueue=this.callFunctionReturnFlushedQueue.bind(this),this.callFunctionReturnResultAndFlushedQueue=this.callFunctionReturnResultAndFlushedQueue.bind(this),this.flushedQueue=this.flushedQueue.bind(this),this.invokeCallbackAndReturnFlushedQueue=this.invokeCallbackAndReturnFlushedQueue.bind(this)}return babelHelpers.createClass(t,[{key:"callFunctionReturnFlushedQueue",value:function(e,t,l){var u=this;return this.__guard(function(){u.__callFunction(e,t,l),u.__callImmediates()}),this.flushedQueue()}},{key:"callFunctionReturnResultAndFlushedQueue",value:function(e,t,l){var u=this,s=void 0;return this.__guard(function(){s=u.__callFunction(e,t,l),u.__callImmediates()}),[s,this.flushedQueue()]}},{key:"invokeCallbackAndReturnFlushedQueue",value:function(e,t){var l=this;return this.__guard(function(){l.__invokeCallback(e,t),l.__callImmediates()}),this.flushedQueue()}},{key:"flushedQueue",value:function(){this.__callImmediates();var e=this._queue;return this._queue=[[],[],[],this._callID],e[0].length?e:null}},{key:"getEventLoopRunningTime",value:function(){return(new Date).getTime()-this._eventLoopStartTime}},{key:"registerCallableModule",value:function(e,t){this._callableModules[e]=t}},{key:"enqueueNativeCall",value:function(t,l,u,s,i){(s||i)&&(s&&u.push(this._callbackID),this._callbacks[this._callbackID++]=s,i&&u.push(this._callbackID),this._callbacks[this._callbackID++]=i),this._callID++,this._queue[_].push(t),this._queue[o].push(l),this._queue[r].push(u);var n=(new Date).getTime();if(e.nativeFlushQueueImmediate&&(n-this._lastFlush>=d||0===this._inCall)){var h=this._queue;this._queue=[[],[],[],this._callID],this._lastFlush=n,e.nativeFlushQueueImmediate(h)}a.counterEvent("pending_js_to_native_queue",this._queue[0].length),this.__spy&&this.__spy({type:c,module:t+"",method:l,args:u})}},{key:"createDebugLookup",value:function(e,t,l){}},{key:"__guard",value:function(e){this._inCall++;try{e()}catch(e){s.reportFatalError(e)}finally{this._inCall--}}},{key:"__callImmediates",value:function(){a.beginEvent("JSTimersExecution.callImmediates()"),this.__guard(function(){return i.callImmediates()}),a.endEvent()}},{key:"__callFunction",value:function(e,t,l){this._lastFlush=(new Date).getTime(),this._eventLoopStartTime=this._lastFlush,a.beginEvent(e+"."+t+"()"),this.__spy&&this.__spy({type:h,module:e,method:t,args:l});var u=this._callableModules[e];n(!!u,"Module %s is not a registered callable module (calling %s)",e,t),n(!!u[t],"Method %s does not exist on module %s",t,e);var s=u[t].apply(u,l);return a.endEvent(),s}},{key:"__invokeCallback",value:function(e,t){this._lastFlush=(new Date).getTime(),this._eventLoopStartTime=this._lastFlush;var l=this._callbacks[e];l&&(this._callbacks[e&-2]=null,this._callbacks[1|e]=null,l.apply(null,t))}}],[{key:"spy",value:function(e){e===!0?t.prototype.__spy=function(e){console.log((e.type===h?"N->JS":"JS->N")+" : "+(""+(e.module?e.module+".":"")+e.method)+("("+JSON.stringify(e.args)+")"))}:e===!1?t.prototype.__spy=null:t.prototype.__spy=e}}]),t}();l.exports=v},19);