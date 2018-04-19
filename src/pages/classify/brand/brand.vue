<template>
  <!--品牌-->
  <div id="tab2" class="bandsbox">
    <div class="brand-list">
      <div class="wrapper" v-for="(brd,index) in brand" :key="index">
        <div class="title">
          <span class="c999">—— {{brd.title}} ——</span>
        </div>
        <div class="list">
          <ul class="clearfix">
            <li class="fl" v-for="(lis,index) in brd.list" :key="index">
              <a href="javascript:;" class="block">
                <div class="img loadimg-nofixed rela">
                  <img class="db image" v-lazy="lis.logo">
                </div>
                <p class="name">{{lis.name}}</p>
                <p class="address">{{lis.address}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>
    <!--全部品牌-->
    <div class="brand_all" @click="$router.push('/classify/brand/list')">
      <a href="javascript:;">
        全部
      </a>
    </div>
    <!--loading-->
    <div class="login" v-if="isShowLogin">
      <img src="./imgs/loading.gif" alt="">
      <p>数据加载中</p>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    data(){
      return{
        isShowLogin:true
      }
    },
    computed:{
      ...mapState(['brand'])
    },
    watch:{
      brand(value){
        this.isShowLogin=false
      }
    },
    mounted(){
      this.$store.dispatch('getBrand',()=>{
        this.$nextTick(()=>{
          new BScroll('.bandsbox',{
            bounce:false,
            click:true
          })
        })
      })

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  //品牌
  .bandsbox
    display: block;
    height 100%
    .brand-list
      background: #f3f4f5;
      padding:45px 0 50px 0;
      display: block;
      box-sizing border-box
      .wrapper
        padding-bottom: 15px;
        margin-bottom: 10px;
        background: #fff;
        .title
          padding-top: 20px;
          font-size: 12px;
          color: #999;
          text-align: center;
          .c999
            color: #999;
        .list
          padding: 0 5px;
          .clearfix
            list-style: none;
            overflow hidden
            li
              margin-top: 20px;
              width: 33.33%;
              padding: 0 5px;
              list-style: none;
              box-sizing: border-box;
              &.fl

                position: relative;
                float: left;
                .block
                  display: block;
                  color: #333;
                  text-decoration: none;
                  -webkit-tap-highlight-color: rgba(0,0,0,0);
                  .img
                    border: 1px solid #e2e2e2;
                    text-align: center;
                    padding: 0px 10px 10px;
                    background: url(./imgs/default-epet.png) no-repeat center center #fff;
                    background-size: 120px auto;
                    height: 50px;
                    position: relative;
                    .image
                      top: 0;
                      left: 0;
                      position: absolute;
                      max-width: 90%;
                      margin: 10px auto 0;
                      height: 40px;
                      right: 0;
                      display: block;
                      border: 0;
                      vertical-align: middle;
                .name
                  height: 20px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  font-size: 13px;
                  margin-top: 5px;
                  text-align: center;
                  display: block;
                .address
                  height: 20px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  font-size: 12px;
                  color: #999;
                  text-align: center;
                  display: block;
    .brand_all
      position fixed
      right 0px
      bottom 100px
      background: rgba(0,0,0,.4);
      height 40px
      width 40px
      border-radius 50%
      a
        display block
        width 100%
        height 100%
        font-size 12px
        text-align center
        line-height 40px
        color #fff
        border-radius 50%
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
