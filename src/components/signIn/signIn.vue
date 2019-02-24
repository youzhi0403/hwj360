<template>
  <div class="signIn">
    <div class="sign-top">
      <img src="./sgin-top_banner@2x.png">
      <div class="btn-active-rule" @click.stop.prevent="showRule">活动规则</div>
      <div class="top-bar after">
        <div class="my-integral">
          <div class="num">{{myInfo.integral}}</div>
          <div class="text">我的积分</div>
        </div>
        <div class="purse-img" @click.stop.prevent="show">
          <img src="./purse@2x.png">
          <div class="purse-img-text">
            <span v-html="myInfo.description"></span>
          </div>
        </div>
        <div class="my-sign">
          <div class="num">{{myInfo.signInTimes}}</div>
          <div class="text">连续签到天数</div>
        </div>
      </div>
    </div>

    <!--积分商城-->
    <div class="integral-shop">
      <div class="fl" @click.stop.prevent="locateIntegralShop">
        <img src="./integral-shop@2x.png">
      </div>
      <div class="fr">
        <div class="fr-top">
          <img src="./member-enjoy@2x.png">
        </div>
        <div class="fr-bottom">
          <img src="./share-hwj@2x.png">
        </div>
      </div>
    </div>

    <!--更多活动-->
    <div class="more-activity">
      <div class="top-text">—更多活动—</div>
      <div class="activity-content">
        <div class="fl">
          <img src="./new-user-enjoy@2x.png">
        </div>
        <div class="fr">
          <div class="fr-top">
            <img src="./new-user-reduce.png">
          </div>
          <div class="fr-bottom">
            <img src="./recommend@2x.png">
          </div>
        </div>
      </div>
    </div>
    <!--footer-nav-->
    <footer class="sign-footer">
      <img src="./hwj-sever-banner.png">
    </footer>
    <!--签到弹屏-->
    <div class="signed-screen" v-show="signInShow">
      <div class="signed-screen-content center_elm">
        <i class="icon-close" @click.stop.prevent="hide"></i>
        <img src="./sign-screen@2x.png">
        <div class="signed-days horizontal_center">
          <img src="./filet-black@2x.png">
          <div class="signed-days-text">
            已连续签到<span>{{myInfo.signInTimes}}</span>天
          </div>
        </div>
        <div class="signed-prompt horizontal_center">
          连续签到7天可获得20积分
        </div>
        <div class="signed-list horizontal_center">
          <div class="signed-list-item default">1</div>
          <div class="signed-list-item default">2</div>
          <div class="signed-list-item default">3</div>
          <div class="signed-list-item default">4</div>
          <div class="signed-list-item default">5</div>
          <div class="signed-list-item default">6</div>
          <div class="signed-list-item default">7</div>
        </div>
        <div class="signed-screen-bottom horizontal_center">
          <div class="signed-screen-symbol">
            <img src="./Mega-Coin@2x.png">
          </div>
          <div class="signed-screen-btn">
            <img src="./fillet-white@2x.png">
            <div class="btn-text horizontal_center">
              恭喜您获得10个积分
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--活动规则弹屏-->
    <div class="sign-activity-rule" v-show="ruleShow">
      <div class="bomb-screen-img center_elm">
        <img src="./activity-screen@2x.png">
        <div class="bomb-screen-text">
          <div class="text-item">
            <span>1</span>登录后才能签到
          </div>
          <div class="text-item">
            <span>2</span>每次登录后点击签到按钮才能送积分
          </div>
          <div class="text-item">
            <span>3</span>每天只送一次，积分为5积分，连续签到一周后保持继续签到可获得双倍积分，中断一次则需重新计算周期
          </div>
          <div class="text-item">
            <span>4</span>积分自领取之日起1年内有效
          </div>
          <div class="text-item">
            <span>5</span>积分抽奖需要消耗一定积分
          </div>
          <div class="text-item">
            <span>6</span>活动解释权归好万家所有
          </div>
        </div>
        <div class="btn-bomb-screen horizontal_center">
          <img src="./fillet-white@2x.png">
          <div class="btn-text center_elm">
            我知道了
          </div>
        </div>
        <i class="icon-close" @click.stop.prevent="hideRule"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'signIn',
  data () {
    return {
      myInfo: {
        integral: 45,
        signInTimes: 1,
        description: '<span>已<br/>签到</span>'
      },
      signInShow: false,
      ruleShow: false
    }
  },
  methods: {
    hide () {
      this.signInShow = false
    },
    show () {
      this.signInShow = true
    },
    hideRule () {
      this.ruleShow = false
    },
    showRule () {
      this.ruleShow = true
    },
    locateIntegralShop () {
      this.$router.push({ name: 'integralShop' })
    }
  }
}
</script>

