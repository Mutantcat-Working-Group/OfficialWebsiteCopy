import{d as I,v as x,f as r,k as S,o as d,c as h,b as t,w as f,n as V,a as c,F as g,h as T,r as p,u as w,q as U,g as j,t as v,s as D,_ as E}from"./index-RbKqTTMr.js";const L={class:"search-list"},K=["onClick"],N=["src"],Q={class:"title"},B={class:"info"},F={class:"kind"},M=I({__name:"Search",setup(z){const k=x.useI18n(),{t:e}=k,s=r("全部"),l=r("");S(()=>{const i=new URLSearchParams(window.location.search);l.value=i.get("keyword"),i.get("kind")&&(s.value=i.get("kind")),console.log(s.value),console.log(l.value),_.value=b.value.filter(n=>{const a=l.value?n.name.includes(l.value):!0;if(s.value==="全部")return a;const u=s.value?n.kind===s.value:!0;return a&&u})});const b=r([{name:e("apps.ChangePrinter.ChangePrinter"),info:e("apps.ChangePrinter.ChangePrinterInfo"),icon:"https://s2.loli.net/2025/02/13/tDhysgvb5oGQqPT.png",url:"/software/changeprinter",kind:"软件"},{name:e("apps.IPaperDoll.IPaperDoll"),info:e("apps.IPaperDoll.IPaperDollInfo"),icon:"https://s2.loli.net/2024/02/18/mLQZxGjneVrclOg.png",url:"/software/ipaperdoll",kind:"软件"},{name:e("apps.honeycombTools.honeycombTools"),info:e("apps.honeycombTools.honeycombToolsInfo"),icon:"https://s2.loli.net/2024/03/06/gTFN1fcst8QGeaZ.jpg",url:"/software/honeycomb",kind:"软件"},{name:e("apps.UCatch.UCatch"),info:e("apps.UCatch.UCatchInfo"),icon:"https://s2.loli.net/2025/01/13/tQasPmZpRLgjud4.jpg",url:"/software/ucatch",kind:"软件"},{name:e("apps.CloudStep.CloudStep"),info:e("apps.CloudStep.CloudStepInfo"),icon:"https://s2.loli.net/2024/03/17/o3R6NUMbxwEd1zQ.jpg",url:"/software/cloudstep",kind:"软件"},{name:e("apps.Echoes.Echoes"),info:e("apps.Echoes.EchoesInfo"),icon:"https://s2.loli.net/2024/04/05/xFopiS8CgBswb9y.jpg",url:"/software/echoes",kind:"软件"}]),_=r([]);function m(){l.value!==""&&(window.location.href=D+"/search?keyword="+l.value+"&kind="+s.value)}return(i,n)=>{const a=p("el-option"),u=p("el-select"),C=p("el-button"),y=p("el-input");return d(),h(g,null,[t(y,{modelValue:l.value,"onUpdate:modelValue":n[2]||(n[2]=o=>l.value=o),style:{"max-width":"780px"},placeholder:"请输入搜索关键词",class:"input-with-select",size:"big",onKeydown:V(m,["enter"])},{prepend:f(()=>[t(u,{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=o=>s.value=o),placeholder:"Select",style:{width:"115px"},size:"big"},{default:f(()=>[t(a,{label:"全部",value:"全部"}),t(a,{label:"软件",value:"软件"}),t(a,{label:"服务",value:"服务"}),t(a,{label:"游戏",value:"游戏"}),t(a,{label:"竞赛",value:"竞赛"})]),_:1},8,["modelValue"])]),append:f(()=>[t(C,{icon:w(U),onClick:n[1]||(n[1]=o=>m())},null,8,["icon"])]),_:1},8,["modelValue"]),c("div",L,[(d(!0),h(g,null,T(_.value,(o,P)=>(d(),h("div",{key:P,class:"search-item clickable",onClick:G=>w(j)(o.url)},[c("img",{src:o.icon},null,8,N),c("div",Q,v(o.name),1),c("div",B,v(o.info),1),c("div",F,v(o.kind),1)],8,K))),128))])],64)}}}),Z=E(M,[["__scopeId","data-v-b08ddcf3"]]);export{Z as default};
