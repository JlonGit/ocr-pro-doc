# OpenAI

OpenAI 的 GPT 系列模型，综合能力强，生态成熟。

## API 申请

### 申请步骤

1. 访问 [OpenAI Platform](https://platform.openai.com/)
2. 注册/登录账号
3. 进入「API keys」页面
4. 点击「Create new secret key」
5. 复制并保存 API Key

### 配置参数

| 参数 | 说明 |
|------|------|
| API Key | OpenAI API 密钥 |
| API 地址 | 默认 `https://api.openai.com/v1`，可自定义 |
| 模型 | 推荐 `gpt-4o` 或 `gpt-4o-mini` |

::: warning 注意
OpenAI 需要绑定付款方式才能使用 API。可考虑使用第三方中转服务。
:::

---

## API 地址自定义

支持自定义 API 地址，方便使用第三方中转或私有部署：

- **OpenAI 兼容格式**：填写完整地址，如 `https://your-proxy.com/v1`
- **Azure OpenAI**：使用 Azure 端点地址

## 模型选择

| 模型 | 特点 |
|------|------|
| gpt-4o | 旗舰多模态模型，能力最强 |
| gpt-4o-mini | 轻量版本，速度快，价格低 |

## 下一步

配置完成后，返回插件进行 [大模型服务配置](/config/llm-models)。
