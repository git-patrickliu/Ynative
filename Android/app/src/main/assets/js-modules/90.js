__d(function(e,n,t,o){"use strict";function r(e){for(var n;n=e._renderedComponent;)e=n;return e}function a(e,n){var t=r(e);v[n]=t}function c(e,n){v[n]=e}function u(e){var n=e._rootNodeID;n&&delete v[n]}function d(e){delete v[e],delete g[e]}function i(e){return v[e]||null}function s(e){var n="number"!=typeof e.tag?e._rootNodeID:e.stateNode._nativeTag;return N(n,"All native instances should have a tag."),n}function f(e){return g[e._nativeTag]||null}function l(e,n){g[e]=n}var N=n(13),v={},g={},p={getClosestInstanceFromNode:i,getInstanceFromNode:i,getNodeFromInstance:s,precacheFiberNode:c,precacheNode:a,uncacheFiberNode:d,uncacheNode:u,getFiberCurrentPropsFromNode:f,updateFiberProps:l};t.exports=p},90);