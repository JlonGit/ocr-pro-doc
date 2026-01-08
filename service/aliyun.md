# 阿里云

阿里云提供企业级的 OCR 文字识别和翻译服务，稳定可靠。

## OCR 服务

阿里云 OCR 服务企业级稳定性，适合生产环境使用。

### 申请步骤

1. 访问 [阿里云](https://www.aliyun.com/)
2. 注册/登录账号
3. 进入「产品」→「人工智能」→「文字识别」
4. 开通服务
5. 进入「AccessKey管理」创建密钥
6. 获取 **AccessKey ID** 和 **AccessKey Secret**

### 配置参数

| 参数 | 说明 |
|------|------|
| AccessKey ID | 阿里云 AccessKey ID |
| AccessKey Secret | 阿里云 AccessKey Secret |

::: warning 安全提示
建议创建 RAM 用户并使用子账号密钥，避免使用主账号 AccessKey。
:::

---

## 翻译服务

阿里云机器翻译服务，与阿里 OCR 共用密钥。

### 申请步骤

1. 访问 [阿里云](https://www.aliyun.com/)
2. 登录账号
3. 进入「产品」→「人工智能」→「机器翻译」
4. 开通服务
5. 使用之前获取的 **AccessKey ID** 和 **AccessKey Secret**

### 配置参数

| 参数 | 说明 |
|------|------|
| AccessKey ID | 阿里云 AccessKey ID |
| AccessKey Secret | 阿里云 AccessKey Secret |

## 下一步

配置完成后，返回插件进行 [OCR 服务配置](/config/ocr-services) 或 [翻译服务配置](/config/translate-services)。
