# DeepL 翻译

::: warning 注意

本文信息可能会过时，仅供参考，请以服务商最新官方文档为准。

官方文档：https://www.deepl.com/zh/pro#developer

:::

## 0. 收费模式

[查看详情](https://www.deepl.com/zh/pro#developer)

| 服务           | 免费额度       | 超出免费额度                            | 并发请求数 |
| :------------- | :------------- | :-------------------------------------- | :--------- |
| DEEPL API FREE | 每月50万字符 👍 | 禁止使用                                | -          |
| DEEPL API Pro  | 无免费额度     | 每月4.99欧元基础费用 + 20欧元/100万字符 | -          |

## 1. 申请条件

申请 DeepL API 仅支持部分国家的信用卡（**目前国内的 Visa 卡是不行的**），点击下方链接可查看支持的国家。

查看支持的国家

## 2. 注册开通 DeepL API

前往[「DeepL API 申请页面」](https://www.deepl.com/pro#developer)，滑动到对应区域，选中「研发人员」，**选中自己的银行卡发行国**，点击「免费注册」（这里是以注册「DEEPL API FREE」为例，如果想注册「DEEPL API Pro」，就点击右侧的「立即订购」）

![deepl_register_1](https://cdn.ripperhe.com/oss/master/2022/1103/deepl_register_1.jpg)

然后正常输入账号信息进行注册，紧接着如下图所示，如实输入必要的信息，点击「继续」

![deepl_register_2](https://cdn.ripperhe.com/oss/master/2022/1103/deepl_register_2.jpg)

提示

接下来有可能还会有一些验证手段，用于验证你是否为信用卡的主人，跟着提示操作就行

勾选上「我接收...」、「我同意...」，点击「免费注册」

![deepl_register_3](https://cdn.ripperhe.com/oss/master/2022/1103/deepl_register_3.jpg)

如下图所示即为申请成功

![deepl_register_4](https://cdn.ripperhe.com/oss/master/2022/1103/deepl_register_4.jpg)

## 3. 获取秘钥

警告

**前面的步骤，只要没明确说可以跳过，那就是不能跳过的，不然获取到秘钥也用不了！**

此外，请妥善保管自己的秘钥，秘钥泄露可能会给你带来损失！

注册成功之后，进入「[DeepL 账户](https://www.deepl.com/zh/account/summary)」页面，如下图所示即为需要的秘钥

![deepl_secret](https://cdn.ripperhe.com/oss/master/2022/1103/deepl_secret.jpg)

## 4. 填写秘钥

在 OCR Pro 的 模型服务 > 传统模型 中，选中「DeepLX」，然后将刚才获取到的秘钥填写到对应位置即可。
