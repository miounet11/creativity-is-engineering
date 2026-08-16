# Changelog

标准本身也要能被安全采用：门禁 id 一旦公布就不改含义，只新增或标 deprecated。

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
