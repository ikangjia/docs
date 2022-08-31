const sidebarData = {
    // Java
    '/articles/java/': [
        {
            text: '新特性',
            items: [
                {text: '新特性概览', link: '/articles/java/newfeature/'},
                {text: '函数式接口与 Lambda 表达式', link: '/articles/ceshi/本地虚拟机信息'},
                {text: 'Optional 类型', link: '/articles/ceshi/本地虚拟机信息'},
                {text: '流库', link: '/articles/ceshi/本地虚拟机信息'},
            ]
        },
        {
            text: '基础语法',
            items: [
                {text: 'Java 简介', link: '/articles/java/base/'},
                {text: '常量与变量、注释', link: '/articles/java/base/7'},
                {text: '数据类型', link: '/articles/java/base/1'},
                {text: '运算符', link: '/articles/java/base/1'},
                {text: '数组', link: '/articles/java/base/2'},
                {text: '大数', link: '/articles/java/base/2'},
                {text: '字符串', link: '/articles/java/base/0'},
                {text: '条件与循环', link: '/articles/java/base/4'},
                {text: '类与对象', link: '/articles/java/base/类与对象.md'},
                {text: '继承', link: '/articles/java/base/类与对象.md'},
                {text: '接口、内部类', link: '/articles/java/base/类与对象.md'},
                {text: '枚举类型', link: '/articles/java/base/类与对象.md'},
            ]
        },
        {
            text: '高级特性',
            items: [
                {text: '反射', link: '/articles/java/advanced/'},
                {text: '泛型', link: '/articles/ceshi/'},
                {text: '注解', link: '/articles/ceshi/'},
                {text: '异常', link: '/articles/ceshi/'},
                {text: '断言与日志', link: '/articles/ceshi/'},
                {text: '本地方法', link: '/articles/ceshi/'},
                {text: 'Java 中的安全', link: '/articles/ceshi/'},
                {text: '本地方法', link: '/articles/ceshi/'},
                {text: 'JDBC', link: '/articles/ceshi/'},
            ]
        },
        {
            text: '并发编程篇',
            items: [
                {text: '并发编程篇概况', link: '/articles/java/concurrent/'},
            ]
        },
        {
            text: '集合框架篇',
            items: [
                {text: '集合框架篇概况', link: '/articles/java/collection/'},
            ]
        },
        {
            text: 'IO 流与文件操作篇',
            items: [
                {text: 'IO 流与文件操作篇概况', link: '/articles/java/io/'},
            ]
        },
        {
            text: '网络编程篇',
            items: [
                {text: '网络编程篇概况', link: '/articles/java/network/'},
            ]
        },
        {
            text: 'Java 虚拟机篇',
            items: [
                {text: 'Java 虚拟机篇概况', link: '/articles/java/jvm/'},
            ]
        },
    ],

    // Spring 相关
    '/articles/spring-family/': [
        {
            text: 'Spring Boot',
            items: [
                {text: '自动配置原理', link: '/articles/spring-family/springboot/'},
            ]
        },
        {
            text: 'Java Web',
            items: [
                {text: 'Tomcat', link: '/articles/spring-family/javaweb/'},
            ]
        },
        {
            text: 'Spring',
            items: [
                {text: '依赖注入', link: '/articles/spring-family/spring/'},
            ]
        },
        {
            text: 'Spring MVC',
            items: [
                {text: '依赖注入', link: '/articles/spring-family/springmvc/'},
            ]
        },
    ],

    // 框架与中间件
    '/articles/middleware/': [
        {
            text: 'Mybatis',
            items: [
                {text: '概况', link: '/articles/middleware/mybatis/'},
            ]
        },
        {
            text: 'RabbitMQ',
            items: [
                {text: '概况', link: '/articles/middleware/rabbitmq/'},
            ]
        },
        {
            text: 'Kafka',
            items: [
                {text: '概况', link: '/articles/middleware/kafka/'},
            ]
        },
    ],

    // 系统设计：设计模式、总结系统设计与架构技巧、开源组件
    '/articles/system-design/': [
        {
            text: '系统设计',
            items: [
                {text: '概况', link: '/articles/system-design/design/'},
            ]
        },
        {
            text: '编码风格与代码质量',
            items: [
                {text: '概况', link: '/articles/system-design/code-quality/'},
            ]
        },
        {
            text: '第三方工具包',
            items: [
                {text: '概况', link: '/articles/system-design/tools/'},
            ]
        },
    ],

    // 数据库相关
    '/articles/database/': [
        {
            text: '数据库系统概论',
            items: [
                {text: '概况', link: '/articles/database/intro/'},
            ]
        },
        {
            text: 'SQL 百炼',
            items: [
                {text: '概况', link: '/articles/database/sql/'},
            ]
        },
        {
            text: 'MySQL',
            items: [
                {text: '概况', link: '/articles/database/mysql/'},
            ]
        },
        {
            text: 'Redis',
            items: [
                {text: '概况', link: '/articles/database/redis/'},
            ]
        },
        {
            text: 'Mongo DB',
            items: [
                {text: '概况', link: '/articles/database/mongodb/'},
            ]
        }
    ],

    // 前端相关：基础、css、js、前端生态（大前端）
    '/articles/front-end/html/': [
        {
            text: '前端基础',
            items: [
                {text: '概况', link: '/articles/front-end/html/'},
            ]
        },
        {
            text: 'HTML',
            items: [
                {text: '概况', link: '/articles/front-end/css/'},
            ]
        }
    ],
    '/articles/front-end/css/': [
        {
            text: '实战',
            items: [
                {text: '登陆框', link: '/articles/front-end/html/'},
                {text: '两列布局', link: '/articles/front-end/html/'},
                {text: '三列布局', link: '/articles/front-end/html/'},
            ]
        },
        {
          text: '基础',
          items: [
              {text: '基础', link: '/articles/front-end/css/'},
              {text: '媒体查询', link: '/articles/front-end/html/'},
              {text: '颜色、背景、渐变', link: '/articles/front-end/html/'},
              {text: '字体', link: '/articles/front-end/html/'},
              {text: '文本', link: '/articles/front-end/html/'},
          ]
        },
        {
            text: '视觉格式化',
            items: [
                {text: '单位和值', link: '/articles/front-end/html/'},
                {text: '元素显示方式', link: '/articles/front-end/html/'},
                {text: '行内元素', link: '/articles/front-end/html/'},
                {text: '媒体查询', link: '/articles/front-end/html/'},
            ]
        },
        {
            text: '选择符',
            items: [
                {text: '基础选择符', link: '/articles/front-end/html/'},
                {text: '属性选择符', link: '/articles/front-end/html/'},
                {text: '伪类选择符', link: '/articles/front-end/html/'},
                {text: '伪元素选择符', link: '/articles/front-end/html/'},
            ]
        },
        {
            text: '盒模型',
            items: [
                {text: '基础', link: '/articles/front-end/html/'},
                {text: '内边距', link: '/articles/front-end/html/'},
                {text: '边框', link: '/articles/front-end/html/'},
                {text: '轮廓', link: '/articles/front-end/html/'},
                {text: '外边距', link: '/articles/front-end/html/'},
            ]
        },
        {
            text: '布局',
            items: [
                {text: '浮动', link: '/articles/front-end/css/1'},
                {text: '定位', link: '/articles/front-end/css/2'},
                {text: 'Flex 弹性盒布局', link: '/articles/front-end/css/3'},
                {text: '栅栏布局', link: '/articles/front-end/css/4'},
                {text: '表格布局', link: '/articles/front-end/css/5'},
            ]
        },
        {
            text: '变形、过渡、动画',
            items: [
                {text: '概况', link: '/articles/front-end/css/'},
            ]
        },
    ],
    '/articles/front-end/js/': [
        {
            text: '基础语法',
            items: [
                {text: '初识 JavaScript', link: '/articles/front-end/html/'},
                {text: 'HTML 中的 JavaScript', link: '/articles/front-end/html/'},
                {text: '变量与数据类型', link: '/articles/front-end/html/'},
                {text: '循环与流程控制', link: '/articles/front-end/html/'},
                {text: '引用类型', link: '/articles/front-end/html/'},
            ]
        },
        {
            text: '进阶',
            items: [
                {text: '函数', link: '/articles/front-end/css/'},
                {text: '期约与异步函数', link: '/articles/front-end/css/'},
            ]
        },
        {
            text: 'BOM 和 DOM',
            items: [
                {text: '概况', link: '/articles/front-end/js/'},
            ]
        },
        {
            text: 'JavaScript API',
            items: [
                {text: '概况', link: '/articles/front-end/node/'},
            ]
        }
    ],
    '/articles/front-end/ecology/': [
        {
            text: 'Node.js',
            items: [
                {text: '概况', link: '/articles/front-end/html/'},
            ]
        },
        {
            text: 'Vue 相关',
            items: [
                {text: '概况', link: '/articles/front-end/css/'},
            ]
        },
        {
            text: 'Axios',
            items: [
                {text: '概况', link: '/articles/front-end/js/'},
            ]
        },
    ],

    // DevOps
    '/articles/dev-ops/': [
        {
            text: 'Maven',
            items: [
                {text: 'Maven概览', link: '/articles/dev-ops/maven/'},
            ]
        },
        {
            text: 'Gradle',
            items: [
                {text: 'Gradle概览', link: '/articles/dev-ops/gradle/'},
            ]
        },
        {
            text: 'Nginx',
            items: [
                {text: 'Nginx 概览', link: '/articles/dev-ops/nginx/'},
            ]
        },
        {
            text: 'Tomcat',
            items: [
                {text: 'Tomcat 概览', link: '/articles/dev-ops/tomcat/'},
            ]
        },
    ],
    // Docker
    '/articles/docker/':[
        {
            text: '基础',
            items: [
                {text: '虚拟化与容器', link: '/articles/docker/'},
                {text: '安装与配置', link: '/articles/docker/安装与配置'},
                {text: '构建镜像', link: '/articles/docker/构建镜像'},
                {text: '容器操作', link: '/articles/docker/容器操作'},
            ]
        },
        {
            text: '高级',
            items: [
                {text: '文件操作', link: '/articles/docker/文件操作'},
                {text: '容器编排', link: '/articles/docker/容器编排'},
                {text: '网络详解', link: '/articles/docker/网络详解 '},
            ]
        },
        {
            text: '实战',
            items: [
                {text: '构建常用应用', link: '/articles/docker/构建常用应用'},
                {text: '常用命令', link: '/articles/docker/常用命令'},
                {text: '常见问题', link: '/articles/docker/常见问题'},
            ]
        },
    ],

    // Linux
    '/articles/linux/':[
        {
            text: 'Linux',
            items: [
                {text: 'Vim 使用技巧', link: '/articles/linux/'},
            ]
        },
    ],

    // Git
    '/articles/git/':[
        {
            text: 'Git',
            items: [
                {text: '学习 Git', link: '/articles/git/'},
            ]
        },
    ],

    // cs 基础：计算机基础、数据结构与算法、设计模式
    '/articles/cs/': [
        {
            text: '计算机基础',
            items: [
                {text: '计算机基础概念', link: '/articles/cs/base/'},
            ]
        },
        {
            text: '数据结构与算法',
            items: [
                {text: '数据结构与算法概念', link: '/articles/cs/dsaa/'},
            ]
        },
        {
            text: '设计模式',
            items: [
                {text: '概况', link: '/articles/cs/dp/'},
            ]
        },
    ],

    // 网站指北
    '/guide/': [
        {
            text: '关于网站',
            items: [
                {text: '关于此网站', link: '/guide/'},
                {text: '本网站是如何搭建的', link: '/guide/本网站是如何搭建的'},
                {text: 'Vitepress 使用总结', link: '/guide/Vitepress 使用总结'},
                {text: '优秀网站集锦', link: '/guide/sites'},
            ]
        },
        {
            text: '小镇做题家的小作文',
            items: [
                {text: '闲扯几句', link: '/guide/words/'},
                {text: '回忆在北京', link: '/guide/words/4'},
                {text: '泰山之行', link: '/guide/words/2'},
                {text: '我在天津等你', link: '/guide/words/1'},
            ]
        },
        {
            text: '未来计划',
            items: [
                {text: '友情链接', link: '/guide/friends'},
                {text: '再说吧', link: '/guide/future/'},
            ]
        },
    ]
}
export default sidebarData