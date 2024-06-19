"use strict";(globalThis.webpackChunknotion_next=globalThis.webpackChunknotion_next||[]).push([[13032],{983420:(e,t,i)=>{i.d(t,{TL:()=>c,nc:()=>u,ue:()=>d});var s=i(266897),a=i(554368),n=i(177420),o=i(519889),r=i(401898),l=i(206258);function d(e){const{parentStore:t,pointer:i}=e,a=(0,l.Kv)(t,i).getValue();if(a)return(0,s.LU)({table:i.table,value:a})}function u(e){const{parentStore:t,pointer:i}=e;return i.table===n.cZ?l.Qx.createChildStore(t,i):i.table===o.KJ?l.U6.createChildStore(t,i):i.table===a.y0?l.fg.createChildStore(t,i):void(0,r.t1)(i)}function c(e){return e.table===n.cZ?(0,s.ON)(e.getValue()):e.table===o.KJ?(0,s.m3)(e.getValue()):e.table===a.y0?(0,s.I4)(e.getValue()):void(0,r.t1)(e)}},626907:(e,t,i)=>{i.d(t,{B:()=>o,H:()=>a});i(757658);var s=i(133728);function a(e){const{target:t,inviteTargetsStore:i}=e;return i.state.inviteTargets.some((e=>"newUser"===t.type?e.type===t.type&&t.value.email===e.value.email:"invalidUser"===t.type?e.type===t.type&&t.value.text===e.value.text:e.type===t.type&&e.value.id===t.value.id))}function n(e){return"invalidUser"!==e.type}function o(e){const{inviteTargetsStore:t,includeInputFieldText:i}=e,o=[...t.state.inviteTargets];if(i){const e=function(e){const t=e.state.tokenQuery.trim();if(!(0,s.oH)(t))return;const i={type:"newUser",value:{email:t},source:"email"};return a({target:i,inviteTargetsStore:e})?void 0:i}(t);e&&o.push(e)}return o.filter(n)}},457345:(e,t,i)=>{i.d(t,{a6:()=>p,lG:()=>c,zd:()=>g});i(667294),i(133728),i(568626),i(471924),i(772141);var s=i(709291),a=(i(552629),i(436610)),n=i(547307),o=(i(476464),i(164964),i(419306),i(626907),i(367669),i(318245),i(188923)),r=i(799332),l=(i(429677),i(766708)),d=i(28578),u=i(785893);function c(e){d.ZP.reset(),o.default.state.open?r.Z.setState({...r.Z.state,open:!0}):l.Z.setState({...l.Z.state,open:!0}),a.DB(e,{share_menu_session_id:d.ZP.state.sessionId})}function p(e){o.default.state.open?r.Z.setState({...r.Z.state,open:!1}):l.Z.setState({...l.Z.state,open:!1}),a.Rb(e,{share_menu_session_id:d.ZP.state.sessionId})}async function g(e){const{inviteTargetsStore:t}=e,i=(0,u.jsx)(s.FormattedMessage,{id:"shareMenu.closeInviteDialog.confirmationMessage",defaultMessage:"Your changes have not been saved. Discard changes?"}),a=(0,u.jsx)(s.FormattedMessage,{id:"shareMenu.closeInviteDialog.confirmationButton.label",defaultMessage:"Yes"}),o=(0,u.jsx)(s.FormattedMessage,{id:"shareMenu.closeInviteDialog.cancelButton.label",defaultMessage:"Cancel"});if(t.state.inviteTargets.length>0){return(await n.confirmUserActionV2({message:i,acceptLabel:a,cancelLabel:o})).accept}return!1}},115100:(e,t,i)=>{i.d(t,{TA:()=>C,Zg:()=>M,a2:()=>S,eT:()=>w,mk:()=>y});i(21703),i(757658),i(667294);var s=i(145953),a=i(421202),n=i(709291),o=i(937850),r=i(454642),l=i(547307),d=i(296994),u=i(457345),c=i(28578),p=i(788632),g=i(206258),h=i(629026),m=i(461175),f=i(363815),b=i(785893);const v=50;function M(e){f.Z.resetSitesForSpace(e.id)}async function y(e,t){const{spaceStore:i,currentUserId:n,limit:l}=t;if(!i.id)return;const[d]=await Promise.all([r.getPublishedPagesForUser(e,{spaceId:i.id,limit:l||v,fetchPublishedMetadata:!0}),(0,o.Vs)(1500)]);if("failed"===d.type)throw new Error("Failed to fetch published pages.");if(d.data.recordMap){const e=[],t=s.PF.create(d.data.recordMap),o=d.data.publishedEdits;for(const{model:s}of t)if(s&&s.table===a.iU){const t=g.G.createChildStore(i,{table:a.iU,id:s.id}),n=o[t.id],r=n&&n.authors?n.authors[0]:void 0,l={publishedTime:null==n?void 0:n.timestamp,publishedBy:r};e.push({store:t,publishedMetadata:l})}let r=e;return n&&(r=m.S(e,n)),f.Z.initializeSiteResultsForSpace(i.id,r),r}}function C(e){u.lG(e),c.ZP.setState({...c.ZP.state,display:c.wV.Publish,tab:c.XF.Publish})}async function w(e){return new Promise(((t,i)=>{l.showDialog({message:(0,b.jsx)("div",{style:{textAlign:"center"},children:(0,b.jsx)(n.FormattedMessage,{id:"sites.confirmUnpublish.title",defaultMessage:"Unpublish this site?"})}),description:(0,b.jsx)("div",{style:{textAlign:"center"},children:(0,b.jsx)(n.FormattedMessage,{id:"sites.confirmUnpublish.caption",defaultMessage:"{pageTitle} will no longer be live on the web.",values:{pageTitle:e}})}),keepFocus:!0,items:[{label:(0,b.jsx)(n.FormattedMessage,{id:"sites.confirmUnpublish.confirm",defaultMessage:"Unpublish"}),color:"red",onAccept:()=>t(!0)}],showCancel:!0})}))}async function S(e,t){if(!p.Z.state.online)return[];const i=await d.FF.searchActions.load();return await i.searchPublicPages({environment:t,query:e,source:"public_home_page_menu",limit:h.Xv})}},230457:(e,t,i)=>{i.d(t,{Z:()=>x});var s=i(667294),a=i(886628),n=i(724405),o=i(815145),r=i(745238),l=i(785893);const d=(0,r.IU)("home",{viewBox:"0 0 18 16",svg:(0,l.jsx)("path",{d:"M4.3584 15.9004H13.6074C14.6943 15.9004 15.3301 15.2646 15.3301 14.2188V7.93652L16.0752 8.55859C16.2598 8.71582 16.4717 8.83203 16.7041 8.83203C17.1484 8.83203 17.4834 8.55176 17.4834 8.11426C17.4834 7.86133 17.3809 7.64941 17.1826 7.47852L15.3301 5.92676V2.95996C15.3301 2.65234 15.1318 2.4541 14.8174 2.4541H13.751C13.4434 2.4541 13.2314 2.65234 13.2314 2.95996V4.16309L10.0664 1.50391C9.42383 0.957031 8.59668 0.957031 7.94727 1.50391L0.824219 7.48535C0.619141 7.64941 0.516602 7.88184 0.516602 8.10059C0.516602 8.50391 0.817383 8.83203 1.30273 8.83203C1.52832 8.83203 1.74023 8.71582 1.9248 8.55859L2.63574 7.9707V14.2188C2.63574 15.2715 3.27148 15.9004 4.3584 15.9004ZM10.9619 9.95996C10.9619 9.63867 10.75 9.42676 10.4287 9.42676H7.57129C7.25 9.42676 7.03809 9.63867 7.03809 9.95996V14.376H4.80273C4.38574 14.376 4.15332 14.1367 4.15332 13.7197V6.69238L8.67871 2.89844C8.88379 2.7207 9.12305 2.7207 9.33496 2.89844L13.8125 6.6582V13.7197C13.8125 14.1367 13.5801 14.376 13.1631 14.376H10.9619V9.95996Z",fill:"#ADACAA"})});var u=i(954851),c=i(439567),p=i(709291),g=i(584076),h=i(731278),m=i(776798),f=i(526388),b=i(484210),v=i(98742),M=i(50116),y=i(825464);function C(e){let{store:t,...i}=e;const a=(0,s.useCallback)((e=>(0,l.jsx)(M.E5,{store:t,events:e})),[t]);return(0,l.jsx)(f.Z,{noStyle:!0,delayThreshold:400,placement:y.u.Bottom,alignment:y.v.Start,renderTooltip:a,...i})}const w=s.memo(C);var S=i(992083);function x(e){const{store:t,isPublicHomePage:i,style:r}=e,d=(0,a.VK)((()=>{if(t)return{icon:t.getIcon(),isEmptyPage:t.isEmptyPage(),url:(0,b.Hu)({store:t,pageVisitSource:o.tY.SiteSettings})}}),[t]),p=(0,s.useCallback)((e=>{e.metaKey||S.Z.setState({...S.Z.state,open:!1})}),[]),f=(0,n.yK)((e=>({container:{display:"flex",alignItems:"center",overflow:"hidden",cursor:"default"},emptyPageIcon:{height:18,width:18,fill:e.accentColors.gray[500]},iconContainer:{position:"relative",width:20,height:20,marginRight:4},linkBox:{borderRadius:3,maxWidth:i?"88%":"100%"},linkIcon:{position:"absolute",width:10,height:10,right:0,bottom:0},pageRecordContainer:{display:"flex",alignItems:"center",paddingTop:2,paddingBottom:2,paddingRight:4,paddingLeft:4,...r},pageTitle:{wordBreak:"break-word",borderBottom:"0.05em solid rgba(55,53,47,.25)"}})),[i,r]);if(!t||!d)return null;const M=(0,l.jsxs)("div",{style:f.pageRecordContainer,children:[(0,l.jsxs)("div",{style:f.iconContainer,children:[d.icon?(0,l.jsx)(h.Z,{icon:d.icon,store:t,disabled:!0,size:16,isEmptyPage:d.isEmptyPage,emojiSize:20}):(0,u.S)(f.emptyPageIcon),(0,c.Y)(f.linkIcon)]}),(0,l.jsx)(m.Z,{store:t,style:f.pageTitle})]});return(0,l.jsxs)("div",{style:f.container,children:[(0,l.jsx)(w,{store:t,render:e=>(0,l.jsx)(g.Z,{href:null==d?void 0:d.url,style:f.linkBox,...(0,v.Z)(e,{onClick:p}),children:M})}),(0,l.jsx)(Z,{isPublicHomePage:i})]})}function Z(e){const{isPublicHomePage:t}=e,i=(0,n.yK)((()=>({homeIcon:{width:18,height:18,marginLeft:4}})),[]);return t?(0,l.jsx)(f.Z,{renderTooltip:()=>(0,l.jsx)(p.FormattedMessage,{id:"SitesRecord.homePageTooltip",defaultMessage:"This is your homepage on the web"}),placement:y.u.Bottom,alignment:y.v.Center,originGap:6,render:e=>(0,l.jsx)("span",{...e,children:d(i.homeIcon)})}):null}},461175:(e,t,i)=>{i.d(t,{N:()=>o,S:()=>n});var s=i(772141),a=i(367669);function n(e,t){return e.sort(((e,i)=>{const s=e.store.canAdmin();if(s===i.store.canAdmin()){var a,n;const s=null===(a=e.publishedMetadata.publishedBy)||void 0===a?void 0:a.id,o=e.publishedMetadata.publishedTime,r=null===(n=i.publishedMetadata.publishedBy)||void 0===n?void 0:n.id,l=i.publishedMetadata.publishedTime;if(t){if(s===t&&r===t&&o&&l)return l-o;if(s===t)return-1;if(r===t)return 1}return o&&l?l-o:0}return s?-1:1}))}function o(e){const{environment:t,store:i}=e;if(!i.pathIsAccessibleAndAlive())return!1;return!!a.YO(i).find((e=>(0,s.$D)(e.permissionItem)&&"none"!==e.permissionItem.role))&&!a.IJ(t,i)}},363815:(e,t,i)=>{i.d(t,{Z:()=>l});var s=i(749085),a=i(76233),n=i(653965),o=i(206258);class r extends s.default{getInitialState(){return{sites:{},sortAscending:!0,sortColumn:void 0}}initializeSiteResultsForSpace(e,t){this.state.sites[e]=t,this.emit()}getSortedSitesForSpace(e,t){const{sortAscending:i,sortColumn:s}=this.state,r=this.state.sites[e];if(r)switch(s){case"page":return n.Xo(r,(e=>a.QaF(e.store.getTitleValue()).toLowerCase()),i?"asc":"desc");case"published-by":return n.Xo(r,(e=>{const i=e.publishedMetadata.publishedBy,s=i?o.t1.createChildStore(e.store,i):void 0;return null==s?void 0:s.getDisplayName(t).toLowerCase()}),i?"asc":"desc");case"published-date":return n.Xo(r,(e=>e.publishedMetadata.publishedTime),i?"asc":"desc");default:return r}}removeSiteFromSpace(e,t){const i=this.state.sites[e];i&&(this.state.sites[e]=i.filter((e=>e.store.id!==t)),this.emit())}resetSitesForSpace(e){this.state.sites[e]=void 0}}const l=new r},887199:(e,t,i)=>{i.d(t,{h:()=>n,k:()=>a});var s=i(709291);const a=(0,s.defineMessages)({paymentMethodUnverified:{id:"subscriptions.paymentMethodUnverified",defaultMessage:"Your payment is being processed. Please try again when your payment has completed."},otherPaymentMethod:{id:"subscriptions.otherPaymentMethod",defaultMessage:"Other"},adminOnlyAction:{id:"subscriptions.adminOnlyAction",defaultMessage:"Only workspace owners can perform this action."},iosSubscriptionRestriction:{id:"subscriptions.iosSubscriptionRestriction",defaultMessage:"You're currently subscribed through an in-app purchase with Apple. To switch plans, cancel your subscription with Apple first."}}),n=(0,s.defineMessages)({trialTitle:{id:"nudges.trial.title",defaultMessage:"Notion for collaboration"},trialDescription:{id:"nudges.trial.description",defaultMessage:"Get 14 days of unlimited content creation with others"},trialCta:{id:"nudges.trial.cta",defaultMessage:"Try it for free"},trialTooltip:{id:"nudges.trial.tooltip",defaultMessage:"Use Notion as much as you want, with as many people as you like. You’ll receive a reminder when your trial is ending, and can cancel anytime."},approachingBlockLimitTitle:{id:"nudges.approachingBlockLimit.title",defaultMessage:"Upgrade to go unlimited"},approachingBlockLimitDescription:{id:"nudges.approachingBlockLimit.description",defaultMessage:"Continue using Notion to collaborate with others"},approachingBlockLimitTooltip:{id:"nudges.approachingBlockLimit.tooltip",defaultMessage:"You’re reaching the maximum number of free blocks given on your plan ({percentageUsed}). You won’t be able to create more content unless you upgrade to the Plus plan."},reachedBlockLimitTitle:{id:"nudges.reachedBlockLimit.title",defaultMessage:"Keep using Notion"},reachedBlockLimitDescription:{id:"nudges.reachedBlockLimit.description",defaultMessage:"{spaceName} has used 100% of the free blocks in the workspace"},reachedBlockLimitCta:{id:"nudges.reachedBlockLimit.cta",defaultMessage:"Upgrade plan"},reachedBlockLimitTooltip:{id:"nudges.reachedBlockLimit.tooltip",defaultMessage:"You’ve reached the maximum number of free blocks for your plan (100%). You won’t be able to create more content unless you upgrade to the Plus plan."}})},44041:(e,t,i)=>{i.d(t,{y:()=>w});i(667294);var s=i(647425),a=i(709291),n=i(286572),o=i(547307),r=i(296994),l=i(433929),d=i(352533),u=i(80444),c=i(992083),p=i(739343),g=i(887199),h=i(735993),m=i(170060),f=i(88893),b=i(535057),v=i(288280),M=i(897630),y=i(864891),C=i(785893);async function w(e,t){var i;n.sA(e,{from:t.from,for_subscription_tier:t.for,addOnFeature:t.addOnFeature});if((0,b.QM)()&&["block_limit_sidebar","block_limit_settings","block_limit_banner"].includes(t.from)&&!t.addOnFeature){if(e.device.isMobileBrowser){const i=await r.FF.payments.load();return void(await i.plans.showPlans({environment:e,from:t.from}))}return(0,m.iZ)(e)?void(0,h.a)({openedFrom:t.from}):void c.Z.setState({open:!0,openedFrom:"upsell",currentTab:"plans",defaultSubtab:void 0,highlightedSetting:void 0})}if(!t.addOnFeature&&(0,s.QM)(t.for))return;const w=(0,d.S$)({environment:e})&&"personal"===t.for;if(e.device.isMobileNative){if("ai"===t.addOnFeature){const t=(0,d.Y2)({environment:e})?(0,C.jsx)(a.FormattedMessage,{id:"upsellActions.noIAPForAIWithExternalPurchaseOption",defaultMessage:"Your workspace does not have unlimited AI. Visit on desktop to purchase Notion AI and go unlimited."}):(0,C.jsx)(a.FormattedMessage,{id:"upsellActions.noIAPForAIWithoutExternalPurchaseOption",defaultMessage:"Your workspace does not have unlimited AI. Unfortunately, unlimited AI cannot be purchased on mobile."});return void o.showErrorMessage(t)}if(!w)return}const S=u.default.state.currentSpaceStore;if(!S)return;if(!S.canAdmin())return;await M.bi(e);const x=v.subscriptionDataStoreInstance.state;if(!x)return;if("unsubscribed_admin"!==x.type&&"subscribed_admin"!==x.type)return void(t.dontOpenPlansOnCancel||c.Z.setState({open:!0,openedFrom:"upsell",currentTab:"plans",defaultSubtab:void 0,highlightedSetting:void 0}));if(f.ri(x))return void o.showErrorMessage(l.default.formatMessage(g.k.paymentMethodUnverified));if(f.ff(x)){const e=(0,C.jsx)(a.FormattedMessage,{id:"upsellActions.referToSalesRep",defaultMessage:"This workspace is part of a managed account. Please contact your account representative to discuss any changes to your subscription."});return void o.showErrorMessage(e)}if(w)return void(e.mobileNative&&S.id&&e.mobileNative.openUpgradeModal(S.id));if("revenueCat"===(null===(i=x.customerData)||void 0===i?void 0:i.activeSubscriptionPlatform)){const e=(0,C.jsx)(a.FormattedMessage,{id:"upsellActions.switchPlanFromInAppPurchase",defaultMessage:"You're currently subscribed through an in-app purchase with Apple. To switch plans, cancel your subscription with Apple first."});return void o.showErrorMessage(e)}const Z=f.XX(x);if(t.addOnFeature&&(0,p.Fk)(Z)){const e=(0,C.jsx)(a.FormattedMessage,{id:"upsellActions.noAddOnPurchaseDuringFreeTrial",defaultMessage:"Unfortunately, additional {addOn, select, ai {AI responses} other {features}} cannot be purchased while a workspace is on a free trial.",values:{addOn:t.addOnFeature}});o.showErrorMessage(e)}else{if(Z&&f.MM(x))return t.addOnFeature?void y.af({environment:e,from:t.from,view:"add_ons",addOnFeature:t.addOnFeature,billingInterval:Z.interval,pageSection:t.pageSection}):void y.af({environment:e,from:t.from,view:"plans",temporarySubscriptionTier:t.for,billingInterval:Z.interval,pageSection:t.pageSection});{const i=(0,m.px)(e,t.for)?"ai_fifty_percent":void 0;M.I0(e,{subscriptionTier:t.for,from:t.from,addOnFeature:t.addOnFeature,coupon:i,isTrial:t.isTrial,dismissMobilePlansModal:t.dismissMobilePlansModal})}}}},735993:(e,t,i)=>{i.d(t,{X:()=>r,a:()=>o});var s=i(471924),a=i(286572),n=i(868187);function o(e){const{openedFrom:t}=e,i=s.Il();n.Z.open({modalId:i,openedFrom:t})}function r(e,t){a.LY(e,{modal_id:t,modal_type:"contextual"}),n.Z.setState({open:!1})}},868187:(e,t,i)=>{i.d(t,{Z:()=>n});var s=i(749085);class a extends s.default{getInitialState(){return{open:!1}}open(e){this.setState({open:!0,...e})}}const n=new a},891694:(e,t,i)=>{i.d(t,{Z:()=>f});i(667294);var s=i(800480),a=i(886628),n=i(724405),o=i(647425),r=i(709291),l=i(531701),d=i(401898),u=i(137810),c=i(174136),p=i(526388),g=i(825464),h=i(44041),m=i(785893);const f=function(e){let{subscriptionTier:t,mobileStyle:i,desktopStyle:f,analyticsName:b,onClick:v}=e;const M=(0,n.Fg)(),y=(0,s.O7)(),{device:C}=y,w=C.isIOS&&C.isNative,S=(0,a.VK)((()=>function(e,t){switch(e){case"plus":case"business":case"enterprise":return{color:t.blueColor,background:"light"===t.mode?l.ZP.diffBackground:"rgba(35, 131, 226, 0.2)",fontWeight:u.Z.fontWeight.medium};default:return{}}}(t,M)),[t,M]);if(w)return null;let x;return"personal"===t?x=(0,m.jsx)(r.FormattedMessage,{defaultMessage:"Personal Pro",id:"upgradeButton.personal.text"}):(0,o.eR)(t)?x=(0,m.jsx)(r.FormattedMessage,{defaultMessage:"Plus ↗",id:"upgradeButton.plus.textWithArrow"}):(0,o.NG)(t)?x=(0,m.jsx)(r.FormattedMessage,{defaultMessage:"Business ↗",id:"upgradeButton.business.textWithArrow"}):(0,o.wP)(t)?x=(0,m.jsx)(r.FormattedMessage,{defaultMessage:"Enterprise ↗",id:"upgradeButton.enterprise.textWithArrow"}):(0,d.t1)(t),C.isMobile?(0,m.jsx)(c.Z,{mobileStyle:i,children:x}):(0,m.jsx)(p.Z,{delayThreshold:120,placement:g.u.Bottom,renderTooltip:()=>(0,m.jsxs)("div",{style:{maxWidth:500},children:[(0,m.jsx)(r.FormattedMessage,{defaultMessage:"Upgrade to use this feature.",id:"upgradeButton.upgrade.tooltip"}),(0,m.jsx)("br",{}),(0,m.jsx)(r.FormattedMessage,{defaultMessage:"Click to learn more.",id:"upgradeButton.learnMore.tooltip"})]}),originGap:6,render:e=>(0,m.jsx)(c.Z,{desktopStyle:f,innerStyle:S,onClick:e=>function(e,t,i,s,a){h.y(s,{from:t,for:i}),a&&a(e)}(e,b,t,y,v),...e,children:x})})}},739343:(e,t,i)=>{i.d(t,{Fk:()=>r,U6:()=>d,nx:()=>l});var s=i(730120),a=i(313991),n=i(407057),o=i(95477);function r(e){return!(null==e||!e.trialEnd)&&e.trialEnd>=s.ou.now().toSeconds()}function l(e){const t=function(e){if(!r(e))return;const t=1e3*(null==e?void 0:e.trialEnd);return null!=e&&e.periodEnd&&e.periodEnd>=s.ou.now().toSeconds()&&e.periodEnd<t?e.periodEnd:t}(e);return t?(0,n.Yx)(t,"long",a.SP):void 0}function d(e){return e?o.default.trials[e.id].duration:o.default.trials.default.duration}},40462:(e,t,i)=>{i.d(t,{o:()=>n});i(667294);var s=i(745238),a=i(785893);const n=(0,s.IU)("globe2",{viewBox:"0 0 16 16",svg:(0,a.jsx)("path",{d:"M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM3.88477 3.76465C4.56836 3.11523 5.39551 2.61621 6.31836 2.34277C5.83301 2.82812 5.42285 3.51172 5.11523 4.3457C4.63672 4.19531 4.22656 3.99707 3.88477 3.76465ZM9.68848 2.34961C10.6045 2.62305 11.4316 3.11523 12.1084 3.76465C11.7734 4.00391 11.3633 4.19531 10.8848 4.35254C10.5771 3.51172 10.167 2.82812 9.68848 2.34961ZM8.47852 2.56836C9.0459 2.8418 9.56543 3.58008 9.93457 4.58496C9.4834 4.66699 8.99805 4.71484 8.47852 4.73535V2.56836ZM6.06543 4.58496C6.44141 3.58008 6.9541 2.8418 7.52148 2.56836V4.73535C7.00195 4.71484 6.5166 4.66699 6.06543 4.58496ZM2.05273 7.58594C2.14844 6.42383 2.58594 5.35059 3.25586 4.46875C3.67285 4.77637 4.21289 5.04297 4.8418 5.24121C4.66406 5.95215 4.54785 6.74512 4.51367 7.58594H2.05273ZM11.4863 7.58594C11.4521 6.74512 11.3359 5.95215 11.1582 5.24121C11.7871 5.04297 12.3271 4.7832 12.7373 4.46875C13.4141 5.35059 13.8516 6.42383 13.9473 7.58594H11.4863ZM5.49121 7.58594C5.52539 6.84082 5.62793 6.12988 5.78516 5.4873C6.33203 5.59668 6.91309 5.66504 7.52148 5.69238V7.58594H5.49121ZM8.47852 7.58594V5.69238C9.08691 5.66504 9.66797 5.59668 10.2148 5.4873C10.3721 6.12988 10.4746 6.84082 10.5088 7.58594H8.47852ZM2.05273 8.54297H4.51367C4.54785 9.39746 4.66406 10.1973 4.8418 10.915C4.21973 11.1133 3.68652 11.373 3.27637 11.6807C2.59277 10.792 2.14844 9.71191 2.05273 8.54297ZM5.49121 8.54297H7.52148V10.4707C6.91992 10.498 6.33203 10.5664 5.79199 10.6689C5.62793 10.0195 5.51855 9.29492 5.49121 8.54297ZM8.47852 10.4707V8.54297H10.5088C10.4814 9.29492 10.3721 10.0195 10.208 10.6689C9.66797 10.5664 9.08691 10.498 8.47852 10.4707ZM11.1582 10.915C11.3428 10.1973 11.4521 9.39746 11.4863 8.54297H13.9473C13.8516 9.71191 13.4072 10.792 12.7236 11.6807C12.3135 11.373 11.7803 11.1133 11.1582 10.915ZM8.47852 11.4277C8.99121 11.4482 9.47656 11.4961 9.9209 11.5781C9.55176 12.5625 9.03906 13.2939 8.47852 13.5605V11.4277ZM6.0791 11.5781C6.52344 11.4961 7.00879 11.4482 7.52148 11.4277V13.5605C6.96094 13.2939 6.44824 12.5625 6.0791 11.5781ZM3.90527 12.3848C4.24023 12.1523 4.65039 11.9609 5.12207 11.8105C5.42969 12.6309 5.83301 13.3008 6.30469 13.7793C5.40234 13.5059 4.58203 13.0205 3.90527 12.3848ZM10.8779 11.8105C11.3496 11.9609 11.7598 12.1523 12.0947 12.3848C11.418 13.0205 10.5977 13.5059 9.69531 13.7793C10.167 13.3008 10.5703 12.6309 10.8779 11.8105Z"})})}}]);