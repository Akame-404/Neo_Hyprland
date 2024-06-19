"use strict";(globalThis.webpackChunknotion_next=globalThis.webpackChunknotion_next||[]).push([[30433],{297820:(e,t,n)=>{n.d(t,{Z:()=>f,o:()=>g});n(667294);var o=n(800480),i=n(886628),r=n(724405),l=n(399036),s=n(12396),c=n(137810),a=n(319124),d=n(876836),u=n(785893);const h={display:"flex",alignItems:"center",lineHeight:"120%",minWidth:0};const f=function(e){let{propertySchema:t,showIcon:n,hideName:i,badge:r,style:l,iconStyle:s,iconSize:a,className:d}=e;const f=(0,o.O7)(),{device:g}=f,v=g.isMobile?16:14;return(0,u.jsxs)("div",{className:d,style:{...h,fontSize:v,...l},children:[n&&(0,u.jsx)("div",{style:p(Boolean(i),s),children:(0,u.jsx)(m,{propertySchema:t,iconSize:a,iconStyle:s})}),!i&&(0,u.jsx)("div",{style:{...c.Z.textOverflowStyle},children:t.name}),r]})};function p(e,t){return{marginRight:e?void 0:6,...t}}function g(e){let{propertySchema:t}=e;const n=(0,o.O7)();return(0,i.VK)((()=>(0,a.Zt)(n)&&l.qQ(t)&&l.q3(t)&&("text"===t.type||(0,a.KZ)())),[n,t])?(0,u.jsx)(d.Z,{}):null}function m(e){let{propertySchema:t,iconSize:n,iconStyle:i}=e;const l=(0,r.Fg)(),c=(0,o.O7)(),{device:a}=c,d=a.isMobile?18:16;return(0,u.jsx)(s.ZP,{type:t.type,icon:t.icon,size:n||d,theme:l,style:i})}},125845:(e,t,n)=>{n.d(t,{Z:()=>re});var o=n(667294),i=n(886628),r=n(421202),l=n(212534),s=n(60217),c=n(206258),a=n(316354),d=n(701302),u=n(898104),h=n(729376),f=n(164921),p=n(776798),g=n(785893);function m(e){const{blockStore:t,titleStyle:n,shouldWrap:i,recordTitleRef:r}=e,l=(0,o.useRef)({getNode:()=>r.current}),s=(0,o.useCallback)((e=>{d.default.afterNextFlush((()=>{const e=t.getBlockTitleStore();if(!e)return;const n=e.getValue(),o=n?n[0][0].length:0,i={start:{index:o,store:e},end:{index:o,store:e}};u.NA({multiSelection:i})}))}),[t]);return(0,g.jsx)(f.Z,{style:{height:h.Mu+2,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:5,padding:"6px 8px 7px 8px",overflow:"hidden"},onClick:s,children:(0,g.jsx)(p.Z,{store:t,underline:!0,shouldWrap:i,style:n,ref:l})})}var v=n(709291),x=n(653965),S=n(249394),k=n(433929),y=n(965187);const b=(0,v.defineMessages)({typeTitle:{defaultMessage:"Type a title...",id:"relationToken.title.placeholder"}});function C(e){const{blockStore:t,clickTitleBehavior:n,onTitleEnter:o,onTitleEsc:r}=e,l="edit"===n,s=(0,i.VK)((()=>t.getBlockTitleStore()),[t]);return(0,g.jsx)(y.Z,{store:s,disabled:!l,disableSlashCommands:!0,disableEmojiCommands:!0,disableStyleAnnotations:!0,disableInsertedDeletedAnnotations:!0,disableEmbedMenu:!0,onEnter:o,onEsc:r,onTab:x.yR,placeholder:k.default.formatMessage(b.typeTitle),style:{padding:"6px 8px 7px 8px",textOverflow:"none",overflow:"visible",whiteSpace:"pre"},disableSelectAllBlocks:!0,pasteBehavior:"inline",inPageFind:S.B3.none})}var T=n(800480),I=n(218265),w=n(530874),R=n(973935),j=n(883355),M=n(541432),E=n(76233),P=n(744805),B=n(531701),K=n(137231),z=n(95477),Z=n(360682),V=n(924990);class A extends j.Z{constructor(){super(...arguments),this.node=void 0,this.handleMouseOver=e=>{const t=this.getInteractiveToken(),n=this.props.store.getTitleStore();n&&t&&K.Nh({environment:this.environment,event:e,interactiveToken:t,store:n,canEdit:this.props.canEdit})},this.handleMouseOut=e=>{const t=this.getInteractiveToken(),n=this.props.store.getTitleStore();n&&t&&K.Zl({environment:this.environment,event:e,interactiveToken:t,store:n,canEdit:this.props.canEdit})}}didMount(){super.didMount(),this.node=R.findDOMNode(this)}get theme(){const{ThemeModeStore:e}=this.environment;return(0,B.gh)({theme:e.state})}getInteractiveToken(){if(!this.node)return;const e=this.props.store,t=(0,E.x36)(e.id),n=(0,E.YCD)(t);return{textValue:[n],tokenIndex:0,textToken:n,node:this.node}}renderComponent(){const e=this.props.store,t=this.props.shouldWrap,n=this.props.style,o=this.props.disableLinks,i=this.props.disableHover,r=k.default.getIntl(),s=this.props.store.getRecordModel,c=e.id,a=(0,Z.e_)(this.environment),d=z.default.domainBaseUrl,u=this.environment.currentUser.id,h=this.props.isAndroid,f=this.props.externalIntegrations;if(!c)return;if("external_object_instance_page"!==e.getType())return;const p=e.getModel();return null!=p&&p.isType(M.Ti.externalObjectInstancePage)?(0,g.jsx)("span",{onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut,onClick:l.Wi,children:(0,P.dD)({blockModel:p,shouldWrap:t,index:0,style:n,disableHover:i,disableLinks:o,isAndroid:h,theme:this.theme,getRecordModel:s,currentUserId:u,baseUrl:d,emojiType:a,externalIntegrations:f,intl:r,emojiData:V.Z.state,stopLinkPropagation:!0})}):void 0}}A.displayName="ExternalObjectInstancePageMentionToken";const W=A;function O(e){const{blockStore:t,shouldWrap:n,style:o}=e,r=(0,i.VK)((()=>(0,I.yn)(t.getSyncedUri())),[t]),l=(0,i.VK)((()=>w.Z.integrations.state),[]),s=(0,T.O7)();return(0,g.jsx)(W,{shouldWrap:n,store:t,style:o,disableHover:!r,disableLinks:!r,isAndroid:s.device.isAndroid,externalIntegrations:l,canEdit:!0})}var U=n(724405),L=n(709953),D=n(210228),_=n(731278),N=n(984619),H=n(137810);const F={[N.lo.ExtraSmall]:{height:16,fontSize:12,margin:"0 4px 0 0",recordIconMarginRight:3,pageIconSize:16,closeIconSize:8},[N.lo.Small]:{height:18,fontSize:12,margin:"0 6px 6px 0",recordIconMarginRight:3,pageIconSize:16,closeIconSize:8},[N.lo.Medium]:{height:20,fontSize:14,margin:"0 12px 6px 0",recordIconMarginRight:4,pageIconSize:20,closeIconSize:8},[N.lo.Inline]:{height:20,fontSize:14,margin:"0 12px 0 0",recordIconMarginRight:4,pageIconSize:20,closeIconSize:8},[N.lo.Large]:{height:24,fontSize:16,margin:"0 8px 8px 0",recordIconMarginRight:4,pageIconSize:24,closeIconSize:10}};function Q(e){let{height:t}=e;return{display:"flex",alignItems:"center",lineHeight:1.2,height:t}}function X(e){const{clickTitleBehavior:t,blockStore:n,format:r,shouldWrap:l}=e,s="edit"===t,c=(0,T.O7)(),a=(0,i.VK)((()=>n.getIcon()),[n]),d=(0,i.VK)((()=>n.isEmptyPage()),[n]),{style:u}=(0,U.yK)((()=>({style:{flexShrink:0,marginRight:s?0:F[r].recordIconMarginRight,justifyContent:"flex-start",...l&&{display:"inline-block",verticalAlign:"text-top",marginBottom:-1}}})),[s,r,l]),h=(0,o.useCallback)((e=>{const t=n.getIconStore();t&&D.createAndCommit({userAction:"RelationToken.handleRecordIconChange",environment:c,perform:n=>{L.sO({store:t,value:e,transaction:n})}})}),[n,c]),f={icon:a,size:F[r].pageIconSize,isEmptyPage:d,style:u};return s?(0,g.jsx)(_.Z,{...f,disabled:!1,onChange:h,bucket:"public"}):(0,g.jsx)(_.Z,{...f,disabled:!0})}var $=n(719525);function q(e){const{format:t,showRemoveButton:n,onClickRemove:o}=e,{height:i,closeIconSize:r}=F[t];return n?(0,g.jsx)(f.Z,{onClick:o,style:{display:"flex",alignItems:"center",justifyContent:"center",width:i,height:i,marginLeft:2,marginRight:2,flexGrow:0,flexShrink:0,borderRadius:4},children:(0,$.b)({width:r,height:r,opacity:.5})}):null}function Y(e){const{blockStore:t,shouldWrap:n,titleStyle:i,recordTitleRef:r,noUnderline:l}=e,s=(0,o.useRef)({getNode:()=>r.current});return(0,g.jsx)(p.Z,{store:t,underline:!l,shouldWrap:n,style:i,ref:s,enableHover:!0,showTooltipWhenTruncated:!0})}var G=n(815145),J=n(110906),ee=n(566890),te=n(484210),ne=n(80444);var oe=n(268056),ie=n(924666);const re=(0,o.forwardRef)((function(e,t){const{parentStore:n,blockId:s,shouldWrap:d,format:u,showRemoveButton:f,clickTitleBehavior:p,onClickRemove:m,titleStyle:v,onTitleEnter:x,onTitleEsc:S,index:k,noUnderline:y}=e,b=c.G.createChildStore(n,{table:r.iU,id:s}),{style:C}=function(e){let{format:t,shouldShrink:n,shouldWrap:o,isSingle:i,style:r,clickTitleBehavior:l}=e;const s="edit"===l;return(0,U.yK)((()=>{const{fontSize:e,margin:l}=F[t],c=s?h.Mu:F[t].height;return{style:{...o?{display:"inline",lineHeight:1.5,borderRadius:4}:Q({height:c}),fontSize:e,fontWeight:H.Z.fontWeight.medium,minWidth:n?0:"auto",margin:i?0:l,...t===N.lo.Inline&&{overflow:"hidden"},...r}}}),[t,n,o,i,s,r])}(e),{blockUrlPage:T,blockUrlPeek:I}=function(e){const t=(0,ee.DK)(),n=(0,i.VK)((()=>(0,te.ZP)({store:e,fullyQualified:!1,pageVisitSource:G.tY.LinkInPage})),[e]);return{blockUrlPeek:(0,i.VK)((()=>{const{mainEditorCurrentBlockStore:n}=ne.default.state;return J.mb({store:e,mainEditorCurrentBlockStore:n,collectionContextStore:t,fullyQualified:!1})}),[e,t]),blockUrlPage:n}}(b),w=(0,o.useRef)(null),R=(0,o.useRef)(null),j="peek"===p,M={display:C.display,height:C.height,alignItems:C.alignItems};(0,o.useImperativeHandle)(t,(()=>b),[b]);if((0,i.VK)((()=>"external_object_instance_page"===b.getType()),[b]))return(0,g.jsx)(O,{shouldWrap:d,blockStore:b,style:C});const E=(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(X,{format:u,blockStore:b,clickTitleBehavior:p,shouldWrap:d}),(0,g.jsx)(le,{blockStore:b,recordTitleRef:w,clickTitleBehavior:p,shouldWrap:d,titleStyle:v,noUnderline:y,onTitleEnter:x,onTitleEsc:S,index:k})]});return(0,g.jsxs)("div",{style:C,ref:R,children:[j?(0,g.jsx)(a.Z,{href:T,metaHref:I,onClick:l.Wi,style:M,children:E}):E,(0,g.jsx)(q,{showRemoveButton:f,onClickRemove:m,format:u})]})}));function le(e){const{blockStore:t,clickTitleBehavior:n,onTitleEnter:o,onTitleEsc:r,index:l,recordTitleRef:c,titleStyle:a,shouldWrap:d,noUnderline:u}=e,h=(0,s.L2)(t),f="edit"===n&&!h,p=function(e){return(0,i.VK)((()=>{var t;const n=ie.default.state;return"editing"===n.mode&&(null===(t=(0,oe.QY)(n.multiSelection))||void 0===t?void 0:t.store)===e.getBlockTitleStore()}),[e])}(t);return f?p&&o&&l?(0,g.jsx)(C,{blockStore:t,clickTitleBehavior:n,onTitleEnter:o,onTitleEsc:r}):(0,g.jsx)(m,{blockStore:t,recordTitleRef:c,titleStyle:a,shouldWrap:d}):(0,g.jsx)(Y,{blockStore:t,recordTitleRef:c,titleStyle:a,shouldWrap:d,noUnderline:u})}},566890:(e,t,n)=>{n.d(t,{DK:()=>u,L1:()=>a,Y$:()=>d,cu:()=>s,xm:()=>c});n(21703);var o=n(667294),i=n(67381);const r="collectionContextStore",l=(0,i.Q)({displayName:r,legacyContextKey:r,modernContextDefaultValue:void 0}),s=l.context,c=l.legacyPropTypes,a=l.Provider;function d(){const e=o.useContext(s);if(void 0===e)throw new Error(`No context provided: ${r}`);return e}function u(){return o.useContext(s)}},925130:(e,t,n)=>{n.d(t,{ZP:()=>a,o$:()=>c});var o=n(667294),i=n(455010);const r=(0,o.createContext)({menuItemRefs:{current:new Set},activeRef:void 0,setActiveRef:()=>{},onKeyDown:()=>{}});function l(e){const t=new Map(Array.from(e).filter((e=>e.current)).map((e=>[e.current,e])));return{sortedElements:Array.from(t.keys()).sort(i.Z),nodeToRef:t}}function s(){return(0,o.useContext)(r)}function c(){const{menuItemRefs:e,activeRef:t,setActiveRef:n}=s(),i=(0,o.useRef)(null),r=(0,o.useCallback)((o=>{var r,l;function s(){t||n(i),null==o||o.removeEventListener("focus",s)}(i.current&&(null==o||o.removeEventListener("focus",s)),o)&&(0===(null===(l=e.current)||void 0===l?void 0:l.size)&&o.addEventListener("focus",s));i.current=o,null===(r=e.current)||void 0===r||r.add(i)}),[e,i,t,n]);return(0,o.useEffect)((()=>{const t=e.current;return()=>{null==t||t.delete(i)}}),[e]),(0,o.useEffect)((()=>{const o=e.current;return()=>{if(null===(null==t?void 0:t.current)&&t===i&&o){const{sortedElements:e,nodeToRef:t}=l(o),i=e[0];i&&t.has(i)&&n(t.get(i))}}}),[t,n,e]),[r,i]}r.displayName="MenuContext";const a=function(){let{direction:e="vertical"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=(0,o.useRef)(new Set),[n,i]=(0,o.useState)(void 0),s=(0,o.useCallback)((o=>{let{code:r}=o;if("vertical"===e&&!["ArrowUp","ArrowDown"].includes(r)||"horizontal"===e&&!["ArrowLeft","ArrowRight"].includes(r))return;const{nodeToRef:s,sortedElements:c}=l(t.current),a=c.findIndex((e=>e===(null==n?void 0:n.current)));let d;if("vertical"===e&&"ArrowDown"===r||"horizontal"===e&&"ArrowRight"===r?d=a+1>=t.current.size?0:a+1:("vertical"===e&&"ArrowUp"===r||"horizontal"===e&&"ArrowLeft"===r)&&(d=a-1<0?t.current.size-1:a-1),void 0!==d){const e=c[d];e&&(i(s.get(e)),e.focus())}}),[n,e]);return{MenuArrowKeysProvider:r.Provider,context:{menuItemRefs:t,activeRef:n,setActiveRef:i,onKeyDown:s}}}},60217:(e,t,n)=>{n.d(t,{C_:()=>E,D9:()=>z,L2:()=>K,MQ:()=>P,Nr:()=>j,Qg:()=>B,WJ:()=>V,h9:()=>R,m4:()=>w,mj:()=>M,n1:()=>Z});var o=n(800480),i=n(797511),r=n(886628),l=n(749085),s=n(541432),c=n(606287),a=n(761045),d=n(457819),u=n(110906),h=n(492650),f=n(922705),p=n(319124),g=n(212534),m=n(273203),v=n(292283),x=n(861931),S=n(80444),k=n(316772),y=n(319111),b=n(594896),C=n(282136),T=n(188923),I=n(417963);function w(e){(0,g.ZP)({event:e,context:g.Af.EditorMouseDown,callback:()=>{}})}function R(e){(0,g.ZP)({event:e,context:g.Af.EditorClick,callback:()=>{}})}function j(e){return(0,r.VK)((()=>Boolean(I.Z.state.pageMap[e.id])||b.Z.state.pages.has(e.id)),[e.id])}function M(e,t){const n=(0,o.O7)(),l=(0,i.l)(),s=j(e),c=(0,r.VK)((()=>t===C.S.Frame?S.default.state.currentLoadingContainerStore:t===C.S.PeekView&&T.default.state.open?T.default.state.loadingContainerStore:void 0),[t]),a=B(e);return(0,r.VK)((()=>{const t=n.currentUser.isLoggedIn(),o=l&&l.publicEditModeStore.state;return Boolean(e&&c&&e.isDefined()&&!e.isNonEditableState()&&e.canEdit()&&!e.hasContent()&&t&&(!(null!=o&&o.hasPublicPermission)||"edit"===(null==o?void 0:o.permission))&&!s&&c.state.ready&&!a&&(!(0,p.GD)(o)||"completionPopup"!==k.default.state.type))}),[n.currentUser,a,c,l,s,e])}function E(e,t){const n=(0,o.O7)(),l=(0,i.l)();return(0,r.VK)((()=>{if(P.state===e.id)return!0;if(t===C.S.SitePreview)return!1;if(!(0,m.r)(n))return!1;if(!n.currentUser.isLoggedIn())return!1;const o=l&&l.publicEditModeStore.state;if(null!=o&&o.hasPublicPermission&&"edit"!==(null==o?void 0:o.permission))return!1;if(e.getContentLength()>1)return!1;const i=e.getContentStores()[0];if(i&&!i.isEmptyTextBlock())return!1;if(e.getAssociatedCollectionStore())return!1;const r=f.TI.state,s=f.mn.state;return!r||e.id!==s}),[n,l,e,t])}const P=l.default.createValue(void 0,{name:"ExperimentalTemplatePickerPreviewingStore"});function B(e){return(0,r.VK)((()=>{if(e.isCollectionView()){const t=e.getCollectionViewSourceCollectionStore();return!!t&&t.isSyncedCollection()}return e.isType(s.Ti.externalObjectInstancePage)}),[e])}function K(e){return(0,r.VK)((()=>{if(!(0,v.K6)())return!1;const t=e.getParentStore();if((null==t?void 0:t.table)===c.vF){const e=t.getFormat();return!(null==e||!e.external_collection_type)}return!1}),[e])}function z(e){return(0,r.VK)((()=>{if(!(0,v.K6)())return!1;var t;return!!e.isCollectionView()&&((null===(t=e.getCollectionStore())||void 0===t||null===(t=t.getFormat())||void 0===t?void 0:t.external_collection_type)??!1)}),[e])}function Z(e){const{device:t,WindowSizeStore:n}=(0,o.O7)(),i=(0,r.VK)((()=>{const e=n.state.height,o=t.isMobile&&y.Z.state.open?e:0;return a._4()+o}),[n,t.isMobile]);return(0,r.VK)((()=>Boolean((0,d.RR)(k.default.state))?600:"home-phone"===e?x.jq:t.isTablet?380:t.isIOS?Math.max(350,i):t.isMobile?400:"side-peek"===e||"center-peek"===e?80:"home"===e?x.XX:"30vh"),[t,i,e])}function V(e){const t=(0,o.O7)(),n=(0,r.VK)((()=>(0,h.fg)(t,e)),[t,e]);return(0,r.VK)((()=>n&&!e.isFullWidth()?(0,h.gC)(t,(0,u.en)(e),(0,u.Ks)(e)):0),[t,n,e])}},861931:(e,t,n)=>{n.d(t,{$1:()=>C,$K:()=>y,A0:()=>m,A5:()=>p,Cm:()=>u,EP:()=>c,Er:()=>T,KI:()=>w,Ng:()=>f,QF:()=>h,Uf:()=>d,Vk:()=>g,XX:()=>r,_U:()=>j,bS:()=>k,cc:()=>R,d_:()=>a,iO:()=>s,jO:()=>b,jX:()=>x,jq:()=>l,pW:()=>v});var o=n(653965),i=n(401898);const r=160,l=40,s=24,c=20,a=600,d=270,u=405,h=480,f=500,p=16,g=24,m=10,v=8,x=44,S={backdropFilter:"blur(48px)",WebkitBackdropFilter:"blur(48px)"},k=4;function y(e){return{icon:e.mediumIconColor,text:e.mediumTextColor}}function b(e){return{width:48,height:48,fill:e.lightIconColor}}function C(e){let{theme:t,isPhone:n}=e;return n?t.personalHomeBackgroundPhone:t.personalHomeBackgroundDesktop}function T(e){let{theme:t,isPhone:n,buttonState:o}=e,i=t.whiteButtonBackground;switch(o){case"hovered":i=t.whiteButtonHoveredBackground;break;case"pressed":i=t.whiteButtonPressedBackground}return n&&(i=void 0),{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",background:i,...S,boxShadow:j({isPhone:n,theme:t,borderOnly:!0}),width:28,height:28,borderRadius:4}}const I=1;function w(e){let{isPhone:t,theme:n}=e;return{zIndex:1,position:"relative",display:"flex",flexDirection:"column",borderRadius:12,background:n.home.tile.background,boxShadow:j({isPhone:t,theme:n}),...S}}function R(e){let{mode:t,isPhone:n}=e;switch(t){case"dark":return 0;case"light":return I;default:return(0,i.P)(t),0}}function j(e){let{isPhone:t,theme:n,borderOnly:i}=e;if("dark"===n.mode)return"unset";n.mode;const r=R({mode:n.mode,isPhone:t});return(0,o.oA)([i||t?void 0:"0 12px 32px rgba(0, 0, 0, 0.02)",`0 0 0 ${r}px rgba(0, 0, 0, 0.05)`]).join(", ")}},222686:(e,t,n)=>{n.d(t,{f:()=>r});n(667294);var o=n(745238),i=n(785893);const r=(0,o.IU)("person",{viewBox:"0 0 16 16",svg:(0,i.jsx)("path",{d:"M7.7832 8.00195C9.27344 8.00195 10.5381 6.67578 10.5381 4.95996C10.5381 3.28516 9.2666 2 7.7832 2C6.29297 2 5.01465 3.30566 5.02148 4.97363C5.02148 6.67578 6.28613 8.00195 7.7832 8.00195ZM3.51758 14.3594H12.0352C13.1631 14.3594 13.5527 14.0176 13.5527 13.3887C13.5527 11.6318 11.3242 9.21191 7.77637 9.21191C4.23535 9.21191 2 11.6318 2 13.3887C2 14.0176 2.38965 14.3594 3.51758 14.3594Z"})})},414734:(e,t,n)=>{n.d(t,{X:()=>r});n(667294);var o=n(745238),i=n(785893);const r=(0,o.IU)("personCrossedOut",{viewBox:"0 0 44 44",svg:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("path",{d:"M5.4857 44H0L44 8.56549V13.0061L5.4857 44Z"}),(0,i.jsx)("path",{d:"M39.8048 44H8.66491L25.6448 30.4378C26.9394 30.6489 28.1581 30.9719 29.3009 31.4067C31.5362 32.2374 33.4346 33.326 34.9964 34.6723C36.5725 36.0044 37.7761 37.4367 38.6071 38.9692C39.4525 40.5018 39.8752 41.9555 39.8752 43.3305C39.8752 43.5675 39.8517 43.7906 39.8048 44Z"}),(0,i.jsx)("path",{d:"M30.3971 16.7973C30.3971 16.8668 30.3965 16.9359 30.3952 17.0048L19.3828 25.9192C18.7467 25.7134 18.1339 25.4228 17.5446 25.0473C16.2408 24.2023 15.1876 23.0708 14.3853 21.6528C13.5972 20.2205 13.2032 18.6163 13.2032 16.8403C13.2032 15.0929 13.5972 13.5174 14.3853 12.1137C15.1876 10.7101 16.2408 9.60007 17.5446 8.78366C18.8485 7.96725 20.267 7.55905 21.8001 7.55905C23.3332 7.55905 24.7517 7.96009 26.0556 8.76218C27.3595 9.56426 28.4054 10.6671 29.1935 12.0708C29.9959 13.4601 30.3971 15.0356 30.3971 16.7973Z"})]})})}}]);