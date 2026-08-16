# 纬度：创造会话收尾

配套：[land](./land.md) · [taxonomy](./taxonomy.md)

怎么写代码的七步在 [build-standard](https://github.com/miounet11/build-standard) / ship-standard `PROBE-*`。本纬度只锁**创造会话的边界**：本仓提取定律，不复述执行手册。

---

## 一句话

**本会话只提取定律；七步执行归 build-standard / PROBE，收尾必须有新 id 或新例子。**

## 何时用

- 任何非平凡创造会话（新定律、新包装、新分类）
- Agent 准备把「聊完了」当完成时

错字和注释可以不走满环，但不得借此改行为。

## 执行去哪

七步（诊断 → 命名 → 计划 → 红 → 绿 → 验证 → 落盘）的执行门禁在 build-standard。本仓只检查：收尾有没有留下可引用的 id 或例子。

## 门禁

- [ ] `LOOP-6` 本会话只提取定律；七步执行归 build-standard / PROBE，收尾必须有新 id 或新例子

## 已废止

这些 id 仍登记，不再作为本仓现行清单。

- `LOOP-1` → ship-standard `PROBE-1`：会话先要原文或计时
- `LOOP-2` → ship-standard `PROBE-1`：定律用现在时 MUST / MUST NOT 写出
- `LOOP-3` → ship-standard `PROBE-3`：第一笔是红灯探针
- `LOOP-4` → ship-standard `PROBE-3`：实现是最小变绿
- `LOOP-5` → `LAND-2`：收尾走 LAND

## 禁止

- 在本仓复述一份七步执行手册
- 把「说完了」当完成
- 本地能跑、没有新 id 也没有新例子

## 产出

新的门禁 id，或 `examples/` 里的对照文件。
