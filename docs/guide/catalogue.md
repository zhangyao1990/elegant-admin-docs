# 目录结构

## Elegant-Admin 目录说明 📚

```txt
├── .vscode  # IDE 工具推荐配置文件
├── node_modules  # 模块依赖
├── public  # 静态资源
│   │   ├── html  # 静态 iframe 页面
│   │   ├── favicon.ico  # favicon
│   │   ├── ...
├── src
│   ├── api  # 接口请求统一管理
│   │   ├── modules  # api模块化管理
│   │   ├── index.ts  # 封装 axios 文件
│   │   ├── ...
│   ├── assets  # 字体、图片等静态资源
│   │   ├── icons  # 本地图标管理
│   │   ├── images  # 本地图片管理
│   │   ├── styles  # 全局样式
│   ├── components  # 自定义通用组件
│   │   ├── Auth  # 按钮级别权限管理组件
│   │   ├── AuthAll  # 按钮组级别权限管理组件
│   │   ├── ...
│   ├── directives  # 自定义指令
│   │   ├── auth  # 按钮级别权限指令
│   │   ├── ...
│   ├── enums  # 枚举
│   ├── hooks  # 组合式的函数hooks(状态从函数里面产生)
│   ├── iconify  # 图标集
│   ├── layouts  # 主要页面布局
│   ├── mock  # mock 模拟后台数据
│   ├── router  # 路由配置
│   ├── store  # pinia 状态管理
│   ├── types  # 全局 TS 类型配置
│   │   ├── global.d.ts  # 全局类型声明文件
│   │   ├── ...
│   ├── ui-provider  # UI库配置
│   ├── utils  # 全局工具方法
│   ├── views  # 存放编写业务代码页面
│   ├── App.vue  # 入口页面
│   ├── index.css  # Tailwind CSS初始化
│   ├── settings.default.ts  # 系统默认配置
│   ├── settings.default.ts  # 系统定制配置
│   └── settings.default.ts  # mock 服务相关
├── vite # vite 插件配置
├── .commitlintrc.js  # 代码提交配置
├── .editorconfig  # 编辑器读取文件格式及样式定义配置 https://editorconfig.org/
├── .env.development  # 开发环境变量配置
├── .env.pre  # 预发布环境变量配置
├── .env.production  # 生产环境变量配置
├── .env.test  # 测试环境变量配置
├── .gitignore  # git 提交忽略文件
├── .lintstagedrc
├── .npmrc  # npm 配置文件
├── eslint.config.js  # eslint 语法检查配置
├── stylelint.config.js  # stylelint 配置
├── favicon.ico  # git 提交前检查配置
├── index.html  # html 主入口
├── LICENSE  # 证书
├── README.md  # README
├── package.json  # 依赖包管理以及命令配置
├── pnpm-lock.yaml  # 依赖包版本锁定文件
├── postcss.config.js  # postcss 插件配置
├── scss.template.hbs
├── uno.config.js  # unocss 配置
├── tsconfig.json  # typescript 配置
├── tsconfig.node.json  # typescript 拓展配置
└── vite.config.ts  # vite 配置
```
