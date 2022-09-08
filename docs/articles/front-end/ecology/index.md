---
Layout: page

title: 前端包管理器

outline: deep
---

# 包管理器

Npm、Yarn、Pnpm。

## Npm

npm 是 Node.js 标准的软件包管理器。

### 基本配置

```bash
# 查看 Node 版本
node -v

# 查看 Npm 版本
npm -v

# 切换为阿里源
npm config set registry https://registry.npm.taobao.org

# 检查是否安装成功
npm config get registry

# 还原为默认的源
npm config set registry https://registry.npmjs.org/
```

### 安装

```bash
# 查看已安装的全局软件包
npm list -g --depth 0

# 安装所有依赖。它会在 node_modules 文件夹（如果尚不存在则会创建）中安装项目所需的所有东西。
npm install 

# 安装单个软件包，可使用 @ 语法来安装 npm 软件包的指定版本
npm install <package-name>
npm install <package>@<version>

# 全局安装
npm install -g webpack@4.16.4

# 安装为开发依赖项，使用 -D 或者 --save-dev
npm install <package-name> -D
npm install <package-name> --save-dev
```

> 当使用 `npm install <package-name>` 安装 npm 软件包时，是将其安装为依赖项。
>
> 该软件包会被自动地列出在 package.json 文件中的 `dependencies` 列表下（在 npm 5 之前：必须手动指定 `--save`）。
>
> 当添加了 `-D` 或 `--save-dev` 标志时，则会将其安装为开发依赖项（会被添加到 `devDependencies` 列表）。
>
> 开发依赖是仅用于开发的程序包，在生产环境中并不需要。 例如测试的软件包、webpack 或 Babel。
>
> 当投入生产环境时，如果输入 `npm install` 且该文件夹包含 `package.json` 文件时，则会安装它们，因为 npm 会假定这是开发部署。
>
> 需要设置 `--production` 标志（`npm install --production`），以避免安装这些开发依赖项。

### 更新与卸载

```bash
# 更新所有包，npm 会检查所有软件包是否有满足版本限制的更新版本。
npm update
# 更新单个指定的软件包
npm update <package-name>

# 卸载包
npm uninstall <package-name>

# 如果使用 -S 或 --save 标志，会移除 package.json 文件中的引用
npm uninstall -S <package-name>

# 如果包是开发依赖项（列在 package.json 的 devDependencies），必须使用 -D 或 --save-dev 标志从文件中移除
npm uninstall -D <package-name>

# 如果该软件包是全局安装的，则需要添加 -g 或 --global 标志：
npm uninstall -g <package-name>
```

### 查看包的版本

```bash
# 查看所有已安装的 npm 软件包（包括它们的依赖包）的最新版本
npm list

# 获取特定软件包的版本
npm list cowsay

# 适用于全局安装的软件包
npm list -g

# 仅获取顶层的软件包（基本上就是告诉 npm 要安装并在 package.json 中列出的软件包）
npm list --depth=0

# 查看软件包在 npm 仓库上最新的可用版本
npm view [package_name] version

# 查看指定包的历史版本
npm view [package_name] versions
```

### npm 将软件包装在哪儿了

当使用 `npm` 安装软件包时，可以执行两种安装类型：

- **本地安装**：软件包会被安装到当前文件树中的 `node_modules` 子文件夹下
- **全局安装**：使用 `-g` 标志可以执行全局安装.在这种情况下，`npm` 不会将软件包安装到本地文件夹下，而是使用全局的位置。

默认情况下，当输入 `npm install` 命令时，例如：

```bash
# 默认情况下使用本地安装，软件包会被安装到当前文件树中的 node_modules 子文件夹下
# 并且 npm 还会在 package.json 文件的 dependencies 属性中添加 lodash 条目
npm install lodash

# 使用 -g 标志可以执行全局安装
# 在这种情况下，npm 不会将软件包安装到本地文件夹下，而是使用全局的位置。
npm install -g lodash
```

**全局的位置到底在哪里？**

`npm root -g` 命令会告知其在计算机上的确切位置。

在 macOS 或 Linux 上，此位置可能是 `/usr/local/lib/node_modules`。

在 Windows 上，可能是 `C:\\Users\\YOU\\AppData\\Roaming\\npm\\node_modules`。

但是，如果使用 `nvm` 管理 Node.js 版本，则该位置会有所不同。例如，使用 `nvm`，则软件包的位置可能为 `/Users/joe/.nvm/versions/node/v8.9.0/lib/node_modules`。

### 如何使用 npm 安装的包

假设使用 npm 命令安装了工具库 `lodash`。该软件包会被安装到本地的 `node_modules` 文件夹中。若要在代码中使用它，则只需使用 `require` 将其导入到程序中：

```jsx
const _ = require('lodash')
```

但是如果软件包是可执行文件，它会把可执行文件放到 `node_modules/.bin/` 文件夹下。

验证这一点的简单示例是 [cowsay](https://www.npmjs.com/package/cowsay)。

cowsay 软件包提供了一个命令行程序，可以执行该程序以使母牛说些话（以及其他动物也可以说话）。

当使用 `npm install cowsay` 安装软件包时，它会在 node_modules 文件夹中安装自身以及一些依赖包。可以输入 `./node_modules/.bin/cowsay`来运行它，但是最新版本的 npm（自 5.2 起）中包含的 npx 是更好的选择。 只需运行：

```bash
npx cowsay
# npx 会找到程序包的位置
```

## Yarn

### 安装与配置

```bash
# 全局安装 yarn
npm install -g yarn

# 更新 yarn 到最新版本
yarn set version latest
yarn set version from sources

# 查看 yarn 版本
yarn --version
yarn -v
```

### 命令

```bash
# 显示命令列表
yarn help

# 初始化新项目
yarn init

# 安装所有依赖
yarn
yarn install

# 添加依赖项
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]

# 将依赖项添加到不同的以来类别中
yarn add [package] --dev  # dev dependencies
yarn add [package] --peer # peer dependencies

# 更新依赖
yarn up [package]
yarn up [package]@[version]
yarn up [package]@[tag]

# 删除依赖
yarn remove [package]
```

## Pnpm

## 参考文档

- [npm 包管理器简介 (nodejs.cn)](http://nodejs.cn/learn/an-introduction-to-the-npm-package-manager)
- [1 - 简介| Yarn 中文文档 ](https://www.yarnpkg.cn/getting-started)
- [安装 | pnpm](https://pnpm.io/zh/installation)