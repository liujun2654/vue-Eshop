<template>
  <!--音频-->
  <div class="fashion">
    <div class="fashion_img">
      <img :src="url" alt="">
      <span class="iconfont icon-icon-"></span>
    </div>
    <div class="fashion_info">
      <p>SodaPup 易拉罐漏食狗玩具 口感软弹洁牙护牙</p>
      <p>
        <i class="iconfont icon-bofang1"></i>
        <span>7944</span>
        <span>|</span>
        <span>01:29</span>
      </p>
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
  //sodapup
  .fashion
    width 100%
    .fashion_img
      position relative
      width 100%
      span
        position absolute
        top 45%
        left 45%
        font-size 40px
        color #767bff
      img
        width 100%
        display block
    .fashion_info
      padding 10px
      text-align center
      p
        color: #999
        font-size 12px
      p:first-child
        margin-bottom 5px
        color: #333;
</style>
