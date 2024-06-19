"use strict";(globalThis.webpackChunknotion_next=globalThis.webpackChunknotion_next||[]).push([[54843],{781575:(e,t,i)=>{i.d(t,{AK:()=>h,Mc:()=>r,OS:()=>p,Td:()=>m,Uu:()=>a,XC:()=>l,ZK:()=>_,e8:()=>c,gV:()=>u,hc:()=>g,n0:()=>v,u0:()=>f,xi:()=>d});var o=i(730459),n=i(215010),s=i(535057);function r(e){o.K4(e,"add_slack_integration")}function a(e){o.K4(e,"remove_slack_integration")}function l(e,t){o.K4(e,"slack_notification_create",t)}function d(e,t){o.K4(e,"slack_notification_delete",t)}function p(e,t){o.K4(e,"slack_notification_update",t)}function u(e,t){const i=s.zt(),r=n.JF();o.K4(e,"slack_imports_invite_render_button",{subscription_tier:i,domain_type:r,origin:t.origin,invite_flow_id:t.invite_flow_id})}function c(e,t){const i=s.zt(),r=n.JF();o.K4(e,"slack_imports_invite_render_invite_popup",{subscription_tier:i,domain_type:r,origin:t.origin,invite_flow_id:t.invite_flow_id})}function h(e,t){const i=s.zt(),r=n.JF();o.K4(e,"slack_imports_invite_click_invite_button",{subscription_tier:i,domain_type:r,invited_user_count:t.invited_user_count,origin:t.origin,invite_token_query:t.inviteTokenQuery,invite_targets:t.inviteTargets,invite_flow_id:t.invite_flow_id})}function f(e,t){const i=s.zt(),r=n.JF();o.K4(e,"slack_imports_invite_completed",{subscription_tier:i,domain_type:r,invited_user_count:t.invited_user_count,is_success:t.is_success,origin:t.origin,invite_flow_id:t.invite_flow_id,error:t.error,invite_stage:t.invite_stage})}function m(e,t){const i=s.zt(),r=n.JF();o.K4(e,"slack_imports_invite_dismiss_popup",{subscription_tier:i,domain_type:r,origin:t.origin,invite_flow_id:t.invite_flow_id})}function g(e,t){const i=s.zt(),r=n.JF();o.K4(e,"slack_imports_invite_click_select_all",{subscription_tier:i,domain_type:r,origin:t.origin,invite_flow_id:t.invite_flow_id,invited_user_count:t.invited_user_count,is_unselect:t.is_unselect,invite_token_query:t.invite_token_query})}function v(e,t){const i=s.zt(),r=n.JF();o.K4(e,"slack_imports_invite_start_slack_integration",{subscription_tier:i,domain_type:r,origin:t.origin,invite_flow_id:t.invite_flow_id,from:t.from})}function _(e,t){const i=s.zt(),r=n.JF();o.K4(e,"slack_imports_invite_complete_slack_integration",{subscription_tier:i,domain_type:r,origin:t.origin,invite_flow_id:t.invite_flow_id,from:t.from,is_success:t.is_success})}},718250:(e,t,i)=>{i.d(t,{K:()=>s,O:()=>n});var o=i(745483);function n(e){o.Z.state.openModals.has(e)||(o.Z.state.openModals.add(e),o.Z.emit())}function s(e){o.Z.state.openModals.has(e)&&(o.Z.state.openModals.delete(e),o.Z.emit())}},147082:(e,t,i)=>{i.d(t,{UR:()=>C,ZP:()=>M,go:()=>x});var o=i(667294),n=i(883355),s=i(800480),r=i(724405),a=i(853465),l=i(653965),d=i(460709),p=i(98742),u=i(434859),c=i(964113),h=i(164921),f=i(437601),m=i(374194),g=i(203386),v=i(953336),_=i(164369),y=i(785893);const x="20px";let C=function(e){return e[e.Select=0]="Select",e[e.Person=1]="Person",e[e.Relation=2]="Relation",e[e.FilterValue=3]="FilterValue",e[e.Share=4]="Share",e[e.Group=5]="Group",e}({});class b extends n.Z{constructor(){super(...arguments),this.inputRef=o.createRef(),this.storeTypes={store:c.Z},this.CLASS_COMPONENT_CONVERSION_DO_NOT_TOUCH_handleFocused=()=>{this.stores.store.setState({focused:!0})},this.CLASS_COMPONENT_CONVERSION_DO_NOT_TOUCH_handleBlurred=()=>{this.stores.store.setState({focused:!1})},this.handleContainerClick=()=>{var e,t,i;this.props.disabled||(null===(e=this.inputRef.current)||void 0===e||e.focusInput(),null===(t=(i=this.props).onClick)||void 0===t||t.call(i))}}UNSAFE_willMount(){(this.props.focus||this.props.focusInitial)&&this.stores.store.setState({focused:!0})}UNSAFE_willUpdate(){void 0!==this.props.focus&&this.stores.store.setState({focused:this.props.focus})}renderComponent(){const{disabled:e}=this.props;return(0,y.jsx)(g.Z,{debugName:"TokenInputMenuItem",capture:!e,onLeft:l.yR,onRight:l.yR,onSelectAll:l.yR,onRedo:l.yR,onUndo:l.yR,onToggleBold:l.yR,onToggleItalics:l.yR,onToggleCode:l.yR,onCut:l.yR,onCopy:l.yR,onPaste:l.yR,onKeypress:l.yR,children:(0,y.jsx)(g.Z,{debugName:"TokenInputMenuItem",capture:!e&&this.props.value.length>0,onDelete:l.yR,onBackspace:l.yR,children:(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"stretch",flex:1,minWidth:0,gap:this.props.message?4:void 0},children:[this.renderTokenInput(),this.props.message&&(0,y.jsx)(_.Z,{isSmall:!0,children:this.props.message})]})})})}renderTokenInput(){const{right:e,showClearButton:t}=this.props;return e||t?(0,y.jsxs)(v.Z,{type:u.Z.All,style:{...I(this.environment,this.theme,this.props.format,this.props.focus,this.props.dontShowBorderBottom,this.props.disabled,this.props.showBorder,this.context.menu),flexWrap:"nowrap",...this.props.style},onClick:this.handleContainerClick,children:[(0,y.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",flexGrow:1,minWidth:0,...this.props.inputAndTokenWrapRightStyle},children:[this.props.tokens,!this.props.hideInput&&this.renderInput()]}),(0,y.jsx)("div",{style:{flexShrink:0},children:(0,y.jsx)(T,{showClearButton:this.props.showClearButton,right:this.props.right,onClearButtonClick:this.props.onClearButtonClick,tokens:this.props.tokens,value:this.props.value})})]}):this.environment.device.isMobile?(0,y.jsxs)("div",{style:{...I(this.environment,this.theme,this.props.format,this.props.focus,this.props.dontShowBorderBottom,this.props.disabled,this.props.showBorder,this.context.menu),flexWrap:"nowrap",...this.props.style},onClick:this.handleContainerClick,children:[(0,y.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",flexGrow:1,minWidth:0,overflow:"hidden",marginRight:w(this.props.format)?6:0},children:[this.props.tokens,!this.props.hideInput&&this.renderInput()]}),(0,y.jsx)(f.Z,{show:this.stores.store.state.focused})]}):(0,y.jsxs)(v.Z,{type:u.Z.All,style:{...I(this.environment,this.theme,this.props.format,this.props.focus,this.props.dontShowBorderBottom,this.props.disabled,this.props.showBorder,this.context.menu),...this.props.style},onClick:this.handleContainerClick,children:[this.props.tokens,!this.props.hideInput&&this.renderInput()]})}renderInput(){const e=0===this.props.tokens.length;return(0,y.jsx)(m.Z,{disabled:this.props.disabled,format:m.B.Transparent,...(0,p.Z)({onKeyDown:e=>function(e,t,i,o){"Backspace"===e.key&&0===t.length&&i();o&&o(e)}(e,this.props.value,this.props.onRemoveLastToken,this.props.onKeyDown)},{onChange:this.props.onChange}),value:this.props.value,focus:this.props.focus,focusInitial:this.props.focusInitial,focusAfterAnimation:this.props.focusAfterAnimation,style:(t=this.props.format,i=this.environment,o=this.theme,n=this.props.inputFullWidth,s=this.props.inputDivStyle,{flexGrow:1,flexShrink:1,flexBasis:n?"100%":60,minWidth:60,width:"auto",lineHeight:x,...i.device.isMobile?{margin:"0 8px 8px 0"}:O(o)[t].inputDivDesktopStyle,...s}),inputStyle:this.props.inputStyle||{height:this.environment.device.isMobile?24:w(this.props.format)?20:18},size:1,ref:this.inputRef,type:this.props.type,placeholder:e?this.props.placeholder:"",onSubmit:e=>function(e,t,i,o){0===t.length&&i&&i();o&&o(e)}(e,this.props.value,this.props.onEmptySubmit,this.props.onSubmit),onFocus:this.CLASS_COMPONENT_CONVERSION_DO_NOT_TOUCH_handleFocused,onBlur:this.CLASS_COMPONENT_CONVERSION_DO_NOT_TOUCH_handleBlurred,textarea:this.props.textarea,autoComplete:this.props.autoComplete});var t,i,o,n,s}}b.displayName="TokenInputMenuItem",b.contextTypes={...d.mw,...n.w};const M=b;function w(e){return e===C.Group}function k(e,t){return{display:"flex",flexWrap:"wrap",alignItems:"flex-start",background:t?"none":e.tokenInputMenuItemBackground,cursor:"text",overflow:"hidden"}}function S(e){return{display:"flex",flexWrap:"wrap",alignItems:"flex-start",flexShrink:0,minHeight:44,borderBottom:`1px solid ${e.regularDividerColor}`,fontSize:16,background:e.popoverBackground}}function O(e){const t={desktopWrapStyle:{padding:"8px 9px 1px",width:"100%",minHeight:34,fontSize:14},inputDivDesktopStyle:{margin:"0 6px 6px 0",borderTopLeftRadius:4,borderTopRightRadius:4},inputDivDesktopFocusStyle:{}};return{[C.Select]:t,[C.Person]:t,[C.Relation]:t,[C.Group]:t,[C.FilterValue]:{desktopWrapStyle:{padding:"6px 6px 1px",boxShadow:e.inputBoxShadow,background:e.inputBackground,margin:"6px 8px 2px 8px",minHeight:30,fontSize:12,borderRadius:4},inputDivDesktopStyle:{margin:"0 6px 4px 0"},inputDivDesktopFocusStyle:{boxShadow:"rgba(35, 131, 226, 0.57) 0px 0px 0px 1px inset, rgba(35, 131, 226, 0.35) 0px 0px 0px 2px"}},[C.Share]:{desktopWrapStyle:{padding:"8px 9px 1px",width:"100%",minHeight:34,fontSize:14},inputDivDesktopStyle:{margin:"0 0 0 2px",borderTopLeftRadius:4,borderTopRightRadius:4},inputDivDesktopFocusStyle:{}}}}function T(e){let{showClearButton:t,right:i,onClearButtonClick:o,tokens:n,value:l}=e;const d=(0,r.Fg)(),p=(0,s.O7)(),{isMobile:u}=p.device;return i?(0,y.jsx)(y.Fragment,{children:i}):t&&(n.length>0||l.length>0)?(0,y.jsx)(h.Z,{onClick:o,style:{flexShrink:0,flexGrow:0,borderRadius:u?24:20,marginTop:2},children:(0,a.X)({width:u?16:14,height:u?16:14,fill:d.lightIconColor})}):null}function I(e,t,i,o,n,s,r,a){const{WindowSizeStore:l}=e;return{...e.device.isMobile?{...S(t),paddingTop:14,paddingBottom:8,paddingLeft:(null==a?void 0:a.menuType)!==d.og.Popup?l.getSafePaddingLeftCSS(16):16,paddingRight:(null==a?void 0:a.menuType)!==d.og.Popup?l.getSafePaddingRightCSS(16):16,...n&&{borderBottom:"none"}}:{...k(t,s),...O(t)[i].desktopWrapStyle},...r&&{boxShadow:"rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset"},...r&&o&&{boxShadow:"rgba(35, 131, 226, 0.57) 0px 0px 0px 1px inset, rgba(35, 131, 226, 0.35) 0px 0px 0px 2px"},...!e.device.isMobile&&o&&O(t)[i].inputDivDesktopFocusStyle}}},969098:(e,t,i)=>{i.d(t,{j:()=>p,o:()=>o});var o={};i.r(o),i.d(o,{showAsyncModal:()=>c,showAsyncModalComponent:()=>h,testOnly:()=>C});var n=i(667294),s=i(886628),r=i(749085);class a extends r.default{getInitialState(){return{asyncModals:[]}}}const l=new a;var d=i(785893);const p=n.memo((function(e){const{store:t=l}=e,i=(0,s.VK)((()=>t.state.asyncModals),[t]);return(0,d.jsx)(d.Fragment,{children:i.map((e=>{const{id:t,internalRenderModal:i,isOpen:o}=e,s=i(o);return(0,d.jsx)(n.Fragment,{children:s},t)}))})}));var u=i(471924);function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;return new Promise(((i,o)=>{try{f({asyncModal:_({renderModal:e,promiseResolve:i,promiseReject:o,store:t}),store:t})}catch(n){o(n)}}))}function h(e){return c((t=>n.createElement(e,t)),arguments.length>1&&void 0!==arguments[1]?arguments[1]:l)}function f(e){const{asyncModal:t,store:i=l}=e;i.update((e=>({asyncModals:[...e.asyncModals,t]})))}function m(e){const{id:t,promiseResolve:i,store:o=l}=e;return e=>{const n=y({id:t,store:o});null!=n&&n.isOpen&&(x({id:t,store:o,update:{isOpen:!1}}),i(e))}}function g(e){const{id:t,promiseResolve:i,store:o=l}=e;return()=>{const e=y({id:t,store:o});null!=e&&e.isOpen&&(x({id:t,store:o,update:{isOpen:!1}}),i())}}function v(e){const{id:t,store:i=l}=e;return()=>{i.update((e=>({asyncModals:e.asyncModals.filter((e=>e.id!==t))})))}}function _(e){const{renderModal:t,promiseResolve:i,promiseReject:o,store:n=l}=e,s=u.Il(),r=v({id:s,store:n}),a=g({id:s,promiseResolve:i,store:n}),d=m({id:s,promiseResolve:i,store:n});return{id:s,internalRenderModal:e=>{try{return t({isOpen:e,onClosed:r,onDismiss:a,resolve:d})}catch(i){throw o(i),i}},isOpen:!0}}function y(e){const{id:t,store:i=l}=e;return i.state.asyncModals.find((e=>e.id===t))}function x(e){const{id:t,update:i,store:o=l}=e;o.update((e=>({asyncModals:e.asyncModals.map((e=>e.id!==t?e:{...e,...i}))})))}const C={addAsyncModal:f,createAsyncModal:_,createOnClosed:v,createOnDismiss:g,createResolve:m,getAsyncModal:y,updateAsyncModal:x}},327340:(e,t,i)=>{i.d(t,{y:()=>a});var o=i(653965),n=i(401898),s=i(847882);function r(e){let t=0,i=Number.MAX_SAFE_INTEGER;for(const n of e){if(!n)continue;const e=(0,s.r)(n),r=(0,o.uZ)(e.max,0,Number.MAX_SAFE_INTEGER),a=(0,o.uZ)(e.min,0,r);t=Math.max(t,a),i=Math.min(i,r)}const r=function(e){let t;for(const i of e){const e=null==i?void 0:i.scroll;switch(e){case"disallow":return"disallow";case"allow":t="allow";break;case void 0:break;default:(0,n.t1)(e)}}return t}(e);return{type:"range",min:(0,o.uZ)(t,0,i),max:i,scroll:r}}function a(e){const t=e.filter(Boolean);return{width:r(t.map((e=>null==e?void 0:e.width))),height:r(t.map((e=>null==e?void 0:e.height)))}}},983420:(e,t,i)=>{i.d(t,{TL:()=>u,nc:()=>p,ue:()=>d});var o=i(266897),n=i(554368),s=i(177420),r=i(519889),a=i(401898),l=i(206258);function d(e){const{parentStore:t,pointer:i}=e,n=(0,l.Kv)(t,i).getValue();if(n)return(0,o.LU)({table:i.table,value:n})}function p(e){const{parentStore:t,pointer:i}=e;return i.table===s.cZ?l.Qx.createChildStore(t,i):i.table===r.KJ?l.U6.createChildStore(t,i):i.table===n.y0?l.fg.createChildStore(t,i):void(0,a.t1)(i)}function u(e){return e.table===s.cZ?(0,o.ON)(e.getValue()):e.table===r.KJ?(0,o.m3)(e.getValue()):e.table===n.y0?(0,o.I4)(e.getValue()):void(0,a.t1)(e)}},626907:(e,t,i)=>{i.d(t,{B:()=>r,H:()=>n});i(757658);var o=i(133728);function n(e){const{target:t,inviteTargetsStore:i}=e;return i.state.inviteTargets.some((e=>"newUser"===t.type?e.type===t.type&&t.value.email===e.value.email:"invalidUser"===t.type?e.type===t.type&&t.value.text===e.value.text:e.type===t.type&&e.value.id===t.value.id))}function s(e){return"invalidUser"!==e.type}function r(e){const{inviteTargetsStore:t,includeInputFieldText:i}=e,r=[...t.state.inviteTargets];if(i){const e=function(e){const t=e.state.tokenQuery.trim();if(!(0,o.oH)(t))return;const i={type:"newUser",value:{email:t},source:"email"};return n({target:i,inviteTargetsStore:e})?void 0:i}(t);e&&r.push(e)}return r.filter(s)}},745483:(e,t,i)=>{i.d(t,{Z:()=>a});var o=i(749085),n=i(292595);class s extends o.default{getInitialState(){return{openModals:new Set}}}const r=new s,a=r;(0,n.exposeDebugValue)("GlobalModalStore",r)},361254:(e,t,i)=>{i.d(t,{Z:()=>s});var o=i(749085);class n extends o.default{getInitialState(){return{open:!1,openAnimationCompleted:!0,closeAnimationCompleted:!0}}}const s=n},156638:(e,t,i)=>{i.d(t,{Z:()=>s});var o=i(749085);class n extends o.default{getInitialState(){return{open:!1}}}const s=new n},887199:(e,t,i)=>{i.d(t,{h:()=>s,k:()=>n});var o=i(709291);const n=(0,o.defineMessages)({paymentMethodUnverified:{id:"subscriptions.paymentMethodUnverified",defaultMessage:"Your payment is being processed. Please try again when your payment has completed."},otherPaymentMethod:{id:"subscriptions.otherPaymentMethod",defaultMessage:"Other"},adminOnlyAction:{id:"subscriptions.adminOnlyAction",defaultMessage:"Only workspace owners can perform this action."},iosSubscriptionRestriction:{id:"subscriptions.iosSubscriptionRestriction",defaultMessage:"You're currently subscribed through an in-app purchase with Apple. To switch plans, cancel your subscription with Apple first."}}),s=(0,o.defineMessages)({trialTitle:{id:"nudges.trial.title",defaultMessage:"Notion for collaboration"},trialDescription:{id:"nudges.trial.description",defaultMessage:"Get 14 days of unlimited content creation with others"},trialCta:{id:"nudges.trial.cta",defaultMessage:"Try it for free"},trialTooltip:{id:"nudges.trial.tooltip",defaultMessage:"Use Notion as much as you want, with as many people as you like. You’ll receive a reminder when your trial is ending, and can cancel anytime."},approachingBlockLimitTitle:{id:"nudges.approachingBlockLimit.title",defaultMessage:"Upgrade to go unlimited"},approachingBlockLimitDescription:{id:"nudges.approachingBlockLimit.description",defaultMessage:"Continue using Notion to collaborate with others"},approachingBlockLimitTooltip:{id:"nudges.approachingBlockLimit.tooltip",defaultMessage:"You’re reaching the maximum number of free blocks given on your plan ({percentageUsed}). You won’t be able to create more content unless you upgrade to the Plus plan."},reachedBlockLimitTitle:{id:"nudges.reachedBlockLimit.title",defaultMessage:"Keep using Notion"},reachedBlockLimitDescription:{id:"nudges.reachedBlockLimit.description",defaultMessage:"{spaceName} has used 100% of the free blocks in the workspace"},reachedBlockLimitCta:{id:"nudges.reachedBlockLimit.cta",defaultMessage:"Upgrade plan"},reachedBlockLimitTooltip:{id:"nudges.reachedBlockLimit.tooltip",defaultMessage:"You’ve reached the maximum number of free blocks for your plan (100%). You won’t be able to create more content unless you upgrade to the Plus plan."}})},44041:(e,t,i)=>{i.d(t,{y:()=>b});i(667294);var o=i(647425),n=i(709291),s=i(286572),r=i(547307),a=i(296994),l=i(433929),d=i(352533),p=i(80444),u=i(992083),c=i(739343),h=i(887199),f=i(735993),m=i(170060),g=i(88893),v=i(535057),_=i(288280),y=i(897630),x=i(864891),C=i(785893);async function b(e,t){var i;s.sA(e,{from:t.from,for_subscription_tier:t.for,addOnFeature:t.addOnFeature});if((0,v.QM)()&&["block_limit_sidebar","block_limit_settings","block_limit_banner"].includes(t.from)&&!t.addOnFeature){if(e.device.isMobileBrowser){const i=await a.FF.payments.load();return void(await i.plans.showPlans({environment:e,from:t.from}))}return(0,m.iZ)(e)?void(0,f.a)({openedFrom:t.from}):void u.Z.setState({open:!0,openedFrom:"upsell",currentTab:"plans",defaultSubtab:void 0,highlightedSetting:void 0})}if(!t.addOnFeature&&(0,o.QM)(t.for))return;const b=(0,d.S$)({environment:e})&&"personal"===t.for;if(e.device.isMobileNative){if("ai"===t.addOnFeature){const t=(0,d.Y2)({environment:e})?(0,C.jsx)(n.FormattedMessage,{id:"upsellActions.noIAPForAIWithExternalPurchaseOption",defaultMessage:"Your workspace does not have unlimited AI. Visit on desktop to purchase Notion AI and go unlimited."}):(0,C.jsx)(n.FormattedMessage,{id:"upsellActions.noIAPForAIWithoutExternalPurchaseOption",defaultMessage:"Your workspace does not have unlimited AI. Unfortunately, unlimited AI cannot be purchased on mobile."});return void r.showErrorMessage(t)}if(!b)return}const M=p.default.state.currentSpaceStore;if(!M)return;if(!M.canAdmin())return;await y.bi(e);const w=_.subscriptionDataStoreInstance.state;if(!w)return;if("unsubscribed_admin"!==w.type&&"subscribed_admin"!==w.type)return void(t.dontOpenPlansOnCancel||u.Z.setState({open:!0,openedFrom:"upsell",currentTab:"plans",defaultSubtab:void 0,highlightedSetting:void 0}));if(g.ri(w))return void r.showErrorMessage(l.default.formatMessage(h.k.paymentMethodUnverified));if(g.ff(w)){const e=(0,C.jsx)(n.FormattedMessage,{id:"upsellActions.referToSalesRep",defaultMessage:"This workspace is part of a managed account. Please contact your account representative to discuss any changes to your subscription."});return void r.showErrorMessage(e)}if(b)return void(e.mobileNative&&M.id&&e.mobileNative.openUpgradeModal(M.id));if("revenueCat"===(null===(i=w.customerData)||void 0===i?void 0:i.activeSubscriptionPlatform)){const e=(0,C.jsx)(n.FormattedMessage,{id:"upsellActions.switchPlanFromInAppPurchase",defaultMessage:"You're currently subscribed through an in-app purchase with Apple. To switch plans, cancel your subscription with Apple first."});return void r.showErrorMessage(e)}const k=g.XX(w);if(t.addOnFeature&&(0,c.Fk)(k)){const e=(0,C.jsx)(n.FormattedMessage,{id:"upsellActions.noAddOnPurchaseDuringFreeTrial",defaultMessage:"Unfortunately, additional {addOn, select, ai {AI responses} other {features}} cannot be purchased while a workspace is on a free trial.",values:{addOn:t.addOnFeature}});r.showErrorMessage(e)}else{if(k&&g.MM(w))return t.addOnFeature?void x.af({environment:e,from:t.from,view:"add_ons",addOnFeature:t.addOnFeature,billingInterval:k.interval,pageSection:t.pageSection}):void x.af({environment:e,from:t.from,view:"plans",temporarySubscriptionTier:t.for,billingInterval:k.interval,pageSection:t.pageSection});{const i=(0,m.px)(e,t.for)?"ai_fifty_percent":void 0;y.I0(e,{subscriptionTier:t.for,from:t.from,addOnFeature:t.addOnFeature,coupon:i,isTrial:t.isTrial,dismissMobilePlansModal:t.dismissMobilePlansModal})}}}},735993:(e,t,i)=>{i.d(t,{X:()=>a,a:()=>r});var o=i(471924),n=i(286572),s=i(868187);function r(e){const{openedFrom:t}=e,i=o.Il();s.Z.open({modalId:i,openedFrom:t})}function a(e,t){n.LY(e,{modal_id:t,modal_type:"contextual"}),s.Z.setState({open:!1})}},868187:(e,t,i)=>{i.d(t,{Z:()=>s});var o=i(749085);class n extends o.default{getInitialState(){return{open:!1}}open(e){this.setState({open:!0,...e})}}const s=new n},739343:(e,t,i)=>{i.d(t,{Fk:()=>a,U6:()=>d,nx:()=>l});var o=i(730120),n=i(313991),s=i(407057),r=i(95477);function a(e){return!(null==e||!e.trialEnd)&&e.trialEnd>=o.ou.now().toSeconds()}function l(e){const t=function(e){if(!a(e))return;const t=1e3*(null==e?void 0:e.trialEnd);return null!=e&&e.periodEnd&&e.periodEnd>=o.ou.now().toSeconds()&&e.periodEnd<t?e.periodEnd:t}(e);return t?(0,s.Yx)(t,"long",n.SP):void 0}function d(e){return e?r.default.trials[e.id].duration:r.default.trials.default.duration}},114581:(e,t,i)=>{i.d(t,{h:()=>o});const o=(0,i(745238).CZ)("exclamationMarkTriangle",{default:{loader:()=>i.e(15187).then(i.bind(i,15187)),size:20},small:{loader:()=>i.e(79250).then(i.bind(i,979250)),size:16},mini:{loader:()=>i.e(93173).then(i.bind(i,793173)),size:14},large:{loader:()=>i.e(43339).then(i.bind(i,343339)),size:24}})},964275:(e,t,i)=>{i.d(t,{D:()=>s});i(667294);var o=i(745238),n=i(785893);const s=(0,o.IU)("closeSmall",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M3.732 11.052c-.303.308-.32.877.011 1.202.33.33.894.32 1.203.011L8 9.21l3.05 3.05c.32.325.872.32 1.197-.011a.857.857 0 00.01-1.197L9.21 8.002l3.05-3.056a.857.857 0 00-.01-1.197.857.857 0 00-1.198-.01L8 6.788 4.946 3.732c-.31-.303-.878-.32-1.203.01-.325.331-.314.895-.01 1.203l3.055 3.056-3.056 3.05z"})})},40462:(e,t,i)=>{i.d(t,{o:()=>s});i(667294);var o=i(745238),n=i(785893);const s=(0,o.IU)("globe2",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM3.88477 3.76465C4.56836 3.11523 5.39551 2.61621 6.31836 2.34277C5.83301 2.82812 5.42285 3.51172 5.11523 4.3457C4.63672 4.19531 4.22656 3.99707 3.88477 3.76465ZM9.68848 2.34961C10.6045 2.62305 11.4316 3.11523 12.1084 3.76465C11.7734 4.00391 11.3633 4.19531 10.8848 4.35254C10.5771 3.51172 10.167 2.82812 9.68848 2.34961ZM8.47852 2.56836C9.0459 2.8418 9.56543 3.58008 9.93457 4.58496C9.4834 4.66699 8.99805 4.71484 8.47852 4.73535V2.56836ZM6.06543 4.58496C6.44141 3.58008 6.9541 2.8418 7.52148 2.56836V4.73535C7.00195 4.71484 6.5166 4.66699 6.06543 4.58496ZM2.05273 7.58594C2.14844 6.42383 2.58594 5.35059 3.25586 4.46875C3.67285 4.77637 4.21289 5.04297 4.8418 5.24121C4.66406 5.95215 4.54785 6.74512 4.51367 7.58594H2.05273ZM11.4863 7.58594C11.4521 6.74512 11.3359 5.95215 11.1582 5.24121C11.7871 5.04297 12.3271 4.7832 12.7373 4.46875C13.4141 5.35059 13.8516 6.42383 13.9473 7.58594H11.4863ZM5.49121 7.58594C5.52539 6.84082 5.62793 6.12988 5.78516 5.4873C6.33203 5.59668 6.91309 5.66504 7.52148 5.69238V7.58594H5.49121ZM8.47852 7.58594V5.69238C9.08691 5.66504 9.66797 5.59668 10.2148 5.4873C10.3721 6.12988 10.4746 6.84082 10.5088 7.58594H8.47852ZM2.05273 8.54297H4.51367C4.54785 9.39746 4.66406 10.1973 4.8418 10.915C4.21973 11.1133 3.68652 11.373 3.27637 11.6807C2.59277 10.792 2.14844 9.71191 2.05273 8.54297ZM5.49121 8.54297H7.52148V10.4707C6.91992 10.498 6.33203 10.5664 5.79199 10.6689C5.62793 10.0195 5.51855 9.29492 5.49121 8.54297ZM8.47852 10.4707V8.54297H10.5088C10.4814 9.29492 10.3721 10.0195 10.208 10.6689C9.66797 10.5664 9.08691 10.498 8.47852 10.4707ZM11.1582 10.915C11.3428 10.1973 11.4521 9.39746 11.4863 8.54297H13.9473C13.8516 9.71191 13.4072 10.792 12.7236 11.6807C12.3135 11.373 11.7803 11.1133 11.1582 10.915ZM8.47852 11.4277C8.99121 11.4482 9.47656 11.4961 9.9209 11.5781C9.55176 12.5625 9.03906 13.2939 8.47852 13.5605V11.4277ZM6.0791 11.5781C6.52344 11.4961 7.00879 11.4482 7.52148 11.4277V13.5605C6.96094 13.2939 6.44824 12.5625 6.0791 11.5781ZM3.90527 12.3848C4.24023 12.1523 4.65039 11.9609 5.12207 11.8105C5.42969 12.6309 5.83301 13.3008 6.30469 13.7793C5.40234 13.5059 4.58203 13.0205 3.90527 12.3848ZM10.8779 11.8105C11.3496 11.9609 11.7598 12.1523 12.0947 12.3848C11.418 13.0205 10.5977 13.5059 9.69531 13.7793C10.167 13.3008 10.5703 12.6309 10.8779 11.8105Z"})})},222686:(e,t,i)=>{i.d(t,{f:()=>s});i(667294);var o=i(745238),n=i(785893);const s=(0,o.IU)("person",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M7.7832 8.00195C9.27344 8.00195 10.5381 6.67578 10.5381 4.95996C10.5381 3.28516 9.2666 2 7.7832 2C6.29297 2 5.01465 3.30566 5.02148 4.97363C5.02148 6.67578 6.28613 8.00195 7.7832 8.00195ZM3.51758 14.3594H12.0352C13.1631 14.3594 13.5527 14.0176 13.5527 13.3887C13.5527 11.6318 11.3242 9.21191 7.77637 9.21191C4.23535 9.21191 2 11.6318 2 13.3887C2 14.0176 2.38965 14.3594 3.51758 14.3594Z"})})},414734:(e,t,i)=>{i.d(t,{X:()=>s});i(667294);var o=i(745238),n=i(785893);const s=(0,o.IU)("personCrossedOut",{viewBox:"0 0 44 44",svg:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("path",{d:"M5.4857 44H0L44 8.56549V13.0061L5.4857 44Z"}),(0,n.jsx)("path",{d:"M39.8048 44H8.66491L25.6448 30.4378C26.9394 30.6489 28.1581 30.9719 29.3009 31.4067C31.5362 32.2374 33.4346 33.326 34.9964 34.6723C36.5725 36.0044 37.7761 37.4367 38.6071 38.9692C39.4525 40.5018 39.8752 41.9555 39.8752 43.3305C39.8752 43.5675 39.8517 43.7906 39.8048 44Z"}),(0,n.jsx)("path",{d:"M30.3971 16.7973C30.3971 16.8668 30.3965 16.9359 30.3952 17.0048L19.3828 25.9192C18.7467 25.7134 18.1339 25.4228 17.5446 25.0473C16.2408 24.2023 15.1876 23.0708 14.3853 21.6528C13.5972 20.2205 13.2032 18.6163 13.2032 16.8403C13.2032 15.0929 13.5972 13.5174 14.3853 12.1137C15.1876 10.7101 16.2408 9.60007 17.5446 8.78366C18.8485 7.96725 20.267 7.55905 21.8001 7.55905C23.3332 7.55905 24.7517 7.96009 26.0556 8.76218C27.3595 9.56426 28.4054 10.6671 29.1935 12.0708C29.9959 13.4601 30.3971 15.0356 30.3971 16.7973Z"})]})})}}]);