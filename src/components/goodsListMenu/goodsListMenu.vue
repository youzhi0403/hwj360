<template>
  <div class="goodsListMenu">
    <header class="goodListMenu-filter">
      <div class="selection-container">
        <div class="selection directionOption" @click.stop.prevent="menuShow">
          {{level2}}
          <i class="myIcon icon-top-bottom"></i>
        </div>
        <div class="selection directionOption" @click.stop.prevent="priceSort">
          价格
          <i class="myIcon icon-top-bottom"></i>
        </div>
        <div class="selection directionOption" @click.stop.prevent="openFilter">
          筛选
          <i class="myIcon icon-filter"></i>
        </div>
      </div>
    </header>
    <!--商品列表-->
    <cube-scroll
      :options="options"
      class="goodListMenu-scroll"
      ref="goodsListMenuScroll"
    >
      <div class="goodsListMenu-products">
        <ul class="after">
          <li class="product-info" v-for="(item,index) in showGoods" :key="index">
            <div class="product-info-img">
              <img :src="item.src">
            </div>
            <div class="product-info-text">
              <p>{{item.name}}</p>
              <p class="product-info-price">{{item.price}}</p>
            </div>
          </li>
        </ul>
      </div>
    </cube-scroll>
    <!--筛选组件-->
    <div class="myFilter" v-show="filterIsShow">
      <goods-filter v-on:finish="finish"></goods-filter>
    </div>
    <!--悬浮组件-->
    <suspend></suspend>

    <!--菜单组件-->
    <div class="myMenuSelect" v-show="menuSelectIsShow">
      <menu-select></menu-select>
    </div>

  </div>
</template>

<script>
import { getGoodsList } from '../../api'
import GoodsFilter from '../goodsFilter/goodsFilter'
import Suspend from '../suspend/suspend'
import MenuSelect from '../menuSelect/menuSelect'

export default {
  name: 'goodsListMenu',
  components: { MenuSelect, Suspend, GoodsFilter },
  data () {
    return {
      /* 所有的商品 */
      goods: [],
      /* 需要显示的商品 */
      showGoods: [],
      /* 筛选插件是否显示 */
      filterIsShow: false,
      /* 菜单插件是否显示 */
      menuSelectIsShow: false,
      /* 筛选插件的四个选项 */
      selectedType: [],
      picked: '',
      minPrice: 0,
      maxPrice: 0,
      /* 按价格排序的参数 */
      paramOfPriceSort: '',
      /* 按销量排序的参数 */
      paramOfSaleCountSort: '',
      /* better-scroll插件的选项 */
      options: {},
      /* 选择的分类 */
      level2: ''
    }
  },
  created () {
    this.level2 = this.$route.params.level2
    this.init()
  },
  methods: {
    init () {
      getGoodsList().then((res) => {
        this.goods = res.data
        this.showGoods = this.goods
        this.menuFilter()
      })
    },
    finish (selectedType, picked, minPrice, maxPrice) {
      this.filterIsShow = false
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
      /* 过滤是否处方药 */
      if (picked !== '') {
        this.showGoods = this.showGoods.filter((item) => {
          if (item.description === picked) {
            return item
          }
        })
      }
      /* 过滤品牌 */
      if (selectedType.length > 0) {
        this.showGoods = this.showGoods.filter((item) => {
          for (let i = 0; i < selectedType.length; i++) {
            if (selectedType[i] === item.typeId) {
              return item
            }
          }
        })
      }
    },
    openFilter () {
      this.filterIsShow = true
    },
    menuShow () {
      /* 创建menu popup */
      const instance = this.$createMenuSelect({
        initData: this.$route.params.bodys,
        level1Index: this.$route.params.level1Index,
        level2Index: this.$route.params.level2Index,
        level1: this.$route.params.level1,
        level2: this.level2
      })
      instance.$on('selectMenu', (val) => {
        this.level2 = val
        this.menuFilter()
      })
      instance.$on('close', () => {
        instance.remove()
      })
      instance.show()
    },
    priceSort () {
      let len = this.showGoods.length
      if (this.paramOfPriceSort === '' || this.paramOfPriceSort === 'desc') {
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
      } else {
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
    },
    menuFilter () {
      if (this.$route.params.model === 'bodyModel') {
        this.showGoods = this.goods.filter((item) => {
          if (item.classification === this.level2) {
            return item
          }
        })
      } else if (this.$route.params.model === 'illnessModel') {
        this.showGoods = this.goods.filter((item) => {
          if (item.classification1 === this.level2) {
            return item
          }
        })
      }
    }
  },
  watch: {
    showGoods (val) {
      console.log('watch..', val)
    }
  }
}
</script>

<style lang="stylus">
.goodsListMenu
  position absolute
  top 3rem
  left 0
  bottom 0
  width 100%
  max-width 640px
  overflow hidden
  .goodListMenu-filter
    position fixed
    top 0
    left 0
    width 100%
    max-width 640px
    height 3rem
    background-color #fff
    z-index 3
    .selection-container
      position fixed
      display flex
      justify-content space-around
      width 100%
      max-width 640px
      height 3rem
      line-height 3rem
      background-color #fff
      z-index 5
      .selection
        .myIcon
          width 1rem
          height 1rem
          display inline-block
          margin-left 0.2rem
          vertical-align middle
        .icon-top-bottom
          background url("./med_triangle_gray@2x.png") no-repeat center
          background-size contain
          display inline-block
          vertical-align middle
          width 0.5rem
          height 0.5rem
        .icon-filter
          background url("./selection.png") no-repeat center
          background-size contain
  .goodListMenu-scroll
    position relative
    height 100%
    .goodsListMenu-products
      position relative
      width 100%
      ul
        width 100%
        height 100%
        box-sizing border-box
        border-right 1px solid #F3F3F3
        border-bottom 1px solid #F3F3F3
        .product-info
          position relative
          float left
          width 49.5%
          height 13rem
          margin-top 0.09rem
          background-color #fff
          box-sizing border-box
          &:nth-child(odd)
            margin-right 0.05rem
          .product-info-img
            position absolute
            width 55%
            height 5rem
            top 1rem
            left 50%
            transform translate(-50%,0)
            img
              width 100%
              vertical-align middle
          .product-info-text
            position absolute
            width 100%
            height 2.5rem
            bottom 2rem
            font-size 0.9rem
            p
              display: -webkit-box;
              -webkit-box-orient: vertical;
              overflow: hidden;
              -webkit-line-clamp: 2;
              white-space: normal;
              height: 3rem;
              padding: 0 .5rem;
              text-overflow: ellipsis;
            .product-info-price
              color #D93C27
</style>
