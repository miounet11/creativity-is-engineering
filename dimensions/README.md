# 纬度

每个文件是一个独立纬度。读 [_template.md](./_template.md) 再开新文件。

| 文件 | 状态 | 一句话 |
|------|------|--------|
| [moat.md](./moat.md) | stable | 不删优势 |
| [measure.md](./measure.md) | stable | 先分段再动 |
| [taxonomy.md](./taxonomy.md) | draft | 分类表先于实现 |
| [integrate.md](./integrate.md) | stable | 三张皮一层肉 |
| [pack.md](./pack.md) | stable | 包装边界 |
| [land.md](./land.md) | stable | 洞察必须落盘 |
| [loop.md](./loop.md) | draft | 本会话只提取定律 |
| [self.md](./self.md) | stable | 标准自检 |

登记以 [catalog.json](../catalog.json) 为准；门禁 id 以 [gates.json](../gates.json) 为准。

开新纬度先加 id，再写文档，再跑 `npm run verify`。清单项缺 id、或 id 未登记、或现行清单勾了已废止 id，都会红。

计划中、尚未开文件：`coherence`、`diversity`、`earned`、`provenance`。
