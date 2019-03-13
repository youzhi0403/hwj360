<template>
  <div class="footer-nav">
    <div class="footer_item" @click.stop.prevent="locateHome" :class="{active:(routerName === 'home')}">
      <i class="horizontal_center iconfont home-nav" ref="nav_icon_home">
      </i>
      <p class="horizontal_center icon_text">首页</p>
    </div>

    <div class="footer_item" @click.stop.prevent="locateClassify" :class="{active:(routerName === 'classify')}">
      <i class="horizontal_center iconfont classify-nav" ref="nav_icon_classify">
      </i>
      <p class="horizontal_center icon_text">分类</p>
    </div>

    <div class="footer_item" @click.stop.prevent="locateShopCart" :class="{active:(routerName === 'shopcart')}">
      <i class="horizontal_center iconfont shopcart-nav" ref="nav_icon_shopcart">
      </i>
      <p class="horizontal_center icon_text">购物车</p>
    </div>

    <div class="footer_item" @click.stop.prevent="locateMySelf" :class="{active:(routerName === 'myself')}">
      <i class="horizontal_center iconfont myself-nav" ref="nav_icon_myself">
      </i>
      <p class="horizontal_center icon_text">个人</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer-nav',
  props: {
    propOfRouterName: {
      type: String,
      default: function () {
        return 'home'
      }
    }
  },
  data () {
    return {
      routerName: ''
    }
  },
  created () {
    this.routerName = this.propOfRouterName
  },
  methods: {
    locateHome () {
      this.routerName = 'home'
      this.$router.push({ name: 'home' })
    },
    locateClassify () {
      this.routerName = 'classify'
      this.$router.push({ name: 'classify' })
    },
    locateShopCart () {
      this.routerName = 'shopcart'
      this.$router.push({ name: 'shopcart' })
    },
    locateMySelf () {
      this.routerName = 'myself'
      this.$router.push({ name: 'myself' })
    }
  }
}
</script>

<style lang="stylus">
  .footer-nav
    position fixed
    bottom 0
    max-width 640px
    width 100%
    height 3.5rem
    background-color #f9f9f9
    z-index 999
    .footer_item
      float left
      color #767676
      font-size 1rem
      position relative
      height 3.5rem
      width 25%
      text-align center
      .iconfont
        width 22%
        height 1.5rem
        display block
        top 0.5rem
      .home-nav
        background url("./home.png") center no-repeat
        background-size contain
      .classify-nav
        background url("./classify.png") center no-repeat
        background-size contain
      .shopcart-nav
        background url("./shopcart.png") center no-repeat
        background-size contain
      .myself-nav
        background url("./myself.png") center no-repeat
        background-size contain
      .icon_text
        bottom 0.2rem
        font-size 0.8rem
      &.active
        .home-nav
          background url("./home_active.png") center no-repeat
          background-size contain
        .classify-nav
          background url("./classify_active.png") center no-repeat
          background-size contain
        .shopcart-nav
          background url("./shopcart_active.png") center no-repeat
          background-size contain
        .myself-nav
          background url("./myself_active.png") center no-repeat
          background-size contain
        .icon_text
          bottom 0.2rem
          font-size 0.8rem
          color #D93C27

</style>
