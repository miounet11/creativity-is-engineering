# 对照：评测尺与审查循环落成家族

对应：`COH-1` `COH-2` `DIV-1` `EARN-1` `PROV-1` `LAND-1` `LAND-2` `LOOP-6`

**战场：** [xiaobright/modeltest](https://github.com/xiaobright/modeltest) 的评测协议，以及 [anthropics/defending-code-reference-harness](https://github.com/anthropics/defending-code-reference-harness) 的审查循环。落到我们仓是 [ability-harness](https://github.com/miounet11/ability-harness) 与 [review-harness](https://github.com/miounet11/review-harness)。

**完成定义：**

1. 后法不打前法（`COH-1`）：ship 仍只回答能不能上线；没有为审查循环新开 `LAUNCH-*`。
2. 一问一仓仍互斥（`COH-2`）：修交接本归 ability-harness，迭代漏审归 review-harness。
3. 新 id 不是换皮（`DIV-1`）：`COH-*` 判的是定律是否互相否定，不是 `SELF-6` 的 README 边界句。
4. 来自战场（`EARN-1`）：不是「好标准都该有评测仓」的空想。
5. 例子能回溯（`PROV-1`）：上面的公开仓库 URL 就是出处。

本文件本身满足 `LOOP-6`：0.3.0 收尾留下了新 id 和新例子。

**不要写进本文件的：** 密钥、真实账号、内网地址、对方隐藏测试或利用步骤。
