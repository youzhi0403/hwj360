<template>
  <div class="login">
    <img src="./login_bg.png" class="bg">
    <div class="login_content">
      <div class="login-form">
        <input class="login_input" placeholder="请输入账号或手机号" v-model="username" :class="{'active':username !==''}">
        <input class="login_input" placeholder="请输入密码" v-model="password" :class="{'active':password !==''}">
        <button class="login_btn" :class="{'active':buttonActive}" @click.stop.prevent="locateToHome">登录</button>
      </div>
      <p class="login_phone">
        <a @click.stop.prevent="locateToTelephoneLogin">手机登录</a><a @click.stop.prevent="locateToPWR">忘记密码?</a>
      </p>
      <p class="login_register_btn">没有账号?<a @click.stop.prevent="locateToRegister">立即注册</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    buttonActive: function () {
      if (this.username !== '' && this.password !== '') {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    locateToTelephoneLogin () {
      this.$router.push({ name: 'telephoneLogin' })
    },
    locateToPWR () {
      this.$router.push({ name: 'passwordReturn' })
    },
    locateToRegister () {
      this.$router.push({ name: 'register' })
    },
    undevelopment () {
      alert('待开发...')
    },
    locateToHome () {
      if (this.buttonActive) {
        this.$router.push({ name: 'home' })
      } else {
        alert('请填写用户名密码...')
      }
    }
  }

}
</script>

<style lang="stylus">
.login
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
