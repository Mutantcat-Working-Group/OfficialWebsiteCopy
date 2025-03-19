import{d as L,v as P,f as r,k as U,o as y,c as _,a as p,t as n,b as l,w as h,u as i,j as v,F as C,h as j,r as x,g as F,s as W,_ as $}from"./index-TOQEZWqj.js";const T={style:{height:"35px",display:"flex","align-items":"center","justify-content":"center","margin-top":"5px"},class:"hidden-sm-and-down"},A={class:"apps"},E=["onClick"],N={class:"icon"},D=["src"],J={class:"card__body"},Q=L({__name:"List",setup(B){const I=P.useI18n(),{t:e}=I,u=r(""),d=r(""),m=r(""),c=r(""),S=r([{name:e("apps.JustSimple.JustSimple"),info:e("apps.JustSimple.JustSimpleInfo"),icon:"https://s2.loli.net/2025/03/19/Gf9yaFAJmnVWIBH.png",url:"/software/justsimple",platform:["Windows","Linux","Mac"],framework:["兼容","x86","x64"],type:["办公软件","开发者工具"]},{name:e("apps.FishMusic.FishMusic"),info:e("apps.FishMusic.FishMusicInfo"),icon:"https://s2.loli.net/2025/03/02/IxWZXH5mR6Ed1FY.png",url:"/software/fishmusic",platform:["Android"],framework:["兼容","x86","x64"],type:["视听娱乐"]},{name:e("apps.SimpleSmallUtil.SimpleSmallUtil"),info:e("apps.SimpleSmallUtil.SimpleSmallUtilInfo"),icon:"https://s2.loli.net/2025/02/28/xMY7QVAfa4sIyrJ.jpg",url:"/software/simplesmallutil",platform:["Windows","Linux","Mac"],framework:["兼容","x64","x86"],type:["办公软件","开发者工具"]},{name:e("apps.ChangePrinter.ChangePrinter"),info:e("apps.ChangePrinter.ChangePrinterInfo"),icon:"https://s2.loli.net/2025/02/13/tDhysgvb5oGQqPT.png",url:"/software/changeprinter",platform:["Windows","Android"],framework:["x64","x86"],type:["办公软件","开发者工具"]},{name:e("apps.IPaperDoll.IPaperDoll"),info:e("apps.IPaperDoll.IPaperDollInfo"),icon:"https://s2.loli.net/2024/02/18/mLQZxGjneVrclOg.png",url:"/software/ipaperdoll",platform:["Android"],framework:["兼容","x64","x86"],type:["办公软件","开发者工具"]},{name:e("apps.honeycombTools.honeycombTools"),info:e("apps.honeycombTools.honeycombToolsInfo"),icon:"https://s2.loli.net/2024/03/06/gTFN1fcst8QGeaZ.jpg",url:"/software/honeycomb",platform:["Windows"],framework:["x86","x64"],type:["办公软件","开发者工具"]},{name:e("apps.UCatch.UCatch"),info:e("apps.UCatch.UCatchInfo"),icon:"https://s2.loli.net/2025/01/13/tQasPmZpRLgjud4.jpg",url:"/software/ucatch",platform:["Windows"],framework:["x64","x86"],type:["办公软件","开发者工具"]},{name:e("apps.CloudStep.CloudStep"),info:e("apps.CloudStep.CloudStepInfo"),icon:"https://s2.loli.net/2024/03/17/o3R6NUMbxwEd1zQ.jpg",url:"/software/cloudstep",platform:["Windows","Linux"],framework:["x86","x64"],type:["办公软件","开发者工具"]},{name:e("apps.Echoes.Echoes"),info:e("apps.Echoes.EchoesInfo"),icon:"https://s2.loli.net/2024/04/05/xFopiS8CgBswb9y.jpg",url:"/software/echoes",platform:["Windows","Linux"],framework:["x86","x64"],type:["办公软件","开发者工具"]}]),b=r([]);function w(){b.value=S.value.filter(a=>{const o=c.value?a.name.includes(c.value):!0,s=d.value?a.platform.includes(d.value):!0,f=m.value?a.framework.includes(m.value):!0,g=u.value?a.type.includes(u.value):!0;return o&&s&&f&&g})}function V(){u.value="",d.value="",m.value="",c.value="",w()}return U(()=>{w()}),(a,o)=>{const s=x("el-option"),f=x("el-select"),g=x("el-input"),k=x("el-button");return y(),_(C,null,[p("div",T,[p("span",null,n(a.$t("reuse.type")),1),l(f,{placeholder:i(e)("reuse.type"),style:{width:"120px",margin:"0 15px"},modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=t=>u.value=t)},{default:h(()=>[l(s,{label:"视听娱乐",value:"视听娱乐"}),l(s,{label:"办公软件",value:"办公软件"}),l(s,{label:"开发者工具",value:"开发者工具"})]),_:1},8,["placeholder","modelValue"]),v(" "+n(a.$t("reuse.platforms"))+" ",1),l(f,{placeholder:i(e)("reuse.platforms"),style:{width:"120px",margin:"0 15px"},modelValue:d.value,"onUpdate:modelValue":o[1]||(o[1]=t=>d.value=t)},{default:h(()=>[l(s,{label:"Windows",value:"Windows"}),l(s,{label:"Android",value:"Android"}),l(s,{label:"Linux",value:"Linux"}),l(s,{label:"Mac",value:"Mac"})]),_:1},8,["placeholder","modelValue"]),v(" "+n(a.$t("reuse.framework"))+" ",1),l(f,{placeholder:i(e)("reuse.framework"),style:{width:"120px",margin:"0 15px"},modelValue:m.value,"onUpdate:modelValue":o[2]||(o[2]=t=>m.value=t)},{default:h(()=>[l(s,{label:"x86",value:"x86"}),l(s,{label:"x64",value:"x64"}),l(s,{label:"兼容",value:"兼容"})]),_:1},8,["placeholder","modelValue"]),v(" "+n(a.$t("reuse.name"))+" ",1),l(g,{placeholder:i(e)("reuse.name"),style:{width:"120px",margin:"0 15px"},modelValue:c.value,"onUpdate:modelValue":o[3]||(o[3]=t=>c.value=t)},null,8,["placeholder","modelValue"]),l(k,{onClick:o[4]||(o[4]=t=>w())},{default:h(()=>[v(n(a.$t("reuse.filter")),1)]),_:1}),l(k,{onClick:o[5]||(o[5]=t=>V())},{default:h(()=>[v(n(a.$t("reuse.reset")),1)]),_:1})]),p("div",A,[(y(!0),_(C,null,j(b.value,(t,M)=>(y(),_("div",{class:"card app",key:M,onClick:G=>i(F)(i(W)+t.url)},[p("div",N,[p("img",{style:{width:"80px",height:"80px","border-radius":"15px"},src:t.icon},null,8,D)]),p("strong",null,n(t.name),1),p("div",J,n(t.info),1),p("span",null,n(a.$t("reuse.getNow")),1)],8,E))),128))])],64)}}}),R=$(Q,[["__scopeId","data-v-6b7ff5e1"]]);export{R as default};
