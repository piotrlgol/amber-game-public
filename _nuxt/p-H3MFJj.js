import{_ as h}from"./BUfm47Vw.js";import{_ as $}from"./DrzxtW22.js";import{l as q,r as s,h as C,o as a,m as p,w as z,a as c,b as e,s as I,c as d,q as w,F as B,P as j,v as M,_ as N}from"./tIFZkqn5.js";import{_ as F}from"./CNUaBeSr.js";import{_ as L}from"./BQyWeoKo.js";import"./SrR_y0-P.js";import"./B3E0qxUV.js";const S={class:"q-pa-md q-gutter-sm"},V={class:"image-container"},A={class:"row justify-center q-gutter-xl"},D={class:"row q-my-md"},E=500,G=q({__name:"amber-zoom",setup(O){const _=s(["/img/inkluzje/MAIG_496_5.jpg","https://picsum.photos/id/238/500/500","https://picsum.photos/id/239/500/500"]),u=s(_.value[0]),r=s(1),f=s(!1);async function v(n){r.value=1,u.value=n}const g=C(()=>({transform:`scale(${r.value})`,transition:`transform 0.3s, opacity ${E}ms`,transformOrigin:"center center",opacity:f.value?.5:1}));async function l(n){r.value=Math.max(n,1)}return(n,o)=>{const y=F,m=j,x=h,k=$,b=L;return a(),p(b,{class:"column"},{default:z(()=>[c("div",S,[c("div",V,[e(y,{src:u.value,style:I(g.value),class:"zoomable-image"},null,8,["src","style"])])]),c("div",A,[e(m,{round:"",color:"secondary",label:"x1",onClick:o[0]||(o[0]=t=>l(1))}),e(m,{round:"",color:"secondary",label:"x5",onClick:o[1]||(o[1]=t=>l(5))}),e(m,{round:"",color:"secondary",label:"x20",onClick:o[2]||(o[2]=t=>l(20))})]),c("div",D,[(a(!0),d(B,null,w(_.value,(t,i)=>(a(),d("div",{class:"col-4",key:i},[(a(),p(x,{image:t,index:i,key:i,image_style:"max-height: 30vh;",onClick:M(P=>v(t),["stop"])},null,8,["image","index","onClick"]))]))),128))]),e(k,{to:"/amber-face-select",class:"self-center next-button"})]),_:1})}}}),U=N(G,[["__scopeId","data-v-de4a2076"]]);export{U as default};