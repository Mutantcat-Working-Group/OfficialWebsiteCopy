import{d as L,v as P,f as r,k as U,o as g,c as _,a as p,t as n,b as l,w as h,u as i,j as v,F as C,h as j,r as w,g as W,s as F,_ as $}from"./index-1gnSWHHU.js";const T={style:{height:"35px",display:"flex","align-items":"center","justify-content":"center","margin-top":"5px"},class:"hidden-sm-and-down"},R={class:"apps"},A=["onClick"],D={class:"icon"},E=["src"],N={class:"card__body"},Q=L({__name:"List",setup(B){const I=P.useI18n(),{t:e}=I,u=r(""),m=r(""),d=r(""),c=r(""),S=r([{name:e("apps.Rhyme.Rhyme"),info:e("apps.Rhyme.RhymeInfo"),icon:"https://s2.loli.net/2025/03/30/GQDnK8aPeoBRlmX.jpg",url:"/software/rhyme",platform:["Windows","Linux"],framework:["兼容","amd64"],type:["办公软件","开发者工具"]},{name:e("apps.JustSimple.JustSimple"),info:e("apps.JustSimple.JustSimpleInfo"),icon:"https://s2.loli.net/2025/03/19/Gf9yaFAJmnVWIBH.png",url:"/software/justsimple",platform:["Windows","Linux","Mac"],framework:["兼容","x86","x64"],type:["办公软件","开发者工具"]},{name:e("apps.FishMusic.FishMusic"),info:e("apps.FishMusic.FishMusicInfo"),icon:"https://s2.loli.net/2025/03/02/IxWZXH5mR6Ed1FY.png",url:"/software/fishmusic",platform:["Android"],framework:["兼容","x86","x64"],type:["视听娱乐"]},{name:e("apps.SimpleSmallUtil.SimpleSmallUtil"),info:e("apps.SimpleSmallUtil.SimpleSmallUtilInfo"),icon:"https://s2.loli.net/2025/02/28/xMY7QVAfa4sIyrJ.jpg",url:"/software/simplesmallutil",platform:["Windows","Linux","Mac"],framework:["兼容","x64","x86"],type:["办公软件","开发者工具"]},{name:e("apps.ChangePrinter.ChangePrinter"),info:e("apps.ChangePrinter.ChangePrinterInfo"),icon:"https://s2.loli.net/2025/02/13/tDhysgvb5oGQqPT.png",url:"/software/changeprinter",platform:["Windows","Android"],framework:["x64","x86"],type:["办公软件","开发者工具"]},{name:e("apps.IPaperDoll.IPaperDoll"),info:e("apps.IPaperDoll.IPaperDollInfo"),icon:"https://s2.loli.net/2024/02/18/mLQZxGjneVrclOg.png",url:"/software/ipaperdoll",platform:["Android"],framework:["兼容","x64","x86"],type:["办公软件","开发者工具"]},{name:e("apps.honeycombTools.honeycombTools"),info:e("apps.honeycombTools.honeycombToolsInfo"),icon:"https://s2.loli.net/2024/03/06/gTFN1fcst8QGeaZ.jpg",url:"/software/honeycomb",platform:["Windows"],framework:["x86","x64"],type:["办公软件","开发者工具"]},{name:e("apps.UCatch.UCatch"),info:e("apps.UCatch.UCatchInfo"),icon:"https://s2.loli.net/2025/01/13/tQasPmZpRLgjud4.jpg",url:"/software/ucatch",platform:["Windows"],framework:["x64","x86"],type:["办公软件","开发者工具"]},{name:e("apps.CloudStep.CloudStep"),info:e("apps.CloudStep.CloudStepInfo"),icon:"https://s2.loli.net/2024/03/17/o3R6NUMbxwEd1zQ.jpg",url:"/software/cloudstep",platform:["Windows","Linux"],framework:["x86","x64"],type:["办公软件","开发者工具"]},{name:e("apps.Echoes.Echoes"),info:e("apps.Echoes.EchoesInfo"),icon:"https://s2.loli.net/2024/04/05/xFopiS8CgBswb9y.jpg",url:"/software/echoes",platform:["Windows","Linux"],framework:["x86","x64"],type:["办公软件","开发者工具"]}]),b=r([]);function x(){b.value=S.value.filter(s=>{const o=c.value?s.name.includes(c.value):!0,t=m.value?s.platform.includes(m.value):!0,f=d.value?s.framework.includes(d.value):!0,y=u.value?s.type.includes(u.value):!0;return o&&t&&f&&y})}function V(){u.value="",m.value="",d.value="",c.value="",x()}return U(()=>{x()}),(s,o)=>{const t=w("el-option"),f=w("el-select"),y=w("el-input"),k=w("el-button");return g(),_(C,null,[p("div",T,[p("span",null,n(s.$t("reuse.type")),1),l(f,{placeholder:i(e)("reuse.type"),style:{width:"120px",margin:"0 15px"},modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=a=>u.value=a)},{default:h(()=>[l(t,{label:"视听娱乐",value:"视听娱乐"}),l(t,{label:"办公软件",value:"办公软件"}),l(t,{label:"开发者工具",value:"开发者工具"})]),_:1},8,["placeholder","modelValue"]),v(" "+n(s.$t("reuse.platforms"))+" ",1),l(f,{placeholder:i(e)("reuse.platforms"),style:{width:"120px",margin:"0 15px"},modelValue:m.value,"onUpdate:modelValue":o[1]||(o[1]=a=>m.value=a)},{default:h(()=>[l(t,{label:"Windows",value:"Windows"}),l(t,{label:"Android",value:"Android"}),l(t,{label:"Linux",value:"Linux"}),l(t,{label:"Mac",value:"Mac"})]),_:1},8,["placeholder","modelValue"]),v(" "+n(s.$t("reuse.framework"))+" ",1),l(f,{placeholder:i(e)("reuse.framework"),style:{width:"120px",margin:"0 15px"},modelValue:d.value,"onUpdate:modelValue":o[2]||(o[2]=a=>d.value=a)},{default:h(()=>[l(t,{label:"x86",value:"x86"}),l(t,{label:"x64",value:"x64"}),l(t,{label:"amd64",value:"amd64"}),l(t,{label:"兼容",value:"兼容"})]),_:1},8,["placeholder","modelValue"]),v(" "+n(s.$t("reuse.name"))+" ",1),l(y,{placeholder:i(e)("reuse.name"),style:{width:"120px",margin:"0 15px"},modelValue:c.value,"onUpdate:modelValue":o[3]||(o[3]=a=>c.value=a)},null,8,["placeholder","modelValue"]),l(k,{onClick:o[4]||(o[4]=a=>x())},{default:h(()=>[v(n(s.$t("reuse.filter")),1)]),_:1}),l(k,{onClick:o[5]||(o[5]=a=>V())},{default:h(()=>[v(n(s.$t("reuse.reset")),1)]),_:1})]),p("div",R,[(g(!0),_(C,null,j(b.value,(a,M)=>(g(),_("div",{class:"card app",key:M,onClick:J=>i(W)(i(F)+a.url)},[p("div",D,[p("img",{style:{width:"80px",height:"80px","border-radius":"15px"},src:a.icon},null,8,E)]),p("strong",null,n(a.name),1),p("div",N,n(a.info),1),p("span",null,n(s.$t("reuse.getNow")),1)],8,A))),128))])],64)}}}),Z=$(Q,[["__scopeId","data-v-2f647d70"]]);export{Z as default};
