const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DCy1P9VQ.js","./BqMAnIkK.js","./DJSlK-Ai.js","./Ch21CrSA.js","./C-v3KzvZ.js"])))=>i.map(i=>d[i]);
import{q as m,w as c,e as v,s as l,j as d,u as g,a as h}from"./DJSlK-Ai.js";import{m as y,ao as _,ap as w,aq as C,ar as P,l as $,as as x,h as N,ai as E,i as p}from"./BqMAnIkK.js";import{h as f,u as T}from"./Ch21CrSA.js";import{_ as j}from"./CMXXDu_W.js";const S=async t=>{const{content:e}=y().public;typeof(t==null?void 0:t.params)!="function"&&(t=m(t));const n=t.params(),o=e.experimental.stripQueryParameters?c(`/navigation/${`${f(n)}.${e.integrity}`}/${v(n)}.json`):c(`/navigation/${f(n)}.${e.integrity}.json`);if(l())return(await _(()=>import("./DCy1P9VQ.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(i=>i.generateNavigation))(n);const a=await $fetch(o,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:d(n),previewToken:T().getPreviewToken()}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a},b="$s";function D(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,o]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(o!==void 0&&typeof o!="function")throw new Error("[nuxt] [useState] init must be a function: "+o);const a=b+n,r=w(),i=C(r.payload.state,a);if(i.value===void 0&&o){const s=o();if(P(s))return r.payload.state[a]=s,s;i.value=s}return i}const R=$({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=x(t),n=N(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!n.value&&D("dd-navigation").value){const{navigation:a}=g();return{navigation:a}}const{data:o}=await h(`content-navigation-${f(n.value)}`,()=>S(n.value));return{navigation:o}},render(t){const e=E(),{navigation:n}=t,o=i=>p(j,{to:i._path},()=>i.title),a=(i,s)=>p("ul",s?{"data-level":s}:null,i.map(u=>u.children?p("li",null,[o(u),a(u.children,s+1)]):p("li",null,o(u)))),r=i=>a(i,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):r(n)}}),Q=R;export{Q as default};
