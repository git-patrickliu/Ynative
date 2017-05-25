__d(function(e,r,t,i){"use strict";var s=r(415),n=r(417),u=r(15),o=r(13),c=function(){function e(r){babelHelpers.classCallCheck(this,e),this._subscriber=r||new n}return babelHelpers.createClass(e,[{key:"addListener",value:function(e,r,t){return this._subscriber.addSubscription(e,new s(this,this._subscriber,r,t))}},{key:"once",value:function(e,r,t){var i=this;return this.addListener(e,function(){for(var e=arguments.length,s=Array(e),n=0;n<e;n++)s[n]=arguments[n];i.removeCurrentListener(),r.apply(t,s)})}},{key:"removeAllListeners",value:function(e){this._subscriber.removeAllSubscriptions(e)}},{key:"removeCurrentListener",value:function(){o(!!this._currentSubscription,"Not in an emitting cycle; there is no current subscription"),this.removeSubscription(this._currentSubscription)}},{key:"removeSubscription",value:function(e){o(e.emitter===this,"Subscription does not belong to this emitter."),this._subscriber.removeSubscription(e)}},{key:"listeners",value:function(e){var r=this._subscriber.getSubscriptionsForType(e);return r?r.filter(u.thatReturnsTrue).map(function(e){return e.listener}):[]}},{key:"emit",value:function(e){var r=this._subscriber.getSubscriptionsForType(e);if(r){for(var t=0,i=r.length;t<i;t++){var s=r[t];s&&(this._currentSubscription=s,s.listener.apply(s.context,Array.prototype.slice.call(arguments,1)))}this._currentSubscription=null}}},{key:"removeListener",value:function(e,r){var t=this._subscriber.getSubscriptionsForType(e);if(t)for(var i=0,s=t.length;i<s;i++){var n=t[i];n&&n.listener===r&&n.remove()}}}]),e}();t.exports=c},414);