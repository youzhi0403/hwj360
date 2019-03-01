<template>
    <div class="myself">
      <div class="myself-header">
        <i class="icon-msg vertical-center"></i>
        <i class="icon-set vertical-center"></i>
      </div>
      <div class="myself-wrapper" ref="myselfWrapper">
        <div class="myself-content">
          <!--顶部内容-->
          <div class="personal-top">
            <div class="personal-top-img">
              <img src="http://m.360hwj.com/images/personal/personal-topbg.png">
            </div>
            <div class="personal-show">
              <div class="personal-head-img">
                <img src="http://static.360hwj.com/group1/M00/07/A1/J2zAA1mZH6-AQ-G_AAAEadr9AHg271.png">
              </div>
              <p class="personal-name">13527700031</p>
            </div>
            <div class="person-top-list horizontal-center">
              <div class="personal-top-elm">
                <p class="personal-elm-num">￥0</p>
                <p class="personal-elm-name">钱包</p>
              </div>
              <div class="personal-top-elm">
                <p class="personal-elm-num">110</p>
                <p class="personal-elm-name">积分</p>
              </div>
              <div class="personal-top-elm">
                <p class="personal-elm-num">1</p>
                <p class="personal-elm-name">已签到</p>
              </div>
            </div>
          </div>
          <!--订单-->
          <div class="personal-order-content">
            <div class="order-type-item">
              <div class="order-type-item-icon horizontal-center">
                <img src="http://m.360hwj.com/images/personal/order_all@2x.png">
              </div>
              <p>全部</p>
            </div>

            <div class="order-type-item">
              <div class="order-type-item-icon horizontal-center">
                <img src="http://m.360hwj.com/images/personal/order_pay@2x.png">
              </div>
              <p>待付款</p>
            </div>

            <div class="order-type-item">
              <div class="order-type-item-icon horizontal-center">
                <img src="http://m.360hwj.com/images/personal/order_send@2x.png">
              </div>
              <p>待发货</p>
            </div>

            <div class="order-type-item">
              <div class="order-type-item-icon horizontal-center">
                <img src="http://m.360hwj.com/images/personal/order_take@2x.png">
              </div>
              <p>待收货</p>
            </div>

            <div class="order-type-item">
              <div class="order-type-item-icon horizontal-center">
                <img src="http://m.360hwj.com/images/personal/order_service@2x.png">
              </div>
              <p>售后</p>
            </div>
          </div>
          <!--推荐分享-->
          <div class="personal-share">
            <div class="share-img vertical-center">
              <img src="http://m.360hwj.com/images/personal/my_share@2x.png">
            </div>
            <div class="share-text vertical-center">
              <span>推荐分享</span>
            </div>
            <div class="share-gift vertical-center">
              <img src="http://m.360hwj.com/images/personal/share_gife@2x.png">
            </div>
            <div class="share-right-icon vertical-center">
              <img src="http://m.360hwj.com/images/icon-right-tran.png">
            </div>
          </div>
          <div class="personal-widget-content">
            <div class="widget-item">
              <div class="widget-img vertical-center">
                <img src="http://m.360hwj.com/images/personal/my_collect@2x.png">
              </div>
              <div class="widget-text vertical-center">
                <span>我的收藏</span>
              </div>
              <div class="widget-right-icon vertical-center">
                <img src="http://m.360hwj.com/images/icon-right-tran.png">
              </div>
            </div>

            <div class="widget-item">
              <div class="widget-img vertical-center">
                <img src="http://m.360hwj.com/images/personal/my_coupon@2x.png">
              </div>
              <div class="widget-text vertical-center">
                <span>我的优惠券</span>
              </div>
              <div class="widget-right-icon vertical-center">
                <img src="http://m.360hwj.com/images/icon-right-tran.png">
              </div>
            </div>

            <div class="widget-item">
              <div class="widget-img vertical-center">
                <img src="http://m.360hwj.com/images/personal/my_footmark@2x.png">
              </div>
              <div class="widget-text vertical-center">
                <span>我的足迹</span>
              </div>
              <div class="widget-right-icon vertical-center">
                <img src="http://m.360hwj.com/images/icon-right-tran.png">
              </div>
            </div>

            <div class="widget-item">
              <div class="widget-img vertical-center">
                <img src="http://m.360hwj.com/images/personal/my_case@2x.png">
              </div>
              <div class="widget-text vertical-center">
                <span>我的病例</span>
              </div>
              <div class="widget-right-icon vertical-center">
                <img src="http://m.360hwj.com/images/icon-right-tran.png">
              </div>
            </div>

            <div class="widget-item">
              <div class="widget-img vertical-center">
                <img src="http://m.360hwj.com/images/personal/my_address@3x.png">
              </div>
              <div class="widget-text vertical-center">
                <span>我的地址</span>
              </div>
              <div class="widget-right-icon vertical-center">
                <img src="http://m.360hwj.com/images/icon-right-tran.png">
              </div>
            </div>

            <div class="widget-item">
              <div class="widget-img vertical-center">
                <img src="http://m.360hwj.com/images/personal/my_service-@2x.png">
              </div>
              <div class="widget-text vertical-center">
                <span>联系客服</span>
              </div>
              <div class="widget-text-worktime vertical-center">
                工作时间09:00至22:00
              </div>
              <div class="widget-right-icon vertical-center">
                <img src="http://m.360hwj.com/images/icon-right-tran.png">
              </div>
            </div>

            <div class="widget-item">
              <div class="widget-img vertical-center">
                <img src="http://m.360hwj.com/images/personal/my_set@2x.png">
              </div>
              <div class="widget-text vertical-center">
                <span>设置</span>
              </div>
              <div class="widget-right-icon vertical-center">
                <img src="http://m.360hwj.com/images/icon-right-tran.png">
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer-nav></footer-nav>
    </div>
