# 对照：分类表先于实现

对应：`TAX-3` `TAX-6`

**表面症状：** 长跑开始失败。模型直接改输入速度，或把所有 catch 写成 retry。

**创造顺序（必须）：**

1. 先落一张分类表：原文 → kind → 一个 action。这是第一份产出（`TAX-6`）。
2. 再提交一条失败的分类测试（`TAX-3`）。可从 [classifier-probe.template.mjs](./classifier-probe.template.mjs) 复制，把样例换成真实页面 / 接口原文。
3. 最后才写最小分类器把测试变绿。

**对条：**

- 没有分类表就提交实现 → 违反 `TAX-6`
- 先实现再补测试 → 违反 `TAX-3`
- kind → action 的上线判定、业务与基础设施拆分：看 ship-standard `LAUNCH-3` / `RESIL-*`

**不要写进本文件的：** 真实账号、库存域名、密钥。
