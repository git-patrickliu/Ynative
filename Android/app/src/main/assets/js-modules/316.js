__d(function(e,t,o,r){"use strict";var i=t(38),n=t(317),a=(t(27),t(208)),s=t(275),h=t(207),l=t(224),d=a.PropTypes,u="VIEW",b=a.createClass({displayName:"KeyboardAvoidingView",mixins:[s],propTypes:babelHelpers.extends({},l,{behavior:d.oneOf(["height","position","padding"]),contentContainerStyle:l.style,keyboardVerticalOffset:d.number.isRequired}),getDefaultProps:function(){return{keyboardVerticalOffset:0}},getInitialState:function(){return{bottom:0}},subscriptions:[],frame:null,relativeKeyboardHeight:function(e){var t=this.frame;if(!t||!e)return 0;var o=Math.max(t.y,e.screenY-this.props.keyboardVerticalOffset),r=Math.min(t.y+t.height,e.screenY+e.height-this.props.keyboardVerticalOffset);return t.y>e.screenY?t.y+t.height-e.screenY-this.props.keyboardVerticalOffset:Math.max(r-o,0)},onKeyboardChange:function(e){if(!e)return void this.setState({bottom:0});var t=e.duration,o=e.easing,r=e.endCoordinates,i=this.relativeKeyboardHeight(r);t&&o&&n.configureNext({duration:t,update:{duration:t,type:n.Types[o]||"keyboard"}}),this.setState({bottom:i})},onLayout:function(e){this.frame=e.nativeEvent.layout},componentWillUpdate:function(e,t,o){t.bottom===this.state.bottom&&"height"===this.props.behavior&&"height"===e.behavior&&(t.bottom=0)},componentWillMount:function(){this.subscriptions=[i.addListener("keyboardDidHide",this.onKeyboardChange),i.addListener("keyboardDidShow",this.onKeyboardChange)]},componentWillUnmount:function(){this.subscriptions.forEach(function(e){return e.remove()})},render:function(){var e=this.props,t=e.behavior,o=e.children,r=e.style,i=babelHelpers.objectWithoutProperties(e,["behavior","children","style"]);switch(t){case"height":var n=void 0;return this.frame&&(n={height:this.frame.height-this.state.bottom,flex:0}),a.createElement(h,babelHelpers.extends({ref:u,style:[r,n],onLayout:this.onLayout},i),o);case"position":var s={bottom:this.state.bottom},l=this.props.contentContainerStyle;return a.createElement(h,babelHelpers.extends({ref:u,style:r,onLayout:this.onLayout},i),a.createElement(h,{style:[l,s]},o));case"padding":var d={paddingBottom:this.state.bottom};return a.createElement(h,babelHelpers.extends({ref:u,style:[r,d],onLayout:this.onLayout},i),o);default:return a.createElement(h,babelHelpers.extends({ref:u,onLayout:this.onLayout,style:r},i),o)}}});o.exports=b},316);