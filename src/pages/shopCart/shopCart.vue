<template>
  <div class="shopCart">
    <div class="shopCart_header">
      <span class="iconfont icon-iconfontjiantou7" @click="$router.back()"></span>
      <span>购物车</span>
      <span class="iconfont icon-tupianliebiao" @click="isShow=!isShow"></span>
    </div>
    <div class="shopWrap">
      <transition name="slide">
        <div class="nav_hide" v-show="isShow">
          <router-link tag="a" to="/home">
            <p><i class="iconfont icon-shouyedianpujishishangcheng"></i></p>
            <p>首页</p>
          </router-link>
          <router-link tag="a" to="/classify">
              <p><i class="iconfont icon-icon04"></i></p>
              <p>商品分类</p>
          </router-link>
          <router-link tag="a" to="/shopcart">
              <p><i class="iconfont icon-gouwuche1"></i></p>
              <p>购物车</p>
          </router-link>
          <router-link tag="a" to="/mypet">
              <p><i class="iconfont icon-xiaolian"></i></p>
              <p>我的e宠</p>
          </router-link>
        </div>
      </transition>
      <div class="shopCart_foot">
        <span class="iconfont icon-gouwuche1"></span>
        <p>购物车是空的</p>
        <div class="my_shopCart">
          <a href="javascript:;">去逛逛</a>
          <a href="javascript:;">我的收藏</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return{
        isShow:false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .shopCart
    .shopCart_header
      position fixed
      top 0
      left 0
      width 100%
      height 50px
      line-height 50px
      text-align center
      border-bottom 1px solid #edeaf1
      span
        font-size 18px
        &:last-child
          position absolute
          right 15px
          font-size 26px
        &:first-child
          position absolute
          left 15px
          font-size 20px
          color #a7a5aa

    .shopWrap
      margin-top 60px
      .nav_hide
        height 50px
        list-style none
        display flex
        flex-direction row
        justify-content space-around
        border-bottom 1px solid #758283
        padding-bottom 10px
        overflow hidden
        &.slide-enter-active,&.slide-leave-active
          transition all 0.5s linear
        &.slide-enter,&.slide-leave-to
          height 0px
        >a
          height 50px
          text-align center
          display flex
          flex-direction column
          justify-content space-around
          color #666666
          p
            font-size 14px
            i
              font-size 24px

      .shopCart_foot
        padding-top 50px
        display flex
        flex-direction column
        align-items center
        z-index 100
        span
          font-size 100px
          color #bcbcbc
          margin-bottom 20px
        p
          color #dbdbdb
        .my_shopCart
          margin-top 1.5em
          a
            display: inline-block;
            border-radius: 5px;
            border: 1px solid #999;
            height: 40px;
            line-height: 40px;
            width: 100px;
            text-align center
            &:first-child
              margin-right 0.5em


</style>
