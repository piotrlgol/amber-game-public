import{_ as p}from"./BUfm47Vw.js";import{l as h,r as f,o as l,m as n,w as m,c as v,F as w,q as k,a as x,s as b,b as r,v as _,x as C}from"./tIFZkqn5.js";import{_ as V,a as $}from"./CTDh6dpV.js";const z=h({__name:"multi-image-carusel",props:{image_list:{},image_height:{},bg_colour:{}},setup(g){const e=g,a=f(1);return(t,i)=>{const o=p,c=V,u=$;return l(),n(u,{modelValue:a.value,"onUpdate:modelValue":i[2]||(i[2]=s=>a.value=s),"transition-prev":"slide-right","transition-next":"slide-left",infinite:"",swipeable:"",animated:"",arrows:"",class:C(e.bg_colour??"bg-secondary")},{default:m(()=>[(l(!0),v(w,null,k(t.image_list.length/2,s=>(l(),n(c,{name:s,class:"column q-slide"},{default:m(()=>[x("div",{class:"row justify-start items-center no-wrap overflow-hidden",style:b(`height: ${e.image_height}`??"")},[r(o,{image:e.image_list[(a.value-1)*2],fit:"scale-down",image_height:e.image_height,index:"1",onClick:i[0]||(i[0]=_(d=>t.$emit("click-image",e.image_list[(a.value-1)*2]),["stop"]))},null,8,["image","image_height"]),r(o,{image:e.image_list[a.value*2-1],index:"2",fit:"scale-down",image_height:e.image_height,onClick:i[1]||(i[1]=_(d=>t.$emit("click-image",e.image_list[a.value*2-1]),["stop"]))},null,8,["image","image_height"])],4)]),_:2},1032,["name"]))),256))]),_:1},8,["modelValue","class"])}}});export{z as _};
