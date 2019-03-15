<template>
  <div class="collect">
    <div class="none-page">
      <div class="banner"></div>
      <div class="banner-tips">还没有收藏的药品~</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'collect'
}
</script>

<style lang="stylus">
.collect
  position absolute
  bottom 0
  top 0
  overflow hidden
  width 100%
  max-width 640px
  background-color #fff
  padding 5rem 0 0
  .none-page
    overflow hidden
    width 100%
    height 100%
    margin-top 1.1rem
    .banner
      width 10rem
      height 8rem
      background url('./collect_empty@3x.png') no-repeat center
      background-size contain
      margin 2rem auto 2rem
    .banner-tips
      text-align center
      color #a5a5a5
</style>
