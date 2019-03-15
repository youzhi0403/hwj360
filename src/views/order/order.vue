<template>
  <div class="order">
    <cube-tab-bar
      :data="tabLabels"
      v-model="selectedLabel"
    >
    </cube-tab-bar>
    <div class="tab-slide-container">
      <cube-slide
        :initial-index="initialIndex"
        :options="slideOptions"
        :show-dots="showDots"
        :loop="loop"
        :auto-play="autoPlay"
        @change="changePage"
      >
        <cube-slide-item>
          <div class="order-all-scroll" ref="orderAllScroll">
            <ul class="cart-elms">
              <!--订单商品-->
              <li class="cart-elm" v-for="(item,index) in orders" :key="index" @click="locateToOrderDetail(item)">
                <!--店铺名字-->
                <div class="cart-elm-top">
                  <i class="icon-shop vertical-center"></i>
                  <div class="shop-name fl">好万家大药房（自营）</div>
                  <div class="shop-product-status fl">
                    已取消
                  </div>
                </div>
                <div class="cart-elm-content">
                  <ul class="cart-products">
                    <!--店铺商品-->
                    <li class="cart-product" v-for="(item2,index2) in item.goods" :key="index2">
                      <div class="cart-product-content">
                        <div class="cart-product-detail">
                          <div class="cart-product-img vertical-center">
                            <img :src="item2.image">
                          </div>
                          <div class="cart-product-text">
                            <div><p class="cart-product-name">{{item2.name}}</p> <span class="fr">×{{item2.quantity}}</span>
                            </div>
                            <p class="cart-product-guige cart-guige">规格: {{item2.specification}}</p>
                            <p class="cart-product-price">￥{{item2.price}}</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="cart-product-footer">
                  <div class="cart-product-footer-left">共<span class="cart-product-footer-num">{{item.goodsNumber}}</span>件商品</div>
                  <div class="cart-product-footer-right">
                    总额：<span class="cart-product-footer-price">￥{{item.totalPrice}}</span>
                  </div>
                </div>

                <div class="cart-btn">
                  <button class="right-btn order-consult-button">咨询客服</button>
                </div>
              </li>
            </ul>
          </div>

        </cube-slide-item>

        <cube-slide-item>
          <div class="none-page">
            <div class="banner"></div>
            <div class="banner-tips">暂无订单</div>
          </div>
        </cube-slide-item>

        <cube-slide-item>
          <div class="none-page">
            <div class="banner"></div>
            <div class="banner-tips">暂无订单</div>
          </div>
        </cube-slide-item>

        <cube-slide-item>
          <div class="none-page">
            <div class="banner"></div>
            <div class="banner-tips">暂无订单</div>
          </div>
        </cube-slide-item>

        <cube-slide-item>
          <div class="none-page">
            <div class="banner"></div>
            <div class="banner-tips">暂无订单</div>
          </div>
        </cube-slide-item>
      </cube-slide>
    </div>

  </div>
</template>

<script>
import res from './order'
import BScroll from 'better-scroll'
export default {
  name: 'order',
  data () {
    return {
      selectedLabel: '全部',
      tabLabels: [
        {
          label: '全部'
        },
        {
          label: '待支付'
        },
        {
          label: '待发货'
        },
        {
          label: '待收货'
        },
        {
          label: '待评价'
        }
      ],
      slideOptions: {
        listenScroll: true,
        probeType: 3,
        directionLockThreshold: 0
      },
      showDots: false,
      loop: false,
      autoPlay: false,
      orders: []
    }
  },
  computed: {
    initialIndex () {
      let index = 0
      for (let i = 0; i < this.tabLabels.length; i++) {
        if (this.tabLabels[i].label === this.selectedLabel) {
          index = i
          break
        }
      }
      return index
    }
  },
  created () {
    this.init()
  },
  mounted () {
    this._initScroll()
  },
  methods: {
    changePage (current) {
      this.selectedLabel = this.tabLabels[current].label
    },
    init () {
      this.orders = res.data
    },
    _initScroll () {
      this.orderAllScroll = new BScroll(this.$refs['orderAllScroll'], {
        click: true
      })
    },
    locateToOrderDetail (item) {
      this.$router.push({ name: 'orderDetail', params: { order: item } })
    }
  }
}
</script>

<style lang="stylus">
  .order
    .cube-tab-bar
      width 100%
      height 3.5rem
      line-height 3.5rem
      max-width 640px
      text-align center
      background-color #fff
      .cube-tab_active
        color #ed4529
        font-size 1.2rem
    .tab-slide-container
      position fixed
      top 3.5rem
      left 0
      right 0
      bottom 0
      .cube-slide-item
        .none-page
          overflow hidden
          width 100%
          max-width 640px
          height 100%
          background-color #fff
          padding 5rem 0 0
          margin-top 1.1em
          .banner
            width 10rem
            height 8rem
            background url('./order_empty@3x.png') no-repeat center
            background-size contain
            margin 2rem auto 2rem
          .banner-tips
            text-align center
            color #a5a5a5
    .order-all-scroll
      height 100%
      .cart-elms
        width 100%
        .cart-elm
          width 100%
          background-color #fff
          margin-top 0.6rem
          .cart-elm-top
            width 100%
            height 3rem
            position relative
            padding-left 1.5rem
            .icon-shop
              left 5%
              width 1.5rem
              height 1.5rem
              background url('./shops-logo.png') center no-repeat
              background-size contain
            .shop-name
              height 3rem
              line-height 3rem
              font-size 1.2rem
              margin-left 2rem
            .fl
              float left
            .shop-product-status
              width 30%
              height 3rem
              line-height 3rem
              color #ed4529
              float right
              text-align right
              padding-right 1.5rem
          .cart-elm-content
            width: 100%
            .cart-products
              width 100%
              height 100%
              .cart-product
                width 100%
                height 8rem
                position relative
                .cart-product-content
                  width 100%
                  height 100%
                  .cart-product-detail
                    height 100%
                    position relative
                    border-top 1px solid #F4F4F4
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
                        .fr
                          float right
                      .cart-product-guige
                        width 100%
                        height 1rem
                        line-height 1rem
                        font-size 1rem
                      .cart-product-price
                        color #ed4529
                        font-size 1rem
                        position absolute
                        bottom 1.5rem

          .cart-product-footer
            width 100%
            height 3.5rem
            line-height 3.5rem
            border-top 1px solid #e5e5e5
            .cart-product-footer-left
              width 60%
              height 3.5rem
              line-height 3.5rem
              float left
              text-align right
            .cart-product-footer-right
              width 35%
              height 3.5rem
              line-height 3.5rem
              float left
              margin 0 2.5%
          .cart-btn
            width 100%
            height 3.5rem
            border-top 1px solid #e5e5e5
            .right-btn
              float right
              border 1px solid #ed4529
              outline none
              width 6rem
              text-align center
              height 2.5rem
              line-height 2.5rem
              margin .5rem .8rem .5rem .4rem
              color #ed4529
              background-color #fff
              border-radius 5%
              font-size 1rem
</style>
