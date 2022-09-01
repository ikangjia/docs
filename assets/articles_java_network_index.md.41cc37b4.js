import{_ as s,o as n,c as a,a as l}from"./app.41bf1b22.js";const A=JSON.parse('{"title":"Cent OS \u8BBE\u7F6E","description":"","frontmatter":{"layout":"doc","outline":"deep"},"headers":[{"level":2,"title":"Cent OS \u8BBE\u7F6E","slug":"cent-os-\u8BBE\u7F6E-1"},{"level":3,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":3,"title":"\u8BBE\u7F6E\u7EC8\u7AEF\u989C\u8272","slug":"\u8BBE\u7F6E\u7EC8\u7AEF\u989C\u8272"},{"level":3,"title":"\u6587\u4EF6\u4F4D\u7F6E","slug":"\u6587\u4EF6\u4F4D\u7F6E"},{"level":2,"title":"\u5B89\u88C5 tree","slug":"\u5B89\u88C5-tree"},{"level":2,"title":"\u5B89\u88C5 Docker","slug":"\u5B89\u88C5-docker"},{"level":2,"title":"\u5B89\u88C5 MySQL","slug":"\u5B89\u88C5-mysql"},{"level":2,"title":"\u5B89\u88C5 ntpdate \u8BBE\u7F6E\u65F6\u95F4","slug":"\u5B89\u88C5-ntpdate-\u8BBE\u7F6E\u65F6\u95F4"},{"level":2,"title":"\u5B89\u88C5 Redis","slug":"\u5B89\u88C5-redis"},{"level":3,"title":"Another Redis Desktop Manager","slug":"another-redis-desktop-manager"},{"level":2,"title":"\u5B89\u88C5 Nginx","slug":"\u5B89\u88C5-nginx"}],"relativePath":"articles/java/network/index.md","lastUpdated":1662022619000}'),e={name:"articles/java/network/index.md"},p=l(`<h1 id="cent-os-\u8BBE\u7F6E" tabindex="-1">Cent OS \u8BBE\u7F6E <a class="header-anchor" href="#cent-os-\u8BBE\u7F6E" aria-hidden="true">#</a></h1><p>\u8FD9\u91CC\u8BB0\u8F7D Centod\u8FD9\u91CC\u8BB0\u8F7D Centod\u8FD9\u91CC\u8BB0\u8F7D Centod\u8FD9\u91CC\u8BB0\u8F7D Centod \u8FD9\u91CC\u8BB0\u8F7D Centod\u8FD9\u91CC\u8BB0\u8F7D Centod\u8FD9\u91CC\u8BB0\u8F7D Centod</p><h2 id="cent-os-\u8BBE\u7F6E-1" tabindex="-1">Cent OS \u8BBE\u7F6E <a class="header-anchor" href="#cent-os-\u8BBE\u7F6E-1" aria-hidden="true">#</a></h2><h3 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h3><p>\u4F7F\u7528 VMware Workstation Player \u5B89\u88C5 CentOS7</p><p>\u7528\u6237\u540D\uFF1Aikangjia\u3001root</p><p>\u5BC6\u7801\uFF1A123456</p><p>\u5B89\u88C5\u5B8C\u540E\uFF0C\u7CFB\u7EDF\u9ED8\u8BA4\u4F1A\u9009\u62E9 ikangjia \u7528\u6237\u53BB\u767B\u5F55\uFF0C\u8F93\u5165 ikangjia \u7684\u5BC6\u7801 123456 \u5373\u53EF\u767B\u5F55\uFF1B</p><p>\u767B\u5F55\u540E\uFF0C\u4FBF\u770B\u5230 CentOS \u7ECF\u5178\u684C\u9762\u3002\u53F3\u952E\u6253\u5F00\u7EC8\u7AEF\uFF0C\u53EF\u4EE5\u770B\u5230\u5F53\u524D\u547D\u4EE4\u884C\u662F ikangjia\uFF0C\u8F93\u5165 su \uFF0C\u5728\u8F93\u5165\u5BC6\u7801 123456\uFF0C\u5373\u53EF\u5207\u6362\u4E3A root \u7528\u6237\u3002</p><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">ikangjia@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#A6ACCD;">$ su</span></span>
<span class="line"><span style="color:#A6ACCD;">Password: </span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost ikangjia</span><span style="color:#89DDFF;">]</span><span style="color:#676E95;"># cd</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># cd /home/</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost home</span><span style="color:#89DDFF;">]</span><span style="color:#676E95;"># ll</span></span>
<span class="line"><span style="color:#A6ACCD;">total 4</span></span>
<span class="line"><span style="color:#A6ACCD;">drwx------. 15 ikangjia ikangjia 4096 Nov 30 00:38 ikangjia</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@localhost home</span><span style="color:#89DDFF;">]</span><span style="color:#676E95;"># </span></span>
<span class="line"></span></code></pre></div><h3 id="\u8BBE\u7F6E\u7EC8\u7AEF\u989C\u8272" tabindex="-1">\u8BBE\u7F6E\u7EC8\u7AEF\u989C\u8272 <a class="header-anchor" href="#\u8BBE\u7F6E\u7EC8\u7AEF\u989C\u8272" aria-hidden="true">#</a></h3><p>\u5982\u679C\u5F53\u524D\u662F root \u767B\u5F55\uFF0C\u5219\u4F1A\u8BBE\u7F6E root \u7528\u6237\u7684\u547D\u4EE4\u884C\u989C\u8272\uFF1B\u60F3\u8981\u8BBE\u7F6E\u522B\u7684\u7528\u6237\uFF0C\u9700\u8981\u5355\u72EC\u5206\u522B\u53BB\u6267\u884C\u8FD9\u4E2A\u3002</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">vim </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.bashrc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u6DFB\u52A0\u4E00\u884C </span></span>
<span class="line"><span style="color:#A6ACCD;">PS1=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[\\[\\033[01;32m\\]\\u@\\h\\[\\033[00m\\]:\\[\\033[01;34m\\]\\w\\[\\033[00m\\]]\\$ </span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.bashrc</span></span>
<span class="line"></span></code></pre></div><h3 id="\u6587\u4EF6\u4F4D\u7F6E" tabindex="-1">\u6587\u4EF6\u4F4D\u7F6E <a class="header-anchor" href="#\u6587\u4EF6\u4F4D\u7F6E" aria-hidden="true">#</a></h3><p>\u6240\u6709\u81EA\u5DF1\u7684\u6570\u636E\u5B58\u4E8E <code>/opt</code> \u4E0B</p><h2 id="\u5B89\u88C5-tree" tabindex="-1">\u5B89\u88C5 tree <a class="header-anchor" href="#\u5B89\u88C5-tree" aria-hidden="true">#</a></h2><p><code>yum install -y tree</code></p><h2 id="\u5B89\u88C5-docker" tabindex="-1">\u5B89\u88C5 Docker <a class="header-anchor" href="#\u5B89\u88C5-docker" aria-hidden="true">#</a></h2><p>\u5B89\u88C5\u8FC7\u7A0B\u53C2\u8003\u7B14\u8BB0\uFF1A<a href="https://ikangjia.notion.site/Docker-0a9116b190e1414390aebb56c2fb5db0" target="_blank" rel="noreferrer">Docker \u5E38\u7528\u547D\u4EE4\u901F\u89C8 (notion.site)</a></p><p>\u65B0\u5EFA <code>/opt/docker-v-data</code> \u4E3A Docker \u5BB9\u5668\u5728\u5BBF\u4E3B\u673A\u7684\u6302\u8F7D\u76EE\u5F55\u3002</p><p>\u4F8B\u5982 MySQL \u7684\u6570\u636E\u6302\u8F7D\u76EE\u5F55\u4E3A <code>/opt/docker-v-data/docker_mysql</code></p><h2 id="\u5B89\u88C5-mysql" tabindex="-1">\u5B89\u88C5 MySQL <a class="header-anchor" href="#\u5B89\u88C5-mysql" aria-hidden="true">#</a></h2><p>\u5728 Docker \u91CC\u5B89\u88C5 MySQL\uFF0C\u540C\u65F6\u5C06\u6570\u636E\u6302\u8F7D\u5728 <code>/opt/docker-v-data/docker_mysql</code> \u76EE\u5F55\u3002\u5177\u4F53\u547D\u4EE4\u64CD\u4F5C\u5982\u4E0B</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">docker pull mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># -v \u5BBF\u4E3B\u673A\u76EE\u5F55:\u5BB9\u5668\u5185\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -di --name mysql8 -p 3306:3306 -v /opt/docker-v-data/docker_mysql/conf:/etc/mysql/conf.d -v /opt/docker-v-data/docker_mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123 mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u8FDB\u5165\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">docker </span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;"> -it mysql8 /bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u4F7F\u7528 MySQL \u547D\u4EE4\u6253\u5F00\u5BA2\u6237\u7AEF</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql -uroot -p123 --default-character-set=utf8</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5B89\u88C5-ntpdate-\u8BBE\u7F6E\u65F6\u95F4" tabindex="-1">\u5B89\u88C5 ntpdate \u8BBE\u7F6E\u65F6\u95F4 <a class="header-anchor" href="#\u5B89\u88C5-ntpdate-\u8BBE\u7F6E\u65F6\u95F4" aria-hidden="true">#</a></h2><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">yum -y install ntp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">ntpdate 1.cn.pool.ntp.org </span><span style="color:#676E95;"># \u6839\u636E\u7F51\u7EDC\u65F6\u95F4\u6821\u6B63</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">tzselect </span><span style="color:#676E95;"># \u9009\u62E9\u65F6\u533A\uFF1A5Asia-&gt;9 China-&gt;1-&gt;Beijing Time -&gt;1 yes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">TZ=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">Asia/Shanghai</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">; export TZ</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.profile </span><span style="color:#676E95;"># \u65F6\u533A\u4FE1\u606F\u5199\u5165\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">hwclock -w  </span><span style="color:#676E95;"># \u8F6F\u4EF6\u65F6\u95F4\u540C\u6B65\u81F3\u786C\u4EF6\u65F6\u95F4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">date </span><span style="color:#676E95;"># \u67E5\u770B\u5F53\u524D\u65F6\u95F4</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5B89\u88C5-redis" tabindex="-1">\u5B89\u88C5 Redis <a class="header-anchor" href="#\u5B89\u88C5-redis" aria-hidden="true">#</a></h2><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">docker pull redis</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">docker run -di --name redis-6379 -p 6379:6379 redis</span></span>
<span class="line"></span></code></pre></div><p>\u4EE5\u4E0A\u547D\u4EE4\u53EF\u4EE5\u5728 Docker \u91CC\u542F\u52A8\u4E00\u4E2A Redis \u670D\u52A1\u3002</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># \u8FDB\u5165\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">docker </span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;"> -it \u5BB9\u5668id /bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5728\u5BB9\u5668\u5185\uFF0C\u53EF\u4EE5\u4F7F\u7528 redis-cli \u8FDE\u63A5 redis \u670D\u52A1\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">root@d155f48d498e:/data# redis-cli</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:</span><span style="color:#89DDFF;">6379&gt;</span><span style="color:#A6ACCD;"> keys </span><span style="color:#89DDFF;">*</span></span>
<span class="line"><span style="color:#A6ACCD;">1) </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user:sign:5:202112</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1:</span><span style="color:#89DDFF;">6379&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><h3 id="another-redis-desktop-manager" tabindex="-1">Another Redis Desktop Manager <a class="header-anchor" href="#another-redis-desktop-manager" aria-hidden="true">#</a></h3><p><a href="https://github.com/qishibo/AnotherRedisDesktopManager/releases" target="_blank" rel="noreferrer">Another-Redis-Desktop-Manager</a>\uFF1A\u514D\u8D39\u7684 Redis \u5BA2\u6237\u7AEF GUI\uFF0C\u652F\u6301 Win\u3001Mac\u3001Mac M1\u3001Linux\uFF08\u8FD9\u4E2A\u540D\u5B57 emmm \u4E0D\u77E5\u9053\u662F\u4E0D\u662F\u2026\u2026\uFF09</p><h2 id="\u5B89\u88C5-nginx" tabindex="-1">\u5B89\u88C5 Nginx <a class="header-anchor" href="#\u5B89\u88C5-nginx" aria-hidden="true">#</a></h2><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># \u62C9\u53D6\u955C\u50CF</span></span>
<span class="line"><span style="color:#A6ACCD;">docker pull nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u521B\u5EFA Nginx \u5BB9\u5668\uFF0C\u56E0\u4E3A\u8981\u62F7\u8D1D\u4E00\u4E9B\u6587\u4EF6\u4EE5\u53CA\u8BBE\u7F6E\u6302\u8F7D\u76EE\u5F55\uFF0C\u9700\u8981\u5148\u542F\u52A8\u4E00\u4E2Anginx\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -di --name mynginx -p 80:80 nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u521B\u5EFA\u5BBF\u4E3B\u673A\u76EE\u5F55\uFF0C\u7528\u4E8E\u5B58\u653E\u6302\u8F7D\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir docker-nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5C06\u5BB9\u5668\u5185\u7684\u914D\u7F6E\u6587\u4EF6\u62F7\u8D1D\u5230\u5BBF\u4E3B\u673A\u65B0\u5EFA\u7684\u6587\u4EF6\u5939\u5185\uFF0C\u5E76\u91CD\u547D\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">docker cp nginx:/etc/nginx /opt/docker-v-data/docker-nginx</span></span>
<span class="line"><span style="color:#676E95;"># \u91CD\u547D\u540D\u4E3A conf</span></span>
<span class="line"><span style="color:#A6ACCD;">mv nginx/ conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u8FD9\u65F6\u5019\u5C31\u53EF\u4EE5\u5C06\u5F53\u524D\u7684\u5BB9\u5668\u505C\u6389\u3001\u5220\u9664\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">docker stop nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">docker rm nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u65B0\u5EFA\u5BBF\u4E3B\u673A\u76EE\u5F55\u7528\u4E8E\u6302\u8F7D\u524D\u7AEF\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir front</span></span>
<span class="line"><span style="color:#676E95;"># \u6B64\u65F6\u7684\u6587\u4EF6\u7ED3\u6784\u4E3A\uFF1A</span></span>
<span class="line"><span style="color:#676E95;">#  [root@bogon:/opt/docker-v-data/docker-nginx]# tree</span></span>
<span class="line"><span style="color:#676E95;">#  .</span></span>
<span class="line"><span style="color:#676E95;">#  \u251C\u2500\u2500 conf</span></span>
<span class="line"><span style="color:#676E95;">#  \u2502\xA0\xA0 \u251C\u2500\u2500 conf.d</span></span>
<span class="line"><span style="color:#676E95;">#  \u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 default.conf</span></span>
<span class="line"><span style="color:#676E95;">#  \u2502\xA0\xA0 \u251C\u2500\u2500 fastcgi_params</span></span>
<span class="line"><span style="color:#676E95;">#  \u2502\xA0\xA0 \u251C\u2500\u2500 mime.types</span></span>
<span class="line"><span style="color:#676E95;">#  \u2502\xA0\xA0 \u251C\u2500\u2500 modules -&gt; /usr/lib/nginx/modules</span></span>
<span class="line"><span style="color:#676E95;">#  \u2502\xA0\xA0 \u251C\u2500\u2500 nginx.conf</span></span>
<span class="line"><span style="color:#676E95;">#  \u2502\xA0\xA0 \u251C\u2500\u2500 scgi_params</span></span>
<span class="line"><span style="color:#676E95;">#  \u2502\xA0\xA0 \u2514\u2500\u2500 uwsgi_params</span></span>
<span class="line"><span style="color:#676E95;">#  \u2514\u2500\u2500 front</span></span>
<span class="line"><span style="color:#676E95;">#  </span></span>
<span class="line"><span style="color:#676E95;">#  3 directories, 7 files</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u542F\u52A8\u6211\u4EEC\u8981\u7528\u7684 nginx\uFF0C\u547D\u540D\u4E3A mynginx\uFF0C\u8BBE\u7F6E\u6302\u8F7D\u76EE\u5F55\uFF08\u914D\u7F6E\u6587\u4EF6\u76EE\u5F55\u3001\u524D\u7AEF\u6587\u4EF6\u6302\u8F7D\u76EE\u5F55\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -di --name mynginx -p 80:80 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">		-v /opt/docker-v-data/docker-nginx/conf:/etc/nginx \\</span></span>
<span class="line"><span style="color:#A6ACCD;">		-v /opt/docker-v-data/docker-nginx/front:/usr/share/nginx/html \\</span></span>
<span class="line"><span style="color:#A6ACCD;">		nginx</span></span>
<span class="line"></span></code></pre></div><p>\u5230\u6B64\uFF0C\u4E00\u4E2A\u8BBE\u7F6E\u597D\u6302\u8F7D\u76EE\u5F55\u7684 Nginx \u5BB9\u5668\u4FBF\u542F\u52A8\u6210\u529F\u4E86\u3002\u8FD9\u65F6\u5019\u5728\u5BBF\u4E3B\u673A\u7684</p><ul><li><p><code>/opt/docker-v-data/docker-nginx/conf</code> \u76EE\u5F55\u4E0B\uFF1A\u8BBE\u7F6E\u914D\u7F6E\u6587\u4EF6</p></li><li><p><code>/opt/docker-v-data/docker-nginx/front</code> \u76EE\u5F55\u4E0B\uFF1A\u653E\u524D\u7AEF dist \u6587\u4EF6\u5939</p></li></ul>`,36),o=[p];function c(t,r,i,d,y,h){return n(),a("div",null,o)}const D=s(e,[["render",c]]);export{A as __pageData,D as default};
