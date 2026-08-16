# 纬度：一种失败一种动作

配套：[loop](./loop.md) · 例子 [classifier-first.md](../examples/classifier-first.md) · 探针模板 [classifier-probe.template.mjs](../examples/classifier-probe.template.mjs)

长跑上线的同类门禁在 ship-standard `RESIL-*` / `LAUNCH-3`。本纬度只锁**创造过程**：第一份产出是分类表，第一笔是红灯分类测试。

---

## 一句话

**分类表是创造会话的第一份产出；第一笔是失败的分类测试，随后才是实现。**

## 何时用

- 新开一条会失败的长跑或集成
- 模型把所有 catch 写成 retry
- 要把「失败」从操作者口语变成系统词

kind → action 的上线判定、业务与基础设施拆分，看 ship-standard。这里只问：这次创造有没有先把分类表落下来。

## 验收句

1. 会话里先出现分类表，再出现实现提交。
2. 仓库里先有一条失败的分类测试。
3. 测试用真实原文，不只用自编枚举（上线侧由 `RESIL-1` 继续锁）。

## 门禁

- [ ] `TAX-3` 第一笔是失败的分类测试，随后才是实现
- [ ] `TAX-6` 分类表是本次创造会话的第一份产出，早于实现提交

## 已废止

这些 id 仍登记，不再作为本仓现行清单。

- `TAX-1` → ship-standard `RESIL-1`：分类器吃真实原文
- `TAX-2` → ship-standard `LAUNCH-3`：每个 kind 只映射一个 action
- `TAX-4` → ship-standard `LAUNCH-3`：业务错误与基础设施错误两套分类
- `TAX-5` → ship-standard `RESIL-8`：日志能区分退役 / 冷却 / 等待 / 换通道 / 降载 / 延后

## 禁止

- 先写更快的 `fill()`，再补分类
- 用重提治疗频控（上线侧 `RESIL-*`）
- 把本仓写成第二份 resilience 手册

## 产出

分类表、红灯探针（可从模板复制）、随后的最小实现。
