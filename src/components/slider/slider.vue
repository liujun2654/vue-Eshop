<template>
  <!--轮播图-->

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(data,index) in datas" :key="index">
          <img :src="data.image" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>

</template>

<script>

  export default {
    props:{
      datas:Array
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/styl/stylus.styl"
  //轮播图

    .swiper-container
      width 100%
      margin-top 10px
      height 160px
      width 100%
      .swiper-wrapper
        height 100%
        .swiper-slide
          height 100%
          >img
            width 100%
            height 100%
        .swiper-pagination-bullet
          background: #fff
          opacity: .9
          width: 6px
          height: 6px
          border-radius 100%
        .swiper-pagination-bullet-active
          width 16px
          height 6px
          border-radius 6px

</style>
