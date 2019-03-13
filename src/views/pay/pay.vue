<template>
  <div class="pay">
    <div class="pay-scroll" ref="payScroll">
      <div class="pay-container">

        <div class="pay-user">
          <div class="user-border-top">
          </div>
          <div class="user-info" @click.stop.prevent="showPopup">
            <div class="user-info-contact">
              <p class="user-info-name">{{selectedAddress.name}}</p>
              <p class="user-info-status">默认</p>
            </div>
            <div class="user-info-other">
              <p class="user-info-tel">{{selectedAddress.telephone}}</p>
              <p class="user-info-address">{{selectedAddress.region}}&nbsp;{{selectedAddress.definiteRegion}}</p>
            </div>
          </div>
          <div class="user-detail">
            <i class="icon-detail vertical-center"></i>
          </div>
        </div>
        <div class="user-info-upload">
          <div class="upload-item">
            <p class="item-text vertical-center">
              <span>*</span>
              姓名
            </p>
            <input type="text" placeholder="请输入姓名" class="item-element vertical-center" v-model="name">
            <i class="icon-right vertical-center"></i>
          </div>
          <div class="upload-item">
            <p class="item-text vertical-center">
              <span>*</span>
              手机号
            </p>
            <input type="text" placeholder="请输入手机号" class="item-element vertical-center" v-model="telephone">
            <i class="icon-right vertical-center"></i>
          </div>
          <div class="upload-item">
            <p class="item-text vertical-center">
              <span>*</span>
              身份证
            </p>
            <input type="text" placeholder="请输入身份证号码" class="item-element vertical-center">
            <i class="icon-right vertical-center"></i>
          </div>
          <div class="upload-item-big">
            <p class="upload-item-big-declaration">
              声明：可以修改姓名和手机号，以供药师回拨确认
            </p>

            <div class="upload-item-big-content">
              <input type="file" class="img-file-upload">
              <div class="upload-item-images">
                <i class="icon-img-upload"></i>
              </div>
              <div class="img-upload-text-container">
                <h2 class="img-upload-text-container-title">拍照上传处方</h2>
                <p class="img-upload-text-container-tips">上传处方可以缩短时间，仅限一张</p>
              </div>
            </div>

            <div class="upload-item-footer">
              <p class="item-text-small">此处仅显示处方药信息，并不完成在线交易和结算</p>
            </div>

          </div>

        </div>

        <!--订单基本信息-->
        <div class="user-order after">
          <div class="user-order-header">
            <i class="icon-top-left"></i>
            <i class="icon-shop vertical-center"></i>
            <div class="user-shop-name">
              好万家健康商城
            </div>
          </div>
          <div class="user-order-product" v-for="(item,index) in activeGoods" :key="index">
            <div class="user-order-product-img">
              <img :src="item.image">
            </div>
            <div class="user-order-product-info">
              <div class="user-order-product-name">{{item.fullname}}</div>
              <div class="user-order-product-specification">
                <p class="user-order-product-specification-price">￥{{item.price}}</p>
              </div>
            </div>
            <div class="user-order-product-num">
              ×{{item.quantity}}
            </div>
          </div>
          <div class="user-order-menu">
            <div class="user-order-menu-left">配送方式</div>
            <div class="text">
              <div class="means-by" :class="{'active':(deliveryWay === '快递配送')}" @click.stop.prevent="selectWay('快递配送')">
                快速配送
                <i class="icon-select-active"></i>
              </div>
              <div class="means-by" :class="{'active':(deliveryWay === '买家自提')}" @click.stop.prevent="selectWay('买家自提')">
                买家自提
                <i class="icon-select-active"></i>
              </div>
            </div>
          </div>

          <div class="user-order-menu">
            <div class="user-order-menu-left-input">买家留言</div>
            <div class="user-order-menu-right">
              <input type="text" placeholder="买家留言" class="user-order-menu-right-input" v-model="message">
              <i class="icon-right vertical-center"></i>
            </div>
          </div>
          <div class="user-order-menu">
            共合计{{totalGoodsNumber}}件产品，合计：￥
            <label>{{totalPrice}}</label>
          </div>
        </div>

        <div class="user-order-total">
          <div class="total-item">
            <div class="total-left">商品总额</div>
            <div class="total-right">￥{{totalPrice}}</div>
          </div>
          <div class="total-item">
            <div class="total-left">运费总额</div>
            <div class="total-right">{{deliveryPrice}}</div>
          </div>
          <div class="total-item">
            <div class="total-left">活动优惠</div>
            <div class="total-right">{{discounts}}</div>
          </div>
        </div>

      </div>

    </div>
    <div class="order-submit-footer">
      <div class="footer-order-price">
        <span>合计：</span>
        <p>{{totalPrice}}</p>
      </div>
      <div class="footer-order-submit-btn" @click.stop.prevent="pay">
        确认提交
      </div>
    </div>

    <address-select v-on:close="close" v-on:selectAddress="selectAddress" v-show="addressSelectShow"></address-select>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapGetters } from 'vuex'
