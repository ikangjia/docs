---
title: 安装
outline: deep
---

# {{ $frontmatter.title }}
::: tip 注意：
以下涉及所有命令均运行在 CentOS 7.x 环境下。
:::

## Docker 版本
随着 Docker 的飞速发展，企业级功能的上线，更好的服务意味着需要支付一定的费用，目前 Docker 被分为两个版本：

- community-edition 社区版
- enterprise-edition 企业版

Docker 企业版（EE）专为企业开发和 IT 团队设计，可在大规模生产中构建，运送和运行关键业务应用程序。Docker EE 集成，认证和支持，为企业提供业界最安全的容器平台，实现所有应用程序的现代化。作为一个以应用为中心的平台，Docker EE 旨在加速和保护整个软件供应链，从开发到在任何基础设施上运行的生产。

学习 Docker 使用 CE 社区版即可。
## 系统要求
官网提示如果要安装 Docker Engine，您需要一个 CentOS 7 以及以上的稳定版本。
## 安装

第一步：较旧的 Docker 版本为 docker 或 docker-engine。 如果已安装这些程序，请卸载它们以及相关的依赖项。
```sh
sudo yum remove docker \\
                  docker-client \\
                  docker-client-latest \\
                  docker-common \\
                  docker-latest \\
                  docker-latest-logrotate \\
                  docker-logrotate \\
                  docker-engine
```

第二步：设置 yum 源。安装 yum-utils 软件包（提供了 yum-config-manager 程序）并设置稳定的 yum 源方便下载 Docker Engine。
```sh
# 安装 yum-utils
sudo yum install -y yum-utils

# 设置 yum 源为阿里云方便下载 Docker Engine
sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

第三步：安装 Docker，安装时需要输入 y 若干次。
```shell
sudo yum install docker-ce docker-ce-cli containerd.io
```

第四步：校验安装
```shell
docker -v
docker version
```

第五步：配置镜像加速（需要先启动下 Docker，否则文件保存不成功

Docker 从 Docker Hub 拉取镜像，因为是从国外获取，所以速度较慢。可以通过配置国内镜像源的方式，从国内获取镜像，提高拉取速度。这里使用

- 中国科学技术大学（LUG@USTC）的开源镜像：[https://docker.mirrors.ustc.edu.cn](https://docker.mirrors.ustc.edu.cn/)
- 网易的开源镜像：[http://hub-mirror.c.163.com](http://hub-mirror.c.163.com/)

编辑文件 `daemon.json`。
```shell
vi /etc/docker/daemon.json
```
在文件中输入以下内容并保存。
```json
{
  "registry-mirrors": ["http://hub-mirror.c.163.com", "https://docker.mirrors.ustc.edu.cn"]
}
```
重新加载配置信息及重启 Docker 服务。
```shell
# 重新加载某个服务的配置文件
sudo systemctl daemon-reload

# 重新启动 docker
sudo systemctl restart docker
```
## Docker 启停
```shell
# 启动 docker
sudo systemctl start docker

# 停止 docker
sudo systemctl stop docker

# 重启 docker
sudo systemctl restart docker

# 设置开机启动
sudo systemctl enable docker

# 查看 docker 状态
sudo systemctl status docker

# 查看 docker 内容器的运行状态
sudo docker stats

# 查看 docker 概要信息
sudo docker info

# 查看 docker 帮助文档
sudo docker --help
```
<!--@include: ../../../.vitepress/common/footer.md-->
![1](/images/1.jpg)
