<template>
  <div class="goodsList">
    <header class="header">
      <div class="selection-container">
        <div class="selection directionOption">
          销量
          <i class="myIcon icon-top-bottom"></i>
        </div>
        <div class="selection directionOption">
          价格
          <i class="myIcon icon-top-bottom"></i>
        </div>
        <div class="selection directionOption">
          筛选
          <i class="myIcon icon-filter"></i>
        </div>
      </div>
    </header>
    <div class="product">
      <div class="product_goods">
        <ul class="after" id="haowanjia-goods-wrapper">
          <li class="product_goods_elm" v-for="(item,index) in goods" :key="index">
            <div class="product_elm_img">
              <img :src="item.src">
            </div>
            <div class="product_elm_text">
              <p>{{item.name}}</p>
              <p class="product_goods_price">{{item.price}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getGoodsList } from '../../api'

export default {
  name: 'goodsList',
  data () {
    return {
      goods: []
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      getGoodsList().then((res) => {
        this.goods = res.data
        console.log(this.goods)
      })
    }
  }
}
</script>

<style lang="stylus">
.header
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
      .icon-filter
        background url("./selection.png") no-repeat center
        background-size contain
.product
  position relative
  width 100%
  padding-bottom 1rem
  .product_goods
    width 100%
    ul
      width 100%
      height 100%
      box-sizing border-box
      border-right 1px solid #F3F3F3
      border-bottom 1px solid #F3F3F3
      .product_goods_elm
        float left
        box-sizing border-box
        width 49.5%
        height 13rem
        margin-top 2px
        position relative
        background-color #fff
        &:nth-child(odd)
          margin-right 2px
        .product_elm_img
          position absolute
          width 55%
          height 5rem
          top 1rem
          left 50%
          transform translate(-50%,0)
          img
            width 100%
            vertical-align middle
        .product_elm_text
          position absolute
          width 100%
          height 2.5rem
          bottom 2rem
          p
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            -webkit-line-clamp: 2;
            white-space: normal;
            height: 3rem;
            padding: 0 .5rem;
            text-overflow: ellipsis;
          .product_goods_price
            color #D93C27

</style>
