# Anthropic

::: warning 注意
本文信息可能会过时，仅供参考，请以服务商最新官方文档为准。

官方文档：https://docs.anthropic.com/en/docs/quickstart
:::

Anthropic 的 Claude 系列模型，长文本处理能力强。

## 1. 注册登录

[点击此处跳转网页](https://console.anthropic.com/)

点击「Sign up」注册账号

使用邮箱注册或通过 Google 账号登录

## 2. 绑定支付方式

::: warning 重要
Anthropic API 需要绑定有效的支付方式才能使用
:::

登录后进入 [「Billing」](https://console.anthropic.com/settings/billing/overview)

点击「Add payment method」

选择支付方式（信用卡、借记卡等）

填写卡片信息并完成验证

## 3. 创建 API Key

进入 [「API Keys」](https://console.anthropic.com/settings/keys)

点击「Create Key」

输入密钥名称（可选）

复制生成的 API Key 并妥善保管

::: warning 警告
**API Key 只会显示一次，请立即复制并保存到安全的地方，泄露可能会给你带来损失！**
:::

## 4. 查看使用情况

进入 [「Usage」](https://console.anthropic.com/settings/usage)

可以查看当前的使用情况和成本

## 5. 填写 API Key

在 OCR 应用的 模型服务 > 大模型 中，选中「Anthropic」，然后将刚才获取到的 API Key 填写到对应位置即可。

---

## 模型选择

| 模型 | 特点 | 推荐场景 |
|------|------|---------|
| claude-3-5-sonnet-20241022 | 综合能力强，性价比高 | 通用任务、OCR 识别 |
| claude-3-opus-20250219 | 最强模型，复杂任务首选 | 复杂推理、长文本分析 |
| claude-3-haiku-20250307 | 轻量版本，速度快 | 简单任务、高频调用 |

## 定价信息

具体定价请查看 [Anthropic 定价页面](https://www.anthropic.com/pricing/claude)

::: tip 提示
Claude 模型支持较长的上下文窗口，适合处理大量文本
:::

## 常见问题

### 1. 无法访问 Anthropic 网站

Anthropic 在某些地区可能无法直接访问，可以：
- 使用 VPN 或代理服务
- 使用第三方中转 API 服务

### 2. 支付方式被拒绝

- 确保信用卡支持国际交易
- 尝试使用其他支付方式
- 联系银行确认是否被限制

### 3. API 调用失败

- 检查 API Key 是否正确
- 确认账户有足够的余额或额度
- 检查请求格式是否正确

### 4. 如何选择模型

- 复杂任务：使用 `claude-3-opus`
- 通用任务：使用 `claude-3-5-sonnet`
- 简单任务：使用 `claude-3-haiku`

## 下一步

配置完成后，返回插件进行 [大模型服务配置](/config/llm-models)。