import AddressSelect from '../../components/addressSelect/addressSelect'
export default {
  name: 'pay',
  components: { AddressSelect },
  computed: {
    ...mapState([
      'address'
    ]),
    ...mapGetters([
      'defaultAddress',
      'activeGoods',
      'totalGoodsNumber',
      'totalPrice'
    ])
  },
  data () {
    return {
      name: '',
      telephone: '',
      message: '',
      deliveryWay: '快递配送',
      deliveryPrice: '￥0.00',
      discounts: '￥0.00',
      addressSelectShow: false,
      selectedAddress: {}
    }
  },
  created () {
    this.name = this.defaultAddress.name
    this.telephone = this.defaultAddress.telephone

    this.selectedAddress = this.defaultAddress
  },
  mounted () {
    this._initScroll()
  },
  methods: {
    selectWay (val) {
      this.deliveryWay = val
    },
    _initScroll () {
      this.payScroll = new BScroll(this.$refs['payScroll'], {
        click: true
      })
    },
    pay () {
      // 判断地址是否为空
      // 判断表单是否为空
      alert('需支付' + this.totalPrice + '元，' + '待开发...')
    },
    close (e) {
      console.log('组件外close。。。')
      this.addressSelectShow = false
    },
    selectAddress (item) {
      console.log('组件外selectAddress。。')
      this.selectedAddress = item
      this.addressSelectShow = false
    },
    showPopup () {
      this.addressSelectShow = true
    }
  }
}
</script>

