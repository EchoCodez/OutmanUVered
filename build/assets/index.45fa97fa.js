import{S as n,G as e,P as o,W as t,a as i,A as s,T as a,b as d,M as r,c,d as w}from"./vendor.eeac2e23.js";const l=new n;(new e).load("OutmaneUVered.glb",(function(n){l.add(n.scene)}));const u=new o(65,window.innerWidth/window.innerHeight,.1,1e3),p=new t({canvas:document.querySelector("#bg")});p.setPixelRatio(window.devicePixelRatio),p.setSize(window.innerWidth,window.innerHeight),u.position.setZ(40),u.position.setX(-40),u.position.setY(30),p.render(l,u);const m=new i(16777215);m.position.set(5,5,5);const f=new s(16777215);l.add(m,f),Array(2e3).fill().forEach((function(){const n=new d(.25,24,24),e=new r({color:16777215}),o=new c(n,e),[t,i,s]=Array(3).fill().map((()=>w.randFloatSpread(500)));o.position.set(t,i,s),l.add(o)}));const g=(new a).load("space.jpg");function b(){const n=document.body.getBoundingClientRect().top;u.rotation.x=2e-4*n}l.background=g,document.body.onscroll=b,b(),function n(){requestAnimationFrame(n),p.render(l,u)}();
