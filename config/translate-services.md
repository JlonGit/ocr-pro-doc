# 翻译服务配置

OCR Pro 支持多种翻译服务，本文介绍如何配置各个服务。

## 进入配置

1. 呼出 uTools
2. 输入 `设置`
3. 选择「翻译模型服务」

## 支持的服务

### 百度翻译

百度翻译 API，支持多语言翻译。

**获取 API Key：**
1. 访问 [百度翻译开放平台](https://fanyi-api.baidu.com/)
2. 注册/登录账号
3. 申请「通用翻译 API」
4. 获取 APP ID 和密钥

**配置参数：**
| 参数 | 说明 |
|------|------|
| APP ID | 百度翻译 APP ID |
| 密钥 | 百度翻译密钥 |

::: tip 免费额度
标准版：每月 5 万字符免费
高级版：每月 100 万字符免费（需实名认证）
:::

---

### 腾讯翻译

腾讯云机器翻译服务。

**获取 API Key：**
1. 访问 [腾讯云](https://cloud.tencent.com/)
2. 进入「机器翻译」产品
3. 获取 SecretId 和 SecretKey

---

### 阿里翻译

阿里云机器翻译服务。

**获取 API Key：**
1. 访问 [阿里云](https://www.aliyun.com/)
2. 进入「机器翻译」产品
3. 获取 AccessKey

---

### 有道翻译

有道智云翻译 API。

**获取 API Key：**
1. 访问 [有道智云](https://ai.youdao.com/)
2. 创建应用获取应用 ID 和密钥

---

### 彩云小译

彩云科技翻译 API。

**获取 API Key：**
1. 访问 [彩云科技](https://platform.caiyunapp.com/)
2. 注册获取 Token

---

### DeepL

DeepL 翻译 API，翻译质量高。

**获取 API Key：**
1. 访问 [DeepL](https://www.deepl.com/pro-api)
2. 注册开发者账号
3. 获取 API Key

---

### OpenAI / ChatGPT

使用 OpenAI GPT 模型进行翻译。

**配置参数：**
| 参数 | 说明 |
|------|------|
| API Key | OpenAI API Key |
| API 地址 | 可自定义 API 地址 |
| 模型 | 选择使用的模型 |

---

### Gemini

使用 Google Gemini 模型进行翻译。

---

### 自定义 API

支持配置符合特定格式的自定义翻译 API。

## 语言设置

在翻译设置中配置：

- **源语言**：自动检测或指定
- **目标语言**：翻译目标语言

## 多模型配置

可以配置多个翻译模型同时使用，方便对比翻译结果。

## 测试连接

配置完成后，点击「测试」按钮验证配置是否正确。
