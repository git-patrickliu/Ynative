__d(function(e,t,n,r){"use strict";var o=t(136),a=t(137),c=t(147),u=t(90),v=t(148),i=t(83),l=(t(14),{}),s=function(e,t){for(var n=[],r=0;r<t.length;r++)n.push(e[t[r]]);return n},h=function(e,t){for(var n=[],r=e,o=0;o<t.length;o++){var a=t[o];n.push(e[a]),r[a]=null}for(var c=0,u=0;u<r.length;u++){var v=r[u];null!==v&&(r[c++]=v)}return r.length=c,n},g=babelHelpers.extends({},c,{registrationNames:a.registrationNameModules,getListener:o.getListener,_receiveRootNodeIDEvent:function(e,t,n){var r=n||l,o=u.getInstanceFromNode(e);i.batchedUpdates(function(){g.handleTopLevel(t,o,r,r.target)})},receiveEvent:function(e,t,n){var r=e;g._receiveRootNodeIDEvent(r,t,n)},receiveTouches:function(e,t,n){for(var r="topTouchEnd"===e||"topTouchCancel"===e?h(t,n):s(t,n),o=0;o<r.length;o++){var a=r[o];a.changedTouches=r,a.touches=t;var c=a,u=null,i=c.target;null!==i&&void 0!==i&&(i<v.tagsStartAt||(u=i)),g._receiveRootNodeIDEvent(u,e,c)}}});n.exports=g},146);