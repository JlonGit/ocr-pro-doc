# DeepLX

DeepLX 是基于 DeepL 的翻译服务，提供高质量的翻译能力，尤其擅长欧洲语言。

## 翻译服务 <Badge type="tip" text="高质量" />

DeepL 是欧洲领先的翻译服务，翻译质量极高。

### 官方 API 申请

1. 访问 [DeepL Pro](https://www.deepl.com/pro-api)
2. 注册账号并选择 API 方案
3. 进入账户设置
4. 在「API」部分获取 **API Key**

### 配置参数

| 参数 | 说明 |
|------|------|
| API Key | DeepL API 认证密钥 |

### 免费额度

| 版本 | 额度 |
|------|------|
| Free | 50 万字符/月（免费） |
| Pro | 按使用量付费 |

::: tip 提示
DeepL Free API 需要填写信用卡信息进行验证，但不会自动收费。
:::

---

## DeepLX 替代方案

DeepLX 是一个开源项目，可以免费使用 DeepL 翻译功能。

### 使用方式

1. 自行部署 DeepLX 服务
2. 或使用公共 DeepLX 接口
3. 在插件中填写 DeepLX 服务地址

### 配置参数

| 参数 | 说明 |
|------|------|
| API 地址 | DeepLX 服务地址 |

::: warning 注意
公共 DeepLX 服务可能不稳定，建议自行部署或使用官方 API。
:::

## 下一步

配置完成后，返回插件进行 [传统模型服务配置](/config/traditional-models)。