</template>

<script>
import FooterNav from '../footer-nav/footer-nav'
import BScroll from 'better-scroll'
export default {
  name: 'myself',
  components: { FooterNav },
  data () {
    return {
      options: {
        click: true
      }
    }
  },
  created () {
  },
  methods: {
    _initScroll () {
      this.myselfScroll = new BScroll(this.$refs['myselfWrapper'], {
        click: true
      })
    }
  },
  mounted () {
    console.log(this.$refs['myselfWrapper'])
    this._initScroll()
  }
}
</script>

<style lang="stylus">
.myself
  position absolute
  top 0
  bottom 3.5rem
  left 0
  width 100%
  max-width 640px
  overflow hidden
  .myself-header
    position fixed
    width 100%
    max-width 640px
    height 3rem
    background-color transparent
    z-index 1000
    .icon-msg
      float left
      display inline-block
      width 1.5rem
      height 2rem
      background url("./nav_notice_white@2x.png") no-repeat center
      background-size contain
      left 1rem
    .icon-set
      float right
      width 2rem
      height 1.5rem
      background url("./nav_set_white@2x.png") no-repeat center
      right 1rem
  .myself-wrapper
    position relative
    height 100%
    .myself-content
      width 100%
      .personal-top
        width 100%
        position relative
        padding-bottom 3rem
        .person-top-img
          width 100%
          img
            width 100%
            vertical-align middle
        .personal-show
          position absolute
          height 5rem
          width 15rem
          left 1.5rem
          bottom 7rem
          .personal-head-img
            float left
            width 5rem
            height 5rem
            border-radius 50%
            border 2px solid #EFB07B
            overflow hidden
            display inline-block
            img
              width 100%
              height 100%
              vertical-align middle
          .personal-name
            float left
            display inline-block
            width 9rem
            height 5rem
            line-height 5rem
            color #fff
            margin-left 1rem
            font-size 1.3rem
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
        .person-top-list
          width 94%
          height 5rem
          background-color #fff
          border-radius 8px
          bottom 0.5rem
          line-height 1.6
          .personal-top-elm
            width 33.33%
            float left
            margin 1rem 0
            height 3rem
            text-align center
            position relative
            &:not(:last-child)
              border-right 1px solid #E9E9E9
            .personal-elm-num
              font-size 1.3rem
            .personal-elm-name
              font-size 0.9rem
      .personal-order-content
        width 100%
        height 6rem
        background-color #fff
        .order-type-item
          width 20%
          height 100%
          float left
          text-align left
          position relative
          .order-type-item-icon
            width 1.5rem
            top 1.5rem
            img
              width 100%
              vertical-align middle
          p
            position absolute
            bottom 1rem
            text-align center
            width 100%
      .personal-share
        width 100%
        height 4rem
        margin-top 0.6rem
        background-color #fff
        position relative
        .share-img
          width 4rem
          left 1rem
          img
            width 100%
            vertical-align middle
        .share-text
          left 5rem
        .share-gift
          right 2.5rem
          width 4rem
          img
            width 100%
            vertical-align middle
        .share-right-icon
          width 0.5rem
          right 1rem
          img
            width 100%
            vertical-align middle
      .personal-widget-content
        width 100%
        margin-top 10px
        background-color #fff
        .widget-item
          width 100%
          height 3rem
          position relative
          border-bottom 1px solid #E7E7E7
          .widget-img
            width 1.5rem
            height 1.5rem
            left 1rem
          .widget-text
            left 3.5rem
          .widget-text-worktime
            right 2rem
            color #9c9c9c
            font-size 1rem
          .widget-right-icon
            width 0.5rem
            right 1rem
            img
              width 100%
              vertical-align middle

</style>
