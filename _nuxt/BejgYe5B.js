import{aT as s,aU as l}from"./BqMAnIkK.js";const d=[Element,String],r=[null,document,document.body,document.scrollingElement,document.documentElement];function a(o,t){let e=s(t);if(e===void 0){if(o==null)return window;e=o.closest(".scroll,.scroll-y,.overflow-auto")}return r.includes(e)?window:e}function u(o){return o===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:o.scrollTop}function w(o){return o===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:o.scrollLeft}let n;function f(){if(n!==void 0)return n;const o=document.createElement("p"),t=document.createElement("div");l(o,{width:"100%",height:"200px"}),l(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(o),document.body.appendChild(t);const e=o.offsetWidth;t.style.overflow="scroll";let i=o.offsetWidth;return e===i&&(i=t.clientWidth),t.remove(),n=e-i,n}function p(o,t=!0){return!o||o.nodeType!==Node.ELEMENT_NODE?!1:t?o.scrollHeight>o.clientHeight&&(o.classList.contains("scroll")||o.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(o)["overflow-y"])):o.scrollWidth>o.clientWidth&&(o.classList.contains("scroll")||o.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(o)["overflow-x"]))}export{u as a,a as b,f as c,w as g,p as h,d as s};
