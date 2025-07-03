import{_ as j}from"./BoardGameAssistant-_uEHUvLS.js";import{d as L,v as M,r as I,q as T,e as G,o as _,c as D,a as n,h as t,w as e,F as K,i as s,t as f,k as d,j as w,u as b,g,m as y,p as F,b as H,_ as J}from"./index-5F5fpFLS.js";import{m as N}from"./marked.esm-afrdLNPY.js";const c=h=>(F("data-v-5831ab68"),h=h(),H(),h),P={class:"show"},Q=c(()=>n("img",{src:j,style:{width:"300px",height:"300px","border-radius":"30px"}},null,-1)),R={style:{"font-size":"50px","margin-top":"10px"}},W={style:{"font-size":"20px","margin-top":"10px",color:"rgb(129, 129, 129)"}},q=c(()=>n("p",null,"支持平台：Android",-1)),Y={class:"download",id:"download"},O=c(()=>n("h2",{class:"title"},"产品获取",-1)),U={class:"update",id:"update"},X=c(()=>n("h2",{class:"title"},"版本日志",-1)),Z={style:{height:"50px"}},tt={class:"doc",style:{"margin-bottom":"20px"},id:"doc"},et=c(()=>n("h2",{class:"title"},"产品文档",-1)),ot=c(()=>n("div",{id:"introduce",class:"markdown-body"},null,-1)),nt=L({__name:"Show",setup(h){M.useI18n();const p=I(12),u=I(12);T(()=>{window.addEventListener("resize",function(){var o=window.innerWidth;o<1e3?(p.value=0,u.value=24):(p.value=12,u.value=12)})}),G(()=>{var o=window.innerWidth;o<1e3?(p.value=0,u.value=24):(p.value=12,u.value=12);let a=document.getElementById("introduce");a!=null&&a!=null&&(a.innerHTML=N.parse(`
<div align="center">
    <img src="https://s2.loli.net/2025/07/03/YOlKwRnHTjQs15L.png" style="width:100px;"/>
    <h2>桌游助手</h2>
</div>



### 一、产品概述

- 支持单机与联机两种模式的桌游中控工具
- 大家可以使用同一个手机，也可以使用自己的手机实现相互通信
- 基础的通信功能已经实现，并使用Flutter+基础HTTP操作提供可移植性
- 暂时只提供安卓版本，因为苹果开发需要Mac电脑和开发者年费
- 辅助的游戏类型和模型在持续更新中

### 二、单机功能

- 用户点击“单机中控”的按钮后会进入如下界面
- <img src="https://s2.loli.net/2025/07/03/tQsf3hr5EyaMKDY.png" alt="img" width="300">
- 点击选择游戏，选择对应游戏即可轮流游玩

### 三、联机功能

- 用户点击“各执一机”的时候
- 会进入如下画面
- <img src="https://s2.loli.net/2025/07/03/AskmiGP1LazrIJ6.png" alt="img" width="300">
- 房主点击创建房间，其他用户点击下方的游戏房间加入即可
- 之后房主创建房间加入端点击加入
- <img src="https://s2.loli.net/2025/07/03/rRCEtoSInQ39L4W.png" alt="img" width="300">
- 此时加入端会搜索到房间
- <img src="https://s2.loli.net/2025/07/03/TWM2KruJ8biR9sG.jpg" alt="img" width="300">
- 进入房间后所有玩家点击准备后房主可以开始游戏和选择游戏
- <img src="https://s2.loli.net/2025/07/03/MEsmVxBpeJcvQFK.png" alt="img" width="300">

### 四、游戏列表（持续更新）

- 轮流骰子
  - 玩家按顺序投递骰子，可以选择骰子数量
  - 可以搭配不同的游玩场景，每个玩家可以投递多轮，甚至不投，直接当作回合记录器也可
  - 可以搭配多种游戏场景游玩
  - 玩家点击“结束回合”的时候就通知轮到下一个玩家操作
- 地产游戏
  - 支持电子银行和骰子，用户可以使用这个工具辅助游戏
  - 点击电子银行可以从电子银行拨款或收回金额
  - 每个玩家在自己回合可以进行投骰子或转账
  - 玩家点击“结束回合”的时候就通知轮到下一个玩家操作
  - 如果需要随时扣取不在当前回合玩家的钱，可以通过银行进行
  - 总之就是能满足几乎任何版本的游戏和特效卡等操作

### 五、免责声明

- 本软件不侵犯任何桌游形式和版权，它仅作为一个简单的**中控工具**，旨在辅助用户进行游戏。您可以将其理解为一个**数字化的骰子、计时器或计分板**，其功能仅限于提供便捷的辅助操作，**不包含任何游戏内容、规则或知识产权**。

- 本软件的开发目的在于提升用户体验，而非复制或替代任何现有桌游产品。所有桌游的**版权和所有权均属于其原始创作者和发行商**。用户在使用本软件时，应自行确保遵守相关桌游的使用规定和版权法律。

- 我们**不对用户因使用本软件而产生的任何法律纠纷或侵权行为承担责任**。用户使用本软件即表示**同意并接受本免责声明的全部内容**。
        `).toString())});const B=[{version:"1.0.20250703",architecture:"兼容",info:"安装包/APK",md5:"490440407d3765cee556be010b59d26a",sha1:"fb11cbdbf76b7b0792cfeffca029a61836e1640b",download:{lanzou:"https://shuntaoyuan.lanzout.com/ixJuT307tr2j"}}];function E(){const o=document.getElementById("download");o&&o.scrollIntoView({behavior:"smooth"})}function $(){const o=document.getElementById("update");o&&o.scrollIntoView({behavior:"smooth"})}function z(){const o=document.getElementById("doc");o&&o.scrollIntoView({behavior:"smooth"})}return(o,a)=>{const m=s("el-col"),i=s("el-button"),v=s("el-row"),r=s("el-table-column"),A=s("el-table"),k=s("el-tab-pane"),x=s("el-tabs"),S=s("el-step"),V=s("el-steps");return _(),D(K,null,[n("div",P,[t(v,{style:{height:"100%"}},{default:e(()=>[t(m,{span:p.value,class:"bg hidden-sm-and-down"},null,8,["span"]),t(m,{span:u.value,style:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center"}},{default:e(()=>[n("div",null,[t(v,{style:{display:"flex","flex-direction":"column","align-items":"center"}},{default:e(()=>[t(m,{span:24,style:{display:"flex","flex-direction":"column","align-items":"center"}},{default:e(()=>[Q,n("h1",R,f(o.$t("apps.BoardGameAssistant.BoardGameAssistant")),1),n("p",W,f(o.$t("apps.BoardGameAssistant.BoardGameAssistantInfo")),1)]),_:1}),t(m,{span:24,style:{display:"flex","flex-direction":"row","align-items":"center","justify-content":"center"}},{default:e(()=>[q]),_:1}),t(m,{span:24,style:{display:"flex","flex-direction":"row","align-items":"center","justify-content":"center"}},{default:e(()=>[t(i,{type:"primary",size:"large",style:{margin:"10px"},onClick:a[0]||(a[0]=l=>E())},{default:e(()=>[d(f(o.$t("apps.acquisition")),1)]),_:1}),t(i,{type:"primary",size:"large",style:{margin:"10px"},onClick:a[1]||(a[1]=l=>$())},{default:e(()=>[d(f(o.$t("apps.versionLog")),1)]),_:1}),t(i,{type:"primary",size:"large",style:{margin:"10px"},onClick:a[2]||(a[2]=l=>z())},{default:e(()=>[d(f(o.$t("apps.document")),1)]),_:1})]),_:1})]),_:1})])]),_:1},8,["span"])]),_:1})]),n("div",Y,[O,t(x,{type:"border-card",class:"downloadbar"},{default:e(()=>[t(k,{label:"Android"},{default:e(()=>[t(v,null,{default:e(()=>[t(A,{data:B,style:{width:"100%"}},{default:e(()=>[t(r,{prop:"version",label:"版本"}),t(r,{prop:"info",label:"形式"}),t(r,{prop:"architecture",label:"架构"}),t(r,{prop:"md5",label:"MD5"}),t(r,{prop:"sha1",label:"SHA1"}),t(r,{label:"下载"},{default:e(l=>[l.row.download.direct!=null?(_(),w(i,{key:0,type:"button.primary",link:"",onClick:C=>b(g)(l.row.download.direct)},{default:e(()=>[d("直接下载")]),_:2},1032,["onClick"])):y("",!0),l.row.download.baidu!=null?(_(),w(i,{key:1,type:"button.primary",link:"",onClick:C=>b(g)(l.row.download.baidu)},{default:e(()=>[d("百度网盘")]),_:2},1032,["onClick"])):y("",!0),l.row.download.lanzou!=null?(_(),w(i,{key:2,type:"button.primary",link:"",onClick:C=>b(g)(l.row.download.lanzou)},{default:e(()=>[d("蓝奏云")]),_:2},1032,["onClick"])):y("",!0),l.row.download.github!=null?(_(),w(i,{key:3,type:"button.primary",link:"",onClick:C=>b(g)(l.row.download.github)},{default:e(()=>[d("Github")]),_:2},1032,["onClick"])):y("",!0)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),n("div",U,[X,t(x,{type:"border-card",class:"downloadbar"},{default:e(()=>[t(k,{label:"Android"},{default:e(()=>[n("div",Z,[t(V,{direction:"vertical",active:2},{default:e(()=>[t(S,{title:"1.0.20250704",description:"初始版本，提供了轮流骰子和地产游戏"})]),_:1})])]),_:1})]),_:1})]),n("div",tt,[et,t(x,{type:"border-card",class:"downloadbar"},{default:e(()=>[t(k,{label:"功能介绍"},{default:e(()=>[ot]),_:1})]),_:1})])],64)}}}),it=J(nt,[["__scopeId","data-v-5831ab68"]]);export{it as default};
