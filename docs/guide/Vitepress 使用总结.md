# 使用总结

## 如何折叠文章页的 Sidebar 菜单

- 设置可折叠：`collapsible: true`
- 设置默认折叠：`collapsed: true`

## 文章右侧目录显示三级标题

文章页面的右侧目录默认只显示二级标题，要想同时显示三级标题，只需在 md 源码里的 FrontMatter 里添加 `outline: deep` 即可。

亲测最多显示到三级标题，四级、五级、六级等不能显示。

## 使用小表情 :100:

比如表情 :100: ，只需要在 md 源码里使用 `:100:`即可。

常用表情：

- :100:：`:100:`
- :smile:：`:smile:`
  ……
- 更多表情参考：[markdown-it-emoji](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

