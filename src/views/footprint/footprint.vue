<template>
  <div class="footprint" ref="footprintScroll">
    <div class="footprint-content">
      <div class="footprint-content-item" v-for="(item,index) in goods" :key="index" @click="locateToGoodDetail(item)">
        <div class="footprint-item-img vertical-center">
          <img :src="item.image">
        </div>
        <div class="footprint-item-text vertical-center">
          <p class="footprint-item-name">{{item.fullname}}</p>
          <p class="footprint-item-guige">销量：{{item.sales}}</p>
          <p class="footprint-item-price">￥{{item.price}}</p>
        </div>
      </div>
    </div>
    <suspend></suspend>
  </div>
</template>

<script>
import res from './goods'
import BScroll from 'better-scroll'
import Suspend from '../../components/suspend/suspend'
export default {
  name: 'footprint',
  components: { Suspend },
  data () {
    return {
      goods: []
    }
  },
  methods: {
    init () {
      this.goods = res.data
    },
    _initScroll () {
      this.footprintScroll = new BScroll(this.$refs['footprintScroll'], {
        click: true
      })
    },
    locateToGoodDetail (item) {
      this.$router.push({ name: 'goodDetail', params: { good: item } })
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
.footprint
  position fixed
  top 0
  left 0
  bottom 0
  width 100%
  max-width 640px
  .footprint-content
    width 100%
    .footprint-content-item
      height 8rem
      line-height 1.6
      background-color #fff
      position relative
      &:not(:last-child)
        border-bottom 1px solid #E6E6E6
      .footprint-item-img
        width 6rem
        left 1rem
        img
          width 100%
          vertical-align middle
      .footprint-item-text
        left 8rem
        font-size 0.9rem
        .footprint-item-name
          font-size 1.2rem
        .footprint-item-guige
          margin 0.3rem 0
        .footprint-item-price
          color #ed4529

</style>
