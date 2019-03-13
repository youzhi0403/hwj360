<template>
  <div class="goodList-normal goodList-normal-scroll" ref="goodListNormalScroll">
    <div class="goodList-normal-content">
      <good-list :goods="showGoods"></good-list>
    </div>
  </div>
</template>

<script>
import res from './goods'
import GoodList from '../../components/goodList/goodList'
import BScroll from 'better-scroll'
export default {
  name: 'goodList-normal',
  components: { GoodList },
  props: {
    keyword: {
      type: String,
      default: function () {
        return ''
      }
    }
  },
  data () {
    return {
      goods: [],
      showGoods: []
    }
  },
  methods: {
    init () {
      this.goods = res.data
      // 通过keyword匹配商品，但暂不匹配
      this.showGoods = this.goods.concat()
    },
    _initScroll () {
      this.goodListScroll = new BScroll(this.$refs['goodListNormalScroll'], {
        click: true
      })
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
  .goodList-normal
    position fixed
    top 0
    bottom 0
    left 0
    width 100%
    max-width 640px
    .goodList-normal-content
      width 100%
</style>
