(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[526],{6648:function(e,t,n){"use strict";n.d(t,{default:function(){return i.a}});var r=n(5601),i=n.n(r)},8173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let r=n(9920),i=n(1452),o=n(7437),a=i._(n(2265)),l=r._(n(4887)),s=r._(n(8321)),u=n(497),d=n(7103),c=n(3938);n(2301);let f=n(291),p=r._(n(1241)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,n,r,i,o,a){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function h(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let y=(0,a.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:i,height:l,width:s,decoding:u,className:d,style:c,fetchPriority:f,placeholder:p,loading:m,unoptimized:y,fill:b,onLoadRef:v,onLoadingCompleteRef:w,setBlurComplete:_,setShowAltText:O,sizesInput:j,onLoad:x,onError:S,...E}=e;return(0,o.jsx)("img",{...E,...h(f),loading:m,width:s,height:l,decoding:u,"data-nimg":b?"fill":"1",className:d,style:c,sizes:i,srcSet:r,src:n,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&g(e,p,v,w,_,y,j))},[n,p,v,w,_,S,y,j,t]),onLoad:e=>{g(e.currentTarget,p,v,w,_,y,j)},onError:e=>{O(!0),"empty"!==p&&_(!0),S&&S(e)}})});function b(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...h(n.fetchPriority)};return t&&l.default.preload?(l.default.preload(n.src,r),null):(0,o.jsx)(s.default,{children:(0,o.jsx)("link",{rel:"preload",href:n.srcSet?void 0:n.src,...r},"__nimg-"+n.src+n.srcSet+n.sizes)})}let v=(0,a.forwardRef)((e,t)=>{let n=(0,a.useContext)(f.RouterContext),r=(0,a.useContext)(c.ImageConfigContext),i=(0,a.useMemo)(()=>{let e=m||r||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:l,onLoadingComplete:s}=e,g=(0,a.useRef)(l);(0,a.useEffect)(()=>{g.current=l},[l]);let h=(0,a.useRef)(s);(0,a.useEffect)(()=>{h.current=s},[s]);let[v,w]=(0,a.useState)(!1),[_,O]=(0,a.useState)(!1),{props:j,meta:x}=(0,u.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:v,showAltText:_});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y,{...j,unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:w,setShowAltText:O,sizesInput:e.sizes,ref:t}),x.priority?(0,o.jsx)(b,{isAppRouter:!n,imgAttributes:j}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2901:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});let r=n(9920)._(n(2265)).default.createContext({})},687:function(e,t){"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},497:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),n(2301);let r=n(1564),i=n(7103);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var n;let l,s,u,{src:d,sizes:c,unoptimized:f=!1,priority:p=!1,loading:m,className:g,quality:h,width:y,height:b,fill:v=!1,style:w,overrideSrc:_,onLoad:O,onLoadingComplete:j,placeholder:x="empty",blurDataURL:S,fetchPriority:E,layout:P,objectFit:C,objectPosition:M,lazyBoundary:z,lazyRoot:k,...I}=e,{imgConf:N,showAltText:A,blurComplete:R,defaultLoader:T}=t,L=N||i.imageConfigDefault;if("allSizes"in L)l=L;else{let e=[...L.deviceSizes,...L.imageSizes].sort((e,t)=>e-t),t=L.deviceSizes.sort((e,t)=>e-t);l={...L,allSizes:e,deviceSizes:t}}if(void 0===T)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let W=I.loader||T;delete I.loader,delete I.srcSet;let D="__next_img_default"in W;if(D){if("custom"===l.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=W;W=t=>{let{config:n,...r}=t;return e(r)}}if(P){"fill"===P&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[P];t&&!c&&(c=t)}let B="",$=a(y),F=a(b);if("object"==typeof(n=d)&&(o(n)||void 0!==n.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,u=e.blurHeight,S=S||e.blurDataURL,B=e.src,!v){if($||F){if($&&!F){let t=$/e.width;F=Math.round(e.height*t)}else if(!$&&F){let t=F/e.height;$=Math.round(e.width*t)}}else $=e.width,F=e.height}}let U=!p&&("lazy"===m||void 0===m);(!(d="string"==typeof d?d:B)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,U=!1),l.unoptimized&&(f=!0),D&&d.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),p&&(E="high");let H=a(h),G=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:M}:{},A?{}:{color:"transparent"},w),q=R||"empty"===x?null:"blur"===x?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:$,heightInt:F,blurWidth:s,blurHeight:u,blurDataURL:S||"",objectFit:G.objectFit})+'")':'url("'+x+'")',V=q?{backgroundSize:G.objectFit||"cover",backgroundPosition:G.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:q}:{},Y=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:a,loader:l}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,a),d=s.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:s.map((e,r)=>l({config:t,src:n,quality:o,width:e})+" "+("w"===u?e:r+1)+u).join(", "),src:l({config:t,src:n,quality:o,width:s[d]})}}({config:l,src:d,unoptimized:f,width:$,quality:H,sizes:c,loader:W});return{props:{...I,loading:U?"lazy":m,fetchPriority:E,width:$,height:F,decoding:"async",className:g,style:{...G,...V},sizes:Y.sizes,srcSet:Y.srcSet,src:_||Y.src},meta:{unoptimized:f,priority:p,placeholder:x,fill:v}}}},8321:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return g},defaultHead:function(){return c}});let r=n(9920),i=n(1452),o=n(7437),a=i._(n(2265)),l=r._(n(5960)),s=n(2901),u=n(6590),d=n(687);function c(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(2301);let p=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:n}=t;return e.reduce(f,[]).reverse().concat(c(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!a)&&n.has(e)?o=!1:(n.add(e),r[t]=n)}}}}return o}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:r})})}let g=function(e){let{children:t}=e,n=(0,a.useContext)(s.AmpStateContext),r=(0,a.useContext)(u.HeadManagerContext);return(0,o.jsx)(l.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,d.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1564:function(e,t){"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:a}=e,l=r?40*r:t,s=i?40*i:n,u=l&&s?"viewBox='0 0 "+l+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},3938:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let r=n(9920)._(n(2265)),i=n(7103),o=r.default.createContext(i.imageConfigDefault)},7103:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},5601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return s},getImageProps:function(){return l}});let r=n(9920),i=n(497),o=n(8173),a=r._(n(1241));function l(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let s=o.Image},1241:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},5960:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let r=n(2265),i="undefined"==typeof window,o=i?()=>{}:r.useLayoutEffect,a=i?()=>{}:r.useEffect;function l(e){let{headManager:t,reduceComponentsToState:n}=e;function l(){if(t&&t.mountedInstances){let i=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(i,e))}}if(i){var s;null==t||null==(s=t.mountedInstances)||s.add(e.children),l()}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},936:function(e){e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}},772:function(e,t,n){"use strict";let r,i,o;n.d(t,{u:function(){return T}});var a=n(2265);let l=new Set,s=new WeakMap,u=new WeakMap,d=new WeakMap,c=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap,g=new WeakSet,h=0,y=0,b="__aa_tgt",v="__aa_del",w="__aa_new";function _(e){clearTimeout(m.get(e));let t=C(e),n=N(t)?500:t.duration;m.set(e,setTimeout(async()=>{let t=d.get(e);try{await (null==t?void 0:t.finished),s.set(e,E(e)),function(e){let t=c.get(e);null==t||t.disconnect();let n=s.get(e),i=0;n||(n=E(e),s.set(e,n));let{offsetWidth:o,offsetHeight:a}=r,l=[n.top-5,o-(n.left+5+n.width),a-(n.top+5+n.height),n.left-5].map(e=>`${-1*Math.floor(e)}px`).join(" "),u=new IntersectionObserver(()=>{++i>1&&_(e)},{root:r,threshold:1,rootMargin:l});u.observe(e),c.set(e,u)}(e)}catch{}},n))}function O(e){setTimeout(()=>{f.set(e,setInterval(()=>j(_.bind(null,e)),2e3))},Math.round(2e3*Math.random()))}function j(e){"function"==typeof requestIdleCallback?requestIdleCallback(()=>e()):requestAnimationFrame(()=>e())}function x(e,t){t||b in e?!t||b in t||Object.defineProperty(t,b,{value:e}):Object.defineProperty(e,b,{value:e})}function S(e){return Number(e.replace(/[^0-9.\-]/g,""))}function E(e){let t=e.getBoundingClientRect(),{x:n,y:r}=function(e){let t=e.parentElement;for(;t;){if(t.scrollLeft||t.scrollTop)return{x:t.scrollLeft,y:t.scrollTop};t=t.parentElement}return{x:0,y:0}}(e);return{top:t.top+r,left:t.left+n,width:t.width,height:t.height}}function P(e,t,n){let r=t.width,i=t.height,o=n.width,a=n.height,l=getComputedStyle(e);if("content-box"===l.getPropertyValue("box-sizing")){let e=S(l.paddingTop)+S(l.paddingBottom)+S(l.borderTopWidth)+S(l.borderBottomWidth),t=S(l.paddingLeft)+S(l.paddingRight)+S(l.borderRightWidth)+S(l.borderLeftWidth);r-=t,o-=t,i-=e,a-=e}return[r,o,i,a].map(Math.round)}function C(e){return b in e&&p.has(e[b])?p.get(e[b]):{duration:250,easing:"ease-in-out"}}function M(e){if(b in e)return e[b]}function z(e){let t=M(e);return!!t&&g.has(t)}function k(e,...t){t.forEach(t=>t(e,p.has(e)));for(let n=0;n<e.children.length;n++){let r=e.children.item(n);r&&t.forEach(e=>e(r,p.has(r)))}}function I(e){return Array.isArray(e)?e:[e]}function N(e){return"function"==typeof e}function A(e){let t;w in e&&delete e[w];let n=E(e);s.set(e,n);let r=C(e);if(z(e)){if("function"!=typeof r)t=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:1.5*r.duration,easing:"ease-in"});else{let[i]=I(r(e,"add",n));(t=new Animation(i)).play()}d.set(e,t),t.addEventListener("finish",_.bind(null,e))}}function R(e,t){var n;e.remove(),s.delete(e),u.delete(e),d.delete(e),null===(n=c.get(e))||void 0===n||n.disconnect(),setTimeout(()=>{if(v in e&&delete e[v],Object.defineProperty(e,w,{value:!0,configurable:!0}),t&&e instanceof HTMLElement)for(let n in t)e.style[n]=""},0)}function T(e){let[t,n]=(0,a.useState)(),r=(0,a.useMemo)(()=>e,[]);return[(0,a.useCallback)(e=>{e instanceof HTMLElement?n(function(e,t={}){return i&&o&&!(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!N(t)&&!t.disrespectUserMotionPreference)&&(g.add(e),"static"===getComputedStyle(e).position&&Object.assign(e.style,{position:"relative"}),k(e,_,O,e=>null==o?void 0:o.observe(e)),N(t)?p.set(e,t):p.set(e,{duration:250,easing:"ease-in-out",...t}),i.observe(e,{childList:!0}),l.add(e)),Object.freeze({parent:e,enable:()=>{g.add(e)},disable:()=>{g.delete(e)},isEnabled:()=>g.has(e)})}(e,r)):n(void 0)},[r]),(0,a.useCallback)(e=>{t&&(e?t.enable():t.disable())},[t])]}"undefined"!=typeof window&&"ResizeObserver"in window&&(r=document.documentElement,i=new MutationObserver(e=>{let t=!e.reduce((e,t)=>[...e,...Array.from(t.addedNodes),...Array.from(t.removedNodes)],[]).every(e=>"#comment"===e.nodeName)&&e.reduce((e,t)=>{if(!1===e)return!1;if(t.target instanceof Element){if(x(t.target),!e.has(t.target)){e.add(t.target);for(let n=0;n<t.target.children.length;n++){let r=t.target.children.item(n);if(r){if(v in r)return!1;x(t.target,r),e.add(r)}}}if(t.removedNodes.length)for(let n=0;n<t.removedNodes.length;n++){let r=t.removedNodes[n];if(v in r)return!1;r instanceof Element&&(e.add(r),x(t.target,r),u.set(r,[t.previousSibling,t.nextSibling]))}}return e},new Set);t&&t.forEach(e=>(function(e){var t;let n=e.isConnected,i=s.has(e);n&&u.has(e)&&u.delete(e),d.has(e)&&(null===(t=d.get(e))||void 0===t||t.cancel()),w in e?A(e):i&&n?function(e){let t;let n=s.get(e),r=E(e);if(!z(e))return s.set(e,r);if(!n)return;let i=C(e);if("function"!=typeof i){let o=n.left-r.left,a=n.top-r.top,[l,s,u,d]=P(e,n,r),c={transform:`translate(${o}px, ${a}px)`},f={transform:"translate(0, 0)"};l!==s&&(c.width=`${l}px`,f.width=`${s}px`),u!==d&&(c.height=`${u}px`,f.height=`${d}px`),t=e.animate([c,f],{duration:i.duration,easing:i.easing})}else{let[o]=I(i(e,"remain",n,r));(t=new Animation(o)).play()}d.set(e,t),s.set(e,r),t.addEventListener("finish",_.bind(null,e))}(e):i&&!n?function(e){var t;let n;if(!u.has(e)||!s.has(e))return;let[i,o]=u.get(e);Object.defineProperty(e,v,{value:!0,configurable:!0});let a=window.scrollX,l=window.scrollY;if(o&&o.parentNode&&o.parentNode instanceof Element?o.parentNode.insertBefore(e,o):i&&i.parentNode?i.parentNode.appendChild(e):null===(t=M(e))||void 0===t||t.appendChild(e),!z(e))return R(e);let[c,f,p,m]=function(e){let t=s.get(e),[n,,r]=P(e,t,E(e)),i=e.parentElement;for(;i&&("static"===getComputedStyle(i).position||i instanceof HTMLBodyElement);)i=i.parentElement;i||(i=document.body);let o=getComputedStyle(i),a=s.get(i)||E(i);return[Math.round(t.top-a.top)-S(o.borderTopWidth),Math.round(t.left-a.left)-S(o.borderLeftWidth),n,r]}(e),g=C(e),b=s.get(e);(a!==h||l!==y)&&function(e,t,n,i){let o=h-t,a=y-n,l=document.documentElement.style.scrollBehavior;if("smooth"===getComputedStyle(r).scrollBehavior&&(document.documentElement.style.scrollBehavior="auto"),window.scrollTo(window.scrollX+o,window.scrollY+a),!e.parentElement)return;let s=e.parentElement,u=s.clientHeight,d=s.clientWidth,c=performance.now();!function e(){requestAnimationFrame(()=>{if(!N(i)){let t=u-s.clientHeight,n=d-s.clientWidth;c+i.duration>performance.now()?(window.scrollTo({left:window.scrollX-n,top:window.scrollY-t}),u=s.clientHeight,d=s.clientWidth,e()):document.documentElement.style.scrollBehavior=l}})}()}(e,a,l,g);let w={position:"absolute",top:`${c}px`,left:`${f}px`,width:`${p}px`,height:`${m}px`,margin:"0",pointerEvents:"none",transformOrigin:"center",zIndex:"100"};if(N(g)){let[t,r]=I(g(e,"remove",b));(null==r?void 0:r.styleReset)!==!1&&(w=(null==r?void 0:r.styleReset)||w,Object.assign(e.style,w)),(n=new Animation(t)).play()}else Object.assign(e.style,w),n=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:g.duration,easing:"ease-out"});d.set(e,n),n.addEventListener("finish",R.bind(null,e,w))}(e):A(e)})(e))}),o=new ResizeObserver(e=>{e.forEach(e=>{e.target===r&&(clearTimeout(m.get(r)),m.set(r,setTimeout(()=>{l.forEach(e=>k(e,e=>j(()=>_(e))))},100))),s.has(e.target)&&_(e.target)})}),window.addEventListener("scroll",()=>{y=window.scrollY,h=window.scrollX}),o.observe(r))},1810:function(e,t,n){"use strict";n.d(t,{w_:function(){return d}});var r=n(2265),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),a=["attr","size","title"];function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){var r,i;r=t,i=n[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(r))in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function d(e){return t=>r.createElement(c,l({attr:u({},e.attr)},t),function e(t){return t&&t.map((t,n)=>r.createElement(t.tag,u({key:n},t.attr),e(t.child)))}(e.child))}function c(e){var t=t=>{var n,{attr:i,size:o,title:s}=e,d=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,a),c=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,d,{className:n,style:u(u({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==o?r.createElement(o.Consumer,null,e=>t(e)):t(i)}}}]);