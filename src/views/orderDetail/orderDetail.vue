<template>
  <div class="orderDetail">
    <!--交易取消顶部-->
    <div class="order-detail-top">
      <img src="./detaile_cancel_bg@3x.png">
      <div class="top-content horizontal-center">
        <i class="icon-cancel vertical-center"></i>
        <p class="top-text vertical-center">交易已取消</p>
      </div>
    </div>

    <div class="order-detail-receiver">
      <div class="order-receiver-name after">
        <p class="fl">{{order.recipients}}</p>
        <p class="fr">{{order.telephone}}</p>
      </div>
      <div class="order-receiver-address"> 收货地址 : {{order.address}}</div>
      <!--订单编号，下单时间-->
      <div class="order-detail-number">
        <div class="order-number-text">
          <i class="vertical-center"></i>订单编号 : <span>{{order.orderNumber}}</span>
        </div>
        <div class="order-number-text">
          <i class="vertical-center"></i>下单时间 : <span>{{order.orderTime}}</span>
        </div>
        <div class="order-number-text">
          <i class="vertical-center"></i>支付方式 : <span class="order-state">{{order.payWay}}</span>
        </div>

        <div class="order-number-text">
          <i class="vertical-center"></i>配送方式 : <span class="order-state">{{order.deliveryWay}}</span>
        </div>
        <div class="order-number-text">
          <i class="vertical-center"></i>订单状态 : <span class="order-state">{{order.status}}</span>
        </div>
      </div>
      <div class="products-total">
        <img src="./kefus.png">  咨询客服
      </div>
      <!--订单商品-->
      <div class="order-detail-products">
        <div class="products-shop">
          <div class="shops-logo-img vertical-center">
            <img src="./shops-logo.png">
          </div>
          <p class="shops-name">好万家健康商城</p>
          <i class="icon-top fr"></i>
        </div>
        <div class="order-detail-products-container">
          <div class="products-items">

            <div class="products-item" v-for="(item,index) in order.goods" :key="index">
              <div class="products-item-img fl">
                <img :src="item.image">
              </div>
              <div class="products-item-text">
                <div class="products-text-top">
                  <p class="products-item-name">{{item.name}}</p>
                  <p class="products-item-data">×{{item.quantity}}</p>
                </div>
                <p class="products-item-guige">规格: {{item.specification}}</p>
                <p class="products-item-price">￥{{item.price}}</p>
              </div>
            </div>

          </div>
          <div class="products-data">
            <p>
              共 <span>{{order.goodsNumber}}</span>件商品 实付款: <span>￥{{order.totalPrice}}</span>
            </p>
            <p class="products-data-yunfei">
              运费总额: +<span>￥{{order.deliveryPrice}}</span>
            </p>
            <p>
              活动优惠(包含优惠券、积分抵扣): -<span>￥{{order.discountPrice}}</span>
            </p>
          </div>
          <div class="products-total">本单合计:&nbsp;
            ￥{{order.totalPrice}}</div>
        </div>
      </div>
      <!--发票-->
      <div class="order-detail-fapiao">
        <p class="fl">发票信息</p>
        <p class="fr">个人-明细</p>
      </div>

      <!--物流跟踪 end-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'orderDetail',
  props: {
    order: {
      type: Object,
      default: function () {
        return {
          recipients: '张三',
          address: '北京市东城区测试',
          telephone: 13065986546,
          orderNumber: '1903045080609',
          orderTime: '2019-03-04 16:50:33',
          payWay: '微信支付',
          deliveryWay: '快递配送',
          status: '已取消',
          totalPrice: 569.50,
          discountPrice: 0.00,
          deliveryPrice: 0.00,
          goodsNumber: 3,
          goods: [
            {
              id: 1,
              name: '补肺丸(乐天)',
              specification: '9g*10丸*4板',
              price: 278.00,
              quantity: 2,
              image: 'http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!200x200.jpg'
            },
            {
              id: 2,
              name: '阿莫西林胶囊',
              specification: '0.25g*20粒',
              price: 13.50,
              quantity: 1,
              image: 'http://image.360hwj.com/goods/929834/210dca60-79cc-4bd2-99c6-1fddc341423c!200x200.jpg'
            }
          ]
        }
      }
    }
  }

}
</script>

<style lang="stylus">
.orderDetail
  width 100%
  padding-bottom 4.6rem
  line-height 1.6
  .order-detail-top
    width 100%
    position relative
    img
      width 100%
      vertical-align middle
    .top-content
      position absolute
      top 0
      width 10rem
      height 100%
      .icon-cancel
        display inline-block
        width 2rem
        height 2rem
        background url('./detaile_cancel@3x.png') no-repeat center
        background-size contain
      .top-text
        color #fff
        left 3rem
  .order-detail-receiver
    margin-top 0.6rem
    width 100%
    height 5.5rem
    background-color #Fff
    .order-receiver-name
      padding 0.5rem 1rem
      .fl
        float left
      .fr
        float right
    .order-receiver-address
      margin 0 1rem
      font-size 0.8rem
    .order-detail-number
      margin-top 0.6rem
      width 100%
      background-color #Fff
      padding 0.8rem 1rem
      .order-number-text
        font-size 0.9rem
        position relative
        padding-left 0.8rem
        &:not(:last-child)
          margin-bottom 0.4rem
        i
          display: inline-block
          width 2px
          height 2px
          border-radius 50%
          background-color #9C9C9C
          left 0
        .order-state
          color #ed4529

    .products-total
      height 30px
      background-color #fff
      line-height 30px
      text-align center
      border-top solid 1px #eee
      font-size 14px
      img
        width 1.3rem
        vertical-align middle
    .order-detail-products
      width 100%
      background-color #fff
      .products-shop
        width 100%
        margin-top 0.6rem
        height 3rem
        line-height 3rem
        position relative
        border-bottom 1px solid #E2E2E2
        .shops-logo-img
          width 1rem
          left 1rem
        .shops-name
          position absolute
          height 3rem
          line-height 3rem
          left 2.5rem
        .icon-top
          display inline-block
          width 1rem
          height 3rem
          background url("./arrow_up_gray@3x.png") no-repeat center
          background-size contain
          margin-right 1rem
        .fr
          float right
      .order-detail-products-container
        .products-items
          .products-item
            width 100%
            height 7rem
            padding 1rem
            background-color #fff
            position relative
            .products-item-img
              width 6rem
              img
                width 100%
                vertical-align middle
            .fl
              left
            .products-item-text
              height 5rem
              padding 0.8rem 0 0 0
              font-size 0.8rem
              position relative
              .products-text-top
                position relative
                .products-item-data
                  position absolute
                  top 0
                  right 0
              .products-item-guige
                height 1.8rem
                line-height 1.8rem
              .products-item-price
                color #ed4529
        .products-data
          width 100%
          height 7rem
          border-bottom 1px solid #E2E2E2
          border-top 1px solid #E2E2E2
          background-color #fff
          padding 1rem
          text-align right
          line-height 1.6
        .products-total
          width 100%
          padding-right 1rem
          height 3rem
          line-height 3rem
          background-color #fff
          color #ed4529
          text-align right
    .order-detail-fapiao
      margin-top 0.6rem
      width 100%
      height 3rem
      line-height 3rem
      background-color #fff
      padding 0 1rem
      .fl
        float left
      .fr
        float right
</style>
