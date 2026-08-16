# 纬度：新法不是换皮

配套：[coherence](./coherence.md) · [taxonomy](./taxonomy.md) · 例子 [family-harness.md](../examples/family-harness.md)

---

## 一句话

**新 id 不是已有 id 换皮；重叠则废止并指向权威仓。**

## 何时用

- 想为「同一件事」再开一个前缀
- 0.2.0 那种切重叠：本仓不再判上线，只判创造

## 验收句

1. 新 id 的判定对象与已有 id 不同。
2. 若相同，旧 id 标 `deprecated` + `supersededBy`，现行清单不再勾它。

## 门禁

- [ ] `DIV-1` 新 id 不是已有 id 换皮；重叠则废止并指向权威仓

## 禁止

- 换一个标题把 `LAUNCH-*` 再写一遍
- 删掉旧 id 以腾出号码

## 产出

新前缀或废止指针，不是同义反复。
