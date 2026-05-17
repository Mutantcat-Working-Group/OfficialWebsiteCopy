import{_ as T}from"./BoardGameAssistant-6Fx1gcYe.js";import{d as L,u as V,e as j,q as M,f as G,r as i,o as m,c as K,a as l,j as e,w as o,F as H,k as C,t as f,h as d,l as w,b,g,p as y,_ as S}from"./index-yUbZTWMk.js";import{m as D}from"./marked.esm-afrdLNPY.js";const P={class:"show"},Q={style:{"font-size":"50px","margin-top":"10px"}},R={style:{"font-size":"20px","margin-top":"10px",color:"rgb(129, 129, 129)"}},W={class:"download",id:"download"},F={class:"update",id:"update"},J={style:{height:"100px"}},N={class:"doc",style:{"margin-bottom":"20px"},id:"doc"},O=L({__name:"Show",setup(Y){V(),j({title:"桌游助手 - 多功能桌游辅助工具",meta:[{name:"description",content:"桌游助手是一款支持单机与联机的桌游中控工具，提供骰子、计分、血条管理等功能，让您的桌游体验更加便捷。支持Android平台，完全免费使用。"},{name:"keywords",content:"桌游助手,桌游工具,骰子,计分器,血条管理,地产游戏,联机桌游,Android应用,游戏辅助工具"},{property:"og:title",content:"桌游助手 - 让桌游更有趣的多功能助手工具"},{property:"og:description",content:"一款功能强大的桌游辅助工具，支持单机和联机模式，提供骰子、计分、血条管理等功能，让您的桌游体验更加便捷有趣。"},{property:"og:image",content:"https://s2.loli.net/2025/07/03/YOlKwRnHTjQs15L.png"}]});const p=C(12),u=C(12);M(()=>{window.addEventListener("resize",function(){var n=window.innerWidth;n<1e3?(p.value=0,u.value=24):(p.value=12,u.value=12)})}),G(()=>{var n=window.innerWidth;n<1e3?(p.value=0,u.value=24):(p.value=12,u.value=12);let t=document.getElementById("introduce");t!=null&&t!=null&&(t.innerHTML=D.parse(`
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
        `).toString())});const B=[{version:"1.0.20250703",architecture:"兼容",info:"安装包/APK",md5:"490440407d3765cee556be010b59d26a",sha1:"fb11cbdbf76b7b0792cfeffca029a61836e1640b",download:{lanzou:"https://shuntaoyuan.lanzout.com/ixJuT307tr2j"}},{version:"1.0.20250704",architecture:"兼容",info:"安装包/APK",md5:"e50e88d246ab5ff3686ea0a5dafca05f",sha1:"143cbf560b7ba861601a2a0a69beb958de8569dc",download:{lanzou:"https://shuntaoyuan.lanzout.com/iTWlO308nf6b"}}];function z(){const n=document.getElementById("download");n&&n.scrollIntoView({behavior:"smooth"})}function A(){const n=document.getElementById("update");n&&n.scrollIntoView({behavior:"smooth"})}function E(){const n=document.getElementById("doc");n&&n.scrollIntoView({behavior:"smooth"})}return(n,t)=>{const c=i("el-col"),s=i("el-button"),_=i("el-row"),r=i("el-table-column"),I=i("el-table"),v=i("el-tab-pane"),h=i("el-tabs"),x=i("el-step"),$=i("el-steps");return m(),K(H,null,[l("div",P,[e(_,{style:{height:"100%"}},{default:o(()=>[e(c,{span:p.value,class:"bg hidden-sm-and-down"},null,8,["span"]),e(c,{span:u.value,style:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center"}},{default:o(()=>[l("div",null,[e(_,{style:{display:"flex","flex-direction":"column","align-items":"center"}},{default:o(()=>[e(c,{span:24,style:{display:"flex","flex-direction":"column","align-items":"center"}},{default:o(()=>[t[3]||(t[3]=l("img",{src:T,style:{width:"300px",height:"300px","border-radius":"30px"}},null,-1)),l("h1",Q,f(n.$t("apps.BoardGameAssistant.BoardGameAssistant")),1),l("p",R,f(n.$t("apps.BoardGameAssistant.BoardGameAssistantInfo")),1)]),_:1}),e(c,{span:24,style:{display:"flex","flex-direction":"row","align-items":"center","justify-content":"center"}},{default:o(()=>[...t[4]||(t[4]=[l("p",null,"支持平台：Android",-1)])]),_:1}),e(c,{span:24,style:{display:"flex","flex-direction":"row","align-items":"center","justify-content":"center"}},{default:o(()=>[e(s,{type:"primary",size:"large",style:{margin:"10px"},onClick:t[0]||(t[0]=a=>z())},{default:o(()=>[d(f(n.$t("apps.acquisition")),1)]),_:1}),e(s,{type:"primary",size:"large",style:{margin:"10px"},onClick:t[1]||(t[1]=a=>A())},{default:o(()=>[d(f(n.$t("apps.versionLog")),1)]),_:1}),e(s,{type:"primary",size:"large",style:{margin:"10px"},onClick:t[2]||(t[2]=a=>E())},{default:o(()=>[d(f(n.$t("apps.document")),1)]),_:1})]),_:1})]),_:1})])]),_:1},8,["span"])]),_:1})]),l("div",W,[t[9]||(t[9]=l("h2",{class:"title"},"产品获取",-1)),e(h,{type:"border-card",class:"downloadbar"},{default:o(()=>[e(v,{label:"Android"},{default:o(()=>[e(_,null,{default:o(()=>[e(I,{data:B,style:{width:"100%"}},{default:o(()=>[e(r,{prop:"version",label:"版本"}),e(r,{prop:"info",label:"形式"}),e(r,{prop:"architecture",label:"架构"}),e(r,{prop:"md5",label:"MD5"}),e(r,{prop:"sha1",label:"SHA1"}),e(r,{label:"下载"},{default:o(a=>[a.row.download.direct!=null?(m(),w(s,{key:0,type:"button.primary",link:"",onClick:k=>b(g)(a.row.download.direct)},{default:o(()=>[...t[5]||(t[5]=[d("直接下载",-1)])]),_:1},8,["onClick"])):y("",!0),a.row.download.baidu!=null?(m(),w(s,{key:1,type:"button.primary",link:"",onClick:k=>b(g)(a.row.download.baidu)},{default:o(()=>[...t[6]||(t[6]=[d("百度网盘",-1)])]),_:1},8,["onClick"])):y("",!0),a.row.download.lanzou!=null?(m(),w(s,{key:2,type:"button.primary",link:"",onClick:k=>b(g)(a.row.download.lanzou)},{default:o(()=>[...t[7]||(t[7]=[d("蓝奏云",-1)])]),_:1},8,["onClick"])):y("",!0),a.row.download.github!=null?(m(),w(s,{key:3,type:"button.primary",link:"",onClick:k=>b(g)(a.row.download.github)},{default:o(()=>[...t[8]||(t[8]=[d("Github",-1)])]),_:1},8,["onClick"])):y("",!0)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),l("div",F,[t[10]||(t[10]=l("h2",{class:"title"},"版本日志",-1)),e(h,{type:"border-card",class:"downloadbar"},{default:o(()=>[e(v,{label:"Android"},{default:o(()=>[l("div",J,[e($,{direction:"vertical",active:2},{default:o(()=>[e(x,{title:"1.0.20250704",description:"初始版本，提供了轮流骰子和地产游戏"}),e(x,{title:"1.0.20250705",description:"更新了通用可以用的血条、记分器"})]),_:1})])]),_:1})]),_:1})]),l("div",N,[t[12]||(t[12]=l("h2",{class:"title"},"产品文档",-1)),e(h,{type:"border-card",class:"downloadbar"},{default:o(()=>[e(v,{label:"功能介绍"},{default:o(()=>[...t[11]||(t[11]=[l("div",{id:"introduce",class:"markdown-body"},null,-1)])]),_:1})]),_:1})])],64)}}}),Z=S(O,[["__scopeId","data-v-0576ad57"]]);export{Z as default};
