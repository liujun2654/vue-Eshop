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
      <!--用户名密码登录-->
      <div class="content_login" v-if="isShow">
        <div>
          <span class="iconfont icon-tubiao211"></span>
          <input type="text" name="name" v-model="name" placeholder="手机号/邮箱/用户名">
        </div>
        <div>
          <span class="iconfont icon-mima"></span>
          <input type="password" name="pwd" v-model="pwd" placeholder="输入密码">
        </div>
      </div>
      <!--手机验证码登录-->
      <div class="content_login" v-if="!isShow">
        <div>
          <span class="iconfont icon-tubiao211"></span>
          <input type="text" name="phone" maxlength="11" v-model="phone" placeholder="已注册的手机号">
        </div>
        <div>
          <span class="iconfont icon-mima"></span>
          <input type="text" name="captcha" v-model="captcha" placeholder="请输入图片内容">
          <img src="http://localhost:3000/captcha" alt="" @click="updateCaptcha">
        </div>
        <div>
          <span class="iconfont icon-mima"></span>
          <input type="text" name="dynamicPwd" v-model="dynamicPwd" placeholder="动态密码">
          <button :disabled="computeTime>0 || !rightPhone"
                  class="get_verification" :class="{right_phone_number:computeTime===0&&rightPhone}"
                  @click.prevent="sendCode">
            {{computeTime ? `已发送(${computeTime}s)` : '获取验证码'}}</button>
        </div>
      </div>
      <div class="text">
        <span>忘记密码？</span>
      </div>
      <div class="login1" @click="onLogin">
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
    <AlertTip :alertText="alertText" @closeTip="closeTip" v-if="isShowAlert"></AlertTip>
  </div>
</template>

<script>
  import AlertTip from '../../components/AlertTip/AlertTip.vue'
  import {loginPwd,sendCode,loginSms} from '../../api'
  export default {
    data(){
      return{
        isShow:true,
        name:'',//用户名
        pwd:'',//密码
        phone:'',//手机号
        captcha:'',//图形验证码
        dynamicPwd:'',//短信验证吗
        computeTime: 0, // 倒计时的时间
        isShowAlert:false,
        alertText:''
      }
    },
    computed:{
      rightPhone(){
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods:{
      async sendCode(){
        this.computeTime = 30;
        const intervalId = setInterval(()=>{
          this.computeTime--
          if(this.computeTime===0){
            clearInterval(intervalId)
          }
        },1000)
        //发送请求，获取验证码
        const result = await sendCode(this.phone)
        if(result.code===1){
          //验证码错误
          this.showAlert(result.msg);
          //清除定时器
          clearInterval(intervalId);
          this.computeTime = 0
        }
      },
      //点击按钮登录
      async onLogin(){
        let result;
        if(this.isShow){//用户名密码登录
          console.log('用户名密码登录');
          let {name,pwd} = this;
          let {showAlert} = this
          if(!name){
            //用户名不能为空
            showAlert('用户名不能为空')
            return
          }else if(!pwd){
            //密码不能为空
            showAlert('密码不能为空')
            return
          }
          result = await loginPwd({name,pwd})
        }else {//短信验证码登录
          console.log('短信验证码登录');
          let {phone,captcha,dynamicPwd,showAlert} = this
          if(!/^1\d{10}$/.test(phone)){
            //手机号输入不正确
            showAlert('手机号输入不正确')
            return
          }else if(!captcha){
            //图文验证码不正确
            showAlert('验证码不正确')
            return
          }else if(!/^\d{6}$/.test(dynamicPwd)){
            //短信验证码不正确
            showAlert('短信验证码不正确')
            return
          }
          result = await loginSms({phone,captcha,dynamicPwd})
        }

        //发送请求、拿到的数据进行判断是否成功或失败
        if(result===1){
          //失败
          this.showAlert(result.msg)
        }else {
          //成功
          const user = result.data;
          this.$store.dispatch('saveUserInfo',user)
          this.showAlert('登录成功')
        }
      },
      showAlert(text){
        this.alertText = text;
        this.isShowAlert = true;
      },
      closeTip(){
        this.alertText = '';
        this.isShowAlert = false;
      },
      //更新图文验证码
      updateCaptcha(event){
        event.target.src = 'http://localhost:3000/captcha?time='+Date.now()
      }
    },
    components:{
      AlertTip
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
          border 1px solid #cfcfcf
          box-sizing border-box
          line-height 28px
          border-radius 5px
          font-size 12px
          text-align center
          background white

        &.get_verification
          color #ccc
          background transparent
        &.right_phone_number
          color:black
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
    .login1
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