<style lang="stylus">
.sign-top
  width 100%
  position relative
  line-height 1.6
  img
    width 100%
    vertical-align middle
  .btn-active-rule
    position absolute
    top 0.86rem
    right 1.5rem
    bottom auto
    left auto
    color #fff
    padding-right 1rem
    font-size 0.9rem
    background url("./icon-question-mark@2x.png")
    background-repeat no-repeat
    background-position right 0.1rem
    background-size 0.8rem
  .top-bar
    width 100%
    height 5.7rem
    background-color #fff
    font-size 1rem
    padding-top 1.85rem
    position relative
    .my-integral
      width 35%
      float left
      text-align center
      .num
        color #ff2a1d
        text-align center
      .text
        color #222
        text-align center
    .purse-img
      width 43%
      position absolute
      top auto
      right auto
      left 27%
      bottom 0.1rem
      text-align center
      img
        width 100%
        vertical-align center
      .purse-img-text
        position absolute
        top auto
        right 37%
        bottom 2rem
        left auto
        font-size 1.2rem
        width 30%
        text-align center
        color #b71306
    .my-sign
      text-align center
      width 45%
      float right
      .num
        color #ff2a1d
        text-align center
      .text
        color #222
        text-align center
.integral-shop
  margin-top 1.1rem
  width 100%
  height 15rem
  .fl
    width 42%
    border-right 0.07rem solid #ececec
    img
      width 100%
      vertical-align middle
  .fr
    float right
    width 58%
    .fr-top
      border-bottom 0.07rem solid #ececec
      img
        width 100%
        vertical-align middle
    .fr-bottom
      img
        width 100%
        vertical-align middle
.more-activity
  width 100%
  height 16rem
  margin-bottom 1.2rem
  .top-text
    width 100%
    height 4.3rem
    line-height 4.3rem
    text-align center
    font-size 1.28rem
    color #222
  .activity-content
    width 100%
    height 11.8rem
    .fl
      width 50.5%
      img
        width 100%
        vertical-align middle
    .fr
      width 49.5%
      .fr-top
        border-bottom 0.07rem solid #ececec
        img
          width 100%
          vertical-align middle
      .fr-bottom
        img
          width 100%
          vertical-align middle
.sign-footer
  img
    width 100%
    vertical-align middle
.signed-screen
  position fixed
  max-width 750px
  top 0
  right auto
  bottom 0
  left auto
  background-color rgba(0,0,0,0.8)
  width 100%
  .signed-screen-content
    width 80%
    .icon-close
      position absolute
      top -2.8rem
      right 0
      bottom auto
      left auto
      width 1.8rem
      height 1.8rem
      line-height 1.8rem
      text-align center
      color #fff
      background-color transparent
      background-image url("./close-button@2x.png")
      background-repeat no-repeat
      background-position center
      background-size contain
    img
      width 100%
      vertical-align middle
    .signed-days
      top 8.4rem
      width 37%
      img
        width 100%
        vertical-align middle
      .signed-days-text
        position absolute
        top auto
        right 0
        bottom 0.6rem
        left auto
        width 100%
        text-align center
        font-size 0.86rem
        color #fff
        span
          color #facb47
    .signed-prompt
      font-size 0.89rem
      color #999
      top 13.6rem
      width 100%
      text-align center
    .signed-list
      top 15.3rem
      width 90%
      .signed-list-item
        float left
        width 2.4rem
        height 2.8rem
        font-size 0.89rem
        color #333
        text-align center
        background-image url("./Gold@2x.png")
        background-repeat no-repeat
        background-position center 1.4rem
        background-size 1.4rem
        &:not(:last-child)
          margin-right 0.36rem

    .signed-screen-bottom
      width 100%
      bottom 0.53rem
      .signed-screen-symbol
        width 30%
        margin 0 auto 0.58rem
        img
          width 100%
          vertical-align middle
      .signed-screen-btn
        width 80%
        margin 0 auto
        img
          width 100%
          vertical-align middle
        .btn-text
          font-size 1.28rem
          color #fe854e
          bottom 0.42rem
          width 100%
          text-align center
.sign-activity-rule
  position fixed
  max-width 750px
  top 0
  right auto
  bottom 0
  left auto
  background-color rgba(0, 0, 0, 0.8)
  width 100%
  .bomb-screen-img
    width 80%
    img
      width 100%
      vertical-align middle
    .bomb-screen-text
      position absolute
      top 11.25rem
      right auto
      bottom auto
      left auto
      width 100%
      padding-left 1.28rem
      .text-item
        font-size 0.8rem
        color #040404
        margin-bottom 0.4rem
        padding 0 0.3rem 0 0.9rem
        position relative
        line-height 1.5
        span
          position absolute
          top 0.3rem
          right auto
          bottom auto
          left 0
          width 0.8rem
          height 0.8rem
          line-height 0.8rem
          text-align center
          color #fff
          background-color #000
          border-radius 50%
    .btn-bomb-screen
      width: 80%;
      bottom: 1.05rem;
      img
        width 100%
        vertical-align middle
      .btn-text
        font-size 1.2rem
        color #fe854e
        bottom 0rem
        width 100%
        text-align center

    .icon-close
      position absolute
      top -1.8rem
      right 0
      bottom auto
      left auto
      width 1.6rem
      height 1.6rem
      line-height 1.6rem
      text-align center
      color #fff
      background-color transparent
      background-image url("./close-button@2x.png")
      background-repeat no-repeat
      background-position center
      background-size contain
</style>
