# 对照：asar 边界

对应：`PACK-3` `PACK-6`

**表面症状：** 配置已加载，启动 worker 报 `ERR_MODULE_NOT_FOUND`，从解包后的 `scripts/` import 某个 sdk。

**错误诊断：** 依赖没打进安装包。

**证据：**

- asar 列表里看得到该包的 `dist/`
- 脚本被解包到 asar 外
- Node ESM 向上找 `node_modules`，不走进 asar

**对条：**

- `PACK-3`：asar 外跑的 ESM，依赖也要在 asar 外；cwd 指到 unpacked 根
- `PACK-6`：在 unpacked 目录跑一次 `import(包名)`
- 升版本、旧包作废：看 ship-standard `LAUNCH-5`（本仓已废止的 `PACK-4` 指向那里）

**不要写进本文件的：** 机器路径里的用户名、密钥。
