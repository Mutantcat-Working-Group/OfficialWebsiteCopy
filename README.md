<div align=center>
<img src="https://s2.loli.net/2025/02/27/USVO6sFCdhHKpqM.png" style="width:100px;"/>
<h2>官网副本</h2>
</div>

### 一、产品概述

- 异猫官网（www.mutantcat.org）的静态构建副本，本仓库对应备站 www.mutantcat.top
- 内容即官网本身：品牌介绍、软件矩阵、服务项目、加入我们
- 仓库内即构建产物（Vue SPA 打包输出的 `assets/`），任何静态托管都能直接跑
- 主站宕机或需要应急切换时，备站镜像可独立发布

核心价值：官网的一份额外快照与灾备，随时可以拉起一个一模一样的站点。

### 二、站点内容

- 首页（Welcome）与品牌介绍（About）
- 软件矩阵（List / Show / Search）：全部产品的展示与检索入口
- 产品页：BoardGameAssistant、CloudStep、Echoes、FishMusic、Honeycomb、IPaperDoll、JustSimple、MCLand、MagicLink、Rhyme、SimpleSmallUtil、UCatch 等
- 服务页：ComputerService（电脑服务）、ProgrammingHelp（编程求助）、RemoteAssistance（远程协助）、DeveloperBenefits（开发者福利）、Demand（需求提交）、Feedback（反馈）
- 其他：JoinUs（加入我们）、404 兜底页

### 三、部署方式

- 静态托管：`assets/` + `index.html` 即完整站点，丢到任意静态服务器 / Pages 服务即可
- GitHub Pages：`CNAME` 已指向 www.mutantcat.top
- Docker：nginx 镜像整仓托管，多架构随版本发布到 GHCR

### 四、安装与下载

最新版本：`1.0.20260920`

从 [Releases](https://github.com/Mutantcat-Working-Group/OfficialWebsiteCopy/releases) 下载 `OfficialWebsiteCopy-1.0.20260920.tar.gz`，解压即得整站，另附校验文件（checksums.txt / checksums-md5.txt / checksums-sha1.txt）。想用容器的话：

```bash
docker run -d -p 8080:80 ghcr.io/mutantcat-working-group/officialwebsitecopy:v1.0.20260920
```

版本号格式为 `主版本.次版本.发布日期`（如 `1.0.20260920`）。推送 `v` 前缀标签后，GitHub Actions 会自动打包站点、构建多架构镜像并发布 Release。

### 五、使用说明

1. 主站：www.mutantcat.org
2. 备站：www.mutantcat.top（本仓库）
3. 应急切换时把域名解析指向备站即可，站点内容保持一致

### 六、工程结构

- `index.html`：SPA 入口。
- `assets/`：按路由切分的 JS / CSS / 图片产物。
- `CNAME`：GitHub Pages 自定义域名（www.mutantcat.top）。
- `Dockerfile`：nginx:1.27-alpine 静态托管。
- `.github/workflows/ci.yml`、`release.yml`：检查、打包与镜像发布。
