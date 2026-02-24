# 火山引擎

::: warning 注意

本文信息可能会过时，仅供参考，请以服务商最新官方文档为准。

官方文档：https://www.volcengine.com/docs/4640/130872

:::

# OCR

注意

本文信息可能会过时，仅供参考，请以服务商最新官方文档为准。

官方文档：https://www.volcengine.com/docs/6790/116978

## 0. 收费模式

[查看详情](https://www.volcengine.com/docs/6790/116979)

| 服务                       | 免费额度                         | 超出免费额度 | 并发请求数 |
| :------------------------- | :------------------------------- | :----------- | :--------- |
| 多语种 OCR（免费试用状态） | 共计 5000 次（每个账号赠送一次） | -            | 1次/秒     |
| 多语种 OCR（正式调用状态） | 无                               | 0.015元/次   | 10次/秒    |

## 1. 注册登录

[点击此处跳转网页](https://www.volcengine.com/)

提示：火山引擎是字节跳动旗下的云服务平台，可以用抖音扫码注册登录

![volcengine_login](https://cdn.ripperhe.com/oss/master/2022/0828/volcengine_login.jpg)

## 2. 实名认证

注意

火山引擎的服务使用之前需要认证，普通用户申请「个人认证」即可，如果已经认证，请直接跳过此步骤

进入[「账号管理-实名认证」](https://console.volcengine.com/user/authentication)页面，点击「开始个人认证」

![volcengine_auth_1](https://cdn.ripperhe.com/oss/master/2022/0828/volcengine_auth_1.jpg)

有多种认证方式，可自行选择。我这里选的扫脸认证，然后点击「下一步」

![volcengine_auth_2](https://cdn.ripperhe.com/oss/master/2022/0828/volcengine_auth_2.jpg)

输入个人信息，然后点击「提交认证」

![volcengine_auth_3](https://cdn.ripperhe.com/oss/master/2022/0828/volcengine_auth_3.jpg)

手机打开抖音，扫描下方二维码

![volcengine_auth_4](https://cdn.ripperhe.com/oss/master/2022/0828/volcengine_auth_4.jpg)

如下所示，即为认证成功

![volcengine_auth_5](https://cdn.ripperhe.com/oss/master/2022/0828/volcengine_auth_5.jpg)

## 3. 开通文字识别

进入 [「视觉智能控制台」](https://console.volcengine.com/ai/overview) 页面

选中「业务总览」，点击「创建应用」

![create_cv_app_1](https://cdn.ripperhe.com/oss/master/2022/1101/create_cv_app_1.jpg)

输入应用名称、应用描述，接入能力把「通用文字识别」和「多语种OCR」都选上，然后点击「创建应用」，页面提示成功即为创建成功

![create_cv_app_2](https://cdn.ripperhe.com/oss/master/2022/1101/create_cv_app_2.jpg)

## 4. 获取秘钥

警告

**前面的步骤，只要没明确说可以跳过，那就是不能跳过的，不然获取到秘钥也用不了！**

此外，请妥善保管自己的秘钥，秘钥泄露可能会给你带来损失！

为了安全，先创建一个子用户，然后给该用户开通「视觉智能全读写策略」的权限，最后生成一个秘钥即可。

提示

如果你之前开通过火山的其他服务，已经生成了一个子用户，建议你直接跳到后面开通权限的那个步骤，把「视觉智能全读写策略」的权限加上，复用之前那个子用户就行。

进入 [「秘钥管理-身份管理-用户」](https://console.volcengine.com/iam/identitymanage/user)，点击「新建用户」

![volcengine_translate_secret_1](https://cdn.ripperhe.com/oss/master/2022/0828/volcengine_translate_secret_1.jpg)

用户名输入「OCR_Pro」，点击「下一步」

![volcengine_translate_secret_2](https://cdn.ripperhe.com/oss/master/2022/0828/volcengine_translate_secret_2.jpg)

点击「提交」

![volcengine_translate_secret_3](https://cdn.ripperhe.com/oss/master/2022/0828/volcengine_translate_secret_3.jpg)

点击「管理」

![volcengine_translate_secret_4](https://cdn.ripperhe.com/oss/master/2022/0828/volcengine_translate_secret_4.jpg)

选中「权限」那一栏，点击「添加权限」，搜索框输入「CVFullAccess」，勾选上列表中的「CVFullAccess」，点击右下角「确定」

![volcengine_cv_secret](https://cdn.ripperhe.com/oss/master/2023/0310/volcengine_cv_secret.jpg)

选中「秘钥」那一栏，点击「新建秘钥」

![volcengine_translate_secret_6](https://cdn.ripperhe.com/oss/master/2022/0828/volcengine_translate_secret_6.jpg)

如下所示即为新建秘钥成功，可以直接点击「查看秘钥详情」查看秘钥，也可以点空白处关闭这个弹窗

![volcengine_translate_secret_7](https://cdn.ripperhe.com/oss/master/2022/0828/volcengine_translate_secret_7.jpg)

弹窗关闭后，可在下图位置查看秘钥

![volcengine_translate_secret_8](https://cdn.ripperhe.com/oss/master/2022/0828/volcengine_translate_secret_8.jpg)

## 5. 填写秘钥

在 OCR Pro 的 模型服务 > 传统模型 中，选中「火山引擎」，然后将刚才获取到的秘钥填写到对应位置即可。

# 翻译服务

## 0. 收费模式

[查看详情](https://www.volcengine.com/docs/4640/68515)

| 服务     | 免费额度        | 超出免费额度   | 并发请求数 |
| :------- | :-------------- | :------------- | :--------- |
| 文本翻译 | 每月200万字符 👍 | 49元/100万字符 | 10次/秒    |

## 1. 注册登录

[点击此处跳转网页](https://www.volcengine.com/)

提示：火山引擎是字节跳动旗下的云服务平台，可以用抖音扫码注册登录

![volcengine_login](https://cdn.ripperhe.com/oss/master/2022/0828/volcengine_login.jpg)

## 2. 实名认证

注意

火山翻译使用之前需要认证，普通用户申请「个人认证」即可，如果已经认证，请直接跳过此步骤

进入[「账号管理-实名认证」](https://console.volcengine.com/user/authentication)页面，点击「开始个人认证」

![volcengine_auth_1](https://cdn.ripperhe.com/oss/master/2022/0828/volcengine_auth_1.jpg)

有多种认证方式，可自行选择。我这里选的扫脸认证，然后点击「下一步」

![volcengine_auth_2](https://cdn.ripperhe.com/oss/master/2022/0828/volcengine_auth_2.jpg)

输入个人信息，然后点击「提交认证」

![volcengine_auth_3](https://cdn.ripperhe.com/oss/master/2022/0828/volcengine_auth_3.jpg)

手机打开抖音，扫描下方二维码

![volcengine_auth_4](https://cdn.ripperhe.com/oss/master/2022/0828/volcengine_auth_4.jpg)

如下所示，即为认证成功

![volcengine_auth_5](https://cdn.ripperhe.com/oss/master/2022/0828/volcengine_auth_5.jpg)

## 3. 开通机器翻译

提示

如果进入机器翻译页面能直接看到用量数据，证明已开通，请直接跳过此步骤

进入 [「机器翻译」](https://console.volcengine.com/translate) 页面

勾选上「我已阅读并同意服务条款」，点击「立即开通」

![volcengine_translate_open_1](https://cdn.ripperhe.com/oss/master/2022/0828/volcengine_translate_open_1.jpg)

看到如下页面即为开通成功

![volcengine_translate_open_2](https://cdn.ripperhe.com/oss/master/2022/0828/volcengine_translate_open_2.jpg)

## 4. 获取秘钥

警告

**前面的步骤，只要没明确说可以跳过，那就是不能跳过的，不然获取到秘钥也用不了！**

此外，请妥善保管自己的秘钥，秘钥泄露可能会给你带来损失！

为了安全，先创建一个子用户，然后给该用户开通机器翻译的权限，最后生成一个秘钥即可。

进入 [「秘钥管理-身份管理-用户」](https://console.volcengine.com/iam/identitymanage/user)，点击「新建用户」

![volcengine_translate_secret_1](https://cdn.ripperhe.com/oss/master/2022/0828/volcengine_translate_secret_1.jpg)

用户名输入「OCR_Pro」，点击「下一步」

![volcengine_translate_secret_2](https://cdn.ripperhe.com/oss/master/2022/0828/volcengine_translate_secret_2.jpg)

点击「提交」

![volcengine_translate_secret_3](https://cdn.ripperhe.com/oss/master/2022/0828/volcengine_translate_secret_3.jpg)

点击「管理」

![volcengine_translate_secret_4](https://cdn.ripperhe.com/oss/master/2022/0828/volcengine_translate_secret_4.jpg)

选中「权限」那一栏，点击「添加权限」，搜索框输入「TranslateFullAccess」，勾选上列表中的「TranslateFullAccess」，点击右下角「确定」

![volcengine_translate_secret_5](https://cdn.ripperhe.com/oss/master/2023/0310/volcengine_translate_secret_5.jpg)

选中「秘钥」那一栏，点击「新建秘钥」

![volcengine_translate_secret_6](https://cdn.ripperhe.com/oss/master/2022/0828/volcengine_translate_secret_6.jpg)

如下所示即为新建秘钥成功，可以直接点击「查看秘钥详情」查看秘钥，也可以点空白处关闭这个弹窗

![volcengine_translate_secret_7](https://cdn.ripperhe.com/oss/master/2022/0828/volcengine_translate_secret_7.jpg)

弹窗关闭后，可在下图位置查看秘钥

![volcengine_translate_secret_8](https://cdn.ripperhe.com/oss/master/2022/0828/volcengine_translate_secret_8.jpg)

## 5. 填写秘钥

在 OCR Pro 的 模型服务 > 传统模型 中，选中「火山引擎」，然后将刚才获取到的秘钥填写到对应位置即可。
