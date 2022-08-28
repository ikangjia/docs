import{_ as a,o as s,c as e,a as n}from"./app.1265aa13.js";const A=JSON.parse('{"title":"\u6784\u5EFA\u955C\u50CF\u4E4B Dockerfile","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6784\u5EFA\u955C\u50CF\u4E4B Dockerfile","slug":"\u6784\u5EFA\u955C\u50CF\u4E4B-dockerfile"},{"level":3,"title":"FROM","slug":"from"},{"level":3,"title":"MAINTAINER(deprecated)","slug":"maintainer-deprecated"},{"level":3,"title":"LABEL","slug":"label"},{"level":3,"title":"RUN","slug":"run"},{"level":3,"title":"ADD","slug":"add"},{"level":3,"title":"COPY","slug":"copy"},{"level":3,"title":"EXPOSE","slug":"expose"},{"level":3,"title":"ENV","slug":"env"},{"level":3,"title":"CMD","slug":"cmd"},{"level":3,"title":"ENTRYPOINT","slug":"entrypoint"},{"level":3,"title":"WORKDIR","slug":"workdir"},{"level":3,"title":"VOLUME","slug":"volume"},{"level":3,"title":"\u5173\u4E8E . \u7406\u89E3","slug":"\u5173\u4E8E-\u7406\u89E3"}],"relativePath":"articles/docker/\u6784\u5EFA\u955C\u50CF.md","lastUpdated":1661667178000}'),l={name:"articles/docker/\u6784\u5EFA\u955C\u50CF.md"},o=n(`<h2 id="\u6784\u5EFA\u955C\u50CF\u4E4B-dockerfile" tabindex="-1">\u6784\u5EFA\u955C\u50CF\u4E4B Dockerfile <a class="header-anchor" href="#\u6784\u5EFA\u955C\u50CF\u4E4B-dockerfile" aria-hidden="true">#</a></h2><blockquote><p>\u5728 Docker \u4E2D\u6784\u5EFA\u955C\u50CF\u6700\u5E38\u7528\u7684\u65B9\u5F0F\uFF0C\u5C31\u662F\u4F7F\u7528 <code>Dockerfile</code>\u3002<code>Dockerfile</code> \u662F\u4E00\u4E2A\u7528\u6765\u6784\u5EFA\u955C\u50CF\u7684\u6587\u672C\u6587\u4EF6\uFF0C\u6587\u672C\u5185\u5BB9\u5305\u542B\u4E86\u4E00\u6761\u6761\u6784\u5EFA\u955C\u50CF\u6240\u9700\u7684\u6307\u4EE4\u548C\u8BF4\u660E\u3002\u5B98\u65B9\u6587\u6863\uFF1A<a href="https://docs.docker.com/engine/reference/builder/" target="_blank" rel="noreferrer">https://docs.docker.com/engine/reference/builder/</a></p></blockquote><h1 id="dockerfile-\u5E38\u7528\u6307\u4EE4" tabindex="-1">Dockerfile \u5E38\u7528\u6307\u4EE4 <a class="header-anchor" href="#dockerfile-\u5E38\u7528\u6307\u4EE4" aria-hidden="true">#</a></h1><h3 id="from" tabindex="-1">FROM <a class="header-anchor" href="#from" aria-hidden="true">#</a></h3><p>\u8BED\u6CD5\uFF1A<code>FROM &lt;image&gt;:&lt;tag&gt;</code></p><p>\u6307\u660E\u6784\u5EFA\u7684\u65B0\u955C\u50CF\u662F\u6765\u81EA\u4E8E\u54EA\u4E2A\u57FA\u7840\u955C\u50CF\uFF0C\u5982\u679C\u6CA1\u6709\u9009\u62E9 tag\uFF0C\u90A3\u4E48\u9ED8\u8BA4\u503C\u4E3A latest\u3002</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">FROM centos:7</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u5982\u679C\u4E0D\u4EE5\u4EFB\u4F55\u955C\u50CF\u4E3A\u57FA\u7840\uFF0C\u90A3\u4E48\u5199\u6CD5\u4E3A\uFF1AFROM scratch\u3002\u5B98\u65B9\u8BF4\u660E\uFF1Ascratch \u955C\u50CF\u662F\u4E00\u4E2A\u7A7A\u955C\u50CF\uFF0C\u53EF\u4EE5\u7528\u4E8E\u6784\u5EFA busybox \u7B49\u8D85\u5C0F\u955C\u50CF\uFF0C\u53EF\u4EE5\u8BF4\u662F\u771F\u6B63\u7684\u4ECE\u96F6\u5F00\u59CB\u6784\u5EFA\u5C5E\u4E8E\u81EA\u5DF1\u7684\u955C\u50CF\u3002</p></blockquote><h3 id="maintainer-deprecated" tabindex="-1">MAINTAINER(deprecated) <a class="header-anchor" href="#maintainer-deprecated" aria-hidden="true">#</a></h3><p>\u8BED\u6CD5\uFF1A<code>MAINTAINER &lt;name&gt;</code></p><p>\u6307\u660E\u955C\u50CF\u7EF4\u62A4\u8005\u53CA\u5176\u8054\u7CFB\u65B9\u5F0F\uFF08\u4E00\u822C\u662F\u90AE\u7BB1\u5730\u5740\uFF09\u3002\u5B98\u65B9\u8BF4\u660E\u5DF2\u8FC7\u65F6\uFF0C\u63A8\u8350\u4F7F\u7528 LABEL\u3002</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">MAINTAINER mrhelloworld </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">mrhelloworld@126.com</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="label" tabindex="-1">LABEL <a class="header-anchor" href="#label" aria-hidden="true">#</a></h3><p>\u8BED\u6CD5\uFF1A<code>LABEL &lt;key&gt;=&lt;value&gt; &lt;key&gt;=&lt;value&gt; &lt;key&gt;=&lt;value&gt; ...</code></p><p>\u529F\u80FD\u662F\u4E3A\u955C\u50CF\u6307\u5B9A\u6807\u7B7E\u3002\u4E5F\u53EF\u4EE5\u4F7F\u7528 LABEL \u6765\u6307\u5B9A\u955C\u50CF\u4F5C\u8005\u3002</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">LABEL maintainer=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mrhelloworld.com</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><h3 id="run" tabindex="-1">RUN <a class="header-anchor" href="#run" aria-hidden="true">#</a></h3><p>\u8BED\u6CD5\uFF1A<code>RUN &lt;command&gt;</code></p><p>\u6784\u5EFA\u955C\u50CF\u65F6\u8FD0\u884C\u7684 Shell \u547D\u4EE4\uFF0C\u6BD4\u5982\u6784\u5EFA\u7684\u65B0\u955C\u50CF\u4E2D\u6211\u4EEC\u60F3\u5728 /usr/local \u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A java \u76EE\u5F55\u3002</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">RUN mkdir -p /usr/local/java</span></span>
<span class="line"></span></code></pre></div><h3 id="add" tabindex="-1">ADD <a class="header-anchor" href="#add" aria-hidden="true">#</a></h3><p>\u8BED\u6CD5\uFF1A<code>ADD &lt;src&gt;... &lt;dest&gt;</code></p><p>\u62F7\u8D1D\u6587\u4EF6\u6216\u76EE\u5F55\u5230\u955C\u50CF\u4E2D\u3002src \u53EF\u4EE5\u662F\u4E00\u4E2A\u672C\u5730\u6587\u4EF6\u6216\u8005\u662F\u4E00\u4E2A\u672C\u5730\u538B\u7F29\u6587\u4EF6\uFF0C\u538B\u7F29\u6587\u4EF6\u4F1A\u81EA\u52A8\u89E3\u538B\u3002\u8FD8\u53EF\u4EE5\u662F\u4E00\u4E2A url\uFF0C\u5982\u679C\u628A src \u5199\u6210\u4E00\u4E2A url\uFF0C\u90A3\u4E48 ADD \u5C31\u7C7B\u4F3C\u4E8E wget \u547D\u4EE4\uFF0C\u7136\u540E\u81EA\u52A8\u4E0B\u8F7D\u548C\u89E3\u538B\u3002</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">ADD jdk-11.0.6_linux-x64_bin.tar.gz /usr/local/java</span></span>
<span class="line"></span></code></pre></div><h3 id="copy" tabindex="-1">COPY <a class="header-anchor" href="#copy" aria-hidden="true">#</a></h3><p>\u8BED\u6CD5\uFF1A<code>COPY &lt;src&gt;... &lt;dest&gt;</code></p><p>\u62F7\u8D1D\u6587\u4EF6\u6216\u76EE\u5F55\u5230\u955C\u50CF\u4E2D\u3002\u7528\u6CD5\u540C ADD\uFF0C\u53EA\u662F\u4E0D\u652F\u6301\u81EA\u52A8\u4E0B\u8F7D\u548C\u89E3\u538B\u3002</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">COPY jdk-11.0.6_linux-x64_bin.tar.gz /usr/local/java</span></span>
<span class="line"></span></code></pre></div><h3 id="expose" tabindex="-1">EXPOSE <a class="header-anchor" href="#expose" aria-hidden="true">#</a></h3><p>\u8BED\u6CD5\uFF1A<code>EXPOSE &lt;port&gt; [&lt;port&gt;/&lt;protocol&gt;...]</code></p><p>\u66B4\u9732\u5BB9\u5668\u8FD0\u884C\u65F6\u7684\u76D1\u542C\u7AEF\u53E3\u7ED9\u5916\u90E8\uFF0C\u53EF\u4EE5\u6307\u5B9A\u7AEF\u53E3\u662F\u76D1\u542C TCP \u8FD8\u662F UDP\uFF0C\u5982\u679C\u672A\u6307\u5B9A\u534F\u8BAE\uFF0C\u5219\u9ED8\u8BA4\u4E3A TCP\u3002</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">EXPOSE 80 443 8080/tcp</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u5982\u679C\u60F3\u4F7F\u5F97\u5BB9\u5668\u4E0E\u5BBF\u4E3B\u673A\u7684\u7AEF\u53E3\u6709\u6620\u5C04\u5173\u7CFB\uFF0C\u5FC5\u987B\u5728\u5BB9\u5668\u542F\u52A8\u7684\u65F6\u5019\u52A0\u4E0A -P \u53C2\u6570\u3002</p></blockquote><h3 id="env" tabindex="-1">ENV <a class="header-anchor" href="#env" aria-hidden="true">#</a></h3><p>\u8BED\u6CD5\uFF1A<code>ENV &lt;key&gt; &lt;value&gt;</code> \u6DFB\u52A0\u5355\u4E2A\uFF0C<code>ENV &lt;key&gt;=&lt;value&gt; ...</code> \u6DFB\u52A0\u591A\u4E2A\u3002</p><p>\u8BBE\u7F6E\u5BB9\u5668\u5185\u73AF\u5883\u53D8\u91CF\u3002</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">ENV JAVA_HOME /usr/local/java/jdk-11.0.6/</span></span>
<span class="line"></span></code></pre></div><h3 id="cmd" tabindex="-1">CMD <a class="header-anchor" href="#cmd" aria-hidden="true">#</a></h3><p>\u8BED\u6CD5\uFF1A</p><ul><li><code>CMD [&quot;executable&quot;,&quot;param1&quot;,&quot;param2&quot;]</code>\uFF0C\u6BD4\u5982\uFF1A<code>CMD [&quot;/usr/local/tomcat/bin/catalina.sh&quot;, &quot;start&quot;]</code></li><li><code>CMD [&quot;param1&quot;,&quot;param2&quot;]</code>\uFF0C\u6BD4\u5982\uFF1A<code>CMD [ &quot;echo&quot;, &quot;$JAVA_HOME&quot; ]</code></li><li><code>CMD command param1 param2</code>\uFF0C\u6BD4\u5982\uFF1A<code>CMD echo $JAVA_HOME</code></li></ul><p>\u542F\u52A8\u5BB9\u5668\u65F6\u6267\u884C\u7684 Shell \u547D\u4EE4\u3002\u5728 Dockerfile \u4E2D\u53EA\u80FD\u6709\u4E00\u6761 CMD \u6307\u4EE4\u3002\u5982\u679C\u8BBE\u7F6E\u4E86\u591A\u6761 CMD\uFF0C\u53EA\u6709\u6700\u540E\u4E00\u6761 CMD \u4F1A\u751F\u6548\u3002</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">CMD ehco </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">JAVA_HOME</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u5982\u679C\u521B\u5EFA\u5BB9\u5668\u7684\u65F6\u5019\u6307\u5B9A\u4E86\u547D\u4EE4\uFF0C\u5219 CMD \u547D\u4EE4\u4F1A\u88AB\u66FF\u4EE3\u3002\u5047\u5982\u955C\u50CF\u53EB centos:7\uFF0C\u521B\u5EFA\u5BB9\u5668\u65F6\u547D\u4EE4\u662F\uFF1Adocker run -it --name centos7 centos:7 echo &quot;helloworld&quot; \u6216\u8005 docker run -it --name centos7 centos:7 /bin/bash\uFF0C\u5C31\u4E0D\u4F1A\u8F93\u51FA $JAVA_HOME \u7684\u73AF\u5883\u53D8\u91CF\u4FE1\u606F\u4E86\uFF0C\u56E0\u4E3A CMD \u547D\u4EE4\u88AB echo &quot;helloworld&quot;\u3001/bin/bash \u8986\u76D6\u4E86\u3002</p></blockquote><h3 id="entrypoint" tabindex="-1">ENTRYPOINT <a class="header-anchor" href="#entrypoint" aria-hidden="true">#</a></h3><p>\u8BED\u6CD5\uFF1A</p><ul><li><code>ENTRYPOINT [&quot;executable&quot;, &quot;param1&quot;, &quot;param2&quot;]</code>\uFF0C\u6BD4\u5982\uFF1A<code>ENTRYPOINT [&quot;/usr/local/tomcat/bin/catalina.sh&quot;, &quot;start&quot;]</code></li><li><code>ENTRYPOINT command param1 param2</code>\uFF0C\u6BD4\u5982\uFF1A<code>ENTRYPOINT ehco $JAVA_HOME</code></li></ul><p>\u542F\u52A8\u5BB9\u5668\u65F6\u6267\u884C\u7684 Shell \u547D\u4EE4\uFF0C\u540C CMD \u7C7B\u4F3C\uFF0C\u4E0D\u4F1A\u88AB docker run \u547D\u4EE4\u884C\u6307\u5B9A\u7684\u53C2\u6570\u6240\u8986\u76D6\u3002\u5728 Dockerfile \u4E2D\u53EA\u80FD\u6709\u4E00\u6761 ENTRYPOINT \u6307\u4EE4\u3002\u5982\u679C\u8BBE\u7F6E\u4E86\u591A\u6761 ENTRYPOINT\uFF0C\u53EA\u6709\u6700\u540E\u4E00\u6761 ENTRYPOINT \u4F1A\u751F\u6548\u3002</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">ENTRYPOINT ehco </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">JAVA_HOME</span></span>
<span class="line"></span></code></pre></div><ul><li>\u5982\u679C\u5728 Dockerfile \u4E2D\u540C\u65F6\u5199\u4E86 ENTRYPOINT \u548C CMD\uFF0C\u5E76\u4E14 CMD \u6307\u4EE4\u4E0D\u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u53EF\u6267\u884C\u547D\u4EE4\uFF0C\u90A3\u4E48 CMD \u6307\u5B9A\u7684\u5185\u5BB9\u5C06\u4F1A\u4F5C\u4E3A ENTRYPOINT \u7684\u53C2\u6570\uFF1B</li><li>\u5982\u679C\u5728 Dockerfile \u4E2D\u540C\u65F6\u5199\u4E86 ENTRYPOINT \u548C CMD\uFF0C\u5E76\u4E14 CMD \u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u6307\u4EE4\uFF0C\u90A3\u4E48\u5B83\u4EEC\u4E24\u4E2A\u4F1A\u4E92\u76F8\u8986\u76D6\uFF0C\u8C01\u5728\u6700\u540E\u8C01\u751F\u6548</li></ul><h3 id="workdir" tabindex="-1">WORKDIR <a class="header-anchor" href="#workdir" aria-hidden="true">#</a></h3><p>\u8BED\u6CD5\uFF1A<code>WORKDIR /path/to/workdir</code></p><p>\u4E3A RUN\u3001CMD\u3001ENTRYPOINT \u4EE5\u53CA COPY \u548C AND \u8BBE\u7F6E\u5DE5\u4F5C\u76EE\u5F55\u3002</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">WORKDIR /usr/local</span></span>
<span class="line"></span></code></pre></div><h3 id="volume" tabindex="-1">VOLUME <a class="header-anchor" href="#volume" aria-hidden="true">#</a></h3><p>\u6307\u5B9A\u5BB9\u5668\u6302\u8F7D\u70B9\u5230\u5BBF\u4E3B\u673A\u81EA\u52A8\u751F\u6210\u7684\u76EE\u5F55\u6216\u5176\u4ED6\u5BB9\u5668\u3002\u4E00\u822C\u7684\u4F7F\u7528\u573A\u666F\u4E3A\u9700\u8981\u6301\u4E45\u5316\u5B58\u50A8\u6570\u636E\u65F6\u3002</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># \u5BB9\u5668\u7684 /var/lib/mysql \u76EE\u5F55\u4F1A\u5728\u8FD0\u884C\u65F6\u81EA\u52A8\u6302\u8F7D\u4E3A\u533F\u540D\u5377\uFF0C\u533F\u540D\u5377\u5728\u5BBF\u4E3B\u673A\u7684 /var/lib/docker/volumes \u76EE\u5F55\u4E0B</span></span>
<span class="line"><span style="color:#A6ACCD;">VOLUME </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/var/lib/mysql</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u4E00\u822C\u4E0D\u4F1A\u5728 Dockerfile \u4E2D\u7528\u5230\uFF0C\u66F4\u5E38\u89C1\u7684\u8FD8\u662F\u5728 docker run \u7684\u65F6\u5019\u901A\u8FC7 -v \u6307\u5B9A\u6570\u636E\u5377\u3002</p></blockquote><h1 id="\u6784\u5EFA\u955C\u50CF" tabindex="-1">\u6784\u5EFA\u955C\u50CF <a class="header-anchor" href="#\u6784\u5EFA\u955C\u50CF" aria-hidden="true">#</a></h1><p>Dockerfile \u6587\u4EF6\u7F16\u5199\u597D\u4EE5\u540E\uFF0C\u771F\u6B63\u6784\u5EFA\u955C\u50CF\u65F6\u9700\u8981\u901A\u8FC7 <code>docker build</code> \u547D\u4EE4\u3002</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># \u4F7F\u7528\u5F53\u524D\u76EE\u5F55\u7684 Dockerfile \u521B\u5EFA\u955C\u50CF</span></span>
<span class="line"><span style="color:#A6ACCD;">docker build -t mycentos:7 </span><span style="color:#82AAFF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u901A\u8FC7 -f Dockerfile \u6587\u4EF6\u7684\u4F4D\u7F6E\u521B\u5EFA\u955C\u50CF</span></span>
<span class="line"><span style="color:#A6ACCD;">docker build -f /usr/local/dockerfile/Dockerfile -t mycentos:7 </span><span style="color:#82AAFF;">.</span></span>
<span class="line"></span></code></pre></div><ul><li><code>f</code>\uFF1A\u6307\u5B9A\u8981\u4F7F\u7528\u7684 Dockerfile \u8DEF\u5F84\uFF1B</li><li><code>-tag, -t</code>\uFF1A\u955C\u50CF\u7684\u540D\u5B57\u53CA\u6807\u7B7E\uFF0C\u53EF\u4EE5\u5728\u4E00\u6B21\u6784\u5EFA\u4E2D\u4E3A\u4E00\u4E2A\u955C\u50CF\u8BBE\u7F6E\u591A\u4E2A\u6807\u7B7E\u3002</li></ul><h3 id="\u5173\u4E8E-\u7406\u89E3" tabindex="-1">\u5173\u4E8E . \u7406\u89E3 <a class="header-anchor" href="#\u5173\u4E8E-\u7406\u89E3" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u5728\u4F7F\u7528 <code>docker build</code> \u547D\u4EE4\u53BB\u6784\u5EFA\u955C\u50CF\u65F6\uFF0C\u5F80\u5F80\u4F1A\u770B\u5230\u547D\u4EE4\u6700\u540E\u4F1A\u6709\u4E00\u4E2A <code>.</code> \u53F7\u3002\u5B83\u7A76\u7ADF\u662F\u4EC0\u4E48\u610F\u601D\u5462\uFF1F</p><p>\u5F88\u591A\u4EBA\u4EE5\u4E3A\u662F\u7528\u6765\u6307\u5B9A <code>Dockerfile</code> \u6587\u4EF6\u6240\u5728\u7684\u4F4D\u7F6E\u7684\uFF0C\u4F46\u5176\u5B9E <code>-f</code> \u53C2\u6570\u624D\u662F\u7528\u6765\u6307\u5B9A <code>Dockerfile</code> \u7684\u8DEF\u5F84\u7684\uFF0C\u90A3\u4E48 <code>.</code> \u53F7\u7A76\u7ADF\u662F\u7528\u6765\u505A\u4EC0\u4E48\u7684\u5462\uFF1F</p><p><code>Docker</code> \u5728\u8FD0\u884C\u65F6\u5206\u4E3A <code>Docker \u5F15\u64CE\uFF08\u670D\u52A1\u7AEF\u5B88\u62A4\u8FDB\u7A0B\uFF09</code> \u548C <code>\u5BA2\u6237\u7AEF\u5DE5\u5177</code>\uFF0C\u6211\u4EEC\u65E5\u5E38\u4F7F\u7528\u5404\u79CD <code>docker \u547D\u4EE4</code>\uFF0C\u5176\u5B9E\u5C31\u662F\u5728\u4F7F\u7528 <code>\u5BA2\u6237\u7AEF\u5DE5\u5177</code> \u4E0E <code>Docker \u5F15\u64CE</code> \u8FDB\u884C\u4EA4\u4E92\u3002</p><p>\u5F53\u6211\u4EEC\u4F7F\u7528 <code>docker build</code> \u547D\u4EE4\u6765\u6784\u5EFA\u955C\u50CF\u65F6\uFF0C\u8FD9\u4E2A\u6784\u5EFA\u8FC7\u7A0B\u5176\u5B9E\u662F\u5728 <code>Docker \u5F15\u64CE</code> \u4E2D\u5B8C\u6210\u7684\uFF0C\u800C\u4E0D\u662F\u5728\u672C\u673A\u73AF\u5883\u3002\u5982\u679C\u5728 <code>Dockerfile</code> \u4E2D\u4F7F\u7528\u4E86\u4E00\u4E9B <code>ADD</code> \u7B49\u6307\u4EE4\u6765\u64CD\u4F5C\u6587\u4EF6\uFF0C\u5982\u4F55\u8BA9 <code>Docker \u5F15\u64CE</code> \u83B7\u53D6\u5230\u8FD9\u4E9B\u6587\u4EF6\u5462\uFF1F</p><p>\u8FD9\u91CC\u5C31\u6709\u4E86\u4E00\u4E2A <code>\u955C\u50CF\u6784\u5EFA\u4E0A\u4E0B\u6587</code> \u7684\u6982\u5FF5\uFF0C\u5F53\u6784\u5EFA\u7684\u65F6\u5019\uFF0C\u7531\u7528\u6237\u6307\u5B9A\u6784\u5EFA\u955C\u50CF\u65F6\u7684\u4E0A\u4E0B\u6587\u8DEF\u5F84\uFF0C\u800C <code>docker build</code> \u4F1A\u5C06\u8FD9\u4E2A\u8DEF\u5F84\u4E0B\u6240\u6709\u7684\u6587\u4EF6\u90FD\u6253\u5305\u4E0A\u4F20\u7ED9 <code>Docker \u5F15\u64CE</code>\uFF0C\u5F15\u64CE\u5185\u5C06\u8FD9\u4E9B\u5185\u5BB9\u5C55\u5F00\u540E\uFF0C\u5C31\u80FD\u83B7\u53D6\u5230\u4E0A\u4E0B\u6587\u4E2D\u7684\u6587\u4EF6\u4E86\u3002</p><p>\u4E3E\u4E2A\u6817\u5B50\uFF1A\u6211\u7684\u5BBF\u4E3B\u673A jdk \u6587\u4EF6\u5728 <code>/root</code> \u76EE\u5F55\u4E0B\uFF0CDockerfile \u6587\u4EF6\u5728 <code>/usr/local/dockerfile</code> \u76EE\u5F55\u4E0B\uFF0C\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">ADD jdk-11.0.6_linux-x64_bin.tar.gz /usr/local/java</span></span>
<span class="line"></span></code></pre></div><p>\u90A3\u4E48\u6784\u5EFA\u955C\u50CF\u65F6\u7684\u547D\u4EE4\u5C31\u8BE5\u8FD9\u6837\u5199\uFF1A</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">docker build -f /usr/local/dockerfile/Dockerfile -t mycentos:7 /root</span></span>
<span class="line"></span></code></pre></div><p>\u518D\u4E3E\u4E2A\u6817\u5B50\uFF1A\u6211\u7684\u5BBF\u4E3B\u673A jdk \u6587\u4EF6\u548C Dockerfile \u6587\u4EF6\u90FD\u5728 <code>/usr/local/dockerfile</code> \u76EE\u5F55\u4E0B\uFF0C\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">ADD jdk-11.0.6_linux-x64_bin.tar.gz /usr/local/java</span></span>
<span class="line"></span></code></pre></div><p>\u90A3\u4E48\u6784\u5EFA\u955C\u50CF\u65F6\u7684\u547D\u4EE4\u5219\u8FD9\u6837\u5199\uFF1A</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">docker build -f /usr/local/dockerfile/Dockerfile -t mycentos:7 </span><span style="color:#82AAFF;">.</span></span>
<span class="line"></span></code></pre></div><h1 id="dockerfile-\u5B9E\u8DF5" tabindex="-1">Dockerfile \u5B9E\u8DF5 <a class="header-anchor" href="#dockerfile-\u5B9E\u8DF5" aria-hidden="true">#</a></h1><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u901A\u8FC7\u57FA\u7840\u955C\u50CF <code>centos:7</code>\uFF0C\u5728\u8BE5\u955C\u50CF\u4E2D\u5B89\u88C5 jdk \u548C tomcat \u4EE5\u540E\u5C06\u5176\u5236\u4F5C\u4E3A\u4E00\u4E2A\u65B0\u7684\u955C\u50CF <code>mycentos:7</code>\u3002</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># \u521B\u5EFA\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir -p /usr/local/dockerfile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u7F16\u5199 Dockerfile \u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">vi Dockerfile</span></span>
<span class="line"></span></code></pre></div><p>Dockerfile \u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># \u6307\u660E\u6784\u5EFA\u7684\u65B0\u955C\u50CF\u662F\u6765\u81EA\u4E8E centos:7 \u57FA\u7840\u955C\u50CF</span></span>
<span class="line"><span style="color:#A6ACCD;">FROM centos:7</span></span>
<span class="line"><span style="color:#676E95;"># \u901A\u8FC7\u955C\u50CF\u6807\u7B7E\u58F0\u660E\u4E86\u4F5C\u8005\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">LABEL maintainer=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mrhelloworld.com</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;"># \u8BBE\u7F6E\u5DE5\u4F5C\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">WORKDIR /usr/local</span></span>
<span class="line"><span style="color:#676E95;"># \u65B0\u955C\u50CF\u6784\u5EFA\u6210\u529F\u4EE5\u540E\u521B\u5EFA\u6307\u5B9A\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">RUN mkdir -p /usr/local/java </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> mkdir -p /usr/local/tomcat</span></span>
<span class="line"><span style="color:#676E95;"># \u62F7\u8D1D\u6587\u4EF6\u5230\u955C\u50CF\u4E2D\u5E76\u89E3\u538B</span></span>
<span class="line"><span style="color:#A6ACCD;">ADD jdk-11.0.6_linux-x64_bin.tar.gz /usr/local/java</span></span>
<span class="line"><span style="color:#A6ACCD;">ADD apache-tomcat-9.0.37.tar.gz /usr/local/tomcat</span></span>
<span class="line"><span style="color:#676E95;"># \u66B4\u9732\u5BB9\u5668\u8FD0\u884C\u65F6\u7684 8080 \u76D1\u542C\u7AEF\u53E3\u7ED9\u5916\u90E8</span></span>
<span class="line"><span style="color:#A6ACCD;">EXPOSE 8080</span></span>
<span class="line"><span style="color:#676E95;"># \u8BBE\u7F6E\u5BB9\u5668\u5185 JAVA_HOME \u73AF\u5883\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">ENV JAVA_HOME /usr/local/java/jdk-11.0.6/</span></span>
<span class="line"><span style="color:#A6ACCD;">ENV PATH </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">PATH:</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">JAVA_HOME/bin</span></span>
<span class="line"><span style="color:#676E95;"># \u542F\u52A8\u5BB9\u5668\u65F6\u542F\u52A8 tomcat</span></span>
<span class="line"><span style="color:#A6ACCD;">CMD </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/usr/local/tomcat/apache-tomcat-9.0.37/bin/catalina.sh</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">run</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><p>\u6784\u5EFA\u955C\u50CF\u3002</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">docker build -f /usr/local/dockerfile/Dockerfile -t mycentos:7 /root/</span></span>
<span class="line"></span></code></pre></div><h1 id="\u955C\u50CF\u6784\u5EFA\u5386\u53F2" tabindex="-1">\u955C\u50CF\u6784\u5EFA\u5386\u53F2 <a class="header-anchor" href="#\u955C\u50CF\u6784\u5EFA\u5386\u53F2" aria-hidden="true">#</a></h1><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">docker </span><span style="color:#82AAFF;">history</span><span style="color:#A6ACCD;"> \u955C\u50CF\u540D\u79F0:\u6807\u7B7E</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">ID</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">docker </span><span style="color:#82AAFF;">history</span><span style="color:#A6ACCD;"> mycentos:7</span></span>
<span class="line"></span></code></pre></div><h1 id="\u4F7F\u7528\u6784\u5EFA\u7684\u955C\u50CF\u521B\u5EFA\u5BB9\u5668" tabindex="-1">\u4F7F\u7528\u6784\u5EFA\u7684\u955C\u50CF\u521B\u5EFA\u5BB9\u5668 <a class="header-anchor" href="#\u4F7F\u7528\u6784\u5EFA\u7684\u955C\u50CF\u521B\u5EFA\u5BB9\u5668" aria-hidden="true">#</a></h1><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># \u521B\u5EFA\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -di --name mycentos7 -p 8080:8080 mycentos:7</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u8FDB\u5165\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">docker </span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;"> -it mycentos7 /bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u6D4B\u8BD5 java \u73AF\u5883\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">java -version</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u8BBF\u95EE &lt;http://192.168.10.10:8080/&gt; \u770B\u5230\u9875\u9762\u8BF4\u660E\u73AF\u5883 OK!</span></span>
<span class="line"></span></code></pre></div>`,86),c=[o];function p(t,r,d,i,u,h){return s(),e("div",null,c)}const b=a(l,[["render",p]]);export{A as __pageData,b as default};
