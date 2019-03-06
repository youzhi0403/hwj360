<template>
  <div class="shopcartPopup">
    <cube-popup
      :position="position"
      v-model="isShow"
      @mask-click="close"
    >
      <div class="shopcartPopup-wrapper">
        <div class="shopcartPopup-top">
          <div class="shopcartPopup-top-img">
            <img :src="good.img">
          </div>
          <div class="shopcartPopup-top-text">
            <p class="product-name">{{good.name}}</p>
            <p class="product-price">
              <span class="sign-money">￥</span>
              <span class="price">{{good.price}}</span>
            </p>
          </div>
        </div>
        <em class="line"></em>
        <div class="shopcartPopup-middle">
          <div class="shopcartPopup-middle-elms">
            <p>规格</p>
            <ul class="after">
              <li v-for="(item,index) in good.size" :key="index">
                <a>{{item}}</a>
              </li>
            </ul>
          </div>

          <div class="shopcartPopup-middle-elms">
            <p>购买数量</p>
            <div class="elms-middle-number">
              <span class="number-icon" @click="sub">-</span>
              <input class="number-input" v-model="number">
              <span class="number-icon" @click="add">+</span>
            </div>
          </div>
        </div>
        <div class="shopCartPopup-addCart" @click.stop.prevent="addToCart">
          {{buttonText}}
        </div>

      </div>
    </cube-popup>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import store from '../../store'
export default {
  name: 'shopcartPopup',
  data () {
    return {
      isShow: true,
      position: 'bottom',
      number: 1
    }
  },
  computed: mapState([
    'cartList'
  ]),
  props: {
    good: {
      type: Object,
      default: function () {
        return {
          img: 'http://image.360hwj.com/goods/931509/3448fcd6-390d-48ce-964b-c03774d3593b!200x200.jpg',
          name: '乐天 补肺丸(乐天) 9g*10丸*4板',
          price: '278.00',
          size: ['9g*10丸*4板']
        }
      }
    },
    buttonText: {
      type: String,
      default: function () {
        return '加入购物车'
      }
    }
  },
  methods: {
    close (e) {
      this.$emit('close', e)
    },
    add () {
      this.number++
    },
    sub () {
      if (this.number > 1) {
        this.number--
      }
    },
    addToCart () {
      store.dispatch('addCart', { good: this.good, quantity: this.number })
      this.$emit('close')
    },
    ...mapMutations([
      'ADD_CART'
    ])
  }
}
</script>

<style lang="stylus">
.shopcartPopup
  .shopcartPopup-wrapper
    position absolute
    bottom 0
    width 100%
    max-width 640px
    line-height 1.6
    left 50%
    transform translate(-50%,0)
    background-color #fff
    .shopcartPopup-top
      position relative
      width 100%
      .shopcartPopup-top-img
        position absolute
        top -3rem
        left 2rem
        width 8rem
        height 8rem
        img
          width 100%
          vertical-align middle
      .shopcartPopup-top-text
        padding 1rem 0 0 10rem
        .product-name
          font-size 1.2rem
          color #2B2B2B
          margin-left 1rem
        .product-price
          margin 0.8rem 1rem
          font-size 1.3rem
          color #D93C27
          .sign-money
            font-size 1rem
    .line
      display block
      border-top 1px solid #c5c5c5
    .shopcartPopup-middle
      width 100%
      padding-bottom 4rem
      .shopcartPopup-middle-elms
        width 100%
        padding-left 2rem
        p
          color #2f2f2f
          height 2rem
          line-height 2rem
          padding 0.5rem 0 0 0
          font-size 1.2rem
        ul
          li
            float left
            position relative
            margin 1rem 0.5rem 0.5rem 0
            a
              overflow hidden
              text-align center
              font-size 1rem
              padding 0.5rem
              border-radius 3px
              border 1px solid #ed4529
              color #ed4529
        .elms-middle-number
          margin-top 0.5rem
          width 10rem
          height 2.5rem
          line-height 2.5rem
          border 1px solid #9c9c9c
          border-radius 3px
          position relative
          .number-icon
            position relative
            display inline-block
            width 2rem
            height 2.5rem
            line-height 2.5rem
            text-align center
            color #9c9c9c
            top -0.1rem
            font-size 1rem
          .number-input
            position relative
            width 5rem
            height 2.5rem
            background-color transparent
            text-align center
            outline none
            border none
            border-left 1px solid #9c9c9c
            border-right 1px solid #9c9c9c
            top -0.1rem
            font-size 1rem
    .shopCartPopup-addCart
      position absolute
      bottom 0
      background-color #ed4529
      color #fff
      font-size 1.2rem
      width 100%
      height 3rem
      line-height 3rem
      text-align center
</style>
