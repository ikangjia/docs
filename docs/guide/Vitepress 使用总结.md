---
outline: deep
---

# 使用总结

## 文章页的目录

### 如何折叠文章页的 Sidebar 菜单

- 设置可折叠：`collapsible: true`
- 设置默认折叠：`collapsed: true`

### 文章右侧目录显示三级标题

文章页面的右侧目录默认只显示二级标题，要想同时显示三级标题，只需在 md 源码里的 FrontMatter 里添加 `outline: deep` 即可。

亲测最多显示到三级标题，四级、五级、六级等不能显示。

## 使用小表情 :100:

比如表情 :100: ，只需要在 md 源码里使用 `:100:`即可。

常用表情：

- :100:：`:100:`
- :smile:：`:smile:`
  ……
- 更多表情参考：[markdown-it-emoji](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

## 添加图片
网络图片直接引用即可。关于本地图片一律放在 `docs/public/images` 目录，在 md 文章里引用方式以下两种方式均可：
  - 使用 md 语法引用：`![img](/public/images/xxx.png)`
  - 使用 HTML 语法引入：`<img src="/public/images/xxx.png"/>`

## 自定义容器

### 四种自定义容器

语法如下，其中的 info 可以为 tip、warning、danger、details

```markdown
::: info
This is an info box.
:::
```

::: info 

This is an info box. 

::: 

::: tip 

This is a tip.

 ::: 

::: warning 

This is a warning. 

::: 

::: danger 

This is a dangerous warning. 

::: 

::: details 

This is a details block.

 :::

### 自定义容器的 title

对于上述四种容器，可以直接在 type 类型后面添加文字，来替换到原有的 type。

例如：

````markdown
::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::
````

::: danger STOP 

Danger zone, do not proceed 

::: 

::: details Click me to view the code

```js
console.log('Hello, VitePress!')
```

:::

## Markdown 指北

### 代码风格

Vitepress 默认使用 [Shiki](https://shiki.matsu.io/) 来高亮代码块，支持的代码语言列表可参考：[Shiki/languages.md](https://github.com/shikijs/shiki/blob/main/docs/languages.md)

此外，也可以在 `docs/.vitepress/config.js` 主配置文件里使用 `markdown `属性修改。

### 显示行号

在 `docs/.vitepress/config.js` 主配置文件里添加：

```js
export default {
  markdown: {
    lineNumbers: true
  }
}
```

### md 文件跳转（很有用）

现有以下文件：

- `docs/guide/a.md --> a.html`
- `docs/guide/friends.md --> friends.html`

假如需要在 a 页面跳转到 friends 页面，只需要使用源文件里使用 md 语法在 `a.md` 里引用 `friends.md` 即可。例如：

```markdown
[点击跳转友情链接页面](./friends.md)
```

最后的效果为：[点击跳转友情链接页面](./friends.md)

> 注意：使用相对路径！

### md 文件包含

加入你有一个文件：`./parts/basics.md`，里面内容为：

```markdown
## 看我！！！
我是从 ./part/basics.md 里来的～～～
```

输入：

```markdown
## Basics

<!--@include: ./parts/basics.md-->
```

输出：

```markdown 
## Basics

## 看我！！！
我是从 ./part/basics.md 里来的～～～
```

文件将被包含进去！

在某些情况下，这是非常有用的，例如在每篇文章最后无耻的添加上自己的支付宝收款码 QAQ。

:::  danger 注意：

如果你要插入的文件不存在，会报错！！！所以请保证其存在。

:::

### 指定代码行高亮

在语言的后面添加大括号，大括号里可指定某行或某些行高亮。

- 单行高亮： `{5-8}`, `{3-10}`, `{10-17}`
- 连续多行高亮： `{4,7,9}`
- 同时使用： `{4,7-13,16,23-27,40}`

源码：

````js
```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```
````

输出为：

```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```