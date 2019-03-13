<template>
  <div class="goodDetail-integrals">
    <div class="integral-goods-top">
      <img :src="good.image">
      <div class="integral-goods-top-text">
        <div class="goods-name">{{good.fullname}}</div>
        <div class="goods-price">
          <span class="goods-integral">{{good.needIntegral}}积分</span>
          <span class="goods-money">￥{{good.price}}</span>
          <span class="goods-freight">运费(卖家承担)</span>
        </div>
      </div>
      <!--配送至-->
      <div class="delivery-address after" @click.stop.prevent="showAddressSelect">
        <img src="./icon-peisong@2x.png">
        <i class="icon-triangle vertical_center"></i>
        <div class="address-text vertical_center">
          配送至:
          <input type="text" readonly placeholder="您还未填写收货信息,马上填写。" v-if="selectedAddress.region === undefined"/>
          <span v-else>{{selectedAddress.region}}&nbsp;{{selectedAddress.definiteRegion}}</span>
        </div>
      </div>
    </div>

    <!--详情说明-->
    <div class="integral-goods-detail">
      <div class="detail-title">
        <i class="icon-triangle vertical_center"></i>
        <span class="vertical_center">详情说明:</span>
      </div>
      <div class="detail-text-content">
      </div>
    </div>

    <!--兑换提交按钮-->
    <div class="change-submit">
      <div class="integral-not-enough" v-if="integrals < good.needIntegral">
        <div class="integral-not-enough-text horizontal_center">
          您的积分不够兑换此商品
        </div>
        <div class="integral-not-enough-btn" @click.stop.prevent="locateToSignIn">
          <img src="./get-integral3@2x.png">
          <div class="change-submit-btn-text center_elm">
            去赚取更多积分
          </div>
        </div>
      </div>

      <div class="integral-enough" v-if="integrals >= good.needIntegral" @click.stop.prevent="unDevelopment">
        <div class="integral-not-enough-btn">
          <img src="./get-integral3@2x.png">
          <div class="change-submit-btn-text center_elm">
            兑换
          </div>
        </div>
      </div>

    </div>
    <!--地址选择器组件-->
    <address-select v-on:close="close" v-on:selectAddress="selectAddress" v-show="addressSelectShow"></address-select>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import AddressSelect from '../../components/addressSelect/addressSelect'
export default {
  name: 'goodDetail-integrals',
  components: { AddressSelect },
  data () {
    return {
      selectedAddress: {},
      addressSelectShow: false
    }
  },
  props: {
    good: {
      type: Object,
      default: function () {
        return {
          id: 1,
          image: 'http://static.360hwj.com/group1/M00/07/8E/J2zAA1r0C_yAKtrIAAaWDB2WULU473.JPG',
          fullname: '肤专家软膏 袋装10小包',
          needIntegral: 500,
          price: '￥5.00'
        }
      }
    }
  },
  computed: {
    ...mapGetters([
      'defaultAddress'
    ]),
    ...mapState([
      'integrals'
    ])
  },
  created () {
    if (this.defaultAddress !== null) {
      this.selectedAddress = this.defaultAddress
    }
  },
  methods: {
    locateAddress () {
      this.$router.push({ name: 'address' })
    },
    showAddressSelect () {
      this.addressSelectShow = true
    },
    close (e) {
      this.addressSelectShow = false
    },
    selectAddress (item) {
      this.selectedAddress = item
      this.addressSelectShow = false
    },
    locateToSignIn () {
      this.$router.push({ name: 'signIn' })
    },
    unDevelopment () {
      alert('待开发..')
    }
  }
}
</script>

<style lang="stylus">
  .goodDetail-integrals
    padding 0
    .integral-goods-top
      img
        width 100%
        vertical-align middle
      .integral-goods-top-text
        width 100%
        height 5.7rem
        border-top 0.01rem solid #ececec
        background-color #fff
        padding 0 1rem
        .goods-name
          font-size 1.2rem
          color #000
          margin 1rem 0 2rem
        .goods-price
          position relative
          height 0.5rem
          span
            position absolute
            bottom 0
          .goods-integral
            font-size 1.8rem
            color #ff0000
            left 0
          .goods-money
            font-size 0.8rem
            color #6b6b6b
            left 8rem
          .goods-freight
            font-size 0.8rem
            color #6b6b6b
            right 0
      .delivery-address
        margin -0.5rem 0 0.3rem
        position relative
        img
          float left
        .icon-triangle
          width 1rem
          height 1rem
          background-image url("./icon-triangle@2x.png")
          background-repeat no-repeat
          background-position center
          background-size contain
          left 1rem
        .address-text
          width 83%
          left 2.5rem
          font-size 1rem
          color #6b6b6b
          input
            width 80%
            margin-left 0.1rem
            border 0
            font-size 1rem
            color #6b6b6b

    .integral-goods-detail
      background-color #fff
      margin-bottom 8rem
      .detail-title
        position relative
        height 2rem
        font-size 1rem
        color #6b6b6b
        span
          left 2.5rem
        .icon-triangle
          width 1rem
          height 1rem
          background-image url("./icon-triangle@2x.png")
          background-repeat no-repeat
          background-position center
          background-size contain
          left 1rem
      .detail-text-content
        width 90%
        margin 0 5%
        padding 1rem 0
        border-top 0.01rem solid #ebebeb
    .change-submit
      background-color #fff
      width 100%
      height 7rem
      padding-top 2rem
      position fixed
      max-width 750px
      top auto
      right auto
      bottom 0
      left auto
      .integral-not-enough
        .integral-not-enough-text
          width 100%
          text-align center
          font-size 1rem
          color #6d6d6d
          top 5%
          padding-left 1.2rem
        .integral-not-enough-btn
          width 90%
          margin 0 auto
          position relative
          img
            width 100%
            vertical-align middle
          .change-submit-btn-text
            font-size 1.4rem
            color #fff
      .integral-enough
        .integral-not-enough-btn
          width 90%
          margin 0 auto
          position relative
          img
            width 100%
            vertical-align middle
          .change-submit-btn-text
            font-size 1.4rem
            color #fff
</style>
