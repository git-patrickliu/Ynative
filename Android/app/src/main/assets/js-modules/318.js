__d(function(e,t,r,o){"use strict";var n,s=(t(319),t(320)),a=(t(27),t(208)),i=t(235),p=t(207),l=t(216),d=t(233),u=d("RCTModalHostView",null),h=a.PropTypes,c=function(e){function t(){return babelHelpers.classCallCheck(this,t),babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"render",value:function(){if(this.props.visible===!1)return null;var e={backgroundColor:this.props.transparent?"transparent":"white"},t=this.props.animationType;t||(t="none",this.props.animated&&(t="slide"));var r=this.props.children;return a.createElement(u,{animationType:t,transparent:this.props.transparent,hardwareAccelerated:this.props.hardwareAccelerated,onRequestClose:this.props.onRequestClose,onShow:this.props.onShow,style:f.modal,onStartShouldSetResponder:this._shouldSetResponder,supportedOrientations:this.props.supportedOrientations,onOrientationChange:this.props.onOrientationChange},a.createElement(p,{style:[f.container,e]},r))}},{key:"_shouldSetResponder",value:function(){return!0}}]),t}(a.Component);c.propTypes={animationType:h.oneOf(["none","slide","fade"]),transparent:h.bool,hardwareAccelerated:h.bool,visible:h.bool,onRequestClose:h.func.isRequired,onShow:h.func,animated:l(h.bool,"Use the `animationType` prop instead."),supportedOrientations:h.arrayOf(h.oneOf(["portrait","portrait-upside-down","landscape","landscape-left","landscape-right"])),onOrientationChange:h.func},c.defaultProps={visible:!0,hardwareAccelerated:!1},c.contextTypes={rootTag:a.PropTypes.number};var b=s.isRTL?"right":"left",f=i.create({modal:{position:"absolute"},container:(n={position:"absolute"},babelHelpers.defineProperty(n,b,0),babelHelpers.defineProperty(n,"top",0),n)});r.exports=c},318);