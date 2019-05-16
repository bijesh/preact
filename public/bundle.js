!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){r(1),e.exports=self.fetch.bind(self)},function(e,t,r){"use strict";r.r(t),r.d(t,"Headers",function(){return u}),r.d(t,"Request",function(){return b}),r.d(t,"Response",function(){return v}),r.d(t,"DOMException",function(){return g}),r.d(t,"fetch",function(){return w});var n={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(n.arrayBuffer)var o=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],i=ArrayBuffer.isView||function(e){return e&&o.indexOf(Object.prototype.toString.call(e))>-1};function s(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function a(e){return"string"!=typeof e&&(e=String(e)),e}function l(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return n.iterable&&(t[Symbol.iterator]=function(){return t}),t}function u(e){this.map={},e instanceof u?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function f(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function p(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function c(e){var t=new FileReader,r=p(t);return t.readAsArrayBuffer(e),r}function d(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function h(){return this.bodyUsed=!1,this._initBody=function(e){var t;this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:n.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:n.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:n.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():n.arrayBuffer&&n.blob&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=d(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):n.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||i(e))?this._bodyArrayBuffer=d(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n.blob&&(this.blob=function(){var e=f(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(c)}),this.text=function(){var e,t,r,n=f(this);if(n)return n;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,r=p(t),t.readAsText(e),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},n.formData&&(this.formData=function(){return this.text().then(m)}),this.json=function(){return this.text().then(JSON.parse)},this}u.prototype.append=function(e,t){e=s(e),t=a(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},u.prototype.delete=function(e){delete this.map[s(e)]},u.prototype.get=function(e){return e=s(e),this.has(e)?this.map[e]:null},u.prototype.has=function(e){return this.map.hasOwnProperty(s(e))},u.prototype.set=function(e,t){this.map[s(e)]=a(t)},u.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},u.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),l(e)},u.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),l(e)},u.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),l(e)},n.iterable&&(u.prototype[Symbol.iterator]=u.prototype.entries);var y=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function b(e,t){var r,n,o=(t=t||{}).body;if(e instanceof b){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new u(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new u(t.headers)),this.method=(r=t.method||this.method||"GET",n=r.toUpperCase(),y.indexOf(n)>-1?n:r),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function m(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}}),t}function v(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new u(t.headers),this.url=t.url||"",this._initBody(e)}b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},h.call(b.prototype),h.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new u(this.headers),url:this.url})},v.error=function(){var e=new v(null,{status:0,statusText:""});return e.type="error",e};var _=[301,302,303,307,308];v.redirect=function(e,t){if(-1===_.indexOf(t))throw new RangeError("Invalid status code");return new v(null,{status:t,headers:{location:e}})};var g=self.DOMException;try{new g}catch(e){(g=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack}).prototype=Object.create(Error.prototype),g.prototype.constructor=g}function w(e,t){return new Promise(function(r,o){var i=new b(e,t);if(i.signal&&i.signal.aborted)return o(new g("Aborted","AbortError"));var s=new XMLHttpRequest;function a(){s.abort()}s.onload=function(){var e,t,n={status:s.status,statusText:s.statusText,headers:(e=s.getAllResponseHeaders()||"",t=new u,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}}),t)};n.url="responseURL"in s?s.responseURL:n.headers.get("X-Request-URL");var o="response"in s?s.response:s.responseText;r(new v(o,n))},s.onerror=function(){o(new TypeError("Network request failed"))},s.ontimeout=function(){o(new TypeError("Network request failed"))},s.onabort=function(){o(new g("Aborted","AbortError"))},s.open(i.method,i.url,!0),"include"===i.credentials?s.withCredentials=!0:"omit"===i.credentials&&(s.withCredentials=!1),"responseType"in s&&n.blob&&(s.responseType="blob"),i.headers.forEach(function(e,t){s.setRequestHeader(t,e)}),i.signal&&(i.signal.addEventListener("abort",a),s.onreadystatechange=function(){4===s.readyState&&i.signal.removeEventListener("abort",a)}),s.send(void 0===i._bodyInit?null:i._bodyInit)})}w.polyfill=!0,self.fetch||(self.fetch=w,self.Headers=u,self.Request=b,self.Response=v)},function(e,t,r){"use strict";r.r(t);var n=function(){},o={},i=[],s=[];function a(e,t){var r,a,l,u,f=s;for(u=arguments.length;u-- >2;)i.push(arguments[u]);for(t&&null!=t.children&&(i.length||i.push(t.children),delete t.children);i.length;)if((a=i.pop())&&void 0!==a.pop)for(u=a.length;u--;)i.push(a[u]);else"boolean"==typeof a&&(a=null),(l="function"!=typeof e)&&(null==a?a="":"number"==typeof a?a=String(a):"string"!=typeof a&&(l=!1)),l&&r?f[f.length-1]+=a:f===s?f=[a]:f.push(a),r=l;var p=new n;return p.nodeName=e,p.children=f,p.attributes=null==t?void 0:t,p.key=null==t?void 0:t.key,void 0!==o.vnode&&o.vnode(p),p}function l(e,t){for(var r in t)e[r]=t[r];return e}function u(e,t){null!=e&&("function"==typeof e?e(t):e.current=t)}var f="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;var p=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,c=[];function d(e){!e._dirty&&(e._dirty=!0)&&1==c.push(e)&&(o.debounceRendering||f)(h)}function h(){for(var e;e=c.pop();)e._dirty&&k(e)}function y(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function b(e){var t=l({},e.attributes);t.children=e.children;var r=e.nodeName.defaultProps;if(void 0!==r)for(var n in r)void 0===t[n]&&(t[n]=r[n]);return t}function m(e){var t=e.parentNode;t&&t.removeChild(e)}function v(e,t,r,n,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)u(r,null),u(n,e);else if("class"!==t||o)if("style"===t){if(n&&"string"!=typeof n&&"string"!=typeof r||(e.style.cssText=n||""),n&&"object"==typeof n){if("string"!=typeof r)for(var i in r)i in n||(e.style[i]="");for(var i in n)e.style[i]="number"==typeof n[i]&&!1===p.test(i)?n[i]+"px":n[i]}}else if("dangerouslySetInnerHTML"===t)n&&(e.innerHTML=n.__html||"");else if("o"==t[0]&&"n"==t[1]){var s=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),n?r||e.addEventListener(t,_,s):e.removeEventListener(t,_,s),(e._listeners||(e._listeners={}))[t]=n}else if("list"!==t&&"type"!==t&&!o&&t in e){try{e[t]=null==n?"":n}catch(e){}null!=n&&!1!==n||"spellcheck"==t||e.removeAttribute(t)}else{var a=o&&t!==(t=t.replace(/^xlink:?/,""));null==n||!1===n?a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof n&&(a?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):e.setAttribute(t,n))}else e.className=n||""}function _(e){return this._listeners[e.type](o.event&&o.event(e)||e)}var g=[],w=0,x=!1,C=!1;function B(){for(var e;e=g.shift();)o.afterMount&&o.afterMount(e),e.componentDidMount&&e.componentDidMount()}function T(e,t,r,n,o,i){w++||(x=null!=o&&void 0!==o.ownerSVGElement,C=null!=e&&!("__preactattr_"in e));var s=S(e,t,r,n,i);return o&&s.parentNode!==o&&o.appendChild(s),--w||(C=!1,i||B()),s}function S(e,t,r,n,o){var i=e,s=x;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),A(e,!0))),i.__preactattr_=!0,i;var a,l,u=t.nodeName;if("function"==typeof u)return function(e,t,r,n){var o=e&&e._component,i=o,s=e,a=o&&e._componentConstructor===t.nodeName,l=a,u=b(t);for(;o&&!l&&(o=o._parentComponent);)l=o.constructor===t.nodeName;o&&l&&(!n||o._component)?(O(o,u,3,r,n),e=o.base):(i&&!a&&(j(i),e=s=null),o=U(t.nodeName,u,r),e&&!o.nextBase&&(o.nextBase=e,s=null),O(o,u,1,r,n),e=o.base,s&&e!==s&&(s._component=null,A(s,!1)));return e}(e,t,r,n);if(x="svg"===u||"foreignObject"!==u&&x,u=String(u),(!e||!y(e,u))&&(a=u,(l=x?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a)).normalizedNodeName=a,i=l,e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),A(e,!0)}var f=i.firstChild,p=i.__preactattr_,c=t.children;if(null==p){p=i.__preactattr_={};for(var d=i.attributes,h=d.length;h--;)p[d[h].name]=d[h].value}return!C&&c&&1===c.length&&"string"==typeof c[0]&&null!=f&&void 0!==f.splitText&&null==f.nextSibling?f.nodeValue!=c[0]&&(f.nodeValue=c[0]):(c&&c.length||null!=f)&&function(e,t,r,n,o){var i,s,a,l,u,f=e.childNodes,p=[],c={},d=0,h=0,b=f.length,v=0,_=t?t.length:0;if(0!==b)for(var g=0;g<b;g++){var w=f[g],x=w.__preactattr_,C=_&&x?w._component?w._component.__key:x.key:null;null!=C?(d++,c[C]=w):(x||(void 0!==w.splitText?!o||w.nodeValue.trim():o))&&(p[v++]=w)}if(0!==_)for(var g=0;g<_;g++){l=t[g],u=null;var C=l.key;if(null!=C)d&&void 0!==c[C]&&(u=c[C],c[C]=void 0,d--);else if(h<v)for(i=h;i<v;i++)if(void 0!==p[i]&&(B=s=p[i],P=o,"string"==typeof(T=l)||"number"==typeof T?void 0!==B.splitText:"string"==typeof T.nodeName?!B._componentConstructor&&y(B,T.nodeName):P||B._componentConstructor===T.nodeName)){u=s,p[i]=void 0,i===v-1&&v--,i===h&&h++;break}u=S(u,l,r,n),a=f[g],u&&u!==e&&u!==a&&(null==a?e.appendChild(u):u===a.nextSibling?m(a):e.insertBefore(u,a))}var B,T,P;if(d)for(var g in c)void 0!==c[g]&&A(c[g],!1);for(;h<=v;)void 0!==(u=p[v--])&&A(u,!1)}(i,c,r,n,C||null!=p.dangerouslySetInnerHTML),function(e,t,r){var n;for(n in r)t&&null!=t[n]||null==r[n]||v(e,n,r[n],r[n]=void 0,x);for(n in t)"children"===n||"innerHTML"===n||n in r&&t[n]===("value"===n||"checked"===n?e[n]:r[n])||v(e,n,r[n],r[n]=t[n],x)}(i,t.attributes,p),x=s,i}function A(e,t){var r=e._component;r?j(r):(null!=e.__preactattr_&&u(e.__preactattr_.ref,null),!1!==t&&null!=e.__preactattr_||m(e),P(e))}function P(e){for(e=e.lastChild;e;){var t=e.previousSibling;A(e,!0),e=t}}var E=[];function U(e,t,r){var n,o=E.length;for(e.prototype&&e.prototype.render?(n=new e(t,r),D.call(n,t,r)):((n=new D(t,r)).constructor=e,n.render=N);o--;)if(E[o].constructor===e)return n.nextBase=E[o].nextBase,E.splice(o,1),n;return n}function N(e,t,r){return this.constructor(e,r)}function O(e,t,r,n,i){e._disable||(e._disable=!0,e.__ref=t.ref,e.__key=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,n)),n&&n!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=n),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==r&&(1!==r&&!1===o.syncComponentUpdates&&e.base?d(e):k(e,1,i)),u(e.__ref,e))}function k(e,t,r,n){if(!e._disable){var i,s,a,u=e.props,f=e.state,p=e.context,c=e.prevProps||u,d=e.prevState||f,h=e.prevContext||p,y=e.base,m=e.nextBase,v=y||m,_=e._component,x=!1,C=h;if(e.constructor.getDerivedStateFromProps&&(f=l(l({},f),e.constructor.getDerivedStateFromProps(u,f)),e.state=f),y&&(e.props=c,e.state=d,e.context=h,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(u,f,p)?x=!0:e.componentWillUpdate&&e.componentWillUpdate(u,f,p),e.props=u,e.state=f,e.context=p),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!x){i=e.render(u,f,p),e.getChildContext&&(p=l(l({},p),e.getChildContext())),y&&e.getSnapshotBeforeUpdate&&(C=e.getSnapshotBeforeUpdate(c,d));var S,P,E=i&&i.nodeName;if("function"==typeof E){var N=b(i);(s=_)&&s.constructor===E&&N.key==s.__key?O(s,N,1,p,!1):(S=s,e._component=s=U(E,N,p),s.nextBase=s.nextBase||m,s._parentComponent=e,O(s,N,0,p,!1),k(s,1,r,!0)),P=s.base}else a=v,(S=_)&&(a=e._component=null),(v||1===t)&&(a&&(a._component=null),P=T(a,i,p,r||!y,v&&v.parentNode,!0));if(v&&P!==v&&s!==_){var D=v.parentNode;D&&P!==D&&(D.replaceChild(P,v),S||(v._component=null,A(v,!1)))}if(S&&j(S),e.base=P,P&&!n){for(var L=e,R=e;R=R._parentComponent;)(L=R).base=P;P._component=L,P._componentConstructor=L.constructor}}for(!y||r?g.push(e):x||(e.componentDidUpdate&&e.componentDidUpdate(c,d,C),o.afterUpdate&&o.afterUpdate(e));e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);w||n||B()}}function j(e){o.beforeUnmount&&o.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var r=e._component;r?j(r):t&&(null!=t.__preactattr_&&u(t.__preactattr_.ref,null),e.nextBase=t,m(t),E.push(e),P(t)),u(e.__ref,null)}function D(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}function L(e,t,r){return T(r,e,{},!1,t,!1)}l(D.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=l(l({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),d(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),k(this,2)},render:function(){}});var R=function(e){var t=e.posts.map(function(e,t){return a("li",{key:t},e.title)});return a("ul",null,t)},F=r(0),I=r.n(F);function M(e){L(a(R,{posts:e}),document.querySelector("body"),document.querySelector("#root"))}window.__posts__?M(window.__posts__):I()("http://localhost:3005/posts").then(function(e){return e.json()}).then(M)}]);