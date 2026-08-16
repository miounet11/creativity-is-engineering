# 纬度：包装边界

配套：[integrate](./integrate.md) · 例子 [cn-url-fallback.md](../examples/cn-url-fallback.md) · [asar-worker-resolve.md](../examples/asar-worker-resolve.md)

安装包能不能发，看 ship-standard `LAUNCH-5`。本纬度锁的是**创造时有没有把第三条路和模块边界写成合同**。

---

## 一句话

**密钥不进安装包。配置至少三条路。asar 外的 ESM 看不见 asar 里的包。**

## 何时用

- 打给另一张网的安装包
- `fetch failed` / `ERR_MODULE_NOT_FOUND`
- 发版时「最新 exe」说不清和上一包差在哪

## 验收句

1. manifest 同时列出主地址和失败时的镜像。
2. worker 的 cwd 与 unpacked 依赖在同一棵目录树。
3. 版本号变化；旧包在说明里作废。

## 门禁

- [ ] `PACK-1` 安装包无密钥；配置可 URL / 粘贴 / 第三条路径
- [ ] `PACK-2` 域名失败时的镜像写进 manifest，不只写在聊天里
- [ ] `PACK-3` asar 外跑的 ESM，其运行时依赖也在 asar 外
- [ ] `PACK-4` 版本号能区分上一包；旧包明确作废
- [ ] `PACK-5` 带密钥的配置 URL 当密码；泄露即作废
- [ ] `PACK-6` 打包后有一条 import(包名) 探针

## 禁止

- 只做域名 HTTPS
- 密钥打进安装包或本仓库
- 用「再 npm ci 一次」回答 asar 解析失败
- silently 覆盖同名安装包

## 产出

manifest、版本号、打包探针输出。
