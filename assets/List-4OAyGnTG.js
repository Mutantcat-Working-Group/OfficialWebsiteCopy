import{d as C,v as N,f as r,k as U,o as y,c as b,a as n,t as o,b as e,w as f,u as i,j as _,F as k,h as j,r as h,g as F,s as I,_ as P}from"./index-nQCVzFNi.js";const W={style:{height:"35px",display:"flex","align-items":"center","justify-content":"center","margin-top":"5px"},class:"hidden-sm-and-down"},B={class:"apps"},T=["onClick"],D={class:"icon"},E=["src"],H={class:"card__body"},S=C({__name:"List",setup(Y){const $=N.useI18n(),{t:u}=$,d=r(""),c=r(""),p=r(""),m=r(""),L=r([{name:u("services.remoteAssistance.remoteAssistance"),info:u("services.remoteAssistance.remoteAssistanceInfo"),icon:"https://s2.loli.net/2025/02/27/t8FPHWYvyV72UN5.jpg",url:"/service/remoteassistance",platform:["Windows","Linux","Android","Mac"],framework:["x86","x64","兼容"],type:["售后服务","售前服务"]}]),g=r([]);function x(){g.value=L.value.filter(s=>{const l=m.value?s.name.includes(m.value):!0,a=c.value?s.platform.includes(c.value):!0,v=p.value?s.framework.includes(p.value):!0,w=d.value?s.type.includes(d.value):!0;return l&&a&&v&&w})}function M(){d.value="",c.value="",p.value="",m.value="",x()}return U(()=>{x()}),(s,l)=>{const a=h("el-option"),v=h("el-select"),w=h("el-input"),V=h("el-button");return y(),b(k,null,[n("div",W,[n("span",null,o(s.$t("reuse.type")),1),e(v,{placeholder:i(u)("reuse.type"),style:{width:"120px",margin:"0 15px"},modelValue:d.value,"onUpdate:modelValue":l[0]||(l[0]=t=>d.value=t)},{default:f(()=>[e(a,{label:"售前服务",value:"售前服务"}),e(a,{label:"售后服务",value:"售后服务"}),e(a,{label:"公益服务",value:"公益服务"}),e(a,{label:"游戏服务器",value:"游戏服务器"})]),_:1},8,["placeholder","modelValue"]),_(" "+o(s.$t("reuse.platforms"))+" ",1),e(v,{placeholder:i(u)("reuse.platforms"),style:{width:"120px",margin:"0 15px"},modelValue:c.value,"onUpdate:modelValue":l[1]||(l[1]=t=>c.value=t)},{default:f(()=>[e(a,{label:"Windows",value:"Windows"}),e(a,{label:"Android",value:"Android"}),e(a,{label:"Linux",value:"Linux"}),e(a,{label:"Mac",value:"Mac"})]),_:1},8,["placeholder","modelValue"]),_(" "+o(s.$t("reuse.framework"))+" ",1),e(v,{placeholder:i(u)("reuse.framework"),style:{width:"120px",margin:"0 15px"},modelValue:p.value,"onUpdate:modelValue":l[2]||(l[2]=t=>p.value=t)},{default:f(()=>[e(a,{label:"x86",value:"x86"}),e(a,{label:"x64",value:"x64"}),e(a,{label:"兼容",value:"兼容"})]),_:1},8,["placeholder","modelValue"]),_(" "+o(s.$t("reuse.name"))+" ",1),e(w,{placeholder:i(u)("reuse.name"),style:{width:"120px",margin:"0 15px"},modelValue:m.value,"onUpdate:modelValue":l[3]||(l[3]=t=>m.value=t)},null,8,["placeholder","modelValue"]),e(V,{onClick:l[4]||(l[4]=t=>x())},{default:f(()=>[_(o(s.$t("reuse.filter")),1)]),_:1}),e(V,{onClick:l[5]||(l[5]=t=>M())},{default:f(()=>[_(o(s.$t("reuse.reset")),1)]),_:1})]),n("div",B,[(y(!0),b(k,null,j(g.value,(t,A)=>(y(),b("div",{class:"card app",key:A,onClick:q=>i(F)(i(I)+t.url)},[n("div",D,[n("img",{style:{width:"80px",height:"80px","border-radius":"15px"},src:t.icon},null,8,E)]),n("strong",null,o(t.name),1),n("div",H,o(t.info),1),n("span",null,o(s.$t("reuse.getNow")),1)],8,T))),128))])],64)}}}),G=P(S,[["__scopeId","data-v-95416211"]]);export{G as default};
