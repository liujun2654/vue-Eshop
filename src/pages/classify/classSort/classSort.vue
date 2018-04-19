<template>
  <!--分类-->
  <div id="tab1" class="kindbox">
    <div class="leftbox bgfff scrollbar-none">
      <div>
        <ul>
          <li class="bgfff" :class="{on:CateIndex===index}"
              v-for="(category,index) in categorys" :key="index" @click="selectCate(index)">
            {{category.name}}
          </li>
        </ul>
      </div>
    </div>
    <div class="rightbox" v-if="categorys[CateIndex]">
      <div class="wrap">
        <div class="line" v-for="(list,index) in categorys[CateIndex].list.cate_list" :key="index">
          <div class="box_one" v-if="list.type===0">
            <div class="box_top">
              <p>{{list.title}}
                <img v-if="list.rigth_img.image"
                  src="http://static.epetht.com/static_wap/appmall/lib/goods/cate_right_img.png" alt="">
              </p>
            </div>
            <div class="box_list">
              <ul>
                <li v-for="(item,index) in list.list" :key="index">
                  <div>
                    <img v-lazy="item.photo" alt="">
                  </div>
                  <p>{{item.name}}</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="box_two" v-else>
            <div class="box_top">
              <p>{{list.title}}
                <img v-if="list.rigth_img.image"
                  src="http://static.epetht.com/static_wap/appmall/lib/goods/cate_right_img.png" alt="">
              </p>
            </div>
            <div class="box_list">
              <ul>
                <li v-for="(item,index) in list.list" :key="index">
                  <div>
                    <img v-lazy="item.logo" alt="">
                  </div>
                  <p>{{item.name}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
        CateIndex:0,
        isShowLogin:true
      }
    },
    computed:{
      ...mapState(['categorys'])
    },
    watch:{
      categorys(value){
        this.isShowLogin = false
      }
    },
    mounted(){
      this.$store.dispatch('getCategorys',()=>{
        this.$nextTick(()=>{
           new BScroll('.leftbox',{
            click:true,
            bounce:false
          })
          new BScroll('.rightbox',{bounce:false})
        })
      })

    },
    methods:{
      selectCate(index){
        this.CateIndex = index
        this.isShowLogin = true
        setTimeout(()=>{
          this.isShowLogin = false
        },200)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  //分类
  .kindbox
    padding-top 40px
    position relative
    height 100%
    box-sizing border-box
    .leftbox
      position: fixed;
      top: 40px;
      left: 0;
      bottom: 50px;
      border-right: 5px solid #f3f4f5;
      overflow hidden
      &.bgff
        background: #fff;
      div
        display block
        ul
          list-style none
          li
            line-height 50px
            border-bottom: 1px solid #f3f4f5;
            width: 70px;
            height: 50px;
            font-size: 13px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            text-align: center;
            &.on
              background: #f3f4f5;
              color: #ed4044;

    .rightbox
      width 100%
      height 100%
      padding 0px 0 50px 75px
      box-sizing border-box
      .wrap
        border-top: 5px solid #f3f4f5;
        box-sizing border-box
        padding: 5px 5px 50px;
        .line
          border-top: 1px solid #f3f4f5;
          box-sizing border-box
          &:first-child
            border-top: 0px solid #f3f4f5;
          .box_one
            padding: 5px 5px 20px;
            .box_top
              margin-top 10px
              margin-left 5px
              position relative

              p
                font-size 12px
                color #999
              img
                height 10px
                position absolute
                right 10px


            .box_list
              list-style none
              overflow hidden
              li
                float left
                margin-top 10px
                width 33.3333%
                div
                  width 100%
                  img
                    width 100%
                    padding 0 5px
                p
                  text-align center
                  margin-top 10px
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  height: 20px;
                  font-size 13px
                  color #333
          .box_two
            padding: 5px 5px 20px;
            .box_top
              margin-top 10px
              margin-left 5px
              position relative
              p
                font-size 12px
                color #999
              img
                height 10px
                position absolute
                right 10px


            .box_list
              list-style none
              overflow hidden
              li
                float left
                margin-top 10px
                width 50%
                div
                  width 100%
                  text-align center
                  border: 1px solid #f3f4f5;
                  img
                    height 45px
                    padding 0 5px
                    margin-top: 4px;
                p
                  text-align center
                  margin-top 10px
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  height: 20px;
                  font-size 13px
                  color #333
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
