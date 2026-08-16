# 纬度：洞察必须落盘

配套：[loop](./loop.md) · [self](./self.md) · 例子 [insight-landed.md](../examples/insight-landed.md)

---

## 一句话

**聊天里的洞察未完成，直到它有稳定门禁 id、一份例子、一条 changelog。**

## 何时用

- 排障结束、准备关掉窗口
- 操作者做了产品判断（「别改这段」）
- 下一会话还要继承本次判断

## 验收句

1. 引用用 id（例如 `MOAT-1`），不用「上面那段」。
2. 同一变更改了纬度或 `examples/`。
3. `npm run verify` 绿。

## 门禁

- [ ] `LAND-1` 本轮洞察有稳定门禁 id，不引用段落标题
- [ ] `LAND-2` 同一变更写入纬度或例子，不只留在聊天
- [ ] `LAND-3` CHANGELOG 记了一条；catalog 与 gates 的 version 一致
- [ ] `LAND-4` 例子不含密钥、真实账号、库存域名、内网地址
- [ ] `LAND-5` npm run verify 绿

## 禁止

- 「以后写进文档」
- 两份总纲同时「以本文为准」
- 把病例堆进现行纬度正文

## 产出

门禁 id、例子文件、changelog 行、绿的 verify。
