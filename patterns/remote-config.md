# 定律：配置走 URL，密钥不进包

安装包是公开分发物。配置是密码。两者永远分开。

## 三通道，缺一不可

1. **URL 加载** — 面板填地址，进程内 `fetch`，校验必填键后再落盘
2. **整段粘贴** — 机器访问不了域名时的逃生舱
3. **IP / HTTP 镜像** — 域名 DNS 或 SNI 在目标网络失败时的第三条路

只做域名 HTTPS，会在另一张网的第一天变成 `fetch failed`。  
只做粘贴，会在第 15 台机器上复制出错。  
只做安装包内嵌，密钥会随安装包传播。

## 安全模型

- 下载目录 `autoindex off`
- 带密钥的 URL 当密码保管，不发到公开群
- 泄露即作废重发，不「再观察一下」
- 安装包、说明、无密钥模板可以公开；`farm.env` 这类文件不行

## 发布清单

每次发版同时更新 `manifest.json`：版本、安装包地址、配置地址、IP 镜像、说明地址。面板和人只认清单，不认「最新那个 exe」。

模板：[templates/manifest.json](../templates/manifest.json)

## 包装时的模块路径

Electron 把脚本解包到 `app.asar.unpacked`、把 `node_modules` 留在 asar 里时，用 `ELECTRON_RUN_AS_NODE` 拉起的 ESM worker **找不到** 包。解包依赖，并把 worker `cwd` 指到 unpacked 根。详见 [case-studies/electron-asar-worker.md](../case-studies/electron-asar-worker.md)。
