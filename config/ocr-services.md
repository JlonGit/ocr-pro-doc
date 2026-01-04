# OCR 服务配置

OCR Pro 支持多种 OCR 服务，本文介绍如何配置各个服务。

## 进入配置

1. 呼出 uTools
2. 输入 `设置`
3. 选择「OCR 模型服务」

## 支持的服务

### 本地主机

使用系统内置 OCR 引擎，无需配置 API。

**优点：**
- ✅ 完全免费
- ✅ 离线使用
- ✅ 无需配置

**缺点：**
- ⚠️ 精度略低于云端服务
- ⚠️ 不支持表格结构识别

**配置步骤：**
1. 在 OCR 模型服务中选择「本地主机」
2. 点击启用即可使用

---

### 百度 OCR

百度智能云 OCR 服务，精度高、功能丰富。

**获取 API Key：**
1. 访问 [百度智能云](https://cloud.baidu.com/)
2. 注册/登录账号
3. 进入「产品服务」→「人工智能」→ 「文字识别」
4. 创建应用获取 API Key 和 Secret Key

**配置参数：**
| 参数 | 说明 |
|------|------|
| API Key | 应用的 API Key |
| Secret Key | 应用的 Secret Key |

::: tip 免费额度
百度 OCR 新用户有免费额度，具体请查看官网说明。
:::

---

### 腾讯 OCR

腾讯云 OCR 服务，速度快、性价比高。

**获取 API Key：**
1. 访问 [腾讯云](https://cloud.tencent.com/)
2. 注册/登录账号
3. 进入「云产品」→「人工智能」→「文字识别」
4. 获取 SecretId 和 SecretKey

**配置参数：**
| 参数 | 说明 |
|------|------|
| SecretId | 腾讯云 SecretId |
| SecretKey | 腾讯云 SecretKey |

---

### 阿里 OCR

阿里云 OCR 服务。

**获取 API Key：**
1. 访问 [阿里云](https://www.aliyun.com/)
2. 注册/登录账号
3. 进入「产品」→「人工智能」→「文字识别」
4. 获取 AccessKey

**配置参数：**
| 参数 | 说明 |
|------|------|
| AccessKey ID | 阿里云 AccessKey ID |
| AccessKey Secret | 阿里云 AccessKey Secret |

---

### 讯飞 OCR

科大讯飞 OCR 服务。

**获取 API Key：**
1. 访问 [讯飞开放平台](https://www.xfyun.cn/)
2. 注册/登录账号
3. 创建应用获取相关配置

---

### Gemini

使用 Google Gemini 模型进行 OCR。

**获取 API Key：**
1. 访问 [Google AI Studio](https://makersuite.google.com/)
2. 创建 API Key

---

### 自定义 API

支持配置符合特定格式的自定义 OCR API。

## 多模型配置

OCR Pro 支持配置多个模型并同时使用：

1. 在「OCR 默认模型」中设置模型数量
2. 启用的模型会同时进行识别
3. 可对比不同模型的识别结果

## 测试连接

配置完成后，点击「测试」按钮验证配置是否正确。

::: warning 注意
请妥善保管您的 API Key，不要泄露给他人。
:::
