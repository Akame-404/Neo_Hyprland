"use strict";(globalThis.webpackChunknotion_next=globalThis.webpackChunknotion_next||[]).push([[53253],{718250:(e,t,n)=>{n.d(t,{K:()=>o,O:()=>a});var i=n(745483);function a(e){i.Z.state.openModals.has(e)||(i.Z.state.openModals.add(e),i.Z.emit())}function o(e){i.Z.state.openModals.has(e)&&(i.Z.state.openModals.delete(e),i.Z.emit())}},327340:(e,t,n)=>{n.d(t,{y:()=>r});var i=n(653965),a=n(401898),o=n(847882);function s(e){let t=0,n=Number.MAX_SAFE_INTEGER;for(const a of e){if(!a)continue;const e=(0,o.r)(a),s=(0,i.uZ)(e.max,0,Number.MAX_SAFE_INTEGER),r=(0,i.uZ)(e.min,0,s);t=Math.max(t,r),n=Math.min(n,s)}const s=function(e){let t;for(const n of e){const e=null==n?void 0:n.scroll;switch(e){case"disallow":return"disallow";case"allow":t="allow";break;case void 0:break;default:(0,a.t1)(e)}}return t}(e);return{type:"range",min:(0,i.uZ)(t,0,n),max:n,scroll:s}}function r(e){const t=e.filter(Boolean);return{width:s(t.map((e=>null==e?void 0:e.width))),height:s(t.map((e=>null==e?void 0:e.height)))}}},780681:(e,t,n)=>{n.d(t,{BX:()=>b,C3:()=>M,If:()=>h,OL:()=>v,Pz:()=>g,U3:()=>j,Wv:()=>S,Xe:()=>C,cw:()=>x,dM:()=>f,ho:()=>k,mn:()=>Z,pE:()=>I,s:()=>w,zQ:()=>D});var i=n(937850),a=n(454642),o=n(547307),s=n(194160),r=n(319385),d=n(281236),l=n(585447),c=n(885543),u=n(232636),p=n(428714),m=n(472417);async function f(e){const{environment:t,spaceId:n,domainId:i,domainName:o}=e,s=await a.updatePublicDomainName(t,{spaceId:n,domainId:i,domainName:o,isAutogenerated:!1});return"success"!==s.type?{error:s}:(d.Z.getData(t,{spaceId:n},!0),{domainId:i})}async function g(e){const{environment:t,spaceId:n,domainName:i,domainType:o}=e,s=await a.createPublicDomain(t,{spaceId:n,domainName:i,domainType:o,isAutogenerated:!1,isDefault:!1});return"success"!==s.type?{error:s}:(d.Z.getData(t,{spaceId:n},!0),{domainId:s.data.domainId,error:void 0})}async function h(e){const{environment:t,spaceId:n,domainId:i,domainType:r,showErrorDialog:l}=e,c="custom"===r?await s.Z.awaitData(t,{spaceId:n}):void 0,u=await a.deletePublicDomain(t,{spaceId:n,domainId:i});return"success"!==u.type?(l&&o.showError(u),{error:u}):(d.Z.getData(t,{spaceId:n},!0),c&&u.data.subscriptionWasUpdated&&(0,m.p)(t,c),{domainId:i})}async function x(e){const{environment:t,spaceId:n,domainId:i,publicHomePageId:s,showErrorDialog:r}=e,d=await a.updatePublicDomainHomePage(t,{spaceId:n,domainId:i,publicHomePage:s});return"success"!==d.type?(r&&o.showError(d),{error:d}):{domainId:i}}async function y(e){const{environment:t,spaceId:n,domainId:i}=e,o=await a.validateCustomPublicDomain(t,{spaceId:n,domainId:i});return"success"!==o.type?{error:o}:(o.data.domainId&&o.data.hasChanged&&d.Z.getData(t,{spaceId:n},!0),{domainId:i,domainStatus:o.data.domainStatus})}async function v(e){const{environment:t,domainId:n,spaceId:a,poll:o}=e,{retry_delay:s=500,max_retries:d=10}=r.default.getConfigKey("sites_settings","custom_hostname_validation")||{};let l,c=0;for(;!l||c<=d;){if(l=await y({environment:t,spaceId:a,domainId:n}),!o||"active"===l.domainStatus||l.error)return l;await i.Vs(s),c+=1}return l}async function w(e){const{environment:t,spaceId:n,domainId:i}=e,s=await a.getSitesOnPublicDomain(t,{spaceId:n,domainId:i});return"success"!==s.type?(o.showError(s),!0):s.data.publishedSitesCount>0}function I(e){u.Z.setState({isOpen:!0,step:e})}function b(){u.Z.setState({isOpen:!1})}function S(e,t,n){c.Z.setState({isOpen:!0,step:e,spaceId:t,domain:n})}function D(){c.Z.setState({isOpen:!1})}function C(e,t,n){l.Z.setState({isOpen:!0,step:e,spaceId:t,domain:n})}function Z(){l.Z.setState({isOpen:!1})}function j(e,t){p.Z.setState({isOpen:!0,spaceId:e,domain:t,step:"DomainValidating"})}function M(e){const{isOpen:t,spaceId:n,domain:i}=p.Z.state;t&&p.Z.setState({isOpen:t,spaceId:n,domain:i,step:e})}function k(){p.Z.setState({isOpen:!1})}},472417:(e,t,n)=>{n.d(t,{U:()=>c,p:()=>u});var i=n(909182),a=n(80444),o=n(194160),s=n(185703),r=n(897630),d=n(60027),l=n(317986);async function c(e){const{environment:t,spaceStore:n,billingData:i,price:a}=e,o=l.J(i,a);if(o)return await r.Mg({environment:t,spaceStore:n,from:"custom_hostname_create",desiredState:o})}async function u(e,t){const n=a.default.state.currentSpaceStore;if(!n)return;const l=await o.Z.awaitData(e,{spaceId:n.id},!0);if(!l)return;const c=l&&i.Lg(l);r.eS({environment:e,context:{spaceId:n.id,planType:null==n?void 0:n.getPlanType(),isMmOrEnt:await(0,d.no)(e),from:"custom_hostname_delete"},oldData:t,newData:l,desiredState:c}),r.bi(e),s.Z.resetData(e,{spaceId:n.id})}},443128:(e,t,n)=>{n.d(t,{Z:()=>g});var i=n(667294),a=n(800480),o=n(724405);var s=n(388437),r=n(423512),d=n(709291),l=n(137810),c=n(800893),u=n(573063),p=n(164369),m=n(95477),f=n(785893);function g(e){const{domainName:t,domainId:n}=e,g=(0,a.O7)(),h=(0,d.useIntl)(),x=function(e){if("local"===e.env){const t=e.publicDomainName.indexOf(":");return`external.${-1===t?e.publicDomainName:e.publicDomainName.substring(0,t)}`}return`external.${e.publicDomainName}`}(m.default),y=t?function(e){return`_notion-dcv.${e}`}(t.split(".")[0]):"",v=(0,o.yK)((e=>({instructionList:{display:"flex",flexDirection:"column",gap:24},instructionRow:{display:"flex",flexDirection:"row"},instructionNumber:{background:e.sitesInstructionStep,borderRadius:"100%",height:16,width:16,minWidth:16,display:"flex",justifyContent:"center",alignItems:"center",fontSize:10,marginTop:2},instructionContainer:{display:"flex",flexDirection:"column",rowGap:12,marginLeft:10,marginRight:6,minWidth:0,width:"100%",maxWidth:"100%"},inputLabel:{paddingBottom:8,fontWeight:l.Z.fontWeight.semibold},inputRow:{display:"flex",flexDirection:"row",alignItems:"center",border:`1px solid ${e.regularDividerColor}`,borderRadius:6,height:32,background:e.inputBackground,cursor:"text"},fakeInput:{flexGrow:1,fontFamily:"monospace",paddingLeft:8,paddingTop:6,paddingBottom:6,...l.Z.textOverflowStyle},copyButtonContainer:{height:"100%",width:32,boxShadow:void 0,borderRadius:"0px 6px 6px 0px",borderLeft:`1px solid ${e.regularDividerColor}`},copyButton:{height:14,width:14}})),[]),w=(0,i.useCallback)((e=>c.RD({environment:g,stringValue:e,copiedMessage:c.tq.copiedToClipboard})),[g]);return(0,f.jsxs)("div",{style:v.instructionList,children:[(0,f.jsxs)("div",{style:v.instructionRow,children:[(0,f.jsx)("div",{style:v.instructionNumber,children:(0,r.uf)(1,void 0,h)}),(0,f.jsxs)("div",{style:v.instructionContainer,children:[(0,f.jsx)(p.Z,{isMultiline:!0,children:(0,f.jsx)(d.FormattedMessage,{id:"sites.newCustomDomainDnsSettings.setCnameInstructions",defaultMessage:"Go to your DNS provider and add a CNAME record for the domain you want to connect. Set the CNAME target to:"})}),(0,f.jsxs)("div",{style:v.inputRow,children:[(0,f.jsx)(p.Z,{isSecondaryColor:!0,style:v.fakeInput,children:x}),(0,f.jsx)(u.Z,{onClick:()=>w(x),style:v.copyButtonContainer,ariaLabel:"copy",hasBackground:!0,icon:s.a,iconStyle:v.copyButton,showShadow:!0})]})]})]}),(0,f.jsxs)("div",{style:v.instructionRow,children:[(0,f.jsx)(p.Z,{style:v.instructionNumber,children:(0,r.uf)(2,void 0,h)}),(0,f.jsxs)("div",{style:v.instructionContainer,children:[(0,f.jsx)(p.Z,{isMultiline:!0,children:(0,f.jsx)(d.FormattedMessage,{id:"sites.newCustomDomainDnsSettings.setTxtValueInstructions",defaultMessage:"Also add a TXT record for the domain:"})}),(0,f.jsxs)("div",{children:[(0,f.jsx)(p.Z,{isSmall:!0,style:v.inputLabel,children:(0,f.jsx)(d.FormattedMessage,{id:"sites.newCustomDomainDnsSettings.setTxtNameLabel",defaultMessage:"TXT Record Name"})}),(0,f.jsxs)("div",{style:v.inputRow,children:[(0,f.jsx)(p.Z,{isSecondaryColor:!0,style:v.fakeInput,children:y}),(0,f.jsx)(u.Z,{onClick:()=>w(y),style:v.copyButtonContainer,ariaLabel:"copy",hasBackground:!0,icon:s.a,iconStyle:v.copyButton,showShadow:!0})]})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(p.Z,{isSmall:!0,style:v.inputLabel,children:(0,f.jsx)(d.FormattedMessage,{id:"sites.newCustomDomainDnsSettings.setTxtValueLabel",defaultMessage:"TXT Record Value"})}),(0,f.jsxs)("div",{style:v.inputRow,children:[(0,f.jsx)(p.Z,{isSecondaryColor:!0,style:v.fakeInput,children:n}),(0,f.jsx)(u.Z,{onClick:()=>w(n),style:v.copyButtonContainer,ariaLabel:"copy",hasBackground:!0,icon:s.a,iconStyle:v.copyButton,showShadow:!0})]})]})]})]}),(0,f.jsxs)("div",{style:v.instructionRow,children:[(0,f.jsx)(p.Z,{style:v.instructionNumber,children:(0,r.uf)(3,void 0,h)}),(0,f.jsx)("div",{style:v.instructionContainer,children:(0,f.jsx)(p.Z,{isMultiline:!0,children:(0,f.jsx)(d.FormattedMessage,{id:"sites.newCustomDomainDnsSettings.notifyVerifyLiveDelay",defaultMessage:"Click ‘Verify’ below to start the verification process"})})})]})]})}},780037:(e,t,n)=>{n.d(t,{Z:()=>f});var i=n(667294),a=n(724405),o=n(709291),s=n(531701),r=n(137810),d=n(374194),l=n(833954),c=n(433929),u=n(70853),p=n(785893);const m=(0,o.defineMessages)({workspaceDomainInputPlaceholder:{id:"sites.domainInput.placeholder",defaultMessage:"yourdomain.com"}});function f(e){const{domainName:t,domainType:n,setDomainName:s,errorResponse:f}=e,h=(0,o.useIntl)(),x=(0,i.useRef)(null),[y,v]=(0,i.useState)(!1),[w,I]=(0,i.useState)(!1);(0,i.useEffect)((()=>{f&&v(!0)}),[f,v]);const b=(0,i.useCallback)((e=>{v(!1),s(e.target.value.toLowerCase())}),[s,v]),S=x.current?x.current.offsetWidth-4:4,D=(0,a.yK)((e=>({container:{flex:1,display:"flex",flexDirection:"column",maxHeight:60,fontSize:14,lineHeight:"20px",padding:2},inputAndConfigContainer:{position:"relative",alignItems:"center",background:e.inputBackground,borderRadius:4,boxShadow:y?`${e.stroke.uiRedDeemphasized} 0px 0px 0px 1px inset`:w?"0px 0px 0px 1px #2383E2 inset, 0px 0px 0px 2px rgba(35, 131, 226, 0.35)":`${e.regularDividerColor} 0px 0px 0px 1px inset`,height:34},inputContainer:{height:"100%",paddingLeft:4,background:"none",boxShadow:"none"},input:{paddingLeft:4,paddingRight:S,...r.Z.textOverflowStyle},configDomainNameContainer:{position:"absolute",float:"right",top:0,right:0,height:"100%",display:"flex",alignItems:"center",justifyContent:"flex-end",paddingLeft:2,paddingRight:2},configDomainName:{display:"flex",alignItems:"center",height:"100%",paddingTop:4,paddingBottom:4,paddingLeft:8,paddingRight:8,flexGrow:1,borderLeft:y?`1px solid ${e.stroke.uiRedDeemphasized}`:`1px solid ${e.regularDividerColor}`,...r.Z.textOverflowStyle}})),[y,S,w]);return(0,p.jsxs)("div",{style:D.container,children:[(0,p.jsxs)("div",{style:D.inputAndConfigContainer,children:[(0,p.jsx)(d.Z,{type:"text",style:D.inputContainer,inputStyle:D.input,value:t,placeholder:c.default.formatMessage(m.workspaceDomainInputPlaceholder),onChange:b,format:d.B.Transparent,onFocus:()=>I(!0),onBlur:()=>I(!1)}),(0,p.jsx)("div",{ref:x,style:D.configDomainNameContainer,children:"default"===n&&(0,p.jsx)("div",{style:D.configDomainName,children:u.g2()})})]}),y&&f&&(0,p.jsx)(g,{errorMessage:(0,l.wf)(h,f)})]})}function g(e){const{errorMessage:t}=e,n=(0,a.yK)((()=>({container:{display:"flex",flexDirection:"row",alignItems:"center",fontSize:12,gap:4,minHeight:20,width:"100%",color:s.ZP.red,padding:2,marginTop:6}})),[]);return(0,p.jsx)("div",{style:n.container,children:t})}},317986:(e,t,n)=>{n.d(t,{J:()=>o});var i=n(909182),a=n(306995);function o(e,t){const n=i.Lg(e),o=i.a7(n,"sites_custom_hostnames"),s=1+((null==o?void 0:o.quantity)??0);return(0,a.AI)(n,{price:t,quantity:s})}},99322:(e,t,n)=>{n.d(t,{S:()=>r,t:()=>d});var i=n(886628),a=n(886854),o=n(647425),s=n(319385);function r(e){return(0,i.VK)((()=>{const t=e.getSubscriptionTier(),n=s.default.getConfigKey("sites_settings","notion_domain_limit");return void 0!==n?n:o.LU(t)}),[e])}function d(){return(0,i.VK)((()=>{const e=s.default.getConfigKey("sites_settings","custom_domain_limit");return void 0!==e?e:a.j_}),[])}},585447:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(749085);class a extends i.default{getInitialState(){return{isOpen:!1}}}const o=new a},885543:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(749085);class a extends i.default{getInitialState(){return{isOpen:!1}}}const o=new a},232636:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(749085);class a extends i.default{getInitialState(){return{isOpen:!1}}}const o=new a},428714:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(749085);class a extends i.default{getInitialState(){return{isOpen:!1}}}const o=new a},745483:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(749085),a=n(292595);class o extends i.default{getInitialState(){return{openModals:new Set}}}const s=new o,r=s;(0,a.exposeDebugValue)("GlobalModalStore",s)},361254:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(749085);class a extends i.default{getInitialState(){return{open:!1,openAnimationCompleted:!0,closeAnimationCompleted:!0}}}const o=a},114581:(e,t,n)=>{n.d(t,{h:()=>i});const i=(0,n(745238).CZ)("exclamationMarkTriangle",{default:{loader:()=>n.e(15187).then(n.bind(n,15187)),size:20},small:{loader:()=>n.e(79250).then(n.bind(n,979250)),size:16},mini:{loader:()=>n.e(93173).then(n.bind(n,793173)),size:14},large:{loader:()=>n.e(43339).then(n.bind(n,343339)),size:24}})},138045:(e,t,n)=>{n.d(t,{M:()=>i});const i=(0,n(745238).CZ)("plug",{default:{loader:()=>n.e(81393).then(n.bind(n,881393)),size:20},small:{loader:()=>n.e(53030).then(n.bind(n,153030)),size:16},mini:{loader:()=>n.e(43764).then(n.bind(n,643764)),size:14},large:{loader:()=>n.e(42923).then(n.bind(n,42923)),size:24}})}}]);