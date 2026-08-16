# 纬度：标准自检

这个标准仓必须先过自己的门禁。做法对齐 ship-standard 的 doc-system，判定对象是本仓，不是产品仓。

---

## 一句话

**STATUS 只生成；门禁 id 双向一致；标题不声称唯一版本。**

## 何时用

- 每次改 `gates.json` / 纬度 / 例子
- CI 每个 PR

## 验收句

1. 不打开作者聊天，也能从 README 找到该用哪条纬度。
2. `STATUS.md` 的 version 与 `catalog.json` 一致。
3. 清单项没有无 id 的复选框。

## 门禁

- [ ] `SELF-1` 权威表存在，每类问题只链一份
- [ ] `SELF-2` STATUS 为生成物，version 与 catalog 一致
- [ ] `SELF-3` gates.json 与纬度清单 id 双向一致
- [ ] `SELF-4` 相对链接可解析；无疑似密钥
- [ ] `SELF-5` 文件名与标题不声称「当前唯一版本」
- [ ] `SELF-6` 与 ship-standard / build-standard 的边界写在 README

## 禁止

- 手改 STATUS.md
- 原地改已公布 id 的含义
- 密钥、安装包、`.env` 进本仓

## 产出

`npm run verify` 绿、生成的 STATUS。
