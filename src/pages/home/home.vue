<template>
  <div>
    <!--头部-->
    <HeadTop :isOnOff="isOnOff"></HeadTop>

    <!--内容-->
    <div class="allmodule" :class="isOn?'on':'off'" v-if="homeActivity.data">
      <div>
        <!--轮播图-->
        <Slider id="lunbo1" :datas="homeActivity.data['1'].value"></Slider>
        <!--中间导航-->
        <div class="columnnavdiv">
          <div>
            <ul class="clearfix hottype">
              <li class="fl" style="width: 20%; height: 90px;"
                  v-for="(ColumnMenu,index) in homeDatas[1].menus">
                <a href="javascript:;">
                  <img :src="ColumnMenu.image">
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!--新人专项-->
        <div class="new_special">
          <img src="./imgs/2.gif" alt="">
        </div>
        <!--E宠国际-->
        <div class="divboximg">
          <div class="divimg">
            <a href="javascript:;" class="default_bg">
              <img src="./imgs/g/22.jpg" alt="">
            </a>
          </div>
          <div class="divimg">
            <a href="javascript:;" class="default_bg">
              <img src="./imgs/g/00.jpg" alt="">
            </a>
            <a href="javascript:;" class="default_bg">
              <img src="./imgs/g/33.jpg" alt="">
            </a>
          </div>
        </div>
        <!--分割线-->
        <Split></Split>
        <!--E秒商品预告-->
        <Special :url="homeDatas[7].value[0].image"></Special>
        <!--分割线-->
        <Split></Split>
        <!--潮品视频-->
        <HomList :url="homeDatas[9].value.left.img.image"></HomList>
        <!--音频-->
        <Audio :url="homeActivity.imgUrls[0]"></Audio>
        <!--分割线-->
        <Split></Split>
        <!--爱宠星球-->
        <div class="currency-adcon">
          <div>
            <a href="">
              <img src="./imgs/ax/a.jpg" alt="">
            </a>
            <a href="">
              <img src="./imgs/ax/b.jpg" alt="">
            </a>
          </div>
          <div>
            <a href="">
              <img src="./imgs/ax/c.jpg" alt="">
            </a>
            <a href="">
              <img src="./imgs/ax/d.jpg" alt="">
            </a>
          </div>
        </div>
        <!--分割线-->
        <Split></Split>
        <!--品牌特卖-->
        <HomList :url="homeDatas[14].value.left.img.image"></HomList>
        <div v-for="(url,index) in homeActivity.imgUrl" :key="index">
          <!--E秒商品预告-->
          <Special :url="url"></Special>
          <!--分割线-->
          <Split></Split>
        </div>
        <!--猛抓联盟-->
        <HomList :url="homeDatas[43].value.left.img.image"/>
        <!--轮播图-->
        <Slider id="lunbo2" :datas="homeDatas[44].value"></Slider>
        <!--分割线-->
        <Split></Split>
        <!--萌宠说-->
        <HomList :url="homeDatas[46].value.left.img.image"/>
        <!--音频-->
        <Audio :url="homeActivity.imgUrls[1]"></Audio>
        <!--分割线-->
        <Split></Split>
        <!--小剧场-->
        <HomList  :url="homeDatas[49].value.left.img.image"/>
        <!--音频-->
        <Audio :url="homeActivity.imgUrls[2]"></Audio>
        <!--尽在一宠-->
        <div class="yiping">
          <img src="./imgs/yiping/777.jpg" alt="">
        </div>
        <!--内容底部-->
        <div class="foot_wrp">
          <p class="p1">
            <span>触摸屏</span>
            <span>手机客户端</span>
            <span>关于我们</span>
            <span>联系我们</span>
          </p>
          <p class="p2">© wap.epet.com 版权：重庆易宠科技有限公司</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  import 'swiper/dist/css/swiper.min.css'
  import HeadTop from '../../components/headTop/headTop.vue'
  import Slider from '../../components/slider/slider.vue'
  import HomList from '../../components/homList/homeList.vue'
  import Audio from '../../components/audio/audio.vue'
  import Split from '../../components/Split/Split.vue'
  import Special from '../../components/special/special.vue'


  export default {
    data(){
      return{
        isOn:true
      }
    },
    computed:{
      ...mapState(['homeDatas','homeActivity'])
    },
    mounted(){
      this.$store.dispatch('getHomePages',()=>{
        this.$nextTick(()=>{
          new Swiper('#lunbo1.swiper-container',{
            loop:true,
            autoplay:true,
            pagination: {
              el: '.swiper-pagination',
            }
          })
          new Swiper('#lunbo2.swiper-container',{
            loop:true,
            autoplay:true,
            pagination: {
              el: '.swiper-pagination',
            }
          })
        })
      })

    },
    methods:{
      isOnOff(){
        this.isOn = false
      }
    },
    components:{
      HeadTop,
      Slider,
      HomList,
      Audio,
      Split,
      Special
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/styl/stylus.styl"


  //内容
  .allmodule
    margin-bottom 50px
    &.on
      margin-top 140px
    &.off
      margin-top 85px
  //中间导航
    .columnnavdiv
      div
        .hottype
          overflow hidden
          padding: 0;
          .fl
            width: 20%;
            height: 90px;
            float: left;
            a
              color: #333;
              img
                width: 100%;
                height: 100%;
                display: block;
                border: 0;



  //新人专项
    .new_special
      width 100%
      img
        width 100%
  //每日疯抢
    .surprise_day
      background-color white
      .surprise-tit
        height 20px
        .titimg
          margin 8px 17px;
          float left
          >img
            width 85px
        .tit_right
          float right
          width 60%
          text-align center
          vertical-align middle
          Split-height 20px
          .text
            border solid 1px $gray
            padding 1px
          .more
            width 70px
            height 100%
      .surprise-scroll
        width 100%
        height 140px
        overflow hidden
        .scroll_wrap
          width 100%
          height 100%
          .scroll_first
            display flex
            flex-direction row
            width 100%
            .swiper-slide
              display flex
              flex-direction column
              justify-content center
              img
                width 100%
                display block
              >span
                text-align center
              .price
                color  red
                font-size 14px
              .huodong
                color  #999999
                font-size 15px
  //E宠国际
    .divboximg
      width 100%
      height 250px
      overflow hidden
      .divimg
        width 50%
        float left
        &:first-child a img
          width 100%
          height 250px
        a
          display block
          width 100%
          overflow hidden
          img
            display block
            width 100%
            height 125px






  //<!--爱宠星球-->
    .currency-adcon
      overflow hidden
      div
        float left
        width 50%
        a
          display block
          width 100%
          img
            display block
            width 100%



  //尽在e宠
    .yiping
      width 100%
      img
        display block
        width 100%
  //底部内容
    .foot_wrp
      width 100%
      padding 15px 0 25px 0
      .p1
        text-align center
        margin-bottom 10px
        span
          font-size 14px
          color #8C8C8C
          margin-right 10px
          &:last-child
            margin-right 0
          &:first-child
            color red
      .p2
        font-size 12px
        text-align center

</style>
