import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "OCR Pro",
    description: "新一代 OCR 文字识别插件 - uTools 插件文档",
    lang: 'zh-CN',

    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/logo.png',

        nav: [
            { text: '首页', link: '/' },
            { text: '指南', link: '/guide/getting-started' },
            { text: '配置', link: '/config/profile' },
            { text: '服务申请', link: '/service/overview' }
        ],

        sidebar: {
            '/guide/': [
                { text: '快速开始', link: '/guide/getting-started' },
                {
                    text: 'OCR',
                    items: [
                        { text: '文字识别', link: '/guide/ocr' },
                        { text: '表格识别', link: '/guide/table-ocr' },
                        { text: '公式识别', link: '/guide/formula-ocr' },
                        { text: 'Markdown 识别', link: '/guide/markdown-ocr' },
                        { text: '二维码识别', link: '/guide/qrcode-ocr' }
                    ]
                },
                {
                    text: '翻译',
                    items: [
                        { text: '文字翻译', link: '/guide/translate' },
                        { text: '图片翻译', link: '/guide/image-translate' },
                        { text: '小窗翻译', link: '/guide/mini-translate' }
                    ]
                },
                {
                    text: '指令',
                    items: [
                        { text: '功能指令', link: '/guide/commands' },
                        { text: '匹配指令', link: '/guide/match-commands' }
                    ]
                }
            ],
            '/config/': [
                {
                    text: '基础配置',
                    items: [
                        { text: '个人中心', link: '/config/profile' },
                        { text: 'OCR默认模型', link: '/config/ocr-default' },
                        { text: '翻译默认模型', link: '/config/translate-default' },
                        { text: '可选配置', link: '/config/optional' },
                        { text: '快捷键配置', link: '/config/shortcuts' },
                        { text: '数据备份与恢复', link: '/config/backup' }
                    ]
                },
                {
                    text: '模型服务',
                    items: [
                        { text: '传统模型', link: '/config/traditional-models' },
                        { text: 'LLM模型', link: '/config/llm-models' }
                    ]
                },
                { text: '历史记录', link: '/config/history' }
            ],
            '/service/': [
                {
                    text: '服务申请',
                    items: [
                        { text: '概览', link: '/service/overview' }
                    ]
                },
                {
                    text: '传统模型',
                    collapsed: false,
                    items: [
                        { text: '百度智能云', link: '/service/baidu' },
                        { text: '腾讯云', link: '/service/tencent' },
                        { text: '阿里云', link: '/service/aliyun' },
                        { text: '火山引擎', link: '/service/volcengine' },
                        { text: 'DeepLX', link: '/service/deeplx' },
                        { text: '有道翻译', link: '/service/youdao' }
                    ]
                },
                {
                    text: 'LLM 模型',
                    collapsed: false,
                    items: [
                        { text: 'OpenAI', link: '/service/openai' },
                        { text: 'Anthropic', link: '/service/anthropic' },
                        { text: 'Gemini', link: '/service/gemini' },
                        { text: '阿里云百炼', link: '/service/aliyun-bailian' },
                        { text: '火山引擎', link: '/service/volcengine-llm' },
                        { text: '智谱AI', link: '/service/zhipu' }
                    ]
                }
            ]
        },

        socialLinks: [
            {
                icon: {
                    svg: '<svg height="1em" style="flex:none;line-height:1" viewBox="0 0 1024 1024" width="1em" xmlns="http://www.w3.org/2000/svg"><title>uTools</title><path d="M512 512m-509.449808 0a509.449808 509.449808 0 1 0 1018.899616 0 509.449808 509.449808 0 1 0-1018.899616 0Z" fill="#333333"></path><path d="M273.066667 205.682759l194.128429 103.302375a24.521073 24.521073 0 0 1 10.122299 33.152491l-4.708046 8.847203a65.127969 65.127969 0 0 1-88.079694 26.894712l-194.658084-103.577011a24.521073 24.521073 0 0 1-8.964904-34.0941l4.43341-8.317548a65.127969 65.127969 0 0 1 88.079693-26.894712z" fill="#f0f0f0"></path><path d="M149.362759 370.994023l282.090421 150.127816a67.089655 67.089655 0 0 1 26.933946 90.10023 24.521073 24.521073 0 0 1-33.15249 10.141916L144.144674 471.785441a67.089655 67.089655 0 0 1-27.71862-90.747587 24.521073 24.521073 0 0 1 32.917088-10.043831z" fill="#f0f0f0"></path><path d="M355.65364 876.559693l-2.197088-220.493486a24.521073 24.521073 0 0 1 24.266053-24.776092l9.416092-0.078467a65.127969 65.127969 0 0 1 65.775326 64.460996l2.197088 219.120306a24.521073 24.521073 0 0 1-24.28567 24.776092l-9.416092 0.098084a65.127969 65.127969 0 0 1-65.755709-63.107433z" fill="#f0f0f0"></path><path d="M575.970575 917.912031l-2.00092-319.558621a67.089655 67.089655 0 0 1 66.481533-67.285824 24.521073 24.521073 0 0 1 24.658391 24.344521l2.020536 319.166284a67.089655 67.089655 0 0 1-66.677701 67.501609 24.521073 24.521073 0 0 1-24.481839-24.167969z" fill="#f0f0f0"></path><path d="M926.111877 451.168123l-181.848275 123.664674a24.521073 24.521073 0 0 1-34.074483-6.473563l-5.296552-7.80751a65.127969 65.127969 0 0 1 17.243218-90.47295l181.985594-123.782376a24.521073 24.521073 0 0 1 34.388353 6.277395l5.296552 7.787893a65.127969 65.127969 0 0 1-17.223602 90.47295z" fill="#f0f0f0"></path><path d="M856.668199 261.002299L592.586054 440.594636a67.089655 67.089655 0 0 1-93.199694-17.73364 24.521073 24.521073 0 0 1 6.473563-34.074483l263.925211-179.494252a67.089655 67.089655 0 0 1 93.199694 17.753256 24.521073 24.521073 0 0 1-6.316629 33.956782z" fill="#f0f0f0"></path></svg>'
                },
                link: 'https://www.u-tools.cn/plugins/detail/OCR%20Pro/'
            }
        ],

        footer: {
            message: '基于 VitePress 构建',
            copyright: 'Copyright © 2025-present OCR Pro'
        },

        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: '搜索文档',
                        buttonAriaLabel: '搜索文档'
                    },
                    modal: {
                        noResultsText: '无法找到相关结果',
                        resetButtonTitle: '清除查询条件',
                        footer: {
                            selectText: '选择',
                            navigateText: '切换'
                        }
                    }
                }
            }
        },

        outline: {
            label: '页面导航'
        },

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
    }
})
