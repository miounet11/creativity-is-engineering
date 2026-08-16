# 对照：标准自己过自己的门禁

对应：`SELF-3` `SELF-4` `SELF-6` `SELF-7`

**表面症状：** 纬度写了清单，但 `gates.json` 对不上；或 README 读起来像第三份 launch 手册。

**对条：**

- `SELF-3`：每个现行清单项都有已登记 id；每个 `gates.json` id 都出现在对应纬度文档（废止 id 写在「已废止」，不是复选框）
- `SELF-4`：相对链接可解析；文件名和标题不声称「最新」；正文无疑似密钥
- `SELF-6`：README 写明与 [ship-standard](https://github.com/miounet11/ship-standard) / [build-standard](https://github.com/miounet11/build-standard) 的边界，并陈述四因素（真实战场、可测、有规格、不删优势）
- `SELF-7`：每个非废止 block 都被某个 `examples/` 文件用 `` `ID` `` 引用，或在 `gates.json` 标 `"evidence": "none"`

权威表与生成 STATUS 的上线侧合同在 ship-standard `DOC-*`。本仓 `npm run verify` 仍生成 `STATUS.md` 并核对 version，那是实现，不是第二套 `DOC-*`。

**不要写进本文件的：** 密钥、token、安装包。
