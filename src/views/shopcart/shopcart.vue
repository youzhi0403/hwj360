<template>
  <div class="shopcart">
    <h1 class="shopcart-title">
      购物车
      <div class="shopcart-title-button" v-if="shopcartNumber > 0 && status==='pay'" @click.stop.prevent="changeStatus('delete')">
        编辑
      </div>
      <div class="shopcart-title-button" v-else-if="shopcartNumber > 0 && status==='delete'" @click.stop.prevent="changeStatus('pay')">
        删除
      </div>
    </h1>

    <!--全选底部导航条-->
    <div class="fixed-ele" v-show="shopcartNumber > 0">
      <div class="select-menu">
        <div class="select-menu-all" @click.stop.prevent="activeAll">
          <i class="icon-select vertical-center" :class="{'active':allSelect}"></i>
          <p class="cart-selected">全选<span class="select-num">({{totalNumber}})</span></p>
        </div>
        <div class="submit-btn-cart" :class="{'active':oneActive}" v-if="status==='pay'" @click.stop.prevent="payGoods">
          <span>结算</span>
        </div>
        <div class="submit-btn-cart" :class="{'active':oneActive}" v-else-if="status==='delete'" @click.stop.prevent="removeGoods">
          <span>删除</span>
        </div>

        <div class="select-menu-price">
          ￥{{totalPrice}}
        </div>
      </div>
    </div>

    <!--商品为空时内容-->
    <div class="shopcart-empty-container" v-show="shopcartNumber === 0">
      <div class="empty-scroll" ref="emptyScroll">
        <div class="shopcart-empty-wrapper">
          <div class="shopcart-empty-box">
            <div class="box-img">
            </div>
            <div class="box-text" @click.stop.prevent="locateToHome">
              去商场看看
            </div>
          </div>
          <div class="shopcart-empty-recommend">
            <div class="recommend-top">
              <i class="icon-recommend vertical-center"></i>
              <p class="recommend-top-text">热品推荐</p>
            </div>
            <good-list :goods="recommendGoods"></good-list>
          </div>
        </div>
      </div>
    </div>

    <!--商品不为空时内容-->
    <div class="shopcart-non-empty-container" v-show="shopcartNumber > 0">
      <div class="non-empty-scroll" ref="nonEmptyScroll">
        <div class="non-empty-wrapper">
          <div class="non-empty-title">
            <i class="icon-select vertical-center" @click.stop.prevent="activeAll" :class="{'active':allSelect}"></i>
            <h1>好万家健康商城</h1>
            <i class="icon-right vertical-center"></i>
          </div>
          <ul class="cart-products">
            <li class="cart-product" v-for="(item,index) in cartList" :key="index">
              <i class="icon-select vertical-center" @click.stop.prevent="activeOne(item)" :class="{'active':item.active}"></i>
              <div class="cart-product-detail">
                <div class="cart-product-img vertical-center">
                  <img :src="item.image"/>
                </div>
                <div class="cart-product-text">
                  <div>
                    <p class="cart-product-name">{{item.fullname}}</p>
                    <span class="cart-product-quantity">x{{item.quantity}}</span>
                  </div>
                  <p class="cart-product-size" v-show="status==='pay'">规格：{{item.specification}}</p>
                  <p class="cart-product-price">￥{{item.price}}</p>

                  <div class="cart-product-edit" v-show="status==='delete'">
                    <span class="cart-number-icon" @click.stop.prevent="sub(item)">-</span>
                    <input class="cart-buy-number" v-model="item.quantity">
                    <span class="cart-number-icon" @click.stop.prevent="add(item)">+</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <footer-nav :propOfRouterName="navName"></footer-nav>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations, mapGetters } from 'vuex'
