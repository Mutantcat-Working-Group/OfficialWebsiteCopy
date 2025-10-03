import{_ as L}from"./BoardGameAssistant-6Fx1gcYe.js";import{d as S,v as V,e as M,r as B,x as G,f as K,c as H,a as n,i as t,w as e,F as D,j as s,o as _,t as f,l as d,k as w,u as b,g,q as y,p as P,b as Q,_ as R}from"./index-nknujKrG.js";import{m as W}from"./marked.esm-afrdLNPY.js";const c=h=>(P("data-v-adae6196"),h=h(),Q(),h),F={class:"show"},J=c(()=>n("img",{src:L,style:{width:"300px",height:"300px","border-radius":"30px"}},null,-1)),N={style:{"font-size":"50px","margin-top":"10px"}},O={style:{"font-size":"20px","margin-top":"10px",color:"rgb(129, 129, 129)"}},Y=c(()=>n("p",null,"支持平台：Android",-1)),q={class:"download",id:"download"},U=c(()=>n("h2",{class:"title"},"产品获取",-1)),X={class:"update",id:"update"},Z=c(()=>n("h2",{class:"title"},"版本日志",-1)),tt={style:{height:"100px"}},et={class:"doc",style:{"margin-bottom":"20px"},id:"doc"},ot=c(()=>n("h2",{class:"title"},"产品文档",-1)),nt=c(()=>n("div",{id:"introduce",class:"markdown-body"},null,-1)),at=S({__name:"Show",setup(h){V.useI18n(),M({title:"桌游助手 - 多功能桌游辅助工具",meta:[{name:"description",content:"桌游助手是一款支持单机与联机的桌游中控工具，提供骰子、计分、血条管理等功能，让您的桌游体验更加便捷。支持Android平台，完全免费使用。"},{name:"keywords",content:"桌游助手,桌游工具,骰子,计分器,血条管理,地产游戏,联机桌游,Android应用,游戏辅助工具"},{property:"og:title",content:"桌游助手 - 让桌游更有趣的多功能助手工具"},{property:"og:description",content:"一款功能强大的桌游辅助工具，支持单机和联机模式，提供骰子、计分、血条管理等功能，让您的桌游体验更加便捷有趣。"},{property:"og:image",content:"https://s2.loli.net/2025/07/03/YOlKwRnHTjQs15L.png"}]});const p=B(12),u=B(12);G(()=>{window.addEventListener("resize",function(){var o=window.innerWidth;o<1e3?(p.value=0,u.value=24):(p.value=12,u.value=12)})}),K(()=>{var o=window.innerWidth;o<1e3?(p.value=0,u.value=24):(p.value=12,u.value=12);let l=document.getElementById("introduce");l!=null&&l!=null&&(l.innerHTML=W.parse(`
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
  - 适用于多种骰子回合游戏，玩家按顺序投递骰子，可以选择骰子数量
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
  - 玩家目前负债不会自动被淘汰，失败玩家需要主动跳过自己的回合
- 血条管理
  - 适用于多种有血条的游戏，可以根据玩家给每个玩家设置不同的满血血量
  - 多端同步显示血量，随时扣除和增加
- 分数管理
  - 适用于多种记分游戏
  - 多端同步分数，随时扣或增加

### 五、免责声明

- 本软件不侵犯任何桌游形式和版权，它仅作为一个简单的**中控工具**，旨在辅助用户进行游戏。您可以将其理解为一个**数字化的骰子、计时器或计分板**，其功能仅限于提供便捷的辅助操作，**不包含任何游戏内容、规则或知识产权**。

- 本软件的开发目的在于提升用户体验，而非复制或替代任何现有桌游产品。所有桌游的**版权和所有权均属于其原始创作者和发行商**。用户在使用本软件时，应自行确保遵守相关桌游的使用规定和版权法律。

- 我们**不对用户因使用本软件而产生的任何法律纠纷或侵权行为承担责任**。用户使用本软件即表示**同意并接受本免责声明的全部内容**。
        `).toString())});const z=[{version:"1.0.20250703",architecture:"兼容",info:"安装包/APK",md5:"490440407d3765cee556be010b59d26a",sha1:"fb11cbdbf76b7b0792cfeffca029a61836e1640b",download:{lanzou:"https://shuntaoyuan.lanzout.com/ixJuT307tr2j"}},{version:"1.0.20250704",architecture:"兼容",info:"安装包/APK",md5:"e50e88d246ab5ff3686ea0a5dafca05f",sha1:"143cbf560b7ba861601a2a0a69beb958de8569dc",download:{lanzou:"https://shuntaoyuan.lanzout.com/iTWlO308nf6b"}}];function A(){const o=document.getElementById("download");o&&o.scrollIntoView({behavior:"smooth"})}function E(){const o=document.getElementById("update");o&&o.scrollIntoView({behavior:"smooth"})}function $(){const o=document.getElementById("doc");o&&o.scrollIntoView({behavior:"smooth"})}return(o,l)=>{const m=s("el-col"),i=s("el-button"),v=s("el-row"),r=s("el-table-column"),T=s("el-table"),k=s("el-tab-pane"),x=s("el-tabs"),I=s("el-step"),j=s("el-steps");return _(),H(D,null,[n("div",F,[t(v,{style:{height:"100%"}},{default:e(()=>[t(m,{span:p.value,class:"bg hidden-sm-and-down"},null,8,["span"]),t(m,{span:u.value,style:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center"}},{default:e(()=>[n("div",null,[t(v,{style:{display:"flex","flex-direction":"column","align-items":"center"}},{default:e(()=>[t(m,{span:24,style:{display:"flex","flex-direction":"column","align-items":"center"}},{default:e(()=>[J,n("h1",N,f(o.$t("apps.BoardGameAssistant.BoardGameAssistant")),1),n("p",O,f(o.$t("apps.BoardGameAssistant.BoardGameAssistantInfo")),1)]),_:1}),t(m,{span:24,style:{display:"flex","flex-direction":"row","align-items":"center","justify-content":"center"}},{default:e(()=>[Y]),_:1}),t(m,{span:24,style:{display:"flex","flex-direction":"row","align-items":"center","justify-content":"center"}},{default:e(()=>[t(i,{type:"primary",size:"large",style:{margin:"10px"},onClick:l[0]||(l[0]=a=>A())},{default:e(()=>[d(f(o.$t("apps.acquisition")),1)]),_:1}),t(i,{type:"primary",size:"large",style:{margin:"10px"},onClick:l[1]||(l[1]=a=>E())},{default:e(()=>[d(f(o.$t("apps.versionLog")),1)]),_:1}),t(i,{type:"primary",size:"large",style:{margin:"10px"},onClick:l[2]||(l[2]=a=>$())},{default:e(()=>[d(f(o.$t("apps.document")),1)]),_:1})]),_:1})]),_:1})])]),_:1},8,["span"])]),_:1})]),n("div",q,[U,t(x,{type:"border-card",class:"downloadbar"},{default:e(()=>[t(k,{label:"Android"},{default:e(()=>[t(v,null,{default:e(()=>[t(T,{data:z,style:{width:"100%"}},{default:e(()=>[t(r,{prop:"version",label:"版本"}),t(r,{prop:"info",label:"形式"}),t(r,{prop:"architecture",label:"架构"}),t(r,{prop:"md5",label:"MD5"}),t(r,{prop:"sha1",label:"SHA1"}),t(r,{label:"下载"},{default:e(a=>[a.row.download.direct!=null?(_(),w(i,{key:0,type:"button.primary",link:"",onClick:C=>b(g)(a.row.download.direct)},{default:e(()=>[d("直接下载")]),_:2},1032,["onClick"])):y("",!0),a.row.download.baidu!=null?(_(),w(i,{key:1,type:"button.primary",link:"",onClick:C=>b(g)(a.row.download.baidu)},{default:e(()=>[d("百度网盘")]),_:2},1032,["onClick"])):y("",!0),a.row.download.lanzou!=null?(_(),w(i,{key:2,type:"button.primary",link:"",onClick:C=>b(g)(a.row.download.lanzou)},{default:e(()=>[d("蓝奏云")]),_:2},1032,["onClick"])):y("",!0),a.row.download.github!=null?(_(),w(i,{key:3,type:"button.primary",link:"",onClick:C=>b(g)(a.row.download.github)},{default:e(()=>[d("Github")]),_:2},1032,["onClick"])):y("",!0)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),n("div",X,[Z,t(x,{type:"border-card",class:"downloadbar"},{default:e(()=>[t(k,{label:"Android"},{default:e(()=>[n("div",tt,[t(j,{direction:"vertical",active:2},{default:e(()=>[t(I,{title:"1.0.20250704",description:"初始版本，提供了轮流骰子和地产游戏"}),t(I,{title:"1.0.20250705",description:"更新了通用可以用的血条、记分器"})]),_:1})])]),_:1})]),_:1})]),n("div",et,[ot,t(x,{type:"border-card",class:"downloadbar"},{default:e(()=>[t(k,{label:"功能介绍"},{default:e(()=>[nt]),_:1})]),_:1})])],64)}}}),dt=R(at,[["__scopeId","data-v-adae6196"]]);export{dt as default};
