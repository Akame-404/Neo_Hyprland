"use strict";(globalThis.webpackChunknotion_next=globalThis.webpackChunknotion_next||[]).push([[44313],{786249:(e,i,t)=>{t.d(i,{zq:()=>U,ZP:()=>J,UV:()=>G,f4:()=>X});t(757658);var n=t(667294),o=t(724405),a=t(356666),s=t(844495),r=t(937612),d=t(709291),l=t(401898),c=t(547307),m=t(740394),u=t(552275),g=t(158297),f=t(53695),y=t(164369),h=t(800480),p=t(886628),x=t(143169),v=t(454642),S=t(730459),M=t(833954),b=t(52507),F=t(550506),D=t(313991),j=t(137810),k=t(374194),C=t(568785),w=t(785893);const T=(0,d.defineMessages)({samlConfigSubtitle:{id:"verifyDomainModal.addNewDomain.samlConfig.subtitle",defaultMessage:"Users with a verified domain can log in {br}using SAML SSO."},integrationSubtitle:{id:"verifyDomainModal.addNewDomain.integration.subtitle",defaultMessage:"Link preview integrations must verify {br}domains before they are published."}});const A=function(e){let{handleAddNewDomain:i,loading:t,verificationType:a}=e;const[s,r]=(0,n.useState)(""),c=!Boolean(s),m=(0,n.useCallback)((e=>{r(e.target.value)}),[]),u=(0,o.yK)((()=>({title:{fontFamily:j.Z.getCompositeFontFamily(D.SP).sans,fontSize:17,fontWeight:500,lineHeight:"24px",textAlign:"center",marginBottom:8},subtitle:{fontFamily:j.Z.getCompositeFontFamily(D.SP).sans,fontSize:14,fontWeight:400,lineHeight:"19px",textAlign:"center"},input:{marginTop:22,marginBottom:14},button:{width:"100%",opacity:c?.5:1}})),[c]);let f;switch(a){case"integration":f=T.integrationSubtitle;break;case"saml_config":f=T.samlConfigSubtitle;break;default:(0,l.t1)(a)}return(0,w.jsxs)(n.Fragment,{children:[(0,w.jsx)(y.Z,{style:u.title,children:(0,w.jsx)(d.FormattedMessage,{id:"verifyDomainModal.addNewDomain.title",defaultMessage:"Add new domain"})}),(0,w.jsx)(y.Z,{style:u.subtitle,isMultiline:!0,children:(0,w.jsx)(d.FormattedMessage,{...f,values:{br:(0,w.jsx)("br",{})}})}),(0,w.jsx)(k.Z,{value:s,style:u.input,placeholder:"notion.so",onChange:m}),(0,w.jsx)(g.Z,{onClick:()=>i(s),style:u.button,isLarge:!0,disabled:c,children:t?(0,w.jsx)(C.Z,{}):(0,w.jsx)(d.FormattedMessage,{id:"verifyDomainModal.addNewDomain.next",defaultMessage:"Next"})})]})};var I=t(863296);const Z=function(e){let{domain:i,isExpired:t,onClose:a}=e;const s=(0,o.yK)((e=>({title:{fontFamily:j.Z.getCompositeFontFamily(D.SP).sans,fontSize:17,fontWeight:500,lineHeight:"24px",textAlign:"center",marginBottom:8},subtitle:{fontFamily:j.Z.getCompositeFontFamily(D.SP).sans,fontSize:14,fontWeight:400,lineHeight:"19px",textAlign:"center",marginBottom:22}})),[]);return(0,w.jsxs)(n.Fragment,{children:[(0,w.jsx)(y.Z,{style:s.title,isMultiline:!0,children:(0,w.jsx)(d.FormattedMessage,{id:"verifyDomainModal.invalidDomain.title",defaultMessage:"Unable to verify {domain}",values:{domain:i}})}),(0,w.jsx)(y.Z,{style:s.subtitle,isMultiline:!0,children:t?(0,w.jsx)(d.FormattedMessage,{id:"verifyDomainModal.invalidDomain.expired",defaultMessage:"The code for this domain's verification has expired."}):(0,w.jsx)(d.FormattedMessage,{id:"verifyDomainModal.invalidDomain.invalid",defaultMessage:"You are unable to verify this domain because it has already been verified by another workspace."})}),(0,w.jsx)(I.Z,{onClick:a,style:{width:"100%"},children:(0,w.jsx)(d.FormattedMessage,{id:"verifyDomainModal.invalidDomain.okay",defaultMessage:"Okay"})})]})},B=(0,d.defineMessages)({samlConfigSubtitle:{id:"verifyDomainModal.verifiedDomain.samlConfig.subtitle",defaultMessage:"Users are able to use this email domain to{br}log in using SAML SSO."},integrationSubtitle:{id:"verifyDomainModal.verifiedDomain.integration.subtitle",defaultMessage:"This integration can unfurl URLs containing this domain."}});const V=function(e){let{domain:i,onClose:t,verificationType:a}=e;const s=(0,o.yK)((()=>({title:{fontFamily:j.Z.getCompositeFontFamily(D.SP).sans,fontSize:17,fontWeight:500,lineHeight:"24px",textAlign:"center",marginBottom:8},subtitle:{fontFamily:j.Z.getCompositeFontFamily(D.SP).sans,fontSize:14,fontWeight:400,lineHeight:"19px",textAlign:"center",marginBottom:22}})),[]);let r;switch(a){case"saml_config":r=B.samlConfigSubtitle;break;case"integration":r=B.integrationSubtitle;break;default:(0,l.t1)(a)}return(0,w.jsxs)(n.Fragment,{children:[(0,w.jsx)(y.Z,{style:s.title,isMultiline:!0,children:(0,w.jsx)(d.FormattedMessage,{id:"verifyDomainModal.verifiedDomain.title",defaultMessage:"Successfully verified {domain}",values:{domain:i}})}),(0,w.jsx)(y.Z,{style:s.subtitle,isMultiline:!0,children:(0,w.jsx)(d.FormattedMessage,{...r,values:{br:(0,w.jsx)("br",{})}})}),(0,w.jsx)(I.Z,{onClick:t,style:{width:"100%"},children:(0,w.jsx)(d.FormattedMessage,{id:"verifyDomainModal.verifiedDomain.okay",defaultMessage:"Okay"})})]})};var R=t(875553),L=t(619584),P=t(800893),W=t(816402),O=t(164921);const z=function(e){let{handleVerifyDomain:i,domainVerification:t,loading:a}=e;const s=(0,h.O7)(),r=t.expiresAt-Date.now()<2*L.U6,l=(0,o.yK)((e=>({title:{fontFamily:j.Z.getCompositeFontFamily(D.SP).sans,fontSize:17,fontWeight:500,lineHeight:"24px",textAlign:"center",marginBottom:8},subtitle:{fontFamily:j.Z.getCompositeFontFamily(D.SP).sans,fontSize:14,fontWeight:400,lineHeight:"19px",textAlign:"center"},list:{paddingInlineStart:22,margin:"24px 0"},listItem:{fontFamily:j.Z.getCompositeFontFamily(D.SP).sans,fontSize:14,fontWeight:400,lineHeight:"19px",marginBottom:12},expiresSoonText:{color:"dark"===e.mode?e.accentColors.red[700]:e.accentColors.red[500]},copyButton:{borderRadius:4,padding:"4px 8px",display:"flex",alignItems:"center",justifyContent:"center",color:e.lightTextColor,fontFamily:j.Z.getCompositeFontFamily(D.SP).sans,fontSize:12,fontWeight:500,lineHeight:"14px"},copyIcon:{width:16,height:16,marginRight:4,fill:e.mediumIconColor},code:{width:"100%",color:e.mediumTextColor,fontFamily:j.Z.getCompositeFontFamily(D.SP).mono,fontSize:14,fontWeight:400,lineHeight:"18px"},codeContainer:{display:"flex",alignItems:"center",justifyContent:"center",border:`1px solid ${e.outlineButtonBorder}`,height:32,paddingLeft:12,paddingRight:12,borderRadius:4,marginTop:4,marginBottom:8}})),[]);return(0,w.jsxs)(n.Fragment,{children:[(0,w.jsx)(y.Z,{style:l.title,children:(0,w.jsx)(d.FormattedMessage,{id:"verifyDomainModal.verifyExistingDomain.title",defaultMessage:"Verify your domain"})}),(0,w.jsx)(y.Z,{style:l.subtitle,children:(0,w.jsx)(d.FormattedMessage,{id:"verifyDomainModal.verifyExistingDomain.subtitle",defaultMessage:"Follow these steps to finalize verification."})}),(0,w.jsx)(y.Z,{isSmall:!0,style:{marginTop:22},children:(0,w.jsx)(d.FormattedMessage,{id:"verifyDomainModal.verifyExistingDomain.verificationCodeLabel",defaultMessage:"Verification code"})}),(0,w.jsxs)("div",{style:l.codeContainer,children:[(0,w.jsx)(y.Z,{style:l.code,children:`notion-domain-verification=${t.verificationCode}`}),(0,w.jsxs)(O.Z,{onClick:function(){P.RD({environment:s,stringValue:`notion-domain-verification=${t.verificationCode}`,copiedMessage:P.tq.copiedLinkToClipboard})},style:l.copyButton,children:[(0,R.U)(l.copyIcon),(0,w.jsx)(d.FormattedMessage,{id:"verifyDomainModal.verifyExistingDomain.copy",defaultMessage:"Copy"})]})]}),(0,w.jsx)(y.Z,{style:r?l.expiresSoonText:void 0,isSmall:!0,children:(0,w.jsx)(d.FormattedMessage,{id:"verifyDomainModal.verifyExistingDomain.verificationCodeExpiresAt",defaultMessage:"Expires on {timeLeft}",values:{timeLeft:(0,W.gs)(t.expiresAt)}})}),(0,w.jsxs)("ol",{style:l.list,children:[(0,w.jsx)("li",{style:l.listItem,children:(0,w.jsx)(d.FormattedMessage,{id:"verifyDomainModal.verifyExistingDomain.instructionsDNS",defaultMessage:"Navigate to the DNS record section of your domain host."})}),(0,w.jsx)("li",{style:l.listItem,children:(0,w.jsx)(d.FormattedMessage,{id:"verifyDomainModal.verifyExistingDomain.instructionsTXT",defaultMessage:"Create a new TXT record and paste in the code above as the value."})}),(0,w.jsx)("li",{style:l.listItem,children:(0,w.jsx)(d.FormattedMessage,{id:"verifyDomainModal.verifyExistingDomain.instructionsHangTight",defaultMessage:"Typically, this change takes only minutes to occur, however, there are cases where it may take up to 72 hours for the DNS record to propagate."})}),(0,w.jsx)("li",{style:l.listItem,children:(0,w.jsx)(d.FormattedMessage,{id:"verifyDomainModal.verifyExistingDomain.instructionsVerify",defaultMessage:'Click "Verify" to notify Notion to check your DNS record.'})})]}),(0,w.jsx)(I.Z,{style:{width:"100%"},onClick:()=>i(t),disabled:a,children:a?(0,w.jsx)(C.Z,{}):(0,w.jsx)(d.FormattedMessage,{id:"verifyDomainModal.verifyExistingDomain.verify",defaultMessage:"Verify"})})]})};const H=function(e){const i=(0,h.O7)(),t=(0,d.useIntl)(),a=(0,o.Fg)(),[s,r]=(0,p.AF)(e.store,b.Z),{verificationType:m,verificationTargetId:u,refreshDomains:g}=e,f=(0,n.useCallback)((()=>{r((e=>({...e,loading:!1,modalOpen:!1})))}),[r]),y=(0,n.useCallback)((async e=>{r((e=>({...e,loading:!0})));const n="integration"===m?{type:m,integrationId:u,domain:e}:{type:m,spaceId:u,domain:e},o=await v.createDomainVerificationCode(i,n);if("success"===o.type){g(),S.K4(i,"domain_verification_domain_added",{type:m});const e=o.data.domainVerification,t=(0,x.Hs)(e);r((e=>({...e,domainVerification:t,loading:!1})))}else c.showErrorMessage((0,M.wf)(t,o)),r((e=>({...e,loading:!1})))}),[i,r,u,g,m,t]),D=(0,n.useCallback)((async e=>{r((e=>({...e,loading:!0})));const n=await v.verifyDomain(i,{verificationId:e.id});if(S.K4(i,"domain_verification_verification_attempted",{type:m}),"success"===n.type){g(),S.K4(i,"domain_verification_domain_verified",{type:m});const t={type:"verified",domain:e.domain};r((e=>({...e,domainVerification:t,loading:!1})))}else c.showErrorMessage((0,M.wf)(t,n)),r((e=>({...e,loading:!1})))}),[i,t,r,g,m]),j=(0,n.useCallback)((()=>{if(!s.domainVerification)return(0,w.jsx)(A,{handleAddNewDomain:y,loading:s.loading,verificationType:m});switch(s.domainVerification.type){case"invalid":return(0,w.jsx)(Z,{domain:s.domainVerification.domain,isExpired:Date.now()>s.domainVerification.expiresAt,onClose:f});case"unverified":return(0,w.jsx)(z,{handleVerifyDomain:D,domainVerification:s.domainVerification,loading:s.loading});case"verified":return(0,w.jsx)(V,{domain:s.domainVerification.domain,onClose:f,verificationType:m});default:(0,l.t1)(s.domainVerification)}}),[s.domainVerification,s.loading,D,y,f,m]);return(0,w.jsx)(F.Z,{open:s.modalOpen,preventHideChildrenWhileOpening:!0,onDismiss:f,render:()=>(0,w.jsx)("div",{style:{background:a.popoverBackground,width:410,padding:24,borderRadius:4},children:j()})})};var Y=t(705478);const _=[{id:"domain",headerTitle:(0,w.jsx)(d.FormattedMessage,{id:"domainVerificationTable.table.header.domain",defaultMessage:"Domain"}),renderCell:e=>(0,w.jsx)(y.Z,{children:e.domain}),widthData:{width:100},sortable:!1},{id:"status",headerTitle:(0,w.jsx)(d.FormattedMessage,{id:"domainVerificationTable.table.header.status",defaultMessage:"Status"}),renderCell:e=>(0,w.jsx)(U,{status:e.status}),widthData:{width:100},sortable:!1},{id:"actions",headerTitle:null,renderCell:e=>(0,w.jsx)($,{onShowDetails:e.onShowDetails,onRemove:e.onRemove}),widthData:{width:20},sortable:!1}],N=(0,d.defineMessages)({verifiedSAMLWarning:{defaultMessage:"Deleting this domain will prevent others with this email from logging in using SAML SSO.",id:"domainVerificationInput.securitySAMLSettings.emailDomainsSection.removeDomain.description"},verifiedIntegrationsWarning:{defaultMessage:"Deleting this domain will prevent integrations from unfurling urls that contain this domain.",id:"domainVerificationInput.myIntegrations.emailDomainsSection.removeDomain.description"},unverifiedDomainWarning:{defaultMessage:"Deleting this domain will restart its verification process. A new verification code will be generated for this domain in the next verification attempt.",id:"domainVerificationInput.securitySAMLSettings.emailDomainsSection.removeDomain.pending.description"}}),E={fontSize:17,fontWeight:500,lineHeight:"24px",textAlign:"center",marginBottom:8},K={fontSize:14,fontWeight:400,lineHeight:"19px",textAlign:"center"};function U(e){let{status:i}=e;const t=(0,o.yK)((e=>{const t={[Y.YF.Success]:e.statusTokenBackground.green,[Y.YF.Pending]:e.statusTokenBackground.yellow,[Y.YF.Failure]:e.statusTokenBackground.red},n={[Y.YF.Success]:e.statusTokenIndicator.green,[Y.YF.Pending]:e.statusTokenIndicator.yellow,[Y.YF.Failure]:e.statusTokenIndicator.red},o={[Y.YF.Success]:e.statusTokenText.green,[Y.YF.Pending]:e.statusTokenText.yellow,[Y.YF.Failure]:e.statusTokenText.red};return{container:{background:t[i],color:o[i],display:"flex",justifyContent:"center",alignItems:"center",gap:6,borderRadius:18,height:20,paddingLeft:7,paddingRight:9},dot:{background:n[i],width:10,height:10,borderRadius:"100%"}}}),[i]);return(0,w.jsxs)("div",{style:t.container,children:[(0,w.jsx)("div",{style:t.dot}),q(i)]})}function $(e){let{onShowDetails:i,onRemove:t}=e;const n=(0,o.yK)((e=>({primaryIcon:{width:14,height:14,color:e.mediumIconColor,fill:"currentColor"},menuItem:{width:250},menuIcon:{width:14,height:14,color:e.regularIconColor,fill:"currentColor"}})),[]),l=[];return i&&l.push({key:"details",action:()=>i(),render:e=>(0,w.jsx)(u.Z,{...e,style:n.menuItem,focused:!1,icon:(0,s.D)(n.menuIcon),title:(0,w.jsx)(d.FormattedMessage,{defaultMessage:"View details",id:"securitySAMLSettings.emailDomainsSection.details"}),caption:(0,w.jsx)(d.FormattedMessage,{defaultMessage:"See more information about the state of this domain verification record.",id:"securitySAMLSettings.emailDomainsSection.detailsCaption"}),shouldWrapCaption:!0})}),t&&l.push({key:"remove",action:()=>t(),render:e=>(0,w.jsx)(u.Z,{...e,style:n.menuItem,focused:!1,icon:(0,r.y)(n.menuIcon),title:(0,w.jsx)(d.FormattedMessage,{defaultMessage:"Remove domain",id:"securitySAMLSettings.emailDomainsSection.remove"}),caption:(0,w.jsx)(d.FormattedMessage,{defaultMessage:"Delete this domain verification record.",id:"securitySAMLSettings.emailDomainsSection.removeCaption"}),shouldWrapCaption:!0})}),0===l.length?null:(0,w.jsx)(f.Nz,{hideDropdownIcon:!0,title:(0,a.o)(n.primaryIcon),items:l})}function q(e){switch(e){case Y.YF.Success:return(0,w.jsx)(d.FormattedMessage,{defaultMessage:"Verified",id:"domainVerificationInput.emailDomainsSection.statusToken.verified"});case Y.YF.Pending:return(0,w.jsx)(d.FormattedMessage,{defaultMessage:"Pending",id:"domainVerificationInput.emailDomainsSection.statusToken.pending"});case Y.YF.Failure:return(0,w.jsx)(d.FormattedMessage,{defaultMessage:"Failed",id:"domainVerificationInput.emailDomainsSection.statusToken.failed"});default:(0,l.t1)(e)}}function X(e){return{domain:e,status:Y.YF.Success,data:{type:"verified",domain:e}}}function G(e){return Date.now()>e.expiresAt||Boolean(e.invalidatedAt)?{domain:e.domain,status:Y.YF.Failure,data:{type:"invalid",id:e.id,domain:e.domain,verificationCode:e.verificationCode,createdAt:e.createdAt,expiresAt:e.expiresAt,invalidatedAt:e.invalidatedAt}}:{domain:e.domain,status:Y.YF.Pending,data:{type:"unverified",id:e.id,domain:e.domain,verificationCode:e.verificationCode,createdAt:e.createdAt,expiresAt:e.expiresAt,invalidatedAt:e.invalidatedAt}}}const J=function(e){const{disabled:i,domains:t,domainVerificationStore:a,verificationType:s,verificationTargetId:r,refreshDomains:u,onRemoveDomain:f,onClickAddDomain:h,renderOverrideAddDomainButton:p}=e,x=(0,o.yK)((e=>(0,m.b)({columnRenderInfo:_,theme:e,containerMarginTop:0})),[]);function v(){i||(h&&h(),a.setState({domainVerification:void 0,loading:!1,modalOpen:!0}))}const S=t.map((e=>{let{domain:t,status:n,data:o}=e;return{id:"verified"===o.type?t:o.id,isClickable:!1,domain:t,status:n,onShowDetails:i?void 0:()=>function(e){i||a.setState({domainVerification:e,loading:!1,modalOpen:!0})}(o),onRemove:i?void 0:()=>async function(e,i){let t;if(i===Y.YF.Failure)return void f(e);i===Y.YF.Pending?t=N.unverifiedDomainWarning:i===Y.YF.Success?t="saml_config"===s?N.verifiedSAMLWarning:N.verifiedIntegrationsWarning:(0,l.t1)(i),await c.confirmUserAction({message:(0,w.jsx)("div",{style:E,children:(0,w.jsx)(d.FormattedMessage,{defaultMessage:"Are you sure you want to delete this domain?",id:"domainVerificationInput.emailDomainsSection.removeDomain.message"})}),description:(0,w.jsx)("div",{style:K,children:(0,w.jsx)(d.FormattedMessage,{...t})}),acceptLabel:(0,w.jsx)(d.FormattedMessage,{id:"domainVerificationInput.emailDomainsSection.removeDomain.accept",defaultMessage:"Delete domain"}),cancelLabel:(0,w.jsx)(d.FormattedMessage,{id:"domainVerificationInput.emailDomainsSection.removeDomain.cancel",defaultMessage:"Cancel"})})&&f(e)}(o,n)}}));return(0,w.jsxs)(n.Fragment,{children:[p?p(v):(0,w.jsx)(g.Z,{isLarge:!0,disabled:i,onClick:v,style:{margin:"4px 0px 16px",width:"fit-content"},children:(0,w.jsx)(d.FormattedMessage,{defaultMessage:"Add domain",id:"securitySAMLSettings.emailDomainsSection.addDomain"})}),(0,w.jsx)(m.D,{hideHeaderRowPadding:!0,showRowBorders:!0,columnRenderInfo:_,rows:S,styles:x,renderNoRowsComponent:()=>(0,w.jsx)(y.Z,{isSmall:!0,style:{marginTop:15,marginBottom:40,textAlign:"center"},children:(0,w.jsx)(d.FormattedMessage,{id:"securitySAMLSettings.emailDomainsSection.emptyTable",defaultMessage:"No domains configured."})})}),(0,w.jsx)(H,{store:a,verificationTargetId:r,verificationType:s,refreshDomains:u})]})}},346978:(e,i,t)=>{t.d(i,{Z:()=>r});var n=t(667294),o=t(724405),a=t(785893);function s(e,i){let{isSelected:t}=e;const{radioButtonStyle:n,dotStyle:s}=(0,o.yK)((e=>({radioButtonStyle:{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:16,height:16,borderRadius:16,marginRight:8,background:t?e.blueColor:e.whiteButtonBackground,border:t?"none":`1px solid ${e.radioButtonBorder}`,transition:"background 100ms ease-out"},dotStyle:{width:6,height:6,borderRadius:6,background:e.regularInvertedTextColor,transition:"opacity 100ms ease-out",opacity:t?1:0}})),[t]);return(0,a.jsx)("div",{ref:i,style:n,children:(0,a.jsx)("div",{style:s})})}const r=n.forwardRef(s)},705478:(e,i,t)=>{t.d(i,{YF:()=>d,ZP:()=>c});t(667294);var n=t(724405),o=t(825464),a=t(526388),s=t(685567),r=t(785893);const d={Success:"success",Pending:"pending",Failure:"failure"};const l={display:"flex",justifyContent:"center",alignItems:"baseline"},c=function(e){let{status:i,value:t,renderTooltip:c,...m}=e;const u=(0,n.Fg)(),g={[d.Success]:u.statusTokenBackground.green,[d.Pending]:u.statusTokenBackground.yellow,[d.Failure]:u.statusTokenBackground.red},f={[d.Success]:u.statusTokenIndicator.green,[d.Pending]:u.statusTokenIndicator.yellow,[d.Failure]:u.statusTokenIndicator.red},y={[d.Success]:u.statusTokenText.green,[d.Pending]:u.statusTokenText.yellow,[d.Failure]:u.statusTokenText.red};return c?(0,r.jsx)(s.Z,{...m,backgroundColor:g[i],color:y[i],value:(0,r.jsx)(a.Z,{placement:o.u.Bottom,alignment:o.v.Start,renderTooltip:c,render:e=>(0,r.jsxs)("div",{style:l,...e,children:[(0,r.jsx)("div",{style:{background:f[i],width:8,height:8,borderRadius:"100%",marginRight:4}}),t]})})}):(0,r.jsx)(s.Z,{...m,backgroundColor:g[i],color:y[i],value:(0,r.jsxs)("div",{style:l,children:[(0,r.jsx)("div",{style:{background:f[i],width:8,height:8,borderRadius:"100%",marginRight:4}}),t]})})}},100719:(e,i,t)=>{t.d(i,{Z:()=>l});t(667294);var n=t(800480),o=t(724405),a=t(98742),s=t(374194),r=t(785893);const d={flexGrow:1,flexShrink:1,flexBasis:60,minWidth:60,width:"auto",lineHeight:"20px"};const l=function(e){let{readOnly:i,onClick:t,style:a,tokens:s,value:d,onRemoveLastToken:l,onChange:g,onSubmit:f,onBlur:y,overflowHorizontally:h,focus:p,type:x,placeholder:v,...S}=e;const M=(0,o.Fg)(),b=(0,n.O7)(),{device:F}=b;return(0,r.jsxs)("div",{className:i?void 0:"notion-focusable-within",onClick:t,style:F.isMobile?m(M,a):c(M,a),children:[h?(0,r.jsx)("div",{style:{display:"flex",flexShrink:0},children:s}):s,(0,r.jsx)(u,{tokens:s,value:d,onRemoveLastToken:l,onChange:g,onSubmit:f,onBlur:y,focus:p,readOnly:i,type:x,placeholder:v,inputStyle:S.inputStyle})]})};function c(e,i){return{display:"flex",flexWrap:"wrap",alignItems:"flex-start",minHeight:32,boxShadow:e.inputBoxShadow,background:e.inputBackground,borderRadius:4,fontSize:14,cursor:"text",overflow:"hidden",padding:"7px 9px 0px",...i}}function m(e,i){return{...c(e,i),fontSize:14,padding:"7px 10px 0"}}function u(e){let{tokens:i,value:t,onRemoveLastToken:o,onChange:l,onSubmit:c,onBlur:m,focus:u,readOnly:g,type:f,placeholder:y,...h}=e;const p=(0,n.O7)(),{device:x}=p,v=0===i.length;return(0,r.jsx)(s.Z,{format:s.B.Transparent,...(0,a.Z)({onKeyDown:e=>function(e,i,t){"Backspace"===e.key&&0===i.length&&t()}(e,t,o)},{onChange:l}),value:t,onSubmit:c,onBlur:m,focus:u,style:{...d,margin:x.isMobile?"0 8px 8px 0":"0 6px 6px 0"},readOnly:g,inputStyle:{height:18,...h.inputStyle},size:1,type:f,placeholder:v?y:"",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:!1})}},52507:(e,i,t)=>{t.d(i,{Z:()=>a});var n=t(749085);class o extends n.default{getInitialState(){return{modalOpen:!1,loading:!1,domainVerification:void 0}}}const a=o},143169:(e,i,t)=>{t.d(i,{AS:()=>s,Hs:()=>r,b:()=>d});var n=t(401898),o=t(959753),a=t(244312);const s=(0,n.AO)((e=>"invalid"===e.type||"unverified"===e.type?{true:e}:{false:e}));function r(e){const i=o.kk.fromValue(a.Jd,e);return{type:i.verified_at?"verified":"unverified",id:i.id,domain:i.domain,verificationCode:i.verification_code,createdAt:i.created_at,expiresAt:i.expires_at,invalidatedAt:i.getInfo().invalidated_at}}let d=function(e){return e.ConfiguredSSO="configured-sso",e.EnforcedSSO="enforced-sso",e.Standard="standard",e.NotAvailable="not-available",e}({})}}]);