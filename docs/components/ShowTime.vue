<template>
<div>
  <h3>测试 vue 代码：vue 里的标题不会出现在页面右侧目录栏，坑啊</h3>
  {{ new Date() }}
  <input type="text" value="hello ">
  <button style="color: red;border-style: dashed;" @click="alert('hello')">hello</button>
  <a href="https://baidu.com/">aaaaaaaaaaaaaaaa</a>
</div>
</template>

<script>
export default {
  name: "ShowTime"
}
</script>

<style scoped>

</style>