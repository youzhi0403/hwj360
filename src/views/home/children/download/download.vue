<template>
  <div class="download after" v-show="isShow">
    <div class="app-icon vertical-center">
      <img :src="img">
    </div>
    <div class="download-text vertical-center">
      <p class="download-text-title">好万家APP</p>
      <small>关注公众号,买药更实惠</small>
    </div>
    <div class="download-btn vertical-center">
      客户端下载
    </div>
    <i class="download-close vertical-center" v-on:click.stop.prevent="hide"></i>
  </div>
</template>

<script>
export default {
  name: 'download',
  data () {
    return {
      img: 'http://m.360hwj.com/images/APPicon.png',
      isShow: true
    }
  },
  methods: {
    hide () {
      this.isShow = false
    }
  }
}
</script>

<style lang="stylus">
.download
  position fixed
  bottom 3.5rem
  width 100%
  max-width 640px
  padding 0.5rem
  background-color rgba(0,0,0,0.6)
  height 4rem
  z-index 1000
  .app-icon
    width 2.5rem
    height 2.5rem
    border-radius 0.5rem
    overflow hidden
    img
      width 100%
      vertical-align middle
  .download-text
    left 3.5rem
    color #fff
    line-height 1.6
    p
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
    small
      font-size smaller

  .download-btn
    right 4rem
    border-radius 1rem
    padding 0.4rem 0.6rem
    background-color #ed4529
    color #fff
    line-height 1.6
  .download-close
    width 1.5rem
    height 1.5rem
    background url("./close.png")
    background-size contain
    right 0.5rem
</style>
