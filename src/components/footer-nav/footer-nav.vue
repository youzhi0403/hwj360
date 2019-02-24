<template>
  <div class="footer">
    <div class="footer_item" @click.stop.prevent="locateHome">
      <i class="horizontal_center iconfont" ref="nav_icon_home">
        <img src="../../common/imgTemp/home/home.png">
      </i>
      <p class="horizontal_center icon_text">首页</p>
    </div>

    <div class="footer_item" @click.stop.prevent="locateClassify">
      <i class="horizontal_center iconfont" ref="nav_icon_classify">
        <img src="../../common/imgTemp/home/classify.png">
      </i>
      <p class="horizontal_center icon_text">分类</p>
    </div>

    <div class="footer_item" @click.stop.prevent="locateShopCart">
      <i class="horizontal_center iconfont" ref="nav_icon_shopcart">
        <img src="../../common/imgTemp/home/shopcart.png">
      </i>
      <p class="horizontal_center icon_text">购物车</p>
    </div>

    <div class="footer_item" @click.stop.prevent="locateMySelf">
      <i class="horizontal_center iconfont" ref="nav_icon_myself">
        <img src="../../common/imgTemp/home/myself.png">
      </i>
      <p class="horizontal_center icon_text">个人</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer-nav',
  methods: {
    locateHome () {
      console.log('home..')
      this.$router.push({ name: 'home' })
    },
    locateClassify () {
      console.log('classify..')
      this.$router.push({ name: 'classify' })
    },
    locateShopCart () {
      console.log('shopcart..')
      this.$router.push({ name: 'shopcart' })
    },
    locateMySelf () {
      console.log('myself..')
      this.$router.push({ name: 'myself' })
    }
  }
}
</script>

<style lang="stylus">
  .footer
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
      .icon_text
        bottom 0.2rem
        font-size 0.8rem
</style>
