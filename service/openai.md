# OpenAI

::: warning 注意

本文信息可能会过时，仅供参考，请以服务商最新官方文档为准。

官方文档：https://platform.openai.com/docs/introduction

:::

## 0. 收费模式

| Model       | input tokens | output tokens |
| :---------- | :----------- | :------------ |
| gpt-4o      | $2.50 / 1M   | $10.00 / 1M   |
| gpt-4o-mini | $0.150 / 1M  | $0.600 / 1M   |

OpenAI 的 API 与其他 API 计费方式差别较大，按 token 计费，输入输出都会计入费用。OpenAI 官方文档有提到，根据经验粗略估计，对于英文文本，1 个 token 大约为 4 个字符或 0.75 个单词。

详情参考下方文档：

- https://openai.com/api/pricing/
- https://platform.openai.com/docs/models/overview

## 1. 申请条件

OpenAI 未在中国大陆提供服务，这可能是目前为止最难申请的 API。如果想要申请，需满足以下条件：

- 访问国际互联网的能力（在 OpenAI 官方不允许的国家或地区使用可能会导致封号）
- 能够接收短信的国外电话号码
- 国外信用卡

第三方 OpenAI/Claude API 推荐

申请 OpenAI/Claude 官方的 API 密钥比较困难，不满足条件可以考虑使用第三方的 API。

**推荐 AIHubMix 的 API 密钥，聚合 OpenAI 和 Claude 的 API 密钥，速度飞快，无封号风险。**

免责声明：虽然此 OpenAI/Claude API 在推广前已经验证可用，但由于该 OpenAI/Claude API 密钥由第三方平台 AIHubMix 提供，所以需要自行承担购买和使用密钥的风险。

前往 AIHubMix 平台



```
https://aihubmix.com?aff=2nc8
```

## 2. 注册登录

前往 [OpenAI 官网](https://platform.openai.com/overview) 注册登录。

## 3. 获取秘钥

警告

请妥善保管自己的秘钥，秘钥泄露可能会给你带来损失！

申请成功后，前往 [「这个网页」](https://platform.openai.com/account/api-keys)，点击「Create new secret key」

![openai_key](https://cdn.ripperhe.com/oss/master/2023/0401/openai_key.jpg)

如下图所示即为需要的秘钥

![openai_key](https://cdn.ripperhe.com/oss/master/2023/0401/openai_key2.jpg)

## 4. 填写秘钥

在 OCR Pro 的 模型服务 > 大模型 中，选中「OpenAI」，然后将刚才获取到的秘钥填写到对应位置即可。
