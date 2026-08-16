# 定律：一种失败一种动作

「失败」是操作者的词。系统里不准只有一种失败。

## 为什么这是创造力

补全型 AI 会把所有 catch 写成 `retry`。有判断的系统会问：这句原文要求我们**停、等、换、退、还是降**？

判断力体现在映射表，不体现在形容词。

## 最小分类器

输入：页面或接口的原文 + 当前阶段。  
输出：`{ kind, action, minutes?, domain? }`。  
纯函数。无 IO。用真实句子做测试。

动作枚举保持短：

```
refund | cooldown | wait | retry-channel | shed | defer | none
```

每增加一个 `kind`，必须同时增加：一条真实原文测试、一个且仅一个 `action`。

## 阶段也是输入

同一句「超时」，在「还没买资源」和「已经买了、卡在通道」是两种处置。分类函数要吃 `stage`，避免把基础设施错误写成业务退役。

## 日志必须能读出动作

`skip` / `cooldown` / `pause-type` / `launch-fail` / `host shed` / `watchdog` / `deferred`

分不清这七个词，就还不能加并发。

## 模板

见 [templates/CLASSIFIER.test.mjs](../templates/CLASSIFIER.test.mjs)。
