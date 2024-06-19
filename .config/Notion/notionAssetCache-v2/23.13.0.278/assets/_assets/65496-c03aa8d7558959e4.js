"use strict";(globalThis.webpackChunknotion_next=globalThis.webpackChunknotion_next||[]).push([[65496],{279698:(e,t,o)=>{o.d(t,{j:()=>p});var i=o(709291),n=o(914542),s=o(896809),a=o(547307),r=o(496802),l=o(627153),d=o(210228),c=o(353471);const g=1500,u=(0,i.defineMessages)({pageCover:{defaultMessage:"Page cover",id:"pageCover.title"},fileTypeCaption:{defaultMessage:"Images wider than {idealImageWidth} pixels work best.",id:"pageCover.fileType.caption"},uploadFailed:{defaultMessage:"Upload failed",id:"pageCover.errorDialogMessage.uploadFailed"},embedTitle:{defaultMessage:"Link",id:"pageCover.embedType.title"},embedPlaceholder:{defaultMessage:"Paste an image link…",id:"pageCover.embedType.placeholder"},embedCaption:{defaultMessage:"Works with any image from the web.",id:"pageCover.embedType.caption"},embedSubmit:{defaultMessage:"Submit",id:"pageCover.embedType.buttonText"}});function p(e){let{environment:t,intl:o,store:i,rect:n}=e;l.$(t,{originGap:3,originRect:n,isSmallWidth:!1,popupWidth:540,maxHeight:485,title:o.formatMessage(u.pageCover),onDelete:()=>{!function(e){let{environment:t,store:o}=e;l.Z(),d.createAndCommit({userAction:"PageCover.handleDelete",environment:t,perform:e=>{r.MF({store:o,transaction:e})}})}({environment:t,store:i})},currentTab:"gallery",tabs:[{type:"gallery",onChange:e=>{let{url:o,position:n}=e;h({environment:t,store:i,url:o,position:n})}},{type:"file",fileUpload:!1,imageUpload:!0,videoUpload:!1,caption:o.formatMessage(u.fileTypeCaption,{idealImageWidth:g}),onUpload:e=>{l.Z(),c.cT({environment:t,file:e,bucket:"secure",record:i.pointer,onStart:v,onProgress:f,onComplete:e=>{var o;o={environment:t,store:i,url:e},m({...o,position:.5})},onError:()=>{a.showErrorMessage(o.formatMessage(u.uploadFailed))}})}},{type:"embed",title:o.formatMessage(u.embedTitle),inputPlaceholder:o.formatMessage(u.embedPlaceholder),caption:o.formatMessage(u.embedCaption),buttonText:o.formatMessage(u.embedSubmit),onChange:e=>{var o;o={environment:t,store:i,url:e},m({...o,position:.5}),l.Z()}},{type:"unsplash",onChange:e=>{let{url:o,position:n}=e;h({environment:t,store:i,url:o,position:n})}}]})}async function m(e){const{environment:t,store:o,url:i,position:a}=e,{serverCommitResult:l}=d.createAndCommit({userAction:"PageCover.updatePageCover",environment:t,perform:e=>{r.fs({store:o,url:i,position:a||.5,transaction:e})}});await l,s.Z.state.loadingMode===n.NS&&s.Z.setState({loadingMode:n.EP,dataURL:s.Z.state.dataURL,uploadProgress:100})}function h(e){m(e),e.environment.device.isMobile&&l.Z()}function v(e){const{file:t,name:o,size:i}=e;if(l.Z(),s.Z.setState({loadingMode:n.SS,file:t,name:o,size:i}),t.type.indexOf("image")>=0){const e=new FileReader;e.onload=e=>{s.Z.state.loadingMode===n.SS&&s.Z.setState({...s.Z.state,uploadProgress:0,loadingMode:n.NS,dataURL:e.target.result})},e.readAsDataURL(t)}}function f(e){const{progressPercent:t}=e;s.Z.state.loadingMode===n.NS&&s.Z.setState({...s.Z.state,uploadProgress:t})}},487636:(e,t,o)=>{o.d(t,{Z:()=>v});var i=o(667294),n=o(313991),s=o(800480),a=o(724405),r=o(222491),l=o(401898),d=o(137810),c=o(417311),g=o(623063),u=o(164921),p=o(526388),m=o(785893);function h(e){const{button:t,isLast:o}=e,n=(0,a.yK)((e=>({button:{display:"flex",alignItems:"center",padding:"4px 6px",fontWeight:d.Z.fontWeight.medium,borderRight:`1px solid ${e.regularDividerColor}`,color:e.actionMenuButtonTextColor,fill:e.actionMenuButtonTextColor},buttonLast:{borderRight:"none"},buttonHovered:{background:e.whiteButtonHoveredBackground},buttonPressed:{background:e.whiteButtonPressedBackground}})),[]);return i.cloneElement(t,{...(0,r.iv)(t.props.style,n.button,o&&n.buttonLast),hoveredStyle:(0,r.iv)(n.buttonHovered,o&&n.buttonLast).style,pressedStyle:n.buttonPressed})}const v=function(e){let{children:t,isVisible:o,position:v,style:f}=e;const b=(0,s.O7)(),C=(0,a.yK)((e=>({container:{color:e.actionMenuButtonTextColor,fill:e.actionMenuButtonTextColor,fontSize:12,background:e.whiteButtonBackground,boxShadow:e.lightBoxShadow,display:"flex",whiteSpace:"nowrap",borderRadius:c.Z.borderRadius,maxWidth:"calc(100% - 16px)",minHeight:24,overflow:"hidden",pointerEvents:b.device.isMobile?"auto":"none",opacity:b.device.isMobile?1:0,fontFamily:d.Z.getCompositeFontFamily(n.SP).sans,position:"absolute",right:c.Z.horizontal.small,bottom:c.Z.vertical.small,zIndex:2},containerHover:{pointerEvents:"auto",opacity:1},containerTop:{top:c.Z.vertical.small,bottom:void 0}})),[b]),y=i.Children.toArray(t).filter(l.$K),x=y.length;return(0,m.jsx)(g.Z,{isVisible:!0,animationStyle:{opacity:o?1:0},render:()=>(0,m.jsx)("div",{...(0,r.iv)(C.container,f,o&&C.containerHover,"top"===v&&C.containerTop),children:y.map(((e,t)=>{const o=t===x-1;if(e&&"object"==typeof e&&"type"in e){if(e.type===p.Z&&i.isValidElement(e))return i.cloneElement(e,{render:(t,i)=>{const n=e.props.render(t,i);return(0,m.jsx)(h,{isLast:o,button:n},e.key)}});if(e.type===u.Z&&i.isValidElement(e))return(0,m.jsx)(h,{isLast:o,button:e},e.key)}}))})})}},65496:(e,t,o)=>{o.d(t,{Z:()=>R});var i=o(667294),n=o(800480),s=o(886628),a=o(709291),r=o(496802),l=o(279698),d=o(210228),c=o(128651),g=o(450627),u=o(400807),p=o(914542),m=o(896809),h=o(487636),v=o(623063),f=o(164921),b=o(634406),C=o(565107),y=o(568785),x=o(532854),M=o(81865),S=o(427016),Z=o(88940),P=o(785893);const R=function(e){let{store:t,disabled:o,paddingRight:a,paddingLeft:l,height:g,proxyWidth:h}=e;const v=(0,n.O7)(),f=(0,s.qz)(void 0,c.Z),S=(0,s.VK)((()=>o||"suggest"===u.Z.getMode(t)),[o,t]),R=(0,s.VK)((()=>t.getCover()),[t]),j=(0,s.VK)((()=>m.Z.state),[]),[F,L]=(0,i.useState)(void 0);if(!R)return null;const T=j.loadingMode!==p.LU&&j.loadingMode!==p.SS;return(0,P.jsx)(Z.Z,{mouseStore:f,onFlushTemporaryPosition:e=>function(e,t,o){const{imagePosition:i,reset:n}=e;d.createAndCommit({userAction:"PageCover.handleFlushTemporaryPosition",environment:o,perform:e=>{r.Mp({store:t,coverPosition:i,transaction:e}),n()}})}(e,t,v),renderControl:e=>{let{handleRepositionClick:o,handleSavePositionClick:i,handleCancelClick:n,isVisible:s,isRepositioning:r}=e;return(0,P.jsx)(w,{handleRepositionClick:o,handleSavePositionClick:i,handleCancelClick:n,isVisible:s,isRepositioning:r,lastProxiedUrl:F,store:t,disabled:S,paddingRight:a,paddingLeft:l,mouseStore:f})},source:"page",store:t,style:{display:"flex",flexDirection:"column",alignItems:"center",height:g,cursor:"default"},render:e=>(0,P.jsxs)(i.Fragment,{children:[(0,P.jsx)(M.Z,{url:R.cover,isAuthenticated:!0,permissionRecord:R.pointer,width:h,onFinishedLoadingProxyUrl:L,render:(t,o)=>{const i={width:"100%",height:g,objectFit:"cover",opacity:T?.5:1,objectPosition:`center ${100*(1-(e.imagePosition||0))}%`,borderRadius:0},n={width:"100%",height:g};return(0,P.jsx)(C.B,{src:o,placeholderSrc:T?j.dataURL:void 0,placeholderBehavior:T?"force-show-placeholder":"show-placeholder-if-loading-src",containerStyle:n,imageStyle:i,onLoadComplete:k})}}),T&&(0,P.jsxs)("div",{style:b.I,children:[(0,P.jsx)(y.Z,{style:{width:16,height:16,marginRight:4}}),(0,P.jsx)("div",{style:{minWidth:30,textAlign:"right"},children:(0,P.jsx)(x.Z,{percentage:j.uploadProgress})})]})]})})};function k(){m.Z.reset()}function w(e){let{isVisible:t,isRepositioning:o,handleCancelClick:r,handleRepositionClick:d,handleSavePositionClick:c,lastProxiedUrl:u,store:b,disabled:C,paddingRight:y,paddingLeft:x,mouseStore:M}=e;const Z=(0,n.O7)(),R=(0,a.useIntl)(),k=(0,i.useCallback)((e=>function(e,t,o,i,n){n.reset();const s=e.target.getBoundingClientRect();l.j({environment:t,intl:o,store:i,rect:s})}(e,Z,R,b,M)),[Z,R,b,M]),w=(0,s.VK)((()=>m.Z.state.loadingMode),[]),j=(0,s.VK)((()=>function(e){let t;return t=e.isFullWidth()?"100%":g.zL,t}(b)),[b]);if(C||w!==p.LU)return null;const{device:F}=Z,{isMobile:L}=F;return(0,P.jsx)(v.Z,{isVisible:!0,animationStyle:{width:j,opacity:t?1:0},render:()=>(0,P.jsx)("div",{style:{position:"absolute",pointerEvents:t?"auto":"none",maxWidth:"100%",top:48},children:(0,P.jsxs)(h.Z,{isVisible:t,position:"bottom",style:{marginRight:y,marginLeft:x},children:[!o&&(0,P.jsx)(f.Z,{style:{borderRight:L?"none":void 0,...S.ar},onClick:k,children:(0,P.jsx)(a.FormattedMessage,{defaultMessage:"Change cover",id:"pageCover.changeCover.text"})}),!o&&!L&&(0,P.jsx)(f.Z,{style:{...S.ar,borderRight:"none"},onClick:e=>d(e,u),children:(0,P.jsx)(a.FormattedMessage,{defaultMessage:"Reposition",id:"pageCover.reposition.text"})}),o&&!L&&(0,P.jsx)(f.Z,{style:S.ar,onClick:c,children:(0,P.jsx)(a.FormattedMessage,{defaultMessage:"Save position",id:"pageCover.savePosition.text"})}),o&&!L&&(0,P.jsx)(f.Z,{style:{...S.ar,borderRight:"none"},onClick:r,children:(0,P.jsx)(a.FormattedMessage,{defaultMessage:"Cancel",id:"pageCover.reposition.cancelText"})})]})})})}},88940:(e,t,o)=>{o.d(t,{Z:()=>S});var i=o(667294),n=o(313991),s=o(800480),a=o(706740),r=o(886628),l=o(724405),d=o(712137),c=o(222491),g=o(709291),u=o(531701),p=o(653965),m=o(137810),h=o(619584),v=o(524677),f=o(128651),b=o(27724),C=o(623063),y=o(706685),x=o(785893);const M={isRepositioning:!1};const S=function(e){const t=(0,i.useRef)(null),o=(0,s.O7)(),{isMobile:n}=(0,s.Fy)(),[g,u]=(0,i.useState)(M),m=(0,i.useCallback)((()=>{u(M)}),[]),{isRepositioning:C,image:S,startDragRenderedPosition:P,startDragImageScreenHeight:R}=g,k=(0,r.VK)((()=>0===b.default.state.stores.length),[]),[w,j]=(0,i.useState)(!1),F=(0,r.qz)(e.mouseStore,f.Z),{style:L,onFlushTemporaryPosition:T}=e,E=(0,r.VK)((()=>F.state.mouseEntered),[F]),D=(0,l.yK)((()=>({dragContainer:{width:"100%",cursor:C?"move":"inherit"},container:{position:"relative",width:"100%"}})),[C]),V=(0,r.VK)((()=>{return t=e.source,o=e.store,i=g.temporaryPosition,(0,p.hj)(i)?i:function(e,t){if("gallery"===e||"board"===e){const e=t.getFormat().card_cover_position;if((0,p.hj)(e))return e}const o=.5;if(t.isCollectionView()){const e=t.getCollectionViewCollectionStore();if(e){const t=e.getFormat().collection_cover_position;return(0,h.z4)(t)?o:t}}const i=t.getFormat(),n=i.page_cover_position;return(0,p.hj)(n)?n:o}(t,o);var t,o,i}),[g.temporaryPosition,e.source,e.store]);(0,i.useEffect)((()=>{const o=o=>{const i=t.current;i&&!i.contains(o.target)&&C&&e.onFlushTemporaryPosition({imagePosition:V,reset:()=>{F.reset(),m()}})};return window.addEventListener("mousedown",o),()=>window.removeEventListener("mousedown",o)}),[V,C,F,e,m]),C&&!k&&m();const I=(0,i.useMemo)((()=>(0,p.P2)((e=>{F.setState({...F.state,mouseEntered:!0})}),100)),[F]),B=(0,i.useMemo)((()=>(0,p.Ds)((e=>{F.setState({...F.state,mouseEntered:!1})}),100)),[F]),U=(0,i.useCallback)(((e,t)=>{v.ZH({debug:{userAction:"WithImageRepositioning.handleRepositionClick"},environment:o});const i=new Image;i.onload=()=>{u((e=>({...e,isRepositioning:!0,image:i})))},t&&(i.src=t)}),[o]),W=(0,i.useCallback)((e=>{T({imagePosition:V,reset:()=>{m()}})}),[V,T,m]),A=(0,i.useCallback)((e=>{const t=e.target;void 0!==t&&t instanceof HTMLElement&&(0,a.E)(t)&&j(!0)}),[]),K=(0,i.useCallback)((()=>{j(!0)}),[]),H=(0,i.useCallback)((e=>{if(S&&C){const e=t.current;if(e&&e instanceof Element){const t=e.getBoundingClientRect().width/S.width*S.height;u((e=>({...e,startDragImageScreenHeight:t,startDragRenderedPosition:V})))}}}),[S,V,C]),z=(0,i.useCallback)((e=>{if(C){const t=e.diffY/(R||0)+(P||0);u((e=>({...e,temporaryPosition:(0,p.NM)((0,d.Z)(t,0,1),4)})))}}),[C,R,P]),_=(0,i.useCallback)((()=>{u((e=>({...e,startDragImageScreenHeight:void 0,startDragRenderedPosition:void 0})))}),[]),N=(0,r.VK)((()=>e.renderControl({handleRepositionClick:U,handleSavePositionClick:W,handleCancelClick:m,isVisible:n||E||w||C,isRepositioning:C})),[U,W,w,n,C,E,e,m]);return(0,x.jsxs)("div",{ref:t,onFocus:A,onBlur:K,onMouseEnter:I,onMouseMove:I,onMouseLeave:B,...(0,c.iv)(D.container,L),children:[(0,x.jsx)(y.Z,{onDraggableDragStart:H,onDraggableDragMove:z,onDraggableDragEnd:_,onDraggableDragCancel:_,disabled:!C,render:t=>(0,x.jsx)("div",{...(0,c.iv)(D.dragContainer),...t,children:e.render({imagePosition:V,isRepositioning:C})})}),(0,x.jsx)(Z,{small:e.small,isRepositioning:C}),N]})};function Z(e){let{small:t,isRepositioning:o}=e;if(t)return null;const i={background:u.ZP.blackWithAlpha(.4),borderRadius:4,color:u.ZP.white,fontSize:12,fontFamily:m.Z.getCompositeFontFamily(n.SP).sans,width:180,left:"calc(50% - 90px)",padding:"0.3em 1.5em 0.3em",pointerEvents:"none",position:"absolute",top:"calc(50% - 10px)",textAlign:"center"};return(0,x.jsx)(C.Z,{isVisible:!0,animationStyle:{opacity:o?1:0},render:()=>(0,x.jsx)("div",{style:i,"aria-hidden":!o,children:(0,x.jsx)(g.FormattedMessage,{defaultMessage:"Drag image to reposition",id:"withImageRepositioning.dragImage.text"})})})}},914542:(e,t,o)=>{o.d(t,{EP:()=>a,LU:()=>r,NS:()=>s,SS:()=>n,ZP:()=>d});var i=o(749085);const n="loadingLocalImage",s="uploading",a="downloading",r="loaded";class l extends i.default{getInitialState(){return{loadingMode:r}}}const d=l},896809:(e,t,o)=>{o.d(t,{Z:()=>i});const i=new(o(914542).ZP)}}]);