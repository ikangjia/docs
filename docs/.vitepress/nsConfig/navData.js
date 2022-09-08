const navData = [
    {
        text: '别点我',
        link: '/articles/way2god/',
    },
    {
        text: 'Java',
        items: [
            {
                text: '语法篇',
                items: [
                    {text: '基础语法', link: '/articles/java/base/'},
                    {text: 'Java8+新特性', link: '/articles/java/newfeature/'},
                    {text: '高级特性', link: '/articles/java/advanced/'},
                ]
            },
            {
                text: '主题篇',
                items: [
                    {text: 'Java 虚拟机篇', link: '/articles/java/jvm/'},
                    {text: '集合框架篇', link: '/articles/java/collection/'},
                    {text: '并发编程篇', link: '/articles/java/concurrent/'},
                    {text: 'IO 流与文件操作', link: '/articles/java/io/'},
                    {text: '网络编程篇', link: '/articles/java/network/'},
                ]
            }
        ]
    },
    {
        text: '后端生态',
        items: [
            {
                text: 'Spring 家族',
                items: [
                    {text: 'Java Web 基础', link: '/articles/spring-family/javaweb/'},
                    {text: 'Spring', link: '/articles/spring-family/spring/'},
                    {text: 'Spring MVC', link: '/articles/spring-family/springmvc/'},
                    {text: 'Spring Boot', link: '/articles/spring-family/springboot/'},
                ]
            },
            {
                text: '框架与中间件',
                items: [
                    {text: 'Mybatis', link: '/articles/middleware/mybatis/'},
                    {text: 'RabbitMQ', link: '/articles/middleware/rabbitmq/'},
                    {text: 'Kafka', link: '/articles/middleware/kafka/'}
                ]
            },
        ]
    },
    {
        text: '数据库',
        items: [
            {
                text: '关系型',
                items: [
                    {text: '数据库概论', link: '/articles/database/intro/'},
                    {text: 'SQL 语法', link: '/articles/database/sql/'},
                    {text: 'MySQL', link: '/articles/database/mysql/'},
                ]
            },
            {
                text: '非关系型',
                items: [
                    {text: 'Redis', link: '/articles/database/redis/'},
                    {text: 'MongoDB', link: '/articles/database/mongodb/'},
                ]
            }
        ]
    },
    {
        text: '系统设计',
        items: [
            {
                text: '计算机基础',
                items: [
                    {text: '计算机基础', link: '/articles/cs/base/'},
                    {text: '数据结构与算法', link: '/articles/cs/dsaa/'},
                    {text: '设计模式', link: '/articles/cs/dp/'},
                ]
            },
            {
                text: '系统设计',
                items: [
                    {text: '系统设计', link: '/articles/system-design/design/'},
                    {text: '编码风格&代码质量', link: '/articles/system-design/code-quality/'},
                    {text: '第三方工具包', link: '/articles/system-design/tools/'},
                ]
            },
        ]
    },
    {
        text: '前端生态',
        items: [
            {
                text: '基础',
                items: [
                    {text: 'HTML', link: '/articles/front-end/html/'},
                    {text: 'CSS', link: '/articles/front-end/css/'},
                    {text: 'JavaScript', link: '/articles/front-end/js/'}
                ]
            },
            {
                text: '生态',
                items: [
                    {text: '基础', link: '/articles/front-end/ecology/'},
                ]
            },
        ]
    },
    {
        text: 'DevOps',
        items: [
            {
                text: '基础',
                items: [
                    {text: 'Linux', link: '/articles/linux/'},
                    {text: 'Git', link: '/articles/git/'},
                ]
            },
            {
                text: '构建',
                items: [
                    {text: 'Maven', link: '/articles/dev-ops/maven/'},
                    {text: 'Gradle', link: '/articles/dev-ops/maven/'},
                ]
            },
            {
                text: '部署',
                items: [
                    {text: 'Docker', link: '/articles/docker/'},
                    {text: 'Nginx', link: '/articles/dev-ops/nginx/'},
                    {text: 'Tomcat', link: '/articles/dev-ops/tomcat/'},
                ]
            },
        ]
    },
    {
        text: '网站指北',
        items: [
            {text: '关于网站', link: '/guide/'},
            {text: '闲言几句', link: '/guide/words/'},
            {text: '友情链接', link: '/guide/friends.md'},
            {text: '了解更多', link: 'https://ikangjia.cn/'},
        ]
    },
    // {text: '友情链接', link: '/guide/friends.md'}
]
export default navData