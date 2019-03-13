<template>
  <div class="exchange">
    <div class="integral-top">
      <div class="top-bar">
        <div class="top-bar-left" @click.stop.prevent="showLeft" :class="{'tab_active':integralShow}">
          <i></i>
          积分
          <span>{{integrals}}</span>
        </div>
        <div class="top-bar-right" @click.stop.prevent="showRight" :class="{'tab_active':recordShow}">
          <i></i>
          兑换记录
        </div>
      </div>
      <div class="top-banner">
        <img src="./integral-banner@2x.png">
      </div>

      <!--商品积分兑换-->
      <div class="integral-goods-container" v-show="integralShow">
        <div class="goods-integral-change">
          <div class="change-top">
            <i></i>
            <span>商品积分兑换</span>
          </div>
          <div class="integral-rule vertical_center" @click.stop.prevent="showRule">
            积分规则
          </div>
        </div>
        <div class="goods-integral-content after">
          <div class="goods-integral-item" v-for="(item,index) in integralGoods" :key="index" @click.stop.prevent="locateToGoodDetailIntegrals(item)">
            <div class="goods-integral-img">
              <img :src="item.image">
            </div>
            <div class="goods-integral-name">
              {{item.fullname}}
            </div>
            <div class="goods-integral-price">
              <span class="integral-num">{{item.needIntegral}}</span>
              <span class="money-num">￥{{item.price}}</span>
            </div>
            <div class="goods-integral-btn goods-change-empty" v-show="item.needIntegral > integrals">
              积分不足
            </div>
            <div class="goods-integral-btn goods-change-no-empty" v-show="item.needIntegral <= integrals" @click.stop.prevent="unDevelopment">
              兑换
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--兑换记录-->
    <div class="integral-change-record" v-show="recordShow">
      <div class="record-empty">
        <div class="record-empty-img horizontal_center">
          <img src="./order-empty@2x.png">
        </div>
        <div class="record-empty-text">
          暂无兑换记录
        </div>
      </div>
    </div>

    <!--积分规则弹屏-->
    <div class="integral-rule-bomb-screen" v-show="ruleShow">
      <div class="horizontal_center">
        <i class="close-btn" @click.stop.prevent="hideRule"></i>
        <img src="./integral-rule@2x.png">
      </div>
    </div>
  </div>
</template>

<script>
import res from './goods-integrals'
import { mapState } from 'vuex'
export default {
  name: 'exchange',
  data () {
    return {
      integralGoods: [],
      integralShow: true,
      recordShow: false,
      ruleShow: false
    }
  },
  computed: {
    ...mapState([
      'integrals'
    ])
  },
  methods: {
    init () {
      this.integralGoods = res.data
    },
    showLeft () {
      this.integralShow = true
      this.recordShow = false
    },
    showRight () {
      this.integralShow = false
      this.recordShow = true
    },
    showRule () {
      this.ruleShow = true
    },
    hideRule () {
      this.ruleShow = false
    },
    locateIntegralGood () {
      this.$router.push({ name: 'integralGood' })
    },
    locateToGoodDetailIntegrals (item) {
      this.$router.push({ name: 'goodDetailIntegrals', params: { good: item } })
    },
    unDevelopment () {
      alert('待开发...')
    }
  },
  created () {
    this.init()
  }
}
</script>

<style lang="stylus">
  .integral-top
    background-color #fff
    .top-bar
      position fixed
      max-width 750px
      top 0
      right auto
      bottom auto
      left auto
      width 100%
      height 3rem
      border-bottom 0.05rem solid #e9eaea
      background-color #fff
      z-index 200
      .top-bar-left
        border-right 0.05rem solid #e9eaea
        float left
        font-size 1rem
        color #666
        width 50%
        text-align center
        height 3rem
        line-height 3rem
        &.tab_active
          border-bottom 0.05rem solid #ff644a
        i
          background-image url("./integra_icon@2x.png")
          background-repeat no-repeat
          background-position center
          background-size contain
          display inline-block
          width 1.2rem
          height 1.2rem
          margin-bottom -0.2rem
          margin-right 0.18rem
        span
          color #fc4048
      .top-bar-right
        float left
        font-size 1rem
        color #666
        width 50%
        text-align center
        height 3rem
        line-height 3rem
        &.tab_active
          border-bottom 0.05rem solid #ff644a
        i
          background-image url("./record_icon@2x.png")
          background-repeat no-repeat
          background-position center
          background-size contain
          display inline-block
          width 1.2rem
          height 1.2rem
          margin-bottom -0.2rem
          margin-right 0.18rem
    .top-banner
      padding-top 3rem
      img
        width 100%
        vertical-align middle
    .integral-goods-container
      .goods-integral-change
        position relative
        background-color #fff
        .change-top
          width 70%
          height 3rem
          line-height 3rem
          font-size 1.1rem
          color #2f2f2f
          i
            float left
            width 0.8rem
            height 1.2rem
            margin 0.9rem 0.4rem
            background-image url("./goods-change_icon@2x.png")
            background-repeat no-repeat
            background-position center
            background-size contain
        .integral-rule
          font-size 0.9rem
          color #2f2f2f
          right 0.4rem
          padding-right 1.5rem
          background-image url("./integral-icon@2x.png")
          background-repeat no-repeat
          background-position center right
          background-size 0.9rem
      .goods-integral-content
        padding 0.1rem 0 0.1rem 0
        .goods-integral-item
          float left
          position relative
          width 50%
          height 16rem
          font-size 0.3rem
          background-color #fff
          .goods-integral-img
            width 65%
            margin 0.3rem auto
            img
              width 100%
              vertical-align middle
          .goods-integral-name
            color #343434
            font-size 1.1rem
            padding 0 1.1rem
            margin-bottom 0.5rem
          .goods-integral-price
            padding-left 1.1rem
            .integral-num
              color #fc4048
              margin-right 0.24rem
            .money-num
              color #a7a7a7
          .goods-integral-btn
            position absolute
            bottom 0
            width 100%
            height 1.8rem
            line-height 1.8rem
            text-align center
            color #fff
            border-bottom-right-radius 1.1rem
            border-bottom-left-radius 1.1rem
          .goods-change-empty
            background-color #c6c6c6
          .goods-change-no-empty
            background-color coral
  .integral-change-record
    .record-empty
      position fixed
      max-width 750px
      top 0.92rem
      right auto
      bottom 0
      left auto
      width 100%
      background-color #fff
      .record-empty-img
        width 35%
        top 9.4rem
        img
          width 100%
          vertical-align middle
      .record-empty-text
        position absolute
        width 100%
        text-align center
        top 18.5rem
        font-size 1.4rem
  .integral-rule-bomb-screen
    position fixed
    max-width 750px
    top 0
    right auto
    bottom 0
    left auto
    background-color rgba(0,0,0,0.8)
    width 100%
    z-index 300
    .horizontal_center
      top 15%
      width 75%
      max-width 390px
      .close-btn
        position absolute
        top -10%
        right 0
        bottom auto
        left auto
        width 1.5rem
        height 1.5rem
        background-image url("./close-button@2x.png")
        background-repeat no-repeat
        background-position center
        background-size contain
      img
        width 100%
        vertical-align middle
</style>
