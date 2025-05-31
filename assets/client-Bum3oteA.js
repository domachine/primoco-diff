var Z,b,He,H,de,Ae,Me,Le,se,re,oe,U={},Pe=[],Ze=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,K=Array.isArray;function j(t,e){for(var n in e)t[n]=e[n];return t}function _e(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function le(t,e,n){var r,a,i,s={};for(i in e)i=="key"?r=e[i]:i=="ref"?a=e[i]:s[i]=e[i];if(arguments.length>2&&(s.children=arguments.length>3?Z.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)s[i]===void 0&&(s[i]=t.defaultProps[i]);return B(t,s,r,a,null)}function B(t,e,n,r,a){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:a??++He,__i:-1,__u:0};return a==null&&b.vnode!=null&&b.vnode(i),i}function Y(t){return t.children}function O(t,e){this.props=t,this.context=e}function M(t,e){if(e==null)return t.__?M(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?M(t):null}function Fe(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return Fe(t)}}function fe(t){(!t.__d&&(t.__d=!0)&&H.push(t)&&!z.__r++||de!=b.debounceRendering)&&((de=b.debounceRendering)||Ae)(z)}function z(){for(var t,e,n,r,a,i,s,l=1;H.length;)H.length>l&&H.sort(Me),t=H.shift(),l=H.length,t.__d&&(n=void 0,a=(r=(e=t).__v).__e,i=[],s=[],e.__P&&((n=j({},r)).__v=r.__v+1,b.vnode&&b.vnode(n),ce(e.__P,n,r,e.__n,e.__P.namespaceURI,32&r.__u?[a]:null,i,a??M(r),!!(32&r.__u),s),n.__v=r.__v,n.__.__k[n.__i]=n,Re(i,n,s),n.__e!=a&&Fe(n)));z.__r=0}function Ue(t,e,n,r,a,i,s,l,c,_,h){var o,u,f,d,m,g,p=r&&r.__k||Pe,y=e.length;for(c=Ke(n,e,p,c,y),o=0;o<y;o++)(f=n.__k[o])!=null&&(u=f.__i==-1?U:p[f.__i]||U,f.__i=o,g=ce(t,f,u,a,i,s,l,c,_,h),d=f.__e,f.ref&&u.ref!=f.ref&&(u.ref&&ue(u.ref,null,f),h.push(f.ref,f.__c||d,f)),m==null&&d!=null&&(m=d),4&f.__u||u.__k===f.__k?c=De(f,c,t):typeof f.type=="function"&&g!==void 0?c=g:d&&(c=d.nextSibling),f.__u&=-7);return n.__e=m,c}function Ke(t,e,n,r,a){var i,s,l,c,_,h=n.length,o=h,u=0;for(t.__k=new Array(a),i=0;i<a;i++)(s=e[i])!=null&&typeof s!="boolean"&&typeof s!="function"?(c=i+u,(s=t.__k[i]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?B(null,s,null,null,null):K(s)?B(Y,{children:s},null,null,null):s.constructor==null&&s.__b>0?B(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=t,s.__b=t.__b+1,l=null,(_=s.__i=Ye(s,n,c,o))!=-1&&(o--,(l=n[_])&&(l.__u|=2)),l==null||l.__v==null?(_==-1&&(a>h?u--:a<h&&u++),typeof s.type!="function"&&(s.__u|=4)):_!=c&&(_==c-1?u--:_==c+1?u++:(_>c?u--:u++,s.__u|=4))):t.__k[i]=null;if(o)for(i=0;i<h;i++)(l=n[i])!=null&&(2&l.__u)==0&&(l.__e==r&&(r=M(l)),Be(l,l));return r}function De(t,e,n){var r,a;if(typeof t.type=="function"){for(r=t.__k,a=0;r&&a<r.length;a++)r[a]&&(r[a].__=t,e=De(r[a],e,n));return e}t.__e!=e&&(e&&t.type&&!n.contains(e)&&(e=M(t)),n.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Ye(t,e,n,r){var a,i,s=t.key,l=t.type,c=e[n];if(c===null&&t.key==null||c&&s==c.key&&l==c.type&&(2&c.__u)==0)return n;if(r>(c!=null&&(2&c.__u)==0?1:0))for(a=n-1,i=n+1;a>=0||i<e.length;){if(a>=0){if((c=e[a])&&(2&c.__u)==0&&s==c.key&&l==c.type)return a;a--}if(i<e.length){if((c=e[i])&&(2&c.__u)==0&&s==c.key&&l==c.type)return i;i++}}return-1}function pe(t,e,n){e[0]=="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||Ze.test(e)?n:n+"px"}function D(t,e,n,r,a){var i,s;e:if(e=="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||pe(t.style,e,"");if(n)for(e in n)r&&n[e]==r[e]||pe(t.style,e,n[e])}else if(e[0]=="o"&&e[1]=="n")i=e!=(e=e.replace(Le,"$1")),s=e.toLowerCase(),e=s in t||e=="onFocusOut"||e=="onFocusIn"?s.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r?n.u=r.u:(n.u=se,t.addEventListener(e,i?oe:re,i)):t.removeEventListener(e,i?oe:re,i);else{if(a=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&n==1?"":n))}}function he(t){return function(e){if(this.l){var n=this.l[e.type+t];if(e.t==null)e.t=se++;else if(e.t<n.u)return;return n(b.event?b.event(e):e)}}}function ce(t,e,n,r,a,i,s,l,c,_){var h,o,u,f,d,m,g,p,y,v,C,x,S,N,T,L,G,E=e.type;if(e.constructor!=null)return null;128&n.__u&&(c=!!(32&n.__u),i=[l=e.__e=n.__e]),(h=b.__b)&&h(e);e:if(typeof E=="function")try{if(p=e.props,y="prototype"in E&&E.prototype.render,v=(h=E.contextType)&&r[h.__c],C=h?v?v.props.value:h.__:r,n.__c?g=(o=e.__c=n.__c).__=o.__E:(y?e.__c=o=new E(p,C):(e.__c=o=new O(p,C),o.constructor=E,o.render=Je),v&&v.sub(o),o.props=p,o.state||(o.state={}),o.context=C,o.__n=r,u=o.__d=!0,o.__h=[],o._sb=[]),y&&o.__s==null&&(o.__s=o.state),y&&E.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=j({},o.__s)),j(o.__s,E.getDerivedStateFromProps(p,o.__s))),f=o.props,d=o.state,o.__v=e,u)y&&E.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),y&&o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(y&&E.getDerivedStateFromProps==null&&p!==f&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(p,C),!o.__e&&o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(p,o.__s,C)===!1||e.__v==n.__v){for(e.__v!=n.__v&&(o.props=p,o.state=o.__s,o.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.some(function(P){P&&(P.__=e)}),x=0;x<o._sb.length;x++)o.__h.push(o._sb[x]);o._sb=[],o.__h.length&&s.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(p,o.__s,C),y&&o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(f,d,m)})}if(o.context=C,o.props=p,o.__P=t,o.__e=!1,S=b.__r,N=0,y){for(o.state=o.__s,o.__d=!1,S&&S(e),h=o.render(o.props,o.state,o.context),T=0;T<o._sb.length;T++)o.__h.push(o._sb[T]);o._sb=[]}else do o.__d=!1,S&&S(e),h=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++N<25);o.state=o.__s,o.getChildContext!=null&&(r=j(j({},r),o.getChildContext())),y&&!u&&o.getSnapshotBeforeUpdate!=null&&(m=o.getSnapshotBeforeUpdate(f,d)),L=h,h!=null&&h.type===Y&&h.key==null&&(L=Ie(h.props.children)),l=Ue(t,K(L)?L:[L],e,n,r,a,i,s,l,c,_),o.base=e.__e,e.__u&=-161,o.__h.length&&s.push(o),g&&(o.__E=o.__=null)}catch(P){if(e.__v=null,c||i!=null)if(P.then){for(e.__u|=c?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;i[i.indexOf(l)]=null,e.__e=l}else for(G=i.length;G--;)_e(i[G]);else e.__e=n.__e,e.__k=n.__k;b.__e(P,e,n)}else i==null&&e.__v==n.__v?(e.__k=n.__k,e.__e=n.__e):l=e.__e=Ge(n.__e,e,n,r,a,i,s,c,_);return(h=b.diffed)&&h(e),128&e.__u?void 0:l}function Re(t,e,n){for(var r=0;r<n.length;r++)ue(n[r],n[++r],n[++r]);b.__c&&b.__c(e,t),t.some(function(a){try{t=a.__h,a.__h=[],t.some(function(i){i.call(a)})}catch(i){b.__e(i,a.__v)}})}function Ie(t){return typeof t!="object"||t==null||t.__b&&t.__b>0?t:K(t)?t.map(Ie):j({},t)}function Ge(t,e,n,r,a,i,s,l,c){var _,h,o,u,f,d,m,g=n.props,p=e.props,y=e.type;if(y=="svg"?a="http://www.w3.org/2000/svg":y=="math"?a="http://www.w3.org/1998/Math/MathML":a||(a="http://www.w3.org/1999/xhtml"),i!=null){for(_=0;_<i.length;_++)if((f=i[_])&&"setAttribute"in f==!!y&&(y?f.localName==y:f.nodeType==3)){t=f,i[_]=null;break}}if(t==null){if(y==null)return document.createTextNode(p);t=document.createElementNS(a,y,p.is&&p),l&&(b.__m&&b.__m(e,i),l=!1),i=null}if(y==null)g===p||l&&t.data==p||(t.data=p);else{if(i=i&&Z.call(t.childNodes),g=n.props||U,!l&&i!=null)for(g={},_=0;_<t.attributes.length;_++)g[(f=t.attributes[_]).name]=f.value;for(_ in g)if(f=g[_],_!="children"){if(_=="dangerouslySetInnerHTML")o=f;else if(!(_ in p)){if(_=="value"&&"defaultValue"in p||_=="checked"&&"defaultChecked"in p)continue;D(t,_,null,f,a)}}for(_ in p)f=p[_],_=="children"?u=f:_=="dangerouslySetInnerHTML"?h=f:_=="value"?d=f:_=="checked"?m=f:l&&typeof f!="function"||g[_]===f||D(t,_,f,g[_],a);if(h)l||o&&(h.__html==o.__html||h.__html==t.innerHTML)||(t.innerHTML=h.__html),e.__k=[];else if(o&&(t.innerHTML=""),Ue(e.type=="template"?t.content:t,K(u)?u:[u],e,n,r,y=="foreignObject"?"http://www.w3.org/1999/xhtml":a,i,s,i?i[0]:n.__k&&M(n,0),l,c),i!=null)for(_=i.length;_--;)_e(i[_]);l||(_="value",y=="progress"&&d==null?t.removeAttribute("value"):d!=null&&(d!==t[_]||y=="progress"&&!d||y=="option"&&d!=g[_])&&D(t,_,d,g[_],a),_="checked",m!=null&&m!=t[_]&&D(t,_,m,g[_],a))}return t}function ue(t,e,n){try{if(typeof t=="function"){var r=typeof t.__u=="function";r&&t.__u(),r&&e==null||(t.__u=t(e))}else t.current=e}catch(a){b.__e(a,n)}}function Be(t,e,n){var r,a;if(b.unmount&&b.unmount(t),(r=t.ref)&&(r.current&&r.current!=t.__e||ue(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){b.__e(i,e)}r.base=r.__P=null}if(r=t.__k)for(a=0;a<r.length;a++)r[a]&&Be(r[a],e,n||typeof t.type!="function");n||_e(t.__e),t.__c=t.__=t.__e=void 0}function Je(t,e,n){return this.constructor(t,n)}function Qe(t,e,n){var r,a,i,s;e==document&&(e=document.documentElement),b.__&&b.__(t,e),a=(r=!1)?null:e.__k,i=[],s=[],ce(e,t=e.__k=le(Y,null,[t]),a||U,U,e.namespaceURI,a?null:e.firstChild?Z.call(e.childNodes):null,i,a?a.__e:e.firstChild,r,s),Re(i,t,s)}Z=Pe.slice,b={__e:function(t,e,n,r){for(var a,i,s;e=e.__;)if((a=e.__c)&&!a.__)try{if((i=a.constructor)&&i.getDerivedStateFromError!=null&&(a.setState(i.getDerivedStateFromError(t)),s=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(t,r||{}),s=a.__d),s)return a.__E=a}catch(l){t=l}throw t}},He=0,O.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=j({},this.state),typeof t=="function"&&(t=t(j({},n),this.props)),t&&j(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),fe(this))},O.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),fe(this))},O.prototype.render=Y,H=[],Ae=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Me=function(t,e){return t.__v.__b-e.__v.__b},z.__r=0,Le=/(PointerCapture)$|Capture$/i,se=0,re=he(!1),oe=he(!0);const ie=({timeout:t,message:e,type:n="success"})=>{const r=document.createElement("flash-message");return t!==void 0&&(r.dataset.timeout=String(t)),r.dataset.message=e,r.dataset.type=n,r};var me={},J={},Q=34,F=10,X=13;function Oe(t){return new Function("d","return {"+t.map(function(e,n){return JSON.stringify(e)+": d["+n+'] || ""'}).join(",")+"}")}function Xe(t,e){var n=Oe(t);return function(r,a){return e(n(r),a,t)}}function ge(t){var e=Object.create(null),n=[];return t.forEach(function(r){for(var a in r)a in e||n.push(e[a]=a)}),n}function $(t,e){var n=t+"",r=n.length;return r<e?new Array(e-r+1).join(0)+n:n}function et(t){return t<0?"-"+$(-t,6):t>9999?"+"+$(t,6):$(t,4)}function tt(t){var e=t.getUTCHours(),n=t.getUTCMinutes(),r=t.getUTCSeconds(),a=t.getUTCMilliseconds();return isNaN(t)?"Invalid Date":et(t.getUTCFullYear())+"-"+$(t.getUTCMonth()+1,2)+"-"+$(t.getUTCDate(),2)+(a?"T"+$(e,2)+":"+$(n,2)+":"+$(r,2)+"."+$(a,3)+"Z":r?"T"+$(e,2)+":"+$(n,2)+":"+$(r,2)+"Z":n||e?"T"+$(e,2)+":"+$(n,2)+"Z":"")}function ve(t){var e=new RegExp('["'+t+`
\r]`),n=t.charCodeAt(0);function r(o,u){var f,d,m=a(o,function(g,p){if(f)return f(g,p-1);d=g,f=u?Xe(g,u):Oe(g)});return m.columns=d||[],m}function a(o,u){var f=[],d=o.length,m=0,g=0,p,y=d<=0,v=!1;o.charCodeAt(d-1)===F&&--d,o.charCodeAt(d-1)===X&&--d;function C(){if(y)return J;if(v)return v=!1,me;var S,N=m,T;if(o.charCodeAt(N)===Q){for(;m++<d&&o.charCodeAt(m)!==Q||o.charCodeAt(++m)===Q;);return(S=m)>=d?y=!0:(T=o.charCodeAt(m++))===F?v=!0:T===X&&(v=!0,o.charCodeAt(m)===F&&++m),o.slice(N+1,S-1).replace(/""/g,'"')}for(;m<d;){if((T=o.charCodeAt(S=m++))===F)v=!0;else if(T===X)v=!0,o.charCodeAt(m)===F&&++m;else if(T!==n)continue;return o.slice(N,S)}return y=!0,o.slice(N,d)}for(;(p=C())!==J;){for(var x=[];p!==me&&p!==J;)x.push(p),p=C();u&&(x=u(x,g++))==null||f.push(x)}return f}function i(o,u){return o.map(function(f){return u.map(function(d){return h(f[d])}).join(t)})}function s(o,u){return u==null&&(u=ge(o)),[u.map(h).join(t)].concat(i(o,u)).join(`
`)}function l(o,u){return u==null&&(u=ge(o)),i(o,u).join(`
`)}function c(o){return o.map(_).join(`
`)}function _(o){return o.map(h).join(t)}function h(o){return o==null?"":o instanceof Date?tt(o):e.test(o+="")?'"'+o.replace(/"/g,'""')+'"':o}return{parse:r,parseRows:a,format:s,formatBody:l,formatRows:c,formatRow:_,formatValue:h}}var We=function(t,e,n,r){var a;e[0]=0;for(var i=1;i<e.length;i++){var s=e[i++],l=e[i]?(e[0]|=s?1:2,n[e[i++]]):e[++i];s===3?r[0]=l:s===4?r[1]=Object.assign(r[1]||{},l):s===5?(r[1]=r[1]||{})[e[++i]]=l:s===6?r[1][e[++i]]+=l+"":s?(a=t.apply(l,We(t,l,n,["",null])),r.push(a),l[0]?e[0]|=2:(e[i-2]=0,e[i]=a)):r.push(l)}return r},ye=new Map;function nt(t){var e=ye.get(this);return e||(e=new Map,ye.set(this,e)),(e=We(this,e.get(t)||(e.set(t,e=function(n){for(var r,a,i=1,s="",l="",c=[0],_=function(u){i===1&&(u||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?c.push(0,u,s):i===3&&(u||s)?(c.push(3,u,s),i=2):i===2&&s==="..."&&u?c.push(4,u,0):i===2&&s&&!u?c.push(5,0,!0,s):i>=5&&((s||!u&&i===5)&&(c.push(i,0,s,a),i=6),u&&(c.push(i,u,0,a),i=6)),s=""},h=0;h<n.length;h++){h&&(i===1&&_(),_(h));for(var o=0;o<n[h].length;o++)r=n[h][o],i===1?r==="<"?(_(),c=[c],i=3):s+=r:i===4?s==="--"&&r===">"?(i=1,s=""):s=r+s[0]:l?r===l?l="":s+=r:r==='"'||r==="'"?l=r:r===">"?(_(),i=1):i&&(r==="="?(i=5,a=s,s=""):r==="/"&&(i<5||n[h][o+1]===">")?(_(),i===3&&(c=c[0]),i=c,(c=c[0]).push(2,0,i),i=0):r===" "||r==="	"||r===`
`||r==="\r"?(_(),i=2):s+=r),i===3&&s==="!--"&&(i=4,c=c[0])}return _(),c}(t)),e),arguments,[])).length>1?e:e[0]}var ee=nt.bind(le),q,w,te,be,V=0,ze=[],k=b,we=k.__b,ke=k.__r,Ce=k.diffed,$e=k.__c,Se=k.unmount,Te=k.__;function qe(t,e){k.__h&&k.__h(w,t,V||e),V=0;var n=w.__H||(w.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function Ee(t){return V=1,rt(Ve,t)}function rt(t,e,n){var r=qe(q++,2);if(r.t=t,!r.__c&&(r.__=[Ve(void 0,e),function(l){var c=r.__N?r.__N[0]:r.__[0],_=r.t(c,l);c!==_&&(r.__N=[_,r.__[1]],r.__c.setState({}))}],r.__c=w,!w.__f)){var a=function(l,c,_){if(!r.__c.__H)return!0;var h=r.__c.__H.__.filter(function(u){return!!u.__c});if(h.every(function(u){return!u.__N}))return!i||i.call(this,l,c,_);var o=r.__c.props!==l;return h.forEach(function(u){if(u.__N){var f=u.__[0];u.__=u.__N,u.__N=void 0,f!==u.__[0]&&(o=!0)}}),i&&i.call(this,l,c,_)||o};w.__f=!0;var i=w.shouldComponentUpdate,s=w.componentWillUpdate;w.componentWillUpdate=function(l,c,_){if(this.__e){var h=i;i=void 0,a(l,c,_),i=h}s&&s.call(this,l,c,_)},w.shouldComponentUpdate=a}return r.__N||r.__}function xe(t){return V=5,ot(function(){return{current:t}},[])}function ot(t,e){var n=qe(q++,7);return st(n.__H,e)&&(n.__=t(),n.__H=e,n.__h=t),n.__}function it(){for(var t;t=ze.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(W),t.__H.__h.forEach(ae),t.__H.__h=[]}catch(e){t.__H.__h=[],k.__e(e,t.__v)}}k.__b=function(t){w=null,we&&we(t)},k.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Te&&Te(t,e)},k.__r=function(t){ke&&ke(t),q=0;var e=(w=t.__c).__H;e&&(te===w?(e.__h=[],w.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(e.__h.forEach(W),e.__h.forEach(ae),e.__h=[],q=0)),te=w},k.diffed=function(t){Ce&&Ce(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(ze.push(e)!==1&&be===k.requestAnimationFrame||((be=k.requestAnimationFrame)||at)(it)),e.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0})),te=w=null},k.__c=function(t,e){e.some(function(n){try{n.__h.forEach(W),n.__h=n.__h.filter(function(r){return!r.__||ae(r)})}catch(r){e.some(function(a){a.__h&&(a.__h=[])}),e=[],k.__e(r,n.__v)}}),$e&&$e(t,e)},k.unmount=function(t){Se&&Se(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{W(r)}catch(a){e=a}}),n.__H=void 0,e&&k.__e(e,n.__v))};var je=typeof requestAnimationFrame=="function";function at(t){var e,n=function(){clearTimeout(r),je&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,35);je&&(e=requestAnimationFrame(n))}function W(t){var e=w,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),w=e}function ae(t){var e=w;t.__c=t.__(),w=e}function st(t,e){return!t||t.length!==e.length||e.some(function(n,r){return n!==t[r]})}function Ve(t,e){return typeof e=="function"?e(t):e}const _t=()=>{const t=xe(null),e=xe(null),[n,r]=Ee([]),[a,i]=Ee([]),s=d=>ve(";").parse(d),l=d=>{const m=d.indexOf(`
`);return ve(";").parse(d.slice(m+1)).filter(p=>p.Typ!=="Umbuchung")},c=d=>new Promise((m,g)=>{const p=new FileReader;p.onload=()=>m(p.result),p.onerror=()=>g(p.error),p.readAsText(d,"utf-8")}),_=async()=>{const d=t.current?.files?.[0];if(d)try{const m=await c(d),g=s(m);r(g.map(p=>({value:p.Betrag,name:p["Name Zahlungsbeteiligter"],description:p.Verwendungszweck,dateRaw:p.Valutadatum,matched:!1})))}catch(m){document.body.appendChild(ie({timeout:3e3,type:"error",message:typeof m=="object"&&m!==null&&"message"in m?String(m.message):"Failed to load file"}))}},h=async()=>{const d=e.current?.files?.[0];if(d)try{const m=await c(d),g=l(m);i(g.map(p=>({value:p.Betrag,name:p.Kategorie,description:p.Notiz,dateRaw:p.Datum,matched:!1})))}catch(m){document.body.appendChild(ie({timeout:3e3,type:"error",message:typeof m=="object"&&m!==null&&"message"in m?String(m.message):"Failed to load file"}))}},o=()=>{r([]),i([])},u=()=>{const d=n.map(g=>{const p=a.findIndex(y=>y.value===g.value&&!y.matched);return p!==-1?(a[p].matched=!0,{...g,matched:!0}):g}),m=a.map(g=>({...g,matched:g.matched||!1}));r(d),i(m)},f=new Date().getFullYear();return ee`
    <main>
      <h1 class="col-1 col-span-2">Kontoauszüge vergleichen</h1>

      <h2 class="col-1 column-title">Bank Auszug</h2>
      <div class="col-1">
        <label>
          <input
            id="bankFileInput"
            type="file"
            ref=${t}
            onChange=${_}
            required
          />
        </label>
      </div>

      <div class="col-1 col-span-2">
        <button class="a-btn a-btn--primary" onClick=${o}>
          Zurücksetzen
        </button>
        <button class="a-btn a-btn--primary" onClick=${u}>
          Vergleichen
        </button>
      </div>

      <div class="col-1">
        <table>
          <thead>
            <tr>
              <th style="text-align:right">Wert</th>
              <th>Datum</th>
              <th>Kategorie</th>
              <th>Beschreibung</th>
            </tr>
          </thead>
          <tbody>
            ${n.map(d=>ee`
                <tr
                  class="transaction ${d.value.startsWith("-")?"spending":""} ${d.matched?"matched":""}"
                >
                  <td>${d.value}</td>
                  <td style="font-family: monospace">${d.dateRaw}</td>
                  <td>${d.name}</td>
                  <td>${d.description}</td>
                </tr>
              `)}
          </tbody>
        </table>
      </div>

      <h2 class="col-2 column-title">Primoco Auszug</h2>
      <div class="col-2">
        <label>
          <input
            id="primocoFileInput"
            type="file"
            ref=${e}
            onChange=${h}
            required
          />
        </label>
      </div>

      <div class="col-2">
        <table>
          <thead>
            <tr>
              <th style="text-align:right">Wert</th>
              <th>Datum</th>
              <th>Kategorie</th>
              <th>Beschreibung</th>
            </tr>
          </thead>
          <tbody>
            ${a.map(d=>ee`
                <tr
                  class="transaction ${d.value.startsWith("-")?"spending":""} ${d.matched?"matched":""}"
                >
                  <td>${d.value}</td>
                  <td style="font-family: monospace">${d.dateRaw}</td>
                  <td>${d.name}</td>
                  <td>${d.description}</td>
                </tr>
              `)}
          </tbody>
        </table>
      </div>

      <footer class="col-1 col-span-2">
        Copyright
        <a href="https://dominik.burgdoerfer.com">Dominik Burgdörfer</a>
        &copy; ${f}
      </footer>
    </main>
  `};var R=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ne,Ne;function ct(){if(Ne)return ne;Ne=1;var t="[object Symbol]",e=/[&<>"'`]/g,n=RegExp(e.source),r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},a=typeof R=="object"&&R&&R.Object===Object&&R,i=typeof self=="object"&&self&&self.Object===Object&&self,s=a||i||Function("return this")();function l(v){return function(C){return v?.[C]}}var c=l(r),_=Object.prototype,h=_.toString,o=s.Symbol,u=o?o.prototype:void 0,f=u?u.toString:void 0;function d(v){if(typeof v=="string")return v;if(g(v))return f?f.call(v):"";var C=v+"";return C=="0"&&1/v==-1/0?"-0":C}function m(v){return!!v&&typeof v=="object"}function g(v){return typeof v=="symbol"||m(v)&&h.call(v)==t}function p(v){return v==null?"":d(v)}function y(v){return v=p(v),v&&n.test(v)?v.replace(e,c):v}return ne=y,ne}var ut=ct();const dt=lt(ut);function A(t,...e){return new I(String.raw(t,...e.map(n=>n instanceof I?n:typeof n=="string"?new I(dt(n)):Array.isArray(n)?new I(n.join("")):n??"")))}class I{constructor(e){this.#e=e}#e;toString(){return this.#e}}class ft extends HTMLElement{#e=new AbortController;connectedCallback(){const{signal:e}=this.#e;let n=this.dataset.timeout?Number(this.dataset.timeout):NaN;const r=this.attachShadow({mode:"open"});r.innerHTML=A`
      <style>
        @keyframes shrink {
          from {
            width: 100%;
          }
          to {
            width: 0;
          }
        }

        @keyframes slidein {
          from {
            translate: calc(100% + 1rem);
          }
          to {
            translate: 0;
          }
        }

        :host {
          --red-800: rgb(153 27 27);
          --gray-300: rgb(209 213 219);
          --gray-700: rgb(55 65 81);
          --red-50: rgb(254 242 242);
          --red-700: rgb(185 28 28);
          --red-800: rgb(153 27 27);
          --green-400: rgb(74 222 128);
          --font-sans:
            ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji',
            'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
        }

        dialog {
          all: unset;
          display: grid;
          box-sizing: border-box;
          grid-template-columns: 2rem 1fr;
          position: fixed;
          inset: 1rem 1rem auto auto;
          padding-inline: 1.25rem;
          padding-block: 1.75rem;
          font-family: var(--font-sans);
          background-color: white;
          border-radius: 0.375rem;
          box-shadow: var(--box-shadow-md);
          border: solid 1px var(--gray-300);
        }

        dialog.error {
          background-color: var(--red-50);
          border-color: var(--red-700);
        }

        dialog:not([open]) {
          translate: calc(100% + 1rem);
          transition: translate 0.3s;
        }

        dialog[open] {
          animation: slidein 0.3s;
        }

        .dismiss-button {
          all: unset;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          inset: 0 0 auto auto;
          width: 1.5rem;
          aspect-ratio: 1;
          color: var(--gray-700);
          margin: 0.125rem 0.125rem auto auto;
        }

        .dismiss-button svg {
          display: block;
        }

        .bar {
          position: absolute;
          inset: auto 0 0 0;
          height: 0.25rem;
          border-radius: 0 0 0.25rem 0.25rem;
          background-color: rgb(107 114 128 / 0.5);
        }

        .visible .bar {
          animation: shrink var(--shrink-time, 300ms) linear forwards;
        }

        dialog > p {
          all: unset;
          font-size: 1rem;
          align-content: center;
        }

        dialog.error > p {
          color: var(--red-800);
        }
      </style>

      <dialog class="${this.dataset.type==="error"?"error":"success"}">
        <button class="dismiss-button">
          <svg
            width="20"
            height="20"
            data-slot="icon"
            aria-hidden="true"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18 18 6M6 6l12 12"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
        ${this.dataset.type==="error"?A`
              <svg
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                style="color: var(--red-700)"
              >
                <path
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            `:A`
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                height="24"
                width="24"
                style="color: var(--green-400)"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            `}
        <p>${this.dataset.message}</p>
        ${Number.isNaN(n)?A``:A`
              <div
                class="bar"
                style="--shrink-time: ${n.toString()}ms"
              ></div>
            `}
      </dialog>
    `.toString();const a=r.querySelector("dialog"),i=r.querySelector(".dismiss-button");if(!(a&&i instanceof HTMLButtonElement)){debugger;return}i.addEventListener("click",()=>{a.close()},{signal:e}),r.addEventListener("transitionend",s=>{s instanceof TransitionEvent&&s.propertyName==="translate"&&(a.classList.remove("visible"),this.remove())},{signal:e}),r.addEventListener("animationend",s=>{s instanceof AnimationEvent&&s.animationName==="slidein"&&a.classList.add("visible")},{signal:e}),r.addEventListener("animationend",s=>{s instanceof AnimationEvent&&s.animationName==="shrink"&&a.close()},{signal:e}),a.show(),a.classList.add("active")}disconnectedCallback(){this.#e?.abort()}}customElements.define("flash-message",ft);class pt extends HTMLElement{#e;#t;#n=new AbortController;constructor(){super(),this.#e=this.attachShadow({mode:"open"})}set task(e){this.#t=e}connectedCallback(){const{signal:e}=this.#n=new AbortController;this.#r(),this.#t?.().catch(n=>{e.aborted||document.body.appendChild(ie({type:"error",message:n?.message??n?.name??JSON.stringify(n)}))}).then(()=>{this.remove()})}#r(){this.#e.innerHTML=A`
      <style>
        #loader {
          opacity: 0;
          animation-name: fadein;
          animation-duration: 300ms;
          animation-delay: 200ms;
          animation-fill-mode: forwards;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(0, 0, 0, 0.5);
        }

        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        #loader[hidden] {
          display: none;
        }

        .lds-ripple {
          display: inline-block;
          position: relative;
          width: 80px;
          height: 80px;
        }

        .lds-ripple div {
          position: absolute;
          border: 4px solid #fff;
          opacity: 1;
          border-radius: 50%;
          animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }

        .lds-ripple div:nth-child(2) {
          animation-delay: -0.5s;
        }

        @keyframes lds-ripple {
          0% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 0;
          }
          4.9% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 0;
          }
          5% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 1;
          }
          100% {
            top: 0px;
            left: 0px;
            width: 72px;
            height: 72px;
            opacity: 0;
          }
        }
      </style>

      <div id="loader">
        <div class="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    `.toString()}disconnectedCallback(){this.#n?.abort()}}customElements.define("task-indicator",pt);class ht extends HTMLElement{connectedCallback(){Qe(le(_t,{}),this)}}customElements.define("diff-page",ht);
