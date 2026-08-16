# Creativity is Engineering

大家都说 AI 没有创造力。我们不信。

创造力不是吟诗。是你在几百条失败记录里看出「域名被拒」和「页面没出现验证码框」不是同一种失败；是你在另一台机器 `fetch failed` 时想到站点已经为国内网络留了 IP 回退；是你在 `ERR_MODULE_NOT_FOUND` 里意识到 ESM 不会进 asar 找模块，于是把依赖解包到外面。

**AI 的创造力 = 人给的真实战场 × 可写的规格 × 可红的测试 × 敢不删慢。**

这个仓库不教 prompt 技巧。它把一次对话里的洞察写成下一个项目还能用的定律。

---

## 四根柱子

| 柱子 | 一句话 | 入口 |
|------|--------|------|
| **创新** | 把约束和「慢」写成产品特性，而不是先优化掉 | [patterns/humanize-as-moat.md](patterns/humanize-as-moat.md) |
| **颠覆** | AI 的第一产出是分类表和失败样本，不是更快的 `fill()` | [loops/diagnose-spec-probe.md](loops/diagnose-spec-probe.md) |
| **整合** | 多入口必须收敛到同一层；长跑壳不是 fork | [patterns/one-service-three-surfaces.md](patterns/one-service-three-surfaces.md) |
| **超越** | 从「开发机能跑」走到可远程装、可停、可回滚的系统 | [loops/launch.md](loops/launch.md) |

宣言全文：[MANIFESTO.md](MANIFESTO.md)

---

## 怎么用

1. 读 [MANIFESTO.md](MANIFESTO.md) 和 [loops/](loops/)
2. 遇到长跑 / 远程部署 / 打包 / 「感觉慢」时，对照 [case-studies/](case-studies/)
3. 新项目开工时，复制 [templates/](templates/) 和 [prompts/](prompts/)
4. 把 [`.cursor/rules/`](.cursor/rules/) 拷进目标仓库，让下一次 AI 会话继承同一套判断

给 AI 的最短指令：打开 [prompts/diagnose-first.md](prompts/diagnose-first.md)。

---

## 仓库地图

```
loops/           闭环：诊断 → 规格 → 红灯 → 上线 → 容错
patterns/        可复用定律（护城河、失败分类、远程配置、三入口）
case-studies/    从真实战场抽出的故事，不是教程
templates/       分类器测试、发布清单、远程配置骨架
prompts/         给 AI 的系统提示，不是代码生成器
```

---

## 核心公式

```
创造力 = 真实约束 × 可测量 × 可规格化 × 不删优势
```

停机只认明确的 STOP。不认「最近全失败」。
一种失败只做一种事。不要用重提治疗频控。
密钥不进安装包。配置走 URL，URL 当密码。

---

## 来源

定律抽自一个隐身浏览器 + 桌面控制面 + 长跑农场的真实迭代（Clavue / duokai）。本仓库只保留**可迁移的方法**，不包含密钥、安装包、目标站操作步骤。
