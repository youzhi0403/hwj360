<template>
  <div class="integralsDetail">
    <!--顶部内容-->
    <div class="integration-top">
      <div class="integration-top-img">
        <img src="./integral_bg@3x.png">
      </div>
      <div class="integration-days">已续签到<label>{{signDays}}</label>天</div>
      <div class="integration-mall-btn" @click.stop.prevent="locateToExchange">积分商城</div>
      <div class="integration-show horizontal-center">
        <p class="integration-num">{{integrals}}</p>
        <div class="integration-show-text horizontal-center">
          <img src="./jifen.png">
        </div>
      </div>
      <div class="integration-signIn horizontal-center">
        每日签到+5积分，
        已签到
      </div>
    </div>
    <!--积分明细-->
    <div class="integration-detail">
      <div class="integration-detail-item">
        <div class="integration-item-time">
          <i class="integration-item-icon"></i>
          2019-03-13 10:04:13
        </div>
        <div class="integration-item-data">
          签到送积分<br>
          +10
        </div>
      </div>
      <div class="integration-detail-item">
        <div class="integration-item-time">
          <i class="integration-item-icon"></i>
          2019-03-12 17:31:28
        </div>
        <div class="integration-item-data">
          签到送积分<br>
          +10
        </div>
      </div>
      <div class="integration-detail-item">
        <div class="integration-item-time">
          <i class="integration-item-icon"></i>
          2019-02-21 13:34:03
        </div>
        <div class="integration-item-data">
          幸运大转盘抽奖<br>
          -20
        </div>
      </div>
      <div class="integration-detail-item">
        <div class="integration-item-time">
          <i class="integration-item-icon"></i>
          2019-02-21 13:34:03
        </div>
        <div class="integration-item-data">
          抽奖积分<br>
          +25
        </div>
      </div>
      <div class="integration-detail-item">
        <div class="integration-item-time">
          <i class="integration-item-icon"></i>
          2019-02-21 13:33:22
        </div>
        <div class="integration-item-data">
          签到送积分<br>
          +10
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'integralsDetail',
  computed: {
    ...mapState([
      'integrals',
      'signDays'
    ])
  },
  methods: {
    locateToExchange () {
      this.$router.push({ name: 'exchange' })
    }
  }
}
</script>

<style lang="stylus">
  .integralsDetail
    width 100%
    margin-top 17rem
    .integration-top
      top 0
      width 100%
      max-width 640px
      position fixed
      padding-bottom 2.5rem
      z-index 900
      background-color #F3F3F3
      .integration-top-img
        width 100%
        img
          width 100%
          vertical-align middle
      .integration-days
        position absolute
        left 1rem
        top 2rem
        color #fff
      .integration-mall-btn
        position absolute
        top 2rem
        right 1rem
        color #fff
      .integration-show
        position absolute
        height 5rem
        width 15rem
        bottom 7rem
        text-align center
        color #fff
        line-height 1.6
        .integration-num
          display inline-block
          width 100%
          font-size 3rem
        .integration-show-text
          width 5.5rem
          margin-top -0.5rem
          img
            width 100%
            vertical-align middle
      .integration-signIn
        width 94%
        height 3.5rem
        line-height 3.5rem
        text-align center
        background-color #fff
        border-radius 50px
        bottom 0.8rem
        color #3779E8
        font-size 1.2rem
    .integration-detail
      background-color #fff
      width 100%
      line-height 1.6
      .integration-detail-item
        margin-left 1rem
        border-left 1px solid #E2E2E2
        height 6rem
        padding-top 1rem
        .integration-item-time
          position relative
          margin-left -0.4rem
          background-color #fff
          .integration-item-icon
            display inline-block
            width 0.8rem
            height 0.8rem
            margin-right 0.3rem
        &:nth-child(odd)
          i
            background url('./integra_point@3x.png') no-repeat center
            background-size contain
        &:nth-child(even)
          i
            background url('./integra_point_gold@3x.png') no-repeat center
            background-size contain
        .integration-item-data
          margin 0.3rem 0 0 1rem
          color #2b2b2b
</style>
