<template>
  <div class="address">
    <div class="banner-container">
      <div class="banner">
      </div>
      <div class="banner-tips">
      </div>
    </div>

    <button class="fixed-btn-md" @click.stop.prevent="locateAddressAdd">
      添加一个新的地址
    </button>
    <suspend></suspend>

    <!--<div class="userAddress">
      <div class="user-border-top">
      </div>
      <div class="user">
        <div class="user-info">
          <div class="user-info-name"></div>
          <div class="user-info-tel"></div>
        </div>
        <div class="user-info-address">
        </div>
        <div class="set-normal">
          <i class="icon-check-red vertical_center"></i>
          <div class="set-normal-text vertical_center">设为默认</div>
        </div>
        <i class="icon-edit"></i>
        <i class="icon-del"></i>
      </div>
    </div>-->

  </div>
</template>

<script>
import Suspend from '../suspend/suspend'
export default {
  name: 'address',
  components: { Suspend },
  methods: {
    locateAddressAdd () {
      this.$router.push({ name: 'addressAdd' })
    }
  }
}
</script>

<style lang="stylus">
.address
  position absolute
  bottom 0
  top 0
  overflow hidden
  width 100%
  max-width 640px
  background-color #fff
  padding 5rem 0
  .banner-container
    .banner
      width 10rem
      height 8rem
      background url("./sddress_empty@2x.png")
      background-size contain
      margin 2rem auto 2rem
    .banner-tips
      text-align center
      color #a5a5a5
  .fixed-btn-md
    max-width 640px
    width 85%
    height 3.5rem
    line-height 3.5rem
    margin 0.5rem 7.5% 0.5rem
    border-radius 0.2rem
    border 1px solid #f09c8e
    outline none
    bottom 0
    background-color transparent
    color #ed4529
    text-align center
    font-size 1.2rem
    margin-top 10rem
</style>
