# 例子

纬度正文保持通用。这里只放「某次创造怎么对上标准」的对照。

规则：

- 可以写失败类型和动作，不要写密钥、真实账号、库存域名、内网地址
- 过期的对照可以标 archived，不要删原则
- 新例子用短横线文件名，并在本页表格加一行
- 现行 block 门禁必须在某个例子里用 `` `ID` `` 出现（`SELF-7`）
- `.template.` 文件不是绿灯测试，自检会跳过

| 文件 | 对应纬度 | 说明 |
|------|----------|------|
| [timing-is-not-the-moat.md](./timing-is-not-the-moat.md) | moat + measure | 观感在打字，墙钟在并行验证；优势不删 |
| [cn-url-fallback.md](./cn-url-fallback.md) | pack | 域名拉取失败，镜像必须写进 manifest |
| [asar-worker-resolve.md](./asar-worker-resolve.md) | pack | asar 外脚本找不到 asar 内的包 |
| [classifier-first.md](./classifier-first.md) | taxonomy | 分类表和红灯测试先于实现 |
| [classifier-probe.template.mjs](./classifier-probe.template.mjs) | taxonomy | 分类器红灯模板（非绿灯测试） |
| [three-surfaces.md](./three-surfaces.md) | integrate | HTTP / IPC / 测试 / 长跑壳共用一层 |
| [insight-landed.md](./insight-landed.md) | land + loop | 洞察落成 id、例子、changelog、verify |
| [standard-self.md](./standard-self.md) | self | 标准自己过自己的门禁 |
