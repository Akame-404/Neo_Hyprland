"use strict";(globalThis.webpackChunknotion_next=globalThis.webpackChunknotion_next||[]).push([[24366],{718250:(e,t,o)=>{o.d(t,{K:()=>r,O:()=>i});var n=o(745483);function i(e){n.Z.state.openModals.has(e)||(n.Z.state.openModals.add(e),n.Z.emit())}function r(e){n.Z.state.openModals.has(e)&&(n.Z.state.openModals.delete(e),n.Z.emit())}},950526:(e,t,o)=>{o.d(t,{Hs:()=>b,RV:()=>M,ZP:()=>L});var n=o(667294),i=o(800480),r=o(886628),s=o(698519),a=o(519889),l=o(307928),d=o(401898),c=o(970782),u=o(433929),g=o(460709),p=o(80444),m=o(164921),h=o(552275),x=o(478140),f=o(632163),C=o(953437),y=o(672495),j=o(164369),Z=o(45653),v=o(785893);function L(e){let{onChange:t}=e;const o=(0,i.O7)(),[s,l]=(0,n.useState)(!1),c=()=>l(!1),u=(0,r.VK)((()=>p.default.state.currentUserStore),[]),g=(0,r.VK)((()=>u?o.currentUser.loggedInUserIds.map((e=>u.getRecordModel({table:a.KJ,id:e}))).filter(d.$K):[]),[u,o]),m=(0,r.VK)((()=>null==u?void 0:u.getValue()),[u]);return m?(0,v.jsx)(C.ZP,{popupType:C.kQ.Popup,origin:(0,v.jsx)(b,{onClick:()=>l(!0),currentUserValue:m}),render:()=>(0,v.jsx)(S,{users:g,currentUserId:m.id,onChange:t,onClose:c}),placementToOrigin:C.ZP.Placement.Bottom,alignmentToOrigin:C.ZP.Alignment.End,onDismiss:c,open:s}):null}function b(e){const{onClick:t,currentUserValue:o}=e;return(0,v.jsx)("div",{style:{marginLeft:18},children:(0,v.jsx)(m.Z,{onClick:t,style:{borderRadius:"100%"},children:(0,v.jsx)(Z.Z,{userValue:o,size:32})})})}function S(e){const t=(0,i.O7)(),{users:o,currentUserId:n,onClose:r,onChange:s}=e;return(0,v.jsx)(x.Z,{menuType:g.og.Popup,children:(0,v.jsx)(f.Z,{type:f.i.Vertical,initialFocus:void 0,sections:[{key:"developer-integration-accounts",items:o.map((e=>({key:e.id,action:async()=>{const o=await c.x({environment:t,newCurrentUserId:e.id});null==s||s(o),r()},render:t=>(0,v.jsx)(M,{...t,user:e,isLoggedIn:e.id===n})}))),render:e=>(0,v.jsx)(y.Z,{...e})}]})})}const M=n.forwardRef((function(e,t){const{user:o,isLoggedIn:n,...i}=e,a=u.default.getIntl(),d=(0,r.VK)((()=>(0,l.Nz)(a,o)),[a,o]),c=(0,r.VK)((()=>o.email),[o]);return(0,v.jsx)(h.Z,{...i,ref:t,title:(0,v.jsx)(j.Z,{className:"notranslate",children:d}),icon:(0,v.jsx)(Z.Z,{userValue:o,size:28}),caption:(0,v.jsx)(j.Z,{isSmall:!0,children:c}),right:n&&(0,s.k)({width:12,height:12})})}))},336360:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(667294),i=o(247839);function r(e){return(0,n.useEffect)((()=>{document.title=e.title,i.setWindowTitle(e.title)}),[e.title]),e.children}},267232:(e,t,o)=>{o.d(t,{Z:()=>p});var n=o(667294),i=o(800480),r=o(886628),s=o(724405);const a=(0,o(745238).CZ)("arrowSquarePath",{default:{loader:()=>o.e(61100).then(o.bind(o,261100)),size:20},small:{loader:()=>o.e(28588).then(o.bind(o,728588)),size:16},mini:{loader:()=>o.e(4354).then(o.bind(o,804354)),size:14},large:{loader:()=>o.e(47912).then(o.bind(o,447912)),size:24}});var l=o(709291),d=o(331120),c=o(550506),u=o(382914),g=o(785893);const p=function(e){let{redirectUrl:t,description:o,onLoginClicked:p}=e;const m=(0,i.O7)(),h=(0,r.VK)((()=>!m.currentUser.id),[m]),x=(0,s.yK)((e=>({modalStyle:{maxWidth:300,maxHeight:400},modalSubtitle:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:8,marginTop:8}})),[]),f=(0,n.useCallback)((()=>{null==p||p(),d.CV({environment:m,redirectRoute:{url:t},options:{openInNew:"tab"}})}),[m,t,p]);return(0,g.jsx)(c.Z,{open:h,innerStyle:x.modalStyle,showCloseIcon:!1,disableAnimation:!0,render:()=>(0,g.jsx)(u.sR,{header:(0,g.jsx)(u.vI,{iconAndTitle:(0,g.jsx)(u.kC,{iconGroup:a,title:(0,g.jsx)(l.FormattedMessage,{id:"applicationLoggedOutUserNotice.header.title",defaultMessage:"You must be logged into Notion to apply."})}),description:o}),footer:(0,g.jsx)(u.a6,{layout:"vertical",primaryButtons:[{buttonType:"primary",label:(0,g.jsx)(l.FormattedMessage,{id:"applicationLoggedOutUserNotice.footer.signUpNow",defaultMessage:"Log in or sign up now"}),onClick:f}]})})})}},100353:(e,t,o)=>{o.d(t,{Z:()=>f});o(667294);var n=o(313991),i=o(724405),r=o(841892),s=o(460651),a=o(89101),l=o(709291),d=o(531701),c=o(137810),u=o(434859),g=o(316354),p=o(953336),m=o(950526),h=o(336360),x=o(785893);const f=function(e){const{children:t,title:o,marketingLink:f}=e,C=(0,i.yK)((e=>({footerLink:{color:d.ZP.frontTextMedium,cursor:"pointer",textDecoration:"none",display:"block",marginBottom:4},footerColophon:{gridColumn:"auto/span 8"},footerNav:{gridColumn:"auto/span 2",marginBottom:16},footerLogo:{margin:"0 auto 20px",fontSize:0,display:"block"},footerSectionHeader:{fontFamily:c.Z.getCompositeFontFamily(n.SP).mono,fontWeight:c.Z.fontWeight.medium,margin:"0 auto 8px",marginBottom:"1.1em",fontSize:15},footerCopy:{fontSize:15,fontWeight:c.Z.fontWeight.regular,lineHeight:"1.5em",color:d.ZP.frontTextMedium,margin:"0 auto 8px",marginBottom:"1.1em"},footerContainer:{marginTop:60,padding:"70px 30px",alignItems:"flex-start",justifyItems:"flex-start",flex:"1 0 auto",zIndex:999,width:"100%",maxWidth:1160,boxSizing:"border-box",margin:"0 auto",borderTop:`1px solid ${d.ZP.dividerColor}`,display:"grid",gridTemplateColumns:"repeat(12,1fr)",columnGap:16,gap:16},scroller:{height:"100vh",padding:"0px 10px",background:d.ZP.white},innerContainer:{margin:"auto",padding:"0px 10px",maxWidth:700},topBar:{maxWidth:1100,height:60,margin:"0 auto",display:"flex",alignItems:"center",marginBottom:10,justifyContent:"space-between"},icon:{fill:e.regularTextColor,height:36,width:36},brandLink:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",gap:12,fontSize:24,fontWeight:c.Z.fontWeight.semibold}})),[]);return(0,x.jsx)(h.Z,{title:o,children:(0,x.jsxs)(p.Z,{style:C.scroller,type:u.Z.Y,children:[(0,x.jsxs)("div",{style:C.topBar,children:[(0,x.jsx)(g.Z,{href:a._j.root,children:(0,x.jsxs)("div",{style:C.brandLink,children:[(0,x.jsx)("div",{children:(0,s.h)(C.icon)}),(0,x.jsx)("div",{children:(0,x.jsx)(l.FormattedMessage,{defaultMessage:"Notion",id:"ApplicationsShell.document.header"})})]})}),(0,x.jsx)(m.ZP,{})]}),(0,x.jsx)("div",{style:C.innerContainer,children:t}),(0,x.jsxs)("footer",{style:C.footerContainer,children:[(0,x.jsxs)("section",{style:C.footerColophon,children:[(0,x.jsx)("h1",{style:C.footerLogo,children:(0,x.jsx)("img",{src:r.Z.images.integrations.notionFooterLogoSvg})}),(0,x.jsx)("h6",{style:C.footerCopy,children:(0,x.jsx)(l.FormattedMessage,{id:"layout.meta.title",defaultMessage:"The all-in-one workspace for your notes, tasks, wikis, and databases."})}),(0,x.jsx)("h6",{style:C.footerCopy,children:`©${(new Date).getFullYear()} Notion Labs, Inc.`}),(0,x.jsx)(g.Z,{external:!0,href:a._j.termsAndPrivacy,style:C.footerLink,children:(0,x.jsx)(l.FormattedMessage,{id:"studentGroupSignupContainer.layout.footer.termsAndPrivacy",defaultMessage:"Terms & Privacy"})})]}),(0,x.jsxs)("nav",{style:C.footerNav,children:[(0,x.jsx)("h5",{style:C.footerSectionHeader,children:"Notion"}),f(C.footerLink),(0,x.jsx)(g.Z,{external:!0,href:a._j.product,style:C.footerLink,children:(0,x.jsx)(l.FormattedMessage,{id:"studentGroupSignupContainer.layout.footer.product",defaultMessage:"Product"})}),(0,x.jsx)(g.Z,{external:!0,href:a._j.blog,style:C.footerLink,children:(0,x.jsx)(l.FormattedMessage,{id:"studentGroupSignupContainer.layout.footer.blog",defaultMessage:"Blog"})}),(0,x.jsx)(g.Z,{external:!0,href:a._j.careers,style:C.footerLink,children:(0,x.jsx)(l.FormattedMessage,{id:"studentGroupSignupContainer.layout.footer.careers",defaultMessage:"Careers"})})]})]})]})})}},300096:(e,t,o)=>{o.d(t,{Z:()=>a,p:()=>s});o(667294);var n=o(724405),i=o(137810),r=o(785893);function s(e){const{name:t,htmlLabel:o,children:i,errorMessage:s,hideLabel:a,style:d={},labelStyle:c={},errorMessageStyle:u={}}=e,g=(0,n.yK)((e=>({formInputContainer:{display:"flex",flexDirection:"column",gap:6,width:"100%"},formLabel:{color:e.darkTextColor,visibility:a?"hidden":"inherit"},errorMessage:{fontSize:12,color:e.errorText,...u}})),[a,u]);return(0,r.jsxs)("div",{style:{...g.formInputContainer,...d},children:[(0,r.jsx)(l,{htmlFor:o,style:{...g.formLabel,...c},children:t}),i,s&&(0,r.jsx)("div",{role:"alert",style:g.errorMessage,children:s})]})}const a=s;function l(e){const{children:t,htmlFor:o,style:s}=e,a=(0,n.yK)((e=>({base:{lineHeight:i.Z.lineHeight.UISmall.desktop,fontSize:i.Z.fontSize.UISmall.desktop,color:e.regularTextColor}})),[]);return(0,r.jsx)("label",{htmlFor:o,style:{...a.base,...s},children:t})}},474208:(e,t,o)=>{o.d(t,{D0:()=>y,ZP:()=>j});var n=o(667294),i=o(800480),r=o(886628),s=o(724405),a=o(749085),l=o(435840),d=o(478140),c=o(460709),u=o(417311),g=o(223196),p=o(748019),m=o(552275),h=o(268894),x=o(953437),f=o(672495),C=o(785893);class y extends a.default{getInitialState(){return{query:"",focus:!1}}}const j=function(e){const{items:t,onSelect:o,analyticsName:a,doNotFilter:j,id:Z}=e,v=(0,i.O7)(),L=(0,r.qz)(e.store,y),{query:b,focus:S}=(0,r.VK)((()=>null==L?void 0:L.state),[L]),M=(0,s.yK)((e=>({textInput:{fontSize:14,borderRadius:u.Z.borderRadius,padding:"8px 14px",height:36},icon:{width:16,fill:e.lightIconColor}})),[]),k=(0,n.useMemo)((()=>e=>L.setState({...L.state,query:e})),[L]),I=(0,n.useMemo)((()=>e=>L.setState({...L.state,focus:e})),[L]),w=(0,n.useMemo)((()=>[{key:"selections",render:e=>(0,C.jsx)(f.Z,{...e,loading:!1}),actions:t.map(((e,t)=>{const{label:n,value:i,icon:r}=e;{const s={key:t,value:i??n,displayName:n,analyticsName:a,searchName:void 0,render:e=>(0,C.jsx)(m.Z,{...e,title:n,icon:r,focused:!1}),action:()=>{k(n),I(!1),null==o||o(e)},closeParentMenu:!0};return s}}))}]),[t,o,a,I,k]);return(0,C.jsx)(x.ZP,{popupType:g.k.Popup,placementToOrigin:x.ZP.Placement.Bottom,sameWidthAsOrigin:!0,open:S,onDismiss:()=>{I(!1)},origin:(0,C.jsx)(h.ZP,{id:Z,inputLeft:""===b&&(0,C.jsx)(h.f_,{icon:l.R}),showClearButton:!0,value:b,onChange:e=>{k(e.target.value),I(!0)},placeholder:"Type to search...",focus:S,inputOuterStyle:{...M.textInput},onClick:()=>{I(!0)},onClearButtonClick:()=>{k(""),I(!0),null==o||o(void 0)},itemMarginLeft:0,itemMarginRight:0}),render:()=>(0,C.jsx)(d.Z,{menuType:c.og.Popup,maxHeight:200,tokenInputHeader:!0,disableHeaderBorder:!0,children:(0,C.jsx)(p.Z,{filter:j?void 0:b,context:{blocks:[],environment:v,publicEditMode:void 0},initialFocus:0,sections:w})})})}},855953:(e,t,o)=>{o.d(t,{u:()=>c});o(757658),o(667294);var n=o(800480),i=o(886628),r=o(653965),s=o(731278),a=o(548779),l=o(80444),d=o(785893);function c(){const e=(0,n.O7)();return(0,i.VK)((()=>{var t;const o=null===(t=l.default.state.currentUserRootStore)||void 0===t?void 0:t.getSpaceViewStores();return o?function(e,t){if(!t)return[];const o=r.mN(t,(e=>e.getSpaceId())).filter((e=>{const t=e.getSpaceStore();return e.isDefined()&&t&&t.canAdmin()})),n=[];for(const i of o){const t=i.getSpaceStore();if(t){const o=(0,a.rn)(e,t),r=(0,a.Wd)(e,t);n.push({label:o,value:i.getSpaceId(),icon:(0,d.jsx)(s.Z,{icon:r,isEmptyPage:!1,title:o,size:20,disabled:!0})})}}return n}(e,o):[]}),[e])}},745483:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(749085),i=o(292595);class r extends n.default{getInitialState(){return{openModals:new Set}}}const s=new r,a=s;(0,i.exposeDebugValue)("GlobalModalStore",s)},361254:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(749085);class i extends n.default{getInitialState(){return{open:!1,openAnimationCompleted:!0,closeAnimationCompleted:!0}}}const r=i},114581:(e,t,o)=>{o.d(t,{h:()=>n});const n=(0,o(745238).CZ)("exclamationMarkTriangle",{default:{loader:()=>o.e(15187).then(o.bind(o,15187)),size:20},small:{loader:()=>o.e(79250).then(o.bind(o,979250)),size:16},mini:{loader:()=>o.e(93173).then(o.bind(o,793173)),size:14},large:{loader:()=>o.e(43339).then(o.bind(o,343339)),size:24}})},964275:(e,t,o)=>{o.d(t,{D:()=>r});o(667294);var n=o(745238),i=o(785893);const r=(0,n.IU)("closeSmall",{viewBox:"0 0 16 16",svg:(0,i.jsx)("path",{d:"M3.732 11.052c-.303.308-.32.877.011 1.202.33.33.894.32 1.203.011L8 9.21l3.05 3.05c.32.325.872.32 1.197-.011a.857.857 0 00.01-1.197L9.21 8.002l3.05-3.056a.857.857 0 00-.01-1.197.857.857 0 00-1.198-.01L8 6.788 4.946 3.732c-.31-.303-.878-.32-1.203.01-.325.331-.314.895-.01 1.203l3.055 3.056-3.056 3.05z"})})},460651:(e,t,o)=>{o.d(t,{h:()=>r});o(667294);var n=o(745238),i=o(785893);const r=(0,n.IU)("notionLogo",{viewBox:"0 0 120 126",svg:(0,i.jsx)("path",{d:"M 20.6927 21.9315C 24.5836 25.0924 26.0432 24.8512 33.3492 24.3638L 102.228 20.2279C 103.689 20.2279 102.474 18.7705 101.987 18.5283L 90.5477 10.2586C 88.3558 8.55699 85.4356 6.60818 79.8387 7.09563L 13.1433 11.9602C 10.711 12.2014 10.2251 13.4175 11.1939 14.3924L 20.6927 21.9315ZM 24.8281 37.9835L 24.8281 110.456C 24.8281 114.351 26.7745 115.808 31.1553 115.567L 106.853 111.187C 111.236 110.946 111.724 108.267 111.724 105.103L 111.724 33.1169C 111.724 29.958 110.509 28.2544 107.826 28.4976L 28.721 33.1169C 25.8018 33.3622 24.8281 34.8225 24.8281 37.9835ZM 99.5567 41.8711C 100.042 44.0622 99.5567 46.2512 97.3618 46.4974L 93.7143 47.2241L 93.7143 100.728C 90.5477 102.43 87.6275 103.403 85.1942 103.403C 81.2983 103.403 80.3226 102.186 77.4044 98.54L 53.5471 61.087L 53.5471 97.3239L 61.0964 99.0275C 61.0964 99.0275 61.0964 103.403 55.0057 103.403L 38.2148 104.377C 37.727 103.403 38.2148 100.973 39.9179 100.486L 44.2996 99.2717L 44.2996 51.36L 38.2158 50.8725C 37.728 48.6815 38.9431 45.5225 42.3532 45.2773L 60.3661 44.0631L 85.1942 82.0036L 85.1942 48.4402L 78.864 47.7136C 78.3781 45.0351 80.3226 43.0902 82.7569 42.849L 99.5567 41.8711ZM 7.5434 5.39404L 76.9175 0.285276C 85.4366 -0.445402 87.6285 0.0440428 92.983 3.93368L 115.128 19.4982C 118.782 22.1747 120 22.9034 120 25.8211L 120 111.187C 120 116.537 118.051 119.701 111.237 120.185L 30.6734 125.05C 25.5584 125.294 23.124 124.565 20.4453 121.158L 4.13735 99.9994C 1.21516 96.1048 0 93.191 0 89.7819L 0 13.903C 0 9.5279 1.94945 5.8785 7.5434 5.39404Z"})})},222686:(e,t,o)=>{o.d(t,{f:()=>r});o(667294);var n=o(745238),i=o(785893);const r=(0,n.IU)("person",{viewBox:"0 0 16 16",svg:(0,i.jsx)("path",{d:"M7.7832 8.00195C9.27344 8.00195 10.5381 6.67578 10.5381 4.95996C10.5381 3.28516 9.2666 2 7.7832 2C6.29297 2 5.01465 3.30566 5.02148 4.97363C5.02148 6.67578 6.28613 8.00195 7.7832 8.00195ZM3.51758 14.3594H12.0352C13.1631 14.3594 13.5527 14.0176 13.5527 13.3887C13.5527 11.6318 11.3242 9.21191 7.77637 9.21191C4.23535 9.21191 2 11.6318 2 13.3887C2 14.0176 2.38965 14.3594 3.51758 14.3594Z"})})},414734:(e,t,o)=>{o.d(t,{X:()=>r});o(667294);var n=o(745238),i=o(785893);const r=(0,n.IU)("personCrossedOut",{viewBox:"0 0 44 44",svg:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("path",{d:"M5.4857 44H0L44 8.56549V13.0061L5.4857 44Z"}),(0,i.jsx)("path",{d:"M39.8048 44H8.66491L25.6448 30.4378C26.9394 30.6489 28.1581 30.9719 29.3009 31.4067C31.5362 32.2374 33.4346 33.326 34.9964 34.6723C36.5725 36.0044 37.7761 37.4367 38.6071 38.9692C39.4525 40.5018 39.8752 41.9555 39.8752 43.3305C39.8752 43.5675 39.8517 43.7906 39.8048 44Z"}),(0,i.jsx)("path",{d:"M30.3971 16.7973C30.3971 16.8668 30.3965 16.9359 30.3952 17.0048L19.3828 25.9192C18.7467 25.7134 18.1339 25.4228 17.5446 25.0473C16.2408 24.2023 15.1876 23.0708 14.3853 21.6528C13.5972 20.2205 13.2032 18.6163 13.2032 16.8403C13.2032 15.0929 13.5972 13.5174 14.3853 12.1137C15.1876 10.7101 16.2408 9.60007 17.5446 8.78366C18.8485 7.96725 20.267 7.55905 21.8001 7.55905C23.3332 7.55905 24.7517 7.96009 26.0556 8.76218C27.3595 9.56426 28.4054 10.6671 29.1935 12.0708C29.9959 13.4601 30.3971 15.0356 30.3971 16.7973Z"})]})})},435840:(e,t,o)=>{o.d(t,{R:()=>r,T:()=>i});o(667294);var n=o(745238);const i=(0,o(785893).jsx)("path",{d:"M.281 6.438c0-.875.164-1.696.492-2.461a6.484 6.484 0 011.375-2.032A6.237 6.237 0 016.64.078 6.2 6.2 0 019.11.57c.77.328 1.447.787 2.03 1.375a6.374 6.374 0 011.368 2.032c.333.765.5 1.586.5 2.46 0 .688-.107 1.342-.32 1.961a6.28 6.28 0 01-.868 1.696l3.563 3.578c.11.104.19.226.242.367.057.14.086.29.086.445 0 .22-.05.417-.149.594a1.122 1.122 0 01-1 .57c-.156 0-.307-.028-.453-.086a1.058 1.058 0 01-.382-.25l-3.586-3.585c-.5.333-1.047.596-1.641.789a6.089 6.089 0 01-1.86.28 6.237 6.237 0 01-2.468-.491 6.4 6.4 0 01-2.024-1.367A6.509 6.509 0 01.773 8.913a6.256 6.256 0 01-.492-2.476zm1.664 0c0 .65.12 1.26.36 1.828a4.775 4.775 0 001.015 1.5c.433.427.933.763 1.5 1.007a4.548 4.548 0 001.82.368c.652 0 1.261-.123 1.829-.368a4.747 4.747 0 002.508-2.507 4.567 4.567 0 00.367-1.829c0-.645-.123-1.252-.367-1.82a4.776 4.776 0 00-1.016-1.5A4.578 4.578 0 008.469 2.11a4.567 4.567 0 00-1.828-.367c-.646 0-1.253.123-1.82.367a4.667 4.667 0 00-1.5 1.008c-.433.432-.772.932-1.016 1.5a4.633 4.633 0 00-.36 1.82z"}),r=(0,n.IU)("search",{viewBox:"0 0 16 16",svg:i})}}]);