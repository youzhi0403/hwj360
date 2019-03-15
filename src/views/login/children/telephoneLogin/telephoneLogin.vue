<template>
  <div class="telephoneLogin">
    <img src="../../login_bg.png" class="bg">
    <!--中间内容-->
    <div class="login_content">
      <div class="login-form">
        <input class="login_input" placeholder="手机号" v-model="telephone" :class="{'active':telephone !== ''}">
        <p class="validate">
          <input class="login_input" placeholder="验证码" v-model="verificationCode" :class="{'active':verificationCode !== ''}">
          <a class="vertical_center get_validate" @click.stop.prevent="unDevelopment">获取验证码</a>
        </p>
        <button class="login_btn" :class="{'active':buttonActive}" @click.stop.prevent="unDevelopment">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'telephoneLogin',
  data () {
    return {
      telephone: '',
      verificationCode: ''
    }
  },
  computed: {
    buttonActive: function () {
      if (this.telephone !== '' && this.verificationCode !== '') {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    unDevelopment () {
      alert('待开发...')
    }
  }
}
</script>

<style lang="stylus">
  .telephoneLogin
    line-height 1.6
    .bg
      position absolute
      width 100%
      height 100%
      z-index -1000
    .login_content
      padding-top 5rem
      height 35rem
      .login-form
        .login_input
          width 80%
          height 3rem
          margin 1rem 10%
          background-color transparent
          border none
          text-align center
          font-size 1.15rem
          outline none
          border-bottom 1px solid #F0F0F0
          &.active
            background-color rgb(232,240,254)
        .validate
          position relative
          .get_validate
            right 3rem
            color #E58B82
            font-size 1rem
        .login_btn
          width 80%
          height 3rem
          margin 3rem 10% 2rem
          background-color #9C9C9C
          border none
          text-align center
          font-size 1.15rem
          outline none
          color #fff
          &.active
            background-color rgb(237, 69, 42)
</style>