<style lang="stylus">
.pay
  position fixed
  top 0
  bottom 3.5rem
  left 0
  width 100%
  max-width 640px
  overflow hidden
  .pay-scroll
    position relative
    height 100%
    .pay-container
      width 100%
      .pay-user
        position relative
        width 100%
        background-color #fff
        .user-border-top
          height 0.4rem
          background url("./address_bg@2x.png") center no-repeat
          background-size cover
        .user-info
          width 85%
          display flex
          justify-content flex-start
          .user-info-contact
            width 20%
            margin-left 1.5rem
            margin-top 1rem
            font-size 1.2rem
            line-height 1.2rem
            .user-info-status
              width 60%
              margin-top 0.5rem
              overflow visible
              text-overflow clip
              word-break break-all
              white-space pre-wrap
              font-size 1rem
              border 1px solid #D93C27
              border-radius 0.2rem
              color #d93c27
              text-align center
          .user-info-other
            width 80%
            height 6.6rem
            margin-left 0.8rem
            margin-top 1rem
            .user-info-address
              height 75%
              text-overflow ellipsis
              word-break break-all
              white-space normal
        .user-detail
          width 15%
          height 7.6rem
          position absolute
          top 0.4rem
          right 0
          .icon-detail
            width 1.2rem
            height 1.2rem
            display block
            background url("./arrow-right@2x.png") center no-repeat
            background-size contain
            right 40%
    .user-info-upload
      width 100%
      max-width 640px
      margin-top 0.8rem
      .upload-item
        width 100%
        height 4rem
        background-color #fff
        position relative
        &:not(:last-child)
          border-bottom 1px solid #E8E8E8
        .item-text
          left 1.5rem
          font-size 1.2rem
          span
            color #ff2a2a
        .item-element
          position absolute
          right 10%
          width 50%
          height 100%
          font-size 1.1rem
          outline none
          border none
          color #9a9a9a
          text-align right
        .icon-right
          position absolute
          width 0.6rem
          height 2rem
          right 1.5rem
          background url("./arrow-right@2x.png") no-repeat center
          background-size contain
      .upload-item-big
        position relative
        width 100%
        height 12rem
        background-color #fff
        padding-bottom 0.5rem
        .upload-item-big-declaration
          width 100%
          height 2rem
          line-height 2rem
          text-indent 1.5rem
          color #a5a5a5
        .upload-item-big-content
          position relative
          width 100%
          height 6.5rem
          margin-top 0.3rem
          padding-bottom 0.5rem
          background-color #fff
          .img-file-upload
            position absolute
            left 1.5rem
            width 5.5rem
            height 5.5rem
            opacity 0
            z-index 5
          .upload-item-images
            .icon-img-upload
              position absolute
              left 1.5rem
              width 5.5rem
              height 5.5rem
              background url("./add_pic@2x.png") center no-repeat
              background-size contain
              border 1px solid #ccc
              border-radius 0.5rem
          .img-upload-text-container
            position absolute
            left 8rem
            top 1rem
            .img-upload-text-container-title
              margin-bottom 0.5rem
        .upload-item-footer
          position absolute
          width 100%
          height 3.5rem
          line-height 3.5rem
          background-color #fff
          border-top 1px solid #e9e9e9
          border-bottom 1px solid #e9e9e9
          text-indent 1.5rem
          top 9rem
          .item-text-small
            color #ff2a2a
            left 1.5rem
            font-size 1rem
            font-weight 600

    .user-order
      width 100%
      background-color #fff
      margin-top 10px
      .user-order-header
        position relative
        width 100%
        height 3.8rem
        line-height 3.8rem
        border-top 1px solid #E9E9E9
        .icon-top-left
          width 1.3rem
          height 1.3rem
          position absolute
          top 0
          left 0
          background url("./address_NO@2x.png") center no-repeat
          background-size contain
        .icon-shop
          position absolute
          width 1.4rem
          height 1.4rem
          left 7%
          background url("./seller_icon@2x.png") center no-repeat
          background-size contain
        .user-shop-name
          margin-left 15%
          font-size 1.25rem

      .user-order-product
        position relative
        width 100%
        background-color #fff
        float left
        padding-left 5%
        height 5rem
        border-top 1px solid #e9E9E9
        .user-order-product-img
          float left
          width 20%
          line-height 5rem
          img
            width 50px
            height 50px
            vertical-align middle
        .user-order-product-info
          float left
          height 5rem
          line-height 1.6
          width 60%
          .user-order-product-name
            text-overflow ellipsis
            display -webkit-box
            -webkit-box-orient vertical
            overflow hidden
            -webkit-line-clamp 2
            white-space normal
            font-size 1rem
          .user-order-product-specification
            width 100%
            color #ed4529
        .user-order-product-num
          float right
          width 15%
          height 8rem
          line-height 4rem
          text-indent 0.8rem
      .user-order-menu
        position relative
        width 100%
        height 3rem
        line-height 3rem
        font-size 1.1rem
        border-top 1px solid #E9E9E9
        padding-left 5%
        float left
        .user-order-menu-left
          float left
          width 20%
          height 3rem
          color #2f2f2f
        .text
          .means-by
            display inline-block
            padding 0 0.5rem
            height 2rem
            line-height 2rem
            text-align center
            margin-right 1rem
            font-size 1rem
            &.active
              position relative
              color #2f2f2f
              border 1px solid #ed4529
              .icon-select-active
                position absolute
                right 0
                bottom 0
                width 1rem
                height 1rem
                background url("./activity-icon-select.png") center no-repeat
                background-size contain
        .user-order-menu-left-input
          float left
          width 20%
          height 3rem
          color #2f2f2f
        .user-order-menu-right
          float right
          width 80%
          height 3rem
          line-height 3rem
          color #a5a5a5
          text-align right
          padding-right 3rem
          .user-order-menu-right-input
            font-size 1.1rem
            width 100%
            height 100%
            border none
            outline none
          .icon-right
            right 5%
            display block
            width 1.2rem
            height 0.8rem
            background url("./arrow-right@2x.png") center no-repeat
            background-size contain

    .user-order-total
      margin-top 0.8rem
      width 100%
      height 10.5rem
      background-color #fff
      .total-item
        width 100%
        .total-left
          float left
          width 70%
          height 2.5rem
          line-height 2.5rem
          text-indent 1.5rem
        .total-right
          float left
          width 30%
          height 2.5rem
          line-height 2.5rem
          color #ff2a2a
          text-align right
          padding-right 1rem
  .order-submit-footer
    position fixed
    width 100%
    max-width 640px
    height 3.5rem
    line-height 3.5rem
    background-color #fff
    bottom 0
    .footer-order-price
      width 55%
      height 3.5rem
      padding-left 5%
      font-size 1.1rem
      float left
      span
        float left
      p
        font-size 1.3rem
        color #d93c27
        text-indent -0.4rem

    .footer-order-submit-btn
      float right
      width 45%
      height 3.5rem
      background-color #ed4529
      color #fff
      text-align center
      font-size 1.3rem
</style>
