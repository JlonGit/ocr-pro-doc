# 腾讯云

# 腾讯 OCR

注意

本文信息可能会过时，仅供参考，请以服务商最新官方文档为准。

官方文档：https://cloud.tencent.com/product/generalocr/getting-started

## 0. 收费模式

[查看详情](https://cloud.tencent.com/product/generalocr/pricing)

| 服务           | 免费额度     | 超出免费额度 | 并发请求数 |
| :------------- | :----------- | :----------- | :--------- |
| 通用印刷体识别 | 每月1000次 👍 | 0.15元/次    | -          |

## 1. 注册登录

[点击此处跳转网页](https://cloud.tencent.com/)

![tencent_ocr_login](https://cdn.ripperhe.com/oss/master/2020/0502/tencent_ocr_login.png)

## 2. 个人认证

注意

腾讯云免费服务使用之前需要认证，普通用户申请「个人认证」即可，如果已经认证，请直接跳过此步骤

进入 [「账号信息-查看或修改认证」](https://console.cloud.tencent.com/developer/auth)，点击「开始个人认证」

![tencent_ocr_auth_1](https://cdn.ripperhe.com/oss/master/2020/0502/tencent_ocr_auth_1.png)

以下信息如实填写，然后点击「下一步」

![tencent_ocr_auth_2](https://cdn.ripperhe.com/oss/master/2020/0502/tencent_ocr_auth_2.png)

如下提示即代表认证成功

![tencent_ocr_auth_3](https://cdn.ripperhe.com/oss/master/2020/0502/tencent_ocr_auth_3.png)

## 3. 开通文字识别

提示

如果进入文字识别页面能直接看到调用量，证明已开通，请直接跳过此步骤

进入 [「文字识别-通用文字识别-通用印刷体识别」](https://console.cloud.tencent.com/ocr/general) 页面，点击「立即开通」

![tencent_ocr_open](https://cdn.ripperhe.com/oss/master/2020/0502/tencent_ocr_open.png)

## 4. 获取秘钥

警告

**前面的步骤，只要没明确说可以跳过，那就是不能跳过的，不然获取到秘钥也用不了！**

此外，请妥善保管自己的秘钥，秘钥泄露可能会给你带来损失！

获取秘钥有两个方法，方法 1 更快捷，方法 2 更安全，**任选一个跟着操作就可以了**。

### 方法1（更快捷）

如果想更快捷地获取秘钥，可以直接获取「主账号」的秘钥，**该秘钥可以直接访问你账户下的所有腾讯云资源**。

进入 [「访问管理-访问秘钥-API秘钥管理」](https://console.cloud.tencent.com/cam/capi)，点击「新建秘钥」

提示

如果已有秘钥，可直接使用，无需再新建

![tencent_ocr_secret_1_1](https://cdn.ripperhe.com/oss/master/2020/0502/tencent_ocr_secret_1_1.png)

如下图所示即所需的秘钥

![tencent_ocr_secret_1_2](https://cdn.ripperhe.com/oss/master/2020/0502/tencent_ocr_secret_1_2.png)

### 方法2（更安全）

如果想要更安全一些，可以创建一个「子用户」，然后只给这个「子用户」开启访问「文字识别」API的权限

注意

如果之前为腾讯的其他服务创建过「子用户」，**也请创建一个新的「子用户」**，每个服务对应的权限可能不同，只有权限对应上了才能正常使用。

进入 [「访问管理-用户-用户列表」](https://console.cloud.tencent.com/cam)，点击「新建用户」

![tencent_ocr_user_1](https://cdn.ripperhe.com/oss/master/2020/0502/tencent_ocr_user_1.png)

点击「自定义创建」

![tencent_ocr_user_2](https://cdn.ripperhe.com/oss/master/2020/0502/tencent_ocr_user_2.png)

选择「可访问资源并接受消息」

![tencent_ocr_user_3](https://cdn.ripperhe.com/oss/master/2020/0502/tencent_ocr_user_3.png)

用户名随意设置，勾选上「编程访问」，其他的不用勾选，然后点击「下一步」

![tencent_ocr_user_4](https://cdn.ripperhe.com/oss/master/2020/0502/tencent_ocr_user_4.png)

在搜索框输入「ocr」即可快速找到「文字识别」相关服务，然后勾选上「**QcloudOCRFullAccess**」，点击「下一步」

![tencent_ocr_user_5](https://cdn.ripperhe.com/oss/master/2020/0502/tencent_ocr_user_5.png)

点击「完成」

![tencent_ocr_user_6](https://cdn.ripperhe.com/oss/master/2020/0502/tencent_ocr_user_6.png)

如下图所示即为所需秘钥

![tencent_ocr_user_7](https://cdn.ripperhe.com/oss/master/2020/0502/tencent_ocr_user_7.png)

如果已经创建完「子用户」，想重新查看秘钥，则进入 [「访问管理-用户-用户列表」](https://console.cloud.tencent.com/cam)，展开对应子用户，然后点击「查看用户详情」

![tencent_ocr_secret_2_1](https://cdn.ripperhe.com/oss/master/2020/0502/tencent_ocr_secret_2_1.png)

点击「API 秘钥」，下图所示即可所需秘钥

![tencent_ocr_secret_2_2](https://cdn.ripperhe.com/oss/master/2020/0502/tencent_ocr_secret_2_2.png)

## 5. 填写秘钥

在 Bob 的 偏好设置 > 服务 中，选中「文本识别」，点击 `+` 号，选中「腾讯 OCR」，然后将刚才获取到的秘钥填写到对应位置即可。

详细使用方法可查看 [服务](https://bobtranslate.com/guide/advance/service.html) 页面。

## 6. 注意事项

- **腾讯云文字识别开通后需要等免费资源包才可以使用。**
- 资源包发放可能有延迟，最迟将于开通后整点全部发放到位。
- 可在这个页面查看资源包的情况 https://console.cloud.tencent.com/ocr/packagemanage

---

## 常见问题

### 1. 开通后无法立即使用

- 开通后需要等待资源包发放，通常在整点时发放
- 最迟等待时间为开通后的下一个整点
- 可以在 [资源包管理页面](https://console.cloud.tencent.com/ocr/packagemanage) 查看发放情况

### 2. 个人认证失败

- 确保提交的身份信息真实有效
- 检查身份证照片清晰度
- 等待审核完成（通常 1-2 小时）

### 3. 秘钥无法使用

- 检查秘钥是否正确复制
- 确认是否已完成个人认证
- 确认是否已开通文字识别服务

### 4. 免费额度用完了

- 可以升级到付费版本
- 查看 [腾讯云 OCR 定价页面](https://cloud.tencent.com/product/generalocr/pricing) 了解价格
- 可以创建多个子用户来获得更多免费额度

### 5. API 调用失败

- 检查 SecretId 和 SecretKey 是否正确
- 确认请求格式是否正确
- 检查图片大小是否超过限制（通常 5MB 以内）

### 6. 识别精度不高

- 确保图片清晰度足够
- 调整图片角度和光线
- 尝试不同的识别模型

### 7. 子用户权限问题

- 确保子用户已被授予「QcloudOCRFullAccess」权限
- 如果权限不足，需要重新创建子用户并授予正确的权限
- 可以在 [访问管理页面](https://console.cloud.tencent.com/cam) 查看和修改权限

### 8. 如何选择获取秘钥的方法

- **方法 1（更快捷）**：直接使用主账号秘钥，但安全性较低
- **方法 2（更安全）**：创建子用户并只授予 OCR 权限，推荐使用

## 腾讯云的优势

- 免费额度相对较大（每月 1000 次）
- 支持多种文字识别场景
- 与其他腾讯云服务集成方便
- 国内访问速度快
