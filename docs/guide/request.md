# 网络请求

- 项目封装了`Axios`来做网络请求，包括请求 Loading、错误处理、取消请求等功能
- 可以按照自己项目需求来进行封装

## 目录结构

```txt
├─ api                       # 网络请求文件夹
├ ├─config                   # 网络请求相关配置 e.p：公共URL前缀
├ ├─helper                   # 辅助函数：错误处理、取消请求
├ ├ ├─axiosCancel.ts         # 取消请求函数
├ ├ ├─checkStatus.ts         # 检查请求返回的状态
├ ├─interface                # api接口的请求参数和返回数据的类型定义文件夹
├ ├─modules                  # 请求函数模块，强烈建议根据不同的模块创建不同的请求文件
├ └─index.ts                 # 封装后的axios
└─
```
