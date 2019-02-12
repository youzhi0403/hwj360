<template>
  <div id="app">
    <router-view class="content"></router-view>
    <div class="footer">
      <router-link class="footer_item" to="/home" v-on:click.native="changeStyle($event)">
        <i class="horizontal_center iconfont" ref="nav_icon_home">
          <img src="./common/imgTemp/home/home.png">
        </i>
        <p class="horizontal_center icon_text">首页</p>
      </router-link>
      <router-link class="footer_item" to="/classify">
        <i class="horizontal_center iconfont" ref="nav_icon_classify">
          <img src="./common/imgTemp/home/classify.png">
        </i>
        <p class="horizontal_center icon_text">分类</p>
      </router-link>
      <router-link class="footer_item" to="/shopcart">
        <i class="horizontal_center iconfont" ref="nav_icon_shopcart">
          <img src="./common/imgTemp/home/shopcart.png">
        </i>
        <p class="horizontal_center icon_text">购物车</p>
      </router-link>
      <router-link class="footer_item" to="/myself">
        <i class="horizontal_center iconfont" ref="nav_icon_myself">
          <img src="./common/imgTemp/home/myself.png">
        </i>
        <p class="horizontal_center icon_text">个人</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  methods: {
    /* 修改样式 */
    changeStyle: function (e) {
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus">
  .content
    padding 0 0 4.1rem 0
    width 100%
    max-width 640px
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