import res from './goods'
import FooterNav from '../../components/footer-nav/footer-nav'
import GoodList from '../../components/goodList/goodList'
export default {
  name: 'shopcart',
  components: { GoodList, FooterNav },
  data () {
    return {
      status: 'pay', // 购物车处于结算状态，还是删除状态
      recommendGoods: [], // 推荐商品
      navName: 'shopcart'
    }
  },
  computed: {
    ...mapState([
      'cartList'
    ]),
    ...mapGetters([
      'totalPrice',
      'getterOfAllSelect',
      'shopcartNumber',
      'totalNumber',
      'oneActive'
    ]),
    // 是否选中所有
    allSelect: function () {
      let result = true
      this.cartList.map(function (item) {
        if (!item.active) {
          result = false
        }
      })
      return result
    }
  },
  watch: {
    cartList: function () {
      this.nonEmptyScroll.refresh()
    }
  },
  created () {
    this.recommendGoods = res.data
  },
  mounted () {
    this._initScroll()
  },
  methods: {
    _initScroll () {
      this.emptyScroll = new BScroll(this.$refs['emptyScroll'], {
        click: true
      })
      this.nonEmptyScroll = new BScroll(this.$refs['nonEmptyScroll'], {
        click: true
      })
    },
    ...mapMutations([
      'ACTIVE_GOOD',
      'CANCLE_GOOD',
      'ACTIVE_ALL',
      'CANCLE_ALL',
      'INCREMENT_QUANTITY',
      'DESCREASE_QUANTITY',
      'REMOVE_CART'
    ]),
    activeAll () {
      this.isSelectAll = !this.isSelectAll
      if (this.isSelectAll) {
        this.ACTIVE_ALL()
      } else {
        this.CANCLE_ALL()
      }
    },
    activeOne (item) {
      if (item.active) {
        this.CANCLE_GOOD(item)
      } else {
        this.ACTIVE_GOOD(item)
      }
    },
    locateToHome () {
      this.$router.push({ name: 'home', params: { propOfRouterName: 'home' } })
    },
    changeStatus (val) {
      this.status = val
    },
    add (item) {
      this.INCREMENT_QUANTITY({ id: item.id, quantity: 1 })
    },
    sub (item) {
      if (item.quantity > 1) {
        this.DESCREASE_QUANTITY(item.id)
      }
    },
    payGoods () {
      if (this.totalNumber > 0) {
        this.$router.push({ name: 'pay' })
      } else {
        alert('请选中商品')
      }
    },
    removeGoods () {
      this.REMOVE_CART()
    }
  }
}
</script>

