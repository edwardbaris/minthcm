import{p as Z,ae as Q,af as se,g as X,u as ee,ag as ae,z as w,ah as re,H as U,K as te,f as ne,ai as O,k as B,j as r,aj as le,ak as oe,al as ie,am as ue,an as ce,ao as de,ap as me,aq as ve,o as fe,ar as be,as as pe,at as _e,au as ye,av as K,aw as ge,ax as Ve,ay as ke,E as Ae,az as Le,e as j,aA as he,I as Ee,aB as Pe,aC as Ce,aD as Se,l as Te,aE as we,M as xe,a2 as Be,aF as Me,aG as Re,Z as Ie,n as V,q as x,C as h,N as Ne,t as I,s as t,aH as De,aI as Fe,r as P,aJ as $e,aK as Ue,P as N,w as $,aL as J,y as z,ab as Oe,aa as ze,F as H,v as W,a as He,_ as Ge}from"./index.af03a0f5.js";import{_ as G}from"./Field.vue_vue_type_style_index_0_lang.4e865ee0.js";import{V as Ke}from"./VSpacer.661a7ef3.js";const je=Z({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...Q({origin:"center center",scrollStrategy:"block",transition:{component:se},zIndex:2400})},"VDialog"),Ye=X()({name:"VDialog",props:je(),emits:{"update:modelValue":a=>!0,afterLeave:()=>!0},setup(a,b){let{emit:e,slots:s}=b;const y=ee(a,"modelValue"),{scopeId:k}=ae(),l=w();function d(u){var v,g;const c=u.relatedTarget,m=u.target;if(c!==m&&((v=l.value)==null?void 0:v.contentEl)&&((g=l.value)==null?void 0:g.globalTop)&&![document,l.value.contentEl].includes(m)&&!l.value.contentEl.contains(m)){const i=ie(l.value.contentEl);if(!i.length)return;const o=i[0],A=i[i.length-1];c===o?A.focus():o.focus()}}re&&U(()=>y.value&&a.retainFocus,u=>{u?document.addEventListener("focusin",d):document.removeEventListener("focusin",d)},{immediate:!0});function E(){var u;((u=l.value)==null?void 0:u.contentEl)&&!l.value.contentEl.contains(document.activeElement)&&l.value.contentEl.focus({preventScroll:!0})}function C(){e("afterLeave")}return U(y,async u=>{var c;u||(await te(),(c=l.value.activatorEl)==null||c.focus({preventScroll:!0}))}),ne(()=>{const u=O.filterProps(a),c=B({"aria-haspopup":"dialog","aria-expanded":String(y.value)},a.activatorProps),m=B({tabindex:-1},a.contentProps);return r(O,B({ref:l,class:["v-dialog",{"v-dialog--fullscreen":a.fullscreen,"v-dialog--scrollable":a.scrollable},a.class],style:a.style},u,{modelValue:y.value,"onUpdate:modelValue":v=>y.value=v,"aria-modal":"true",activatorProps:c,contentProps:m,role:"dialog",onAfterEnter:E,onAfterLeave:C},k),{activator:s.activator,default:function(){for(var v=arguments.length,g=new Array(v),i=0;i<v;i++)g[i]=arguments[i];return r(le,{root:"VDialog"},{default:()=>{var o;return[(o=s.default)==null?void 0:o.call(s,...g)]}})}})}),oe({},l)}});function qe(a){const b=K(a);let e=-1;function s(){clearInterval(e)}function y(){s(),te(()=>b.value=a)}function k(l){const d=l?getComputedStyle(l):{transitionDuration:.2},E=parseFloat(d.transitionDuration)*1e3||200;if(s(),b.value<=0)return;const C=performance.now();e=window.setInterval(()=>{const u=performance.now()-C+E;b.value=Math.max(a-u,0),b.value<=0&&s()},E)}return Pe(s),{clear:s,time:b,start:k,reset:y}}const Je=Z({multiLine:Boolean,text:String,timer:[Boolean,String],timeout:{type:[Number,String],default:5e3},vertical:Boolean,...ue({location:"bottom"}),...ce(),...de(),...me(),...ve(),...fe(Q({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),We=X()({name:"VSnackbar",props:Je(),emits:{"update:modelValue":a=>!0},setup(a,b){let{slots:e}=b;const s=ee(a,"modelValue"),{positionClasses:y}=be(a),{scopeId:k}=ae(),{themeClasses:l}=pe(a),{colorClasses:d,colorStyles:E,variantClasses:C}=_e(a),{roundedClasses:u}=ye(a),c=qe(Number(a.timeout)),m=w(),v=w(),g=K(!1),i=K(0),o=w(),A=ge(Ve,void 0);ke(()=>!!A,()=>{const f=Ce();Se(()=>{o.value=f.mainStyles.value})}),U(s,S),U(()=>a.timeout,S),Ae(()=>{s.value&&S()});let L=-1;function S(){c.reset(),window.clearTimeout(L);const f=Number(a.timeout);if(!s.value||f===-1)return;const R=Le(v.value);c.start(R),L=window.setTimeout(()=>{s.value=!1},f)}function D(){c.reset(),window.clearTimeout(L)}function n(){g.value=!0,D()}function p(){g.value=!1,S()}function _(f){i.value=f.touches[0].clientY}function T(f){Math.abs(i.value-f.changedTouches[0].clientY)>50&&(s.value=!1)}const M=j(()=>a.location.split(" ").reduce((f,R)=>(f[`v-snackbar--${R}`]=!0,f),{}));return ne(()=>{const f=O.filterProps(a),R=!!(e.default||e.text||a.text);return r(O,B({ref:m,class:["v-snackbar",{"v-snackbar--active":s.value,"v-snackbar--multi-line":a.multiLine&&!a.vertical,"v-snackbar--timer":!!a.timer,"v-snackbar--vertical":a.vertical},M.value,y.value,a.class],style:[o.value,a.style]},f,{modelValue:s.value,"onUpdate:modelValue":F=>s.value=F,contentProps:B({class:["v-snackbar__wrapper",l.value,d.value,u.value,C.value],style:[E.value],onPointerenter:n,onPointerleave:p},f.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0,onTouchstartPassive:_,onTouchend:T},k),{default:()=>{var F,Y,q;return[he(!1,"v-snackbar"),a.timer&&!g.value&&r("div",{key:"timer",class:"v-snackbar__timer"},[r(Ee,{ref:v,color:typeof a.timer=="string"?a.timer:"info",max:a.timeout,"model-value":c.time.value},null)]),R&&r("div",{key:"content",class:"v-snackbar__content",role:"status","aria-live":"polite"},[(Y=(F=e.text)==null?void 0:F.call(e))!=null?Y:a.text,(q=e.default)==null?void 0:q.call(e)]),e.actions&&r(le,{defaults:{VBtn:{variant:"text",ripple:!1,slim:!0}}},{default:()=>[r("div",{class:"v-snackbar__actions"},[e.actions({isActive:s})])]})]},activator:e.activator})}),oe({},m)}}),Ze={class:"header-panel"},Qe={class:"flex-container"},Xe={class:"name-container"},ea={class:"module-name"},aa={class:"bean-name"},ta={key:0,class:"fields-container"},na=Te({__name:"MintPanelEmployeeRecordHeader",props:{data:{}},setup(a){const b=a,e=we(),s=xe(),y=Be(),k=Me(),l=Re(),d=Ie(),E=j(()=>{var o,A;const i=[{title:d.label("LBL_CREATE_APPRAISAL",(o=l.currentModule)==null?void 0:o.name),icon:"mdi-plus",onClick:()=>c.value=!0},{title:d.label("LNK_VIEW_CHANGE_LOG"),icon:"mdi-history",onClick:()=>window.open(`legacy/index.php?module=Audit&action=Popup&record=${e.bean.id}&module_name=${e.bean.module_name}`,`Audit_popup_window_record_${e.bean.id}_module_name_${e.bean.module_name}`,"width=800,height=800,resizable=1,scrollbars=1")}];return((A=e.bean.acl_access)==null?void 0:A.delete)===!0&&i.push({title:d.label("LBL_DELETE_BUTTON_LABEL"),icon:"mdi-trash-can-outline",onClick:async()=>{var L;await e.deleteBean(),s.push({name:"list",params:{module:(L=l.currentModule)==null?void 0:L.name}})}}),i}),C=()=>{var i;if(!s.options.history.state.back)return s.push({name:"list",params:{module:(i=l.currentModule)==null?void 0:i.name}});s.back()},u=j(()=>k.isFavorite(e.bean.module_name,e.bean.id)),c=w(!1),m=w(""),v=w(!1),g=async()=>{c.value=!1;const i=await He.get(`legacy/index.php?entryPoint=scheduleAppraisalAndAppraisalItems&module=${y.params.module}&appraisal_name=${m.value}&record_id=${y.params.id}`);m.value="",v.value=i.status===200};return(i,o)=>{var A,L,S,D;return V(),x(H,null,[r(We,{modelValue:v.value,"onUpdate:modelValue":o[0]||(o[0]=n=>v.value=n),color:"secondary",location:"top"},{default:h(()=>[Ne(I(t(d).label("LBL_SUCCESS_ADDING_APPRAISAL_JOB","Candidatures")),1)]),_:1},8,["modelValue"]),r(Ye,{modelValue:c.value,"onUpdate:modelValue":o[3]||(o[3]=n=>c.value=n),width:"400"},{default:h(()=>[r(De,{class:"appraisal-name"},{default:h(()=>[r(Fe,null,{default:h(()=>{var n;return[P("h3",null,I(t(d).label("LBL_CREATE_APPRAISAL",(n=t(l).currentModule)==null?void 0:n.name)),1)]}),_:1}),r($e,null,{default:h(()=>{var n;return[r(G,{view:"edit",defs:{type:"varchar"},label:t(d).label("LBL_NAME",(n=t(l).currentModule)==null?void 0:n.name),modelValue:m.value,"onUpdate:modelValue":o[1]||(o[1]=p=>m.value=p)},null,8,["label","modelValue"])]}),_:1}),r(Ue,null,{default:h(()=>{var n,p;return[r(Ke),r(N,{text:t(d).label("LBL_CANCEL_BUTTON_TITLE",(n=t(l).currentModule)==null?void 0:n.name),onClick:o[2]||(o[2]=_=>c.value=!1)},null,8,["text"]),r(N,{disabled:!m.value.length,class:"ml-2",variant:"primary",text:t(d).label("LBL_CREATE_BUTTON_LABEL",(p=t(l).currentModule)==null?void 0:p.name),onClick:g},null,8,["disabled","text"])]}),_:1})]),_:1})]),_:1},8,["modelValue"]),P("div",Ze,[P("div",Qe,[r(N,{icon:"mdi-arrow-left",onClick:C}),t(e).bean.syncAttributes.photo?(V(),$(J,{key:0,class:"photo",size:"120",image:`legacy/index.php?entryPoint=download&id=${t(e).bean.id}_photo&type=Users`,variant:"outlined",color:"surface"},null,8,["image"])):(V(),$(J,{key:1,class:"photo",size:"120",color:"secondary"},{default:h(()=>{var n,p,_,T;return[P("h1",null,I((((p=(n=t(e).bean.syncAttributes)==null?void 0:n.first_name)==null?void 0:p[0])||"")+(((T=(_=t(e).bean.syncAttributes)==null?void 0:_.last_name)==null?void 0:T[0])||"")),1)]}),_:1})),P("div",Xe,[P("div",ea,I((L=(A=t(l))==null?void 0:A.currentModule)==null?void 0:L.label),1),P("div",aa,[P("div",null,I(t(e).bean.syncAttributes.name),1),r(N,{icon:u.value?"mdi-heart-circle":"mdi-heart-outline",variant:"text",size:"small",onClick:o[4]||(o[4]=n=>u.value?t(k).removeFromFavorites(t(e).bean.module_name,t(e).bean.id):t(k).addToFavorites(t(e).bean.module_name,t(e).bean.id,t(e).bean.syncAttributes.name))},null,8,["icon"]),t(e).bean.syncAttributes.game_score?(V(),$(G,{key:0,view:"detail",defs:{name:"game_score",type:"achievements"},data:{bean:t(e).bean.attributes},modelValue:t(e).bean.syncAttributes.game_score,"onUpdate:modelValue":[o[5]||(o[5]=n=>t(e).bean.syncAttributes.game_score=n),o[6]||(o[6]=n=>t(e).updateField(b.data.fields.game_score.name,n))]},null,8,["data","modelValue"])):z("",!0)])]),r(ze,{offset:"16"},{activator:h(({props:n,isActive:p})=>[r(N,B({class:"ml-auto"},n,{active:p,"append-icon":"mdi-menu-down",text:t(d).label("LBL_ESLIST_ACTIONS")}),null,16,["active","text"])]),default:h(()=>[r(Oe,{items:E.value||[]},null,8,["items"])]),_:1})]),(D=(S=b.data)==null?void 0:S.fields)!=null&&D.length?(V(),x("div",ta,[(V(!0),x(H,null,W(b.data.fields,(n,p)=>(V(),x("div",{class:"row",key:p},[(V(!0),x(H,null,W(t(e).columns,_=>{var T;return V(),x("div",{key:_-1},[n[_-1]?(V(),$(G,{key:0,view:"detail",defs:n[_-1],label:t(d).label(n[_-1].label,(T=t(l).currentModule)==null?void 0:T.name),data:{bean:t(e).bean.attributes},modelValue:t(e).bean.syncAttributes[n[_-1].name],"onUpdate:modelValue":[M=>t(e).bean.syncAttributes[n[_-1].name]=M,M=>t(e).updateField(n[_-1].name,M)]},null,8,["defs","label","data","modelValue","onUpdate:modelValue"])):z("",!0)])}),128))]))),128))])):z("",!0)])],64)}}});const ra=Ge(na,[["__scopeId","data-v-6bd3bf33"]]);export{ra as default};