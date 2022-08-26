import NavData from "./nsConfig/navData";
import SidebarData from "./nsConfig/sidebarData";

export default {
    title: '林深时觉寒',
    description: 'Just playing around.',
    base: '/docs/',
    head: [],

    lastUpdated: true,

    markdown: {
        lineNumber: true,
      toc: {level: [2,3]}
    },

    themeConfig: {
        siteTitle: '林深时觉寒',
        logo: 'https://avatars.githubusercontent.com/u/61862961?v=4',
        nav: NavData,
        sidebar: SidebarData,
        editLink: {
            pattern: 'https://github.com/ikangjia/docs/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        socialLinks:
            [
                {icon: 'github', link: 'https://github.com/ikangjia'},
            ],
        footer:
            {
                message: 'Released under the MIT License.',
                copyright: `Copyright © 2022-${new Date().getFullYear()} 林深时觉寒`
            }
    }
}