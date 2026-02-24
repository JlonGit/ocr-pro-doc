# Gemini <Badge type="tip" text="推荐" />

::: warning 注意
本文信息可能会过时，仅供参考，请以服务商最新官方文档为准。

官方文档：https://ai.google.dev/docs
:::

Google 的多模态 AI 模型，免费额度大，支持 OCR、翻译等多种功能。

## 1. 访问 Google AI Studio

[点击此处跳转网页](https://aistudio.google.com/)

使用 Google 账号登录

如果没有 Google 账号，需要先注册

## 2. 创建 API Key

点击左侧「Get API key」

点击「Create API key」创建新密钥

选择或创建一个 Google Cloud 项目

系统会自动生成 API Key

复制生成的 API Key 并妥善保管

::: warning 警告
**API Key 请妥善保管，泄露可能会给你带来损失！**
:::

## 3. 查看使用配额

进入 [「Google Cloud Console」](https://console.cloud.google.com/)

选择对应的项目

进入「APIs & Services」→「Quotas」

可以查看 Gemini API 的使用配额

## 4. 填写 API Key

在 OCR 应用的 模型服务 > 大模型 中，选中「Gemini」，然后将刚才获取到的 API Key 填写到对应位置即可。

---

## 免费额度

::: tip 提示
Gemini 提供充足的免费调用额度，个人使用通常无需付费
:::

| 项目 | 免费额度 |
|------|---------|
| 请求数 | 每分钟 60 次 |
| 每日请求数 | 1500 次 |
| 并发请求数 | 2 个 |

## 模型选择

| 模型 | 特点 | 推荐场景 |
|------|------|---------|
| gemini-2.0-flash | 最新快速模型，推荐使用 | 通用任务、OCR 识别 |
| gemini-1.5-pro | 长上下文处理能力强 | 长文本分析、复杂任务 |
| gemini-1.5-flash | 快速响应，适合高频使用 | 简单任务、高频调用 |

## 定价信息

具体定价请查看 [Google AI 定价页面](https://ai.google.dev/pricing)

::: tip 提示
免费额度对于个人使用和测试通常足够，超出后才需要付费
:::

## 常见问题

### 1. 无法访问 Google AI Studio

Google AI Studio 在某些地区可能无法直接访问，可以：
- 使用 VPN 或代理服务
- 使用第三方中转 API 服务

### 2. API Key 无法使用

- 确保 API Key 已启用 Gemini API
- 检查 Google Cloud 项目是否正确
- 确认 API 配额未超出

### 3. 如何增加免费额度

- 升级到付费账户可获得更高的配额
- 联系 Google Cloud 支持申请提高限制

### 4. 模型选择建议

- OCR 识别：使用 `gemini-2.0-flash` 或 `gemini-1.5-pro`
- 高频调用：使用 `gemini-1.5-flash`
- 长文本处理：使用 `gemini-1.5-pro`

## 下一步

配置完成后，返回插件进行 [大模型服务配置](/config/llm-models)。
