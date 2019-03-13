<template>
  <div class="addressSelect">
    <button class="popup-fixed-btn-md" @click.stop.prevent="locateToAddress">使用新的地址</button>
    <div class="popup-user" v-for="(item,index) in address" :key="index" @click.stop.prevent="selectAddress(item)">
      <div class="popup-user-info">
        <div class="popup-user-info-name">{{item.name}}</div>
        <div class="popup-user-info-tel">{{item.telephone}}</div>
      </div>
      <div class="popup-user-info-address">
        {{item.region}}&nbsp;{{item.definiteRegion}}
      </div>
    </div>
    <div class="popup-footer">
      <div class="popup-footer-btn" @click.stop.prevent="close">取消</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'addressSelect',
  computed: {
    ...mapState([
      'address'
    ])
  },
  methods: {
    close (e) {
      this.$emit('close', e)
    },
    selectAddress (item) {
      this.$emit('selectAddress', item)
    },
    locateToAddress () {
      this.$router.push({ name: 'addressAdd' })
    }
  }
}
</script>

<style lang="stylus">
.addressSelect
  width 100%
  position fixed
  z-index 100
  bottom 0
  border-radius 0
  color #3d4145
  height 100%
  background #EFEFF4
  .popup-fixed-btn-md
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
  .popup-user
    position relative
    width 100%
    padding-right 15%
    background-color #fff
    margin-bottom 0.8rem
    line-height 1.6
    .popup-user-info
      width 100%
      height 3rem
      line-height 3rem
      font-size 1.2rem
      padding-left 1rem
      .popup-user-info-name
        width 25%
        display inline-block
        text-align center
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        margin-right 1rem
      .popup-user-info-tel
        width 65%
        display inline-block
    .popup-user-info-address
      width 100%
      padding-left 2rem
  .popup-footer
    position fixed
    bottom 0
    width 100%
    max-width 640px
    height 3rem
    background-color #ff644a
    .popup-footer-btn
      width 100%
      display inline-block
      height 3rem
      line-height 3rem
      text-align center
      color #FFFFFF
</style>
