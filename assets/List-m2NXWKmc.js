import{d as L,v as M,f as u,k as N,o as y,c as x,a as n,t as a,b as o,w as f,u as d,j as _,F as V,h as H,r as h,g as U,s as j,_ as B}from"./index-F_kvvmBP.js";const F={style:{height:"35px",display:"flex","align-items":"center","justify-content":"center","margin-top":"5px"},class:"hidden-sm-and-down"},P={class:"apps"},T=["onClick"],A={class:"icon"},z=["src"],D={class:"card__body"},E=L({__name:"List",setup(O){const $=M.useI18n(),{t:r}=$,i=u(""),p=u(""),m=u(""),c=u(""),C=u([{name:r("games.deepWebHero.deepWebHero"),info:r("games.deepWebHero.deepWebHeroInfo"),icon:"https://s2.loli.net/2025/02/27/dt3Y4Izym2ZfkQO.png",url:"",platform:["Windows"],framework:["兼容"],type:["休闲"]}]),b=u([]);function g(){b.value=C.value.filter(t=>{const e=c.value?t.name.includes(c.value):!0,s=p.value?t.platform.includes(p.value):!0,v=m.value?t.framework.includes(m.value):!0,w=i.value?t.type.includes(i.value):!0;return e&&s&&v&&w})}function W(){i.value="",p.value="",m.value="",c.value="",g()}return N(()=>{g()}),(t,e)=>{const s=h("el-option"),v=h("el-select"),w=h("el-input"),k=h("el-button");return y(),x(V,null,[n("div",F,[n("span",null,a(t.$t("reuse.type")),1),o(v,{placeholder:d(r)("reuse.type"),style:{width:"120px",margin:"0 15px"},modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=l=>i.value=l)},{default:f(()=>[o(s,{label:"休闲",value:"休闲"})]),_:1},8,["placeholder","modelValue"]),_(" "+a(t.$t("reuse.platforms"))+" ",1),o(v,{placeholder:d(r)("reuse.platforms"),style:{width:"120px",margin:"0 15px"},modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=l=>p.value=l)},{default:f(()=>[o(s,{label:"Windows",value:"Windows"}),o(s,{label:"Android",value:"Android"})]),_:1},8,["placeholder","modelValue"]),_(" "+a(t.$t("reuse.framework"))+" ",1),o(v,{placeholder:d(r)("reuse.framework"),style:{width:"120px",margin:"0 15px"},modelValue:m.value,"onUpdate:modelValue":e[2]||(e[2]=l=>m.value=l)},{default:f(()=>[o(s,{label:"x86",value:"x86"}),o(s,{label:"x64",value:"x64"}),o(s,{label:"兼容",value:"兼容"})]),_:1},8,["placeholder","modelValue"]),_(" "+a(t.$t("reuse.name"))+" ",1),o(w,{placeholder:d(r)("reuse.name"),style:{width:"120px",margin:"0 15px"},modelValue:c.value,"onUpdate:modelValue":e[3]||(e[3]=l=>c.value=l)},null,8,["placeholder","modelValue"]),o(k,{onClick:e[4]||(e[4]=l=>g())},{default:f(()=>[_(a(t.$t("reuse.filter")),1)]),_:1}),o(k,{onClick:e[5]||(e[5]=l=>W())},{default:f(()=>[_(a(t.$t("reuse.reset")),1)]),_:1})]),n("div",P,[(y(!0),x(V,null,H(b.value,(l,I)=>(y(),x("div",{class:"card app",key:I,onClick:Q=>d(U)(d(j)+l.url)},[n("div",A,[n("img",{style:{width:"80px",height:"80px","border-radius":"15px"},src:l.icon},null,8,z)]),n("strong",null,a(l.name),1),n("div",D,a(l.info),1),n("span",null,a(t.$t("reuse.getNow")),1)],8,T))),128))])],64)}}}),Y=B(E,[["__scopeId","data-v-3d9144f9"]]);export{Y as default};
