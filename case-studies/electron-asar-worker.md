# 案例：asar 里的包，unpacked 里的脚本

**战场：** Electron 长跑面板，用 `ELECTRON_RUN_AS_NODE=1` 拉起仓库里的 ESM worker。  
**表面症状：** 配置已经加载成功，一点启动就：

```
ERR_MODULE_NOT_FOUND: Cannot find package '@scope/sdk'
imported from ...\resources\app.asar.unpacked\scripts\worker.mjs
```

**错误判断：** 依赖没打进安装包。

## 取证

- asar 列表里看得到该包的 `dist/`
- worker 被 `asarUnpack` 解到 `app.asar.unpacked/scripts/`
- Node ESM 从脚本目录向上找 `node_modules`，**不会走进 asar**
- 所以「包在安装包里」和「worker 找得到包」是两件事

## 判断

打包配置把脚本解包了，却把运行时依赖留在 asar 里。再叠加 worker 没有把 `cwd` 指到 unpacked 根。

## 动作

1. `asarUnpack` 加上 worker 实际 import 的运行时依赖
2. spawn 时 `cwd` 设为 `app.asar.unpacked`
3. 升版本号发新包（不要 silently 覆盖同名「最新」）
4. 在 unpacked 目录用 Node 做一次 `import(包名)` 作为打包后探针

## 沉淀

- 包装清单增加一条：凡是 asar 外跑的 ESM，依赖必须也在 asar 外
- 版本从 0.8.2 → 0.8.3，旧包明确作废
- 开机说明加一句：先卸旧版再装新版

## 创造力在哪

错误信息看起来像「没装依赖」。创造力是认出 **模块解析的文件系统边界**，而不是再执行一遍 `npm ci`。
