<!--suppress ALL -->
<template>
  <div class="goodsList">
    <header class="header">
      <div class="selection-container">
        <div class="selection directionOption" @click.stop.prevent="saleCountSort">
          销量
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
    <div class="product">
      <div class="product_goods">
        <ul class="after" id="haowanjia-goods-wrapper">
          <li class="product_goods_elm" v-for="(item,index) in showGoods" :key="index">
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
    <!--筛选组件-->
    <div class="myFilter" v-show="filterIsShow">
      <goods-filter v-on:finish="finish"></goods-filter>
    </div>
    <!--悬浮组件-->
    <suspend></suspend>
  </div>
</template>

<script>
import { getGoodsList } from '../../api'
import GoodsFilter from '../goodsFilter/goodsFilter'
import Suspend from '../suspend/suspend'

export default {
  name: 'goodsList',
  components: { Suspend, GoodsFilter },
  data () {
    return {
      goods: [],
      showGoods: [],
      filterIsShow: false,
      selectedType: [],
      picked: '',
      minPrice: 0,
      maxPrice: 0,
      paramOfPriceSort:'',
      paramOfSaleCountSort:''
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      getGoodsList().then((res) => {
        this.goods = res.data
        this.showGoods = this.goods
      })
    },
    finish (selectedType, picked, minPrice, maxPrice) {
      this.filterIsShow = false
      /*过滤价格*/
      if(maxPrice === '' || minPrice === ''){
        this.showGoods = this.goods
      }else{
        this.showGoods = this.goods.filter((item)=>{
          if(item.price >= minPrice && item.price <= maxPrice){
            return item
          }
        })
      }
      /*过滤是否处方药*/
      if(picked !== ''){
        this.showGoods = this.showGoods.filter((item)=>{
          if(item.description === picked){
            return item
          }
        })
      }
      /*过滤品牌*/
      if(selectedType.length > 0){
        this.showGoods = this.showGoods.filter((item)=>{
          for(let i=0;i<selectedType.length;i++){
            if(selectedType[i] === item.typeId){
              return item
            }
          }
        })
      }
    },
    openFilter () {
      this.filterIsShow = true
    },
    saleCountSort(){
      let len = this.showGoods.length
      if(this.paramOfSaleCountSort ==='' || this.paramOfSaleCountSort === 'desc'){
        this.paramOfSaleCountSort = 'asc'
        for(let i=0;i<len-1;i++){
          for(let j=0;j<len-1-i;j++){
            if(this.showGoods[j].sellCount > this.showGoods[j+1].sellCount){
              let temp = this.showGoods[j+1]
              this.$set(this.showGoods,j+1,this.showGoods[j])
              this.$set(this.showGoods,j,temp)
            }
          }
        }
      }else{
        this.paramOfSaleCountSort = 'desc'
        for(let i=0;i<len-1;i++){
          for(let j=0;j<len-1-i;j++){
            if(this.showGoods[j].sellCount < this.showGoods[j+1].sellCount){
              let temp = this.showGoods[j+1]
              this.$set(this.showGoods,j+1,this.showGoods[j])
              this.$set(this.showGoods,j,temp)
            }
          }
        }
      }
    },
    priceSort(){
      let len = this.showGoods.length
      if(this.paramOfPriceSort === '' || this.paramOfPriceSort === 'desc'){
        this.paramOfPriceSort = 'asc'
        for(let i=0;i<len-1;i++){
          for(let j=0;j<len-1-i;j++){
            if(this.showGoods[j].price > this.showGoods[j+1].price){
              let temp = this.showGoods[j+1]
              this.$set(this.showGoods,j+1,this.showGoods[j])
              this.$set(this.showGoods,j,temp)
            }
          }
        }
      }else {
        this.paramOfPriceSort = 'desc'
        for(let i=0;i<len-1;i++){
          for(let j=0;j<len-1-i;j++){
            if(this.showGoods[j].price < this.showGoods[j+1].price){
              let temp = this.showGoods[j+1]
              this.$set(this.showGoods,j+1,this.showGoods[j])
              this.$set(this.showGoods,j,temp)
            }
          }
        }
      }
    }
  },
  watch: {
    showGoods(val){
      console.log('watch..',val)
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
