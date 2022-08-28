import{_ as n,o as l,c as e,b as s,d as p,t as c,a as o}from"./app.1265aa13.js";const g=JSON.parse('{"title":"\u955C\u50CF","description":"","frontmatter":{"title":"\u955C\u50CF","outline":"deep"},"headers":[{"level":2,"title":"\u955C\u50CF","slug":"\u955C\u50CF"},{"level":3,"title":"\u67E5\u770B\u955C\u50CF","slug":"\u67E5\u770B\u955C\u50CF"},{"level":3,"title":"\u641C\u7D22\u955C\u50CF","slug":"\u641C\u7D22\u955C\u50CF"},{"level":3,"title":"\u62C9\u53D6\u955C\u50CF","slug":"\u62C9\u53D6\u955C\u50CF"},{"level":3,"title":"\u5220\u9664\u955C\u50CF","slug":"\u5220\u9664\u955C\u50CF"},{"level":2,"title":"\u5BB9\u5668","slug":"\u5BB9\u5668"},{"level":3,"title":"\u67E5\u770B\u5BB9\u5668","slug":"\u67E5\u770B\u5BB9\u5668"},{"level":3,"title":"\u521B\u5EFA\u4E0E\u542F\u52A8\u5BB9\u5668","slug":"\u521B\u5EFA\u4E0E\u542F\u52A8\u5BB9\u5668"},{"level":3,"title":"\u521B\u5EFA\u5E76\u8FDB\u5165\u5BB9\u5668","slug":"\u521B\u5EFA\u5E76\u8FDB\u5165\u5BB9\u5668"},{"level":3,"title":"\u542F\u505C\u5BB9\u5668","slug":"\u542F\u505C\u5BB9\u5668"},{"level":3,"title":"\u67E5\u770B\u5BB9\u5668 IP","slug":"\u67E5\u770B\u5BB9\u5668-ip"},{"level":3,"title":"\u5220\u9664\u5BB9\u5668","slug":"\u5220\u9664\u5BB9\u5668"}],"relativePath":"articles/docker/\u955C\u50CF\u4E0E\u5BB9\u5668\u57FA\u7840.md","lastUpdated":1661667178000}'),t={name:"articles/docker/\u955C\u50CF\u4E0E\u5BB9\u5668\u57FA\u7840.md"},i={id:"frontmatter-title",tabindex:"-1"},r=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=o(`<h2 id="\u955C\u50CF" tabindex="-1">\u955C\u50CF <a class="header-anchor" href="#\u955C\u50CF" aria-hidden="true">#</a></h2><h3 id="\u67E5\u770B\u955C\u50CF" tabindex="-1">\u67E5\u770B\u955C\u50CF <a class="header-anchor" href="#\u67E5\u770B\u955C\u50CF" aria-hidden="true">#</a></h3><div class="language-sh"><button class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">docker images</span></span>
<span class="line"></span></code></pre></div><ul><li><code>REPOSITORY</code>\uFF1A\u955C\u50CF\u5728\u4ED3\u5E93\u4E2D\u7684\u540D\u79F0\uFF0C\u672C\u6587\u4E2D\u4EE5\u540E\u90FD\u7B80\u79F0\u955C\u50CF\u540D\u79F0</li><li><code>TAG</code>\uFF1A\u955C\u50CF\u6807\u7B7E</li><li><code>IMAGE ID</code>\uFF1A\u955C\u50CF ID</li><li><code>CREATED</code>\uFF1A\u955C\u50CF\u7684\u521B\u5EFA\u65E5\u671F\uFF08\u4E0D\u662F\u83B7\u53D6\u8BE5\u955C\u50CF\u7684\u65E5\u671F\uFF09</li><li><code>SIZE</code>\uFF1A\u955C\u50CF\u5927\u5C0F</li></ul><p>\u8FD9\u4E9B\u955C\u50CF\u90FD\u662F\u5B58\u50A8\u5728 Docker \u5BBF\u4E3B\u673A\u7684 <code>/var/lib/docker</code> \u76EE\u5F55\u4E0B\u3002</p><h3 id="\u641C\u7D22\u955C\u50CF" tabindex="-1">\u641C\u7D22\u955C\u50CF <a class="header-anchor" href="#\u641C\u7D22\u955C\u50CF" aria-hidden="true">#</a></h3><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">docker search \u955C\u50CF\u540D\u79F0</span></span>
<span class="line"></span></code></pre></div><ul><li><code>NAME</code>\uFF1A\u955C\u50CF\u540D\u79F0</li><li><code>DESCRIPTION</code>\uFF1A\u955C\u50CF\u63CF\u8FF0</li><li><code>STARS</code>\uFF1A\u7528\u6237\u8BC4\u4EF7\uFF0C\u53CD\u6620\u4E00\u4E2A\u955C\u50CF\u7684\u53D7\u6B22\u8FCE\u7A0B\u5EA6</li><li><code>OFFICIAL</code>\uFF1A\u662F\u5426\u4E3A\u5B98\u65B9\u6784\u5EFA</li><li><code>AUTOMATED</code>\uFF1A\u81EA\u52A8\u6784\u5EFA\uFF0C\u8868\u793A\u8BE5\u955C\u50CF\u7531 Docker Hub \u81EA\u52A8\u6784\u5EFA\u6D41\u7A0B\u521B\u5EFA\u7684\u3002</li></ul><h3 id="\u62C9\u53D6\u955C\u50CF" tabindex="-1">\u62C9\u53D6\u955C\u50CF <a class="header-anchor" href="#\u62C9\u53D6\u955C\u50CF" aria-hidden="true">#</a></h3><p>\u62C9\u53D6\u955C\u50CF\u5C31\u662F\u4ECE\u4E2D\u592E\u4ED3\u5E93\u4E0B\u8F7D\u955C\u50CF\u5230\u672C\u5730\u3002</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">docker pull \u955C\u50CF\u540D\u79F0</span></span>
<span class="line"></span></code></pre></div><p>\u5047\u5982\u6211\u8981\u62C9\u53D6 centos \u955C\u50CF\u5230\u672C\u5730\uFF0C\u5982\u679C\u4E0D\u58F0\u660E tag \u955C\u50CF\u6807\u7B7E\u4FE1\u606F\u5219\u9ED8\u8BA4\u62C9\u53D6 latest \u7248\u672C\u3002\u4F8B\u5982</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># \u8FD9\u5C06\u62C9\u53D6 latest \u7248\u672C\u7684 centos</span></span>
<span class="line"><span style="color:#A6ACCD;">docker pull centos</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u8FD9\u5C06\u4E0B\u8F7D\u6307\u5B9A\u7684 centos7 \u7248\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">docker pull centos:7</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5220\u9664\u955C\u50CF" tabindex="-1">\u5220\u9664\u955C\u50CF <a class="header-anchor" href="#\u5220\u9664\u955C\u50CF" aria-hidden="true">#</a></h3><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># \u5220\u9664\u5355\u4E2A\u955C\u50CF</span></span>
<span class="line"><span style="color:#A6ACCD;">docker rmi \u955C\u50CFID</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u4E5F\u53EF\u4EE5\u5220\u9664\u591A\u4E2A\u955C\u50CF</span></span>
<span class="line"><span style="color:#A6ACCD;">docker rmi \u955C\u50CFID \u955C\u50CFID \u955C\u50CFID</span></span>
<span class="line"></span></code></pre></div><p><code>docker images -q</code> \u53EF\u4EE5\u67E5\u8BE2\u5230\u6240\u6709\u955C\u50CF\u7684 ID\uFF0C\u901A\u8FC7\u7EC4\u5408\u547D\u4EE4\u53EF\u4EE5\u5B9E\u73B0\u5220\u9664\u6240\u6709\u955C\u50CF\u7684\u64CD\u4F5C\u3002</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">docker rmi </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">docker images -q</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u6CE8\u610F\uFF1A\u5982\u679C\u901A\u8FC7\u67D0\u4E2A\u955C\u50CF\u521B\u5EFA\u4E86\u5BB9\u5668\uFF0C\u5219\u8BE5\u955C\u50CF\u65E0\u6CD5\u5220\u9664\u3002</p><p>\u89E3\u51B3\u529E\u6CD5\uFF1A\u5148\u5220\u9664\u955C\u50CF\u4E2D\u7684\u5BB9\u5668\uFF0C\u518D\u5220\u9664\u8BE5\u955C\u50CF\u3002</p></blockquote><h2 id="\u5BB9\u5668" tabindex="-1">\u5BB9\u5668 <a class="header-anchor" href="#\u5BB9\u5668" aria-hidden="true">#</a></h2><h3 id="\u67E5\u770B\u5BB9\u5668" tabindex="-1">\u67E5\u770B\u5BB9\u5668 <a class="header-anchor" href="#\u67E5\u770B\u5BB9\u5668" aria-hidden="true">#</a></h3><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># \u67E5\u770B\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">docker ps</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u67E5\u770B\u505C\u6B62\u7684\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">docker ps -f status=exited</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u67E5\u770B\u6240\u6709\u5BB9\u5668\uFF08\u5305\u62EC\u8FD0\u884C\u548C\u505C\u6B62\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">docker ps -a\u98CE\u683C</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u67E5\u770B\u6700\u540E\u4E00\u6B21\u8FD0\u884C\u7684\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">docker ps -l</span></span>
<span class="line"></span></code></pre></div><ul><li><code>CONTAINER ID</code>\uFF1A\u5BB9\u5668 ID</li><li><code>IMAGE</code>\uFF1A\u6240\u5C5E\u955C\u50CF</li><li><code>COMMAND</code>\uFF1A</li><li><code>CREATED</code>\uFF1A\u521B\u5EFA\u65F6\u95F4</li><li><code>STATUS</code>\uFF1A\u5BB9\u5668\u72B6\u6001</li><li><code>PORTS</code>\uFF1A\u7AEF\u53E3</li><li><code>NAMES</code>\uFF1A\u5BB9\u5668\u540D\u79F0</li></ul><h3 id="\u521B\u5EFA\u4E0E\u542F\u52A8\u5BB9\u5668" tabindex="-1">\u521B\u5EFA\u4E0E\u542F\u52A8\u5BB9\u5668 <a class="header-anchor" href="#\u521B\u5EFA\u4E0E\u542F\u52A8\u5BB9\u5668" aria-hidden="true">#</a></h3><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">docker run </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">OPTIONS</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> IMAGE </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">COMMAND</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">ARG...</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><ul><li><code>i</code>\uFF1A\u8868\u793A\u8FD0\u884C\u5BB9\u5668\uFF1B</li><li><code>t</code>\uFF1A\u8868\u793A\u5BB9\u5668\u542F\u52A8\u540E\u4F1A\u8FDB\u5165\u5176\u547D\u4EE4\u884C\u3002\u52A0\u5165\u8FD9\u4E24\u4E2A\u53C2\u6570\u540E\uFF0C\u5BB9\u5668\u521B\u5EFA\u5C31\u80FD\u767B\u5F55\u8FDB\u53BB\u3002\u5373\u5206\u914D\u4E00\u4E2A\u4F2A\u7EC8\u7AEF\uFF1B</li><li><code>-name</code>\uFF1A\u4E3A\u521B\u5EFA\u7684\u5BB9\u5668\u547D\u540D\uFF1B</li><li><code>v</code>\uFF1A\u8868\u793A\u76EE\u5F55\u6620\u5C04\u5173\u7CFB\uFF08\u524D\u8005\u662F\u5BBF\u4E3B\u673A\u76EE\u5F55\uFF0C\u540E\u8005\u662F\u6620\u5C04\u5230\u5BBF\u4E3B\u673A\u4E0A\u7684\u76EE\u5F55\uFF09\uFF0C\u53EF\u4EE5\u4F7F\u7528\u591A\u4E2A -v \u505A\u591A\u4E2A\u76EE\u5F55\u6216\u6587\u4EF6\u6620\u5C04\u3002\u6CE8\u610F\uFF1A\u6700\u597D\u505A\u76EE\u5F55\u6620\u5C04\uFF0C\u5728\u5BBF\u4E3B\u673A\u4E0A\u505A\u4FEE\u6539\uFF0C\u7136\u540E\u5171\u4EAB\u5230\u5BB9\u5668\u4E0A\uFF1B</li><li><code>d</code>\uFF1A\u5728 run \u540E\u9762\u52A0\u4E0A -d \u53C2\u6570\uFF0C\u5219\u4F1A\u521B\u5EFA\u4E00\u4E2A\u5B88\u62A4\u5F0F\u5BB9\u5668\u5728\u540E\u53F0\u8FD0\u884C\uFF08\u8FD9\u6837\u521B\u5EFA\u5BB9\u5668\u540E\u4E0D\u4F1A\u81EA\u52A8\u767B\u5F55\u5BB9\u5668\uFF0C\u5982\u679C\u53EA\u52A0 -i -t \u4E24\u4E2A\u53C2\u6570\uFF0C\u521B\u5EFA\u5BB9\u5668\u540E\u5C31\u4F1A\u81EA\u52A8\u8FDB\u5BB9\u5668\u91CC\uFF09\uFF1B</li><li><code>p</code>\uFF1A\u8868\u793A\u7AEF\u53E3\u6620\u5C04\uFF0C\u524D\u8005\u662F\u5BBF\u4E3B\u673A\u7AEF\u53E3\uFF0C\u540E\u8005\u662F\u5BB9\u5668\u5185\u7684\u6620\u5C04\u7AEF\u53E3\u3002\u53EF\u4EE5\u4F7F\u7528\u591A\u4E2A -p \u505A\u591A\u4E2A\u7AEF\u53E3\u6620\u5C04\u3002</li><li><code>P</code>\uFF1A\u968F\u673A\u4F7F\u7528\u5BBF\u4E3B\u673A\u7684\u53EF\u7528\u7AEF\u53E3\u4E0E\u5BB9\u5668\u5185\u66B4\u9732\u7684\u7AEF\u53E3\u6620\u5C04\u3002</li></ul><h3 id="\u521B\u5EFA\u5E76\u8FDB\u5165\u5BB9\u5668" tabindex="-1">\u521B\u5EFA\u5E76\u8FDB\u5165\u5BB9\u5668 <a class="header-anchor" href="#\u521B\u5EFA\u5E76\u8FDB\u5165\u5BB9\u5668" aria-hidden="true">#</a></h3><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># \u4E0B\u9762\u8FD9\u884C\u547D\u4EE4\u7684\u610F\u601D\u5C31\u662F\u901A\u8FC7\u6307\u5B9A\u7684\u955C\u50CF\u521B\u5EFA\u4E00\u4E2A\u5BB9\u5668\uFF0C\u8FD0\u884C\u5BB9\u5668\u5E76\u8FDB\u5165\u5BB9\u5668\u7684 \`/bin/bash\`</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -it --name \u5BB9\u5668\u540D\u79F0 \u955C\u50CF\u540D\u79F0:\u6807\u7B7E /bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u9000\u51FA\u5F53\u524D\u5BB9\u5668</span></span>
<span class="line"><span style="color:#82AAFF;">exit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5B88\u62A4\u5F0F\u65B9\u5F0F\u521B\u5EFA\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -di --name \u5BB9\u5668\u540D\u79F0 \u955C\u50CF\u540D\u79F0:\u6807\u7B7E</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u767B\u5F55\u5B88\u62A4\u5F0F\u5BB9\u5668\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">docker </span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;"> -it \u5BB9\u5668\u540D\u79F0</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">\u5BB9\u5668ID /bin/bash</span></span>
<span class="line"></span></code></pre></div><h3 id="\u542F\u505C\u5BB9\u5668" tabindex="-1">\u542F\u505C\u5BB9\u5668 <a class="header-anchor" href="#\u542F\u505C\u5BB9\u5668" aria-hidden="true">#</a></h3><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># \u505C\u6B62\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">docker stop \u5BB9\u5668\u540D\u79F0</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">\u5BB9\u5668 ID</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u542F\u52A8\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">docker start \u5BB9\u5668\u540D\u79F0</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">\u5BB9\u5668 ID</span></span>
<span class="line"></span></code></pre></div><h3 id="\u67E5\u770B\u5BB9\u5668-ip" tabindex="-1">\u67E5\u770B\u5BB9\u5668 IP <a class="header-anchor" href="#\u67E5\u770B\u5BB9\u5668-ip" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u67E5\u770B\u5BB9\u5668\u7684\u5143\u4FE1\u606F\u3002</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">docker inspect \u5BB9\u5668\u540D\u79F0</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">\u5BB9\u5668ID</span></span>
<span class="line"></span></code></pre></div><p>\u4E5F\u53EF\u4EE5\u76F4\u63A5\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\u76F4\u63A5\u8F93\u51FA IP \u5730\u5740\u3002</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">docker inspect --format=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{{.NetworkSettings.IPAddress}}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> \u5BB9\u5668\u540D\u79F0</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">\u5BB9\u5668ID</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5220\u9664\u5BB9\u5668" tabindex="-1">\u5220\u9664\u5BB9\u5668 <a class="header-anchor" href="#\u5220\u9664\u5BB9\u5668" aria-hidden="true">#</a></h3><div class="language-sh"><button class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#676E95;"># \u5220\u9664\u6307\u5B9A\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">docker rm \u5BB9\u5668\u540D\u79F0</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">\u5BB9\u5668ID</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5220\u9664\u591A\u4E2A\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">docker rm \u5BB9\u5668\u540D\u79F0</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">\u5BB9\u5668ID \u5BB9\u5668\u540D\u79F0</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">\u5BB9\u5668ID</span></span>
<span class="line"></span></code></pre></div>`,36);function h(a,D,A,u,y,C){return l(),e("div",null,[s("h1",i,[p(c(a.$frontmatter.title)+" ",1),r]),d])}const v=n(t,[["render",h]]);export{g as __pageData,v as default};
