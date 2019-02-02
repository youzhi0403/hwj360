<template>
  <div class="search">
    <div class="search_center center_elm">
      <i class="vertical_center icon-search"></i>
      <input name="keyword" class="search-input" placeholder="请输入搜索药品"/>
    </div>
    <div class="search_right">
      <div class="icon-msg horizontal_center"></div>
      <div class="search_right_text">消息</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search'
}
</script>

<style lang="stylus">
  .search
    position fixed
    width 100%
    max-width 640px
    overflow hidden
    z-index 500
    height 3.5rem
    .search_center
      width 70%
      float left
      height 2rem
      line-height 2rem
      border 0 solid
      border-radius 3rem
      -webkit-border-radius 3rem
      -moz-border-radius 3rem
      background-color rgba(255,255,255,0.8)
      .icon-search
        width 1.5rem
        height 1.5rem
        left 5%
        background url("icon-search-active.png")
        background-size contain
      .search-input
        width 70%
        height 2rem
        margin-left 20%
        margin-right 5%
        border none
        outline none
        font-size 1.1rem
        background-color transparent
    .search_right
      position relative
      float right
      width 15%
      height 3.5rem
      .icon-msg
        top 15%
        width 1.5rem
        height 1.5rem
        background url("home_nav_news@3x.png")
        background-size contain
        -webkit-background-size contain
      .search_right_text
        position absolute
        bottom 0
        width 100%
        color #fff
        text-align center
        font-size 0.9rem
</style>
