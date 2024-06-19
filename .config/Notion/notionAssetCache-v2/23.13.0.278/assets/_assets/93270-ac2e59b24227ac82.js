"use strict";(globalThis.webpackChunknotion_next=globalThis.webpackChunknotion_next||[]).push([[93270],{921974:(e,t,n)=>{n.d(t,{H:()=>U});var r=n(996681),s=n(865411),o=n(637301),i=n(656955),a=n(45487),l=n(902074);const u=(0,n(404522).X)((()=>void 0!==window.ScrollTimeline));class c{constructor(e){this.animations=e.filter(Boolean)}then(e,t){return Promise.all(this.animations).then(e).catch(t)}getAll(e){return this.animations[0][e]}setAll(e,t){for(let n=0;n<this.animations.length;n++)this.animations[n][e]=t}attachTimeline(e){const t=this.animations.map((t=>{if(!u()||!t.attachTimeline)return t.pause(),function(e,t){let n;const r=()=>{const{currentTime:r}=t,s=(null===r?0:r.value)/100;n!==s&&e(s),n=s};return l.Wi.update(r,!0),()=>(0,l.Pn)(r)}((e=>{t.time=t.duration*e}),e);t.attachTimeline(e)}));return()=>{t.forEach(((e,t)=>{e&&e(),this.animations[t].stop()}))}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach((t=>t[e]()))}play(){this.runAll("play")}pause(){this.runAll("pause")}stop(){this.runAll("stop")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}var f=n(462711),h=n(775194),p=n(925794),m=n(334547);function d(e){const t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=(0,h.v)(e)?new p.e(t,{enableHardwareAcceleration:!1}):new m.W(t,{enableHardwareAcceleration:!0});n.mount(e),i.R.set(e,n)}var y=n(661059),g=n(685086),v=n(842284),A=n(386917);function E(e,t=100){const n=(0,g.S)({keyframes:[0,t],...e}),r=Math.min((0,v.i)(n),v.E);return{type:"keyframes",ease:e=>n.next(r*e).value/t,duration:(0,A.X)(r)}}var w=n(360599),x=n(426615),k=n(423967),R=n(840406);function C(e,t,n,r){var s;return"number"==typeof t?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):"<"===t?n:null!==(s=r.get(t))&&void 0!==s?s:e}const M=(e,t,n)=>{const r=t-e;return((n-e)%r+r)%r+e};var b=n(343338);function P(e,t){return(0,b.N)(e)?e[M(0,e.length,t)]:e}var z=n(410010),L=n(680022);function S(e,t,n,r,s,o){!function(e,t,n){for(let r=0;r<e.length;r++){const s=e[r];s.at>t&&s.at<n&&((0,z.cl)(e,s),r--)}}(e,s,o);for(let i=0;i<t.length;i++)e.push({value:t[i],at:(0,L.C)(s,o,r[i]),easing:P(n,i)})}function T(e,t){return e.at===t.at?null===e.value?1:null===t.value?-1:0:e.at-t.at}const I="easeInOut";function O(e,t){return!t.has(e)&&t.set(e,{}),t.get(e)}function B(e,t){return t[e]||(t[e]=[]),t[e]}function W(e){return Array.isArray(e)?e:[e]}function $(e,t){return e[t]?{...e,...e[t]}:{...e}}const H=e=>"number"==typeof e,D=e=>e.every(H);function F(e,t,n,r){const s=(0,o.I)(e,r),l=s.length;(0,a.k)(Boolean(l),"No valid element provided.");const u=[];for(let o=0;o<l;o++){const e=s[o];i.R.has(e)||d(e);const r=i.R.get(e),a={...n};"function"==typeof a.delay&&(a.delay=a.delay(o,l)),u.push(...(0,f.w)(r,{...t,transition:a},{}))}return new c(u)}function q(e,t,n){const r=[],s=function(e,{defaultTransition:t={},...n}={},r){const s=t.duration||.3,i=new Map,a=new Map,l={},u=new Map;let c=0,f=0,h=0;for(let p=0;p<e.length;p++){const n=e[p];if("string"==typeof n){u.set(n,f);continue}if(!Array.isArray(n)){u.set(n.name,C(f,n.at,c,u));continue}let[i,m,d={}]=n;void 0!==d.at&&(f=C(f,d.at,c,u));let y=0;const g=(e,n,r,o=0,i=0)=>{const a=W(e),{delay:l=0,times:u=(0,w.Y)(a),type:c="keyframes",...p}=n;let{ease:m=t.ease||"easeOut",duration:d}=n;const g="function"==typeof l?l(o,i):l,v=a.length;if(v<=2&&"spring"===c){let e=100;if(2===v&&D(a)){const t=a[1]-a[0];e=Math.abs(t)}const t={...p};void 0!==d&&(t.duration=(0,A.w)(d));const n=E(t,e);m=n.ease,d=n.duration}null!=d||(d=s);const k=f+g,R=k+d;1===u.length&&0===u[0]&&(u[1]=1);const C=u.length-a.length;C>0&&(0,x.c)(u,C),1===a.length&&a.unshift(null),S(r,a,m,u,k,R),y=Math.max(g+d,y),h=Math.max(R,h)};if((0,R.i)(i))g(m,d,B("default",O(i,a)));else{const e=(0,o.I)(i,r,l),t=e.length;for(let n=0;n<t;n++){const r=O(e[n],a);for(const e in m)g(m[e],$(d,e),B(e,r),n,t)}c=f,f+=y}}return a.forEach(((e,r)=>{for(const s in e){const o=e[s];o.sort(T);const a=[],l=[],u=[];for(let e=0;e<o.length;e++){const{at:t,value:n,easing:r}=o[e];a.push(n),l.push((0,k.Y)(0,h,t)),u.push(r||"easeOut")}0!==l[0]&&(l.unshift(0),a.unshift(a[0]),u.unshift(I)),1!==l[l.length-1]&&(l.push(1),a.push(null)),i.has(r)||i.set(r,{keyframes:{},transition:{}});const c=i.get(r);c.keyframes[s]=a,c.transition[s]={...t,duration:h,ease:u,times:l,...n}}})),i}(e,t,n);return s.forEach((({keyframes:e,transition:t},n)=>{let s;s=(0,R.i)(n)?(0,y.D)(n,e.default,t.default):F(n,e,t),r.push(s)})),new c(r)}const N=e=>function(t,n,r){let s;var o;return o=t,s=Array.isArray(o)&&Array.isArray(o[0])?q(t,n,e):function(e){return"object"==typeof e&&!Array.isArray(e)}(n)?F(t,n,r,e):(0,y.D)(t,n,r),e&&e.animations.push(s),s};N();function U(){const e=(0,r.h)((()=>({current:null,animations:[]}))),t=(0,r.h)((()=>N(e)));return(0,s.z)((()=>{e.animations.forEach((e=>e.stop()))})),[e,t]}},365820:(e,t,n)=>{n.d(t,{M:()=>g});var r=n(667294),s=n(158868);function o(){const e=(0,r.useRef)(!1);return(0,s.L)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}var i=n(902074);var a=n(400240),l=n(996681);class u extends r.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function c({children:e,isPresent:t}){const n=(0,r.useId)(),s=(0,r.useRef)(null),o=(0,r.useRef)({width:0,height:0,top:0,left:0});return(0,r.useInsertionEffect)((()=>{const{width:e,height:r,top:i,left:a}=o.current;if(t||!s.current||!e||!r)return;s.current.dataset.motionPopId=n;const l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`\n          [data-motion-pop-id="${n}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${r}px !important;\n            top: ${i}px !important;\n            left: ${a}px !important;\n          }\n        `),()=>{document.head.removeChild(l)}}),[t]),r.createElement(u,{isPresent:t,childRef:s,sizeRef:o},r.cloneElement(e,{ref:s}))}const f=({children:e,initial:t,isPresent:n,onExitComplete:s,custom:o,presenceAffectsLayout:i,mode:u})=>{const f=(0,l.h)(h),p=(0,r.useId)(),m=(0,r.useMemo)((()=>({id:p,initial:t,isPresent:n,custom:o,onExitComplete:e=>{f.set(e,!0);for(const t of f.values())if(!t)return;s&&s()},register:e=>(f.set(e,!1),()=>f.delete(e))})),i?void 0:[n]);return(0,r.useMemo)((()=>{f.forEach(((e,t)=>f.set(t,!1)))}),[n]),r.useEffect((()=>{!n&&!f.size&&s&&s()}),[n]),"popLayout"===u&&(e=r.createElement(c,{isPresent:n},e)),r.createElement(a.O.Provider,{value:m},e)};function h(){return new Map}var p=n(325364),m=n(865411),d=n(45487);const y=e=>e.key||"";const g=({children:e,custom:t,initial:n=!0,onExitComplete:a,exitBeforeEnter:l,presenceAffectsLayout:u=!0,mode:c="sync"})=>{(0,d.k)(!l,"Replace exitBeforeEnter with mode='wait'");const h=(0,r.useContext)(p.p).forceRender||function(){const e=o(),[t,n]=(0,r.useState)(0),s=(0,r.useCallback)((()=>{e.current&&n(t+1)}),[t]);return[(0,r.useCallback)((()=>i.Wi.postRender(s)),[s]),t]}()[0],g=o(),v=function(e){const t=[];return r.Children.forEach(e,(e=>{(0,r.isValidElement)(e)&&t.push(e)})),t}(e);let A=v;const E=(0,r.useRef)(new Map).current,w=(0,r.useRef)(A),x=(0,r.useRef)(new Map).current,k=(0,r.useRef)(!0);if((0,s.L)((()=>{k.current=!1,function(e,t){e.forEach((e=>{const n=y(e);t.set(n,e)}))}(v,x),w.current=A})),(0,m.z)((()=>{k.current=!0,x.clear(),E.clear()})),k.current)return r.createElement(r.Fragment,null,A.map((e=>r.createElement(f,{key:y(e),isPresent:!0,initial:!!n&&void 0,presenceAffectsLayout:u,mode:c},e))));A=[...A];const R=w.current.map(y),C=v.map(y),M=R.length;for(let r=0;r<M;r++){const e=R[r];-1!==C.indexOf(e)||E.has(e)||E.set(e,void 0)}return"wait"===c&&E.size&&(A=[]),E.forEach(((e,n)=>{if(-1!==C.indexOf(n))return;const s=x.get(n);if(!s)return;const o=R.indexOf(n);let i=e;if(!i){const e=()=>{E.delete(n);const e=Array.from(x.keys()).filter((e=>!C.includes(e)));if(e.forEach((e=>x.delete(e))),w.current=v.filter((t=>{const r=y(t);return r===n||e.includes(r)})),!E.size){if(!1===g.current)return;h(),a&&a()}};i=r.createElement(f,{key:y(s),isPresent:!1,onExitComplete:e,custom:t,presenceAffectsLayout:u,mode:c},s),E.set(n,i)}A.splice(o,0,i)})),A=A.map((e=>{const t=e.key;return E.has(t)?e:r.createElement(f,{key:y(e),isPresent:!0,presenceAffectsLayout:u,mode:c},e)})),r.createElement(r.Fragment,null,E.size?A:A.map((e=>(0,r.cloneElement)(e))))}},637301:(e,t,n)=>{n.d(t,{I:()=>s});var r=n(45487);function s(e,t,n){var s;if("string"==typeof e){let o=document;t&&((0,r.k)(Boolean(t.current),"Scope provided, but no element detected."),o=t.current),n?(null!==(s=n[e])&&void 0!==s||(n[e]=o.querySelectorAll(e)),e=n[e]):e=o.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}},865411:(e,t,n)=>{n.d(t,{z:()=>s});var r=n(667294);function s(e){return(0,r.useEffect)((()=>()=>e()),[])}}}]);