<style lang="stylus">
  .shopcart
    position absolute
    top 3rem
    bottom 3.5rem
    left 0
    width 100%
    max-width 640px
    overflow hidden
    .shopcart-title
      position fixed
      top 0
      max-width 640px
      width 100%
      height 3rem
      line-height 3rem
      background-color #fff
      border-bottom 1px solid #f3f3f3
      font-size 1.2rem
      text-align center
      z-index 5
      .shopcart-title-button
        position absolute
        right 1rem
        top 0
    .shopcart-empty-container
      width 100%
      height 100%
      .empty-scroll
        position relative
        height 100%
        .shopcart-empty-wrapper
          width 100%
          .shopcart-empty-box
            padding 3rem 0 3.5rem
            background-color #fff
            .box-img
              width 10rem
              height 8rem
              margin 0 auto
              background url("./car_empty@2x.png") no-repeat center
              background-size contain
            .box-text
              width 40%
              height 3rem
              margin 1rem auto
              border 1px solid #ed4529
              border-radius 0.2rem
              background-color #fff
              color #ed452f
              text-align center
              line-height 3rem
              font-size 1.4rem
              cursor pointer
          .shopcart-empty-recommend
            margin-top 0.6rem
            width 100%
            .recommend-top
              position relative
              width 100%
              height 3rem
              line-height 3rem
              text-align center
              background-color #fff
              .icon-recommend
                position absolute
                top 50%
                left 35%
                transform translate(0,-50%)
                background url("./tuijian-icon.png") no-repeat center
                background-size contain
                width 1.5rem
                height 1.5rem
                display block
              .recommend-top-text
                display inline-block
                font-size 0.9rem
            .recommend-content
              width 100%
              border-top 1px solid #E2E2E2
              line-height 1.6
              li
                float left
                width 49%
                height 18rem
                position relative
                background-color #fff
                margin-bottom 1%
                &:nth-child(odd)
                  width 50%
                  margin-right 1%
                .recommend-item-img
                  position absolute
                  width 80%
                  max-width 165px
                  top 2rem
                  left 50%
                  transform translate(-50%,0)
                  img
                    width 100%
                    vertical-align middle
                .recommend-item-text
                  position absolute
                  width 95%
                  bottom 1rem
                  left 50%
                  transform translate(-50%,0)
                  font-size 1rem
                  white-space nowrap
                  overflow hidden
                  text-overflow ellipsis
                  p
                    font-size 0.9rem
                  .recommend-item-price
                    color #D93C27
    .fixed-ele
      position fixed
      width 100%
      max-width 640px
      bottom 3.5rem
      background-color #F9F9F9
      border-top 1px solid #e9e9e9
      border-bottom 1px solid #e9e9e9
      z-index 50
      .select-menu
        position relative
        height 3.5rem
        margin-left 1.5rem
        .select-menu-all
          display inline-block
          width 8rem
          height 3.5rem
          line-height 3.5rem
          position relative
          float left
          .icon-select
            width 1.5rem
            height 1.5rem
            background url("./icon-select-false.png") center no-repeat
            background-size contain
            &.active
              width 1.5rem
              height 1.5rem
              background url("./icon-select-true.png") center no-repeat
              background-size contain
          .cart-selected
            margin-left 2rem
        .submit-btn-cart
          float right
          background-color #A5A5A5
          width 38%
          height 3.5rem
          line-height 3.5rem
          text-align center
          display inline-block
          color #fff
          margin-left 0.5rem
          &.active
            background-color #ed4529
        .select-menu-price
          float right
          color #ed4529
          height 3.5rem
          line-height 3.5rem
          display inline-block
          text-align right
    .shopcart-non-empty-container
      position fixed
      top 3rem
      left 0
      padding-bottom 10rem
      width 100%
      height 100%
      .non-empty-scroll
        position relative
        height 100%
        .non-empty-wrapper
          width 100%
          background-color #fff
          padding-left 1.5rem
          margin-top 0.6rem
          .non-empty-title
            width 100%
            height 3rem
            position relative
            border-bottom 1px solid #F4F4F4
            .icon-select
              width 1.5rem
              height 1.5rem
              background url("./icon-select-false.png") center no-repeat
              background-size contain
              &.active
                width 1.5rem
                height 1.5rem
                background url("./icon-select-true.png") center no-repeat
                background-size contain
            h1
              height 3rem
              line-height 3rem
              font-size 1.2rem
              margin-left 2rem
              float left
            .icon-right
              right 5%
              display block
              width 1.2rem
              height 1.2rem
              background url("./order-right.png") center no-repeat
              background-size contain
          .cart-products
            width 100%
            height 100%
            margin-bottom 3.5rem
            .cart-product
              width 100%
              height 8rem
              position relative
              .icon-select
                width 1.5rem
                height 1.5rem
                background url("./icon-select-false.png") center no-repeat
                background-size contain
                &.active
                  width 1.5rem
                  height 1.5rem
                  background url("./icon-select-true.png") center no-repeat
                  background-size contain
              .cart-product-detail
                margin-left 1.5rem
                height 100%
                position relative
                .cart-product-img
                  width 6rem
                  height 6rem
                  left 0.5rem
                  img
                    width 100%
                    vertical-align middle
                .cart-product-text
                  margin-left 7rem
                  height 100%
                  padding 1.5rem 1.5rem 1.5rem 0
                  div
                    .cart-product-name
                      width 80%
                      display inline-block
                      font-size 1rem
                      white-space nowrap
                      overflow hidden
                      text-overflow ellipsis
                    .cart-product-quantity
                      float right
                  .cart-product-size
                    width 100%
                    height 2rem
                    line-height 2rem
                    font-size 1rem
                  .cart-product-price
                    color #ed4529
                    font-size 1rem
                    position absolute
                    bottom 1.5rem
                  .cart-product-edit
                    position absolute
                    width 8rem
                    height 2rem
                    right 1.5rem
                    bottom 1.5rem
                    border 1px solid #B0B0B0
                    .cart-number-icon
                      position relative
                      display inline-block
                      width 2rem
                      height 2rem
                      line-height 2rem
                      text-align center
                      color #505050
                      top -0.1rem
                      font-size 1.2rem
                    .cart-buy-number
                      position relative
                      width 3rem
                      height 2rem
                      background-color transparent
                      text-align center
                      outline none
                      border none
                      border-left 1px solid #9c9c9c
                      border-right 1px solid #9c9c9c
                      top -0.1rem
                      font-size 1rem
</style>
