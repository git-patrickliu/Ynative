__d(function(e,n,t,o){"use strict";var a=n(208),r=n(48),l=n(41),i=n(224),s=n(39),p=n(233),d=a.PropTypes,c="viewPager",g=function(e){function n(){var e,t,o,i;babelHelpers.classCallCheck(this,n);for(var p=arguments.length,d=Array(p),g=0;g<p;g++)d[g]=arguments[g];return t=o=babelHelpers.possibleConstructorReturn(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(d))),o.getInnerViewNode=function(){return o.refs[c].getInnerViewNode()},o._childrenWithOverridenStyle=function(){return a.Children.map(o.props.children,function(e){if(!e)return null;var n=babelHelpers.extends({},e.props,{style:[e.props.style,{position:"absolute",left:0,top:0,right:0,bottom:0,width:void 0,height:void 0}],collapsable:!1});return e.type&&e.type.displayName&&"RCTView"!==e.type.displayName&&"View"!==e.type.displayName&&console.warn("Each ViewPager child must be a <View>. Was "+e.type.displayName),a.createElement(e.type,n)})},o._onPageScroll=function(e){o.props.onPageScroll&&o.props.onPageScroll(e),"on-drag"===o.props.keyboardDismissMode&&s()},o._onPageScrollStateChanged=function(e){o.props.onPageScrollStateChanged&&o.props.onPageScrollStateChanged(e.nativeEvent.pageScrollState)},o._onPageSelected=function(e){o.props.onPageSelected&&o.props.onPageSelected(e)},o.setPage=function(e){l.dispatchViewManagerCommand(r.findNodeHandle(o),l.AndroidViewPager.Commands.setPage,[e])},o.setPageWithoutAnimation=function(e){l.dispatchViewManagerCommand(r.findNodeHandle(o),l.AndroidViewPager.Commands.setPageWithoutAnimation,[e])},i=t,babelHelpers.possibleConstructorReturn(o,i)}return babelHelpers.inherits(n,e),babelHelpers.createClass(n,[{key:"componentDidMount",value:function(){null!=this.props.initialPage&&this.setPageWithoutAnimation(this.props.initialPage)}},{key:"render",value:function(){return a.createElement(u,babelHelpers.extends({},this.props,{ref:c,style:this.props.style,onPageScroll:this._onPageScroll,onPageScrollStateChanged:this._onPageScrollStateChanged,onPageSelected:this._onPageSelected,children:this._childrenWithOverridenStyle()}))}}]),n}(a.Component);g.propTypes=babelHelpers.extends({},i,{initialPage:d.number,onPageScroll:d.func,onPageScrollStateChanged:d.func,onPageSelected:d.func,pageMargin:d.number,keyboardDismissMode:d.oneOf(["none","on-drag"]),scrollEnabled:d.bool});var u=p("AndroidViewPager",g);t.exports=g},350);