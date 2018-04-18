<template>
  <!--底部-->
  <div class="foot">
    <ul class="foot_list">
      <router-link to="/home">
        <li class="li1" :class="{on:$route.path==='/home'}">
          <p><i class="iconfont icon-shouyedianpujishishangcheng"></i></p>
          <p>首页</p>
        </li>
      </router-link>
      <router-link to="/classify">
        <li class="li2" :class="{on:$route.path.indexOf('/classify')!==-1}">
          <p><i class="iconfont icon-icon04"></i></p>
          <p>分类</p>
        </li>
      </router-link>
      <router-link to="/shopcart">
        <li class="li3" :class="{on:$route.path==='/shopcart'}">
          <p><i class="iconfont icon-gouwuche1"></i></p>
          <p>购物车</p>
        </li>
      </router-link>
      <router-link to="/mypet">
        <li class="li4" :class="{on:$route.path==='/mypet'}">
          <p><i class="iconfont icon-xiaolian"></i></p>
          <p>我的E宠</p>
        </li>
      </router-link>
    </ul>
  </div>
</template>
<script>

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/styl/stylus.styl"
  //底部
  .foot
    position fixed
    left 0
    bottom 0
    width 100%
    height 50px
    background white
    .foot_list
      height 100%
      list-style none
      display flex
      flex-direction row
      justify-content space-around
      li
        height 100%
        text-align center
        display flex
        flex-direction column
        justify-content space-around
        color #666666
        &.on
          color #9acd75
        p
          font-size 14px

          i
            font-size 24px

</style>
