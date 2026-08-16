# Creativity is Engineering

**这个仓库只回答一个问题：这次创造有没有落成可引用的定律。**

聊天里的洞察不算创造。优势被优化掉也不算创造。有稳定门禁 id、有例子、标准自己能 verify，才算落成。

标准拆成**纬度（dimension）**：一份文档 = 一句话 + 可勾选门禁 + 禁止清单。门禁有**稳定 id**，可以在 PR 和下一会话里引用。

| 纬度 | 一句话 | 门禁 id |
|------|--------|---------|
| [moat](./dimensions/moat.md) | 不删优势 | `MOAT-1..5` |
| [measure](./dimensions/measure.md) | 先分段再动 | `MEASURE-1..5` |
| [taxonomy](./dimensions/taxonomy.md) | 一种失败一种动作 | `TAX-1..5` |
| [integrate](./dimensions/integrate.md) | 三张皮一层肉 | `INTEG-1..5` |
| [pack](./dimensions/pack.md) | 包装边界 | `PACK-1..6` |
| [land](./dimensions/land.md) | 洞察必须落盘 | `LAND-1..5` |
| [loop](./dimensions/loop.md) | 创造会话七步 | `LOOP-1..5` |
| [self](./dimensions/self.md) | 标准自检 | `SELF-1..6` |

- 机器可读门禁：[gates.json](./gates.json)
- 生成的汇总：[STATUS.md](./STATUS.md)
- 版本与兼容承诺：[CHANGELOG.md](./CHANGELOG.md)

---

## 边界：本仓 vs 另外两仓

三仓不重叠。同一件事只有一个权威。

| 问题 | 权威 |
|------|------|
| **能不能上线**：灰度、回滚、STOP、主路径 | [ship-standard](https://github.com/miounet11/ship-standard) |
| **怎么创建**：七步执行、人与 Agent 分工、最小变绿 | [build-standard](https://github.com/miounet11/build-standard) |
| **创造有没有落成定律**：不删优势、分段、分类第一产出、包装边界 | **本仓** `dimensions/` |

本仓不写「这版能不能发给用户」。ship-standard 不写「这段慢是不是护城河」。

---

## 怎么用

1. 有人说慢：打开 [measure](./dimensions/measure.md) 和 [moat](./dimensions/moat.md)。
2. 模型把失败写成 retry：打开 [taxonomy](./dimensions/taxonomy.md)。
3. 控制面要再写一份脚本：打开 [integrate](./dimensions/integrate.md)。
4. 另一张网装不上 / 找不到模块：打开 [pack](./dimensions/pack.md)。
5. 排障结束：打开 [land](./dimensions/land.md)，引用 id，不要引段落标题。
6. 过不了但必须往前：写豁免（有到期日、有 owner），不要静默绕过。

---

## 自检

标准自己先过自己的门禁：

```bash
npm run verify   # 生成 STATUS + 校验 id 双向一致、死链、重复标题、疑似密钥
```

CI 在每个 PR 上跑同一条命令，并在 `STATUS.md` 过期时失败。

---

## 设计约束

- **可测试。** 门禁用现在时。「系统会更有创造力」不算。
- **id 稳定。** 公布的 id 永不复用、永不改判定；收紧判定 = 新 id。
- **一种问题一种动作。** 禁止把不同失败合成一次「重试」。
- **不删优势。** 操作者点名的护城河默认不动。
- **密钥不进本仓库。**
- **纬度正交。** 新纬度补缺口，不复制 ship-standard 的 launch / resilience 段落。

---

## 许可

[MIT](./LICENSE)。标准公开，方便团队复制并继续加纬度。
