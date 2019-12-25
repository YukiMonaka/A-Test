<template>
  <div class="css">
    <h1 class="h1-class">CSS3简介</h1>
    <div class="html-info">
      <h2 class="h2-sy">什么是CSS？</h2>
      <ul class="textlist">
        <li>CSS 指层叠样式表 (Cascading Style Sheets)</li>
        <li>样式定义如何显示 HTML 元素</li>
        <li>样式通常存储在样式表中</li>
        <li>把样式添加到 HTML中，是为了解决内容与表现分离的问题</li>
        <li>外部样式表可以极大提高工作效率</li>
        <li>外部样式表通常存储在 CSS 文件中</li>
        <li>多个样式定义可层叠为一个</li>
      </ul>
    </div>
    <router-link to='/'>
      <div class="back-btn">返回</div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'css'
  }
</script>

<style lang="stylus" scoped>

.css
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
