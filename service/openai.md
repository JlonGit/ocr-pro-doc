# OpenAI

::: warning 注意
本文信息可能会过时，仅供参考，请以服务商最新官方文档为准。

官方文档：https://platform.openai.com/docs/quickstart
:::

OpenAI 的 GPT 系列模型，综合能力强，生态成熟。

## 1. 注册登录

[点击此处跳转网页](https://platform.openai.com/)

点击「Sign up」注册账号

使用邮箱或 Google/Microsoft 账号登录

## 2. 绑定支付方式

::: warning 重要
OpenAI API 需要绑定有效的支付方式才能使用，否则会无法调用 API
:::

登录后进入 [「Billing」](https://platform.openai.com/account/billing/overview)

点击「Add to credit balance」或「Set up paid account」

选择支付方式（信用卡、借记卡等）

填写卡片信息并完成验证

## 3. 创建 API Key

进入 [「API keys」](https://platform.openai.com/api/keys)

点击「Create new secret key」

选择权限范围（通常选择「All」）

复制生成的 API Key 并妥善保管

::: warning 警告
**API Key 只会显示一次，请立即复制并保存到安全的地方，泄露可能会给你带来损失！**
:::

## 4. 查看使用额度

进入 [「Usage」](https://platform.openai.com/account/usage/overview)

可以查看当前的使用情况和剩余额度

## 5. 填写 API Key

在 OCR 应用的 模型服务 > 大模型 中，选中「OpenAI」，然后将刚才获取到的 API Key 填写到对应位置即可。

---

## API 地址自定义

支持自定义 API 地址，方便使用第三方中转或私有部署：

- **OpenAI 兼容格式**：填写完整地址，如 `https://your-proxy.com/v1`
- **Azure OpenAI**：使用 Azure 端点地址

## 模型选择

| 模型 | 特点 | 推荐场景 |
|------|------|---------|
| gpt-4o | 旗舰多模态模型，能力最强 | 复杂任务、OCR 识别 |
| gpt-4o-mini | 轻量版本，速度快，价格低 | 简单任务、高频调用 |
| gpt-4-turbo | 上一代旗舰模型 | 长文本处理 |

## 定价信息

具体定价请查看 [OpenAI 定价页面](https://openai.com/pricing)

::: tip 提示
可考虑使用第三方中转服务来降低成本或解决地域限制问题
:::

## 下一步

配置完成后，返回插件进行 [大模型服务配置](/config/llm-models)。
