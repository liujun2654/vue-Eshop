<template>
  <div style="height: 100%">
    <div class="letter">
      <div class="letter_list">
        <p :class="{on:currentIndex==index}" v-for="(brand,index) in brandall"
           :key="index" @click="selectBrand(index)">{{brand.order}}</p>
      </div>
    </div>
    <div class="brand_list">
      <div>
        <div class="list_top">
          <div class="top_top">
            <span class="iconfont icon-iconfontjiantou7" @click="$router.back()"></span>
            <span>全部商品</span>
            <span class="iconfont icon-tupianliebiao" @click="isShow=!isShow"></span>
          </div>
          <transition name="slide">
            <div class="top_bottom" v-show="isShow">
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
        </div>
        <div class="wrap_list">

          <div class="list_item" v-for="(brand,index) in brandall" :key="index">
            <h2>{{brand.order}}</h2>
            <div class="itmewrap" v-for="(lists,index1) in brand.list" :key="index1">
              <div>
                <div class="item_img">
                  <img v-lazy="lists.logo" alt="">
                </div>
                <div class="item_text">
                  <p>{{lists.name}}</p>
                  <p>{{lists.address}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--loading-->
    <div class="login" v-if="isShowLogin">
      <img src="./loading.gif" alt="">
      <p>数据加载中</p>
    </div>
  </div>

</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        isShowLogin:true,
        isShow:false,
        listindex:0,
        tops:[],
        scrollY:0
      }
    },
    mounted(){
      this.$store.dispatch('getBrandAll',()=>{
        this.$nextTick(()=>{
          const arr=[]
          let y=0
          arr.push(y)
          const divs = document.getElementsByClassName('list_item')
          Array.from(divs).forEach(l=>{
            y += l.clientHeight
            arr.push(y)
          })
          this.tops=arr
          //使用bscroll滑动
          this.rightScroll = new BScroll('.brand_list',{
            click:true,
            probeType:3
          })
          this.rightScroll.on('scroll',(pos)=>{
            this.scrollY = Math.abs(pos.y)+200
          })
          this.rightScroll.on('scrollEnd',pos=> {
            this.scrollY = Math.abs(pos.y)+200
          })
        })
      })
    },
    computed:{
      ...mapState(['brandall']),
      currentIndex(){
        const {tops,scrollY} = this

        return tops.findIndex((top,index)=>scrollY>=top&&scrollY<tops[index+1])
      }
    },
    watch:{
      brandall(value){
        this.isShowLogin=false
      }
    },
    methods:{
      selectBrand(index){
        //动态获取头部高度
        const headHeight = document.querySelector('.list_top').clientHeight;
        const y = -this.tops[index]-headHeight;
        this.scrollY = -y
        //点击右侧字母滚动到响应的位置
        this.rightScroll.scrollTo(0,y,300)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .letter
    position fixed
    top 0px
    bottom 0px
    right 0px
    z-index 10
    width 14px
    text-align center
    .letter_list
      position relative
      top 50%
      transform translateY(-50%)
      p
        font-weight: 700;
        font-size 12px
        color #7d7d7d
        height: 12px;
        margin-top: 2px;
        &.on
          color red
  .brand_list
    height 100%
    .list_top
      .top_top
        width 100%
        margin 0 auto
        height 50px
        line-height 50px
        text-align center
        padding 0 20px
        box-sizing border-box
        border-bottom 1px solid #7e8c8d
        span
          font-size 20px
          &:first-child
            font-size 25px
            float left
            color #9f9f9f
          &:last-child
            font-size 25px
            float right
            color #333
      .top_bottom
        height 60px
        list-style none
        display flex
        flex-direction row
        justify-content space-around
        border-bottom 1px solid #758283
        align-items center
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
          color #758283
          p
            font-size 14px
            i
              font-size 24px

    .wrap_list
      background: #f3f4f5;
      width 100%
      .list_item
        h2
          text-indent: 15px;
          line-height: 24px;
          font-size: 12px;
          color #999
          font-weight 400
        .itmewrap
          width 100%
          background white
          &:last-child>div
            border 0
          >div
            margin-right 20px
            padding 10px
            overflow hidden
            border-bottom: 1px solid #f3f4f5;
            box-sizing border-box
            .item_img
              float left
              width 30%
              height 50px
              border: 1px solid #f3f4f5;
              padding 5px
              box-sizing border-box
              img
                width 100%
                height 100%


            .item_text
              float left
              padding: 5px 0 5px 20px;
              height 50px
              box-sizing border-box
              display flex
              flex-direction column
              justify-content space-around
              p:first-child
                font-size 14px
              p:last-child
                font-size 12px
                color: #999;

  .login
    position absolute
    top 0
    left 0
    bottom 0
    right 0
    margin auto
    height 100px
    width 100px
    background rgba(89,89,89,1)
    text-align center
    img
      width 40%
      margin 20px 0 10px 0
    p
      color #282828
</style>
