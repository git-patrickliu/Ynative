__d(function(e,r,t,a){"use strict";function o(){u.addFileSource("react_hierarchy.txt",function(){return r(356)()})}var n=r(31),l=r(128),i=r(282),u=function(){function e(){babelHelpers.classCallCheck(this,e)}return babelHelpers.createClass(e,null,[{key:"_maybeInit",value:function(){e._subscription||(e._subscription=n.addListener("collectBugExtraData",e.collectExtraData,null),o())}},{key:"addSource",value:function(r,t){return this._addSource(r,t,e._extraSources)}},{key:"addFileSource",value:function(r,t){return this._addSource(r,t,e._fileSources)}},{key:"_addSource",value:function(r,t,a){return e._maybeInit(),a.has(r)&&console.warn("BugReporting.add* called multiple times for same key '"+r+"'"),a.set(r,t),{remove:function(){a.delete(r)}}}},{key:"collectExtraData",value:function(){for(var t={},a=e._extraSources,o=Array.isArray(a),n=0,a=o?a:a["function"==typeof Symbol?Symbol.iterator:"@@iterator"]();;){var l;if(o){if(n>=a.length)break;l=a[n++]}else{if(n=a.next(),n.done)break;l=n.value}var u=l,c=babelHelpers.slicedToArray(u,2),s=c[0],f=c[1];t[s]=f()}for(var d={},b=e._fileSources,y=Array.isArray(b),_=0,b=y?b:b["function"==typeof Symbol?Symbol.iterator:"@@iterator"]();;){var v;if(y){if(_>=b.length)break;v=b[_++]}else{if(_=b.next(),_.done)break;v=_.value}var S=v,p=babelHelpers.slicedToArray(S,2),x=p[0],k=p[1];d[x]=k()}i("BugReporting extraData:",t);var m=r(17).BugReporting;return m&&m.setExtraData&&m.setExtraData(t,d),{extras:t,files:d}}}]),e}();u._extraSources=new l,u._fileSources=new l,u._subscription=null,t.exports=u},355);