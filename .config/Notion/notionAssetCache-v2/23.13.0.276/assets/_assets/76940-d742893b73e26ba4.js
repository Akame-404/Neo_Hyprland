"use strict";(globalThis.webpackChunknotion_next=globalThis.webpackChunknotion_next||[]).push([[76940],{373890:(e,t,i)=>{i.d(t,{pp:()=>m,Wf:()=>s,XH:()=>b,tg:()=>S,Mb:()=>k});var n=i(667294),o=i(800480),r=i(724405);const s=(0,n.createContext)({constrainedSize:{minWidth:0,minHeight:0,maxWidth:void 0,maxHeight:void 0},actualSize:{width:0,height:0},isWidthScrollbarVisible:!1,isHeightScrollbarVisible:!1});s.displayName="ConstrainSizeContext";var a=i(401898);function l(e){if(!e)return{type:"range",min:0,max:Number.MAX_SAFE_INTEGER};if("range"===e.type)return e;let t=0,i=Number.MAX_SAFE_INTEGER;switch(e.type){case"fill":t=Number.MAX_SAFE_INTEGER;break;case"fixed":t=e.length,i=e.length;break;case"unlimited":break;case"min":t=e.length;break;case"max":i=e.length;break;default:(0,a.t1)(e)}return{type:"range",min:t,max:i,scroll:e.scroll}}function d(e){return{width:l(null==e?void 0:e.width),height:l(null==e?void 0:e.height)}}var h=i(926249),u=i(619584);function c(e,t,i){const o=(0,n.useMemo)(t,i),[r,s]=(0,n.useState)(o);return(0,n.useEffect)((()=>{s((t=>e(t,o)?t:o))}),[o,e]),r}var g=i(536420);var f=i(785893);function m(e){const{children:t,isSizeTransitionAnimated:i,onSizeChanged:a}=e,l=d(e.areaConstraint),{preferredSize:m,ref:w}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const t=(0,n.useRef)(null),[i,o]=(0,n.useState)(),r=(0,g.y)(t);return(0,n.useLayoutEffect)((()=>{const e=t.current;if(!e)return;const i={width:e.style.width,height:e.style.height,overflow:e.style.overflow};e.style.width="fit-content",e.style.height="fit-content",e.style.overflow="hidden";const n={width:e.scrollWidth,height:e.scrollHeight};e.style.width=i.width,e.style.height=i.height,e.style.overflow=i.overflow,o((e=>(0,h.Z)(e,n)?e:n))}),[r,...e]),{ref:t,preferredSize:i}}(),v=function(e){const{areaConstraint:t,preferredSize:i}=e;return c(h.Z,(()=>({width:(0,u.uZ)((null==i?void 0:i.width)??0,t.width.min,t.width.max),height:(0,u.uZ)((null==i?void 0:i.height)??0,t.height.min,t.height.max)})),[t,i])}({areaConstraint:l,preferredSize:m}),b=function(e){const{actualSize:t,preferredSize:i,areaConstraint:o}=e;return(0,n.useMemo)((()=>{const e="allow"===o.width.scroll,n="allow"===o.height.scroll,r=e&&void 0!==(null==i?void 0:i.width)&&t.width<i.width,s=n&&void 0!==(null==i?void 0:i.width)&&t.height<i.height,a={minWidth:o.width.min,maxWidth:e?void 0:o.width.max,minHeight:o.height.min,maxHeight:n?void 0:o.height.max};return{actualSize:t,constrainedSize:a,isWidthScrollbarVisible:r,isHeightScrollbarVisible:s}}),[t,i,o])}({actualSize:v,preferredSize:m,areaConstraint:l}),x=function(e){const{actualSize:t,areaConstraint:i,isSizeTransitionAnimated:s}=e,a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const[i,o]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{o(!1)}),[...t]),(0,n.useEffect)((()=>{const t=setTimeout((()=>{o(!0)}),e);return()=>{clearTimeout(t)}})),i}(100),{prefersReducedMotion:l}=(0,o.Fy)();return(0,r.yK)((()=>({wrapper:{position:"relative"},content:{height:null==t?void 0:t.height,overflowX:i.width.scroll?"auto":"clip",overflowY:i.height.scroll?"auto":"clip",WebkitOverflowScrolling:"touch",width:null==t?void 0:t.width,transition:s&&a&&!l?"0.25s ease width, 0.25s ease height":void 0},measure:{display:"flex",flexDirection:"column",height:"fit-content",maxHeight:i.height.max,maxWidth:i.width.max,minHeight:i.height.min,minWidth:i.width.min,width:"fit-content"}})),[t,i,s,a,l])}({actualSize:v,areaConstraint:l,isSizeTransitionAnimated:i});return(0,n.useEffect)((()=>{null==a||a(v,m)}),[v,a,m]),(0,f.jsx)(s.Provider,{value:b,children:(0,f.jsx)("div",{style:x.wrapper,children:(0,f.jsx)("div",{style:x.content,children:(0,f.jsx)("div",{ref:w,className:"measure",style:x.measure,children:t})})})})}var w=i(653965);function v(e){let t=0,i=Number.MAX_SAFE_INTEGER;for(const o of e){if(!o)continue;const e=l(o),n=(0,w.uZ)(e.max,0,Number.MAX_SAFE_INTEGER),r=(0,w.uZ)(e.min,0,n);t=Math.max(t,r),i=Math.min(i,n)}const n=function(e){let t;for(const i of e){const e=null==i?void 0:i.scroll;switch(e){case"disallow":return"disallow";case"allow":t="allow";break;case void 0:break;default:(0,a.t1)(e)}}return t}(e);return{type:"range",min:(0,w.uZ)(t,0,i),max:i,scroll:n}}function b(e){const t=c(w.Xy,(()=>e),e);return(0,n.useMemo)((()=>function(e){const t=e.filter(Boolean);return{width:v(t.map((e=>null==e?void 0:e.width))),height:v(t.map((e=>null==e?void 0:e.height)))}}(t)),[t])}var x=i(886628),p=i(304926);function S(){const e=(0,n.useContext)(s),t=(0,x.VK)((()=>p.Z.state),[]);return null!=e&&e.isHeightScrollbarVisible?t:0}var y=i(535630);function k(e){const{paddingPixelsPerEdge:t}=e,i=(0,y.iP)();return(0,n.useMemo)((()=>d({width:{type:"max",length:i.width-2*t},height:{type:"max",length:i.height-2*t}})),[t,i.height,i.width])}},679872:(e,t,i)=>{i.d(t,{U:()=>c});var n=i(667294),o=i(724405),r=i(964275),s=i(709291),a=i(573063),l=i(433929),d=i(373890),h=i(257043),u=i(785893);function c(e){const{onClick:t,onDismiss:i,style:s,showBackground:c=!0}=e,f=function(e,t){const i=(0,d.tg)();return(0,o.yK)((n=>({button:{alignItems:"center",background:t?n.buttonHoveredBackground:"none",borderRadius:"100%",display:"flex",height:22,justifyContent:"center",position:"absolute",right:10+i,top:10,width:22,zIndex:10,...e},buttonHovered:{background:t?n.buttonPressedBackground:n.buttonHoveredBackground}})),[t,e,i])}(s,c),m=(0,n.useContext)(h.g),w=function(e){const{onClick:t,onDismiss:i}=e,o=(0,n.useCallback)((e=>{null==t||t(e),null==i||i()}),[t,i]);return t||i?o:void 0}({onClick:t,onDismiss:i??m});return w?(0,u.jsx)(a.Z,{ariaLabel:l.default.formatMessage(g.dismissModalAriaLabel),hoveredStyle:f.buttonHovered,icon:r.D,onClick:w,style:f.button}):null}const g=(0,s.defineMessages)({dismissModalAriaLabel:{id:"dismiss.dismissButton.label",defaultMessage:"Dismiss"}})},195688:(e,t,i)=>{i.d(t,{a:()=>u});var n=i(667294),o=i(709291),r=i(401898),s=i(478140),a=i(460709),l=i(257043),d=i(679872),h=i(785893);function u(e){const{children:t,title:i,displayMode:u}=e,c=(0,n.useContext)(l.g);switch(u){case"phone":return(0,h.jsx)(s.Z,{menuType:a.og.Modal,onClickRight:c,title:i,whiteBackground:!0,disableBottomPadding:!0,right:c?(0,h.jsx)(o.FormattedMessage,{defaultMessage:"Done",id:"appearanceSettings.modal.done"}):null,children:t});case"desktop":return(0,h.jsxs)(h.Fragment,{children:[t,(0,h.jsx)(d.U,{})]});default:(0,r.t1)(u)}}},257043:(e,t,i)=>{i.d(t,{g:()=>n});const n=(0,i(667294).createContext)(void 0);n.displayName="DismissContext"},976940:(e,t,i)=>{i.d(t,{U4:()=>o.U,a5:()=>n.a,gv:()=>r.g});var n=i(195688),o=i(679872),r=i(257043)},536420:(e,t,i)=>{i.d(t,{n:()=>l,y:()=>a});i(21703);var n=i(667294),o=(i(277744),i(926249));let r,s;function a(e){r=r??new Map,s=s??function(e){let t=!1,i=[];return new ResizeObserver((n=>{i=i.concat(n),t||(t=!0,window.requestAnimationFrame((()=>{const n=new Set;[...i].reverse().filter((e=>{const t=n.has(e.target);return n.add(e.target),!t})).forEach((t=>{const i=e.get(t.target);null==i||i.forEach((e=>{const i=t.borderBoxSize[0];e({width:i.inlineSize,height:i.blockSize})}))})),i=[],t=!1})))}))}(r);const[t,i]=(0,n.useState)(void 0),a=(0,n.useCallback)((e=>{i((t=>(0,o.Z)(t,e)?t:e))}),[]);return(0,n.useLayoutEffect)((()=>{const t=e.current;if(!t)return;s.observe(t);const i=[...r.get(t)??[],a];return r.set(t,i),()=>{s.unobserve(t);const e=(r.get(t)??[]).filter((e=>e!==a));0===e.length?r.delete(t):r.set(t,e)}}),[a,e]),t}function l(e){const{children:t,onSizeChange:i}=e,o=(0,n.useRef)(null),r=a(o);(0,n.useEffect)((()=>{i&&r&&i(r)}),[r,i]);const s=n.Children.only(t);return n.cloneElement(s,{ref:o})}}}]);