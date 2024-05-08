const baiduCode = require('./config/baiduCode.js'); //百度统计hm码
module.exports = {

    theme: 'vdoing', // 使用依赖包主题
    title: "elegant-admin 文档",
    description: '一个基于Vue3、TypeScript、Pinia等技术栈搭建的脚手架',
    base: '/elegant-admin-docs/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
    head: [ // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
        ['link', {rel: 'icon', href: '/img/favicon.ico'}], //favicons，资源放在public文件夹
        ['meta', {name: 'keywords', content: 'vuepress,theme,blog,vdoing'}],
        ['meta', {name: 'theme-color', content: '#11a8cd'}], // 移动浏览器主题颜色
    ],

    // 主题配置
    themeConfig: {
        nav: [
            {text: '首页', link: '/'},
            {
                text: '指南', link: '/pages/52d5c3/', items: [
                    {text: '介绍', link: '/pages/52d5c3/'},
                    {text: '快速上手', link: '/pages/793dcb/'},
                    {text: '目录结构', link: '/pages/5277c3/'},
                    {text: '代码规范', link: '/pages/2f674a/'},
                    {text: '配置', link: '/pages/33d574/'},
                    {text: '路由（导航）', link: '/pages/088c16/'},
                    {text: '与服务端交互', link: '/pages/d0d7eb/'},
                    {text: '全局状态管理', link: '/pages/197691/'},
                    {text: '打包和部署', link: '/pages/574c7a/'},
                    {
                        text: '进阶', items: [
                            {text: 'RBAC权限', link: '/pages/8dfab5/'},
                            {text: '布局', link: '/pages/dd027d/'},
                            {text: '主题', link: '/pages/2b8e22/'},
                            {text: 'Tailwind CSS', link: '/pages/66bf01/'},
                        ]
                    },
                    {
                        text: '高级', items: [
                            {text: '页面缓存', link: '/pages/9be742/'},
                            {text: '代码文件自动生成', link: '/pages/a8cdee/'},
                            {text: '常用 API', link: '/pages/50f672/'},
                            {text: 'JSX', link: '/pages/aabd33/'},
                            {text: '使用 Composition API 开发', link: '/pages/50f585/'},
                            {text: '构建工具', link: '/pages/93353b/'},
                        ]
                    }
                ]
            },
            {
                text: '常用组件', link: '/pages/a20ce8/', items: [
                    {text: '基础组件', link: '/pages/a20ce8/'},
                    {
                        text: '拓展组件', items: [
                            {text: 'Auth 鉴权', link: '/pages/600f55/'},
                            {text: 'AuthAll 鉴权', link: '/pages/f83cf8/'},
                            {text: 'Editor 富文本', link: '/pages/329bfa/'},
                            {text: 'PageHeader 页头', link: '/pages/c4c6fe/'},
                            {text: 'PageMain 内容块', link: '/pages/153deb/'},
                            {text: 'FixedActionBar 固定底部操作栏', link: '/pages/6e400c/'},
                            {text: 'ImageUpload 单图上传', link: '/pages/486fe2/'},
                            {text: 'ImagesUpload 多图上传', link: '/pages/a85ce8/'},
                            {text: 'VideoUpload 视频上传', link: '/pages/57e73d/'},
                            {text: 'IconSelect 图标选择器', link: '/pages/7df424/'},
                            {text: 'ProDialog 弹窗', link: '/pages/35096c/'},
                            {text: 'SvgIcon SVG图标', link: '/pages/023046/'},
                            {text: 'ProTableSelect 表格选择器', link: '/pages/8a48be/'},
                            {text: 'ProTable 数据表格', link: '/pages/d8a314/'},
                        ]
                    },
                ]
            },
            {text: '资源', link: '/pages/db78e2/'},
            // {text: '案例', link: '/pages/5d571c/'},
        ],
        sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
        logo: '/img/logo.png', // 导航栏logo
        repo: 'zhangyao1990/elegant-admin', // 导航栏右侧生成Github链接
        searchMaxSuggestions: 10, // 搜索结果显示最大数
        lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)

        // docsDir: 'docs', // 编辑的文件夹
        // editLinks: true, // 编辑链接
        // editLinkText: '编辑',

        // 以下配置是Vdoing主题改动的和新增的配置
        sidebar: {mode: 'structuring', collapsable: false}, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

        // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
        updateBar: { // 最近更新栏
            showToArticle: false, // 显示到文章页底部，默认true
            // moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
        },
        // titleBadge: false, // 文章标题前的图标是否显示，默认true
        // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
        //   '图标地址1',
        //   '图标地址2'
        // ],

        pageStyle: 'line', // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框

        // contentBgStyle: 1,

        category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
        tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
        // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。

        author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
            name: 'Mr zhang', // 必需
            href: 'https://github.com/zhangyao1990' // 可选的
        },
        social: { // 社交图标，显示于博主信息栏和页脚栏
            // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
            icons: [
                {
                    iconClass: 'icon-youjian',
                    title: '发邮件',
                    link: 'mailto:97972619@qq.com'
                },
                {
                    iconClass: 'icon-github',
                    title: 'GitHub',
                    link: 'https://github.com/zhangyao1990/elegant-admin'
                }
            ]
        },
        footer: { // 页脚信息
            createYear: 2024, // 创建年份
            copyrightInfo: 'Mr zhang | MIT License', // 博客版权信息，支持a标签
        },
    },

    // 插件
    plugins: [
        // [require('./plugins/love-me'), { // 鼠标点击爱心特效
        //   color: '#11a8cd', // 爱心颜色，默认随机色
        //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
        // }],

        ['fulltext-search'], // 全文搜索

        // ['thirdparty-search', { // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
        //   thirdparty: [ // 可选，默认 []
        //     {
        //       title: '在GitHub中搜索',
        //       frontUrl: 'https://github.com/search?q=', // 搜索链接的前面部分
        //       behindUrl: '' // 搜索链接的后面部分，可选，默认 ''
        //     },
        //     {
        //       title: '在npm中搜索',
        //       frontUrl: 'https://www.npmjs.com/search?q=',
        //     },
        //     {
        //       title: '在Bing中搜索',
        //       frontUrl: 'https://cn.bing.com/search?q='
        //     }
        //   ]
        // }],

        [
            'vuepress-plugin-baidu-tongji', // 百度统计
            {
                hm: baiduCode || '01293bffa6c3962016c08ba685c79d78'
            }
        ],

        ['one-click-copy', { // 代码块复制按钮
            copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
            copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
            duration: 1000, // prompt message display time.
            showInMobile: false // whether to display on the mobile side, default: false.
        }],
        ['demo-block', { // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
            settings: {
                // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
                // cssLib: ['http://xxx'], // 在线示例中的css依赖
                // vue: 'https://fastly.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
                jsfiddle: false, // 是否显示 jsfiddle 链接
                codepen: true, // 是否显示 codepen 链接
                horizontal: false // 是否展示为横向样式
            }
        }],
        [
            'vuepress-plugin-zooming', // 放大图片
            {
                selector: '.theme-vdoing-content img:not(.no-zoom)',
                options: {
                    bgColor: 'rgba(0,0,0,0.6)'
                },
            },
        ],
        [
            '@vuepress/last-updated', // "上次更新"时间格式
            {
                transformer: (timestamp, lang) => {
                    const dayjs = require('dayjs') // https://day.js.org/
                    return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
                },
            }
        ]
    ],

    markdown: {
        // lineNumbers: true,
        extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
    },

    // 监听文件变化并重新构建
    extraWatchFiles: [
        '.vuepress/config.js',
    ]
}
