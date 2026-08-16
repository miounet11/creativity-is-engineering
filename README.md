# Creativity is Engineering

**这个仓库只回答一个问题：这次创造有没有落成可引用的定律。**

AI 创造力 = **真实战场 × 可测 × 有规格 × 不删优势**。聊天里的洞察不算创造。优势被优化掉也不算创造。有稳定门禁 id、有例子、标准自己能 verify，才算落成。

标准拆成**纬度（dimension）**：一份文档 = 一句话 + 可勾选门禁 + 禁止清单。门禁有**稳定 id**，可以在 PR 和下一会话里引用。

| 纬度 | 状态 | 一句话 | 现行门禁 |
|------|------|--------|----------|
| [moat](./dimensions/moat.md) | stable | 不删优势 | `MOAT-1..7` |
| [measure](./dimensions/measure.md) | stable | 先分段再动 | `MEASURE-1..5` |
| [taxonomy](./dimensions/taxonomy.md) | draft | 分类表先于实现 | `TAX-3` `TAX-6` |
| [integrate](./dimensions/integrate.md) | stable | 三张皮一层肉 | `INTEG-1..5` |
| [pack](./dimensions/pack.md) | stable | 包装边界 | `PACK-2` `PACK-3` `PACK-6` |
| [land](./dimensions/land.md) | stable | 洞察必须落盘 | `LAND-1..5` |
| [loop](./dimensions/loop.md) | draft | 本会话只提取定律 | `LOOP-6` |
| [self](./dimensions/self.md) | stable | 标准自检 | `SELF-3` `SELF-4` `SELF-6` `SELF-7` |

- 机器可读门禁：[gates.json](./gates.json)
- 生成的汇总：[STATUS.md](./STATUS.md)
- 版本与兼容承诺：[CHANGELOG.md](./CHANGELOG.md)

### 计划中的纬度

尚未开文件，也不占门禁 id：`coherence`（后法不打前法）、`diversity`（新法不是旧 id 换皮）、`earned`（来自战场不是空想）、`provenance`（例子能指回会话或提交）。

---

## 边界：本仓 vs 另外两仓

三仓不重叠。同一件事只有一个权威。

| 问题 | 权威 |
|------|------|
| **能不能上线**：灰度、回滚、STOP、主路径 | [ship-standard](https://github.com/miounet11/ship-standard) |
| **怎么创建**：七步执行、人与 Agent 分工、最小变绿 | [build-standard](https://github.com/miounet11/build-standard) |
| **创造有没有落成定律**：不删优势、分段、分类第一产出、包装边界 | **本仓** `dimensions/` |

本仓不写「这版能不能发给用户」。ship-standard 不写「这段慢是不是护城河」。豁免、执行节奏、红绿提交顺序看 build-standard，不要在本仓另写一份。

---

## 怎么用

1. 有人说慢：打开 [measure](./dimensions/measure.md) 和 [moat](./dimensions/moat.md)。
2. 模型把失败写成 retry：打开 [taxonomy](./dimensions/taxonomy.md)。
3. 控制面要再写一份脚本：打开 [integrate](./dimensions/integrate.md)。
4. 另一张网装不上 / 找不到模块：打开 [pack](./dimensions/pack.md)。
5. 排障结束：打开 [land](./dimensions/land.md)，引用 id，不要引段落标题。

---

## 自检

标准自己先过自己的门禁：

```bash
npm run verify   # 生成 STATUS + 校验 id 双向一致、例子引用、死链、疑似密钥
```

CI 在每个 PR 上跑同一条命令，并在 `STATUS.md` 过期时失败。

---

## 设计约束

- **可测试。** 门禁用现在时。「系统会更有创造力」不算。
- **id 稳定。** 公布的 id 永不复用、永不改判定；收紧判定 = 新 id。
- **不删优势。** 操作者点名的护城河默认不动；humanize 默认开。
- **密钥不进本仓库。**
- **纬度正交。** 新纬度补缺口，不复制 ship-standard 的 launch / resilience / probe / doc 段落。

---

## 许可

[MIT](./LICENSE)。标准公开，方便团队复制并继续加纬度。
