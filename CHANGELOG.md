# Changelog


## Unreleased

- 权威表增加 [begin](https://github.com/miounet11/begin) 指针：新产品开工与方案制定不再由本仓回答。兼容变更，无新门禁 id。

标准本身也要能被安全采用：门禁 id 一旦公布就不改含义，只新增或标 deprecated。

## 0.3.0

把评测尺和审查循环接到家族地图上，并落下计划中的四个纬度（均为 draft / warn）。

- 新增 draft 纬度 `coherence` `diversity` `earned` `provenance`，门禁 `COH-1` `COH-2` `DIV-1` `EARN-1` `PROV-1`（warn，两轮绿后再考虑升 block）。
- `catalog.related` 与 README 补上 [ability-harness](https://github.com/miounet11/ability-harness) 与 [review-harness](https://github.com/miounet11/review-harness)。
- 例子 [family-harness.md](./examples/family-harness.md)：战场是 modeltest 协议与 defending-code 审查循环，落到我们自己的两个 harness。
- 没有为审查循环新开 ship 门禁（`COH-2` / `DIV-1`）。

## 0.2.0

切掉与 ship-standard / build-standard 重叠的现行清单，把本仓锁回「创造有没有落成定律」。

- 新增 `MOAT-6`、`MOAT-7`：行为层默认开；键间隔不得为 0，也不得用均匀间隔冒充真人。
- 新增 `TAX-6`：分类表是创造会话的第一份产出。
- 新增 `LOOP-6`：本会话只提取定律；七步执行归 build-standard / `PROBE-*`。
- 新增 `SELF-7`：非废止的 block 必须被例子引用，或标 `"evidence": "none"`。
- `MOAT-5`、`INTEG-4` 从 warn 升为 block。
- 废止并指向权威仓（id 保留，永不复用）：
  - `TAX-1` → `RESIL-1`；`TAX-2` / `TAX-4` → `LAUNCH-3`；`TAX-5` → `RESIL-8`
  - `PACK-1` / `PACK-4` / `PACK-5` → `LAUNCH-5`
  - `LOOP-1` / `LOOP-2` → `PROBE-1`；`LOOP-3` / `LOOP-4` → `PROBE-3`；`LOOP-5` → `LAND-2`
  - `SELF-1` → `DOC-1`；`SELF-2` → `DOC-2`；`SELF-5` → `DOC-5`
- `taxonomy`、`loop` 标为 draft。
- `verify` 锁定：`package.json` / `catalog.json` / `gates.json` version 一致；CHANGELOG 必须有 `## version`；例子里的 `` `ID` `` 必须已登记；现行 block 必须被例子引用。
- 分类探针改名为 `examples/classifier-probe.template.mjs`，不再当绿灯测试。
- 计划中的纬度（尚未开文件）：`coherence`、`diversity`、`earned`、`provenance`。

## 0.1.0

- 首发纬度 `moat`、`measure`、`taxonomy`、`integrate`、`pack`、`land`、`loop`、`self`。
- 新增 [gates.json](./gates.json)：门禁有稳定 id、severity、stage。
- 新增 `checks/` 自检与 CI：这个标准仓自己先过自己的门禁。
- 新增生成的 [STATUS.md](./STATUS.md)。
- 明确边界：上线归 [ship-standard](https://github.com/miounet11/ship-standard)，创建归 [build-standard](https://github.com/miounet11/build-standard)，本仓只管创造有没有落成定律。
- 例子：打字不是吞吐杠杆、域名拉取失败、asar 解析边界。

## 兼容承诺

- 门禁 id 永不复用，永不改判定含义。
- 收紧判定 = 新 id + 旧 id 标 `deprecated`。
- `warn` 升 `block` 属于 minor 变更，会在本文件写明升级条件。
