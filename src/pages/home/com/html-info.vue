<template>
  <div class="html">
    <h1 class="h1-class">HTML5简介</h1>
    <div class="html-info">
      <h2 class="h2-sy">什么是HTML？</h2>
      <ul class="textlist">
        <li>HTML 是用来描述网页的一种语言。</li>
        <li>HTML 不是一种编程语言，而是一种标记语言</li>
        <li>标记语言是一套标记标签 (markup tag)</li>
        <li>HTML 使用标记标签来描述网页</li>
        <li>HTML 文档包含了HTML 标签及文本内容</li>
        <li>HTML文档也叫做 web 页面</li>
        <li>HTML 标签是由尖括号包围的关键词，比如 < html > </li>
      </ul>
    </div>
    <router-link to='/'>
      <div class="back-btn">返回</div>
    </router-link>
  </div>
</template>

<script>

  export default {
    name: 'html'
  }
</script>

<style lang="stylus" scoped>
.html
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
