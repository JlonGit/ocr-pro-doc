# DeepLX

::: warning 注意
本文信息可能会过时，仅供参考，请以服务商最新官方文档为准。

官方文档：https://www.deepl.com/docs-api
:::

DeepLX 是基于 DeepL 的翻译服务，提供高质量的翻译能力，尤其擅长欧洲语言。

## 翻译服务 <Badge type="tip" text="高质量" />

DeepL 是欧洲领先的翻译服务，翻译质量极高。

### 免费额度

| 版本 | 额度 | 说明 |
|------|------|------|
| Free | 50 万字符/月 👍 | 免费版本 |
| Pro | 按使用量付费 | 企业级服务 |

---

## 方案一：使用官方 DeepL API

### 1. 注册登录

[点击此处跳转网页](https://www.deepl.com/pro-api)

点击「Sign up」注册账号

使用邮箱注册或通过 Google/Microsoft 账号登录

### 2. 选择 API 方案

登录后选择 API 方案：
- **Free API**：免费版本，50 万字符/月
- **Pro API**：付费版本，按使用量计费

### 3. 绑定支付方式

进入 [「账户设置」](https://www.deepl.com/account/summary)

点击「Billing」

添加支付方式（信用卡、借记卡等）

::: tip 提示
DeepL Free API 需要填写信用卡信息进行验证，但不会自动收费
:::

### 4. 获取 API Key

进入 [「账户设置」](https://www.deepl.com/account/summary)

在「API」部分找到 **API Key**

复制 API Key 并妥善保管

::: warning 警告
**API Key 请妥善保管，泄露可能会给你带来损失！**
:::

### 5. 填写 API Key

在 OCR 应用的 模型服务 > 传统模型 中，选中「DeepLX」，然后将刚才获取到的 API Key 填写到对应位置即可。

---

## 方案二：使用 DeepLX 开源项目（免费）

DeepLX 是一个开源项目，可以免费使用 DeepL 翻译功能，无需付费。

### 部署方式

#### 选项 1：自行部署

1. 访问 [DeepLX GitHub 项目](https://github.com/OwO-Network/DeepLX)

2. 按照项目说明进行部署

3. 获取本地服务地址（如 `http://localhost:1188`）

#### 选项 2：使用公共 DeepLX 接口

使用已部署的公共 DeepLX 服务地址

::: warning 注意
公共 DeepLX 服务可能不稳定，建议自行部署或使用官方 API
:::

### 配置参数

| 参数 | 说明 |
|------|------|
| API 地址 | DeepLX 服务地址，如 `http://localhost:1188` |

### 填写配置

在 OCR 应用的 模型服务 > 传统模型 中，选中「DeepLX」，然后将 DeepLX 服务地址填写到对应位置即可。

---

## 翻译质量对比

| 服务 | 中文翻译 | 欧洲语言 | 推荐场景 |
|------|---------|---------|---------|
| DeepL | 优秀 | 最强 👍 | 欧洲语言翻译 |
| 百度翻译 | 最强 👍 | 一般 | 中文翻译 |
| 腾讯翻译 | 优秀 | 一般 | 通用翻译 |

## 下一步

配置完成后，返回插件进行 [传统模型服务配置](/config/traditional-models)。
