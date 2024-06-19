"use strict";(globalThis.webpackChunknotion_next=globalThis.webpackChunknotion_next||[]).push([[40226],{589141:(e,t,i)=>{i.d(t,{Z:()=>r});i(667294);var s=i(886628),n=i(724405),a=i(137810),o=i(70853),d=i(785893);function r(e){const{spaceStore:t,domainId:i,isRelative:r}=e,l=(0,s.VK)((()=>o.Co({spaceStore:t,domainId:i})),[t,i]),c=(0,n.yK)((e=>({tag:{width:"fit-content",maxWidth:"98%",paddingLeft:6,paddingRight:6,borderRadius:3,background:e.buttonHoveredBackground,...a.Z.textOverflowStyle},relativeUrl:{color:e.text.tertiary}})),[]);return(0,d.jsxs)("div",{style:c.tag,children:[l,r&&(0,d.jsx)("span",{style:c.relativeUrl,children:"/..."})]})}},788181:(e,t,i)=>{i.r(t),i.d(t,{default:()=>at});var s=i(667294),n=i(800480),a=i(886628),o=i(724405),d=i(780926),r=i(421202),l=i(709291),c=i(526388),u=i(164369),m=i(629551),p=i(723189),g=i(940235),f=i(825464),h=i(206258),x=i(891694),j=i(88893),y=i(70853),C=i(585447),v=i(885543),D=i(428714),b=i(114581);const M=(0,i(745238).CZ)("trash",{default:{loader:()=>i.e(79983).then(i.bind(i,79983)),size:20},small:{loader:()=>i.e(80407).then(i.bind(i,980407)),size:16},mini:{loader:()=>i.e(17817).then(i.bind(i,217817)),size:14},large:{loader:()=>i.e(93029).then(i.bind(i,193029)),size:24}});var S=i(401898),w=i(699884),I=i(780681),T=i(382914),k=i(976940),B=i(785893);function F(e){const{iconGroup:t,title:i,description:s,descriptionValues:n,confirmationButtonType:a,confirmationButton:o,onConfirm:d,showCancel:r,showDismissButton:l}=e;return(0,B.jsx)(k.gv.Provider,{value:I.mn,children:(0,B.jsx)(Z,{iconGroup:t,title:i,description:s,descriptionValues:n,confirmationButtonType:a,confirmationButton:o,onConfirm:d,showCancel:r,showDismissButton:l})})}function Z(e){const{iconGroup:t,title:i,description:s,descriptionValues:n,confirmationButtonType:a,confirmationButton:o,onConfirm:d,showCancel:r,showDismissButton:l}=e;return(0,B.jsx)("div",{children:(0,B.jsx)(T.sR,{header:(0,B.jsx)(V,{iconGroup:t,title:i,description:s,descriptionValues:n}),footer:(0,B.jsx)(P,{confirmationButtonType:a,confirmationButton:o,onConfirm:d,showCancel:r}),showDismissButton:l})})}function V(e){const{iconGroup:t,title:i,description:s,descriptionValues:n}=e,a=(0,o.yK)((()=>({})),[]);return(0,B.jsx)(T.vI,{iconAndTitle:(0,B.jsx)(T.kC,{iconGroup:t,iconColorName:"uiRedPrimary",title:(0,B.jsx)(l.FormattedMessage,{...i})}),description:(0,B.jsx)(l.FormattedMessage,{...s,values:n}),descriptionStyle:a.description})}function P(e){const{confirmationButtonType:t,confirmationButton:i,onConfirm:s,showCancel:n}=e;return(0,B.jsx)(T.a6,{layout:"vertical",primaryButtons:[{buttonType:t,label:(0,B.jsx)(l.FormattedMessage,{...i}),onClick:s}],secondaryButtons:n?[{buttonType:"dismiss"}]:[]})}var K=i(689024),N=i(568785),R=i(707124);function L(){return(0,B.jsxs)(K.jX,{padding:20,gap:16,width:300,height:"hug",align:"center",children:[(0,B.jsx)(N.Z,{style:{height:36,width:36}}),(0,B.jsx)(R.q,{styleName:"Body-14px/Regular",colorName:"secondary",children:(0,B.jsx)(l.FormattedMessage,{id:"sites.deletingDomain.message",defaultMessage:"Deleting domain..."})})]})}const O=(0,l.defineMessages)({deleteConfirmationTitle:{id:"sites.deleteDomain.confirmationTitle",defaultMessage:"Delete domain?"},deleteConfirmationDescription:{id:"sites.deleteDomain.confirmationCaption",defaultMessage:"You will no longer be able to use {domainName} for publishing"},deleteConfirmationButton:{id:"sites.deleteDomain.deleteButton",defaultMessage:"Delete domain"},deleteDomainWithSitesTitle:{id:"sites.deleteDomainWithSites.confirmationTitle",defaultMessage:"Domain is used for publishing"},deleteDomainWithSitesDescription:{id:"sites.deleteDomainWithSites.confirmationCaption",defaultMessage:"There are sites that are active under this domain. Please ensure that there are no published sites under the domain {domainName}."},deleteDomainWithSitesConfirmationButton:{id:"sites.deleteDomainWithSites.confirmationButton",defaultMessage:"Got it"}});function A(){const e=(0,n.O7)(),t=(0,a.VK)((()=>{const e=C.Z.getState();if(e.isOpen)return e}),[]),i=(0,a.VK)((()=>null!=t&&t.domain?y.Bk({domainName:t.domain.getDomainName(),domainType:t.domain.getDomainType()}):void 0),[t]);if(!t)return null;const{step:s,spaceId:o,domain:d}=t;return(0,B.jsx)(w.c,{isOpen:!0,onDismiss:I.mn,areaConstraint:{width:{type:"fixed",length:300}},render:()=>{switch(s){case"ConfirmDelete":return(0,B.jsx)(F,{iconGroup:M,title:O.deleteConfirmationTitle,description:O.deleteConfirmationDescription,descriptionValues:{domainName:i},confirmationButtonType:"destructive",confirmationButton:O.deleteConfirmationButton,onConfirm:async()=>{I.Xe("Deleting",o,d),await I.If({environment:e,spaceId:o,domainId:d.id,domainType:d.domain_type,showErrorDialog:!0}),I.mn()},showCancel:!0,showDismissButton:!0});case"RestrictDelete":return(0,B.jsx)(F,{iconGroup:b.h,title:O.deleteDomainWithSitesTitle,description:O.deleteDomainWithSitesDescription,descriptionValues:{domainName:i},confirmationButtonType:"outline",confirmationButton:O.deleteDomainWithSitesConfirmationButton,onConfirm:I.mn,showCancel:!1,showDismissButton:!1});case"Deleting":return(0,B.jsx)(L,{});default:(0,S.t1)(s)}}})}var _=i(890334),z=i(231945),H=i(573063),G=i(98742),U=(i(757658),i(84810)),E=i(725651),q=i(937612),W=i(552275),Q=i(478140),X=i(632163),Y=i(672495),$=i(460709);function J(e){const{spaceId:t,domain:i,parent:d}=e,r=(0,n.O7)(),[l,c]=(0,s.useState)(!0),{domainType:u,domainStatus:m,isDefault:p}=(0,a.VK)((()=>({domainType:i.getDomainType(),domainStatus:i.getDomainStatus(),isDefault:i.isDefault()})),[i]);(0,s.useEffect)((()=>{!async function(){if(i.isDefault())return;const e=await I.s({environment:r,spaceId:t,domainId:i.id});c(e)}()}),[r,t,i]);const g=(0,o.yK)((()=>({actionIcon:{width:14,height:14}})),[]),f=[];return"default"===u?f.push({key:"edit",render:e=>(0,B.jsx)(ee,{...e,iconStyle:g.actionIcon}),action:()=>{I.Wv("EditDomainName",t,i),d.close()}}):"custom"!==u||"invalid"!==m&&"certificate_pending"!==m&&"notion_dcv_pending"!==m||f.push({key:"validate",render:e=>(0,B.jsx)(ie,{...e,iconStyle:g.actionIcon}),action:()=>{I.U3(t,i),d.close()}}),f.push({key:"delete",render:e=>(0,B.jsx)(te,{...e,disabled:p,iconStyle:g.actionIcon}),action:()=>{I.Xe(l?"RestrictDelete":"ConfirmDelete",t,i),d.close()}}),(0,B.jsx)(B.Fragment,{children:(0,B.jsx)(Q.Z,{menuType:$.og.Popup,width:160,children:(0,B.jsx)(X.Z,{initialFocus:void 0,type:X.i.Vertical,sections:[{key:0,render:e=>(0,B.jsx)(Y.Z,{...e}),items:f}]})})})}const ee=s.forwardRef(((e,t)=>{const{iconStyle:i}=e;return(0,B.jsx)(W.Z,{...e,ref:t,icon:(0,E.R)(i),title:(0,B.jsx)(l.FormattedMessage,{id:"sites.domainActions.edit",defaultMessage:"Update"})})}));ee.displayName="EditAction";const te=s.forwardRef(((e,t)=>{const{iconStyle:i,disabled:s}=e,n=(0,o.yK)((e=>({disabledContainer:{color:e.text.quaternary},disabledIcon:{color:e.icon.quaternary,...i}})),[i]);return s?(0,B.jsx)(c.Z,{renderTooltip:()=>(0,B.jsx)(l.FormattedMessage,{id:"sites.domainActions.deleteDefaultDomain",defaultMessage:"Default domain of the workspace cannot be deleted"}),placement:f.u.Bottom,render:i=>(0,B.jsx)(W.Z,{...(0,G.Z)(i,e),style:n.disabledContainer,ref:t,icon:(0,q.y)(n.disabledIcon),title:(0,B.jsx)(l.FormattedMessage,{id:"sites.domainActions.delete",defaultMessage:"Delete"})})}):(0,B.jsx)(W.Z,{...e,ref:t,icon:(0,q.y)(i),title:(0,B.jsx)(l.FormattedMessage,{id:"sites.domainActions.delete",defaultMessage:"Delete"})})}));te.displayName="DeleteAction";const ie=s.forwardRef(((e,t)=>{const{iconStyle:i}=e;return(0,B.jsx)(W.Z,{...e,ref:t,icon:(0,U.h)(i),title:(0,B.jsx)(l.FormattedMessage,{id:"sites.domainActions.validate",defaultMessage:"Validate"})})}));function se(e){const{spaceId:t,domain:i,disabled:s}=e,n=(0,o.yK)((()=>({editButtonIcon:{width:18,height:18}})),[]);return(0,B.jsx)(z.ZP,{alignmentToOrigin:f.v.End,renderOrigin:e=>(0,B.jsx)(c.Z,{disableTooltip:!s,renderTooltip:()=>(0,B.jsx)(l.FormattedMessage,{id:"sites.editDomain.noEditAccess",defaultMessage:"Only workspace owners can update the domain"}),placement:f.u.Bottom,render:t=>(0,B.jsx)(H.Z,{...(0,G.Z)(t,e),ariaLabel:"Update domain",icon:_.O,iconStyle:n.editButtonIcon,disabled:s})}),popupType:z.Z4.Popup,render:e=>(0,B.jsx)(J,{spaceId:t,domain:i,parent:e})})}ie.displayName="ValidateAction";var ne=i(589141);function ae(e,t,i){return"invalid"===e||"payment_required"===e?t.accentColors.red[i]:"active"===e?t.accentColors.green[i]:"certificate_pending"===e||"notion_dcv_pending"===e?t.accentColors.yellow[i]:void(0,S.t1)(e)}function oe(e){const{domainStatus:t}=e;return"invalid"===t?(0,B.jsx)(l.FormattedMessage,{id:"sites.domains.domainStatusInvalid",defaultMessage:"Invalid"}):"payment_required"===t?(0,B.jsx)(c.Z,{placement:f.u.Bottom,render:e=>(0,B.jsx)("div",{...e,children:(0,B.jsx)(l.FormattedMessage,{id:"sites.domains.domainStatusPaymentRequired",defaultMessage:"Payment required"})}),renderTooltip:()=>(0,B.jsx)(l.FormattedMessage,{id:"sites.domains.domainStatusPaymentRequiredTooltip",defaultMessage:"Go to 'Billings' tab to add a new payment method"})}):"active"===t?(0,B.jsx)(l.FormattedMessage,{id:"sites.domains.domainStatusLive",defaultMessage:"Live"}):"certificate_pending"===t||"notion_dcv_pending"===t?(0,B.jsx)(l.FormattedMessage,{id:"sites.domains.domainStatusPending",defaultMessage:"Pending"}):void(0,S.t1)(t)}function de(e){const{domainStatus:t}=e,i=(0,o.yK)((e=>({container:{display:"flex",alignItems:"center",gap:4,width:"fit-content",paddingLeft:8,paddingRight:8,borderRadius:10,backgroundColor:ae(t,e,100)},dot:{borderRadius:99,height:8,width:8,backgroundColor:ae(t,e,500)}})),[t]);return(0,B.jsxs)("div",{style:i.container,children:[(0,B.jsx)("div",{style:i.dot}),(0,B.jsx)(oe,{domainStatus:t})]})}var re=i(739263),le=i(780037);function ce(){const e=(0,a.VK)((()=>{const e=v.Z.getState();if(e.isOpen)return e}),[]);if(!e)return null;const{spaceId:t,domain:i}=e;return(0,B.jsx)(ue,{spaceId:t,domain:i})}function ue(e){const{spaceId:t,domain:i}=e,o=(0,n.O7)(),d=(0,a.VK)((()=>i.getDomainName()),[i]),[r,l]=(0,s.useState)(d),[c,u]=(0,s.useState)(void 0),m=r!==d,p=(0,s.useCallback)((async()=>{if(r&&m){const{error:e}=await I.dM({environment:o,spaceId:t,domainId:i.id,domainName:r});if(e)return void u(e);I.Wv("EditDomainNameSuccess",t,i)}}),[o,t,i,r,m]);return(0,B.jsx)(k.gv.Provider,{value:I.zQ,children:(0,B.jsx)(T.sR,{header:(0,B.jsx)(me,{}),footer:(0,B.jsx)(pe,{isDisabled:!m,onClick:p}),children:(0,B.jsx)(le.Z,{domainName:r,setDomainName:l,domainType:"default",errorResponse:c})})})}function me(){return(0,B.jsx)(T.vI,{iconAndTitle:(0,B.jsx)(T.kC,{iconGroup:re.X,title:(0,B.jsx)(l.FormattedMessage,{id:"sites.editDomain.title",defaultMessage:"Update existing domain"})}),description:(0,B.jsx)("div",{style:{paddingLeft:50,paddingRight:50},children:(0,B.jsx)(l.FormattedMessage,{id:"sites.editDomain.subtitle",defaultMessage:"This change will apply to all the sites live on this domain"})})})}function pe(e){const{isDisabled:t,onClick:i}=e;return(0,B.jsx)(T.a6,{layout:"vertical",primaryButtons:[{buttonType:"primary",label:(0,B.jsx)(l.FormattedMessage,{id:"sites.editDomain.save",defaultMessage:"Save changes"}),isDisabled:t,onClick:i}],secondaryButtons:[{buttonType:"dismiss"}]})}var ge=i(679956);function fe(){return(0,B.jsx)(k.gv.Provider,{value:I.zQ,children:(0,B.jsx)(T.sR,{header:(0,B.jsx)(he,{}),footer:(0,B.jsx)(xe,{}),showDismissButton:!1})})}function he(){return(0,B.jsx)(T.vI,{iconAndTitle:(0,B.jsx)(T.kC,{iconGroup:ge.F,title:(0,B.jsx)(l.FormattedMessage,{id:"sites.editDomainSuccess.title",defaultMessage:"Successfully updated domain"})}),description:(0,B.jsx)(l.FormattedMessage,{id:"sites.editDomainSuccess.subtitle",defaultMessage:"All sites published to this domain now use the new domain"})})}function xe(){return(0,B.jsx)(T.a6,{layout:"vertical",primaryButtons:[{buttonType:"outline",label:(0,B.jsx)(l.FormattedMessage,{id:"sites.newDefaultDomainSuccess.close",defaultMessage:"Done"}),isDisabled:!1,onClick:I.zQ}]})}function je(){const e=(0,a.VK)((()=>{const e=v.Z.getState();if(e.isOpen)return e}),[]);if(!e)return null;const{step:t}=e,i="EditDomainNameSuccess"===t;return(0,B.jsx)(w.c,{isOpen:!0,onDismiss:I.zQ,areaConstraint:{width:{type:"fixed",length:i?300:450}},render:()=>i?(0,B.jsx)(fe,{}):(0,B.jsx)(ce,{}),animateSizeTransition:!i})}var ye=i(213148),Ce=i(653965),ve=i(559054),De=i(435840),be=i(374194),Me=i(953437),Se=i(511470),we=i(628020),Ie=i(356437),Te=i(223196),ke=i(115100);const Be=3;function Fe(e){const{domain:t,initialFocus:i,disabled:n,onSiteSelection:a,onResetInput:d}=e,[r,l]=(0,s.useState)(""),[c,u]=(0,s.useState)(!1),m=(0,o.yK)((()=>({resultsPopup:{width:250}})),[]),p=(0,s.useCallback)((e=>{a(e),u(!1)}),[a,u]),g=(0,s.useCallback)((()=>{u(!1)}),[u]),f=(0,s.useCallback)((()=>{c||d()}),[c,d]);return(0,B.jsx)(Me.ZP,{alignmentToOrigin:Me.ZP.Alignment.Start,origin:(0,B.jsx)(Ze,{initialFocus:i,disabled:n,query:r,setQuery:l,setShowResults:u,onBlurInput:f}),originGap:3,open:c,popupType:Te.k.Popup,style:m.resultsPopup,render:()=>(0,B.jsx)(Ve,{query:r,onSelection:p,domain:t}),onDismiss:g})}function Ze(e){const{initialFocus:t,disabled:i,query:n,setQuery:a,setShowResults:d,onBlurInput:r}=e,u=(0,l.useIntl)(),m=(0,o.yK)((e=>({input:{display:"flex",flex:1,paddingLeft:4},icon:{fill:e.mediumIconColor,width:12,height:12}})),[]),p=(0,s.useCallback)((e=>{a(e.target.value),d(!0)}),[a,d]),g=(0,s.useCallback)((()=>{d(!0)}),[d]),h=(0,s.useCallback)((e=>{"Escape"===e.key&&d(!1)}),[d]);return(0,B.jsx)(c.Z,{disableTooltip:!i,renderTooltip:()=>(0,B.jsx)(l.FormattedMessage,{id:"sites.siteSearchInput.noEditAccess",defaultMessage:"Only workspace owners can set up a homepage for a domain"}),placement:f.u.Bottom,render:e=>(0,B.jsx)("div",{...e,children:(0,B.jsx)(be.Z,{type:"text",focusInitial:t,disabled:i,onChange:p,onFocus:g,onBlur:r,onKeyDown:h,format:be.B.Transparent,style:m.input,value:n,left:(0,De.R)(m.icon),placeholder:u.formatMessage({id:"sites.siteSearchInput.placeholder",defaultMessage:"Select a page"})})})})}function Ve(e){const{query:t,onSelection:i,domain:s}=e,d=(0,n.O7)(),c=(0,o.yK)((()=>({loadingSpinner:{textAlign:"center",visibility:"visible",display:"inline",marginLeft:8}})),[]),[{value:m,status:p}]=(0,ve.r5)((()=>ke.a2(t,d)),[t,d]),g=(0,a.VK)((()=>{const e=(0,we.RM)();if(!e)return[];if("idle"===p||"pending"===p)return[{key:"results-loading-spinner",render:()=>(0,B.jsx)(N.Z,{style:c.loadingSpinner}),action:()=>{}}];if(!e||(!m||0===m.length)&&t.length>0)return[{key:"empty-results",render:()=>(0,B.jsx)(u.Z,{isSmall:!0,style:{paddingLeft:8,paddingTop:4,paddingBottom:4},children:(0,B.jsx)(l.FormattedMessage,{id:"sites.publicHomePageSearch.noResults",defaultMessage:"No sites found"})}),action:()=>{}}];const n=[];return null==m||m.forEach((t=>{const a=h.G.createChildStore(e,{table:r.iU,id:t.id}),o=Ie.UM(a);(o&&o===s.id||!o&&s.is_default)&&n.push({key:t.id,render:e=>(0,B.jsx)(Se.Z,{store:a,...e}),action:()=>{i(t.id)}})})),0===n.length?[Pe(s)]:""===t?n.splice(0,Be):n}),[m,i,s,c,p,t]);return(0,B.jsx)(X.Z,{type:X.i.Vertical,sections:[{key:"sites-search-results",render:e=>(0,B.jsx)(Y.Z,{...e}),items:g}],initialFocus:void 0})}function Pe(e){const t=y.Bk({domainName:e.getDomainName()||"",domainType:e.getDomainType()});return{key:"empty-suggestions",render:()=>(0,B.jsx)(u.Z,{isSmall:!0,isMultiline:!0,style:{paddingLeft:8,paddingTop:4,paddingBottom:4},children:(0,B.jsx)(l.FormattedMessage,{id:"sites.publicHomePageSearch.noResultsForDomain",defaultMessage:"Publish a page with {domainName} to set a homepage",values:{domainName:t}})}),action:()=>{}}}var Ke=i(230457);function Ne(e){const{spaceId:t,domain:i,publicHomePageStore:d,disabled:r}=e,l=(0,n.O7)(),[c,u]=(0,s.useState)(!1),[m,p]=(0,s.useState)(!1),g=(0,a.VK)((()=>j.M9(l)),[l]),f=(0,o.yK)((()=>({record:{paddingRight:12},previewContainer:{display:"flex",paddingRight:12},upsellButton:{width:"fit-content"}})),[]),h=(0,s.useCallback)((async e=>{e.stopPropagation(),await I.cw({environment:l,spaceId:t,domainId:i.id,publicHomePageId:void 0,showErrorDialog:!0})}),[l,t,i]),y=(0,s.useCallback)((async e=>{e&&await I.cw({environment:l,spaceId:t,domainId:i.id,publicHomePageId:e,showErrorDialog:!0}),u(!1)}),[l,t,i,u]);return g?(0,B.jsx)(x.Z,{subscriptionTier:g,analyticsName:"public_domain_home_page",desktopStyle:f.upsellButton}):r?d?(0,B.jsx)(Ke.Z,{store:d,style:f.record}):(0,B.jsx)(Fe,{domain:i,initialFocus:!1,disabled:!0,onSiteSelection:Ce.ZT,onResetInput:Ce.ZT}):d&&!c?(0,B.jsxs)("div",{style:f.previewContainer,onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:[(0,B.jsx)(Ke.Z,{store:d}),m&&(0,B.jsx)(Re,{onUpdateClick:()=>u(!0),onClearClick:h})]}):(0,B.jsx)(Fe,{initialFocus:c,onResetInput:()=>u(!1),disabled:!1,onSiteSelection:y,domain:i})}function Re(e){const{onUpdateClick:t,onClearClick:i}=e,s=(0,o.yK)((()=>({actionIcon:{marginLeft:4}})),[]);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(c.Z,{renderTooltip:()=>(0,B.jsx)(l.FormattedMessage,{id:"sites.publicHomePage.update",defaultMessage:"Update the homepage for the domain"}),placement:f.u.Bottom,render:e=>(0,B.jsx)(H.Z,{...e,icon:E.R,ariaLabel:"Update home page",onClick:t,style:s.actionIcon})}),(0,B.jsx)(c.Z,{renderTooltip:()=>(0,B.jsx)(l.FormattedMessage,{id:"sites.publicHomePage.clear",defaultMessage:"Clear the homepage for the domain"}),placement:f.u.Bottom,render:e=>(0,B.jsx)(H.Z,{...e,icon:ye.U,ariaLabel:"Clear home page",onClick:i,style:s.actionIcon})})]})}var Le=i(158297),Oe=i(296994),Ae=i(304708),_e=i(535057),ze=i(99322),He=i(232636);function Ge(e){const{spaceStore:t}=e,i=(0,a.VK)((()=>He.Z.getState().isOpen),[]),s=(0,a.VK)((()=>t.canAdmin()),[t]),n=(0,a.VK)((()=>_e.QM()),[]),{defaultDomainsCount:d,customDomainsCount:r}=(0,a.VK)((()=>{const e=y.DY(t);return{defaultDomainsCount:e.filter((e=>"default"===e.domain_type)).length,customDomainsCount:e.filter((e=>"custom"===e.domain_type)).length}}),[t]),u=(0,ze.S)(t),m=(0,ze.t)(),p=!s||n||d>=u&&r>=m,g=(0,o.yK)((()=>({newDomainButton:{paddingTop:5,paddingBottom:5,paddingLeft:12,paddingRight:12}})),[]);if(!(0,a.VK)((()=>Ae.Aq()),[]))return null;const h=s?n?(0,B.jsx)(l.FormattedMessage,{id:"sites.createDomain.freeTier",defaultMessage:"Upgrade your plan to create more domains for your workspace"}):(0,B.jsx)(l.FormattedMessage,{id:"sites.createDomain.maxDomainsCreated",defaultMessage:"Only {maximumDomains} domains allowed for this workspace",values:{maximumDomains:u+m}}):(0,B.jsx)(l.FormattedMessage,{id:"sites.createDomain.noCreateAccess",defaultMessage:"Only workspace owners can create a domain"});return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(c.Z,{disableTooltip:!p,renderTooltip:()=>h,placement:f.u.Bottom,render:e=>(0,B.jsx)(Le.Z,{...e,onClick:()=>I.pE("SelectDomainType"),disabled:p,style:g.newDomainButton,children:(0,B.jsx)(l.FormattedMessage,{id:"sites.createDomain.new",defaultMessage:"New domain"})})}),i&&(0,B.jsx)(Oe.Pl,{spaceStore:t})]})}var Ue=i(138045),Ee=i(443128);function qe(){const e=(0,a.VK)((()=>D.Z.getState()),[]),{isOpen:t,spaceId:i,domain:s}=e;return t?(0,B.jsx)(We,{spaceId:i,domain:s}):null}function We(e){const{spaceId:t,domain:i}=e,o=(0,n.O7)(),{domainId:d,domainName:r}=(0,a.VK)((()=>({domainId:i.id,domainName:i.getDomainName()})),[i]),[l,c]=(0,s.useState)(!1);(0,s.useEffect)((()=>{d&&l&&I.OL({environment:o,domainId:d,spaceId:t,poll:!0}).then((e=>{e.error?c(!0):"active"===e.domainStatus?I.C3("DomainValidatedSuccess"):I.C3("DomainPendingSuccess")}))}),[o,t,d,l]);const u=(0,s.useCallback)((()=>{d&&c(!0)}),[d,c]);return(0,B.jsx)(k.gv.Provider,{value:I.ho,children:(0,B.jsx)(T.sR,{header:(0,B.jsx)(Qe,{}),footer:(0,B.jsx)(Xe,{onClick:u,validationInProgress:l}),children:(0,B.jsx)(Ee.Z,{domainId:d,domainName:r})})})}function Qe(){return(0,B.jsx)(T.vI,{iconAndTitle:(0,B.jsx)(T.kC,{iconGroup:Ue.M,title:(0,B.jsx)(l.FormattedMessage,{id:"sites.newCustomDomain.title",defaultMessage:"Connect new domain"})}),description:(0,B.jsx)(l.FormattedMessage,{id:"sites.newCustomDomainDnsSettings.subtitle",defaultMessage:"You can also find these instructions in our help center"})})}function Xe(e){const{onClick:t,validationInProgress:i}=e;return(0,B.jsx)(T.a6,{layout:"vertical",primaryButtons:[{buttonType:"primary",label:i?(0,B.jsx)(l.FormattedMessage,{id:"sites.validateCustomDomain.verifying",defaultMessage:"Verifying..."}):(0,B.jsx)(l.FormattedMessage,{id:"sites.validateCustomDomain.verify",defaultMessage:"Verify"}),isDisabled:i,onClick:t}]})}function Ye(){return(0,B.jsx)(k.gv.Provider,{value:I.ho,children:(0,B.jsx)(T.sR,{header:(0,B.jsx)($e,{}),footer:(0,B.jsx)(Je,{}),showDismissButton:!1})})}function $e(){const e=(0,o.yK)((()=>({})),[]);return(0,B.jsx)(T.vI,{iconAndTitle:(0,B.jsx)(T.kC,{iconGroup:ge.F,title:(0,B.jsx)(l.FormattedMessage,{id:"sites.customHostnameValdation.title",defaultMessage:"It's taking a while to verify"})}),description:(0,B.jsx)(l.FormattedMessage,{id:"sites.customHostnameValdation.subtitle",defaultMessage:"We'll send you an email when your new domain is ready to use"}),descriptionStyle:e.description})}function Je(){return(0,B.jsx)(T.a6,{layout:"vertical",primaryButtons:[{buttonType:"outline",label:(0,B.jsx)(l.FormattedMessage,{id:"sites.newCustomDomainSuccess.close",defaultMessage:"Done"}),isDisabled:!1,onClick:I.ho}]})}function et(){return(0,B.jsx)(k.gv.Provider,{value:I.ho,children:(0,B.jsx)(T.sR,{header:(0,B.jsx)(tt,{}),footer:(0,B.jsx)(it,{}),showDismissButton:!1})})}function tt(){const e=(0,a.VK)((()=>{const{domain:e}=D.Z.state;return null==e?void 0:e.getDomainName()}),[]),t=(0,o.yK)((()=>({})),[]);return(0,B.jsx)(T.vI,{iconAndTitle:(0,B.jsx)(T.kC,{iconGroup:ge.F,title:(0,B.jsx)(l.FormattedMessage,{id:"sites.newCustomDomainValidatedSuccess.title",defaultMessage:"Successfully verified"})}),description:e?(0,B.jsx)(l.FormattedMessage,{id:"sites.success.subtitle",defaultMessage:"You can now use {domainName} to publish sites",values:{domainName:y.Bk({domainName:e,domainType:"custom"})}}):(0,B.jsx)(l.FormattedMessage,{id:"sites.success.subtitle.subtitleWithoutDomainName",defaultMessage:"You can now use the domain to publish sites"}),descriptionStyle:t.description})}function it(){return(0,B.jsx)(T.a6,{layout:"vertical",primaryButtons:[{buttonType:"outline",label:(0,B.jsx)(l.FormattedMessage,{id:"sites.newCustomDomainSuccess.close",defaultMessage:"Done"}),isDisabled:!1,onClick:I.ho}]})}function st(){const e=(0,a.VK)((()=>D.Z.getState()),[]);if(!e.isOpen)return null;const{step:t}=e,i="DomainValidating"!==t;return(0,B.jsx)(w.c,{isOpen:!0,onDismiss:I.ho,areaConstraint:{width:{type:"fixed",length:i?300:450}},render:()=>"DomainValidating"===t?(0,B.jsx)(qe,{}):"DomainPendingSuccess"===t?(0,B.jsx)(Ye,{}):"DomainValidatedSuccess"===t?(0,B.jsx)(et,{}):void(0,S.t1)(t),animateSizeTransition:!i})}const nt=[{key:"name",header:(0,B.jsx)(l.FormattedMessage,{id:"sites.domains.domainColumnHeader",defaultMessage:"Domain"}),style:{width:"41%"}},{key:"home-page",header:(0,B.jsx)(l.FormattedMessage,{id:"sites.domains.homePageColumnHeader",defaultMessage:"Homepage"}),style:{width:"35%"}},{key:"status",header:(0,B.jsx)(l.FormattedMessage,{id:"sites.domains.statusColumnHeader",defaultMessage:"Status"}),style:{width:"20%"}},{key:"edit",header:(0,B.jsx)(B.Fragment,{}),style:{width:"4%"}}];function at(e){const{spaceStore:t}=e,i=(0,n.O7)(),s=(0,a.VK)((()=>j.M9(i)),[i]),b=(0,o.yK)((()=>({header:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},title:{display:"flex",flexDirection:"column",flex:1},tableBox:{tableLayout:"fixed"}})),[]),M=function(e){const t=(0,a.VK)((()=>y.Vg(e)),[e]),i=(0,o.yK)((e=>({domainNameContainer:{display:"flex",alignItems:"center",gap:4},defaultDomainIcon:{height:12,width:12,color:e.lightIconColor}})),[]),s=(0,a.VK)((()=>{const s=e.canAdmin();return t.map((t=>{const n=t.id,a=t.getDomainName(),o=t.getDomainStatus(),u=t.isDefault(),m=t.getPublicHomePage(),p=m?h.G.createChildStore(e,{table:r.iU,id:m}):void 0;return{key:a,columns:[(0,B.jsxs)("div",{style:i.domainNameContainer,children:[(0,B.jsx)(ne.Z,{spaceStore:e,domainId:t.id}),u?(0,B.jsx)(c.Z,{renderTooltip:()=>(0,B.jsx)(l.FormattedMessage,{id:"sites.domains.defaultDomainTooltip",defaultMessage:"Default domain"}),render:e=>(0,B.jsx)("div",{...e,children:(0,d.z)(i.defaultDomainIcon)}),placement:f.u.Bottom}):null]},`${n}`),(0,B.jsx)(Ne,{spaceId:e.id,domain:t,publicHomePageStore:p,disabled:!s},`${n}-home-page`),(0,B.jsx)(de,{domainStatus:o},`${n}-status`),(0,B.jsx)(se,{spaceId:e.id,domain:t,disabled:!s},`${n}-actions`)]}}))}),[e,t,i]);return s}(t),S=(0,a.VK)((()=>v.Z.getState().isOpen),[]),w=(0,a.VK)((()=>D.Z.getState().isOpen),[]),I=(0,a.VK)((()=>C.Z.getState().isOpen),[]);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(p.Z,{style:b.header,children:[(0,B.jsxs)("div",{style:b.title,children:[(0,B.jsx)(l.FormattedMessage,{id:"sites.domains.title",defaultMessage:"Domains"}),s?(0,B.jsxs)(m.gq,{gap:8,children:[(0,B.jsx)(u.Z,{isSmall:!0,children:(0,B.jsx)(l.FormattedMessage,{id:"sites.domains.captionForFreeTier",defaultMessage:"Pages published to the web will be live under the domain below. Get multiple domains"})}),(0,B.jsx)(x.Z,{subscriptionTier:s,analyticsName:"get_multiple_domains"})]}):(0,B.jsx)(u.Z,{isSmall:!0,children:(0,B.jsx)(l.FormattedMessage,{id:"sites.domains.captionForPaidTier",defaultMessage:"Pages published to the web will be live on one of these domains"})})]}),(0,B.jsx)(Ge,{spaceStore:t})]}),(0,B.jsx)(g.Z,{columns:nt,rows:M,tableStyle:b.tableBox}),S&&(0,B.jsx)(je,{}),w&&(0,B.jsx)(st,{}),I&&(0,B.jsx)(A,{})]})}},679956:(e,t,i)=>{i.d(t,{F:()=>s});const s=(0,i(745238).CZ)("checkmarkCircle",{default:{loader:()=>i.e(25055).then(i.bind(i,825055)),size:20},small:{loader:()=>i.e(23132).then(i.bind(i,123132)),size:16},mini:{loader:()=>i.e(87790).then(i.bind(i,587790)),size:14},large:{loader:()=>i.e(26031).then(i.bind(i,226031)),size:24}})},739263:(e,t,i)=>{i.d(t,{X:()=>s});const s=(0,i(745238).CZ)("pencilLine",{default:{loader:()=>i.e(80486).then(i.bind(i,780486)),size:20},small:{loader:()=>i.e(66635).then(i.bind(i,666635)),size:16},mini:{loader:()=>i.e(79693).then(i.bind(i,579693)),size:14},large:{loader:()=>i.e(47423).then(i.bind(i,147423)),size:24}})},84810:(e,t,i)=>{i.d(t,{h:()=>a});i(667294);var s=i(745238),n=i(785893);const a=(0,s.IU)("arrowSquarePath",{viewBox:"0 0 30 22",svg:(0,n.jsx)("path",{d:"M0.773438 8.39062C0.578125 8.19531 0.484375 7.96875 0.492188 7.71094C0.5 7.45312 0.605469 7.22656 0.808594 7.03125L4.75781 3.09375C5.14062 2.71875 5.53516 2.53125 5.94141 2.53125C6.35547 2.53125 6.75391 2.71875 7.13672 3.09375L11.0859 7.03125C11.2891 7.22656 11.3906 7.45312 11.3906 7.71094C11.3984 7.96875 11.3047 8.19531 11.1094 8.39062C10.9062 8.59375 10.6797 8.69141 10.4297 8.68359C10.1797 8.66797 9.95312 8.5625 9.75 8.36719L8.625 7.25391L6.87891 5.39062V18.1172C6.87891 18.7266 7.03516 19.1875 7.34766 19.5C7.66797 19.8047 8.12109 19.957 8.70703 19.957H18.2109C18.5469 19.957 18.8047 20.0391 18.9844 20.2031C19.1641 20.3672 19.2539 20.6016 19.2539 20.9062C19.2617 21.2031 19.1719 21.4336 18.9844 21.5977C18.8047 21.7617 18.5469 21.8438 18.2109 21.8438H8.67188C7.45312 21.8438 6.53516 21.5391 5.91797 20.9297C5.30078 20.3281 4.99219 19.4219 4.99219 18.2109V5.41406L3.25781 7.25391L2.13281 8.36719C1.9375 8.5625 1.71094 8.66797 1.45312 8.68359C1.20312 8.69141 0.976562 8.59375 0.773438 8.39062ZM10.7461 1.20703C10.7383 0.910156 10.8281 0.679688 11.0156 0.515625C11.2031 0.351562 11.4609 0.269531 11.7891 0.269531H21.3281C22.5547 0.269531 23.4727 0.574219 24.082 1.18359C24.6992 1.78516 25.0078 2.69141 25.0078 3.90234V16.6992L26.7422 14.8477L27.8672 13.7461C28.0703 13.5508 28.2969 13.4492 28.5469 13.4414C28.7969 13.4258 29.0234 13.5156 29.2266 13.7109C29.4219 13.9141 29.5156 14.1445 29.5078 14.4023C29.5 14.6523 29.3945 14.8789 29.1914 15.082L25.2539 19.0078C24.8711 19.3906 24.4727 19.582 24.0586 19.582C23.6445 19.582 23.2461 19.3906 22.8633 19.0078L18.9141 15.082C18.7109 14.8789 18.6055 14.6523 18.5977 14.4023C18.5977 14.1445 18.6953 13.9141 18.8906 13.7109C19.0938 13.5156 19.3203 13.4258 19.5703 13.4414C19.8203 13.4492 20.0469 13.5508 20.25 13.7461L21.375 14.8477L23.1211 16.7227V3.99609C23.1211 3.38672 22.9648 2.92969 22.6523 2.625C22.3398 2.3125 21.8906 2.15625 21.3047 2.15625H11.7891C11.4609 2.15625 11.207 2.07422 11.0273 1.91016C10.8477 1.74609 10.7539 1.51172 10.7461 1.20703Z"})})},780926:(e,t,i)=>{i.d(t,{z:()=>a});i(667294);var s=i(745238),n=i(785893);const a=(0,s.IU)("flag",{viewBox:"0 0 13 14",svg:(0,n.jsx)("path",{d:"M0.825195 13.8457C1.16699 13.8457 1.4541 13.5654 1.4541 13.2168V9.47754C1.63867 9.40918 2.21973 9.19727 3.10156 9.19727C5.59668 9.19727 7.25781 10.4414 9.66406 10.4414C10.7168 10.4414 11.1885 10.3115 11.7217 10.0654C12.207 9.84668 12.4941 9.4502 12.4941 8.82129V1.99219C12.4941 1.55469 12.1523 1.27441 11.6943 1.27441C11.3047 1.27441 10.6895 1.54102 9.58887 1.54102C7.20996 1.54102 5.52148 0.296875 3.0332 0.296875C1.99414 0.296875 1.5293 0.419922 0.975586 0.672852C0.49707 0.891602 0.196289 1.24707 0.196289 1.86914V13.2168C0.196289 13.5586 0.483398 13.8457 0.825195 13.8457ZM9.63672 9.16309C7.41504 9.16309 5.71289 7.92578 3.12207 7.92578C2.45215 7.92578 1.84375 8.00098 1.48145 8.14453V2.0332C1.59766 1.83496 2.11035 1.56836 3.05371 1.56836C5.38477 1.56836 7.09375 2.80566 9.56836 2.80566C10.2383 2.80566 10.792 2.73047 11.2158 2.61426V8.69824C11.0996 8.89648 10.5801 9.16309 9.63672 9.16309Z"})})}}]);