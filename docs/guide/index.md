---
title: 关于网站
outline: deep
editLink: true
---
# {{ $frontmatter.title }}
在此首先表示欢迎访问我的网站:smile:。

## 关于本网站
基于 vitepress 搭建，托管于 GitHub Pages。

## 关于本网站的内容
### 内容
本站内容基本囊括了以 Java 为后端、Vue 为前端框架的初级"全干"工程师的内容。
### 内容来源
基本由四部分组成：个人总结、技术书籍、官方网站、技术博客。 大致描述如下：

参考书籍 📚：
- Java 部分：《Effective Java》第三版、《Java 核心技术卷》卷一卷二
- 前端部分：《CSS 权威指南》上下册、《JavaScript 高级程序设计》第四版
- Docker 部分：《Docker 实战》
- Linux 部分：《Linux 私房菜》
- 其他部分：《设计模式之禅》、《数据结构与算法分析-Java 语言描述》…

参考网站：
- [Spring 官网](https://spring.io/)
- Vue 官网
- Mybatis 官网
- ……

## 使用总结
### 如何折叠文章页的 Sidebar 菜单

- 设置可折叠：`collapsible: true`
- 设置默认折叠：`collapsed: true`

### 文章右侧目录显示三级标题
文章页面的右侧目录默认只显示二级标题，要想同时显示三级标题，只需在 md 源码里的 FrontMatter 里添加 `outline: deep` 即可。

亲测最多显示到三级标题，四级、五级、六级等不能显示。
### 使用小表情 :100:
比如表情 :100: ，只需要在 md 源码里使用 `:100:`即可。

常用表情：
- :100:：`:100:`
- :smile:：`:smile:`
……
- 
更多表情参考：[markdown-it-emoji](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)
