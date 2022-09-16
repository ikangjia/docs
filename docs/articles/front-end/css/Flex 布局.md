---
title: Flex 布局

outline: deep
---
# Flex 布局

> Flex 三部曲：基础、语法、实例

## 基础

### 背景

Flexbox 布局（Flex 布局，弹性盒子布局）旨在提供一个更有效地布局、对齐方式，并且能够使容器中的子元素大小未知或动态变化情况下仍然能够分配好子元素之间的空间。

Flex 布局的主要思想是使父容器能够调节子元素的宽度/高度、和排列顺序，从而能够最好地填充可用空间（主要是为了适应所有类型的显示设备和屏幕尺寸）。Flexbox 容器能够扩大子元素使之尽可能填充可用空间，也可以收缩子元素使之不溢出。

### 优缺点

在常规布局中，基于垂直的块（block）和基于水平的内联（inline）。这都与方向有关的，对于大型或复杂的应用程序布局来说缺乏灵活性（特别是在改变方向，调整大小，拉伸，收缩等方面）。但是 Flexbox 布局与方向无关，可以很轻易的做到。

> 注: Flexbox 布局最适合应用程序的组件和小规模布局，而 Gird 布局则适用于较大规模的布局。

flex 布局的子元素不会脱离文档流，很好地遵从了“流的特性”。如果用 float 来做布局，float 属性的元素会脱离文档流，而且会涉及到各种 BFC、清除浮动的问题。但有了 flex 布局之后，这些问题都不存在的。

Flex 唯一的缺点就在于，它不支持低版本的 IE 浏览器。Flex 布局不支持 IE9 及以下的版本；IE10及以上也只是部分支持。如果你的页面不需要处理 IE浏览器的兼容性问题，则可以放心大胆地使用 flex 布局

### 术语

flexbox 布局是一个完整的布局模块而不是一个单独的属性，它涉及很多东西，包括它的整个属性集。 其中有的属性是在容器（container，也可以叫做父元素，称为 flex container）上设置的，有的则是在容器的子元素（item，也可以叫做子元素，称为flex items）设置。

> 注：后文统一翻译成 “flex 容器” 和 “flex 项”。

如果 “常规”布局基于 block(块) 和 inline(内联) 流动方向，flex 布局则是基于 “flex-flow(弹性流动)” 方向。请在规范中看一下这个图片，解释flex布局背后的主要思想。

![img](/public/images/front/css/00-basic-terminology.png)

在flex布局中，flex 项（就是子元素）要么按照 `main axis`(主轴)（从 `main-start` 到 `main-end` ）排布，要么按照`cross axis`(交叉轴) (从 `cross-start` 到`cross-end`)排布。

- **main axis**: flex 容器的主轴，flex 项沿着主轴排布，注意主轴不一定是水平的，主轴是水平还是垂直取决于 `flex-direction` 属性（见下文）。
- **main-start|main-end**: 分别表示主轴的开始位置和结束位置，flex 项在容器中会从 main-start 到 main-end 排布。
- **main size**: flex 项占据主轴的宽度或高度。flex 项的 main size 属性是要么是“宽度”，要么是“高度”，这取决于主轴方向。
- **cross axis**: 垂直于主轴的轴线称为交叉轴，其方向取决于主轴方向。
- **cross-start|cross-end**: 分别表示交叉轴的开始位置和结束位置。flex 项在交叉轴上的排布从 cross-start 开始位置到 cross-end 结束位置。
- **cross size**: flex 项占据交叉轴的宽度或高度。flex 项的 cross size 属性是要么是“宽度”，要么是“高度”，这取决于交叉轴方向。

> 注：主轴和侧轴并不是固定不变的，可以通过 `flex-direction` 更换方向，后文会讲到。

## 语法

Flex 的语法说简单也很简单，因为它只有两套属性集：父容器的属性、子元素的属性。

父容器属性有七个：`display`、`flex-direction`、`flex-wrap`、`flex-flow`、`justify-content`、`align-items`、`align-content`

子元素属性有六个：`order`、`flex-grow`、`flex-shrink`、`flex-basis`、`flex`、`align-self`

### 容器属性：display

用来定义一个 flex 容器。如果设置为 `flex` 则容器呈现为块状元素，设置为`inline-flex` 则容器呈现为行内元素。

