<template>
  <div class="discount">
    <cube-tab-bar
      :data="tabLabels"
      v-model="selectedLabel"
    >
    </cube-tab-bar>
    <div class="tab-slide-container">
      <cube-slide
        :initial-index="initialIndex"
        :options="slideOptions"
        :show-dots="showDots"
        :loop="loop"
        :auto-play="autoPlay"
        @change="changePage"
      >
        <cube-slide-item>
          <div class="coupon-scroll" ref="couponScroll">
            <ul class="coupon-container-item">
              <li class="coupon-item horizontal-center" v-for="(item,index) in coupons" :key="index">
                <div class="coupon-item-content">
                  <img src="./coupon_red@3x.png">
                  <div class="coupon-content">
                    <div class="coupon-item-num">{{item.description}}</div>
                    <div class="coupon-item-time">有效期:&nbsp;&nbsp;{{item.startTime}}&nbsp;至&nbsp;{{item.endTime}}</div>
                  </div>
                </div>
                <div class="coupon-detail fl">
                  <div class="coupon-detail-text vertical-center">
                  </div>
                  <i class="icon-down"></i>
                </div>
              </li>
            </ul>
          </div>
        </cube-slide-item>

        <cube-slide-item>
          <div class="none-page">
            <div class="banner"></div>
            <div class="banner-tips">还没有优惠券</div>
          </div>
        </cube-slide-item>

        <cube-slide-item>
          <div class="coupon-scroll" ref="couponLoseScroll">
            <ul class="coupon-container-item">
              <li class="coupon-item horizontal-center" v-for="(item,index) in coupons" :key="index">
                <div class="coupon-item-content">
                  <img src="./coupon_red@3x.png">
                  <div class="coupon-content">
                    <div class="coupon-item-num">{{item.description}}</div>
                    <div class="coupon-item-time">有效期:&nbsp;&nbsp;{{item.startTime}}&nbsp;至&nbsp;{{item.endTime}}</div>
                  </div>
                </div>
                <div class="coupon-detail fl">
                  <div class="coupon-detail-text vertical-center">
                  </div>
                  <i class="icon-down"></i>
                </div>
              </li>
            </ul>
          </div>
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import res from './discountData'
export default {
  name: 'discount',
  data () {
    return {
      selectedLabel: '全部',
      tabLabels: [
        {
          label: '全部'
        },
        {
          label: '未使用'
        },
        {
          label: '已失效'
        }
      ],
      slideOptions: {
        listenScroll: true,
        probeType: 3,
        directionLockThreshold: 0
      },
      showDots: false,
      loop: false,
      autoPlay: false,
      coupons: []
    }
  },
  computed: {
    initialIndex () {
      let index = 0
      for (let i = 0; i < this.tabLabels.length; i++) {
        if (this.tabLabels[i].label === this.selectedLabel) {
          index = i
          break
        }
      }
      return index
    }
  },
  methods: {
    changePage (current) {
      this.selectedLabel = this.tabLabels[current].label
    },
    init () {
      this.coupons = res.data
    },
    _initScroll () {
      this.couponScroll = new BScroll(this.$refs['couponScroll'], {
        click: true
      })
      this.couponLoseScroll = new BScroll(this.$refs['couponLoseScroll'], {
        click: true
      })
    }
  },
  created () {
    this.init()
  },
  mounted () {
    this._initScroll()
  }
}
</script>

<style lang="stylus">
  .discount
    .cube-tab-bar
      width 100%
      height 4rem
      line-height 4rem
      max-width 640px
      text-align center
      background-color #fff
      font-size 1.2rem
      .cube-tab_active
        color #ed4529
    .tab-slide-container
      position fixed
      top 4.6rem
      left 0
      right 0
      bottom 0
      .cube-slide-item
        .none-page
          overflow hidden
          width 100%
          max-width 640px
          height 100%
          background-color #fff
          padding 5rem 0 0
          margin-top 0
          .banner
            width 10rem
            height 8rem
            background url('./ticket_empty@3x.png') no-repeat center
            background-size contain
            margin 2rem auto 2rem
          .banner-tips
            text-align center
            color #a5a5a5
    .coupon-scroll
      height 100%
      .coupon-container-item
        width 100%
        background-color #fff
        line-height 1.6
        .coupon-item
          width 100%
          position relative
          padding 1.5rem 1.2rem 0
          .coupon-item-content
            width 100%
            position relative
            img
              width 100%
              vertical-align middle
            .coupon-content
              position absolute
              top 2rem
              left 1rem
              color #fff
              .coupon-item-num
                font-size 1.5rem
              .coupon-item-time
                font-size 0.8rem
                margin-top 0.2rem
          .coupon-detail
            height 3rem
            color #fff
            position absolute
            width 100%
            bottom 0
            float left
            .coupon-detail-text
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              font-size 1rem
              left 1rem
              right 3rem
            .icon-down
              position absolute
              right 1rem
              width 1rem
              top 0
              height 100%
              background url('./arrow_down_white@3x.png') no-repeat center
              background-size contain
</style>
