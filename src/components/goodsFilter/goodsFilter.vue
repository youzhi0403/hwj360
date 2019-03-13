<template>
    <div class="goodsFilter">
      <div class="goodsFilter-header">
        <div class="reset-btn vertical_center">
          重置
        </div>
        <div class="header-title center_elm">
        </div>
        <div class="finish-btn vertical_center close-popup" @click.stop.prevent="finish">
          完成
        </div>
      </div>
      <div class="goodsFilter-scroll" ref="goodsFilterScroll">
        <div class="goodsFilter-content">

          <div class="filter-content">
            <div class="filter-title" @click.stop.prevent="changeBrand">
              品牌
              <i class="toggle vertical_center icon-top-2"></i>
            </div>
            <div class="filter-container" v-show="brandIsShow">
              <div class="filter-elm brand" v-for="(item,index) in brand" :key="index">
                <input type="checkbox" :value="item.id" v-model="selectedBrand">
                {{item.name}}
              </div>
            </div>
          </div>

          <div class="filter-content">
            <div class="filter-title" @click.stop.prevent="changePrice">
              价格区间
              <i class="toggle vertical_center icon-top-2"></i>
            </div>
            <div class="filter-container" v-show="priceIsShow">
              <div class="filter-price">
                <input type="tel" placeholder="最低价" v-model="minPrice">
                <span>--</span>
                <input type="tel" placeholder="最高价" v-model="maxPrice">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import res from './brand'

export default {
  name: 'goodsFilter',
  data () {
    return {
      brand: [],
      brandIsShow: false,
      priceIsShow: false,
      selectedBrand: [],
      minPrice: 0,
      maxPrice: 0
    }
  },
  props: {
    propOfMinPrice: {
      type: Number,
      default: function () {
        return 0
      }
    },
    propOfMaxPrice: {
      type: Number,
      default: function () {
        return 0
      }
    },
    propOfSelectedBrand: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  created () {
    this.init()
    this.minPrice = this.propOfMinPrice
    this.maxPrice = this.propOfMaxPrice
    this.selectedBrand = this.propOfSelectedBrand
  },
  mounted () {
    this._initScroll()
  },
  methods: {
    init () {
      this.brand = res.data
    },
    changeBrand () {
      this.brandIsShow = !this.brandIsShow
      this.$nextTick(() => {
        this.contentScroll.refresh()
      })
    },
    changePrice () {
      this.priceIsShow = !this.priceIsShow
      this.$nextTick(() => {
        this.contentScroll.refresh()
      })
    },
    finish (event) {
      /* if (!event._constructed) {
        return
      } */
      this.$emit('finish', this.selectedBrand, this.minPrice, this.maxPrice)
    },
    _initScroll () {
      this.contentScroll = new BScroll(this.$refs['goodsFilterScroll'], {
        click: true
      })
    }
  }
}
</script>

<style lang="stylus">
.goodsFilter
  position fixed
  left 0
  top 0
  bottom 0px
  z-index 1000
  width 100%
  background #eff1f4
  .goodsFilter-header
    position relative
    width 100%
    max-width 640px
    height 3rem
    line-height 3rem
    overflow hidden
    background-color #fff
    border-bottom 1px solid #E9E9E9
    padding-bottom 1rem
    .reset-btn
      left 1.5rem
      color #a5a5a5
    .header-title
      height 3rem
      font-size 1.3rem
    .finish-btn
      right 1.5rem
      color #ed4529
  .goodsFilter-content
    padding 0
    padding-top 1rem
    background-color #fff
    float left
    width 100%
    max-width 640px
    .filter-content
      float left
      width 100%
      max-width 640px
      background-color #fff
      padding 0 0 1rem 1.5rem
      line-height 1.6
      .filter-title
        position relative
        font-weight 600
        padding-bottom 0.5rem
        .icon-top-2
          top 35%
          right 1.5rem
          width 1rem
          height 1rem
          background url("./arrow_up_gray@2x.png") no-repeat center
          background-size contain
      .filter-container
        display block
        width 100%
        float left
        .filter-elm
          padding 0.5rem 0.5rem
          height 2.5rem
          line-height 1.5rem
          float left
          background-color #eff1f4
          color #2f2f2f
          text-align center
          border-radius 0.2rem
          margin-right 1rem
          margin-bottom 1rem
        .filter-price
          input
            width 40%
            height 3rem
            line-height 3rem
            border none
            border-radius 0.2rem
            text-align center
            background-color #eff1f4
            outline none
            font-size 1.1rem
          span
            margin 0 0.5rem
            color #e5e5e5
            line-height 1.6
</style>
