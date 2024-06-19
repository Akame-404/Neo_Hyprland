"use strict";(globalThis.webpackChunknotion_next=globalThis.webpackChunknotion_next||[]).push([[91848],{718250:(e,t,a)=>{a.d(t,{K:()=>s,O:()=>i});var n=a(745483);function i(e){n.Z.state.openModals.has(e)||(n.Z.state.openModals.add(e),n.Z.emit())}function s(e){n.Z.state.openModals.has(e)&&(n.Z.state.openModals.delete(e),n.Z.emit())}},745483:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(749085),i=a(292595);class s extends n.default{getInitialState(){return{openModals:new Set}}}const l=new s,o=l;(0,i.exposeDebugValue)("GlobalModalStore",l)},361254:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(749085);class i extends n.default{getInitialState(){return{open:!1,openAnimationCompleted:!0,closeAnimationCompleted:!0}}}const s=i},37014:(e,t,a)=>{a.d(t,{x:()=>l});a(667294);var n=a(689024),i=a(707124),s=a(785893);function l(e){const{label:t,children:a,gap:l}=e;return(0,s.jsxs)(n.jX,{gap:void 0===l?6:l,children:[t?(0,s.jsx)(i.q,{as:"label",styleName:"Body-12px/Medium",colorName:"secondary",children:t}):null,a]})}},394610:(e,t,a)=>{a.r(t),a.d(t,{ContactSalesModal:()=>F,ContactSalesModalContent:()=>B,getCompanySizeOptions:()=>D});a(757658);var n=a(667294),i=a(800480),s=a(184747),l=a(886628),o=a(724405),r=a(841892);const d=(0,a(745238).CZ)("infoBubble",{default:{loader:()=>a.e(39965).then(a.bind(a,39965)),size:20},small:{loader:()=>a.e(58109).then(a.bind(a,258109)),size:16},mini:{loader:()=>a.e(58036).then(a.bind(a,558036)),size:14},large:{loader:()=>a.e(5332).then(a.bind(a,5332)),size:24}});var u=a(630845),c=a(709291),p=a(286572),g=a(689024),m=a(374194),h=a(382914),b=a(366102),f=a(707124),M=a(863296),y=a(699884),x=a(526388),C=a(80444),v=a(530221),S=a(37014),j=a(542853),w=a(552275),z=a(814871);const T=(0,c.defineMessages)({additionalFeedbackPlaceholder:{id:"enterpriseContactModal.additionalFeedback.placeholder",defaultMessage:"What would you like to learn more about?"},title:{id:"enterpriseContactModal.initial.header",defaultMessage:"Get in touch with sales"},description:{id:"enterpriseContactModal.initial.caption",defaultMessage:"We'll work with you on your setup and help you land on the best plan."},nameLabel:{id:"enterpriseContactModal.nameLabel",defaultMessage:"Name"},emailLabel:{id:"enterpriseContactModal.emailLabel",defaultMessage:"Work email"},companySizeLabel:{id:"enterpriseContactModal.initial.companySizeLabel",defaultMessage:"Company size"},companySizeError:{id:"enterpriseContactModal.initial.companySizeError",defaultMessage:"Please select a company size"},questionLabel:{id:"enterpriseContactModal.questionLabel",defaultMessage:"Question"},sendRequest:{id:"enterpriseContactModal.sendLabel",defaultMessage:"Send request"},cancel:{id:"enterpriseContactModal.cancel",defaultMessage:"Cancel"},ineligibleForSales:{id:"enterpriseContactModal.companySize.error.label",defaultMessage:"The company size selected is not eligible for a sales assisted plan. Please message support if you have any questions."},yourQuestion:{id:"enterpriseContactModal.yourQuestion.title",defaultMessage:"Your question"},selectQuestion:{id:"enterpriseContactModal.selectQuestion.label",defaultMessage:"Select question"},setupTrial:{id:"enterpriseContactModalQuestionSelect.question.setup_trial",defaultMessage:"Setup an enterprise trial"},setupBusinessTrial:{id:"contactModalQuestionSelect.question.setup_business_trial",defaultMessage:"Setup a business trial"},liveDemo:{id:"enterpriseContactModalQuestionSelect.question.live_demo",defaultMessage:"Schedule a live demo"},planHelp:{id:"enterpriseContactModalQuestionSelect.question.plan_help",defaultMessage:"Need help choosing a plan"},manageGuests:{id:"enterpriseContactModalQuestionSelect.question.manage_guests",defaultMessage:"Need help managing guests"},other:{id:"enterpriseContactModalQuestionSelect.question.other",defaultMessage:"Other"},ineligibleCompanySize:{id:"enterpriseContactModalQuestionSelect.ineligibleCompanySize",defaultMessage:"We don't currently support sales-assisted plans for your company size."},ineligibleContactSupport:{id:"enterpriseContactModalQuestionSelect.ineligibleContactSupport",defaultMessage:"Check out eligible plans by dismissing this window or email us at support@makenotion.com if you have any questions."}}),q=(0,c.defineMessages)({lessThanOneHundred:{id:"enterpriseContactModal.initial.lessThan100Label",defaultMessage:"<100"},oneToThreeHundred:{id:"enterpriseContactModal.initial.100_299Label",defaultMessage:"100-299"},threeHundredToTwoThousand:{id:"enterpriseContactModal.initial.300_1999Label",defaultMessage:"300-1,999"},twoThousand:{id:"enterpriseContactModal.initial.2000PlusLabel",defaultMessage:"2,000+"}}),k={setup_enterprise_trial:T.setupTrial,setup_business_trial:T.setupBusinessTrial,live_demo:T.liveDemo,plan_help:T.planHelp,manage_guests:T.manageGuests,other:T.other},I=["setup_enterprise_trial","setup_business_trial","live_demo","plan_help","manage_guests","other"];var _=a(785893);const L=function(e){let{question:t,onSelect:a,invalid:n}=e;const s=(0,i.O7)(),l=(0,c.useIntl)(),r=(d=s.device.isMobile,(0,o.yK)((e=>({icon:{width:12,fill:e.icon.tertiary},inputStyle:{height:28,...d&&{height:42},padding:"2px 10px",display:"flex",alignItems:"center",justifyContent:"space-between",borderRadius:6,border:`1px solid ${e.stroke.regular}`,background:e.surface.wash,backgroundColor:e.surface.wash},invalidStyle:{boxShadow:e.outlineRedInputBoxShadow}})),[d]));var d;const u={menuTitle:l.formatMessage(T.yourQuestion),items:I,width:"auto",minWidth:360,getKey:e=>e,selectedItem:t,originGap:4,onSelect:e=>a(e),renderItem:e=>(0,_.jsx)(w.Z,{title:l.formatMessage(k[e.value]),...e}),renderOrigin:e=>(0,_.jsxs)(M.Z,{...e,isLarge:!0,style:{...r.inputStyle,...n?r.invalidStyle:{}},children:[(0,_.jsx)(f.q,{styleName:"Body-14px/Regular",colorName:t?"primary":"tertiary",children:l.formatMessage(t?k[t]:T.selectQuestion)}),(0,j.i)(r.icon)]})};return(0,_.jsx)(z.Z,{...u},"onboarding")},Z=8,Q=406;function F(e){let{initialQuestion:t}=e;const a=(0,i.O7)(),s=(0,l.VK)((()=>v.Z.state.open),[]),o=n.useCallback((()=>{p.g3(a),v.Z.setState({open:!1})}),[a]);return(0,_.jsx)(y.c,{isOpen:s,onDismiss:o,areaConstraint:{width:{type:"min",length:Q}},render:()=>(0,_.jsx)("div",{style:{overflow:"auto"},children:(0,_.jsx)(B,{initialQuestion:t,handleClose:o})})})}function B(e){let{initialQuestion:t,handleClose:a}=e;const o=(0,i.O7)(),r=(0,c.useIntl)(),b=W(),[f,M]=(0,l.VK)((()=>{const{currentUserStore:e}=C.default.state,t=null!=e&&e.isDefined()?e.getModel():void 0;return[null==t?void 0:t.getDisplayName(r),null==t?void 0:t.getEmail()]}),[r]),[y,x]=n.useState("initial"),[v,j]=n.useState(!1),[w,z]=n.useState([]),[q,k]=n.useState({name:f,email:M,question:t}),I="<100"===q.companySize;function Q(e,t){p.QO(o,{contactFieldType:t,contactFieldValue:e}),z((e=>e.filter((e=>e!==t)))),k((a=>({...a,[t]:e})))}return(0,s.Z)((()=>p.Zb(o))),"confirmation"===y?(0,_.jsx)(P,{}):(0,_.jsx)(h.sR,{header:(0,_.jsx)(h.vI,{iconAndTitle:(0,_.jsx)(h.kC,{iconGroup:d,title:r.formatMessage(T.title)}),description:r.formatMessage(T.description),descriptionStyle:b.description}),footer:(0,_.jsx)(N,{onSubmit:function(){const e=function(e){let{name:t,email:a,companySize:n,question:i,additionalFeedback:s}=e;const l=[];t||l.push("name");a&&u.B(a,"email")||l.push("email");n||l.push("companySize");i||l.push("question");"other"!==i||s||l.push("additionalFeedback");return l}(q);e&&e.length>0?z((t=>[...t,...e])):(p.Ls(o,{...q}),x("confirmation"))},onClose:a,intl:r,isIneligibleForSales:I}),children:(0,_.jsxs)(g.jX,{gap:24,padding:2,children:[(0,_.jsx)(O,{value:q.name,onChange:Q,isInvalid:w.includes("name"),intl:r}),(0,_.jsx)(H,{value:q.email,onChange:Q,isInvalid:w.includes("email"),intl:r}),(0,_.jsx)(R,{value:q.companySize,onChange:Q,isInvalid:w.includes("companySize"),intl:r}),(0,_.jsxs)(g.jX,{gap:Z,children:[(0,_.jsx)(S.x,{label:r.formatMessage(T.questionLabel),gap:Z,children:(0,_.jsx)(L,{question:q.question,invalid:w.includes("question"),onSelect:e=>{j("other"===e),Q(e,"question")}})}),v?(0,_.jsx)(m.Z,{textarea:!0,value:q.additionalFeedback,placeholder:r.formatMessage(T.additionalFeedbackPlaceholder),style:w.includes("additionalFeedback")?b.invalidInput:void 0,onChange:e=>Q(e.target.value,"additionalFeedback")}):null]})]})})}function N(e){let{onSubmit:t,onClose:a,intl:n,isIneligibleForSales:i}=e;return(0,_.jsxs)(g.jX,{gap:Z,children:[(0,_.jsx)(x.Z,{style:{width:"auto",...!i&&{display:"none"}},textWrap:!0,renderTooltip:()=>i?(0,_.jsxs)(_.Fragment,{children:[n.formatMessage(T.ineligibleCompanySize),(0,_.jsx)("br",{})," ",(0,_.jsx)("br",{}),n.formatMessage(T.ineligibleContactSupport)]}):null,render:e=>(0,_.jsx)(b.H,{...e,buttonInfo:{buttonType:"primary",label:n.formatMessage(T.sendRequest),onClick:t,isDisabled:i}})}),(0,_.jsx)(b.H,{buttonInfo:{buttonType:"secondary",label:n.formatMessage(T.cancel),onClick:a}})]})}function O(e){let{value:t,onChange:a,isInvalid:n,intl:i}=e;const s=W();return(0,_.jsx)(S.x,{label:i.formatMessage(T.nameLabel),gap:Z,children:(0,_.jsx)(m.Z,{focusInitial:!0,value:t,placeholder:"Ada Lovelace",style:n?s.invalidInput:void 0,onChange:e=>a(e.target.value,"name")})})}function H(e){let{value:t,onChange:a,isInvalid:n,intl:i}=e;const s=W();return(0,_.jsx)(S.x,{label:i.formatMessage(T.emailLabel),gap:Z,children:(0,_.jsx)(m.Z,{value:t,placeholder:"ada@lovelace.app",type:"email",style:n?s.invalidInput:void 0,onChange:e=>a(e.target.value,"email")})})}function R(e){let{value:t,onChange:a,isInvalid:n,intl:i}=e;const s=W(),l=D();return(0,_.jsxs)(S.x,{label:i.formatMessage(T.companySizeLabel),gap:Z,children:[(0,_.jsx)(g.jX,{gap:8,direction:"row",children:l.map((e=>{let{option:n,message:l}=e;const o=t===n;return(0,_.jsx)(M.Z,{style:o?s.selectedButton:void 0,onClick:()=>a(n,"companySize"),children:i.formatMessage(l)},n)}))}),n?(0,_.jsx)(f.q,{styleName:"Agate-10px/Medium",colorName:"uiRedPrimary",children:i.formatMessage(T.companySizeError)}):null]})}function P(){return(0,_.jsx)(h.sR,{header:null,footer:null,children:(0,_.jsxs)(g.jX,{align:"top-center",gap:8,children:[(0,_.jsx)("img",{style:{width:165,height:80},src:r.Z.images.feedbackThankYouPng}),(0,_.jsx)(f.q,{styleName:"Body-14px/Regular",style:{textAlign:"center",maxWidth:250},children:(0,_.jsx)(c.FormattedMessage,{id:"enterpriseContactModal.confirmation",defaultMessage:"We've received your inquiry and will contact you via email shortly."})})]})})}function W(){return(0,o.yK)((e=>({description:{maxWidth:250},invalidInput:{boxShadow:e.outlineRedInputBoxShadow},selectedButton:{color:e.text.uiBluePrimary,border:`1px solid ${e.text.uiBluePrimary}`}})),[])}function D(){return[{option:"<100",message:q.lessThanOneHundred},{option:"100-299",message:q.oneToThreeHundred},{option:"300-1999",message:q.threeHundredToTwoThousand},{option:"2000+",message:q.twoThousand}]}},114581:(e,t,a)=>{a.d(t,{h:()=>n});const n=(0,a(745238).CZ)("exclamationMarkTriangle",{default:{loader:()=>a.e(15187).then(a.bind(a,15187)),size:20},small:{loader:()=>a.e(79250).then(a.bind(a,979250)),size:16},mini:{loader:()=>a.e(93173).then(a.bind(a,793173)),size:14},large:{loader:()=>a.e(43339).then(a.bind(a,343339)),size:24}})},964275:(e,t,a)=>{a.d(t,{D:()=>s});a(667294);var n=a(745238),i=a(785893);const s=(0,n.IU)("closeSmall",{viewBox:"0 0 16 16",svg:(0,i.jsx)("path",{d:"M3.732 11.052c-.303.308-.32.877.011 1.202.33.33.894.32 1.203.011L8 9.21l3.05 3.05c.32.325.872.32 1.197-.011a.857.857 0 00.01-1.197L9.21 8.002l3.05-3.056a.857.857 0 00-.01-1.197.857.857 0 00-1.198-.01L8 6.788 4.946 3.732c-.31-.303-.878-.32-1.203.01-.325.331-.314.895-.01 1.203l3.055 3.056-3.056 3.05z"})})}}]);