<template>
  <div>
    <header>
      <div class="head_top">
        <span class="top_left iconfont icon-iconfontjiantou7" @click="$router.back()"></span>
        <span class="top_right">注册</span>
      </div>
      <div class="head_bottom">
        <div class="bottom_left" @click.stop="isShow=true">
          <a href="javascript:;">普通登录</a>
          <div class="bottom_icon" v-if="isShow">
            <span class="iconfont icon-triangle-up"></span>
          </div>
        </div>
        <div class="bottom_right" @click.stop="isShow=false">
          <a href="javascript:;">手机动态密码登录</a>
          <div class="bottom_icon" v-if="!isShow">
            <span class="iconfont icon-triangle-up"></span>
          </div>
        </div>
      </div>
    </header>
    <div class="content">
      <div class="content_login" v-if="isShow">
        <div>
          <span class="iconfont icon-tubiao211"></span>
          <input type="text" name="username" v-model="username" placeholder="手机号/邮箱/用户名">
        </div>
        <div>
          <span class="iconfont icon-mima"></span>
          <input type="password" name="pwd" v-model="pwd" placeholder="输入密码">
        </div>
      </div>
      <div class="content_login" v-if="!isShow">
        <div>
          <span class="iconfont icon-tubiao211"></span>
          <input type="text" name="phone" v-model="phone" placeholder="已注册的手机号">
        </div>
        <div>
          <span class="iconfont icon-mima"></span>
          <input type="text" name="imgtext" v-model="imgtext" placeholder="请输入图片内容">
          <img src="http://localhost:3000/captcha" alt="">
        </div>
        <div>
          <span class="iconfont icon-mima"></span>
          <input type="text" name="dynamicPwd" v-model="dynamicPwd" placeholder="动态密码">
          <button>获取动态密码</button>
        </div>
      </div>
      <div class="text">
        <span>忘记密码？</span>
      </div>
      <div class="login">
        <span>登录</span>
      </div>
      <div class="other_login">
        <div class="other_text">
          <span>合作网站登录</span>
        </div>
        <div class="other_img">
          <div>
            <img src="./login_ico2.png" alt="">
          </div>
          <div>
            <img src="./login_ico4.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        isShow:true,
        username:'',
        pwd:'',
        phone:'',
        imgtext:'',
        dynamicPwd:''
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  header
    background-image url("./ef42dfb164982f302e78ca327b9d306c.png")
    background-repeat no-repeat
    background-size 100% 100%
    height 180px
    width 100%
    display flex
    flex-direction column
    justify-content space-between
    .head_top
      width 100%
      height 50px
      padding 0 1em
      box-sizing border-box
      display flex
      flex-direction row
      justify-content space-between
      line-height 50px
      span
        color #fff
        font-size 18px

    .head_bottom
      width 100%
      height 44px
      display flex
      background-color: rgba(255,255,255,0.3);
      div
        width 50%
        height 100%
        position relative
        a
          font-size 15px
          color #fff
          display block
          width 100%
          height 100%
          text-align center
          line-height 44px
        .bottom_icon
          width 100%
          position absolute
          height 20px
          left 0
          bottom -6px
          text-align center
          span
            font-size 20px
            color white

  .content
    width 100%
    padding 0 30px
    box-sizing border-box
    .content_login
      width 100%
      margin-bottom 15px
      div
        border-bottom: #e2e2e2 solid 1px;
        padding: 12px 0
        position relative
        span
          font-size 20px
          position absolute
          top 11px
          left 0px
          color #c3d1d2
        input
          display: block;
          height: 21px;
          padding-left 30px
          font-size: 15px;
          border: none;
          width 100%
          color: #666;
          outline: none;
          box-sizing border-box
          &::-webkit-input-placeholder, textarea::-webkit-input-placeholder
            color: #D5D5D5;
            font-size: 16px;
        img
          position absolute
          top 5px
          right 0
          display block
          height 32px

        button
          position absolute
          top 8px
          right 0px
          display block
          width 100px
          height 30px
          border 1px solid #ff4259
          box-sizing border-box
          line-height 28px
          border-radius 5px
          font-size 12px
          text-align center
          color #ff4259
          background white
    .text
      position relative
      height 20px
      span
        position absolute
        right 0px
        top 0
        font-size 14px
        padding 3px 0
        color: #898989;
    .login
      background #2ec975
      margin-top 4px
      border-radius 5px
      span
        font-size 16px
        display block
        padding 12px
        text-align center
        color white
    .other_login
      width 100%
      margin-top 100px
      .other_text
        text-align center
        span
          font-size 14px
          color #d7d7d7
      .other_img
        padding 20px 0
        overflow hidden
        div
          float left
          width 33.33%
          margin-left 30
          img
            display block
            width 60%
            margin 0 auto

</style>
