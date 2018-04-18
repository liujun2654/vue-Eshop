<template>
  <!--类列-->
  <div class="custom_tite">
    <div class="custom_left">
      <img :src="url" alt="">
    </div>
    <div class="custom_right">
      <a href="">
        <img src="./imgs/cp/q.jpg" alt="">
      </a>
    </div>
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
  //潮品视频
  .custom_tite
    width 100%
    height 85px
    div
      float left
      &.custom_left
        height 100%
        img
          display block
          height 100%
      &.custom_right
        float right
        height 60px
        margin-right 10px
        img
          height 100%
          display block
</style>
