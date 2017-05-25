__d(function(e,o,n,t){"use strict";var l=o(278),r=o(45),s=o(225),i=(o(27),o(293)),a=o(208),c=o(48),d=o(294),h=o(297),p=o(235),u=o(230),m=o(207),f=o(224),S=o(218),y=o(39),R=(o(89),o(13)),v=o(298),b=a.PropTypes,w=o(233),H=a.createClass({displayName:"ScrollView",propTypes:babelHelpers.extends({},f,{automaticallyAdjustContentInsets:b.bool,contentInset:s,contentOffset:i,bounces:b.bool,bouncesZoom:b.bool,alwaysBounceHorizontal:b.bool,alwaysBounceVertical:b.bool,centerContent:b.bool,contentContainerStyle:u(S),decelerationRate:b.oneOfType([b.oneOf(["fast","normal"]),b.number]),horizontal:b.bool,indicatorStyle:b.oneOf(["default","black","white"]),directionalLockEnabled:b.bool,canCancelContentTouches:b.bool,keyboardDismissMode:b.oneOf(["none","interactive","on-drag"]),keyboardShouldPersistTaps:b.oneOf(["always","never","handled",!1,!0]),maximumZoomScale:b.number,minimumZoomScale:b.number,onScroll:b.func,onScrollAnimationEnd:b.func,onContentSizeChange:b.func,pagingEnabled:b.bool,scrollEnabled:b.bool,scrollEventThrottle:b.number,scrollIndicatorInsets:s,scrollsToTop:b.bool,showsHorizontalScrollIndicator:b.bool,showsVerticalScrollIndicator:b.bool,stickyHeaderIndices:b.arrayOf(b.number),style:u(S),snapToInterval:b.number,snapToAlignment:b.oneOf(["start","center","end"]),removeClippedSubviews:b.bool,zoomScale:b.number,refreshControl:b.element,endFillColor:r,scrollPerfTag:b.string,overScrollMode:b.oneOf(["auto","always","never"])}),mixins:[d.Mixin],_scrollAnimatedValue:new l.Value(0),_scrollAnimatedValueAttachment:null,_stickyHeaderRefs:new Map,_headerLayoutYs:new Map,getInitialState:function(){return this.scrollResponderMixinGetInitialState()},componentWillMount:function(){this._scrollAnimatedValue=new l.Value(0),this._stickyHeaderRefs=new Map,this._headerLayoutYs=new Map},componentDidMount:function(){this._updateAnimatedNodeAttachment()},componentDidUpdate:function(){this._updateAnimatedNodeAttachment()},componentWillUnmount:function(){this._scrollAnimatedValueAttachment&&this._scrollAnimatedValueAttachment.detach()},setNativeProps:function(e){this._scrollViewRef&&this._scrollViewRef.setNativeProps(e)},getScrollResponder:function(){return this},getScrollableNode:function(){return c.findNodeHandle(this._scrollViewRef)},getInnerViewNode:function(){return c.findNodeHandle(this._innerViewRef)},scrollTo:function(e,o,n){if("number"==typeof e)console.warn("`scrollTo(y, x, animated)` is deprecated. Use `scrollTo({x: 5, y: 5, animated: true})` instead.");else{var t=e||{};o=t.x,e=t.y,n=t.animated}this.getScrollResponder().scrollResponderScrollTo({x:o||0,y:e||0,animated:n!==!1})},scrollToEnd:function(e){var o=(e&&e.animated)!==!1;this.getScrollResponder().scrollResponderScrollToEnd({animated:o})},scrollWithoutAnimationTo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;console.warn("`scrollWithoutAnimationTo` is deprecated. Use `scrollTo` instead"),this.scrollTo({x:o,y:e,animated:!1})},_getKeyForIndex:function(e,o){var n=o[e];return n&&n.key},_updateAnimatedNodeAttachment:function(){this.props.stickyHeaderIndices&&this.props.stickyHeaderIndices.length>0?this._scrollAnimatedValueAttachment||(this._scrollAnimatedValueAttachment=l.attachNativeEvent(this._scrollViewRef,"onScroll",[{nativeEvent:{contentOffset:{y:this._scrollAnimatedValue}}}])):this._scrollAnimatedValueAttachment&&this._scrollAnimatedValueAttachment.detach()},_setStickyHeaderRef:function(e,o){o?this._stickyHeaderRefs.set(e,o):this._stickyHeaderRefs.delete(e)},_onStickyHeaderLayout:function(e,o,n){if(this.props.stickyHeaderIndices){var t=a.Children.toArray(this.props.children);if(n===this._getKeyForIndex(e,t)){var l=o.nativeEvent.layout.y;this._headerLayoutYs.set(n,l);var r=this.props.stickyHeaderIndices.indexOf(e),s=this.props.stickyHeaderIndices[r-1];if(null!=s){var i=this._stickyHeaderRefs.get(this._getKeyForIndex(s,t));i&&i.setNextHeaderY(l)}}}},_handleScroll:function(e){"on-drag"===this.props.keyboardDismissMode&&y(),this.scrollResponderHandleScroll(e)},_handleContentOnLayout:function(e){var o=e.nativeEvent.layout,n=o.width,t=o.height;this.props.onContentSizeChange&&this.props.onContentSizeChange(n,t)},_scrollViewRef:null,_setScrollViewRef:function(e){this._scrollViewRef=e},_innerViewRef:null,_setInnerViewRef:function(e){this._innerViewRef=e},render:function(){var e=this,o=void 0,n=void 0;o=this.props.horizontal?C:g,n=m,R(void 0!==o,"ScrollViewClass must not be undefined"),R(void 0!==n,"ScrollContentContainerViewClass must not be undefined");var t=[this.props.horizontal&&_.contentContainerHorizontal,this.props.contentContainerStyle],l={};this.props.onContentSizeChange&&(l={onLayout:this._handleContentOnLayout});var r=this.props.stickyHeaderIndices,s=r&&r.length>0,i=s&&a.Children.toArray(this.props.children),c=s?i.map(function(o,n){var t=o?r.indexOf(n):-1;if(t>-1){var l=o.key,s=r[t+1];return a.createElement(h,{key:l,ref:function(o){return e._setStickyHeaderRef(l,o)},nextHeaderLayoutY:e._headerLayoutYs.get(e._getKeyForIndex(s,i)),onLayout:function(o){return e._onStickyHeaderLayout(n,o,l)},scrollAnimatedValue:e._scrollAnimatedValue},o)}return o}):this.props.children,d=a.createElement(n,babelHelpers.extends({},l,{ref:this._setInnerViewRef,style:t,removeClippedSubviews:!s&&this.props.removeClippedSubviews,collapsable:!1}),c),p=void 0!==this.props.alwaysBounceHorizontal?this.props.alwaysBounceHorizontal:this.props.horizontal,u=void 0!==this.props.alwaysBounceVertical?this.props.alwaysBounceVertical:!this.props.horizontal,f=this.props.horizontal?_.baseHorizontal:_.baseVertical,S=babelHelpers.extends({},this.props,{alwaysBounceHorizontal:p,alwaysBounceVertical:u,style:[f,this.props.style],onContentSizeChange:null,onMomentumScrollBegin:this.scrollResponderHandleMomentumScrollBegin,onMomentumScrollEnd:this.scrollResponderHandleMomentumScrollEnd,onResponderGrant:this.scrollResponderHandleResponderGrant,onResponderReject:this.scrollResponderHandleResponderReject,onResponderRelease:this.scrollResponderHandleResponderRelease,onResponderTerminate:this.scrollResponderHandleTerminate,onResponderTerminationRequest:this.scrollResponderHandleTerminationRequest,onScroll:this._handleScroll,onScrollBeginDrag:this.scrollResponderHandleScrollBeginDrag,onScrollEndDrag:this.scrollResponderHandleScrollEndDrag,onScrollShouldSetResponder:this.scrollResponderHandleScrollShouldSetResponder,onStartShouldSetResponder:this.scrollResponderHandleStartShouldSetResponder,onStartShouldSetResponderCapture:this.scrollResponderHandleStartShouldSetResponderCapture,onTouchEnd:this.scrollResponderHandleTouchEnd,onTouchMove:this.scrollResponderHandleTouchMove,onTouchStart:this.scrollResponderHandleTouchStart,scrollEventThrottle:s?1:this.props.scrollEventThrottle,sendMomentumEvents:!(!this.props.onMomentumScrollBegin&&!this.props.onMomentumScrollEnd)}),y=this.props.decelerationRate;y&&(S.decelerationRate=v(y));var b=this.props.refreshControl;return b?a.cloneElement(b,{style:S.style},a.createElement(o,babelHelpers.extends({},S,{style:f,ref:this._setScrollViewRef}),d)):a.createElement(o,babelHelpers.extends({},S,{ref:this._setScrollViewRef}),d)}}),_=p.create({baseVertical:{flexGrow:1,flexShrink:1,flexDirection:"column",overflow:"scroll"},baseHorizontal:{flexGrow:1,flexShrink:1,flexDirection:"row",overflow:"scroll"},contentContainerHorizontal:{flexDirection:"row"}}),V=void 0,g=void 0,C=void 0;V={nativeOnly:{sendMomentumEvents:!0}},g=w("RCTScrollView",H,V),C=w("AndroidHorizontalScrollView",H,V),n.exports=H},292);