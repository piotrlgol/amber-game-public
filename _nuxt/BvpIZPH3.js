import{z as ee,A as E,B as te,C as ne,D as V,E as L,I as X,K as O,J as j,r as R,h as f,P as T,U as oe,k as K,i as m,V as ae,W as ie,X as U,Y as re,Z as le,$ as Y,a0 as ue,a1 as J,N as Z,f as G,L as se,O as ce,Q as z,j as ve}from"./CWJ2h7DY.js";import{u as de,a as fe}from"./BblX9WV0.js";import{g as Q,s as W,c as me}from"./Dk8Yvub1.js";function pe(e){const o=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((r,c)=>{const i=parseFloat(r);i&&(o[c]=i)}),o}const ge=ee({name:"touch-swipe",beforeMount(e,{value:o,arg:r,modifiers:c}){if(c.mouse!==!0&&E.has.touch!==!0)return;const i=c.mouseCapture===!0?"Capture":"",t={handler:o,sensitivity:pe(r),direction:Q(c),noop:te,mouseStart(a){W(a,t)&&ne(a)&&(V(t,"temp",[[document,"mousemove","move",`notPassive${i}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(a,!0))},touchStart(a){if(W(a,t)){const l=a.target;V(t,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","notPassiveCapture"],[l,"touchend","end","notPassiveCapture"]]),t.start(a)}},start(a,l){E.is.firefox===!0&&L(e,!0);const g=X(a);t.event={x:g.left,y:g.top,time:Date.now(),mouse:l===!0,dir:!1}},move(a){if(t.event===void 0)return;if(t.event.dir!==!1){O(a);return}const l=Date.now()-t.event.time;if(l===0)return;const g=X(a),h=g.left-t.event.x,u=Math.abs(h),p=g.top-t.event.y,v=Math.abs(p);if(t.event.mouse!==!0){if(u<t.sensitivity[1]&&v<t.sensitivity[1]){t.end(a);return}}else if(window.getSelection().toString()!==""){t.end(a);return}else if(u<t.sensitivity[2]&&v<t.sensitivity[2])return;const y=u/l,_=v/l;t.direction.vertical===!0&&u<v&&u<100&&_>t.sensitivity[0]&&(t.event.dir=p<0?"up":"down"),t.direction.horizontal===!0&&u>v&&v<100&&y>t.sensitivity[0]&&(t.event.dir=h<0?"left":"right"),t.direction.up===!0&&u<v&&p<0&&u<100&&_>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&u<v&&p>0&&u<100&&_>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&u>v&&h<0&&v<100&&y>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&u>v&&h>0&&v<100&&y>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(O(a),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),me(),t.styleCleanup=w=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const b=()=>{document.body.classList.remove("no-pointer-events--children")};w===!0?setTimeout(b,50):b()}),t.handler({evt:a,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:l,distance:{x:u,y:v}})):t.end(a)},end(a){t.event!==void 0&&(j(t,"temp"),E.is.firefox===!0&&L(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),a!==void 0&&t.event.dir!==!1&&O(a),t.event=void 0)}};if(e.__qtouchswipe=t,c.mouse===!0){const a=c.mouseCapture===!0||c.mousecapture===!0?"Capture":"";V(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}E.has.touch===!0&&V(t,"main",[[e,"touchstart","touchStart",`passive${c.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const r=e.__qtouchswipe;r!==void 0&&(o.oldValue!==o.value&&(typeof o.value!="function"&&r.end(),r.handler=o.value),r.direction=Q(o.modifiers))},beforeUnmount(e){const o=e.__qtouchswipe;o!==void 0&&(j(o,"main"),j(o,"temp"),E.is.firefox===!0&&L(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchswipe)}});function he(){let e=Object.create(null);return{getCache:(o,r)=>e[o]===void 0?e[o]=typeof r=="function"?r():r:e[o],setCache(o,r){e[o]=r},hasCache(o){return Object.hasOwnProperty.call(e,o)},clearCache(o){o!==void 0?delete e[o]:e=Object.create(null)}}}const ye={name:{required:!0},disable:Boolean},H={setup(e,{slots:o}){return()=>m("div",{class:"q-panel scroll",role:"tabpanel"},U(o.default))}},xe={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},_e=["update:modelValue","beforeTransition","transition"];function be(){const{props:e,emit:o,proxy:r}=K(),{getCache:c}=he();let i,t;const a=R(null),l=R(null);function g(n){const s=e.vertical===!0?"up":"left";C((r.$q.lang.rtl===!0?-1:1)*(n.direction===s?1:-1))}const h=f(()=>[[ge,g,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),u=f(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),p=f(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),v=f(()=>`--q-transition-duration: ${e.transitionDuration}ms`),y=f(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),_=f(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),w=f(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);T(()=>e.modelValue,(n,s)=>{const x=P(n)===!0?k(n):-1;t!==!0&&$(x===-1?0:x<k(s)?-1:1),a.value!==x&&(a.value=x,o("beforeTransition",n,s),oe(()=>{o("transition",n,s)}))});function b(){C(1)}function I(){C(-1)}function D(n){o("update:modelValue",n)}function P(n){return n!=null&&n!==""}function k(n){return i.findIndex(s=>s.props.name===n&&s.props.disable!==""&&s.props.disable!==!0)}function M(){return i.filter(n=>n.props.disable!==""&&n.props.disable!==!0)}function $(n){const s=n!==0&&e.animated===!0&&a.value!==-1?"q-transition--"+(n===-1?u.value:p.value):null;l.value!==s&&(l.value=s)}function C(n,s=a.value){let x=s+n;for(;x!==-1&&x<i.length;){const S=i[x];if(S!==void 0&&S.props.disable!==""&&S.props.disable!==!0){$(n),t=!0,o("update:modelValue",S.props.name),setTimeout(()=>{t=!1});return}x+=n}e.infinite===!0&&i.length!==0&&s!==-1&&s!==i.length&&C(n,n===-1?i.length:-1)}function A(){const n=k(e.modelValue);return a.value!==n&&(a.value=n),!0}function F(){const n=P(e.modelValue)===!0&&A()&&i[a.value];return e.keepAlive===!0?[m(re,_.value,[m(w.value===!0?c(y.value,()=>({...H,name:y.value})):H,{key:y.value,style:v.value},()=>n)])]:[m("div",{class:"q-panel scroll",style:v.value,key:y.value,role:"tabpanel"},[n])]}function d(){if(i.length!==0)return e.animated===!0?[m(ae,{name:l.value},F)]:F()}function q(n){return i=ie(U(n.default,[])).filter(s=>s.props!==null&&s.props.slot===void 0&&P(s.props.name)===!0),i.length}function B(){return i}return Object.assign(r,{next:b,previous:I,goTo:D}),{panelIndex:a,panelDirectives:h,updatePanelsList:q,updatePanelIndex:A,getPanelContent:d,getEnabledPanels:M,getPanels:B,isValidPanelName:P,keepAliveProps:_,needsUniqueKeepAliveWrapper:w,goToPanelByOffset:C,goToPanel:D,nextPanel:b,previousPanel:I}}let N=0;const Ce={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Pe=["update:fullscreen","fullscreen"];function qe(){const e=K(),{props:o,emit:r,proxy:c}=e;let i,t,a;const l=R(!1);le(e)===!0&&T(()=>c.$route.fullPath,()=>{o.noRouteFullscreenExit!==!0&&u()}),T(()=>o.fullscreen,p=>{l.value!==p&&g()}),T(l,p=>{r("update:fullscreen",p),r("fullscreen",p)});function g(){l.value===!0?u():h()}function h(){l.value!==!0&&(l.value=!0,a=c.$el.parentNode,a.replaceChild(t,c.$el),document.body.appendChild(c.$el),N++,N===1&&document.body.classList.add("q-body--fullscreen-mixin"),i={handler:u},Y.add(i))}function u(){l.value===!0&&(i!==void 0&&(Y.remove(i),i=void 0),a.replaceChild(c.$el,t),l.value=!1,N=Math.max(0,N-1),N===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),c.$el.scrollIntoView!==void 0&&setTimeout(()=>{c.$el.scrollIntoView()})))}return ue(()=>{t=document.createElement("span")}),J(()=>{o.fullscreen===!0&&h()}),Z(u),Object.assign(c,{toggleFullscreen:g,setFullscreen:h,exitFullscreen:u}),{inFullscreen:l,toggleFullscreen:g}}const Se=["top","right","bottom","left"],we=["regular","flat","outline","push","unelevated"],Ie=G({name:"QCarousel",props:{...de,...xe,...Ce,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>we.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Se.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Pe,..._e],setup(e,{slots:o}){const{proxy:{$q:r}}=K(),c=fe(e,r);let i=null,t;const{updatePanelsList:a,getPanelContent:l,panelDirectives:g,goToPanel:h,previousPanel:u,nextPanel:p,getEnabledPanels:v,panelIndex:y}=be(),{inFullscreen:_}=qe(),w=f(()=>_.value!==!0&&e.height!==void 0?{height:e.height}:{}),b=f(()=>e.vertical===!0?"vertical":"horizontal"),I=f(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),D=f(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(_.value===!0?" fullscreen":"")+(c.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${b.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${I.value}`:"")),P=f(()=>{const d=[e.prevIcon||r.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||r.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&r.lang.rtl===!0?d.reverse():d}),k=f(()=>e.navigationIcon||r.iconSet.carousel.navigationIcon),M=f(()=>e.navigationActiveIcon||k.value),$=f(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));T(()=>e.modelValue,()=>{e.autoplay&&C()}),T(()=>e.autoplay,d=>{d?C():i!==null&&(clearTimeout(i),i=null)});function C(){const d=se(e.autoplay)===!0?Math.abs(e.autoplay):5e3;i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,d>=0?p():u()},d)}J(()=>{e.autoplay&&C()}),Z(()=>{i!==null&&clearTimeout(i)});function A(d,q){return m("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${d} q-carousel__navigation--${I.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[m("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},v().map(q))])}function F(){const d=[];if(e.navigation===!0){const q=o["navigation-icon"]!==void 0?o["navigation-icon"]:n=>m(z,{key:"nav"+n.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${n.active===!0?"":"in"}active`,...n.btnProps,onClick:n.onClick}),B=t-1;d.push(A("buttons",(n,s)=>{const x=n.props.name,S=y.value===s;return q({index:s,maxIndex:B,name:x,active:S,btnProps:{icon:S===!0?M.value:k.value,size:"sm",...$.value},onClick:()=>{h(x)}})}))}else if(e.thumbnails===!0){const q=e.controlColor!==void 0?` text-${e.controlColor}`:"";d.push(A("thumbnails",B=>{const n=B.props;return m("img",{key:"tmb#"+n.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${n.name===e.modelValue?"":"in"}active`+q,src:n.imgSrc||n["img-src"],onClick:()=>{h(n.name)}})}))}return e.arrows===!0&&y.value>=0&&((e.infinite===!0||y.value>0)&&d.push(m("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${b.value} absolute flex flex-center`},[m(z,{icon:P.value[0],...$.value,onClick:u})])),(e.infinite===!0||y.value<t-1)&&d.push(m("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${b.value} absolute flex flex-center`},[m(z,{icon:P.value[1],...$.value,onClick:p})]))),ve(o.control,d)}return()=>(t=a(o),m("div",{class:D.value,style:w.value},[ce("div",{class:"q-carousel__slides-container"},l(),"sl-cont",e.swipeable,()=>g.value)].concat(F())))}}),Ae=G({name:"QCarouselSlide",props:{...ye,imgSrc:String},setup(e,{slots:o}){const r=f(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>m("div",{class:"q-carousel__slide",style:r.value},U(o.default))}});export{Ae as _,Ie as a};
