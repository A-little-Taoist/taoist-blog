---
slug: /node-version management 
title: node 版本管理
date: 2023-05-05
authors: littletaoist
tags: [node, fnm, volta, 随笔]
keywords: [node, fnm, volta]

---

### fnm

[Fast Node Manager](https://github.com/Schniz/fnm)

| 指令             | 解释         |
| ---------------- | ------------ |
| fnm     ls       | 查看所有node |
| fnm install [18] | 下载node     |
| fnm use [18]     | 切换node     |
| fnm default [18] | 设置默认node |

<!-- truncate -->

### volta

[官网](https://volta.sh/)



| 指令                             | 解释                                           |
| -------------------------------- | ---------------------------------------------- |
| volta list all                   | 查询Volta 管理的工具列表                       |
| volta list                       | #查询当前项目中使用的工具列表                  |
| volta install [node@18/yarn@3.3] | 下载与设置默认node和包管理工具(版本号不可省)   |
| volta pin                        | 指定项目的 Node 引擎和包管理器的版本(yarn/npm) |
| volta which [node]               | 查看volta/node安装目录                         |
