<template>
  <div class="container">
    <div class="class_head">
      <div class="head_left">
        <router-link to="/classify/classsort">
          <span :class="{active:$route.path==='/classify/classsort'}">分类</span>
        </router-link>

      </div>
      <div class="head_right">
        <router-link to="/classify/brand">
          <span :class="{active:$route.path==='/classify/brand'}">品牌</span>
        </router-link>

        <div class="search">
          <i class="iconfont icon-sousuosearch82"></i>
        </div>

      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  //分类头部样式
  .container
    height 100%
    overflow hidden
    .class_head
      padding 0 15px
      border-bottom 1px solid #cbcbcb
      position fixed
      left 0
      right 0
      top 0
      height 40px
      z-index 11
      background #fff
      .head_left
        float left
        width 50%
        height 40px
        line-height 40px
        text-align right
        padding-right 5%
        box-sizing border-box
        span
          display inline-block
          height 40px
          box-sizing border-box
          &.active
            color #ed4040
            border-bottom 2px solid #ed4040
      .head_right
        position relative
        float left
        width 50%
        height 40px
        line-height 40px
        text-align left
        padding-left 5%
        box-sizing border-box
        span
          display inline-block
          height 40px
          box-sizing border-box
          &.active
            color #ed4040
            border-bottom 2px solid #ed4040
        .search
          position absolute
          top 13px
          right 15px
          height 14px
          width 14px
          line-height 14px
          color #666





</style>
