import{l as b,Z as N,n as L,q as E,s as e,_ as D,z as S,j as r,A as C,$ as te,e as I,a0 as z,L as ae,a1 as se,a as ne,r as c,t as v,x as T,P as g,E as le,S as oe,C as J,T as ie,w as Q,F as ee,U as re,v as _e,M as ue,J as de,y as pe,X as me,Y as ce}from"./index.af03a0f5.js";const Le=["innerHTML"],fe=b({__name:"SetupWizardCookies",setup(u){const o=N();return(t,s)=>(L(),E("div",{class:"setup-wizard-cookies-container",innerHTML:e(o).label("LBL_MINT4_SETUP_WIZARD_COOKIES_DESCRIPTION")},null,8,Le))}});const Ee=D(fe,[["__scopeId","data-v-870be637"]]),Se={class:"setup-wizard-user-profile-container"},Te=b({__name:"SetupWizardUserProfile",setup(u,{expose:o}){const t=M(),s=N(),i=S(!1);function p(){var f;return i.value=!1,(f=t.setupData.last_name)!=null&&f.trim()?!0:(i.value=!0,!1)}return o({validate:p}),(f,_)=>(L(),E("div",Se,[r(C,{modelValue:e(t).setupData.first_name,"onUpdate:modelValue":_[0]||(_[0]=a=>e(t).setupData.first_name=a),density:"comfortable",variant:"outlined",label:e(s).label("LBL_MINT4_SETUP_WIZARD_USER_PROFILE_FIRST_NAME"),"hide-details":""},null,8,["modelValue","label"]),r(C,{modelValue:e(t).setupData.last_name,"onUpdate:modelValue":_[1]||(_[1]=a=>e(t).setupData.last_name=a),density:"comfortable",variant:"outlined",label:e(s).label("LBL_MINT4_SETUP_WIZARD_USER_PROFILE_LAST_NAME"),"hide-details":"auto","error-messages":i.value?e(s).label("LBL_MINT4_ERROR_REQUIRED_FIELD"):""},null,8,["modelValue","label","error-messages"]),r(C,{modelValue:e(t).setupData.email,"onUpdate:modelValue":_[2]||(_[2]=a=>e(t).setupData.email=a),density:"comfortable",variant:"outlined",label:e(s).label("LBL_MINT4_SETUP_WIZARD_USER_PROFILE_EMAIL"),"hide-details":""},null,8,["modelValue","label"])]))}});const ve=D(Te,[["__scopeId","data-v-4ee3f928"]]),Ie={class:"setup-wizard-locale-settings-container"},be=b({__name:"SetupWizardLocaleSettings",setup(u){const o=te(),t=N(),s=M(),i=I(()=>{var a,l,n;return Object.entries((n=(l=(a=o.initData)==null?void 0:a.global)==null?void 0:l.time_zones)!=null?n:{}).map(([m,d])=>({value:m,title:d}))}),p=I(()=>{var a,l,n;return Object.entries((n=(l=(a=o.initData)==null?void 0:a.global)==null?void 0:l.name_formats)!=null?n:{}).map(([m,d])=>({value:m,title:d}))}),f=I(()=>{var a,l,n;return Object.entries((n=(l=(a=o.initData)==null?void 0:a.global)==null?void 0:l.time_formats)!=null?n:{}).map(([m,d])=>({value:m,title:d}))}),_=I(()=>{var a,l,n;return Object.entries((n=(l=(a=o.initData)==null?void 0:a.global)==null?void 0:l.date_formats)!=null?n:{}).map(([m,d])=>({value:m,title:d}))});return(a,l)=>(L(),E("div",Ie,[r(z,{modelValue:e(s).setupData.time_zone,"onUpdate:modelValue":l[0]||(l[0]=n=>e(s).setupData.time_zone=n),items:i.value,density:"comfortable",variant:"outlined",label:e(t).label("LBL_MINT4_SETUP_WIZARD_LOCALE_SETTINGS_TIME_ZONE"),"hide-details":""},null,8,["modelValue","items","label"]),r(z,{modelValue:e(s).setupData.time_format,"onUpdate:modelValue":l[1]||(l[1]=n=>e(s).setupData.time_format=n),items:f.value,density:"comfortable",variant:"outlined",label:e(t).label("LBL_MINT4_SETUP_WIZARD_LOCALE_SETTINGS_TIME_FORMAT"),"hide-details":""},null,8,["modelValue","items","label"]),r(z,{modelValue:e(s).setupData.date_format,"onUpdate:modelValue":l[2]||(l[2]=n=>e(s).setupData.date_format=n),items:_.value,density:"comfortable",variant:"outlined",label:e(t).label("LBL_MINT4_SETUP_WIZARD_LOCALE_SETTINGS_DATE_FORMAT"),"hide-details":""},null,8,["modelValue","items","label"]),r(z,{modelValue:e(s).setupData.display_name_format,"onUpdate:modelValue":l[3]||(l[3]=n=>e(s).setupData.display_name_format=n),items:p.value,density:"comfortable",variant:"outlined",label:e(t).label("LBL_MINT4_SETUP_WIZARD_LOCALE_SETTINGS_NAME_FORMAT"),"hide-details":""},null,8,["modelValue","items","label"])]))}});const Ne=D(be,[["__scopeId","data-v-cf743d3b"]]),M=ae("setup-wizard",()=>{var R,y,w,A,U,P,W,B,k,O,x,V,h,F,Z,$,G,j,H,K,X,q,Y;const u=se(),o=te(),t=S(!1),s=S(!1),i=S({first_name:(y=(R=u.user)==null?void 0:R.first_name)!=null?y:"",last_name:(A=(w=u.user)==null?void 0:w.last_name)!=null?A:"",email:(P=(U=u.user)==null?void 0:U.email)!=null?P:"",time_zone:(B=(W=u.user)==null?void 0:W.preferences.timezone)!=null?B:"Europe/Warsaw",time_format:(h=(V=(k=u.user)==null?void 0:k.preferences.date_time_preferences.time)!=null?V:(x=(O=o.initData)==null?void 0:O.global)==null?void 0:x.time_format)!=null?h:"H:i",date_format:(j=(G=(F=u.user)==null?void 0:F.preferences.date_time_preferences.date)!=null?G:($=(Z=o.initData)==null?void 0:Z.global)==null?void 0:$.date_format)!=null?j:"d.m.Y",display_name_format:(Y=(q=(H=u.user)==null?void 0:H.preferences.name_format)!=null?q:(X=(K=o.initData)==null?void 0:K.global)==null?void 0:X.name_format)!=null?Y:"s f l"}),p=[{title:"LBL_MINT4_SETUP_WIZARD_COOKIES_TITLE",component:Ee,backLabel:"LBL_MINT4_DECLINE",nextLabel:"LBL_MINT4_ACCEPT"},{title:"LBL_MINT4_SETUP_WIZARD_USER_PROFILE_TITLE",component:ve},{title:"LBL_MINT4_SETUP_WIZARD_LOCALE_SETTINGS_TITLE",component:Ne}],f=S(null),_=S(0),a=I(()=>p[_.value]);function l(){_.value===0?m():_.value--}function n(){_.value===p.length-1?d():_.value++}async function m(){s.value=!0,await u.logout()}async function d(){s.value=!0;try{(await ne.post("api/confirm_login_wizard",i.value)).status===200&&(u.user&&(u.user.show_login_wizard=!1),t.value=!0)}finally{s.value=!1}}return{userInfo:f,isLoading:s,isFinished:t,steps:p,setupData:i,currentStep:a,currentStepNumber:_,prevStep:l,nextStep:n}}),ze={class:"setup-wizard-complete-container"},De={class:"setup-wizard-complete-title"},Ce={class:"setup-wizard-complete-subtitle"},ge=b({__name:"SetupWizardComplete",setup(u){const o=N();function t(s){window.open(s,"_blank")}return(s,i)=>(L(),E("div",ze,[c("div",De,v(e(o).label("LBL_MINT4_SETUP_WIZARD_COMPLETE_SCREEN_TITLE")),1),c("div",Ce,v(e(o).label("LBL_MINT4_SETUP_WIZARD_COMPLETE_SCREEN_SUBTITLE")),1),c("div",{class:"setup-wizard-complete-link",onClick:i[0]||(i[0]=p=>t("https://minthcm.org"))},[r(T,{icon:"mdi-earth",size:"20"}),c("span",null,v(e(o).label("LBL_MINT4_SETUP_WIZARD_COMPLETE_SCREEN_MINTHCMORG")),1),r(T,{icon:"mdi-open-in-new",class:"ms-auto",size:"20"})]),c("div",{class:"setup-wizard-complete-link",onClick:i[1]||(i[1]=p=>t("https://minthcm.org/documentation"))},[r(T,{icon:"mdi-file-document-multiple",size:"20"}),c("span",null,v(e(o).label("LBL_MINT4_SETUP_WIZARD_COMPLETE_SCREEN_DOCUMENTATION")),1),r(T,{icon:"mdi-open-in-new",class:"ms-auto",size:"20"})]),c("div",{class:"setup-wizard-complete-link",onClick:i[2]||(i[2]=p=>t("https://minthcm.org/support"))},[r(T,{icon:"mdi-forum",size:"20"}),c("span",null,v(e(o).label("LBL_MINT4_SETUP_WIZARD_COMPLETE_SCREEN_SUPPORT")),1),r(T,{icon:"mdi-open-in-new",class:"ms-auto",size:"20"})]),r(g,{text:e(o).label("LBL_MINT4_SETUP_WIZARD_COMPLETE_SCREEN_BTN"),variant:"primary",class:"mt-6",onClick:i[3]||(i[3]=p=>s.$router.push({name:"dashboard"}))},null,8,["text"])]))}});const Me=D(ge,[["__scopeId","data-v-8e16d988"]]),Re={class:"setup-wizard"},ye={class:"setup-wizard-container"},we={key:0,class:"setup-wizard-loader"},Ae={class:"setup-wizard-title"},Ue={class:"setup-wizard-buttons"},Pe={class:"setup-wizard-footer"},ke=b({__name:"SetupWizard",setup(u){const o=ue(),t=M(),s=N(),i=S();le(()=>{window.addEventListener("keydown",p)}),oe(()=>{window.removeEventListener("keydown",p)});function p(a){if(!(t.isLoading||document.querySelectorAll(".v-menu .v-list").length>0)){if(a.key==="Enter"){if(t.isFinished){o.push({name:"dashboard"});return}f()}(a.key==="Escape"||a.key==="Esc")&&t.currentStepNumber!==0&&!t.isFinished&&t.prevStep()}}function f(){var a;(!((a=i.value)!=null&&a.validate)||i.value.validate())&&t.nextStep()}const _=I(()=>t.currentStep.nextLabel?t.currentStep.nextLabel:t.currentStepNumber===t.steps.length-1?"LBL_MINT4_FINISH":"LBL_MINT4_NEXT");return(a,l)=>{var n,m;return L(),E("div",Re,[c("div",ye,[r(ie,null,{default:J(()=>[e(t).isLoading?(L(),E("div",we,[r(de,{indeterminate:"",color:"primary",size:"64"})])):pe("",!0)]),_:1}),e(t).isFinished?(L(),Q(Me,{key:0})):(L(),E(ee,{key:1},[c("div",Ae,v(e(s).label(e(t).currentStep.title)),1),r(re,{"hide-on-leave":""},{default:J(()=>{var d;return[(L(),Q(me((d=e(t).currentStep)==null?void 0:d.component),{ref_key:"setupWizardStepComponent",ref:i},null,512))]}),_:1}),c("div",Ue,[r(g,{variant:"text",text:e(s).label((m=(n=e(t).currentStep)==null?void 0:n.backLabel)!=null?m:"LBL_MINT4_BACK"),onClick:e(t).prevStep},null,8,["text","onClick"]),r(g,{variant:"primary",text:e(s).label(_.value),onClick:f},null,8,["text"])]),c("div",Pe,[(L(!0),E(ee,null,_e(e(t).steps.length,d=>(L(),E("div",{key:d,class:ce({"setup-wizard-footer-dot":!0,"setup-wizard-footer-dot-active":e(t).currentStepNumber===d-1})},null,2))),128))])],64))])])}}});export{ke as default};