```css
.container {
    display: flex;
}
```

### 容器属性：flex-direction

`flex-direction` 确立主轴，设置盒子中子元素的排列方向。 Flexbox 是单向布局（也称作一维布局）。

```css
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

它可能有4个值。

- `row` (默认值) :从左到右水平排列子元素
- `row-reverse`: 从上到下垂直排列子元素
- `column`: 从右向左排列子元素
- `column-reverse`: 从下到上垂直排列子元素

### 容器属性：flex-wrap

默认情况下，flex 项会尽可能地尝试排在同一行上（行或列），通过设置 `flex-wrap` 来决定 flex 项是否允需要换行。

```css
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

- `nowrap` (默认值) : 所有的 flex 项都会在同一行上排布，不换行。
- `wrap`: 换行，第一行在上方。
- `wrap-reverse`: 换行，第一行在下方。

### 容器属性：flex-flow

（适用于父级 flex 容器）

这是 `flex-direction` 和 `flex-wrap` 属性的缩写形式。同时定义 flex 容器的主轴和交叉轴。默认是 `row nowrap`。

```css
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```

### 容器属性：justify-content

<img src="/public/images/front/css/image-20220916154240896.png" alt="image-20220916154240896" style="zoom:80%;" />

`justify-content` 属性定义了flex 项沿主轴方向的对齐方式。

> 当一行中的所有 flex 项都是固定大小，或者是灵活大小但已经达到最大 main size 时，它可以帮助分配主轴上的剩余空间。当 flex 项溢出主轴的时候，它还可以用来控制flex 项的对齐方式。

```css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

- `flex-start`（默认值）：左对齐
- `flex-end`：右对齐
- `center`： 居中
- `space-between`：两端对齐，项目之间的间隔都相等。
- `space-around`：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

### 容器属性：align-items

<img src="/public/images/front/css/image-20220916154438765.png" alt="image-20220916154438765" style="zoom:80%;" />

`align-items`属性定义项目在交叉轴上如何对齐。

```css
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

- `flex-start`：交叉轴的起点对齐。
- `flex-end`：交叉轴的终点对齐。
- `center`：交叉轴的中点对齐。
- `baseline`: 项目的第一行文字的基线对齐。
- `stretch`（默认值）：如果项目未设置高度或设为 auto，将占满整个容器的高度。

### 容器属性：align-content

<img src="/public/images/front/css/image-20220916154544544.png" alt="image-20220916154544544" style="zoom:80%;" />

`align-content`属性定义了多根轴线的对齐方式。

> 注意：当只有一行 flex 项时，此属性不起作用。

```css
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

- `flex-start`：与交叉轴的起点对齐。
- `flex-end`：与交叉轴的终点对齐。
- `center`：与交叉轴的中点对齐。
- `space-between`：与交叉轴两端对齐，轴线之间的间隔平均分布。
- `space-around`：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
- `stretch`（默认值）：轴线占满整个交叉轴。

### 项属性：order

`order`属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

```css
.item {
  order: <integer>;
}
```

### 项属性：flex-grow

<img src="/public/images/front/css/image-20220916154729512.png" alt="image-20220916154729512" style="zoom:80%;" />

`flex-grow`属性定义项目的放大比例，默认为`0`，即如果存在剩余空间，也不放大。

如果所有 flex 项的 `flex-grow` 都设置为 `1` ，则父容器中的剩余空间将平均分配给所有子项。 如果其中一个子项的值为 `2` ，则该子项占用的剩余空间是其他子项的两倍（或者至少会尽力获得）。

```css
.item {
  flex-grow: <number>; /* default 0 */
}
```

注：负值对于 flex-grow 无效。

### 项属性：flex-shrink

`flex-shrink`属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

```css
.item {
  flex-shrink: <number>; /* default 1 */
}
```

如果所有项目的`flex-shrink`属性都为1，当空间不足时，都将等比例缩小。如果一个项目的`flex-shrink`属性为0，其他项目都为1，则空间不足时，前者不缩小。

负值对该属性无效。

### 项属性：flex-basics

`flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小。

```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```

它可以设为跟`width`或`height`属性一样的值（比如350px），则项目将占据固定空间。

### 项属性：flex

`flex`属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。

