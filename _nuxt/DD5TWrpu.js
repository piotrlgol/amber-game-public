import{f as O,ad as $,ae as v,af as I,r as _,aR as Q,h as l,O as c,M as S,j as k,i as m,k as L,_ as j,m as M,w as h,o as P,b as g,aI as K}from"./tIFZkqn5.js";import{Q as N,_ as E,a as G}from"./W--FZXN8.js";import{_ as U}from"./CNUaBeSr.js";import"./BSzZDh0g.js";import"./SrR_y0-P.js";import"./B3E0qxUV.js";const A=O({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(o,{slots:p,emit:f}){const{proxy:{$q:s}}=L(),t=$(I,v);if(t===v)return console.error("QFooter needs to be child of QLayout"),v;const r=_(parseInt(o.heightHint,10)),u=_(!0),y=_(Q.value===!0||t.isContainer.value===!0?0:window.innerHeight),d=l(()=>o.reveal===!0||t.view.value.indexOf("F")!==-1||s.platform.is.ios&&t.isContainer.value===!0),b=l(()=>t.isContainer.value===!0?t.containerHeight.value:y.value),w=l(()=>{if(o.modelValue!==!0)return 0;if(d.value===!0)return u.value===!0?r.value:0;const e=t.scroll.value.position+b.value+r.value-t.height.value;return e>0?e:0}),x=l(()=>o.modelValue!==!0||d.value===!0&&u.value!==!0),V=l(()=>o.modelValue===!0&&x.value===!0&&o.reveal===!0),R=l(()=>"q-footer q-layout__section--marginal "+(d.value===!0?"fixed":"absolute")+"-bottom"+(o.bordered===!0?" q-footer--bordered":"")+(x.value===!0?" q-footer--hidden":"")+(o.modelValue!==!0?" q-layout--prevent-focus"+(d.value!==!0?" hidden":""):"")),z=l(()=>{const e=t.rows.value.bottom,a={};return e[0]==="l"&&t.left.space===!0&&(a[s.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),e[2]==="r"&&t.right.space===!0&&(a[s.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),a});function n(e,a){t.update("footer",e,a)}function i(e,a){e.value!==a&&(e.value=a)}function B({height:e}){i(r,e),n("size",e)}function H(){if(o.reveal!==!0)return;const{direction:e,position:a,inflectionPoint:F}=t.scroll.value;i(u,e==="up"||a-F<100||t.height.value-b.value-a-r.value<300)}function C(e){V.value===!0&&i(u,!0),f("focusin",e)}c(()=>o.modelValue,e=>{n("space",e),i(u,!0),t.animate()}),c(w,e=>{n("offset",e)}),c(()=>o.reveal,e=>{e===!1&&i(u,o.modelValue)}),c(u,e=>{t.animate(),f("reveal",e)}),c([r,t.scroll,t.height],H),c(()=>s.screen.height,e=>{t.isContainer.value!==!0&&i(y,e)});const q={};return t.instances.footer=q,o.modelValue===!0&&n("size",r.value),n("space",o.modelValue),n("offset",w.value),S(()=>{t.instances.footer===q&&(t.instances.footer=void 0,n("size",0),n("offset",0),n("space",!1))}),()=>{const e=k(p.default,[m(N,{debounce:0,onResize:B})]);return o.elevated===!0&&e.push(m("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),m("footer",{class:R.value,style:z.value,onFocusin:C},e)}}}),D={};function J(o,p){const f=G,s=U,t=A,r=E;return P(),M(r,{view:"lHh LpR fFf"},{default:h(()=>[g(f,{class:"middle-third"},{default:h(()=>[K(o.$slots,"default",{},void 0,!0)]),_:3}),g(t,{class:"bg-primary"},{default:h(()=>[g(s,{src:"/img/POMORSKIE-kolor-RGB.jpg",fit:"scale-down",class:"logo-small q-pa-sm"})]),_:1})]),_:3})}const te=j(D,[["render",J],["__scopeId","data-v-8dfab46a"]]);export{te as default};