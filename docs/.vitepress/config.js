import NavData from "./nsConfig/navData";
import SidebarData from "./nsConfig/sidebarData";

export default {
    title: '林深时觉寒',
    description: 'Just playing around.',
    base: '/docs/',
    head: [],

    markdown: {
      toc: {level: [2,3]}
    },

    themeConfig: {
        siteTitle: '林深时觉寒',
        nav: NavData,
        sidebar: SidebarData,
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