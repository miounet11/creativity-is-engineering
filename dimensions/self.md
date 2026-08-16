# 纬度：标准自检

这个标准仓必须先过自己的门禁。做法对齐 ship-standard 的 doc-system，判定对象是本仓，不是产品仓。权威表、生成 STATUS、禁止「最新」的上线侧门禁在 ship-standard `DOC-*`。

---

## 一句话

**门禁 id 双向一致；非废止的 block 必须被例子引用；README 写明三仓边界。**

## 何时用

- 每次改 `gates.json` / 纬度 / 例子
- CI 每个 PR

## 验收句

1. 不打开作者聊天，也能从 README 找到该用哪条纬度，以及和另外两仓的边界。
2. 清单项没有无 id 的复选框，也没有把已废止 id 勾成现行项。
3. 每个现行 block 要么出现在 `examples/`，要么在 `gates.json` 标 `"evidence": "none"`。

## 门禁

- [ ] `SELF-3` gates.json 与纬度清单 id 双向一致
- [ ] `SELF-4` 相对链接可解析；无疑似密钥
- [ ] `SELF-6` README 写明与 ship-standard / build-standard 的边界
- [ ] `SELF-7` 非废止的 block 门禁必须被例子引用，或显式标 evidence none

## 已废止

这些 id 仍登记，不再作为本仓现行清单。

- `SELF-1` → ship-standard `DOC-1`：权威表存在，每类问题只链一份
- `SELF-2` → ship-standard `DOC-2`：STATUS 为生成物，version 与 catalog 一致
- `SELF-5` → ship-standard `DOC-5`：文件名与标题不声称「当前唯一版本」

`checks/check.mjs` 仍会拦截死链、疑似密钥、标题里的「最新」，以及 STATUS 与 version 漂移；那是本仓自检实现，不是第二套 `DOC-*` 合同。

## 禁止

- 手改 STATUS.md
- 原地改已公布 id 的含义
- 密钥、安装包、`.env` 进本仓
- 现行清单里勾已废止 id

## 产出

`npm run verify` 绿、生成的 STATUS。
