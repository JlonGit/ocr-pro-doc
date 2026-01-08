# Gemini <Badge type="tip" text="推荐" />

Google 的多模态 AI 模型，免费额度大，支持 OCR、翻译等多种功能。

## API 申请

### 申请步骤

1. 访问 [Google AI Studio](https://aistudio.google.com/)
2. 使用 Google 账号登录
3. 点击左侧「Get API key」
4. 点击「Create API key」创建新密钥
5. 选择或创建一个 Google Cloud 项目
6. 复制生成的 API Key

### 配置参数

| 参数 | 说明 |
|------|------|
| API Key | 从 AI Studio 获取的密钥 |
| 模型 | 推荐使用 `gemini-2.0-flash` |

::: tip 免费额度
Gemini 提供充足的免费调用额度，个人使用通常无需付费。
:::

---

## 模型选择

| 模型 | 特点 |
|------|------|
| gemini-2.0-flash | 最新快速模型，推荐使用 |
| gemini-1.5-pro | 长上下文处理能力强 |
| gemini-1.5-flash | 快速响应，适合高频使用 |

## 下一步

配置完成后，返回插件进行 [OCR 服务配置](/config/ocr-services) 或 [翻译服务配置](/config/translate-services)。
