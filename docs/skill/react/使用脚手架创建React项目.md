---
id: create-react-app
slug: /create-react-app
title: 使用脚手架创建React项目
date: 2021-09-15
authors: littletaoist
tags: [react]
keywords: [react]
---

<!-- truncate -->

## create-react-app

全局安装

```
npm install -g create-react-app

create-react-app my-app
cd my-app
npm start
```

或

```sh
npx create-react-app my-app
cd my-app
npm start
```

## umijs

先找个地方建个空目录。

```bash
mkdir myapp && cd myapp
```

通过官方工具创建项目

```bash
yarn create @umijs/umi-app
# 或 npx @umijs/create-umi-app

yarn
yarn start
```

### 创建 Ant-Design-Pro 项目

[开始使用 - Ant Design Pro](https://pro.ant.design/zh-CN/docs/getting-started)

```bash
# 使用 npm
npx create-umi myapp
# 使用 yarn
yarn create umi myapp
```

按照 umi 脚手架的引导，选择 ant-design-pro，TypeScript，（建议完整版）

```shell
? Select the boilerplate type (Use arrow keys)
❯ ant-design-pro  - Create project with a layout-only ant-design-pro boilerplate, use together with umi block.
  app             - Create project with a easy boilerplate, support typescript.
  block           - Create a umi block.
  library         - Create a library with umi.
  plugin          - Create a umi plugin.
```

然后进入目录，下载依赖，通过`npm run start`（一定要是这个命令），然后静等即可

```shell
cd myapp && npm install
```





## Vite

```
npm create vite@latest my-vue-app
```

选择 react 即可

![](http://aritus-bed.oss-cn-hangzhou.aliyuncs.com/images202305301306155.png?OSSAccessKeyId=LTAI5tQe8C1BtYHeLNyVJfQF&Expires=9000000000&Signature=tMm8eUIvZKU9inquand3pNT5P5M=)
