# 阿里云百炼

::: warning 注意
本文信息可能会过时，仅供参考，请以服务商最新官方文档为准。

官方文档：https://help.aliyun.com/zh/model-studio/getting-started/first-api-call-to-qwen
:::

阿里云百炼平台的通义千问系列模型，国内访问速度快。

## 1. 注册登录

[点击此处跳转网页](https://www.aliyun.com/)

注册阿里云账号并登录（如需实名认证，按提示完成即可）

## 2. 实名认证

登录后进入 [「账户中心」](https://account.aliyun.com/login/login.htm)

点击「实名认证」

选择「个人」或「企业」认证

按照提示完成身份验证

::: tip 提示
实名认证是使用付费服务的前提条件
:::

## 3. 开通百炼服务

进入 [「阿里云百炼平台」](https://bailian.console.aliyun.com/)

点击「立即开通」

阅读服务协议并同意

系统会自动为你创建默认工作空间

## 4. 绑定支付方式

进入 [「账户中心 - 支付方式」](https://usercenter.aliyun.com/manage/paymethod)

点击「添加支付方式」

选择支付方式（信用卡、借记卡、支付宝等）

填写相关信息并完成验证

::: tip 提示
绑定支付方式后才能使用付费模型
:::

## 5. 创建 API Key

进入 [「API-KEY 管理」](https://bailian.console.aliyun.com/apikey)

点击「创建新的 API Key」

输入密钥名称（可选）

系统会生成 API Key

复制生成的 API Key 并妥善保管

::: warning 警告
**API Key 只会显示一次，请立即复制并保存到安全的地方，泄露可能会给你带来损失！**
:::

## 6. 查看使用情况

进入 [「账户中心」](https://bailian.console.aliyun.com/overview)

可以查看当前的使用情况、剩余额度和消费记录

## 7. 填写 API Key

在 OCR 应用的 模型服务 > 大模型 中，选中「阿里云百炼」，然后将刚才获取到的 API Key 填写到对应位置即可。

---

## 免费额度

| 项目 | 额度 |
|------|------|
| 新用户体验 | 免费额度 |
| 月度免费额度 | 根据模型而定 |

::: tip 提示
具体免费额度请查看 [阿里云百炼定价页面](https://bailian.console.aliyun.com/pricing)
:::

## 模型选择

| 模型 | 特点 | 推荐场景 |
|------|------|---------|
| qwen-vl-max | 视觉多模态模型，支持图像理解 | OCR 识别、图像分析 |
| qwen-vl-plus | 视觉模型的增强版本 | 图像理解、文档识别 |
| qwen-max | 最强语言模型 | 复杂推理、长文本处理 |
| qwen-turbo | 快速版本，性价比高 | 简单任务、高频调用 |
| qwen-plus | 中等能力模型 | 通用任务 |

## 定价信息

具体定价请查看 [阿里云百炼定价页面](https://bailian.console.aliyun.com/pricing)

::: tip 提示
阿里云百炼对中文的理解和处理能力特别强，国内访问速度快，适合中文 OCR 和文本处理任务
:::

## 下一步

配置完成后，返回插件进行 [大模型服务配置](/config/llm-models)。
