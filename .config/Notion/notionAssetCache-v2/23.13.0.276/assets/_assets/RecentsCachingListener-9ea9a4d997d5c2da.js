"use strict";(globalThis.webpackChunknotion_next=globalThis.webpackChunknotion_next||[]).push([[67077],{679026:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r(667294),o=r(886628),a=r(80444),c=r(319385),i=r(269327),s=r(744890);function l(){const e=(0,o.VK)((()=>{var e;const{currentSpaceStore:t}=a.default.state;if(c.default.checkGate({gateName:"home_recents_caching"})&&i.Z.getIsInitialized()&&null!=t&&t.id)return null===(e=i.Z.get(t.id))||void 0===e||null===(e=e.slice(0,s.mt))||void 0===e?void 0:e.map((e=>e.store))}),[]);return(0,n.useEffect)((()=>{e&&(0,s.Nj)(e)}),[e]),null}const u=n.memo(l)},744890:(e,t,r)=>{r.d(t,{Nj:()=>l,RE:()=>u,mt:()=>i});var n=r(430548),o=r(421202),a=r(80444),c=r(206258);const i=10;const s=new class{constructor(){this.localStorageStore=new n.ZP("recentsCache",!1,"preference")}get(e){return this.localStorageStore.get(e)}set(e,t){this.localStorageStore.set(e,t)}remove(e){this.localStorageStore.remove(e)}};function l(e){var t;const r=null===(t=a.default.state.currentSpaceViewStore)||void 0===t?void 0:t.id;if(!r)return!1;const n=e.filter((e=>e.canRead())).slice(0,i);return s.set(r,n.map((e=>e.id))),!0}function u(){const{currentSpaceViewStore:e}=a.default.state;if(!e)return;const t=s.get(e.id);return t?t.map((t=>c.G.createChildStore(e,{id:t,table:o.iU,spaceId:e.id}))):void 0}}}]);