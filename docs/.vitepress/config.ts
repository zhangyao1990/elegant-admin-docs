import mdItCustomAttrs from "markdown-it-custom-attrs";

export default {
	title: "Elegant-Admin",
	lang: "zh-CN",
	description: "elegant Admin 中文文档",
	base: '/elegant-admin-docs/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
	head: [
		["meta", { name: "author", content: "zhangyao1990" }],
		["meta", { name: "keywords", content: "Elegant, Elegant-Admin, Elegant-Admin-Docs, Vite, Vue, Vue3, Admin,Unocss" }],
		["link", { rel: "icon", href: "/logo.svg" }],
		['meta',{
			name: 'viewport',
			content: 'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
		}
		  ],
	],
	markdown: { config: (md) => md.use(mdItCustomAttrs, "image", { "data-fancybox": "gallery" }) },
	lastUpdated: true,
	themeConfig: {
		logo: "/logo.svg",
		algolia: {
			appId: "5FGOSJFSSP",
			apiKey: "3c2decc6101c3266d4222d28254fdf33",
			indexName: "Elegant-Admin",
		},
		editLink: {
			text: "为此页提供修改建议",
			pattern: "https://github.com/zhangyao1990/elegant-admin-Docs",
		},
		socialLinks: [{ icon: "github", link: "https://github.com/zhangyao1990/elegant-admin" }],
		footer: {
			message: "MIT License.",
			copyright: "Copyright © 2024 Elegant-Admin",
		},
		nav: [
			{ text: "指南", link: "/guide/", activeMatch: "/guide" },
			{
				text: "组件",
				items: [
					{ text: "ProTable", link: "/components/proTable" },
					{ text: "TableSelect", link: "/components/tableSelect" },
				],
			},
			{
				text: "相关链接",
				items: [
					{ text: "预览地址", link: "https://zhangyao1990.github.io/elegant-admin/" },
					{ text: "Gitee 源码", link: "https://gitee.com/git.zhangyao_ping.net/elegant-admin" },
					{ text: "GitHub 源码", link: "https://github.com/zhangyao1990/elegant-admin" },
					{ text: "文档源码", link: "https://github.com/zhangyao1990/elegant-admin-docs" },
				],
			},
			{ text: "🍵 赞助", link: "/sponsor/index" },
			{
				text: "语言",
				items: [{ text: "中文", link: "https://zhangyao1990.github.io/elegant-admin-docs/" }],
			},
		],

		sidebar: {
			"/guide/": [
				{
					text: "指南",
					collapsible: true,
					items: [
						{ text: "介绍", link: "/guide/introduce" },
						{ text: "快速上手", link: "/guide/" },
						{ text: "目录结构", link: "/guide/catalogue" },
						{ text: "路由、菜单", link: "/guide/router" },
						{ text: "权限管理", link: "/guide/auth" },
						{ text: "网络请求", link: "/guide/request" },
						{ text: "构建、部署", link: "/guide/build" },
					],
				},
				{
					text: "进阶",
					collapsible: true,
					items: [
						{ text: "项目规范", link: "/guide/standard" },
						{ text: "主题配置", link: "/guide/theme" },
						{ text: "布局模式", link: "/guide/layout" },
					],
				},
				{
					text: "其他",
					collapsible: true,
					items: [{ text: "常见问题", link: "/guide/question" }],
				},
			],
			"/components/": [
				{
					text: "组件",
					items: [
						{ text: "ProTable", link: "/components/proTable" },
						{ text: "TableSelect", link: "/components/tableSelect" },
					],
				},
			],
		},
	},
};
