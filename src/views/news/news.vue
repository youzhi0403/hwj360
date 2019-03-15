<template>
  <div class="news">
    <div class="info-elm" @click.stop.prevent="locateToService">
      <div class="info-left">
        <div class="info-icon">
          <img src="./news_service-@2x.png" alt="客服中心">
        </div>
      </div>
      <div class="info-text">
        <div class="info-text-top">客服中心</div>
        <div class="info-text-bottom">查看与客服沟通的记录</div>
      </div>
      <i class="icon-right vertical-center"></i>
    </div>

    <div class="info-elm" @click.stop.prevent="locateToSpecial">
      <div class="info-left">
        <div class="info-icon">
          <img src="./news_sale@2x.png" alt="优惠促销">
        </div>
      </div>
      <div class="info-text">
        <div class="info-text-top">优惠促销</div>
        <div class="info-text-bottom">特惠活动•满即送</div>
      </div>
      <i class="icon-right vertical-center"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'news',
  methods: {
    locateToService () {
      this.$router.push({ name: 'service' })
    },
    locateToSpecial () {
      alert('跳转到专题活动页面，待开发...')
    }
  }
}
</script>

<style lang="stylus">
.news
  .info-elm
    position relative
    float left
    width 100%
    height 5rem
    border-bottom 1px solid #E9E9E9
    background-color #fff
    .info-left
      width 20%
      height 5rem
      float left
      .info-icon
        width 50%
        margin 0 auto
        line-height 5rem
        img
          width 100%
          vertical-align middle
    .info-text
      position relative
      width 80%
      height 5rem
      margin-left 20%
      .info-text-top
        position absolute
        top 1rem
        width 100%
        font-size 1.2rem
      .info-text-bottom
        position absolute
        top 2.5rem
        width 100%
        color #a5a5a5
    .icon-right
      width: 1rem;
      height: 1rem;
      right: 2rem;
      background: url('./arrow-right@2x.png') center no-repeat;
      background-size: contain;
</style>
