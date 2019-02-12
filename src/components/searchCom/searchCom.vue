<template>
  <div class="searchCom">
    <div class="btn-search-fixed" @click.stop.prevent="change">
      <i class="icon-search center_elm"></i>
    </div>
    <transition name="move">
      <div class="search-form" v-show="isShow">
        <form action="" method="GET">
          <input type="search" class="search-form-input" name="keyword" placeholder="搜索">
          <i class="icon-search-active vertical_center"></i>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'searchCom',
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    change () {
      this.isShow = !this.isShow
      console.log(this.isShow)
    }
  }
}
</script>

<style lang="stylus">
.searchCom
  position fixed
  bottom 9rem
  right 1.5rem
  z-index 99
  .btn-search-fixed
    position relative
    width 3rem
    height 3rem
    border 0 solid
    background-color rgba(0,0,0,0.3)
    border-radius 3rem
    .icon-search
      width 2rem
      height 2rem
      background url("./search-active-white.png")
      background-size contain
  .search-form
    position absolute
    top -3rem
    right 1rem
    &.move-enter-active
      transition right 0.3s linear
    &.move-leave-active
      transition right 0.3s linear
    &.move-enter,&.move-leave-to
      right -20rem
    .search-form-input
      width 15rem
      height 2.5rem
      border 1px solid #ed4529
      border-radius 0.2rem
      background-color #fff
      padding 0 3rem 0 1rem
      font-size 1rem
    .icon-search-active
      right 1rem
      width 1.5rem
      height 1.5rem
      background url("./search-active.png") center no-repeat
      background-size contain
</style>
