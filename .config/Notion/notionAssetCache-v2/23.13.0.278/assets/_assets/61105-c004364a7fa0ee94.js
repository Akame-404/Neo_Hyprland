"use strict";(globalThis.webpackChunknotion_next=globalThis.webpackChunknotion_next||[]).push([[61105],{195209:(e,t,a)=>{a.d(t,{M5:()=>j,Mr:()=>x,PV:()=>B,Vu:()=>_,XC:()=>U,eH:()=>M,jC:()=>k,jL:()=>V,kL:()=>C,qg:()=>T,zK:()=>P});a(21703),a(757658),a(430541);var s=a(133728),o=a(772141),r=a(421202),i=a(815047),n=a(653965),d=a(937850),c=a(401898),l=a(476464),f=a(296994),p=a(379817),u=a(367669),m=a(75472),b=a(165598),v=a(195697),I=a(80444),g=a(785834),S=a(429677),w=a(44041),y=a(973466),R=a(891219),h=a(454642);async function P(e){const{environment:t,store:a,sudoModeStore:n,permissionsInviteStore:d,onInviteStart:f,contextualInviteStore:p,inviteOrigin:v}=e,{tokenQuery:I}=d.state;if((0,s.oH)(I.trim())&&(d.state.isInviteTargetsEmpty||!(0,S.ow)(d.state))){const e={type:"newUser",value:{email:I.trim()},source:"email"};m.Nd({target:e,permissionsInviteStore:d})||d.setState({...d.state,inviteTargets:[...d.state.inviteTargets,e],isInviteTargetsEmpty:!1,tokenQuery:""})}if(!d.state.isInviteTargetsEmpty&&d.state.inviteTargets.length>0){null==f||f();const e=d.state;if((0,S.ow)(e)){if(e.table===r.iU){if(!(0,b.OY)(a))throw new Error("Table mismatch.");const{inviteTargets:s,flowId:o,emailMessage:r}=e;d.reset();const i=await l.n_({environment:t,store:a,sudoModeStore:n,inviteTargets:s,inviteRole:void 0,isOnboarding:!1,invite:{inviteFlowId:o,inviteMessage:r,inviteOrigin:v}});return{success:i.success,requestedUserCount:i.success?Object.keys(i.requestedUsers).length:0}}if(e.table===i.bx){if(!(0,b.Mm)(a))throw new Error("Table mismatch.");const{inviteTargets:s,inviteRole:o,flowId:r}=e;d.reset();return{success:(await l.n_({environment:t,store:a,sudoModeStore:n,inviteTargets:s,inviteRole:o,isOnboarding:!1,invite:{inviteFlowId:r,inviteOrigin:v}})).success,requestedUserCount:0}}(0,c.t1)(e)}else{const{inviteRole:s,flowId:r,emailMessage:i}=e;d.reset();const c=await(0,u.mU)(a,e.inviteTargets);if((0,o.iC)(s)){const e=await l.n_({environment:t,store:a,sudoModeStore:n,inviteTargets:c,inviteRole:s,isOnboarding:!1,invite:{inviteFlowId:r,inviteMessage:i,inviteOrigin:v}});return e.success&&(null==p||p.setState({...null==p?void 0:p.state,invitedEmailToUserIdMap:e.invitedUsers})),{success:e.success,requestedUserCount:e.success?Object.keys(e.requestedUsers).length:0}}if((0,b.Y)(a)&&(0,S.Db)(e)){return{success:await l.GQ({environment:t,store:a,inviteTargets:e.inviteTargets,inviteRole:s,createNewTeamFlowId:r}),requestedUserCount:0}}}}return{success:!0,requestedUserCount:0}}function x(e){e.permissionsInviteStore.setState({...e.permissionsInviteStore.state,modalOpen:!1,flowId:void 0})}function M(e){const{permissionsInviteStore:t,contextualInviteStore:a}=e;if(!a)return;const s=[];t.state.inviteTargets.forEach((e=>{if("newUser"===e.type)s.push({email:e.value.email,isGuest:!0});else if("existingUser"===e.type){const t={...e.value,email:e.value.email,isGuest:"none"===e.spaceRole||"not_in_space"===e.spaceRole};s.push(t)}})),a.setState({...a.state,invitedUsers:s})}async function T(e){const{environment:t,store:a,sudoModeStore:s,permissionsInviteStore:o,contextualInviteStore:r,onInviteClick:i,onInviteComplete:n,inviteOrigin:d,intl:c}=e,{currentSpaceStore:l}=I.default.state;if((null==r?void 0:r.state.selection)===g.uq.workspace_member&&l&&(0,v.y2)(t)){if(!(await y.HD({environment:t,flowId:o.state.flowId||"",trackCreateTeamComplete:!1})))return;M({permissionsInviteStore:o,contextualInviteStore:r}),await(0,p.j_)({environment:t,spaceStore:l,contextualInviteStore:r,from:d,intl:c})}else M({permissionsInviteStore:o,contextualInviteStore:r});let f={success:!1,requestedUserCount:0};try{f=await P({environment:t,store:a,sudoModeStore:s,permissionsInviteStore:o,contextualInviteStore:r,onInviteStart:()=>{null==i||i()},inviteOrigin:d})}catch(u){}finally{null==n||n(f.success,f.requestedUserCount)}}async function C(e){const{environment:t,permissionsInviteStore:a,from:s}=e;await m.Aw({environment:t,permissionsInviteStoreState:a.state,from:s})||a.reset()}function B(e){const{permissionsInviteStore:t,targetToRemove:a,defaultRoleForNonBot:s}=e;if(!t.state.isInviteTargetsEmpty)if((0,S.ow)(t.state))if((0,S.ow)(t.state)){const e=t.state.inviteTargets.filter((e=>e!==a));0===e.length?t.setState({...t.state,inviteTargets:[],inviteRole:s,isInviteTargetsEmpty:!0}):t.setState({...t.state,inviteTargets:e})}else(0,c.t1)(t.state);else{const e=t.state.inviteTargets.filter((e=>e!==a));0===e.length?t.setState({...t.state,inviteTargets:[],inviteRole:s,isInviteTargetsEmpty:!0}):t.setState({...t.state,inviteTargets:e})}}function _(e){const{environment:t,onUpgradeButtonClick:a,upgradeButtonName:s}=e;w.y(t,{from:s,for:"plus"}),null==a||a()}async function j(e,t){const a=new Set(t),s=Array.from(a).map((async t=>{const a=await h.findUser(e,{email:t});if("success"===a.type){const e=a.data;if(e.value){return{type:"existingUser",value:e.value.value}}}return{type:"newUser",value:{email:t},source:"email"}}));return await Promise.all(s)}async function k(e){const t="invitee",{environment:a,permissionsInviteStore:o,event:r}=e;if(!o.state.isInviteTargetsEmpty&&(0,S.ow)(o.state)){const e=r.target.value;o.setState({...o.state,inputFocus:t,tokenQuery:e})}else{const e=r.target.value,{extractedEmails:i,newInputValue:n}=(0,s.zI)(e),d=(await j(a,i)).filter((e=>!m.Nd({target:e,permissionsInviteStore:o}))),c=[...o.state.inviteTargets,...d];c.length>0?o.setState({...o.state,inviteTargets:c,isInviteTargetsEmpty:!1,inputFocus:t,tokenQuery:n}):o.setState({...o.state,inviteTargets:[],isInviteTargetsEmpty:!0,inputFocus:t,tokenQuery:n})}}function U(e){const{environment:t,newRole:a,permissionsInviteStore:s}=e,{state:o}=s;R.TC(t,{...m.a_(t,o),invite_updated_role:a}),!o.isInviteTargetsEmpty&&(0,S.ow)(o)||s.setState({...o,inviteRole:a})}async function V(e){var t;const{query:a,environment:s,sectionLimit:o,intl:r,membersOnly:i}=e,{currentSpaceStore:c}=I.default.state;if(!c)return{inviteUsers:[],inviteBots:[],inviteGroups:[]};const{userLimit:l,botLimit:p,groupLimit:u,importContactLimit:m}=o,b=await f.FF.searchActions.load(),[v,g,S,{user:w,email:y},R]=await Promise.all([l>0?b.searchVisibleSpaceUsers({environment:s,query:a,membersOnly:i}):[],p>0?b.searchSpaceBots({environment:s,query:a}):[],u>0?b.searchSpaceGroups({query:a,intl:r}):[],b.searchEmailUser(s,a),m>0?(0,d.OI)(1500,h.searchContacts(s,{spaceId:c.id,limit:m,query:a})):void 0]),P=v.slice(0,l).map((e=>({type:"existingUser",value:e}))),x=g.slice(0,p).map((e=>({type:"bot",value:e}))),M=S.slice(0,u).map((e=>({type:"group",value:e})));w&&P.unshift({type:"existingUser",value:w}),y&&P.unshift({type:"newUser",value:{email:y},source:"email"});let T=[];return"success"===(null==R||null===(t=R.result)||void 0===t?void 0:t.type)&&(T=R.result.data.contacts.map((e=>({type:"newUser",value:{email:e.email,name:e.name,avatar_url:e.profile_photo},source:e.type})))),{inviteUsers:n.mN(P,(e=>e.value.email)),inviteBots:x,inviteGroups:M,importedContacts:T}}},886125:(e,t,a)=>{a.d(t,{Z:()=>i});a(667294);var s=a(709291),o=a(174136),r=a(785893);function i(e){return(0,r.jsx)(o.Z,{...e,children:"membership_admin"===e.role?(0,r.jsx)(s.FormattedMessage,{id:"spacePermissionsSettings.user.membershipAdmin",defaultMessage:"Membership admin"}):(0,r.jsx)(s.FormattedMessage,{id:"spacePermissionsSettings.user.workspaceOwner",defaultMessage:"Workspace owner"})})}},621752:(e,t,a)=>{a.d(t,{K:()=>R,Z:()=>h});var s=a(667294),o=a(886628),r=a(724405),i=a(554368),n=a(177420),d=a(519889),c=a(709291),l=a(401898),f=a(304708),p=a(80444),u=a(886125),m=a(588198),b=a(670301),v=a(164369),I=a(45653),g=a(344156),S=a(388978),w=a(785893);function y(e){const{actorStore:t,avatar:a,isLarge:s}=e,o=s?32:28;return t?t.table===n.cZ?(0,w.jsx)(b.Z,{botStore:t,size:o}):t.table===d.KJ?(0,w.jsx)(I.Z,{userStore:t,size:o}):t.table===i.y0?(0,w.jsx)(I.Z,{userStore:void 0,size:o}):void(0,l.t1)(t):a?(0,w.jsx)(I.Z,{avatar:a,size:o}):(0,w.jsx)(I.Z,{userStore:void 0,size:o})}function R(e){return"membership_admin"===e?"membership_admin":"editor"===e||"admin"===e?"admin":"none"===e||"guest"===e?"guest":"team_level_guest"===e?"team_level_guest":void("member"!==e&&"read_and_write"!==e&&"no_access"!==e&&"not_in_space"!==e&&e&&(0,l.t1)(e))}const h=function(e){const t=(0,c.useIntl)(),{actorStore:a,avatar:i,containerStyle:n,id:l,spaceRole:b,avatarBadge:I,caption:R,isLarge:h,restorationStatus:P}=e,x="admin"===b||"membership_admin"===b,M="guest"===b||"team_level_guest"===b,T=(0,o.VK)((()=>a?a.getDisplayName(t):null==i?void 0:i.name),[a,i,t]),C=(0,o.VK)((()=>{const{currentUserStore:e}=p.default.state;return!!e&&(!!a&&e.id===a.id)}),[a]),B=(0,r.yK)((e=>({titleYouIndicator:{color:e.mediumTextColor}})),[]),_=(0,o.VK)((()=>Boolean(R)?R:a?a.getDetail():null==i?void 0:i.email),[R,a,i]),j=(0,o.VK)((()=>(0,f.Mo)()),[]),k=(0,o.VK)((()=>p.default.state.currentSpaceStore),[]),[U,V]=(0,s.useState)(!1);return(0,w.jsxs)("div",{style:{display:"flex",alignItems:"center",maxWidth:h?"unset":300,marginLeft:h?2:0,...n},children:[(0,w.jsxs)("div",{style:{position:"relative",...!h&&{height:28,width:28}},children:[(0,w.jsx)(y,{actorStore:a,avatar:i,isLarge:h}),I]}),(0,w.jsxs)("div",{style:{minWidth:0,marginLeft:h?10:6,marginRight:h?10:6},children:[(0,w.jsxs)("div",{id:l,style:{display:"flex",gap:4},children:[(0,w.jsx)(v.Z,{children:C?(0,w.jsx)(c.FormattedMessage,{id:"cellMemberAvatar.displayName.title",defaultMessage:"{userFullDisplayName} <youIndicatorText>(You)</youIndicatorText>",values:{userFullDisplayName:T,youIndicatorText:e=>(0,w.jsx)("span",{style:B.titleYouIndicator,children:e})}}):T}),x&&(0,w.jsx)(u.Z,{role:b}),M&&(0,w.jsx)(m.b,{labelType:b}),j&&k&&P&&(0,w.jsx)(g.Z,{spaceStore:k,restorationStatus:P,didAttemptRecovery:U})]}),(0,w.jsx)(v.Z,{isSmall:!0,style:{display:"flex"},children:(0,w.jsx)(v.Z,{isSmall:!0,children:_})})]}),j&&!U&&k&&(null==a?void 0:a.table)===d.KJ&&T&&"canBeRestored"===(null==P?void 0:P.status)&&(0,w.jsx)(S.Z,{userStore:a,spaceId:k.id,onSubmit:()=>V(!0)})]})}},869507:(e,t,a)=>{a.d(t,{l:()=>i});a(667294);var s=a(709291),o=a(672495),r=a(785893);function i(e){return(0,r.jsx)(o.Z,{title:(0,r.jsx)(s.FormattedMessage,{id:"inviteUserModal.searchDropdown.selectPersonTitle",defaultMessage:"Select a person"}),...e})}},344156:(e,t,a)=>{a.d(t,{Z:()=>b});a(667294);var s=a(313991),o=a(886628),r=a(724405),i=a(407057),n=a(709291),d=a(137810),c=a(983420),l=a(825464),f=a(690403),p=a(526388),u=a(164369),m=a(785893);function b(e){let{spaceStore:t,restorationStatus:a,didAttemptRecovery:s}=e;const o=I();return(0,m.jsx)(p.Z,{placement:l.u.Bottom,renderTooltip:()=>(0,m.jsx)(v,{spaceStore:t,restorationStatus:a,didAttemptRecovery:s}),render:e=>(0,m.jsx)("div",{...e,children:(0,m.jsx)(f.Z,{content:(0,m.jsx)(u.Z,{style:o.recentlyReaddedText,children:(0,m.jsx)(n.FormattedMessage,{id:"userCell.recentlyReadded.label",defaultMessage:"Recently re-added"})}),style:o.recentlyReaddedBadge})})})}function v(e){let{spaceStore:t,restorationStatus:a,didAttemptRecovery:r}=e;const d=I(),{displayName:l,displayTime:f}=function(e){let{spaceStore:t,restorationStatus:a}=e;const r="restored"===a.status?{table:a.restoredByTable,id:a.restoredById,spaceId:t.id}:void 0,d=r?(0,c.nc)({parentStore:t,pointer:r}):void 0,l=(0,n.useIntl)(),{displayName:f}=(0,o.VK)((()=>({displayName:null==d?void 0:d.getDisplayName(l)})),[d,l]),p="restored"===a.status?(0,i.Yx)(a.restoredTime,"medium_with_time",s.SP):void 0;return{displayName:f,displayTime:p}}({spaceStore:t,restorationStatus:a});return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{style:d.tooltipFirstLine,children:(0,m.jsx)(n.FormattedMessage,{id:"userCell.recentlyReaddedTooltip.label",defaultMessage:"Member was removed and re-added within the last 30 days"})}),r&&(0,m.jsx)("div",{style:d.tooltipSecondLine,children:(0,m.jsx)(n.FormattedMessage,{id:"userCell.recentlyReaddedTooltip.inProgress.description",defaultMessage:"Restoration of access is in progress",values:{displayName:l,displayTime:f}})}),!r&&l&&f&&(0,m.jsx)("div",{style:d.tooltipSecondLine,children:(0,m.jsx)(n.FormattedMessage,{id:"userCell.recentlyReaddedTooltip.description",defaultMessage:"{displayName} restored their access on {displayTime}",values:{displayName:l,displayTime:f}})})]})}function I(){return(0,r.yK)((e=>({recentlyReaddedBadge:{background:e.fill.blue,marginLeft:0,maxWidth:"max-content"},recentlyReaddedText:{color:e.text.blue,fontSize:d.Z.fontSize.UISmall.desktop,fontStyle:"normal",fontWeight:400,lineHeight:"15px"},tooltipFirstLine:{color:e.text.contrast,fontWeight:d.Z.fontWeight.semibold},tooltipSecondLine:{color:e.text.contrastSecondary}})),[])}},388978:(e,t,a)=>{a.d(t,{Z:()=>x});var s=a(667294),o=a(355863),r=a(709291),i=a(137810),n=a(825464),d=a(573063),c=a(526388),l=a(800480),f=a(886628),p=a(724405),u=a(454642),m=a(547307),b=a(164964),v=a(382914),I=a(699884),g=a(969098),S=a(689024),w=a(973420),y=a(707124),R=a(45653),h=a(785893);function P(e){let{spaceId:t,userStore:a,onDismiss:o,onSubmit:i}=e;const n=(0,l.O7)(),d=a.id,c=(0,r.useIntl)(),I=(0,f.VK)((()=>a.getDisplayName(c)),[a,c]),g=(0,p.yK)((e=>({secondaryIcon:{fill:e.icon.uiBlueSecondary},primaryIcon:{fill:e.icon.uiBluePrimary},title:{color:e.text.primary,textAlign:"center",fontSize:17,fontWeight:500,lineHeight:"22px"}})),[]),P=(0,s.useCallback)((async()=>{const e=await u.recoverUserContentInSpace(n,{spaceId:t,userId:d});if("failed"===e.type)throw m.showError(e),e;i(),o(),b.oV({label:(0,h.jsx)(r.FormattedMessage,{id:"restoreAccessModal.snackbarMessage",defaultMessage:"Initiated restoration of access for{nbsp}{displayName}",values:{displayName:(0,h.jsx)("b",{children:I}),nbsp:(0,h.jsx)(h.Fragment,{children:" "})}})})}),[n,t,d,I,o,i]);return(0,h.jsx)(v.sR,{header:(0,h.jsx)(v.vI,{iconAndTitle:(0,h.jsxs)(S.jX,{align:"top-center",gap:9,children:[(0,h.jsx)(R.Z,{userStore:a,size:40}),(0,h.jsx)("div",{style:g.title,children:(0,h.jsx)(r.FormattedMessage,{defaultMessage:"Restore access",id:"restoreAccessModal.title"})})]}),description:(0,h.jsx)(r.FormattedMessage,{id:"restoreAccessModal.subtitle",defaultMessage:"Restore additional access for members who were removed and re-added within the last 30 days"})}),footer:(0,h.jsx)(v.a6,{layout:"vertical",primaryButtons:[{buttonType:"primary",label:(0,h.jsx)(r.FormattedMessage,{defaultMessage:"Restore access",id:"restoreAccessModal.restoreButton"}),onClick:P}],secondaryButtons:[{buttonType:"secondary",label:(0,h.jsx)(r.FormattedMessage,{defaultMessage:"Cancel",id:"restoreAccessModal.cancelButton"}),onClick:o}]}),children:(0,h.jsxs)(w.sg,{gap:24,children:[(0,h.jsx)(y.q,{styleName:"Body-14px/Regular",colorName:"primary",customStyles:{textAlign:"center"},children:(0,h.jsx)(r.FormattedMessage,{id:"restoreAccessModal.contextDescription",defaultMessage:"<b>{displayName}</b> already has access to their private pages",values:{b:e=>(0,h.jsx)("b",{children:e}),displayName:I}})}),(0,h.jsx)(y.q,{styleName:"Body-14px/Regular",colorName:"primary",customStyles:{textAlign:"center"},children:(0,h.jsx)(r.FormattedMessage,{id:"restoreAccessModal.actionDescription",defaultMessage:"Would you like to restore <b>{displayName}</b>'s access to their shared pages, groups, and teamspaces?",values:{b:e=>(0,h.jsx)("b",{children:e}),displayName:I}})})]})})}function x(e){let{spaceId:t,userStore:a,onSubmit:s}=e;const i=(0,r.useIntl)();return(0,h.jsx)(c.Z,{placement:n.u.Right,renderTooltip:()=>(0,h.jsx)(M,{}),render:e=>(0,h.jsx)(d.Z,{icon:o.s,ariaLabel:i.formatMessage({id:"restoreAccessButton.aria",defaultMessage:"Restore access"}),onClick:()=>async function(e,t,a){return await g.o.showAsyncModal((s=>(0,h.jsx)(I.c,{isOpen:s.isOpen,onDismiss:s.onDismiss,onClosed:s.onClosed,areaConstraint:{width:{type:"fixed",length:380}},render:()=>(0,h.jsx)(P,{spaceId:e,userStore:t,onDismiss:s.onDismiss,onSubmit:a})})))}(t,a,s),...e})})}function M(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{style:{fontWeight:i.Z.fontWeight.semibold},children:(0,h.jsx)(r.FormattedMessage,{id:"userCell.restoreAccessTooltip.label",defaultMessage:"Restore access to teamspaces, groups, and shared pages"})}),(0,h.jsx)("div",{children:(0,h.jsx)(r.FormattedMessage,{id:"userCell.restoreAccessTooltip.description",defaultMessage:"Only available if a member was removed and re-added in the last 30 days"})})]})}},379817:(e,t,a)=>{a.d(t,{Oh:()=>y,fC:()=>I,fr:()=>b,j_:()=>v,uJ:()=>w});a(757658),a(133728);var s=a(568626),o=a(924211),r=a(772141),i=(a(401898),a(454642)),n=a(476464),d=a(164964),c=a(433929),l=a(785834),f=a(88893),p=a(535057),u=a(304708),m=a(419306);function b(e){const{environment:t,spaceStore:a,contextualInviteStore:s}=e;!function(e){const{spaceStore:t,contextualInviteStore:a}=e,s=t.getRole();if(!s||!(0,r.RN)(s))return!1;if(!a.hasGuests())return!1;if(t.getDisableMembershipRequests())return!1;return(0,u.p1)()}({environment:t,spaceStore:a,contextualInviteStore:s})?!function(e){const{spaceStore:t,contextualInviteStore:a}=e,s=t.getRole();if(!s||!(0,r.dy)(s))return!1;if(!a.hasGuests())return!1;return(0,p.Mk)()}({environment:t,spaceStore:a,contextualInviteStore:s})?s.setState({...s.state,inviteStage:l.TG.closed}):s.startWorkspaceInvite():s.startRequestMembership()}async function v(e){const{environment:t,spaceStore:a,contextualInviteStore:o,from:r,intl:i}=e,{selection:c,flowId:l}=o.state;if("page_guest"===c||!o.hasGuests())return o.reset(),!1;const{inviteTargets:u,unknownEmails:m}=await g({environment:t,contextualInviteStore:o}),b={...o.state};o.reset();const v=(0,p.zt)(),I=v&&(0,f.o9)(v)?"editor":e.inviteRole??"read_and_write";try{await n.n_({environment:t,store:a,inviteTargets:u,inviteRole:I,isOnboarding:!1,invite:{inviteOrigin:r,inviteFlowId:l,disable_invite_email:!0}})}catch(S){return function(e,t){if(0===t.length)return;d.oV({label:e.formatMessage({id:"contextual_invite.contextual_invite_failure",defaultMessage:"{userCount, plural, one {Failed to invite {users} as member} other {Failed to invite {users} as members}}"},{users:w(t,e),userCount:t.length})})}(i,b.invitedUsers),s.log({level:"error",from:"contextualInviteHelpers",type:"inviteMembers.inviteTargets",data:{miscDataToConvertToString:{...b,inviteTargets:u}}}),!1}finally{m.length&&s.log({level:"error",from:"contextualInviteHelpers",type:"inviteMembers.unknownUserId",data:{miscDataToConvertToString:{...b,unknownEmails:m}}})}return!0}async function I(e){const{environment:t,spaceStore:a,originId:o,originType:r,reasonMessage:n,contextualInviteStore:c,intl:l}=e,{selection:f}=c.state;if("page_guest"===f||!c.hasGuests())return c.reset(),!1;const{inviteTargets:p,unknownEmails:u}=await g({environment:t,contextualInviteStore:c}),m={...c.state};c.reset();const b=[];try{const e=p.map((e=>i.requestAccess(t,{type:"actor-to-space",forActorId:e.value.id,spaceId:a.id,message:n,attributes:{origin_id:o,origin_type:r,origin_table:"share_menu"===r?"block":"space",add_permissions_on_approval:!1}}).catch((()=>b.push(e)))));await Promise.all(e)}catch(v){return function(e,t){if(0===t.length)return;d.oV({label:e.formatMessage({id:"contextual_invite.request_members_failure",defaultMessage:"Failed to request {users} to become members"},{users:w(t,e)})})}(l,m.invitedUsers),s.log({level:"error",from:"contextualInviteHelpers",type:"requestMembers.inviteTargets",data:{miscDataToConvertToString:{...m,inviteTargetsWithErrors:b}}}),!1}finally{u.length&&s.log({level:"error",from:"contextualInviteHelpers",type:"requestMembers.unknownUserId",data:{miscDataToConvertToString:{...m,unknownEmails:u}}})}return!0}async function g(e){const{environment:t,contextualInviteStore:a}=e,{invitedEmailToUserIdMap:s}=a.state,o=[],r=[];for(const i of a.state.invitedUsers){if(!i.isGuest)continue;const e=await S(t,i,s);e?o.push({type:"existingUser",value:{id:e,email:i.email,version:1}}):r.push(i.email)}return{inviteTargets:o,unknownEmails:r}}async function S(e,t,a){const s=await async function(e,t,a){let s=t.id;if(s||(s=a[t.email]),!s){const a=await i.findUser(e,{email:t.email});if("failed"!==a.type){const e=a.data;e.value&&(s=e.value.value.id)}}return s}(e,t,a);if(s)return s;const r=(0,o.E2)(c.default.getIntl()),n=await i.createEmailUser(e,{email:t.email,preferredLocaleOrigin:"inferred_from_inviter",preferredLocale:r});return"failed"!==n.type?n.data.userId:void 0}function w(e,t){return(0,m.W)(e.flatMap((e=>e.email||[])))}function y(e,t){const{state:a}=t,s=(0,p.zt)(),o=t.getGuestEmails();return{invite_flow_id:a.flowId,user_count:o.length,user_emails:o,invite_space_role_selection:a.selection,is_bot:!1,subscription_tier:s}}},785834:(e,t,a)=>{a.d(t,{TG:()=>i,ZP:()=>d,uq:()=>r});var s=a(749085),o=a(471924);let r=function(e){return e.workspace_member="workspace_member",e.request_workspace_member="request_workspace_member",e.page_guest="page_guest",e.closed="closed",e}({}),i=function(e){return e[e.closed=0]="closed",e[e.share_page=1]="share_page",e[e.share_workspace=2]="share_workspace",e[e.request_workspace=3]="request_workspace",e}({});class n extends s.default{getInitialState(){return{inviteStage:i.closed,selection:r.workspace_member,order:[r.workspace_member,r.page_guest],invitedUsers:[],invitedEmailToUserIdMap:{},flowId:o.Il()}}startWorkspaceInvite(){this.setState({...this.state,inviteStage:i.share_workspace,order:[r.workspace_member,r.page_guest],selection:r.workspace_member})}startRequestMembership(){this.setState({...this.state,inviteStage:i.request_workspace,order:[r.request_workspace_member,r.page_guest],selection:r.request_workspace_member})}hasGuests(){return this.state.invitedUsers.some((e=>e.isGuest))}getGuestEmails(){return this.state.invitedUsers.filter((e=>e.isGuest)).map((e=>e.email))}}const d=n},973466:(e,t,a)=>{a.d(t,{Cm:()=>P,HD:()=>T,Sq:()=>M,VG:()=>x,tW:()=>C});a(21703);var s=a(537955),o=a(568626),r=a(842875),i=a(471924),n=a(429369),d=a(27095),c=a(173314),l=a(76233),f=a(117224),p=a(454642),u=a(211302),m=a(104617),b=a(210228),v=a(433929),I=a(621115),g=a(195697),S=a(455838),w=a(80444),y=a(206258),R=a(366214),h=a(109867);async function P(e){let{environment:t,name:a,description:s,icon:o,accessLevel:r,isDefault:i,flowId:d,createTeamHome:c,teamPermissionRole:l,spacePermissionRole:u,members:m,settings:b}=e;const{currentSpaceStore:v}=w.default.getState();if(!v)throw new Error("currentSpaceStore does not exist");const I=v.id,g=await p.createTeam(t,{spaceId:I,name:a,description:s,icon:o,isDefault:i,accessLevel:r,teamPermissionRole:l,spacePermissionRole:u,members:m,settings:b});if("failed"===g.type)return void(0,h.Xy)(g);const{teamId:S}=g.data,R=y.zX.createChildStore(v,{table:n.e0,id:S,spaceId:I});return await R.load(),c&&await B({environment:t,teamStore:R}),f.o_(t,{store:R,flowId:d}),R}function x(e){var t;let{environment:a,page:s}=e;const o=i.Il(),r=(null===(t=s.getParentPointer())||void 0===t?void 0:t.table)!==n.e0?"page_to_team_nested":"page_to_team";f.kr(a,{from:r,flowId:o}),R.Z.setState({open:!0,pageStore:s,flowId:o})}async function M(e){var t;let{environment:a,page:s,flowId:o,intl:i}=e;const{accessLevel:d,spacePermissionRole:c,teamPermissionRole:f,members:p}=(0,g.Pr)(s),m=(s.isDefined()?s.getModel().getRenderTitle({intl:i,userTimeZone:(0,r.r)(),getRecordModel:s.getRecordModel}):void 0)??l.QaF(s.getTitleValue()),v=await P({environment:a,name:m,icon:null===(t=s.getIcon())||void 0===t?void 0:t.icon,accessLevel:d,isDefault:!1,description:"",flowId:o,createTeamHome:!1,teamPermissionRole:f,spacePermissionRole:c,members:p});if(!v)return;const{currentSpaceViewStore:I}=w.default.state;I&&(b.createAndCommit({userAction:"teamActions.movePageToCreatedTeam",environment:a,perform:e=>{u.at({environment:a,currentSpaceViewStore:I,transaction:e,teamStore:v,action:"move",value:{type:n.e0,id:v.id},targets:[s],location:{type:"append"}})}}),(0,h.RF)({environment:a,teamId:v.id,tab:S.a.Members,from:"create_team_from_page"}),await new Promise((e=>setTimeout((()=>(0,h.JX)({teamStore:v,environment:a})),100))))}async function T(e){let{environment:t,name:a,description:s,icon:o,flowId:r,trackCreateTeamComplete:i}=e;const{currentSpaceStore:d}=w.default.getState();if(!d)throw new Error("currentSpaceStore does not exist");const c=d.id;if(!c)return;const l=await p.enableTeams(t,{spaceId:c,defaultTeamName:a,defaultTeamIcon:o,defaultTeamDescription:s});if("failed"===l.type)return void(0,h.Xy)(l);const{teamId:u}=l.data,m=y.zX.createChildStore(d,{table:n.e0,id:u,spaceId:c});return await m.load(),await B({environment:t,teamStore:m}),f.NO(t,{spaceId:c,store:m,flowId:r}),i&&u&&f.o_(t,{store:m,flowId:r}),m}async function C(e){var t;let{environment:a,teamStore:o,from:r,buttonPopupStore:n}=e;if(!a.currentUser.id)return!1;const d=i.Il(),c=o.isDefault(),l=o.getTeamAccessLevel();if(c)return!1;const p=o.getName(),u=await P({environment:a,name:(0,s.nM)(p||""),description:"",icon:o.getRawIcon(),accessLevel:l,isDefault:c,createTeamHome:!0,teamPermissionRole:null===(t=o.getTeamPermission())||void 0===t?void 0:t.role,spacePermissionRole:o.getSpacePermissionRole(),members:[],settings:o.getSettings(),flowId:d});return!!u&&(f.$4(a,{store:u,from:r}),(0,h.hI)({environment:a,teamStore:u,shouldScroll:!0}),(0,h.RF)({environment:a,teamId:u.id,tab:S.a.General,from:"duplicate_team",buttonPopupStore:n}),new Promise((e=>setTimeout(e,500))).then((()=>{(0,I.Ke)(p)})),!0)}async function B(e){const{environment:t,teamStore:a}=e,s=w.default.state.currentSpaceStore,r=w.default.state.currentSpaceViewStore;if(!s||!r)return o.log({level:"error",from:"teamActions",type:"createHomepageOnTeamCreation-SpaceOrSpaceViewStoreError"}),!1;const i=(n=v.default.getIntl(),(0,c.G)(d.ms.teamsHomepage,n));var n;return!!(await m.rC({environment:t,item:i,isPrivate:!1,spaceStore:s,spaceViewStore:r,useMinimalTemplates:!1,type:"inTeam",teamStore:a,from:"homepage_team",appendOrPrepend:"prepend",isOnboarding:!1}))||(o.log({level:"error",from:"teamActions",type:"createHomepageOnTeamCreation-PageNotCreated"}),!1)}},366214:(e,t,a)=>{a.d(t,{Z:()=>r});var s=a(749085);class o extends s.default{getInitialState(){return{open:!1}}}const r=new o},49364:(e,t,a)=>{a.d(t,{R:()=>r});a(667294);var s=a(745238),o=a(785893);const r=(0,s.IU)("openTeam",{viewBox:"0 0 28 28",svg:(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("path",{d:"M3.24121 21.4326C3.24121 22.4082 3.80371 23.0322 4.7002 23.0322H22.4629C23.3506 23.0322 23.9131 22.4082 23.9131 21.4326V10.2178C23.9131 9.24219 23.3506 8.61816 22.4629 8.61816H17.2334V5.89355C17.2334 4.91797 16.6709 4.29395 15.7832 4.29395H4.7002C3.80371 4.29395 3.24121 4.91797 3.24121 5.89355V21.4326ZM4.65625 21.1074V6.21875C4.65625 5.86719 4.81445 5.70898 5.16602 5.70898H15.3174C15.6602 5.70898 15.8184 5.86719 15.8184 6.21875V21.1074C15.8184 21.4502 15.6602 21.6172 15.3174 21.6172H13.2959V19.0244C13.2959 18.2686 12.9619 17.917 12.2412 17.917H8.2334C7.5127 17.917 7.17871 18.2686 7.17871 19.0244V21.6172H5.16602C4.81445 21.6172 4.65625 21.4502 4.65625 21.1074ZM7.31934 9.5498H9.0332C9.24414 9.5498 9.39355 9.40918 9.39355 9.18945V7.52832C9.39355 7.31738 9.24414 7.16797 9.0332 7.16797H7.31934C7.1084 7.16797 6.97656 7.31738 6.97656 7.52832V9.18945C6.97656 9.40918 7.1084 9.5498 7.31934 9.5498ZM11.4414 9.5498H13.1465C13.3574 9.5498 13.5068 9.40918 13.5068 9.18945V7.52832C13.5068 7.31738 13.3574 7.16797 13.1465 7.16797H11.4414C11.2217 7.16797 11.0898 7.31738 11.0898 7.52832V9.18945C11.0898 9.40918 11.2217 9.5498 11.4414 9.5498ZM17.2334 21.4326V10.0332H21.9971C22.3398 10.0332 22.498 10.2002 22.498 10.543V21.1074C22.498 21.4502 22.3398 21.6172 21.9971 21.6172H17.2246C17.2334 21.5557 17.2334 21.4941 17.2334 21.4326ZM7.31934 13.0303H9.0332C9.24414 13.0303 9.39355 12.8896 9.39355 12.6699V11.0088C9.39355 10.7979 9.24414 10.6484 9.0332 10.6484H7.31934C7.1084 10.6484 6.97656 10.7979 6.97656 11.0088V12.6699C6.97656 12.8896 7.1084 13.0303 7.31934 13.0303ZM11.4414 13.0303H13.1465C13.3574 13.0303 13.5068 12.8896 13.5068 12.6699V11.0088C13.5068 10.7979 13.3574 10.6484 13.1465 10.6484H11.4414C11.2217 10.6484 11.0898 10.7979 11.0898 11.0088V12.6699C11.0898 12.8896 11.2217 13.0303 11.4414 13.0303ZM19.1582 13.4521H20.5732C20.749 13.4521 20.8721 13.3291 20.8721 13.1533V11.7822C20.8721 11.6064 20.749 11.4834 20.5732 11.4834H19.1582C18.9736 11.4834 18.8682 11.6064 18.8682 11.7822V13.1533C18.8682 13.3291 18.9736 13.4521 19.1582 13.4521ZM7.31934 16.5107H9.0332C9.24414 16.5107 9.39355 16.3613 9.39355 16.1504V14.4893C9.39355 14.2695 9.24414 14.1289 9.0332 14.1289H7.31934C7.1084 14.1289 6.97656 14.2695 6.97656 14.4893V16.1504C6.97656 16.3613 7.1084 16.5107 7.31934 16.5107ZM11.4414 16.5107H13.1465C13.3574 16.5107 13.5068 16.3613 13.5068 16.1504V14.4893C13.5068 14.2695 13.3574 14.1289 13.1465 14.1289H11.4414C11.2217 14.1289 11.0898 14.2695 11.0898 14.4893V16.1504C11.0898 16.3613 11.2217 16.5107 11.4414 16.5107ZM19.1582 16.8096H20.5732C20.749 16.8096 20.8721 16.6865 20.8721 16.5107V15.1396C20.8721 14.9639 20.749 14.8408 20.5732 14.8408H19.1582C18.9736 14.8408 18.8682 14.9639 18.8682 15.1396V16.5107C18.8682 16.6865 18.9736 16.8096 19.1582 16.8096ZM19.1582 20.167H20.5732C20.749 20.167 20.8721 20.0439 20.8721 19.8682V18.4971C20.8721 18.3213 20.749 18.1982 20.5732 18.1982H19.1582C18.9736 18.1982 18.8682 18.3213 18.8682 18.4971V19.8682C18.8682 20.0439 18.9736 20.167 19.1582 20.167ZM8.33008 19.3496C8.33008 19.165 8.42676 19.0684 8.61133 19.0684H11.8633C12.0566 19.0684 12.1445 19.165 12.1445 19.3496V21.6172H8.33008V19.3496Z"})})})},27095:(e,t,a)=>{a.d(t,{I0:()=>f,a7:()=>p,ms:()=>u});a(653965);var s=a(788779),o=a(598251);const r={sources:{"en-US":{previewRootId:"e950a58c-0d6f-42c3-8225-9e7adc5d4182",rootId:"e950a58c-0d6f-42c3-8225-9e7adc5d4182",spaceId:s.BP}},nameMessage:o.sY.getStartedPage},i={sources:{"en-US":{previewRootId:"89ba9061-3275-4d76-966f-11691fdfd72f",rootId:"89ba9061-3275-4d76-966f-11691fdfd72f",spaceId:s.BP},"ko-KR":{previewRootId:"0eb824c6-f768-47bc-9204-d94dbb912c6e",rootId:"0eb824c6-f768-47bc-9204-d94dbb912c6e",spaceId:s.BP},"ja-JP":{previewRootId:"09f3541c-8edb-4603-9bc3-02bd22cd7836",rootId:"09f3541c-8edb-4603-9bc3-02bd22cd7836",spaceId:s.BP},"fr-FR":{previewRootId:"b13cc3bd-a0a3-4b61-b482-63051d7804b5",rootId:"b13cc3bd-a0a3-4b61-b482-63051d7804b5",spaceId:s.BP},"de-DE":{previewRootId:"b2b10be2-1b2f-4a48-a453-532657bd8e92",rootId:"b2b10be2-1b2f-4a48-a453-532657bd8e92",spaceId:s.BP},"es-ES":{previewRootId:"a00ebb82-58f2-4b40-89ee-a65be3befabf",rootId:"a00ebb82-58f2-4b40-89ee-a65be3befabf",spaceId:s.BP},"es-LA":{previewRootId:"6d1f21ba-36cf-4c90-9ecb-d5e377942f3a",rootId:"6d1f21ba-36cf-4c90-9ecb-d5e377942f3a",spaceId:s.BP},"pt-BR":{previewRootId:"50a76940-a26e-443a-b752-1412855e6ad7",rootId:"50a76940-a26e-443a-b752-1412855e6ad7",spaceId:s.BP},"nb-NO":{previewRootId:"4c0f8e8c-3967-43ab-a0a8-a3a8ae837714",rootId:"4c0f8e8c-3967-43ab-a0a8-a3a8ae837714",spaceId:s.BP},"fi-FI":{previewRootId:"555c9896-0c2d-4af7-a951-1d81f051de2e",rootId:"555c9896-0c2d-4af7-a951-1d81f051de2e",spaceId:s.BP},"sv-SE":{previewRootId:"751d20c2-e2be-4e61-921a-adb553651c8c",rootId:"751d20c2-e2be-4e61-921a-adb553651c8c",spaceId:s.BP},"da-DK":{previewRootId:"8e0ffb71-86cb-46bf-abf2-720dcb4378f9",rootId:"8e0ffb71-86cb-46bf-abf2-720dcb4378f9",spaceId:s.BP},"nl-NL":{previewRootId:"53da1632-5152-4b4f-b440-19b82802360b",rootId:"53da1632-5152-4b4f-b440-19b82802360b",spaceId:s.BP}},nameMessage:o.sY.getStartedPage},n={sources:{"en-US":{previewRootId:"30fa18a6-609e-4f5b-af3d-31906c46fe23",rootId:"30fa18a6-609e-4f5b-af3d-31906c46fe23",spaceId:s.BP},"ko-KR":{previewRootId:"3afd60d5-3ce7-431a-b812-2c836b7596a3",rootId:"3afd60d5-3ce7-431a-b812-2c836b7596a3",spaceId:s.BP},"ja-JP":{previewRootId:"dd2f1d05-d4ef-48a0-899c-10fe0346a447",rootId:"dd2f1d05-d4ef-48a0-899c-10fe0346a447",spaceId:s.BP},"fr-FR":{previewRootId:"ac411712-ee48-4589-828d-b4e5827efc17",rootId:"ac411712-ee48-4589-828d-b4e5827efc17",spaceId:s.BP},"de-DE":{previewRootId:"0c5be7d7-cfcf-417b-824a-1a280254a58e",rootId:"0c5be7d7-cfcf-417b-824a-1a280254a58e",spaceId:s.BP},"es-ES":{previewRootId:"35c18cd6-99a8-47f3-91ee-40dbfec922fa",rootId:"35c18cd6-99a8-47f3-91ee-40dbfec922fa",spaceId:s.BP},"es-LA":{previewRootId:"017372b2-9d34-4118-ad13-9b8e15c30ebd",rootId:"017372b2-9d34-4118-ad13-9b8e15c30ebd",spaceId:s.BP},"pt-BR":{previewRootId:"035cfcde-4292-4905-82b2-6517e58a28b9",rootId:"035cfcde-4292-4905-82b2-6517e58a28b9",spaceId:s.BP},"nb-NO":{previewRootId:"42a8570d-5be6-4be4-9ca3-0569f54863bf",rootId:"42a8570d-5be6-4be4-9ca3-0569f54863bf",spaceId:s.BP},"fi-FI":{previewRootId:"5f103e1f-2659-4c6a-bb30-705d2dae0774",rootId:"5f103e1f-2659-4c6a-bb30-705d2dae0774",spaceId:s.BP},"sv-SE":{previewRootId:"811aca42-41c0-4f83-9e08-e795d7a5f803",rootId:"811aca42-41c0-4f83-9e08-e795d7a5f803",spaceId:s.BP},"da-DK":{previewRootId:"7643a79b-68c8-46af-ae10-f089cb1ae62b",rootId:"7643a79b-68c8-46af-ae10-f089cb1ae62b",spaceId:s.BP},"nl-NL":{previewRootId:"6e5d9018-2dc0-4dc7-802c-be95d99f1660",rootId:"6e5d9018-2dc0-4dc7-802c-be95d99f1660",spaceId:s.BP}},nameMessage:o.sY.getStartedPage},d={sources:{"en-US":{previewRootId:"bd0b93b9-a0e9-4582-a164-98acdc7a5b45",rootId:"bd0b93b9-a0e9-4582-a164-98acdc7a5b45",spaceId:s.BP},"ko-KR":{previewRootId:"ecdfe65a-28ee-46d2-a82b-99573e3dd63d",rootId:"ecdfe65a-28ee-46d2-a82b-99573e3dd63d",spaceId:s.BP},"ja-JP":{previewRootId:"56dd4a06-5073-46d2-8aca-8e37d90e5610",rootId:"56dd4a06-5073-46d2-8aca-8e37d90e5610",spaceId:s.BP},"fr-FR":{previewRootId:"1f8febec-2e84-4be2-a67d-7b5165845a4b",rootId:"1f8febec-2e84-4be2-a67d-7b5165845a4b",spaceId:s.BP},"de-DE":{previewRootId:"ee67a0e4-8343-4dd6-9636-9504cae6c573",rootId:"ee67a0e4-8343-4dd6-9636-9504cae6c573",spaceId:s.BP},"es-ES":{previewRootId:"eabf4d1f-9a77-441f-88fb-de9e9e0dc26e",rootId:"eabf4d1f-9a77-441f-88fb-de9e9e0dc26e",spaceId:s.BP},"es-LA":{previewRootId:"56ba9c1f-2a28-4d05-910c-e89fb051327d",rootId:"56ba9c1f-2a28-4d05-910c-e89fb051327d",spaceId:s.BP},"pt-BR":{previewRootId:"07ffa801-adfb-41f3-809b-87f69ae9e9cd",rootId:"07ffa801-adfb-41f3-809b-87f69ae9e9cd",spaceId:s.BP},"nb-NO":{previewRootId:"62f63581-5683-49a3-8812-32e2de74a6a6",rootId:"62f63581-5683-49a3-8812-32e2de74a6a6",spaceId:s.BP},"fi-FI":{previewRootId:"f01bdcc5-d573-4790-b605-988df0f3a5ea",rootId:"f01bdcc5-d573-4790-b605-988df0f3a5ea",spaceId:s.BP},"sv-SE":{previewRootId:"e404919f-5dda-4fc3-a28f-6550e70cee12",rootId:"e404919f-5dda-4fc3-a28f-6550e70cee12",spaceId:s.BP},"da-DK":{previewRootId:"cee1de64-79f4-45b4-85d5-1ffae9624a8e",rootId:"cee1de64-79f4-45b4-85d5-1ffae9624a8e",spaceId:s.BP},"nl-NL":{previewRootId:"86ecfb21-c0ed-42cb-864c-83890d49cb51",rootId:"86ecfb21-c0ed-42cb-864c-83890d49cb51",spaceId:s.BP}},nameMessage:o.sY.getStartedPage},c={sources:{"en-US":{previewRootId:"fff17954-d9c2-805b-9d0a-eb8a6aab4228",rootId:"fff17954-d9c2-805b-9d0a-eb8a6aab4228",spaceId:s.BP}},nameMessage:o.sY.getStartedPage},l={sources:{"en-US":{previewRootId:"fff17954-d9c2-8029-a07e-c769f10e8ac6",rootId:"fff17954-d9c2-8029-a07e-c769f10e8ac6",spaceId:s.BP}},nameMessage:o.sY.getStartedPage},f={desktopPersonal:i,desktopTeamCreate:n,desktopTeamJoin:d,desktopTeamCreateWithComment:c,desktopTeamJoinWithComment:l,mobile:{sources:{"en-US":{previewRootId:"27fa9add-6ec7-433a-88c9-58279f5055c3",rootId:"27fa9add-6ec7-433a-88c9-58279f5055c3",spaceId:s.BP},"ko-KR":{previewRootId:"24c31e38-d546-423f-b3cb-a0533e711d02",rootId:"24c31e38-d546-423f-b3cb-a0533e711d02",spaceId:s.BP},"ja-JP":{previewRootId:"6e87073b-2877-44d1-9df7-2dd266bb35e3",rootId:"6e87073b-2877-44d1-9df7-2dd266bb35e3",spaceId:s.BP},"fr-FR":{previewRootId:"d6367cec-2e43-4558-882d-fb9a00545fef",rootId:"d6367cec-2e43-4558-882d-fb9a00545fef",spaceId:s.BP},"de-DE":{previewRootId:"172fd543-704b-489a-8d2e-7d1255f51bef",rootId:"172fd543-704b-489a-8d2e-7d1255f51bef",spaceId:s.BP},"es-ES":{previewRootId:"8f27f9ff-57f2-4c07-ad65-55c7f7f7501f",rootId:"8f27f9ff-57f2-4c07-ad65-55c7f7f7501f",spaceId:s.BP},"es-LA":{previewRootId:"24f220ca-372b-4003-8e74-13291220c778",rootId:"24f220ca-372b-4003-8e74-13291220c778",spaceId:s.BP},"pt-BR":{previewRootId:"e16c2241-0f08-4946-908e-c5e6612b0a8c",rootId:"e16c2241-0f08-4946-908e-c5e6612b0a8c",spaceId:s.BP},"nb-NO":{previewRootId:"2021f38b-f367-4f6c-8232-73387a4dcfb6",rootId:"2021f38b-f367-4f6c-8232-73387a4dcfb6",spaceId:s.BP},"fi-FI":{previewRootId:"b40e41dc-6c0f-4d74-b3ad-3df012f49b01",rootId:"b40e41dc-6c0f-4d74-b3ad-3df012f49b01",spaceId:s.BP},"sv-SE":{previewRootId:"5759d5ff-246c-4daf-85f3-7fc9884a4bf7",rootId:"5759d5ff-246c-4daf-85f3-7fc9884a4bf7",spaceId:s.BP},"da-DK":{previewRootId:"b89fffe8-2e2d-4574-84e1-f81b26df5c1e",rootId:"b89fffe8-2e2d-4574-84e1-f81b26df5c1e",spaceId:s.BP},"nl-NL":{previewRootId:"2bfc9604-0e06-4ff2-90cf-c382d6bf341b",rootId:"2bfc9604-0e06-4ff2-90cf-c382d6bf341b",spaceId:s.BP}},nameMessage:o.sY.getStartedPageMobile},evernote:{sources:{"en-US":{previewRootId:"2e568628-70b1-4f35-934e-81ea4263d0e8",rootId:"2e568628-70b1-4f35-934e-81ea4263d0e8",spaceId:s.BP},"ko-KR":{previewRootId:"3d8c8d33-f904-41f7-a3ff-b6272c633079",rootId:"3d8c8d33-f904-41f7-a3ff-b6272c633079",spaceId:s.BP},"ja-JP":{previewRootId:"9aefc3b4-f172-4917-b1c7-495c26ec37f9",rootId:"9aefc3b4-f172-4917-b1c7-495c26ec37f9",spaceId:s.BP},"fr-FR":{previewRootId:"4453c56e-831c-4203-83fc-9736e276b7dc",rootId:"4453c56e-831c-4203-83fc-9736e276b7dc",spaceId:s.BP},"de-DE":{previewRootId:"6239e7bb-e6a6-4cb4-b4fa-236035bad7f7",rootId:"6239e7bb-e6a6-4cb4-b4fa-236035bad7f7",spaceId:s.BP},"es-ES":{previewRootId:"95dafcd5-6243-4838-bea1-8e19b0596f6f",rootId:"95dafcd5-6243-4838-bea1-8e19b0596f6f",spaceId:s.BP},"es-LA":{previewRootId:"34d8ae09-8161-49ec-ae2d-c188c477bb90",rootId:"34d8ae09-8161-49ec-ae2d-c188c477bb90",spaceId:s.BP},"pt-BR":{previewRootId:"cb2a5d30-074f-4c07-97b5-61147e0ea504",rootId:"cb2a5d30-074f-4c07-97b5-61147e0ea504",spaceId:s.BP}},nameMessage:o.sY.getStartedPageEvernote},web:r,desktopPersonalVariant1:{sources:{"en-US":{previewRootId:"b708d616-b6d0-42db-b1d0-6d349da8e106",rootId:"b708d616-b6d0-42db-b1d0-6d349da8e106",spaceId:s.BP}},nameMessage:o.sY.getStartedPage},desktopPersonalVariant2:{sources:{"en-US":{previewRootId:"de42d40c-a364-4d64-8f6f-727414ed6b1c",rootId:"de42d40c-a364-4d64-8f6f-727414ed6b1c",spaceId:s.BP}},nameMessage:o.sY.getStartedPage},desktopPersonalVariant3:{sources:{"en-US":{previewRootId:"0e8ebd2c-2fee-4489-ba21-6e6d077833bc",rootId:"0e8ebd2c-2fee-4489-ba21-6e6d077833bc",spaceId:s.BP}},nameMessage:o.sY.getStartedPage},desktopPersonalVariant4:{sources:{"en-US":{previewRootId:"6f793ca7-803a-40b4-914e-b9da1ac34f0a",rootId:"6f793ca7-803a-40b4-914e-b9da1ac34f0a",spaceId:s.BP}},nameMessage:o.sY.getStartedPage},desktopPersonalVariant5:{sources:{"en-US":{previewRootId:"462c34ed-0e3e-470f-b2b0-4b61e067302a",rootId:"462c34ed-0e3e-470f-b2b0-4b61e067302a",spaceId:s.BP}},nameMessage:o.sY.getStartedPage},desktopPersonalVariant6:{sources:{"en-US":{previewRootId:"9891dc6f-d444-43f9-8cd3-fac4a8722b1d",rootId:"9891dc6f-d444-43f9-8cd3-fac4a8722b1d",spaceId:s.BP}},nameMessage:o.sY.getStartedPage}},p=["desktopTeamCreateWithComment","desktopTeamJoinWithComment"],u=([c,l].flatMap((e=>Object.values(e.sources))).map((e=>e.rootId)),{teamsHomepage:{emoji:"🏠",nameMessage:o.sY.teamsHomepage,sources:{"en-US":{previewRootId:"4cd0eced-e273-46c2-84f5-a7efd7fbdd2f",rootId:"4cd0eced-e273-46c2-84f5-a7efd7fbdd2f",spaceId:s.BP},"ko-KR":{previewRootId:"82be252e-5184-44cd-a91b-a7d6ffdefac6",rootId:"82be252e-5184-44cd-a91b-a7d6ffdefac6",spaceId:s.BP},"ja-JP":{previewRootId:"bea8efd0-61d7-495b-a255-5c1f40753cf7",rootId:"bea8efd0-61d7-495b-a255-5c1f40753cf7",spaceId:s.BP},"fr-FR":{previewRootId:"12a6eaa5-30f7-419b-aee7-1be2dbc7278c",rootId:"12a6eaa5-30f7-419b-aee7-1be2dbc7278c",spaceId:s.BP},"de-DE":{previewRootId:"75db54d0-46ad-43b1-8ef0-7556ce0e9069",rootId:"75db54d0-46ad-43b1-8ef0-7556ce0e9069",spaceId:s.BP},"es-ES":{previewRootId:"9ac64262-cad7-44f3-bfae-96dabec9e770",rootId:"9ac64262-cad7-44f3-bfae-96dabec9e770",spaceId:s.BP},"es-LA":{previewRootId:"5b51de44-604b-4a96-b421-9f3e3cf470d2",rootId:"5b51de44-604b-4a96-b421-9f3e3cf470d2",spaceId:s.BP},"pt-BR":{previewRootId:"b9626438-4451-441c-9608-35ab50e3b182",rootId:"b9626438-4451-441c-9608-35ab50e3b182",spaceId:s.BP}}}})}}]);