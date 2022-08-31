---

title: 基础

outline: deep
---
# CSS 基础

## CSS 的使用场景

 层叠样式表（Cascading Style Sheet，CSS），一个强大的工具，能用来影响一个或一组文档的表现。CSS 几乎触及 Web 的每个角落，甚至很多非 Web 环境也能见到它的身影。

- Web 领域、JavaScript 的使用中处处有 CSS 的身影
- RSS 客户端允许使用 CSS 定制订阅源和订阅源中的文章
- 某些即时通信客户端使用 CSS 装饰聊天窗口

扯这么多废话，其实就是表达两个意思：一是 CSS 广泛使用。二是 CSS 不仅仅用于 Web 中。

## HTML 的元素

在网页中，元素（Element）是文档结构的根基。HTML 中常用的元素有 `p`、`table`、`span`、`a` 和 `div` 等。文档中的每个元素都对文档的表现起一定作用。CSS 是依赖于元素的属性来体现的。

### 置换元素和非置换元素

对于 CSS 来说，元素有两种形式：置换元素和非置换元素。

置换元素：用来置换元素内容的部分不由文档内容直接表示。例如 `img`、`input`。`img` 元素本身没有内容，其内容由文档之外的图像文件替换。`input` 类似，根据类型不同，会替换成按钮、单选框、输入框等。

非置换元素：HTML 元素大部分均是非置换元素，即元素的内容由用户代理（通常是浏览器）在元素自身生成的框中显示。例如 `span`、`p`、`h1` 等。

### 元素的显示方式

CSS 还会把元素分成块级和行内两种基本类型。

> 其实不只这两种，还有其他显示类型，不过这两种是最常见的。

块级元素：默认生成一个填满父级元素内容区域的框，前后都断行。例如 `p`、`div`、列表。

行内元素：在一行文本内生成元素框，不打断所在行。例如 `a`、`span`、`strong`、`em` 等。

重要区别点：块级元素不能出现在行内元素中。

改变默认显示方式：

```css
p {display: inline;}
a {display: block}
```

## 把 CSS 应用于 HTML

### link 标签

在 HTML 中，`link` 元素的基本作用是把其他文档与当前文档关联起来。`link` 标签必须放在 `<head>` 元素中。

```html
<link rel="stylesheet" type="text/css" href="sheet.css" media="all">
```

- `rel`：relation 关系的简称，这里指的是 `stylesheet`
- `type`：始终为 `text/css`，即通过 link 标签加载的数据类型
- `href`：样式表的 URL，可以是绝对地址、相对地址
- `media`：它的值是一个或多个媒体描述符，指明媒体的类型和具有的功能

> 候选样式表：把 `rel` 属性设为 `alternate stylesheet`。仅当用户自己选择，文档才会使用候选样式表。与 `link` 标签的 `title` 属性配合使用。

### style 元素

格式如下：

```html
<style type="text/css">
  h1, p{color: red;}
</style>
```

::: warning

style 元素应该始终设置 type 属性。

:::

### @import 指令

与 link 标签一样，`@import` 指令也会使浏览器加载外部样式表。二者唯一的区别是：`@import` 指令在 `<style>` 元素内部，并且必须放在其他 CSS 规则之前，否则不起作用。

一个文档也可以有多个 `@import` 语句。

```html
<style type="text/css">
  @import url(styles.css) /* @import 必须放在开头*/
  h1{ color: red; }
</style>
```

值的注意的是：我们在一个 `.css` 文件中想引用一个别的 css 样式表，也可以使用 `@import`

```css
@import url(styles.css) /* @import 必须放在开头*/
@import url(styles2.css) /* @import 必须放在开头*/
html, body{
	margin: 0;
}
```

### HTTP 链接

极为罕见，暂略。

### 行内样式

行内样式的原理时使用 HTML 元素的 `style` 属性来为该元素添加样式。如果只想为单个元素设置少量样式时可以使用这种方式。

```html
<p style="color:red;font-size:16px">
  Hello World!
</p>
```

## 样式表中都有啥

### CSS 规则结构

一个 CSS 文件由多个 CSS 规则组成。

一个 CSS 规则由两部分组成：选择符和声明块。声明块里是由一组组的属性和值组成的。

```css
/* 选择符       声明块  */
html, body{ margin: 0; }
```

### 厂商前缀

| 前缀     | 厂商                                        |
| -------- | ------------------------------------------- |
| -moz-    | 基于 Mozilla 的浏览器（如 Firefox）         |
| -ms-     | 微软 Internet Explorer                      |
| -epub-   | 国际数字出版社论坛制定的 ePub 格式          |
| -o-      | 基于 Opera 的浏览器                         |
| -webkit- | 基于 WebKit 的浏览器（如 Safari 和 Chrome） |

厂商前缀出现的目的是浏览器厂商为了测试新特性，可惜被网页制作者们滥用引起了一系列新问题。

如今，编写 CSS 时完全可以不使用厂商前缀。

### CSS 中的空白

CSS 对待空白的方式与 HTML 一致：解析时，连续的空白会合并成一个空白。

### CSS 中的注释

```css
/* 这是 CSS 中的一段注释 */
/*  这是 CSS 中的一段
  多行的注释  */
```

## 媒体查询

媒体查询是干啥的？创作人员通过媒体查询定义浏览器在何种媒体环境中使用指定的样式表。

过去，实现这一机制通过 `link` 元素或 `style` 元素的 `media` 属性设定媒体类型，或者为 `@import` 或 `@madia` 指令提供媒体描述符。

而今，媒体查询更进一步，允许创作人员通过媒体描述符根据指定媒体类型的特性选择样式表。

### 用法

- `link` 元素的 `media` 属性
- `style` 元素的 `media` 属性
- `@import` 声明的媒体描述符部分
- `@media` 声明的媒体描述符部分

媒体查询可以是简单的媒体类型，也可以是复杂的媒体类型和特性的组合。

### 媒体类型

- all：适用于所有展示媒体
- print：打印文档时使用，也在预览打印效果时使用
- screen：在屏幕上（电脑显示器）展示文档时使用
- projection：部分浏览器支持支持，能以幻灯片的形式展示文档
- handheld：部分移动设备的浏览器支持

多个媒体类型使用逗号分隔。

下面四种方式都能把一个样式表同时应用到屏幕媒体和印刷媒体上：

```html
<link type="text/css" href="abc.css" media="screen, print">

<style type="text/css" media="screen, print">……</style>]

@import url(abc.css) screen, print;
@media screen, print{……}
```

### 媒体描述符

一个媒体描述符包含一个媒体类型和一个或多个媒体特性列表，其中特性描述符要放在大括号中。如果没指定媒体类型，那么就应用到所有媒体上（all）。

多个媒体描述符使用 and、not、only 连接。

## 特性查询

特性查询，即根据用户代理（浏览器）是否支持特定的 CSS 属性及其值来应用一段样式。

特性查询在结构上与媒体查询类似。

举个栗子🌰：

```css
@supports (color: black) {
  body {color: black}
  h1 {color: purple}
  h2 {color: navy}
}
```

上述代码的意思其实是：如果你能识别并处理 `color: black` 这样的属性和值组合，那就应用这段样式；否则，跳过这段样式。如果用户代理（浏览器）不支持 `@supports`，整段样式都会跳过。
