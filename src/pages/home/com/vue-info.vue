<template>
  <div class="vue">
    <h1 class="h1-class">Vue.js简介</h1>
    <div class="html-info">
      <h2 class="h2-sy">什么是Vue.js?</h2>
      <ul class="textlist">
        <li>Vue.js是一套构建用户界面的渐进式框架。</li>
        <li>Vue 采用自底向上增量开发的设计。</li>
        <li>Vue.js 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件</li>
        <li>学习Vue.js之我们前需要掌握熟练HTML,CSS,Javascript作为储备。</li>
        <li>Vue.js是三大前端框架之一。</li>
      </ul>
    </div>
    <router-link to='/'>
      <div class="back-btn">返回</div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'vue'
  }
</script>

<style lang="stylus" scoped>

 .vue
  padding:1em
 .h1-class
  font-size:3em
 .h2-sy
  font-size:2em
  font-weight:bold
 ul.textlist
  list-style:square outside
 .textlist li
  margin-top:1em
  margin-left:1em
 .back-btn
  font-size:2em
  text-align:center
  background-color:#eee
  margin:1em 0
</style>
