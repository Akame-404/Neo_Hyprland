"use strict";(globalThis.webpackChunknotion_next=globalThis.webpackChunknotion_next||[]).push([[30528],{114256:(e,n,t)=>{t.r(n),t.d(n,{DebuggingToolbar:()=>h});var i=t(667294),o=t(800480),r=t(724405),l=t(151454),a=t(137810),d=(t(95477),t(666605)),s=t(297834),u=t(886628),c=t(583055),p=t(577144);var g=t(785893);const x=32;function y(e){return{borderRight:`1px solid ${e.regularDividerColor}`}}function h(e){const n=(0,o.Fy)(),{initialPageRender:t}=function(){const{initialPageRender:e}=(0,u.VK)((()=>({initialRenderCompleted:p.Z.state.initialRenderCompleted,initialPageRender:(0,c.getInitialPageRender)()})),[]);return{initialPageRender:e}}(),{fps:i}=(0,s.U)(),a=(0,r.yK)((e=>({container:{backgroundColor:e.sidebarBackground,bottom:0,borderTop:`1px solid ${e.regularDividerColor}`,height:x,position:"absolute",textAlign:"left",width:"100%",zIndex:l.cD}})),[]);return(0,g.jsxs)("div",{style:a.container,children:[(0,g.jsx)(k,{item:{type:"text",key:"Environment",value:"production"}}),(0,g.jsx)(k,{item:{type:"text",key:"Version",value:n.version||"unknown"}}),(0,g.jsx)(k,{item:{type:"text",key:"FPS",value:(null==i?void 0:i.toFixed(0))||"unknown"},onClick:()=>{d.FPSMonitorEnabledStore.update((e=>!e))}}),(0,g.jsx)(k,{item:{type:"text",key:"Initial Page Render",value:void 0!==t?`${(t/1e3).toFixed(2)}s`:"unknown"}})]})}function k(e){const{item:n,onClick:t}=e,[o,l]=(0,i.useState)(!1),d=(0,r.yK)((e=>({entry:{display:"inline-block",height:"100%",margin:0,padding:`0 ${x/2}px`,...t&&{cursor:"pointer"},...t&&o&&{backgroundColor:"#F5F5DC"},...y(e)},entryComponent:{display:"inline-block",margin:0,padding:0,...y(e)},caption:{color:e.mediumTextColor,fontSize:12,fontWeight:a.Z.fontWeight.medium,letterSpacing:.5,lineHeight:`${x}px`}})),[o,t]);return"component"===n.type?(0,g.jsx)("div",{style:d.entryComponent,children:n.value}):(0,g.jsxs)("div",{style:d.entry,onClick:t,onMouseEnter:()=>{l(!0)},onMouseLeave:()=>{l(!1)},...t?{role:"button",tabIndex:0}:{},children:[(0,g.jsx)("span",{style:d.caption,children:(0,g.jsx)("b",{children:n.key})})," ",(0,g.jsx)("span",{style:d.caption,children:n.value})]})}}}]);