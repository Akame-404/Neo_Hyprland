"use strict";(globalThis.webpackChunknotion_next=globalThis.webpackChunknotion_next||[]).push([[9285],{219913:(e,t,o)=>{o.d(t,{h:()=>l,v:()=>r});var a=o(454642),n=o(359307);let s=a.getInAppCategoriesAndTemplates;function r(e){s=e??a.getInAppCategoriesAndTemplates}async function l(e){const{environment:t,spaceId:o}=e,a=await s(t,{spaceId:o});return"success"===a.type&&(n.Z.setState({data:a.data}),"current"===a.data.version)}},509285:(e,t,o)=>{o.r(t);var a=o(292595),n=o(76233),s=o(454642),r=o(80444),l=o(219913);const i="localPageTemplateSettings";function c(){const e=window.sessionStorage.getItem(i);if(e)return JSON.parse(e)}function d(e){e?window.sessionStorage.setItem(i,JSON.stringify(e)):window.sessionStorage.removeItem(i)}async function g(e,t){const o=c();if(!o)return console.log("Local settings not found, delegating to API."),s.getInAppCategoriesAndTemplates(e,t);return{type:"success",data:{version:"current",defaultCategoryId:"default",topCategories:[{id:"default",name:"Default",icon:{name:"default"},subcategories:[{id:"test",name:"Test",templates:[{type:"preset",uri:"notion://docs/simple_docs_preset"},{type:"pageTemplate",template:{emoji:"📔",icon:"/icons/book_lightgray.svg",name:o.title,id:"test-id",description:"Your test template",previewRootId:o.id,rootId:o.id,creatorId:"a5109c3c-545e-4750-82c1-7e81b4e2bec8",creatorName:"Notion",creatorAvatar:"https://s3.us-west-2.amazonaws.com/public.notion-static.com/creator-images/notion-1707780576649.png",creatorHandle:"notion",duplicates:-1,spaceId:o.spaceId}}]}]}]},status:200,headers:{}}}function p(){console.log("Template gallery will show local changes. Use __console.templateGallery.clear() to disable this."),(0,l.v)(g)}(0,a.exposeDebugValue)("templateGallery",{putCurrentPage(){const e=r.default.state.mainEditorCurrentBlockStore;if(!e)return void console.log("No current page found.");const t=(0,n.QaF)(e.getTitleValue())||"Untitled";d({title:t,id:e.id,spaceId:e.getSpaceId()}),console.log(`Adding local template "${t}".`),console.log("You may need to reload the page for changes to take effect."),p()},clear(){console.log("Template gallery will no longer show local changes."),console.log("You may need to reload the page for changes to take effect."),d(void 0),(0,l.v)(void 0)}}),c()?p():(0,l.v)(void 0)},359307:(e,t,o)=>{o.d(t,{Z:()=>s});var a=o(749085);class n extends a.default{getInitialState(){return{}}getTopTemplateCategories(){var e;const{data:t}=this.state;return t&&null!==(e=t.topCategories)&&void 0!==e&&e.length?Array.from(t.topCategories).filter((e=>{const t=e.subcategories||[];for(const a of t){var o;if(null!==(o=a.templates)&&void 0!==o&&o.length)return!0}return!1})):[]}}const s=new n}}]);