```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

该属性有两个快捷值：`auto` (`1 1 auto`) 和 none (`0 0 auto`)。

> **推荐使用缩写形式**而不是单独地设置每一个属性，缩写形式中会更加智能地计算出相关值。

### 项属性：align-self

`align-self`属性允许单个项目有与其他项目不一样的对齐方式，`align-self` 属性将覆盖容器的 align-items 属性所设置的默认对齐方式。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

该属性可能取6个值，除了 auto，其他都与 `align-items` 属性完全一致。

## 几个实例

### 完美居中

让一个 div 在父级 div 里水平垂直居中

<img src="/public/images/front/css/image-20220916163231849.png" alt="image-20220916163231849" style="zoom:80%;" />

```html
<style>
    .container {
        display: flex;
        height: 200px;
        width: 300px;
        justify-content: center;
        align-items: center;
        background-color: #aa7bd9;
    }
    #box{
        width: 100px;
        height: 100px;
        background-color: #ce6262;
    }
</style>

<body>
<div class="container">
    <div id="box">

    </div>
</div>
</body>
```

### 固定宽度布局

某个或某些网格为固定宽度，其余网格自动撑满剩余的空间。如下图：

![image-20220916162223101](/public/images/front/css/image-20220916162223101.png)

> 注意：自适应 div 撑满的主要原因是：`flex: 1;`

```html
<style>
    .content {
        display: flex;
        width: 100%;
    }
    .content div{
        text-align: center;
        line-height: 50px;
        height: 50px;
    }
    #d1 {
        background-color: #aa7bd9;
        width: 200px;
    }

    #d2 {
        background-color: #ce6262;
        flex: 1;
    }

    #d3 {
        background-color: #aa7bd9;
        width: 25%;
    }

    #d4 {
        background-color: #ce6262;
        flex: 1;
    }

    #d5 {
        background-color: #f1b94f;
        width: 33%;
    }
</style>

<body>
    <h3>（1）两端固定百分比，中间自动撑满：</h3>
    <div class="content">
        <div id="d1"> 200px </div>
        <div id="d2">auto</div>
    </div>
    <h3>（2）两栏，左侧固定 200px，右侧自适应撑满：</h3>
    <div class="content">
        <div id="d3"> 1/4 </div>
        <div id="d4">auto</div>
        <div id="d5"> 1/3 </div>
    </div>
    </body>
```

### 悬挂布局

```html
<style>
    .Media {
      display: flex;
      align-items: flex-start;
    }

    .Media-figure {
      margin-right: 1em;
    }

    .Media-body {
      flex: 1;
    }
</style>
<div class="Media">
  <img class="Media-figure" src="" alt="">
  <p class="Media-body">...</p>
</div>
```

### 固定的底栏

```html
<style>
    .Site {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }

    .Site-content {
        flex: 1;
    }
</style>

<body class="Site">
  <header>...</header>
  <main class="Site-content">...</main>
  <footer>...</footer>
</body>
```

## 一些扩展

### 浏览器前缀

Flexbox 布局需要一些浏览器前缀来最大力度地兼容大多数的浏览器。Flex布局的前缀不只是在属性前面添加浏览器前缀，不同浏览器下的属性名和属性值都不同，这是因为Flexbox布局的标准一直在变。

另外，这里有一个Sass中 @mixin 来处理一些前缀，也可以给你一些处理前缀的启发：

```css
@mixin flexbox() {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
 
@mixin flex($values) {
  -webkit-box-flex: $values;
  -moz-box-flex:  $values;
  -webkit-flex:  $values;
  -ms-flex:  $values;
  flex:  $values;
}
 
@mixin order($val) {
  -webkit-box-ordinal-group: $val;  
  -moz-box-ordinal-group: $val;     
  -ms-flex-order: $val;     
  -webkit-order: $val;  
  order: $val;
}
 
.wrapper {
  @include flexbox();
}
 
.item {
  @include flex(1 200px);
  @include order(2);
}
```

## 参考文档

- [A Complete Guide to Flexbox | CSS-Tricks - CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Flexbox (w3school.com.cn)](https://www.w3school.com.cn/css/css3_flexbox.asp)
- [Flex 布局教程：语法篇 - 阮一峰的网络日志 (ruanyifeng.com)](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)