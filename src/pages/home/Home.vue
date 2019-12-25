<template>
  <div>
    <home-swiper></home-swiper>
    <home-web></home-web>
  </div>
</template>

<script>
  import HomeSwiper from './com/Swiper'
  import HomeWeb from './com/web'

  export default {
    name: 'Home',
    components: {
      HomeSwiper,
      HomeWeb
    }
  }
</script>

<style scoped>
</style>
