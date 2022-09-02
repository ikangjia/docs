<template>
  <div id="friend-card" v-for="item in friends">
    <img style="width: 50px;height: 50px;border-radius: 10px;margin: 15px auto" :src="item.avatar" alt="avatar">
    <a style="color: white;font-weight: bold" :href="item.url" target="_blank">{{ item.name }}</a>
    <p style="margin-top: 3px;margin-bottom: 1px; color: #8c8686;font-size: 15px">{{ item.title }}</p>
    <p style="margin-top: 3px; font-size: 14px">{{ item.desc }}</p>
  </div>
</template>

<script>
export default {
  name: "Friend",
  data() {
    return {
      friends: [
        {
          avatar: 'https://avatars.githubusercontent.com/u/61862961?v=4',
          name: '林深时觉寒',
          title: 'Java 程序员 ｜ 前端小白菜',
          url: 'https://ikangjia.cn/',
          desc: 'Every dog has its day.',
          links: [
            {icon: 'github', link: 'https://github.com/ikangjia'},
            {icon: 'twitter', link: 'https://twitter.com/ikangjia'},
          ]
        },
        {
          avatar: 'https://www.github.com/yyx990803.png',
          name: 'Evan You',
          title: 'Creator',
          url: 'https://evanyou.me/',
          desc: '拉来凑数的',
          links: [
            {icon: 'github', link: 'https://github.com/yyx990803'},
            {icon: 'twitter', link: 'https://twitter.com/youyuxi'}
          ]
        },
        {
          avatar: 'https://avatars.githubusercontent.com/u/61862961?v=4',
          name: '林深时觉寒',
          title: 'Java 程序员 ｜ 前端小白菜',
          url: 'https://ikangjia.cn/',
          desc: 'Every dog has its day.',
          links: [
            {icon: 'github', link: 'https://github.com/ikangjia'},
            {icon: 'twitter', link: 'https://twitter.com/ikangjia'},
          ]
        },
        {
          avatar: 'https://www.github.com/yyx990803.png',
          name: 'Evan You',
          title: 'Creator',
          url: 'https://evanyou.me/',
          desc: '拉来凑数的',
          links: [
            {icon: 'github', link: 'https://github.com/yyx990803'},
            {icon: 'twitter', link: 'https://twitter.com/youyuxi'}
          ]
        },
        {
          avatar: 'https://avatars.githubusercontent.com/u/61862961?v=4',
          name: '林深时觉寒',
          title: 'Java 程序员 ｜ 前端小白菜',
          url: 'https://ikangjia.cn/',
          desc: 'Every dog has its day.',
          links: [
            {icon: 'github', link: 'https://github.com/ikangjia'},
            {icon: 'twitter', link: 'https://twitter.com/ikangjia'},
          ]
        },
        {
          avatar: 'https://www.github.com/yyx990803.png',
          name: 'Evan You',
          title: 'Creator',
          url: 'https://evanyou.me/',
          desc: '拉来凑数的',
          links: [
            {icon: 'github', link: 'https://github.com/yyx990803'},
            {icon: 'twitter', link: 'https://twitter.com/youyuxi'}
          ]
        },
        {
          avatar: 'https://avatars.githubusercontent.com/u/61862961?v=4',
          name: '林深时觉寒',
          title: 'Java 程序员 ｜ 前端小白菜',
          url: 'https://ikangjia.cn/',
          desc: 'Every dog has its day.',
          links: [
            {icon: 'github', link: 'https://github.com/ikangjia'},
            {icon: 'twitter', link: 'https://twitter.com/ikangjia'},
          ]
        },
        {
          avatar: 'https://www.github.com/yyx990803.png',
          name: 'Evan You',
          title: 'Creator',
          url: 'https://evanyou.me/',
          desc: '拉来凑数的',
          links: [
            {icon: 'github', link: 'https://github.com/yyx990803'},
            {icon: 'twitter', link: 'https://twitter.com/youyuxi'}
          ]
        },
        {
          avatar: 'https://avatars.githubusercontent.com/u/61862961?v=4',
          name: '林深时觉寒',
          title: 'Java 程序员 ｜ 前端小白菜',
          url: 'https://ikangjia.cn/',
          desc: 'Every dog has its day.',
          links: [
            {icon: 'github', link: 'https://github.com/ikangjia'},
            {icon: 'twitter', link: 'https://twitter.com/ikangjia'},
          ]
        },
        {
          avatar: 'https://www.github.com/yyx990803.png',
          name: 'Evan You',
          title: 'Creator',
          url: 'https://evanyou.me/',
          desc: '拉来凑数的',
          links: [
            {icon: 'github', link: 'https://github.com/yyx990803'},
            {icon: 'twitter', link: 'https://twitter.com/youyuxi'}
          ]
        },
      ]
    }
  }
}
</script>

<style scoped>
#friend-card {
  text-align: center;
  vertical-align: center;
  color: white;
  display: inline-block;
  margin-left: 20px;
  margin-bottom: 20px;
  border-radius: 20px;
  width: 220px;
  height: 200px;
  background-color: #2f2e2c;
}
</style>