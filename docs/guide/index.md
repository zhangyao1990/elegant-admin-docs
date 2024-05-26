# 快速上手

本文会帮助你从头启动、搭建此项目

## 环境准备

使用本模板前，需要在本地依次安装好
- **git**: 你需要git来克隆和管理项目版本。[安装](https://git-scm.com)
- **NodeJS**: >=18.0.0，推荐 18.19.0 或更高。[安装](https://nodejs.org/zh-cn)
- **pnpm**: >= 8.0.0，推荐最新版本。
- **Visual Studio Code**: [安装](https://code.visualstudio.com/)

::: warning 注意⚠️
Node.js 需要使用  >=18.0.0，推荐 18.19.0 或更高。版本过低依赖包可能安装失败。

默认使用 pnpm 作为安装依赖包工具，使用 yarn、npm 没有 lock 可能会安装到最新版依赖。
:::


## 工具配置

本项目推荐使用 VSCode 进行开发，项目里面已内置 VSCode 配置，包含推荐的插件和设置。

> 🌈 推荐安装以下插件：

本项目推荐使用 VSCode 进行开发，项目里面已内置 VSCode 配置，包含推荐的插件和设置。

以下为推荐的插件：

- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag) - 自动添加 HTML/XML 结束标签
- [Auto Complete Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-complete-tag) - 为 HTML/XML 添加关闭标签和自动重命名成对的标签
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) - 自动重命名成对的 HTML/XML 标签
- [Color Highlight](https://github.com/naumovs/vscode-ext-color-highlight) - 颜色高亮插件
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - 高亮.env 文件
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - 统一不同编辑器的一些配置
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 代码检查
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph) - Git 图形化操作工具
- [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - 显示具体某行代码的 git 信息
- [javascript console utils](https://marketplace.visualstudio.com/items?itemName=whtouche.vscode-js-console-utils) - 提供快捷键 ctrl+l 直接输入 console.log()
- [One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme) - 主题
- [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss) - unocss 写法提示插件
- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 服务插件
- [Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets) - Vue2、Vue3 写法提示插件
### .vscode > extensions.json

```json
{
  "recommendations": [
    "EditorConfig.EditorConfig",
    "mikestead.dotenv",
    "dbaeumer.vscode-eslint",
    "stylelint.vscode-stylelint",
    "Vue.volar",
    "antfu.unocss"
  ]
}
```

:::warning

- 开发 Vue3 项目请开启 Volar 插件、禁用 Vetur 插件。
- 请配置项目默认格式化程序为 Eslint

:::

## 代码拉取

### 从 Gitee 拉取代码：

```bash
# 克隆代码
git clone https://gitee.com/git.zhangyao_ping.net/elegant-admin.git
```

### 从 GitHub 拉取代码：

```bash
# 克隆代码
git clone https://github.com/zhangyao1990/elegant-admin.git
```

## 安装使用步骤

### 安装依赖：

```bash
# 使用 pnpm
pnpm install
```

### 运行项目：

```bash
# 以下两个命令都可以
pnpm run dev
```

### 打包项目：

```bash

# 测试环境
pnpm run build:test

# 预发环境
pnpm run build:pre

# 生产环境
pnpm run build:pro
```

### 校验、格式化代码：

```bash
# eslint 检测代码
pnpm lint:eslint

# stylelint 格式化样式
pnpm lint:stylelint
```

### 提交代码：

```bash
# 提交代码（提交前会自动执行 lint:lint-staged 命令）
pnpm commit
```

## npm script 详解

```json
{
	"scripts": {
		// 本地运行(dev环境)
		"dev": "vite",
		// 构建打包(test环境)
  		"build:test": "vue-tsc && vite build --mode test",
		// 构建打包(pre环境)
		"build:pre": "vue-tsc && vite build --mode pre",
		// 构建打包(pro环境)
		"build:prod": "vue-tsc && vite build --mode production",
		// 本地环境预览构建后的 dist
    	"serve:test": "http-server ./dist -o ",
		// 预览依赖分析插件
 		"report": "http-server ./dist -o stats.html",
		// 执行 eslint 校验
		"lint:eslint": "eslint . --cache --fix",
		// 执行 stylelint 格式化
		"lint:stylelint": "stylelint \"src/**/*.{css,scss,vue}\" --cache --fix",
		// 执行 lint-staged.config.js 文件下的命令
		"lint:lint-staged": "lint-staged",
		// 提交代码(可自定义配置执行命令)
		"commit": "git pull && git add -A && git cz && git push"
	}
}
```
