<template>
  <div class="assets">
    <div class="wallet-top">
      <div class="wallet-top-img">
        <img src="./my_wallet_bg@3x.png">
      </div>
      <div class="wallet-show horizontal_center">
        <p class="wallet-num">
          <span class="wallet-RMBsign">￥</span>
          {{assets}}
        </p>
        <div class="wallet-show-text horizontal_center">
          <img src="./assets.png">
        </div>
      </div>
      <div class="wallet-top-list horizontal_center">
        <div class="wallet-top-elm">
          <div class="wallet-elm-img horizontal_center">
            <img src="./download1.png">
          </div>
          <p class="wallet-elm-name horizontal_center">充值</p>
        </div>

        <div class="wallet-top-elm">
          <div class="wallet-elm-img horizontal_center">
            <img src="./download2.png">
          </div>
          <p class="wallet-elm-name horizontal_center">提现</p>
        </div>

        <div class="wallet-top-elm">
          <div class="wallet-elm-img horizontal_center">
            <img src="./download3.png">
          </div>
          <p class="wallet-elm-name horizontal_center">银行卡</p>
        </div>
      </div>
    </div>

    <div class="wallet-detail">
      <div class="none-page">
        <div class="banner"></div>
        <div class="banner-tips">钱包空空</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'assets',
  data () {
    return {
      assets: 0.01
    }
  }
}
</script>

<style lang="stylus">
.assets
  width 100%
  margin-top 18rem
  line-height 1.6
  .wallet-top
    top 0
    width 100%
    max-width 640px
    position fixed
    padding-bottom 3rem
    z-index 900
    background-color #F3F3F3
    .wallet-top-img
      width 100%
      img
        width 100%
        vertical-align middle
    .wallet-show
      position absolute
      height 5rem
      width 15rem
      bottom 9rem
      text-align center
      color #fff
      .wallet-num
        display inline-block
        width 100%
        font-size 3rem
        .wallet-RMBsign
          font-size 1.3rem
          vertical-align top
          display inline-block
          padding-top 0.7rem

      .wallet-show-text
        width 5.5rem
        margin-top -0.5rem
        img
          width 100%
          vertical-align middle

    .wallet-top-list
      width 94%
      height 5rem
      background-color #fff
      border-radius 8px
      bottom 0.8rem
      .wallet-top-elm
        width 33.33%
        float left
        height 5rem
        text-align center
        position relative
        &:not(:last-child)
          border-right 1px solid #E9E9E9
        .wallet-elm-img
          top 1rem
          width 1.5rem
          img
            width 100%
            vertical-align middle
        .wallet-elm-name
          bottom 0.8rem
          font-size 1rem
  .wallet-detail
    background-color #fff
    width 100%
    .none-page
      position absolute
      bottom 0
      top 13.6rem
      overflow hidden
      width 100%
      max-width 640px
      background-color #fff
      padding 10rem 0 0
      .banner
        width 10rem
        height 8rem
        background url("./wallet_empty@3x.png") no-repeat center
        background-size contain
        margin 2rem auto 2rem
      .banner-tips
        text-align center
        color #a5a5a5

</style>
