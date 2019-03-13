<template>
  <div class="goodList-sales">
    <!--头部-->
    <div class="goodList-header">
      <div class="selection-container">
        <div class="selection directionOption" @click.stop.prevent="saleCountSort">
          销量
          <i class="myIcon icon-top-bottom" :class="{'desc':paramOfSaleCountSort==='desc','asc':paramOfSaleCountSort==='asc'}"></i>
        </div>
        <div class="selection directionOption" @click.stop.prevent="priceSort">
          价格
          <i class="myIcon icon-top-bottom" :class="{'desc':paramOfPriceSort==='desc','asc':paramOfPriceSort==='asc'}"></i>
        </div>
        <div class="selection directionOption" @click.stop.prevent="openFilter">
          筛选
          <i class="myIcon icon-filter"></i>
        </div>
      </div>
    </div>
    <!--商品列表组件-->
    <good-list :goods="showGoods"></good-list>
    <!--筛选组件-->
    <goods-filter v-show="isShow" v-on:finish="finish"></goods-filter>
    <!--悬浮组件-->
    <suspend></suspend>
  </div>
</template>

<script>
import res from './goods'
import Suspend from '../../components/suspend/suspend'
import GoodList from '../../components/goodList/goodList'
import GoodsFilter from '../../components/goodsFilter/goodsFilter'
export default {
  name: 'goodList-sales',
  components: { GoodsFilter, GoodList, Suspend },
  data () {
    return {
      goods: [], // 所有的商品
      showGoods: [], // 通过过滤器筛选出来的商品
      showGoodsCopy: [], // 展示商品的副本，用来存储没有排序之前的商品
      isShow: false, // 过滤器组件是否显示
      selectedBrand: [], // 选中的品牌
      minPrice: 0, // 最低价格
      maxPrice: 0, // 最高价格
      paramOfPriceSort: 'normal', // 价格排序的关键字 desc:降序排列 asc:升序排列 normal:正常排列
      paramOfSaleCountSort: 'normal' // 关键字同价格排序
    }
  },
  props: {
    classifyItem: {
      type: Object,
      default: function () {
        return {
        }
      }
    }
  },
  created () {
    this.init()
    if (this.classifyItem.id) {
      this.showGoods = this.goods.filter((item) => {
        if (item.categoryId === this.classifyItem.id) {
          return item
        }
      })
    }
  },
  methods: {
    init () {
      this.goods = res.data
      this.showGoods = this.goods
      this.showGoodsCopy = this.goods.concat()
    },
    finish (selectedBrand, minPrice, maxPrice) {
      this.isShow = false
      /* 过滤价格 */
      if (maxPrice === '' || minPrice === '') {
        this.showGoods = this.goods
      } else {
        this.showGoods = this.goods.filter((item) => {
          if (item.price >= minPrice && item.price <= maxPrice) {
            return item
          }
        })
      }
      /* 过滤品牌 */
      if (selectedBrand.length > 0) {
        this.showGoods = this.showGoods.filter((item) => {
          for (let i = 0; i < selectedBrand.length; i++) {
            if (selectedBrand[i] === item.brandId) {
              return item
            }
          }
        })
      }
    },
    openFilter () {
      this.isShow = true
    },
    saleCountSort () {
      let len = this.showGoods.length
      if (this.paramOfSaleCountSort === 'desc') {
        this.paramOfSaleCountSort = 'normal'
        this.showGoods = this.showGoodsCopy.concat()
      } else if (this.paramOfSaleCountSort === 'normal') {
        this.paramOfSaleCountSort = 'asc'
        for (let i = 0; i < len - 1; i++) {
          for (let j = 0; j < len - 1 - i; j++) {
            if (this.showGoods[j].sales > this.showGoods[j + 1].sales) {
              let temp = this.showGoods[j + 1]
              this.$set(this.showGoods, j + 1, this.showGoods[j])
              this.$set(this.showGoods, j, temp)
            }
          }
        }
      } else if (this.paramOfSaleCountSort === 'asc') {
        this.paramOfSaleCountSort = 'desc'
        for (let i = 0; i < len - 1; i++) {
          for (let j = 0; j < len - 1 - i; j++) {
            if (this.showGoods[j].sales < this.showGoods[j + 1].sales) {
              let temp = this.showGoods[j + 1]
              this.$set(this.showGoods, j + 1, this.showGoods[j])
              this.$set(this.showGoods, j, temp)
            }
          }
        }
      }
    },
    priceSort () {
      let len = this.showGoods.length
      if (this.paramOfPriceSort === 'desc') {
        this.paramOfPriceSort = 'normal'
        this.showGoods = this.showGoodsCopy.concat()
      } else if (this.paramOfPriceSort === 'normal') {
        this.paramOfPriceSort = 'asc'
        for (let i = 0; i < len - 1; i++) {
          for (let j = 0; j < len - 1 - i; j++) {
            if (this.showGoods[j].price > this.showGoods[j + 1].price) {
              let temp = this.showGoods[j + 1]
              this.$set(this.showGoods, j + 1, this.showGoods[j])
              this.$set(this.showGoods, j, temp)
            }
          }
        }
      } else if (this.paramOfPriceSort === 'asc') {
        this.paramOfPriceSort = 'desc'
        for (let i = 0; i < len - 1; i++) {
          for (let j = 0; j < len - 1 - i; j++) {
            if (this.showGoods[j].price < this.showGoods[j + 1].price) {
              let temp = this.showGoods[j + 1]
              this.$set(this.showGoods, j + 1, this.showGoods[j])
              this.$set(this.showGoods, j, temp)
            }
          }
        }
      }
    }
  }
}
</script>

<style lang="stylus">
  .goodList-header
    width 100%
    max-width 640px
    height 640px
    height 3rem
    background-color #fff
    z-index 3
    .selection-container
      position fixed
      z-index 5
      width 100%
      max-width 640px
      height 3rem
      display flex
      justify-content space-around
      line-height 3rem
      background-color #fff
      .selection
        .myIcon
          width 1rem
          height 1rem
          display inline-block
          margin-left 0.2rem
          vertical-align middle
        .icon-top-bottom
          background url("./top-bottom.png") no-repeat center
          background-size contain
          &.desc
            background url("./bottomActive-top.png") no-repeat center
            background-size contain
          &.asc
            background url("./topActive-bottom.png") no-repeat center
            background-size contain
        .icon-filter
          background url("./selection.png") no-repeat center
          background-size contain

</style>
