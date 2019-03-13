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
            <img :src="good.image">
          </div>
          <div class="shopcartPopup-top-text">
            <p class="product-name">{{good.fullname}}</p>
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
              <li>
                <a>{{good.specification}}</a>
              </li>
            </ul>
          </div>

          <div class="shopcartPopup-middle-elms">
            <p>购买数量</p>
            <div class="elms-middle-number">
              <span class="number-icon" @click="sub(good)">-</span>
              <input class="number-input" v-model="number">
              <span class="number-icon" @click="add(good)">+</span>
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
  computed: {
    ...mapState([
      'cartList'
    ])
  },
  props: {
    good: {
      type: Object,
      default: function () {
        return {
          allocatedStock: 0, // 库存
          approvalNumber: '国药准字Z44021754',
          barcode: '6938200754932', // 条形码
          brandId: '14',
          brandName: '白云山',
          categoryId: '9',
          categoryName: '感冒解表',
          chineseMedicine: false,
          chineseMedicinePack: 0,
          commission: 0.08,
          commonName: '感冒灵',
          content: "<img src=\\'http://image.360hwj.com/goods/921365/81fc294d-d082-43ee-acd2-9e783700bb08!source.hwj.jpg\\'/><img src=\\'http://image.360hwj.com/goods/921365/cc740776-5186-4b39-89af-b09dd4fdaf0b!source.hwj.jpg\\'/><img src=\\'http://image.360hwj.com/goods/921365/4a03015f-f303-46bc-a5d6-37e40acd9a5d!source.hwj.jpg\\'/><img src=\\'http://image.360hwj.com/goods/921365/48c338f8-6b8d-464f-b4b8-01dbad55c710!source.hwj.jpg\\'/><img src=\\'http://image.360hwj.com/goods/921365/894b2b72-cc8b-4e97-8b75-efc969f6ac88!source.hwj.jpg\\'/>",
          createDate: '2019-01-09 17:53:06',
          diseaseId: ',103,5,',
          diseaseName: '乙肝,感冒',
          favorites: 232,
          fullname: '白云山 感冒灵颗粒 10g*9袋',
          id: '1',
          image: 'http://image.360hwj.com/goods/921365/81fc294d-d082-43ee-acd2-9e783700bb08!400x400.jpg',
          integrate: 85,
          keyword: '感冒灵',
          manufacturer: '广州白云山和记黄埔中药有限公司',
          marketPrice: 8.50,
          name: '感冒灵颗粒',
          parameterValues: '[{\\"group\\":\\"药品\\",\\"entries\\":[{\\"name\\":\\"功能主治\\",\\"value\\":\\"辛凉解表，清热解毒。用于风热感冒及温病之发热，微恶风寒，头身痛，口干而渴，鼻塞涕浊，咽喉红肿疼痛，咳嗽，痰黄粘稠\\"},{\\"name\\":\\"生产厂家\\",\\"value\\":\\"广州白云山和记黄埔中药有限公司\\"},{\\"name\\":\\"批准文号\\",\\"value\\":\\"国药准字Z44021754\\"},{\\"name\\":\\"产品规格\\",\\"value\\":\\"10g*9袋\\"},{\\"name\\":\\"用法用量\\",\\"value\\":\\"开水冲服，1次10克（1袋），一日3次\\"},{\\"name\\":\\"通用名称\\",\\"value\\":\\"感冒灵颗粒\\"},{\\"name\\":\\"不良反应\\",\\"value\\":\\"详见说明书\\"},{\\"name\\":\\"禁忌\\",\\"value\\":\\"详见说明书\\"}]}]',
          partwordId: '2',
          partwordName: '头痛头疼',
          pinkage: false,
          price: 8.50,
          remark: '',
          rootCategoryId: '1',
          sales: -2150,
          sn: '2010181',
          specification: '10g*9袋',
          spid: '',
          status: true,
          stock: -1940,
          tag: 2,
          tagName: 'OTC药甲',
          unit: '袋',
          updateDate: '2019-03-07 11:20:08',
          video: 'http://haowanjia.oss-cn-shenzhen.aliyuncs.com/20190124/e3c53f85-f896-4def-82fd-3775286dce62.mp4'
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
