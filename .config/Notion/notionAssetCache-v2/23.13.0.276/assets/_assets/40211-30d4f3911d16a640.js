"use strict";(globalThis.webpackChunknotion_next=globalThis.webpackChunknotion_next||[]).push([[40211],{969098:(e,n,t)=>{t.d(n,{j:()=>d,o:()=>r});var r={};t.r(r),t.d(r,{showAsyncModal:()=>p,showAsyncModalComponent:()=>f,testOnly:()=>b});var o=t(667294),a=t(886628),s=t(749085);class i extends s.default{getInitialState(){return{asyncModals:[]}}}const c=new i;var l=t(785893);const d=o.memo((function(e){const{store:n=c}=e,t=(0,a.VK)((()=>n.state.asyncModals),[n]);return(0,l.jsx)(l.Fragment,{children:t.map((e=>{const{id:n,internalRenderModal:t,isOpen:r}=e,a=t(r);return(0,l.jsx)(o.Fragment,{children:a},n)}))})}));var u=t(471924);function p(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c;return new Promise(((t,r)=>{try{g({asyncModal:h({renderModal:e,promiseResolve:t,promiseReject:r,store:n}),store:n})}catch(o){r(o)}}))}function f(e){return p((n=>o.createElement(e,n)),arguments.length>1&&void 0!==arguments[1]?arguments[1]:c)}function g(e){const{asyncModal:n,store:t=c}=e;t.update((e=>({asyncModals:[...e.asyncModals,n]})))}function m(e){const{id:n,promiseResolve:t,store:r=c}=e;return e=>{const o=y({id:n,store:r});null!=o&&o.isOpen&&(x({id:n,store:r,update:{isOpen:!1}}),t(e))}}function C(e){const{id:n,promiseResolve:t,store:r=c}=e;return()=>{const e=y({id:n,store:r});null!=e&&e.isOpen&&(x({id:n,store:r,update:{isOpen:!1}}),t())}}function v(e){const{id:n,store:t=c}=e;return()=>{t.update((e=>({asyncModals:e.asyncModals.filter((e=>e.id!==n))})))}}function h(e){const{renderModal:n,promiseResolve:t,promiseReject:r,store:o=c}=e,a=u.Il(),s=v({id:a,store:o}),i=C({id:a,promiseResolve:t,store:o}),l=m({id:a,promiseResolve:t,store:o});return{id:a,internalRenderModal:e=>{try{return n({isOpen:e,onClosed:s,onDismiss:i,resolve:l})}catch(t){throw r(t),t}},isOpen:!0}}function y(e){const{id:n,store:t=c}=e;return t.state.asyncModals.find((e=>e.id===n))}function x(e){const{id:n,update:t,store:r=c}=e;r.update((e=>({asyncModals:e.asyncModals.map((e=>e.id!==n?e:{...e,...t}))})))}const b={addAsyncModal:g,createAsyncModal:h,createOnClosed:v,createOnDismiss:C,createResolve:m,getAsyncModal:y,updateAsyncModal:x}},99622:(e,n,t)=>{t.d(n,{g:()=>c,q:()=>i});var r=t(800480),o=t(886628),a=t(80444),s=t(88893);function i(e){return(0,o.VK)((()=>s.ff(e.state)),[e])}function c(){const e=(0,r.O7)(),n=(0,o.VK)((()=>{var e;return null===(e=a.default.state.currentSpaceStore)||void 0===e?void 0:e.id}),[]);return(0,o.VK)((()=>s.ro(e,n)),[e,n])}},71487:(e,n,t)=>{t.d(n,{AG:()=>l,an:()=>d,yY:()=>c});var r=t(709291),o=t(454642),a=t(547307),s=t(433929);const i=(0,r.defineMessages)({invalidCoupon:{id:"applyCoupon.error.invalidCoupon",defaultMessage:"Unable to apply the coupon to your account."}});async function c(e,n){const{customerId:t,offerType:r}=n,s=await o.getCustomerOffer(e,{customerId:t,newPlan:"downgrade_flow"===r?n.newPlan:void 0,offerType:r});if("failed"===s.type)a.showError(s);else{const e=s.data;if(e.offerType===r)return e.coupon}}async function l(e,n){const{customerId:t,coupon:r,offerType:c}=n;if(!r)return void a.showErrorMessage(s.default.formatMessage(i.invalidCoupon));const l=await o.applyCustomerOffer(e,{customerId:t,newPlan:"downgrade_flow"===c?n.newPlan:void 0,offerType:c,coupon:r});"failed"===l.type&&a.showError(l)}async function d(e){const{environment:n,spaceId:t}=e,r=await o.getCustomerOfferEligibility(n,{spaceId:t});return"failed"!==r.type&&r.data.isEligible}},44041:(e,n,t)=>{t.d(n,{y:()=>j});t(667294);var r=t(647425),o=t(709291),a=t(286572),s=t(547307),i=t(296994),c=t(433929),l=t(352533),d=t(80444),u=t(992083),p=t(739343),f=t(887199),g=t(735993),m=t(170060),C=t(88893),v=t(535057),h=t(288280),y=t(897630),x=t(864891),b=t(785893);async function j(e,n){var t;a.sA(e,{from:n.from,for_subscription_tier:n.for,addOnFeature:n.addOnFeature});if((0,v.QM)()&&["block_limit_sidebar","block_limit_settings","block_limit_banner"].includes(n.from)&&!n.addOnFeature){if(e.device.isMobileBrowser){const t=await i.FF.payments.load();return void(await t.plans.showPlans({environment:e,from:n.from}))}return(0,m.iZ)(e)?void(0,g.a)({openedFrom:n.from}):void u.Z.setState({open:!0,openedFrom:"upsell",currentTab:"plans",defaultSubtab:void 0,highlightedSetting:void 0})}if(!n.addOnFeature&&(0,r.QM)(n.for))return;const j=(0,l.S$)({environment:e})&&"personal"===n.for;if(e.device.isMobileNative){if("ai"===n.addOnFeature){const n=(0,l.Y2)({environment:e})?(0,b.jsx)(o.FormattedMessage,{id:"upsellActions.noIAPForAIWithExternalPurchaseOption",defaultMessage:"Your workspace does not have unlimited AI. Visit on desktop to purchase Notion AI and go unlimited."}):(0,b.jsx)(o.FormattedMessage,{id:"upsellActions.noIAPForAIWithoutExternalPurchaseOption",defaultMessage:"Your workspace does not have unlimited AI. Unfortunately, unlimited AI cannot be purchased on mobile."});return void s.showErrorMessage(n)}if(!j)return}const M=d.default.state.currentSpaceStore;if(!M)return;if(!M.canAdmin())return;await y.bi(e);const w=h.subscriptionDataStoreInstance.state;if(!w)return;if("unsubscribed_admin"!==w.type&&"subscribed_admin"!==w.type)return void(n.dontOpenPlansOnCancel||u.Z.setState({open:!0,openedFrom:"upsell",currentTab:"plans",defaultSubtab:void 0,highlightedSetting:void 0}));if(C.ri(w))return void s.showErrorMessage(c.default.formatMessage(f.k.paymentMethodUnverified));if(C.ff(w)){const e=(0,b.jsx)(o.FormattedMessage,{id:"upsellActions.referToSalesRep",defaultMessage:"This workspace is part of a managed account. Please contact your account representative to discuss any changes to your subscription."});return void s.showErrorMessage(e)}if(j)return void(e.mobileNative&&M.id&&e.mobileNative.openUpgradeModal(M.id));if("revenueCat"===(null===(t=w.customerData)||void 0===t?void 0:t.activeSubscriptionPlatform)){const e=(0,b.jsx)(o.FormattedMessage,{id:"upsellActions.switchPlanFromInAppPurchase",defaultMessage:"You're currently subscribed through an in-app purchase with Apple. To switch plans, cancel your subscription with Apple first."});return void s.showErrorMessage(e)}const S=C.XX(w);if(n.addOnFeature&&(0,p.Fk)(S)){const e=(0,b.jsx)(o.FormattedMessage,{id:"upsellActions.noAddOnPurchaseDuringFreeTrial",defaultMessage:"Unfortunately, additional {addOn, select, ai {AI responses} other {features}} cannot be purchased while a workspace is on a free trial.",values:{addOn:n.addOnFeature}});s.showErrorMessage(e)}else{if(S&&C.MM(w))return n.addOnFeature?void x.af({environment:e,from:n.from,view:"add_ons",addOnFeature:n.addOnFeature,billingInterval:S.interval,pageSection:n.pageSection}):void x.af({environment:e,from:n.from,view:"plans",temporarySubscriptionTier:n.for,billingInterval:S.interval,pageSection:n.pageSection});{const t=(0,m.px)(e,n.for)?"ai_fifty_percent":void 0;y.I0(e,{subscriptionTier:n.for,from:n.from,addOnFeature:n.addOnFeature,coupon:t,isTrial:n.isTrial,dismissMobilePlansModal:n.dismissMobilePlansModal})}}}},735993:(e,n,t)=>{t.d(n,{X:()=>i,a:()=>s});var r=t(471924),o=t(286572),a=t(868187);function s(e){const{openedFrom:n}=e,t=r.Il();a.Z.open({modalId:t,openedFrom:n})}function i(e,n){o.LY(e,{modal_id:n,modal_type:"contextual"}),a.Z.setState({open:!1})}},868187:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(749085);class o extends r.default{getInitialState(){return{open:!1}}open(e){this.setState({open:!0,...e})}}const a=new o},725823:(e,n,t)=>{t.d(n,{pQ:()=>r.p,eG:()=>o.e,Hy:()=>d,PL:()=>a.P,r:()=>u.r,tw:()=>p.t,h1:()=>f.h});t(184968);var r=t(696444),o=(t(288269),t(296935)),a=(t(338866),t(947098)),s=t(886628),i=t(80444),c=t(88893),l=t(535057);function d(e){return(0,s.VK)((()=>{const n=e.state;if(!n)return!1;const t=(0,l.zt)(),r=c.Nf({subscriptionData:n,spaceStore:i.default.state.currentSpaceStore}),o=c.wl(n),a=c.su(n);return r&&!o&&1===a&&("free"===t||"personal"===t)}),[e])}t(404135);var u=t(822387),p=t(574267),f=(t(154561),t(133218));t(303751)},288269:(e,n,t)=>{t.d(n,{T:()=>a});var r=t(886628),o=t(88893);function a(e){return(0,r.VK)((()=>o.AX(e.state)),[e])}},296935:(e,n,t)=>{t.d(n,{e:()=>s});var r=t(886628),o=t(80444),a=t(88893);function s(e){return(0,r.VK)((()=>a.Nf({subscriptionData:e.state,spaceStore:o.default.state.currentSpaceStore})),[e])}},404135:(e,n,t)=>{t.d(n,{m:()=>c});var r=t(667294),o=t(800480),a=t(886628),s=t(80444),i=t(71487);function c(){const e=(0,o.O7)(),[n,t]=(0,r.useState)(),c=(0,a.VK)((()=>{var e;return null===(e=s.default.state.currentSpaceStore)||void 0===e?void 0:e.getSpaceId()}),[]);return(0,r.useEffect)((()=>{!async function(){c&&t(await(0,i.an)({environment:e,spaceId:c}))}()}),[e,c]),n}},822387:(e,n,t)=>{t.d(n,{r:()=>a});var r=t(886628),o=t(88893);function a(e){return(0,r.VK)((()=>o.ri(e.state)),[e])}},574267:(e,n,t)=>{t.d(n,{t:()=>a});var r=t(886628),o=t(88893);function a(e){return(0,r.VK)((()=>o.YK(e.state)),[e])}},154561:(e,n,t)=>{t.d(n,{r:()=>a});var r=t(886628),o=t(88893);function a(e){return(0,r.VK)((()=>(0,o.AY)(e.state)),[e])}},133218:(e,n,t)=>{t.d(n,{h:()=>c});var r=t(667294),o=t(800480),a=t(886628),s=t(80444),i=t(622616);function c(){const e=(0,o.O7)(),n=(0,a.VK)((()=>{var e;return null===(e=s.default.state.currentSpaceStore)||void 0===e?void 0:e.id}),[]);(0,r.useEffect)((()=>{n&&(0,i.Zz)({environment:e,spaceId:n})}),[e,n])}},316388:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(886628),o=t(739343),a=t(88893),s=t(288280);function i(){return(0,r.VK)((()=>{const e=s.subscriptionDataStoreInstance.state,n=e&&(0,a.XX)(e);return(0,o.Fk)(n)}),[])}},439230:(e,n,t)=>{function r(e){return Boolean(null==e?void 0:e.canRead())}t.r(n),t.d(n,{PlansModalContent:()=>oe,PlansSidebarButton:()=>ye,canShowPlans:()=>r,showPlans:()=>he});var o=t(667294),a=t(800480),s=t(886628),i=t(181886),c=t(647425),l=t(91376),d=t(976940),u=t(100859),p=t(897630),f=t(705398),g=t(88893),m=t(535057),C=t(288269),v=t(296935),h=t(822387),y=t(133218),x=t(333493),b=t(288280),j=t(123695);var M=t(542165),w=t(996130),S=t(665543),k=t(724405),I=t(709291),L=t(137810),O=t(689024),F=t(164921),P=t(353578),T=t(894919),A=t(401898),V=t(707124),U=t(863296),Z=t(158297),B=t(785893);function E(e){const{ctaType:n,asyncPrice:t,priceStore:r,onClick:o}=e,a=(0,I.useIntl)(),i=(0,s.VK)((()=>r.selectedCurrencyCode),[r]);if(!t.isLoaded)return null;const c=t.result?t.result.getMonthlyUnitCost().toMoneyValue():{amount:0,currencyCode:i};return(0,B.jsxs)(O.jX,{direction:"row",gap:"auto",align:"center",children:[(0,B.jsx)(V.q,{styleName:"iOS/Caption-12px/Regular",colorName:"primary",children:a.formatMessage(P.j2.ctaPrice,{money:(0,B.jsx)(T.W,{cost:c,trailingZeroDisplay:"stripIfInteger",intl:a})})}),o?(0,B.jsx)(z,{ctaType:n,onClick:o}):null]})}function z(e){const{ctaType:n,onClick:t}=e,r=(0,I.useIntl)();switch(n){case"upgrade":return(0,B.jsx)(Z.Z,{onClick:t,children:r.formatMessage(P.j2.upgrade)});case"downgrade":return(0,B.jsx)(U.Z,{onClick:t,children:r.formatMessage(P.j2.restrictions)});case"equal":case void 0:return null;default:(0,A.t1)(n)}}var X=t(875849),K=t(733941);function N(e){const{caption:n,productImage:t,planName:r}=e;return(0,B.jsxs)(O.jX,{gap:10,children:[t,(0,B.jsxs)(O.jX,{gap:2,children:[(0,B.jsx)(V.q,{styleName:"iOS/Title-3/Bold",children:r}),n?(0,B.jsx)(V.q,{styleName:"iOS/Callout-16px/Regular",colorName:"secondary",children:n}):null]})]})}var _=t(581137),H=t(698519);function R(e){const{label:n}=e,t=(0,k.yK)((e=>({icon:{height:18,width:18,fill:e.icon.tertiary}})),[]);return(0,B.jsxs)(O.jX,{direction:"row",align:"center-left",gap:6,children:[(0,H.k)(t.icon),(0,B.jsx)(V.q,{styleName:"iOS/Callout-16px/Regular",colorName:"primary",children:n})]})}function D(e){const{product:n}=e,t=(0,I.useIntl)(),r=P.gU[n],o=_.LU[n].highlights;return r&&o?(0,B.jsxs)(O.jX,{gap:8,children:[(0,B.jsx)(V.q,{styleName:"iOS/Subhead-15px/Medium-Compact",colorName:"secondary",children:t.formatMessage(r)}),(0,B.jsx)(O.jX,{gap:4,children:o.map((e=>(0,B.jsx)(R,{label:t.formatMessage(e)},e.id)))})]}):null}function q(e){const{product:n}=e,t=(0,I.useIntl)(),r=P.or[n];return(0,B.jsxs)(O.jX,{gap:20,children:[(0,B.jsx)(N,{planName:t.formatMessage(K.a[n]),caption:r?t.formatMessage(r):void 0,productImage:(0,B.jsx)(X.q,{product:n})}),(0,B.jsx)(D,{product:n})]})}function Y(e){const{ctaType:n,asyncPrice:t,subscriptionTier:r,priceStore:o,onClick:a}=e,s=(0,k.yK)((e=>({card:{borderRadius:16,border:`1px solid ${e.stroke.deemphasized}`,background:e.cardContentBackground},footer:{borderTop:`0.5px solid ${e.stroke.deemphasized}`}})),[]),c=(0,i.KE)(r);return(0,B.jsxs)(O.jX,{gap:2,style:s.card,children:[(0,B.jsx)(O.jX,{gap:20,padding:16,children:(0,B.jsx)(q,{product:c})}),t?(0,B.jsx)(O.jX,{direction:"row",gap:8,padding:16,style:s.footer,children:(0,B.jsx)(E,{asyncPrice:t,ctaType:n,onClick:a,priceStore:o})}):null]})}var W=t(91315);function $(){const e=(0,I.useIntl)(),n=(0,k.yK)((e=>({icon:{width:16,color:e.icon.purple}})),[]);return(0,B.jsxs)(O.jX,{gap:13,children:[(0,B.jsx)(V.q,{styleName:"iOS/Subhead-15px/Medium-Compact",colorName:"secondary",children:e.formatMessage(P.j2.aiAddOnLabel)}),(0,B.jsxs)(O.jX,{direction:"row",gap:6,children:[(0,W.r)(n.icon),(0,B.jsx)(V.q,{styleName:"iOS/Callout-16px/Regular",children:e.formatMessage(P.j2.aiAddedToPlan)})]})]})}var Q=t(385248);function G(e){const{buttonLabel:n,label:t,onClick:r,progressBarColors:o,usageLabel:a,usage:s}=e,i=s.usedCount/s.totalCount*100;return(0,B.jsxs)(O.jX,{gap:13,children:[(0,B.jsx)(V.q,{styleName:"iOS/Subhead-15px/Medium-Compact",colorName:"secondary",children:t}),(0,B.jsxs)(O.jX,{gap:12,children:[(0,B.jsxs)(O.jX,{gap:8,children:[(0,B.jsx)(Q.k,{percentage:i,height:8,filledColor:o.filled,unfilledColor:o.unfilled}),(0,B.jsx)(V.q,{styleName:"iOS/Callout-16px/Regular",children:a})]}),r?(0,B.jsx)(U.Z,{onClick:r,children:n}):null]})]})}function J(e){const{usage:n,onClick:t}=e,r=(0,I.useIntl)(),o=function(){const e=(0,k.Fg)(),n="dark"===e.mode?e.accentColors.gray[200]:e.accentColors.gray[50];return{filled:e.icon.purple,unfilled:n}}();return(0,B.jsx)(G,{buttonLabel:r.formatMessage(P.j2.addToPlan),label:r.formatMessage(P.j2.aiAddOnLabel),onClick:t,progressBarColors:o,usage:n,usageLabel:r.formatMessage(P.j2.aiAddOnUsage,{usedCount:n.usedCount,totalCount:n.totalCount})})}function ee(e){const{onClick:n,usage:t}=e,r=(0,I.useIntl)(),o=function(){const e=(0,k.Fg)(),n="dark"===e.mode?e.accentColors.gray[200]:e.accentColors.gray[50];return{filled:e.accentColors.gray[900],unfilled:n}}();return(0,B.jsx)(G,{buttonLabel:r.formatMessage(P.j2.upgrade),label:r.formatMessage(P.j2.teamBlocksLabel),onClick:n,progressBarColors:o,usage:t,usageLabel:r.formatMessage(P.j2.teamBlocksUsage,{usedCount:t.usedCount,totalCount:t.totalCount})})}function ne(e){const{subscriptionTier:n,aiAvailability:t,teamBlocksAvailability:r}=e,o=(0,k.yK)((e=>({card:{borderRadius:16,border:`1px solid ${e.stroke.deemphasized}`,background:e.cardContentBackground}})),[]),a=(0,i.KE)(n);return(0,B.jsx)(O.jX,{gap:2,style:o.card,children:(0,B.jsxs)(O.jX,{gap:31,padding:16,children:[(0,B.jsx)(q,{product:a}),r?(0,B.jsx)(ee,{usage:r.usage,onClick:r.onClickUpgradePlan}):null,"limited"===(null==t?void 0:t.type)?(0,B.jsx)(J,{usage:t.usage,onClick:t.onClickAddAI}):null,"unlimited"===(null==t?void 0:t.type)?(0,B.jsx)($,{}):null]})})}function te(e){const{title:n,children:t}=e;return(0,B.jsxs)(O.jX,{gap:10,children:[(0,B.jsx)(V.q,{styleName:"iOS/Subhead-15px/Medium-Compact",colorName:"secondary",children:n}),(0,B.jsx)(O.jX,{gap:16,children:t})]})}function re(e){const{currentPlan:n,availableTiers:t}=e,r=(0,I.useIntl)(),a=(0,k.yK)((e=>({wrapper:{background:e.surface.wash},allPlansLink:{display:"flex",color:"dark"===e.mode?e.accentColors.gray[900]:e.accentColors.gray[400],fontSize:14,fontWeight:L.Z.fontWeight.regular,marginBottom:16,padding:4,marginLeft:-4}})),[]),[s,i]=(0,o.useState)(!1),l=(0,o.useCallback)((()=>{i((e=>!e))}),[i]),d=(0,o.useMemo)((()=>t.filter((e=>"upgrade"===(0,c.NY)({oldTier:n.subscriptionTier,newTier:e.subscriptionTier})))),[t,n.subscriptionTier]),u=t.length>d.length,p=s?t:d;return(0,B.jsxs)(O.jX,{gap:33,padding:"32px 16px 16px 16px",style:a.wrapper,children:[(0,B.jsx)(te,{title:r.formatMessage(P.j2.activePlan),children:(0,B.jsx)(ne,{...n})}),(0,B.jsxs)(te,{title:r.formatMessage(P.j2.otherPlans),children:[u?(0,B.jsx)(F.Z,{style:a.allPlansLink,onClick:l,children:r.formatMessage(P.j2.seeAllPlans)}):null,p.map(((e,n)=>(0,B.jsx)(Y,{...e},n)))]})]})}function oe(){(0,y.h)();const{isMobile:e}=(0,a.Fy)();return e?(0,B.jsx)(ae,{}):(0,B.jsx)(S.Y,{})}function ae(){const e=b.subscriptionDataStoreInstance,n=(0,o.useContext)(d.gv),[t,r]=o.useState(!1),y=(0,a.O7)(),S=(0,u.r)(),k=(0,s.VK)((()=>(0,m.zt)()),[]),I=(0,C.T)(e),L=(0,s.VK)((()=>{var n;return null===(n=(0,g.XX)(e.state))||void 0===n?void 0:n.periodEnd}),[e]),O=i.$3.filter((e=>e!==k)),F=(0,w.O)({billingInterval:I,priceStore:x.Z,products:O}),P=(0,v.e)(e),T=(0,h.r)(e),A=P&&!T,V=(0,M.H)({billingInterval:I,canClick:A,subscriptionDataStore:e,source:"mobile_plans",onDismiss:n}),U=function(e){const{canClick:n,subscriptionDataStore:t,currentTier:r}=e,o=(0,a.O7)(),i=(0,u.r)(),l=(0,s.VK)((()=>function(e,n,t){return(0,g.qX)()>1&&(0,c.QM)(t)&&n?{showBlockUsage:!0,blockUsage:(0,g.Lz)(e,n),blockUsagePercent:+(100*(0,g.zl)(e,n)).toFixed(0)}:{showBlockUsage:!1,blockUsage:0,blockUsagePercent:0}}(o,t.state,r)),[o,t,r]),d=(0,c.v5)();if(!l||!i||!l.showBlockUsage)return;const f=n?()=>{const e=t.state;e&&(0,p.sv)({environment:o,product:"plus",data:e,spaceStore:i,from:"mobile_plans"})}:void 0;return{usage:{usedCount:l.blockUsage,totalCount:d},onClickUpgradePlan:f}}({canClick:A,currentTier:k,subscriptionDataStore:e});return S&&V?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(re,{currentPlan:{subscriptionTier:k,aiAvailability:V,teamBlocksAvailability:U},availableTiers:O.map((n=>{const t=(0,c.NY)({oldTier:k,newTier:n});return{subscriptionTier:n,priceStore:x.Z,ctaType:t,asyncPrice:F[n],onClick:A?()=>{const o=e.state;o&&("downgrade"!==t?(0,p.sv)({environment:y,product:n,data:o,spaceStore:S,from:"mobile_plans"}):r(!0))}:void 0}}))}),t?(0,B.jsx)(f.v,{currentProduct:(0,i.KE)(k),billingInterval:I,currentPeriodEnd:L,isOpen:t,onClose:()=>r(!1),onClickManageGuests:()=>{l.r$({openedFrom:"share_menu",currentTab:"members"})},onRequestDowngrade:p.sv,onRequestUpgrade:j.l}):null]}):null}var se=t(505517),ie=t(172263),ce=t(314694),le=t(574267),de=t(286572),ue=t(969098),pe=t(699884),fe=t(845800),ge=t(296994);const me=(0,t(277907).kF)(ge.FF.payments,(e=>e.PlansModalContent));function Ce(e){const{isOpen:n,onClosed:t,onDismiss:r}=e;return(0,B.jsx)(pe.c,{isOpen:n,onClosed:t,onDismiss:r,areaConstraint:{width:{type:"min",length:1e3},height:{type:"unlimited",scroll:"allow"}},render:e=>{let{displayMode:n}=e;return(0,B.jsx)(d.a5,{displayMode:n,title:(0,B.jsx)(I.FormattedMessage,{defaultMessage:"Plans",id:"subscription.plans.title"}),children:(0,B.jsx)(me,{renderLoading:e=>(0,B.jsx)(fe.F,{shouldShowSpinner:e})})})}})}let ve=!1;async function he(e){const{environment:n,from:t}=e;if(!ve){ve=!0;try{de.Qr(n,{from:t}),await ue.o.showAsyncModalComponent(Ce),de.xo(n)}finally{ve=!1}}}function ye(){const e=(0,k.yK)((e=>({icon:{fill:e.mediumIconColor,width:16}})),[]),n=(0,a.O7)(),t=(0,le.t)(b.subscriptionDataStoreInstance),i=function(){const e=(0,u.r)();return(0,s.VK)((()=>r(e)),[e])}(),c=t?(0,se.q)(e.icon):(0,ie._)(e.icon),l=(0,o.useCallback)((()=>{he({environment:n,from:"mobile_sidebar"})}),[n]);return i?(0,B.jsx)(F.Z,{mobileFeedback:!0,onClick:l,children:(0,B.jsx)(ce.Z,{left:c,disableMobileBorder:!0,children:t?(0,B.jsx)(I.FormattedMessage,{id:"plansSidebarButton.plans.title",defaultMessage:"Plans"}):(0,B.jsx)(I.FormattedMessage,{id:"plansSidebarButton.upgrade.title",defaultMessage:"Upgrade"})})}):null}},739343:(e,n,t)=>{t.d(n,{Fk:()=>i,U6:()=>l,nx:()=>c});var r=t(730120),o=t(313991),a=t(407057),s=t(95477);function i(e){return!(null==e||!e.trialEnd)&&e.trialEnd>=r.ou.now().toSeconds()}function c(e){const n=function(e){if(!i(e))return;const n=1e3*(null==e?void 0:e.trialEnd);return null!=e&&e.periodEnd&&e.periodEnd>=r.ou.now().toSeconds()&&e.periodEnd<n?e.periodEnd:n}(e);return n?(0,a.Yx)(n,"long",o.SP):void 0}function l(e){return e?s.default.trials[e.id].duration:s.default.trials.default.duration}},114581:(e,n,t)=>{t.d(n,{h:()=>r});const r=(0,t(745238).CZ)("exclamationMarkTriangle",{default:{loader:()=>t.e(15187).then(t.bind(t,15187)),size:20},small:{loader:()=>t.e(79250).then(t.bind(t,979250)),size:16},mini:{loader:()=>t.e(93173).then(t.bind(t,793173)),size:14},large:{loader:()=>t.e(43339).then(t.bind(t,343339)),size:24}})},240745:(e,n,t)=>{t.d(n,{M:()=>a});t(667294);var r=t(745238),o=t(785893);const a=(0,r.IU)("arrowDown",{viewBox:"0 0 16 16",svg:(0,o.jsx)("path",{d:"M8 1.57715C7.5625 1.57715 7.25488 1.88477 7.25488 2.33594V10.8262L7.30957 12.3027L5.50488 10.2861L3.95312 8.75488C3.82324 8.625 3.63184 8.53613 3.42676 8.53613C3.0166 8.53613 2.70898 8.85059 2.70898 9.26758C2.70898 9.46582 2.78418 9.64355 2.94141 9.80762L7.44629 14.3193C7.59668 14.4697 7.79492 14.5586 8 14.5586C8.20508 14.5586 8.40332 14.4697 8.55371 14.3193L13.0586 9.80762C13.2158 9.64355 13.291 9.46582 13.291 9.26758C13.291 8.85059 12.9902 8.53613 12.5801 8.53613C12.3682 8.53613 12.1836 8.625 12.0469 8.75488L10.4951 10.2861L8.69043 12.2959L8.74512 10.8262V2.33594C8.74512 1.88477 8.44434 1.57715 8 1.57715Z"})})},80721:(e,n,t)=>{t.d(n,{W:()=>a});t(667294);var r=t(745238),o=t(785893);const a=(0,r.IU)("arrowLeftThick",{viewBox:"0 0 16 16",svg:(0,o.jsx)("path",{d:"M1.54004 8.05762C1.54004 8.2627 1.62891 8.46094 1.78613 8.61133L6.29102 13.1162C6.45508 13.2734 6.63965 13.3486 6.82422 13.3486C7.25488 13.3486 7.5625 13.041 7.5625 12.6309C7.5625 12.4189 7.48047 12.2344 7.34375 12.1045L5.8125 10.5527L3.78906 8.70703L5.38867 8.80273H13.7012C14.1455 8.80273 14.46 8.49512 14.46 8.05762C14.46 7.61328 14.1455 7.3125 13.7012 7.3125H5.38867L3.7959 7.4082L5.8125 5.5625L7.34375 4.01074C7.48047 3.87402 7.5625 3.68945 7.5625 3.47754C7.5625 3.06738 7.25488 2.7666 6.82422 2.7666C6.63965 2.7666 6.45508 2.83496 6.27734 3.00586L1.78613 7.50391C1.62891 7.64746 1.54004 7.85254 1.54004 8.05762Z"})})},732566:(e,n,t)=>{t.d(n,{k:()=>a});t(667294);var r=t(745238),o=t(785893);const a=(0,r.IU)("arrowRightSmaller",{viewBox:"0 0 16 16",svg:(0,o.jsx)("path",{d:"M15.383 8.352a.877.877 0 01-.274.64l-5.156 5.14a.864.864 0 01-.617.266.831.831 0 01-.602-.234.795.795 0 01-.234-.586c0-.12.02-.232.063-.336a.912.912 0 01.187-.273l1.75-1.766 2.914-2.656.274.5-2.711.156H1.484c-.26 0-.471-.078-.632-.234a.851.851 0 01-.235-.617c0-.256.078-.461.235-.618a.856.856 0 01.632-.242h9.493l2.71.164-.273.508L10.5 5.5 8.75 3.727a.946.946 0 01-.188-.266.917.917 0 01-.062-.344c0-.234.078-.43.234-.586a.831.831 0 01.602-.234.79.79 0 01.328.07c.104.047.203.117.297.211l5.148 5.133a.877.877 0 01.274.64z"})})},908597:(e,n,t)=>{t.d(n,{Z:()=>a});t(667294);var r=t(745238),o=t(785893);const a=(0,r.IU)("arrowUp",{viewBox:"0 0 16 16",svg:(0,o.jsx)("path",{d:"M8 14.5586C8.44434 14.5586 8.74512 14.251 8.74512 13.7998V5.30957L8.69043 3.83984L10.4951 5.84961L12.0469 7.38086C12.1836 7.51074 12.3682 7.59961 12.5801 7.59961C12.9902 7.59961 13.291 7.28516 13.291 6.86816C13.291 6.66992 13.2158 6.49219 13.0586 6.32812L8.55371 1.81641C8.40332 1.66602 8.20508 1.57715 8 1.57715C7.79492 1.57715 7.59668 1.66602 7.44629 1.81641L2.94141 6.32812C2.78418 6.49219 2.70898 6.66992 2.70898 6.86816C2.70898 7.28516 3.0166 7.59961 3.42676 7.59961C3.63184 7.59961 3.82324 7.51074 3.95312 7.38086L5.50488 5.84961L7.30957 3.83301L7.25488 5.30957V13.7998C7.25488 14.251 7.5625 14.5586 8 14.5586Z"})})},964275:(e,n,t)=>{t.d(n,{D:()=>a});t(667294);var r=t(745238),o=t(785893);const a=(0,r.IU)("closeSmall",{viewBox:"0 0 16 16",svg:(0,o.jsx)("path",{d:"M3.732 11.052c-.303.308-.32.877.011 1.202.33.33.894.32 1.203.011L8 9.21l3.05 3.05c.32.325.872.32 1.197-.011a.857.857 0 00.01-1.197L9.21 8.002l3.05-3.056a.857.857 0 00-.01-1.197.857.857 0 00-1.198-.01L8 6.788 4.946 3.732c-.31-.303-.878-.32-1.203.01-.325.331-.314.895-.01 1.203l3.055 3.056-3.056 3.05z"})})},747409:(e,n,t)=>{t.d(n,{N:()=>a});t(667294);var r=t(745238),o=t(785893);const a=(0,r.IU)("ledger",{viewBox:"0 0 16 16",svg:(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("path",{d:"M.706 4.113c0 .41.273.677.697.677h1.778v8.388c0 1.435.704 2.146 2.14 2.146h7.813c1.299 0 2.153-.889 2.153-2.235v-1.86c0-.41-.273-.676-.697-.676h-.567V2.95c0-1.429-.711-2.146-2.12-2.146H2.497c-1.066 0-1.79.724-1.79 1.866v1.442Zm3.575 9.072V2.67c0-.28-.027-.54-.082-.766h7.643c.71 0 1.08.376 1.08 1.06v7.588H7.05c-.424 0-.704.266-.704.676v1.956c0 .622-.431 1.039-1.026 1.039-.608 0-1.039-.438-1.039-1.04ZM1.807 3.689V2.671c0-.479.294-.766.69-.766.41 0 .684.287.684.766v1.018H1.807ZM6.25 4.797h4.703a.413.413 0 0 0 .424-.424.412.412 0 0 0-.424-.417H6.25a.418.418 0 0 0-.43.417c0 .24.184.424.43.424Zm0 2.386h2.454a.406.406 0 0 0 .424-.41c0-.24-.178-.431-.424-.431H6.25a.425.425 0 0 0-.43.43c0 .233.184.41.43.41Zm.93 7.04c.17-.3.266-.67.266-1.114v-1.456h6.74v1.436c0 .677-.423 1.135-1.052 1.135H7.18Z"})})})},788507:(e,n,t)=>{t.d(n,{I:()=>a});t(667294);var r=t(745238),o=t(785893);const a=(0,r.IU)("openTeamSearch",{viewBox:"0 0 16 14",svg:(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("path",{d:"M9.506 13.342h4.447c.348 0 .621-.11.82-.328.2-.22.3-.516.3-.891V4.852c0-.375-.1-.67-.3-.885-.199-.219-.472-.328-.82-.328H9.922v1.136h3.709c.101 0 .178.026.228.077.051.05.076.127.076.228v6.815c0 .101-.025.177-.076.228-.05.05-.127.076-.228.076H9.506v1.143zm2.28-6.358h.925c.129 0 .193-.064.193-.193v-.896c0-.133-.064-.2-.193-.2h-.926c-.125 0-.187.067-.187.2v.896c0 .129.062.193.187.193zm0 2.168h.925c.129 0 .193-.066.193-.199v-.896c0-.133-.064-.2-.193-.2h-.926c-.125 0-.187.067-.187.2v.896c0 .133.062.2.187.2zm0 2.163h.925c.129 0 .193-.067.193-.2v-.896c0-.13-.064-.194-.193-.194h-.926c-.125 0-.187.065-.187.194v.896c0 .133.062.2.187.2zm-10.864.808c0 .375.1.672.299.89.199.22.474.329.826.329H9.44c.348 0 .621-.11.82-.328.204-.22.305-.516.305-.891V1.928c0-.38-.101-.676-.304-.89-.2-.22-.473-.329-.82-.329H2.046c-.352 0-.627.11-.826.328-.2.215-.3.512-.3.89v10.196zm1.142-.228V2.162c0-.105.026-.183.077-.234.05-.051.127-.076.228-.076h6.75c.102 0 .178.025.229.076.05.05.076.129.076.234v9.733c0 .101-.026.177-.076.228-.051.05-.127.076-.229.076H2.37c-.101 0-.178-.025-.228-.076-.051-.05-.077-.127-.077-.228zm1.588.85h.891v-1.946c0-.117.06-.176.182-.176h2.039c.12 0 .181.059.181.176v1.945h.89V10.5c0-.25-.058-.435-.175-.557-.117-.125-.295-.187-.533-.187H4.36c-.238 0-.416.062-.533.187-.117.122-.176.307-.176.557v2.244zm.17-8.362h1.12c.156 0 .234-.078.234-.235v-1.09c0-.156-.078-.234-.235-.234H3.822c-.148 0-.222.078-.222.235v1.09c0 .156.074.234.222.234zm2.719 0h1.12c.152 0 .228-.078.228-.235v-1.09c0-.156-.077-.234-.229-.234H6.541c-.152 0-.229.078-.229.235v1.09c0 .156.077.234.229.234zM3.822 6.627h1.12c.156 0 .234-.078.234-.234V5.309c0-.157-.078-.235-.235-.235H3.822c-.148 0-.222.078-.222.235v1.084c0 .156.074.234.222.234zm2.719 0h1.12c.152 0 .228-.078.228-.234V5.309c0-.157-.077-.235-.229-.235H6.541c-.152 0-.229.078-.229.235v1.084c0 .156.077.234.229.234zm-2.719 2.25h1.12c.156 0 .234-.08.234-.24V7.553c0-.157-.078-.235-.235-.235H3.822c-.148 0-.222.078-.222.235v1.084c0 .16.074.24.222.24zm2.719 0h1.12c.152 0 .228-.08.228-.24V7.553c0-.157-.077-.235-.229-.235H6.541c-.152 0-.229.078-.229.235v1.084c0 .16.077.24.229.24z"})})})},226939:(e,n,t)=>{t.d(n,{c:()=>a});t(667294);var r=t(745238),o=t(785893);const a=(0,r.IU)("pageErrorUnsafe",{viewBox:"0 0 72 72",svg:(0,o.jsx)("path",{d:"M36 68C36.5 68 37.2812 67.8125 38.0625 67.4062C55.8438 58.0938 61.5625 53.4375 61.5625 42.2188V18.6562C61.5625 15.4375 60.1875 14.4062 57.5625 13.3125C53.9062 11.8125 42.2188 7.5625 38.5938 6.3125C37.75 6.03125 36.875 5.875 36 5.875C35.125 5.875 34.25 6.0625 33.4375 6.3125C29.7812 7.5 18.0938 11.8438 14.4375 13.3125C11.8438 14.375 10.4375 15.4375 10.4375 18.6562V42.2188C10.4375 53.4375 16.4688 57.5625 33.9375 67.4062C34.75 67.8438 35.5 68 36 68ZM36 41.5938C34.375 41.5938 33.5 40.6875 33.4688 39.0312L33.0312 22C33 20.3438 34.2188 19.1562 35.9688 19.1562C37.6875 19.1562 38.9688 20.375 38.9375 22.0312L38.5 39.0312C38.4688 40.7188 37.5625 41.5938 36 41.5938ZM36 52.0625C34.125 52.0625 32.5 50.5625 32.5 48.7188C32.5 46.875 34.0938 45.3438 36 45.3438C37.9062 45.3438 39.5 46.8438 39.5 48.7188C39.5 50.5938 37.875 52.0625 36 52.0625Z"})})},128495:(e,n,t)=>{t.d(n,{v:()=>a});t(667294);var r=t(745238),o=t(785893);const a=(0,r.IU)("personCircle",{viewBox:"0 0 18 17",svg:(0,o.jsx)("path",{d:"M8.99219 16.6797C10.0964 16.6797 11.1354 16.4688 12.1094 16.0469C13.0833 15.6302 13.9427 15.0495 14.6875 14.3047C15.4323 13.5599 16.0156 12.7005 16.4375 11.7266C16.8594 10.7526 17.0703 9.71354 17.0703 8.60938C17.0703 7.50521 16.8594 6.46615 16.4375 5.49219C16.0156 4.51823 15.4323 3.66146 14.6875 2.92188C13.9427 2.17708 13.0833 1.59375 12.1094 1.17188C11.1354 0.75 10.0938 0.539062 8.98438 0.539062C7.88021 0.539062 6.84115 0.75 5.86719 1.17188C4.89844 1.59375 4.04167 2.17708 3.29688 2.92188C2.55729 3.66146 1.97656 4.51823 1.55469 5.49219C1.13281 6.46615 0.921875 7.50521 0.921875 8.60938C0.921875 9.71354 1.13281 10.7526 1.55469 11.7266C1.97656 12.7005 2.55729 13.5599 3.29688 14.3047C4.04167 15.0495 4.90104 15.6302 5.875 16.0469C6.84896 16.4688 7.88802 16.6797 8.99219 16.6797ZM8.99219 15.0859C8.09635 15.0859 7.25521 14.9193 6.46875 14.5859C5.6875 14.2526 5 13.7891 4.40625 13.1953C3.81771 12.6016 3.35677 11.9141 3.02344 11.1328C2.6901 10.3516 2.52344 9.51042 2.52344 8.60938C2.52344 7.71354 2.6901 6.875 3.02344 6.09375C3.35677 5.30729 3.81771 4.61719 4.40625 4.02344C4.99479 3.42969 5.67969 2.96615 6.46094 2.63281C7.2474 2.29948 8.08854 2.13281 8.98438 2.13281C9.88542 2.13281 10.7266 2.29948 11.5078 2.63281C12.2943 2.96615 12.9844 3.42969 13.5781 4.02344C14.1719 4.61719 14.6354 5.30729 14.9688 6.09375C15.3021 6.875 15.4688 7.71354 15.4688 8.60938C15.4688 9.51042 15.3021 10.3516 14.9688 11.1328C14.6354 11.9141 14.1719 12.6016 13.5781 13.1953C12.9844 13.7891 12.2969 14.2526 11.5156 14.5859C10.7344 14.9193 9.89323 15.0859 8.99219 15.0859ZM14.2031 13.7656L14.1719 13.6328C14.0052 13.2474 13.6849 12.8776 13.2109 12.5234C12.7422 12.1641 12.1484 11.8724 11.4297 11.6484C10.7161 11.4193 9.90365 11.3047 8.99219 11.3047C8.09115 11.3047 7.28125 11.4193 6.5625 11.6484C5.84375 11.8724 5.2474 12.1641 4.77344 12.5234C4.30469 12.8776 3.98698 13.2448 3.82031 13.625L3.78906 13.7656C4.27865 14.2188 4.83333 14.599 5.45312 14.9062C6.07292 15.2188 6.69271 15.4557 7.3125 15.6172C7.9375 15.7786 8.4974 15.8594 8.99219 15.8594C9.49219 15.8594 10.0521 15.7786 10.6719 15.6172C11.2917 15.4557 11.9115 15.2188 12.5312 14.9062C13.151 14.599 13.7083 14.2188 14.2031 13.7656ZM8.99219 10.0156C9.4974 10.0208 9.95312 9.89583 10.3594 9.64062C10.7656 9.38021 11.0885 9.02604 11.3281 8.57812C11.5677 8.125 11.6875 7.61979 11.6875 7.0625C11.6875 6.54167 11.5651 6.0625 11.3203 5.625C11.0807 5.18229 10.7578 4.82812 10.3516 4.5625C9.95052 4.29688 9.4974 4.16406 8.99219 4.16406C8.49219 4.16406 8.03646 4.29688 7.625 4.5625C7.21875 4.82812 6.89583 5.18229 6.65625 5.625C6.41667 6.0625 6.29948 6.54167 6.30469 7.0625C6.3099 7.61979 6.42969 8.1224 6.66406 8.57031C6.90365 9.01302 7.22656 9.36458 7.63281 9.625C8.03906 9.88021 8.49219 10.0104 8.99219 10.0156Z"})})},172263:(e,n,t)=>{t.d(n,{_:()=>a});t(667294);var r=t(745238),o=t(785893);const a=(0,r.IU)("settingsUpgrade",{viewBox:"0 0 20 20",svg:(0,o.jsx)("path",{d:"M9.969 17.938c4.36 0 7.969-3.618 7.969-7.97C17.938 5.61 14.32 2 9.96 2 5.609 2 2 5.61 2 9.969c0 4.351 3.617 7.969 7.969 7.969zm0-1.329a6.609 6.609 0 01-6.633-6.64 6.602 6.602 0 016.625-6.64 6.627 6.627 0 016.648 6.64 6.61 6.61 0 01-6.64 6.64zm0-2.734a.562.562 0 00.586-.586V9.383l-.063-1.656.797.945.922.937a.52.52 0 00.414.172c.32 0 .57-.242.57-.562a.566.566 0 00-.164-.406L10.43 6.219c-.149-.149-.29-.227-.461-.227-.164 0-.297.07-.453.227l-2.61 2.593a.555.555 0 00-.148.407c0 .32.242.562.562.562a.572.572 0 00.414-.172l.93-.937.781-.938-.062 1.649v3.906c0 .344.25.586.586.586z"})})},750063:(e,n,t)=>{t.d(n,{X:()=>a});t(667294);var r=t(745238),o=t(785893);const a=(0,r.IU)("verificationCheck",{viewBox:"0 0 6 7",svg:(0,o.jsx)("path",{d:"M2.84245 6.11619C2.71116 6.30644 2.53392 6.40156 2.31072 6.40156C2.20131 6.40156 2.10066 6.37881 2.00875 6.33332C1.92123 6.28782 1.83589 6.21545 1.75274 6.11619L0.150985 4.25515C0.0503282 4.12694 0 3.99874 0 3.87053C0 3.73406 0.04814 3.61826 0.14442 3.52314C0.245077 3.42388 0.365427 3.37425 0.50547 3.37425C0.597374 3.37425 0.680525 3.39286 0.754923 3.43008C0.833698 3.46317 0.912473 3.52934 0.991247 3.6286L2.28446 5.21049L5.00875 1.07896C5.13129 0.892857 5.28446 0.799805 5.46827 0.799805C5.60394 0.799805 5.72648 0.841161 5.83589 0.923874C5.9453 1.00659 6 1.11618 6 1.25266C6 1.32297 5.98249 1.39327 5.94748 1.46358C5.91685 1.52975 5.88184 1.59178 5.84245 1.64968L2.84245 6.11619Z"})})},637301:(e,n,t)=>{t.d(n,{I:()=>o});var r=t(45487);function o(e,n,t){var o;if("string"==typeof e){let a=document;n&&((0,r.k)(Boolean(n.current),"Scope provided, but no element detected."),a=n.current),t?(null!==(o=t[e])&&void 0!==o||(t[e]=a.querySelectorAll(e)),e=t[e]):e=a.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}},716893:(e,n,t)=>{t.d(n,{Y:()=>s});var r=t(667294),o=t(637301);const a={some:0,all:1};function s(e,{root:n,margin:t,amount:s,once:i=!1}={}){const[c,l]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{if(!e.current||i&&c)return;const r={root:n&&n.current||void 0,margin:t,amount:s};return function(e,n,{root:t,margin:r,amount:s="some"}={}){const i=(0,o.I)(e),c=new WeakMap,l=new IntersectionObserver((e=>{e.forEach((e=>{const t=c.get(e.target);if(e.isIntersecting!==Boolean(t))if(e.isIntersecting){const t=n(e);"function"==typeof t?c.set(e.target,t):l.unobserve(e.target)}else t&&(t(e),c.delete(e.target))}))}),{root:t,rootMargin:r,threshold:"number"==typeof s?s:a[s]});return i.forEach((e=>l.observe(e))),()=>l.disconnect()}(e.current,(()=>(l(!0),i?void 0:()=>l(!1))),r)}),[n,e,t,i,s]),c}}}]);