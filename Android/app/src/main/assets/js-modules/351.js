__d(function(e,t,n,a){"use strict";var o=t(225),s=t(44),i=t(208),r=t(48),l=t(235),d=t(41),p=t(207),c=t(224),g=t(216),u=t(212),h=t(233),b=t(254),m=i.PropTypes,v="webview",w=u({IDLE:null,LOADING:null,ERROR:null}),S=function(){return i.createElement(p,{style:C.loadingView},i.createElement(s,{style:C.loadingProgressBar}))},f=function(e){function t(){var e,n,a,o;babelHelpers.classCallCheck(this,t);for(var s=arguments.length,i=Array(s),l=0;l<s;l++)i[l]=arguments[l];return n=a=babelHelpers.possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a.state={viewState:w.IDLE,lastErrorEvent:null,startInLoadingState:!0},a.goForward=function(){d.dispatchViewManagerCommand(a.getWebViewHandle(),d.RCTWebView.Commands.goForward,null)},a.goBack=function(){d.dispatchViewManagerCommand(a.getWebViewHandle(),d.RCTWebView.Commands.goBack,null)},a.reload=function(){d.dispatchViewManagerCommand(a.getWebViewHandle(),d.RCTWebView.Commands.reload,null)},a.stopLoading=function(){d.dispatchViewManagerCommand(a.getWebViewHandle(),d.RCTWebView.Commands.stopLoading,null)},a.postMessage=function(e){d.dispatchViewManagerCommand(a.getWebViewHandle(),d.RCTWebView.Commands.postMessage,[String(e)])},a.injectJavaScript=function(e){d.dispatchViewManagerCommand(a.getWebViewHandle(),d.RCTWebView.Commands.injectJavaScript,[e])},a.updateNavigationState=function(e){a.props.onNavigationStateChange&&a.props.onNavigationStateChange(e.nativeEvent)},a.getWebViewHandle=function(){return r.findNodeHandle(a.refs[v])},a.onLoadingStart=function(e){var t=a.props.onLoadStart;t&&t(e),a.updateNavigationState(e)},a.onLoadingError=function(e){e.persist();var t=a.props,n=t.onError,o=t.onLoadEnd;n&&n(e),o&&o(e),console.warn("Encountered an error loading page",e.nativeEvent),a.setState({lastErrorEvent:e.nativeEvent,viewState:w.ERROR})},a.onLoadingFinish=function(e){var t=a.props,n=t.onLoad,o=t.onLoadEnd;n&&n(e),o&&o(e),a.setState({viewState:w.IDLE}),a.updateNavigationState(e)},a.onMessage=function(e){var t=a.props.onMessage;t&&t(e)},o=n,babelHelpers.possibleConstructorReturn(a,o)}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"componentWillMount",value:function(){this.props.startInLoadingState&&this.setState({viewState:w.LOADING})}},{key:"render",value:function(){var e=null;if(this.state.viewState===w.LOADING)e=(this.props.renderLoading||S)();else if(this.state.viewState===w.ERROR){var t=this.state.lastErrorEvent;e=this.props.renderError&&this.props.renderError(t.domain,t.code,t.description)}else this.state.viewState!==w.IDLE&&console.error("RCTWebView invalid state encountered: "+this.state.loading);var n=[C.container,this.props.style];this.state.viewState!==w.LOADING&&this.state.viewState!==w.ERROR||n.push(C.hidden);var a=this.props.source||{};this.props.html?a.html=this.props.html:this.props.url&&(a.uri=this.props.url),"POST"===a.method&&a.headers?console.warn("WebView: `source.headers` is not supported when using POST."):"GET"===a.method&&a.body&&console.warn("WebView: `source.body` is not supported when using GET.");var o=i.createElement(E,{ref:v,key:"webViewKey",style:n,source:b(a),scalesPageToFit:this.props.scalesPageToFit,injectedJavaScript:this.props.injectedJavaScript,userAgent:this.props.userAgent,javaScriptEnabled:this.props.javaScriptEnabled,domStorageEnabled:this.props.domStorageEnabled,messagingEnabled:"function"==typeof this.props.onMessage,onMessage:this.onMessage,contentInset:this.props.contentInset,automaticallyAdjustContentInsets:this.props.automaticallyAdjustContentInsets,onContentSizeChange:this.props.onContentSizeChange,onLoadingStart:this.onLoadingStart,onLoadingFinish:this.onLoadingFinish,onLoadingError:this.onLoadingError,testID:this.props.testID,mediaPlaybackRequiresUserAction:this.props.mediaPlaybackRequiresUserAction,allowUniversalAccessFromFileURLs:this.props.allowUniversalAccessFromFileURLs,mixedContentMode:this.props.mixedContentMode});return i.createElement(p,{style:C.container},o,e)}}]),t}(i.Component);f.propTypes=babelHelpers.extends({},c,{renderError:m.func,renderLoading:m.func,onLoad:m.func,onLoadEnd:m.func,onLoadStart:m.func,onError:m.func,automaticallyAdjustContentInsets:m.bool,contentInset:o,onNavigationStateChange:m.func,onMessage:m.func,onContentSizeChange:m.func,startInLoadingState:m.bool,style:c.style,html:g(m.string,"Use the `source` prop instead."),url:g(m.string,"Use the `source` prop instead."),source:m.oneOfType([m.shape({uri:m.string,method:m.oneOf(["GET","POST"]),headers:m.object,body:m.string}),m.shape({html:m.string,baseUrl:m.string}),m.number]),javaScriptEnabled:m.bool,domStorageEnabled:m.bool,injectedJavaScript:m.string,scalesPageToFit:m.bool,userAgent:m.string,testID:m.string,mediaPlaybackRequiresUserAction:m.bool,allowUniversalAccessFromFileURLs:m.bool,injectJavaScript:m.func,mixedContentMode:m.oneOf(["never","always","compatibility"])}),f.defaultProps={javaScriptEnabled:!0,scalesPageToFit:!0};var E=h("RCTWebView",f,{nativeOnly:{messagingEnabled:m.bool}}),C=l.create({container:{flex:1},hidden:{height:0,flex:0},loadingView:{flex:1,justifyContent:"center",alignItems:"center"},loadingProgressBar:{height:20}});n.exports=f},351);