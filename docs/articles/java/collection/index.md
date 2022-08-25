---
layout: doc

outline: deep
---
# Cent OS 设置
这里记载 Centod这里记载 Centod这里记载 Centod这里记载 Centod
这里记载 Centod这里记载 Centod这里记载 Centod
## Cent OS 设置

### 安装

使用 VMware Workstation Player 安装 CentOS7

用户名：ikangjia、root

密码：123456

安装完后，系统默认会选择 ikangjia 用户去登录，输入 ikangjia 的密码 123456 即可登录；

登录后，便看到 CentOS 经典桌面。右键打开终端，可以看到当前命令行是 ikangjia，输入 su ，在输入密码 123456，即可切换为 root 用户。

```shell
[ikangjia@localhost ~]$ su
Password: 
[root@localhost ikangjia]# cd
[root@localhost ~]# cd /home/
[root@localhost home]# ll
total 4
drwx------. 15 ikangjia ikangjia 4096 Nov 30 00:38 ikangjia
[root@localhost home]# 
```

### 设置终端颜色

如果当前是 root 登录，则会设置 root 用户的命令行颜色；想要设置别的用户，需要单独分别去执行这个。

```bash
vim ~/.bashrc

# 添加一行 
PS1='[\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]]\$ '

source ~/.bashrc
```

### 文件位置

所有自己的数据存于 `/opt` 下

## 安装 tree

`yum install -y tree`

## 安装 Docker

安装过程参考笔记：[Docker 常用命令速览 (notion.site)](https://ikangjia.notion.site/Docker-0a9116b190e1414390aebb56c2fb5db0)

新建 `/opt/docker-v-data` 为 Docker 容器在宿主机的挂载目录。

例如 MySQL 的数据挂载目录为 `/opt/docker-v-data/docker_mysql`

## 安装 MySQL

在 Docker 里安装 MySQL，同时将数据挂载在 `/opt/docker-v-data/docker_mysql` 目录。具体命令操作如下

```bash
docker pull mysql

# -v 宿主机目录:容器内目录
docker run -di --name mysql8 -p 3306:3306 -v /opt/docker-v-data/docker_mysql/conf:/etc/mysql/conf.d -v /opt/docker-v-data/docker_mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123 mysql

# 进入容器
docker exec -it mysql8 /bin/bash

# 使用 MySQL 命令打开客户端
mysql -uroot -p123 --default-character-set=utf8
```

## 安装 ntpdate 设置时间

```bash
yum -y install ntp

ntpdate 1.cn.pool.ntp.org # 根据网络时间校正

tzselect # 选择时区：5Asia->9 China->1->Beijing Time ->1 yes

echo 'TZ='Asia/Shanghai'; export TZ' > ~/.profile # 时区信息写入配置文件

hwclock -w  # 软件时间同步至硬件时间

date # 查看当前时间
```

## 安装 Redis

```bash
docker pull redis

docker run -di --name redis-6379 -p 6379:6379 redis
```

以上命令可以在 Docker 里启动一个 Redis 服务。

```bash
# 进入容器
docker exec -it 容器id /bin/bash

# 在容器内，可以使用 redis-cli 连接 redis 服务器
root@d155f48d498e:/data# redis-cli
127.0.0.1:6379> keys *
1) "user:sign:5:202112"
127.0.0.1:6379> 
```

### Another Redis Desktop Manager

[Another-Redis-Desktop-Manager](https://github.com/qishibo/AnotherRedisDesktopManager/releases)：免费的 Redis 客户端 GUI，支持 Win、Mac、Mac M1、Linux（这个名字 emmm 不知道是不是……）

## 安装 Nginx

```bash
# 拉取镜像
docker pull nginx

# 创建 Nginx 容器，因为要拷贝一些文件以及设置挂载目录，需要先启动一个nginx容器
docker run -di --name mynginx -p 80:80 nginx

# 创建宿主机目录，用于存放挂载文件
mkdir docker-nginx

# 将容器内的配置文件拷贝到宿主机新建的文件夹内，并重命名
docker cp nginx:/etc/nginx /opt/docker-v-data/docker-nginx
# 重命名为 conf
mv nginx/ conf

# 这时候就可以将当前的容器停掉、删除了
docker stop nginx
docker rm nginx

# 新建宿主机目录用于挂载前端文件
mkdir front
# 此时的文件结构为：
#  [root@bogon:/opt/docker-v-data/docker-nginx]# tree
#  .
#  ├── conf
#  │   ├── conf.d
#  │   │   └── default.conf
#  │   ├── fastcgi_params
#  │   ├── mime.types
#  │   ├── modules -> /usr/lib/nginx/modules
#  │   ├── nginx.conf
#  │   ├── scgi_params
#  │   └── uwsgi_params
#  └── front
#  
#  3 directories, 7 files

# 启动我们要用的 nginx，命名为 mynginx，设置挂载目录（配置文件目录、前端文件挂载目录）
docker run -di --name mynginx -p 80:80 \
		-v /opt/docker-v-data/docker-nginx/conf:/etc/nginx \
		-v /opt/docker-v-data/docker-nginx/front:/usr/share/nginx/html \
		nginx
```

到此，一个设置好挂载目录的 Nginx 容器便启动成功了。这时候在宿主机的 

- `/opt/docker-v-data/docker-nginx/conf` 目录下：设置配置文件

- `/opt/docker-v-data/docker-nginx/front` 目录下：放前端 dist 文件夹

