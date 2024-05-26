import{_ as s,k as a,F as n,W as l}from"./chunks/framework.9fe6693b.js";const g=JSON.parse('{"title":"目录结构","description":"","frontmatter":{},"headers":[],"relativePath":"guide/catalogue.md","filePath":"guide/catalogue.md","lastUpdated":null}'),e={name:"guide/catalogue.md"},p=l(`<h1 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h1><h2 id="elegant-admin-目录说明-📚" tabindex="-1">Elegant-Admin 目录说明 📚 <a class="header-anchor" href="#elegant-admin-目录说明-📚" aria-label="Permalink to &quot;Elegant-Admin 目录说明 📚&quot;">​</a></h2><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">├── node_modules  # 模块依赖</span></span>
<span class="line"><span style="color:#babed8;">├── public  # 静态资源</span></span>
<span class="line"><span style="color:#babed8;">│   │   ├── html  # 静态 iframe 页面</span></span>
<span class="line"><span style="color:#babed8;">│   │   ├── favicon.ico  # favicon</span></span>
<span class="line"><span style="color:#babed8;">│   │   ├── ...</span></span>
<span class="line"><span style="color:#babed8;">├── src</span></span>
<span class="line"><span style="color:#babed8;">│   ├── api  # 接口请求统一管理</span></span>
<span class="line"><span style="color:#babed8;">│   │   ├── modules  # api模块化管理</span></span>
<span class="line"><span style="color:#babed8;">│   │   ├── index.ts  # 封装 axios 文件</span></span>
<span class="line"><span style="color:#babed8;">│   │   ├── ...</span></span>
<span class="line"><span style="color:#babed8;">│   ├── assets  # 字体、图片等静态资源</span></span>
<span class="line"><span style="color:#babed8;">│   │   ├── icons  # 本地图标管理</span></span>
<span class="line"><span style="color:#babed8;">│   │   ├── images  # 本地图片管理</span></span>
<span class="line"><span style="color:#babed8;">│   │   ├── styles  # 全局样式</span></span>
<span class="line"><span style="color:#babed8;">│   ├── components  # 自定义通用组件</span></span>
<span class="line"><span style="color:#babed8;">│   │   ├── Auth  # 按钮级别权限管理组件</span></span>
<span class="line"><span style="color:#babed8;">│   │   ├── AuthAll  # 按钮组级别权限管理组件</span></span>
<span class="line"><span style="color:#babed8;">│   │   ├── ...</span></span>
<span class="line"><span style="color:#babed8;">│   ├── directives  # 自定义指令</span></span>
<span class="line"><span style="color:#babed8;">│   │   ├── auth  # 按钮级别权限指令</span></span>
<span class="line"><span style="color:#babed8;">│   │   ├── ...</span></span>
<span class="line"><span style="color:#babed8;">│   ├── enums  # 枚举</span></span>
<span class="line"><span style="color:#babed8;">│   ├── hooks  # 组合式的函数hooks(状态从函数里面产生)</span></span>
<span class="line"><span style="color:#babed8;">│   ├── iconify  # 图标集</span></span>
<span class="line"><span style="color:#babed8;">│   ├── layouts  # 主要页面布局</span></span>
<span class="line"><span style="color:#babed8;">│   ├── mock  # mock接口</span></span>
<span class="line"><span style="color:#babed8;">│   ├── router  # 路由配置</span></span>
<span class="line"><span style="color:#babed8;">│   ├── store  # pinia 状态管理</span></span>
<span class="line"><span style="color:#babed8;">│   ├── types  # 全局 TS 类型配置</span></span>
<span class="line"><span style="color:#babed8;">│   │   ├── global.d.ts  # 全局类型声明文件</span></span>
<span class="line"><span style="color:#babed8;">│   │   ├── ...</span></span>
<span class="line"><span style="color:#babed8;">│   ├── ui-provider  # UI库配置</span></span>
<span class="line"><span style="color:#babed8;">│   ├── utils  # 全局工具方法</span></span>
<span class="line"><span style="color:#babed8;">│   ├── views  # 存放编写业务代码页面</span></span>
<span class="line"><span style="color:#babed8;">│   ├── App.vue  # 入口页面</span></span>
<span class="line"><span style="color:#babed8;">│   ├── index.css  # Tailwind CSS初始化</span></span>
<span class="line"><span style="color:#babed8;">│   ├── settings.default.ts  # 系统默认配置</span></span>
<span class="line"><span style="color:#babed8;">│   ├── settings.default.ts  # 系统定制配置</span></span>
<span class="line"><span style="color:#babed8;">│   └── settings.default.ts  # mock 服务相关</span></span>
<span class="line"><span style="color:#babed8;">├── .commitlintrc.js  # 代码提交配置</span></span>
<span class="line"><span style="color:#babed8;">├── .editorconfig  # 编辑器读取文件格式及样式定义配置 https://editorconfig.org/</span></span>
<span class="line"><span style="color:#babed8;">├── .env.development  # 开发环境变量配置</span></span>
<span class="line"><span style="color:#babed8;">├── .env.pre  # 预发布环境变量配置</span></span>
<span class="line"><span style="color:#babed8;">├── .env.production  # 生产环境变量配置</span></span>
<span class="line"><span style="color:#babed8;">├── .env.test  # 测试环境变量配置</span></span>
<span class="line"><span style="color:#babed8;">├── .gitignore  # git 提交忽略文件</span></span>
<span class="line"><span style="color:#babed8;">├── .lintstagedrc</span></span>
<span class="line"><span style="color:#babed8;">├── .npmrc  # npm 配置文件</span></span>
<span class="line"><span style="color:#babed8;">├── eslint.config.js  # eslint 语法检查配置</span></span>
<span class="line"><span style="color:#babed8;">├── stylelint.config.js  # stylelint 配置</span></span>
<span class="line"><span style="color:#babed8;">├── favicon.ico  # git 提交前检查配置</span></span>
<span class="line"><span style="color:#babed8;">├── index.html  # html 主入口</span></span>
<span class="line"><span style="color:#babed8;">├── LICENSE  # 证书</span></span>
<span class="line"><span style="color:#babed8;">├── README.md  # README</span></span>
<span class="line"><span style="color:#babed8;">├── package.json  # 依赖包管理以及命令配置</span></span>
<span class="line"><span style="color:#babed8;">├── pnpm-lock.yaml  # 依赖包版本锁定文件</span></span>
<span class="line"><span style="color:#babed8;">├── postcss.config.js  # postcss 插件配置</span></span>
<span class="line"><span style="color:#babed8;">├── scss.template.hbs</span></span>
<span class="line"><span style="color:#babed8;">├── uno.config.js  # unocss 配置</span></span>
<span class="line"><span style="color:#babed8;">├── tsconfig.json  # typescript 配置</span></span>
<span class="line"><span style="color:#babed8;">├── tsconfig.node.json  # typescript 拓展配置</span></span>
<span class="line"><span style="color:#babed8;">└── vite.config.ts  # vite 配置</span></span></code></pre></div>`,3),o=[p];function c(t,i,b,d,r,y){return a(),n("div",null,o)}const m=s(e,[["render",c]]);export{g as __pageData,m as default};
