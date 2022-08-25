---
layout: page
---
<script setup>
import {VPTeamPage,VPTeamPageTitle,VPTeamMembers} from 'vitepress/theme';

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/61862961?v=4',
    name: '林深时觉寒',
    title: 'Java 程序员 ｜ 前端小白菜',
    desc: 'Every dog has its day.',
    links: [
      { icon: 'github', link: 'https://github.com/ikangjia' },
      { icon: 'twitter', link: 'https://twitter.com/ikangjia' }
    ]
  },
{
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    desc: '强行拉来凑数的.',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },

];

const friendTemplate = 
{
    avatar: 'https://avatars.githubusercontent.com/u/61862961?v=4',
    name: '林深时觉寒',
    title: 'Java 程序员 ｜ 前端小白菜',
    desc: 'Every dog has its day.',
    links: [
      { icon: 'github', link: 'https://github.com/ikangjia' },
      { icon: 'twitter', link: 'https://twitter.com/ikangjia' }
    ]
  }
;
console.log("Hi～ It's my pleasure to see you here.");
console.log("If you would like to exchange links with me, just refer to the following content " 
+ "and generate your own information,then email it to: " + window.btoa('ikangjia.cn@outlook.com'));
console.log(JSON.stringify(friendTemplate));
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      友情链接 👭
    </template>
    <template #lead>
      互换友链：Press F12 to Console
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"  
    size="small"
  />
</VPTeamPage>
