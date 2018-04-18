<template>
  <!--E秒商品预告-->
  <div class="advance">
    <img :src="url" alt="">
  </div>
</template>

<script>
  export default {
    props:{
      url:String
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .advance
    width 100%
    height 160px
    img
      width 100%
      height 100%
      display block


</style>
