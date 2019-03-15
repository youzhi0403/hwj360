<template>
  <div class="register">
    <img src="./login_bg.png" class="bg">
    <div class="login_content">
      <div class="login-form">
        <input class="login_input" placeholder="手机号" :class="{'active':telephone !== ''}" v-model="telephone">
        <input class="login_input" placeholder="密码" :class="{'active':password !== ''}" v-model="password">
        <p class="validate">
          <input class="login_input" placeholder="验证码" :class="{'active':verificationCode !== ''}" v-model="verificationCode">
          <a class="vertical_center get_validate" @click.stop.prevent="unDevelopment">获取验证码</a>
        </p>
        <button class="login_btn" :class="{'active':buttonActive}" @click.stop.prevent="unDevelopment">注册</button>
      </div>
      <p class="login_register_btn">已有账号?<a @click.stop.prevent="locateToLogin">马上登录</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      telephone: '',
      password: '',
      verificationCode: ''
    }
  },
  computed: {
    buttonActive: function () {
      if (this.telephone !== '' && this.password !== '' && this.verificationCode !== '') {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    locateToLogin () {
      this.$router.push({ name: 'login' })
    },
    unDevelopment () {
      alert('待开发..')
    }
  }
}
</script>

<style lang="stylus">
  .register
    line-height 1.6
    .bg
      position absolute
      width 100%
      height 100%
      z-index -1000
    .login_content
      padding-top 5rem
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
      .login_phone
        width 80%
        margin 0 10%
        a
          color #505050
          display inline-block
          width 50%
          text-align center
      .login_register_btn
        text-align center
        height 3rem
        line-height 3rem
        margin-top 1.5rem
        font-size 1rem
        color #505050
        a
          color #E2786B
          padding 0 0.5rem
</style>
