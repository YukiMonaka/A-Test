<template>
  <div class="js">
    <h1 class="h1-class">Javascript简介</h1>
    <div class="html-info">
      <h2 class="h2-sy">什么是Javascript?</h2>
      <ul class="textlist">
        <li>JavaScript 是一种轻量级的编程语言</li>
        <li>JavaScript 是可插入 HTML 页面的编程代码。</li>
        <li>JavaScript 插入 HTML 页面后，可由所有的现代浏览器执行</li>
        <li>JavaScript 很容易学习</li>
        <li>JavaScript可以改变 HTML 内容</li>
        <li>JavaScript可以改变 HTML 图像</li>
        <li>JavaScript可以改变 HTML 样式</li>
      </ul>
    </div>
    <router-link to='/'>
      <div class="back-btn">返回</div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'js'
  }
</script>

<style lang="stylus" scoped>

 .js
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
