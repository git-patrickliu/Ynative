__d(function(e,r,o,t){"use strict";function s(e,r,o){var t=i[e];if(!t||!t.NativeProps)return T(!1,'Native component for "%s" does not exist',e),n;t.uiViewClassName=e,t.validAttributes={},r?t.propTypes="object"==typeof r.__propTypesSecretDontUseThesePlease?r.__propTypesSecretDontUseThesePlease:r.propTypes:t.propTypes=null;var s=babelHelpers.extends({},i.RCTView.NativeProps,t.NativeProps);for(var a in s){var C=!1,u={},v=d[s[a]];v&&(u.diff=v,C=!0);var c=I[s[a]];c&&(u.process=c,C=!0),t.validAttributes[a]=!C||u}return t.validAttributes.style=p,l(t)}function a(e){return e&&e.map(c)}var p=r(209),i=r(41),n=r(234),l=r(240),C=r(251),u=r(252),v=r(253),c=r(219),f=r(254),y=r(222),T=(r(258),r(14)),d={CATransform3D:u,CGPoint:v,CGSize:y,UIEdgeInsets:C},I={CGColor:c,CGColorArray:a,UIColor:c,UIColorArray:a,CGImage:f,UIImage:f,RCTImageSource:f,Color:c,ColorArray:a};o.exports=s},233);