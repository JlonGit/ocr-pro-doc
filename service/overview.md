# 服务申请概览

## 传统模型

传统的机器识别、机器翻译的模型

<ServiceGrid>
  <ServiceCard name="百度智能云" link="/service/baidu" iconSrc="/image/icons/baiducloud-color.png" />
  <ServiceCard name="腾讯云" link="/service/tencent" iconSrc="/image/icons/tencentcloud-color.png" />
  <ServiceCard name="阿里云" link="/service/aliyun" iconSrc="\image\icons\alibabacloud-color.png" />
  <ServiceCard name="火山引擎" link="/service/volcengine" iconSrc="/image/icons/volcengine-color.png" />
  <ServiceCard name="DeepLX" link="/service/deeplx" iconSrc="/image/icons/deepl-color.png" />
  <ServiceCard name="有道翻译" link="/service/youdao" iconSrc="/image/icons/youdao.png" />
</ServiceGrid>

::: tip 提示
DeepLX、有道翻译 模型只能进行翻译
:::

### 服务对比

| 服务 | OCR | 翻译 | 免费额度 | 推荐指数 |
|------|-----|------|---------|---------|
| 百度智能云 | ✅ | ✅ | 1000次/月 | ⭐⭐⭐⭐⭐ |
| 腾讯云 | ✅ | ✅ | 1000次/月 | ⭐⭐⭐⭐⭐ |
| 阿里云 | ✅ | ✅ | 200次/月 | ⭐⭐⭐⭐ |
| 火山引擎 | ✅ | ✅ | 试用额度 | ⭐⭐⭐⭐ |
| DeepLX | ❌ | ✅ | 50万字符/月 | ⭐⭐⭐⭐⭐ |
| 有道翻译 | ❌ | ✅ | 100元体验金 | ⭐⭐⭐⭐ |

### 选择建议

- **OCR 识别**：推荐使用百度智能云或腾讯云（免费额度大，精度高）
- **中文翻译**：推荐使用百度翻译或有道翻译（中文理解能力强）
- **欧洲语言翻译**：推荐使用 DeepLX（翻译质量最高）
- **国内访问**：推荐使用阿里云、腾讯云、百度智能云（访问速度快）

---

## LLM 模型

基于大语言模型的多功能服务，支持 OCR、翻译、公式识别等多种能力。

<ServiceGrid>
  <ServiceCard name="OpenAI" link="/service/openai" iconSrc="/image/icons/openai.png" />
  <ServiceCard name="Anthropic" link="/service/anthropic" iconSrc="/image/icons/claude-color.png" />
  <ServiceCard name="Gemini" link="/service/gemini" iconSrc="/image/icons/gemini-color.png" />
  <ServiceCard name="阿里云百炼" link="/service/aliyun-bailian" iconSrc="/image/icons/qwen-color.png" />
  <ServiceCard name="火山引擎" link="/service/volcengine-llm" iconSrc="/image/icons/doubao-color.png" />
  <ServiceCard name="智谱AI" link="/service/zhipu" iconSrc="/image/icons/zhipu-color.png" />
</ServiceGrid>

### 服务对比

| 服务 | 免费额度 | 国内访问 | 推荐指数 |
|------|---------|---------|---------|
| OpenAI | ❌ | 需代理 | ⭐⭐⭐⭐⭐ |
| Anthropic | ❌ | 需代理 | ⭐⭐⭐⭐⭐ |
| Gemini | ✅ | 需代理 | ⭐⭐⭐⭐⭐ |
| 阿里云百炼 | ✅ | ✅ | ⭐⭐⭐⭐⭐ |
| 火山引擎 | ✅ | ✅ | ⭐⭐⭐⭐ |
| 智谱AI | ✅ | ✅ | ⭐⭐⭐⭐ |

### 选择建议

- **国内用户首选**：阿里云百炼、火山引擎、智谱AI（无需代理，访问快）
- **国际用户首选**：OpenAI、Anthropic、Gemini（能力强，生态成熟）
- **免费体验**：Gemini、阿里云百炼、火山引擎、智谱AI（都有免费额度）
- **OCR 识别**：推荐使用 Gemini 或阿里云百炼（视觉能力强）
- **长文本处理**：推荐使用 Anthropic Claude（上下文窗口大）
- **中文理解**：推荐使用阿里云百炼或智谱AI（中文能力强）

---

## 快速开始

### 第一步：选择服务

根据你的需求选择合适的服务：
- 只需要 OCR 识别？→ 选择传统模型（百度、腾讯、阿里云）
- 需要 OCR + 翻译？→ 选择传统模型或 LLM 模型
- 需要复杂的文本处理？→ 选择 LLM 模型

### 第二步：注册账号

点击对应服务的链接，按照教程注册账号并完成认证

### 第三步：获取密钥

按照服务文档的步骤获取 API Key 或密钥

### 第四步：配置应用

在你的应用中填写获取到的密钥，开始使用

---

## 常见问题

### 1. 如何选择合适的服务？

- 如果只是测试，推荐使用免费额度大的服务（百度、腾讯、Gemini）
- 如果是生产环境，推荐选择稳定性好的服务（OpenAI、Anthropic、阿里云）
- 如果在国内，推荐选择国内服务（阿里云、腾讯云、百度、火山引擎）

### 2. 免费额度用完了怎么办？

- 可以升级到付费版本
- 可以创建多个账号获得更多免费额度
- 可以选择其他服务的免费额度

### 3. 如何降低成本？

- 使用轻量级模型（如 gpt-4o-mini、claude-3-haiku）
- 优化 prompt，减少 token 使用
- 使用批量 API 获得折扣
- 选择国内服务（通常价格更便宜）

### 4. 如何解决访问限制？

- 国外服务（OpenAI、Anthropic）在某些地区需要使用 VPN 或代理
- 可以使用第三方中转 API 服务
- 推荐使用国内服务避免访问问题

### 5. 如何保护 API Key？

- 不要在代码中硬编码 API Key
- 使用环境变量存储 API Key
- 定期更换 API Key
- 如果 API Key 泄露，立即删除并创建新的

---

## 更多资源

- [Bob 翻译官方文档](https://bobtranslate.com/)
- [各服务官方文档链接](/service/)
