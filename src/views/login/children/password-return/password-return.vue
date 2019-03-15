<template>
  <div class="password-return">
    <img src="../../login_bg.png" class="bg">
    <div class="login_content">
      <div class="forget-form">
        <input class="login_input" placeholder="请输入手机号" v-model="telephone" :class="{'active':telephone !== ''}">
        <button class="login_btn" :class="{'active':telephone !== ''}" @click.stop.prevent="unDevelopment">下一步</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'password-return',
  data () {
    return {
      telephone: ''
    }
  },
  methods:{
    unDevelopment () {
      alert('待开发...')
    }
  }
}
</script>

<style lang="stylus">
  .password-return
    line-height 1.6
    .bg
      position absolute
      width 100%
      height 100%
      z-index -1000
    .login_content
      padding-top 5rem
      height 35rem
      .forget-form
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
</style>
