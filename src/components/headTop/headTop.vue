<template>
  <!--头部-->
  <div class="fixHeader">
    <!--广告-->
    <div class="xiazaiApp" v-show="isHide">
      <div class="rela">
          <span class="clsoebtn" @click="isShow">
            <img src="./imgs/closebtn_03.png" alt="">
          </span>
        <div class="appdowimg">
          <a href="javascript:;">
            <img src="./imgs/xiazaiba.jpg" alt="">
          </a>
        </div>
      </div>
    </div>
    <div class="headerBox">
      <div class="topFix">
        <div class="address">
          狗站|<a href="">天津<span class="triangle iconfont icon-jiantou32"></span></a>
        </div>
        <div class="search">
          <a href="#">
            <input type="search" placeholder="搜索商品和品牌">
            <span class="iSearch iconfont icon-sousuosearch82"></span>
          </a>
        </div>
        <div class="dialog">

          <a href="#">
            <img src="./imgs/mydope.png">
          </a>
        </div>
      </div>
      <nav class="navWrap">
        <ul class="navList">
          <li :class="{active:menu.menu_id==1}" v-for="(menu,index) in homeMenus" :key="index">
            <a href="javascript:;">{{menu.menu_name}}</a>
            <i :class="{active:menu.menu_id==1}"></i>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    props:{
      isOnOff:Function
    },
    data(){
      return{
        isHide:true
      }
    },
    computed:{
      ...mapState(['homeMenus'])
    },
    mounted(){
      this.$nextTick(()=>{
        new BScroll('.navWrap',{
          scrollX:true
        })
      })
    },
    methods:{
      isShow(){
        this.isHide = false;
        this.isOnOff();
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  //头部
  .fixHeader
    position fixed
    top 0
    left 0
    width 100%
    z-index 100
    .xiazaiApp
      height 55px
      margin: 0 auto;
      background: rgba(61,61,61,1);
      color: #fff;
      position relative
      z-index: 102;
      overflow: hidden!important;
      .rela
        position: relative;
        overflow: hidden!important;
        .clsoebtn
          display: inline-block;
          width: 5%;
          margin-right: 2%;
          vertical-align: middle;
          position: absolute;
          top: 30%;
          left: 2%;
          img
            height: 100%;
            width: 100%;
        .appdowimg
          a
            color: #333;
            img
              width: 100%;
              border: 0;

    .headerBox
      position relative
      width 100%
      height 85px
      background #fff
      z-index 100
      .topFix
        position relative
        box-sizing border-box
        width 100%
        height 43px
        padding 5px 5px
        display flex
        .address
          display flex
          color #333
          font-size 14px
          text-align center
          line-height 33px
          padding-left 6px
          a
            color: #333
            display: flex
        .search
          position relative
          padding 0 10px
          box-sizing border-box
          line-height 33px
          width: 70%;
          input
            background-color #f6f6f6
            width 100%
            border none
            height 25px
            border-radius 4px
            font-size 13px
            text-indent 10px
            outline none
          .iSearch
            position absolute
            top 2px
            right 20px
            width 11px
            height 11px
            display inline-block
            background-size 100% 100%

        .dialog
          position absolute
          top 3px
          right 9px
          line-height 33px
          img
            width 25px
            height 25px
            margin-bottom -9px
      .navWrap
        position relative
        width 100%
        height 40px
        box-sizing border-box
        overflow hidden
        .navList
          position absolute
          top 0
          padding: 0 10px;
          white-space: nowrap;
          float: left;
          li
            position relative
            display inline-block
            height 40px
            width 70px
            line-height 40px
            font-size 14px
            text-align center
            a
              color #666666
            &.active
              a
                color: #459d36
            i
              position absolute
              height 3px
              width 100%
              bottom 0
              left 0
              &.active
                background-color: #459d36;

</style>
