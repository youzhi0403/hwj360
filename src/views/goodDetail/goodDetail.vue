<template>
  <div class="goodDetail">
    <div class="goodDetail-wrapper" ref="goodDetailWrapper">
      <div class="goodDetail-content">
        <div class="carousel-container">
          <cube-slide :data="imgs"></cube-slide>
        </div>
        <!--产品文字介绍-->
        <div class="product_detail_text">
          <p class="product_name">
            <span class="yaodian">自营</span>
            {{paramOfGood.fullname}}
          </p>
          <p class="product_price">
        <span class="product_price_new">
          <span class="sign_money">￥</span>
          {{paramOfGood.price}}
        </span>
            <span class="product_price_old">￥{{paramOfGood.marketPrice}}</span>
            <span class="product_sold">销售{{paramOfGood.allocatedStock}}件</span>
          </p>
          <em class="line"></em>
          <p class="product_function">
            <span>{{paramOfparameterValues[0].entries[0].name}}</span>
            {{paramOfparameterValues[0].entries[0].value}}
          </p>
          <p class="product_function">
            <span>{{paramOfparameterValues[0].entries[1].name}}</span>
            {{paramOfparameterValues[0].entries[1].value}}
          </p>
          <p class="product_function" style="padding-left: 0rem">
            厂家不定时换包装，具体以实物为准
          </p>
          <div class="qualification after">
            <div class="qualification-items">
              <i class="items-icon1 vertical_center"></i>
              <div class="items-text">
                正品保障
              </div>
            </div>
            <div class="qualification-items">
              <i class="items-icon2 vertical_center"></i>
              <div class="items-text">
                实体连锁
              </div>
            </div>
            <div class="qualification-items">
              <i class="items-icon3 vertical_center"></i>
              <div class="items-text">
                药师服务
              </div>
            </div>
            <div class="qualification-items">
              <i class="items-icon4 vertical_center"></i>
              <div class="items-text">
                隐私发货
              </div>
            </div>
          </div>
          <!--商品优惠活动-->
          <div class="sales-promotion">
            <div class="activity-top">
              <p>可以享受以下优惠</p>
            </div>
            <div class="product-activity">
              <span class="activity-title">促销</span>
              <div class="item-discount">
            <span class="discount-box">
              <span class="product-discount">免邮</span>
              <span class="activity-detail">全场满58元免运费</span>
            </span>
              </div>
            </div>
          </div>
          <em class="line"></em>
        </div>
        <!--产品具体信息-->
        <div id="goodsDetail">
          <img src="./warn.jpg">
          <div id="goodsParameter">
            <div class="goodsParameter-box">
              <div class="goodsParameter-box-left">
                商品编号
              </div>
              <div class="goodsParameter-box-right">
                {{paramOfGood.sn}}
              </div>
            </div>
            <div class="goodsParameter-box">
              <div class="goodsParameter-box-left">
                商品类型
              </div>
              <div class="goodsParameter-box-right">
                {{paramOfGood.tagName}}
              </div>
            </div>

            <div class="goodsParameter-box">
              <div class="goodsParameter-box-left">
                功能主治
              </div>
              <div class="goodsParameter-box-right">
                {{paramOfparameterValues[0].entries[0].value}}
              </div>
            </div>

            <div class="goodsParameter-box">
              <div class="goodsParameter-box-left">
                生产厂家
              </div>
              <div class="goodsParameter-box-right">
                {{paramOfparameterValues[0].entries[1].value}}
              </div>
            </div>

            <div class="goodsParameter-box">
              <div class="goodsParameter-box-left">
                批准文号
              </div>
              <div class="goodsParameter-box-right">
                {{paramOfparameterValues[0].entries[2].value}}
                <br>
                <a href="#">国家食药局查询</a>
              </div>
            </div>

            <div class="goodsParameter-box">
              <div class="goodsParameter-box-left">
                产品规格
              </div>
              <div class="goodsParameter-box-right">
                {{paramOfparameterValues[0].entries[3].value}}
              </div>
            </div>

            <div class="goodsParameter-box">
              <div class="goodsParameter-box-left">
                用法用量
              </div>
              <div class="goodsParameter-box-right">
                {{paramOfparameterValues[0].entries[4].value}}
              </div>
            </div>

            <div class="goodsParameter-box">
              <div class="goodsParameter-box-left">
                通用名称
              </div>
              <div class="goodsParameter-box-right">
                {{paramOfparameterValues[0].entries[5].value}}
              </div>
            </div>

            <div class="goodsParameter-box">
              <div class="goodsParameter-box-left">
                不良反应
              </div>
              <div class="goodsParameter-box-right">
                {{paramOfparameterValues[0].entries[6].value}}
              </div>
            </div>

            <div class="goodsParameter-box">
              <div class="goodsParameter-box-left">
                禁忌
              </div>
              <div class="goodsParameter-box-right">
                {{paramOfparameterValues[0].entries[7].value}}
              </div>
            </div>
          </div>
          <img v-for="(item,index) in imgs" :key="index" :src="item.image">
          <img src="./qualification.png">
          <img src="./query.jpg">

          <div class="product_doctorTuijian">
            <div class="product_doctorTuijian_top">
              <div class="icon_doctor">
                <img src="./recommend.png">
              </div>
              <p class="product_doctorTuijian_top_text">药师推荐</p>
            </div>
            <div class="product_doctorTuijian_content">
              <ul class="goodList after">
                <li class="goodItem" v-for="(item,index) in recommendGoods" :key="index" @click="refreshGoodDetail(item)">
                  <div class="goodItem-img horizontal-center">
                    <img :src="item.image">
                  </div>
                  <div class="goodItem-text">
                    <p>{{item.fullname}}</p>
                    <p class="price">￥{{item.price}}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="goodDetail-footer">
      <div class="footer_left">
        <ul class="footer_left_elms after">
          <li class="footer_left_elm" @click="locateToHome">
            <a class="footer_left_img horizontal_center">
              <p class="icon-hwj-home icon-hwj"></p>
            </a>
            <p class="footer-text">首页</p>
          </li>

          <li class="footer_left_elm">
            <a class="footer_left_img horizontal_center">
              <p class="icon-hwj-service icon-hwj"></p>
            </a>
            <p class="footer-text">客服</p>
          </li>

          <li class="footer_left_elm" @click.stop.prevent="locateToShopcart">
            <a class="footer_left_img horizontal_center">
              <p class="icon-hwj-shopcart icon-hwj"></p>
            </a>
            <p class="footer-text">购物车</p>
            <bubble v-if="shopcartNumber > 0" :num="shopcartNumber"></bubble>
          </li>
        </ul>
      </div>
      <div class="footer_right">
        <div v-if="inventory === 'A'">
          <a class="footer_right_elm footer_right_join" @click.stop.prevent="popupShow('加入购物车')">加入购物车</a>
          <a class="footer_right_elm footer_right_buy" @click.stop.prevent="popupShow('立即购买')">立即购买</a>
        </div>
        <div v-else-if="inventory === 'B'">
          <a class="footer-right-reserve">需求预定</a>
        </div>
        <div v-else-if="inventory === 'C'">
          <a class="footer-right-not-enough">库存不足</a>
        </div>
      </div>
    </div>
    <shopcart-popup v-show="paramOfPopupShow" v-on:close="close" :buttonText="popupText" :good="paramOfGood"></shopcart-popup>
  </div>
</template>

<script>
import res from './goods'
import BScroll from 'better-scroll'
import Bubble from '../../components/bubble/bubble'
import { mapGetters } from 'vuex'
import ShopcartPopup from '../../components/shopcartPopup/shopcartPopup'
export default {
  name: 'goodDetail',
  components: { ShopcartPopup, Bubble },
  data () {
    return {
      imgs: [],
      paramOfGood: {},
      paramOfparameterValues: [],
      recommendGoods: [],
      paramOfPopupShow: false,
      popupText: '加入购物车'
    }
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
    inventory: {
      type: String,
      default: function () {
        return 'A'
      }
    }
  },
  computed: {
    ...mapGetters([
      'shopcartNumber'
    ])
  },
  created () {
    this.init()
  },
  mounted () {
    this._initScroll()
  },
  methods: {
    _initScroll () {
      this.goodDetailScroll = new BScroll(this.$refs['goodDetailWrapper'], {
        click: true
      })
    },
    init () {
      // 初始化paramOfGood
      this.paramOfGood = this.good
      // 初始化imgs
      let arr = this.paramOfGood.content.split('<img')
      for (let i = 1; i < arr.length; i++) {
        let str = '<img' + arr[i]
        str = str.replace(/\\/g, '')
        str = str.substring(str.indexOf('\'') + 1, str.lastIndexOf('\''))
        this.imgs.push({ image: str })
      }
      // 初始化 parameterValues
      let tempStr = this.paramOfGood.parameterValues.replace(/\\/g, '')
      this.paramOfparameterValues = JSON.parse(tempStr)
      // 推荐商品列表
      this.recommendGoods = res.data
    },
    refreshGoodDetail (good) {
      // 改变paramOfGood
      this.paramOfGood = good
      // 改变imgs
      this.imgs = []
      let arr = this.paramOfGood.content.split('<img')
      for (let i = 1; i < arr.length; i++) {
        let str = '<img' + arr[i]
        str = str.replace(/\\/g, '')
        str = str.substring(str.indexOf('\'') + 1, str.lastIndexOf('\''))
        this.imgs.push({ image: str })
      }
      // 改变 parameterValues
      let tempStr = this.paramOfGood.parameterValues.replace(/\\/g, '')
      this.paramOfparameterValues = JSON.parse(tempStr)

      // 滚动到顶部
      this.$nextTick(() => {
        this.goodDetailScroll.scrollTo(0, 0, 200)
      })
    },
    locateToHome () {
      this.$router.push({ name: 'home', params: { navName: 'home' } })
    },
    locateToShopcart () {
      this.$router.push({ name: 'shopcart', params: { navName: 'shopcart' } })
    },
    close (e) {
      this.paramOfPopupShow = !this.paramOfPopupShow
    },
    popupShow (text) {
      this.popupText = text
      this.paramOfPopupShow = true
    }
  }
}
</script>

<style lang="stylus">
  .goodDetail
    position absolute
    top 0
    bottom 4rem
    width 100%
    max-width 640px
    overflow hidden
    .goodDetail-wrapper
      position relative
      height 100%
      .goodDetail-content
        width 100%
        .product_detail_text
          background-color #fff
          padding 1rem 0 0
          .product_name
            font-size 1.2rem
            color #2B2B2B
            margin-left 1rem
            .yaodian
              font-size 0.8rem
              background-color #D93C27
              color #fff
              padding 0.05rem 0.4rem
              border-radius 3px
          .product_price
            margin 0.8rem 1rem
            .product_price_new
              color #D93C27
              font-size 1.3rem
              .sign_money
                font-size 1rem
            .product_price_old
              color #9C9C9C
              font-size 1rem
              text-decoration line-through
            .product_sold
              float right
              font-size 0.9rem
              color #666666
          .line
            display block
            border-top 1px solid #c5c5c5
          .product_function
            margin 0 0.5rem 0 1rem
            font-size 1.1rem
            padding-left 5.5rem
            position relative
            color #2f2f2f
            padding-bottom 1rem
            line-height 1.6
            span
              position absolute
              left 0
              top 0
              font-size 1.2rem
          .qualification
            width 100%
            background-color #f2f2f2
            padding 0 0.2rem
            .qualification-items
              position relative
              float left
              width 25%
              padding 0 0.2rem
              border-top 1px solid #e5e5e5
              .items-text
                width 70%
                margin-left 30%
                height 3.5rem
                line-height 3.5rem
                color #2e2e2e
                text-align center
              .items-icon1
                width 25%
                height 2rem
                background url("./qualification-01@2x.png") center no-repeat
                background-size contain
              .items-icon2
                width 25%
                height 2rem
                background url("./qualification-02@2x.png") center no-repeat
                background-size contain
              .items-icon3
                width 25%
                height 2rem
                background url("./qualification-03@2x.png") center no-repeat
                background-size contain
              .items-icon4
                width 25%
                height 2rem
                background url("./qualification-04@2x.png") center no-repeat
                background-size contain
          .sales-promotion
            .activity-top
              width 100%
              padding 1rem 0
              border-bottom 1px solid #c5c5c5
              border-top 1px solid #c5c5c5
              p
                padding-left 0.5rem
                border-left 5px solid #ed4529
                font-size 1.2rem
                line-height 1.6
            .product-activity
              position relative
              padding 5px
              .activity-title
                position absolute
                top 0.5rem
                left 0.5rem
                display inline-block
              .item-discount
                width 90%
                margin-left 10%
                .discount-box
                  position relative
                  display block
                  padding 0.2rem
                  overflow hidden
                  width 100%
                  span
                    display inline-block
                  .product-discount
                    position absolute
                    top 0.1rem
                    right auto
                    bottom auto
                    left 0
                    margin 0 0.5rem
                    padding 0 0.2rem
                    border 1px solid #ed4529
                    border-radius 0.2rem
                    font-size 0.8rem
                    color #ed4529
                  .activity-detail
                    padding-left 3rem
                    margin 0 0 0.5rem 0
                    width 100%
        #goodsDetail
          img
            width 100%
            vertical-align middle
          #goodsParameter
            background-color #fff
            border-top 1px solid #e7e7e7
            border-right 1px solid #e7e7e7
            .goodsParameter-box
              width 100%
              display flex
              word-break break-all
              color #333
              line-height 1.6
              .goodsParameter-box-left
                width 30%
                padding 1rem
                border-left 1px solid #e7e7e7
                border-bottom 1px solid #e7e7e7
              .goodsParameter-box-right
                width 70%
                padding 1rem 1.2rem
                border-left 1px solid #e7e7e7
                border-bottom 1px solid #e7e7e7
                background-color #fff
                a
                  color #025dbe
          img
            width 100%
            vertical-align middle
          .product_doctorTuijian
            margin-top 0.6rem
            background-color #fff
            width 100%
            .product_doctorTuijian_top
              width 100%
              height 3rem
              line-height 3rem
              text-align center
              .icon_doctor
                display inline-block
                width 1rem
                img
                  width 100%
                  vertical-align middle
              .product_doctorTuijian_top_text
                display inline-block
                margin-left 0.3rem
            .product_doctorTuijian_content
              width 100%
              border-top 1px solid #E2E2E2
              line-height 1.6
              .goodList
                width 100%
                height 100%
                box-sizing border-box
                background #fff
                .goodItem
                  float left
                  box-sizing border-box
                  width 49%
                  height 18rem
                  position relative
                  border-left 1px solid #F3F3F3
                  border-top 1px solid #F3F3F3
                  background #fff
                  .goodItem-img
                    position absolute
                    width 80%
                    max-width 165px
                    top 2rem
                    left 50%
                    transform translate(-50%,0)
                    img
                      width 100%
                      vertical-align middle
                  .goodItem-text
                    position absolute;
                    width 95%
                    bottom 1rem
                    left 50%
                    transform translate(-50%,0)
                    font-size 1rem
                    white-space nowrap
                    overflow hidden
                    text-overflow ellipsis
                    p
                      text-overflow ellipsis
                      display -webkit-box
                      -webkit-box-orient vertical
                      overflow hidden
                      white-space normal
                      font-size 14px
                      height 3rem
                      line-height 1.6
                      font-weight 200
                    .price
                      color #D93C27
                  .footer
                    position fixed
                    max-width 640px
                    width 100%
                    bottom 0
                    display flex
                    justify-content space-around
                    align-items center
                    z-index 50
                    background-color #fff
                    height 4rem
                    .footer_left
                      width 50%
                      height 100%
                      float left
                      border-top 1px solid #dcdcdc
                      .footer_left_elms
                        width 100%
                        height 100%
                        .footer_left_elm
                          float left
                          width 33%
                          height 100%
                          position relative
                          .footer_left_img
                            display inline-block
                            font-size 1.8rem
                            margin-top 0.5rem
                            width 40%
                            .icon-hwj
                              font-family iconfont
                              speak none
                              font-style normal
                              font-weight normal
                              font-variant normal
                              text-transform none
                              line-height 1
                          .footer-text
                            position absolute
                            bottom 0.2rem
                            width 100%
                            font-size 1rem
                            color #666
                            text-align center
                            -webkit-font-smoothing antialiased
                          .icon_num
                            position absolute
                            top 0.4rem
                            right 0.6rem
                            width 1.2rem
                            height 1.2rem
                            line-height 1.2rem
                            text-align center
                            background-color #D93C27
                            color #fff
                            border-radius 50%
                    .footer_right
                      width 50%
                      height 100%
                      float right
                      .footer_right_elm
                        display inline-block
                        width 50%
                        height 4rem
                        float left
                        text-align center
                        line-height 4rem
                        color #fff
                        font-size 1rem
                      .footer_right_join
                        background url("./join-cart-icon@2x.png") no-repeat center
                        background-size cover
                      .footer_right_buy
                        background url("./buy-icon@2x.png") no-repeat center
                        background-size cover
    .goodDetail-footer
      position fixed
      max-width 640px
      width 100%
      bottom 0
      display flex
      justify-content space-around
      align-items center
      z-index 50
      background-color #fff
      height 4rem
      .footer_left
        width 50%
        height 100%
        float left
        border-top 1px solid #dcdcdc
        .footer_left_elms
          width 100%
          height 100%
          .footer_left_elm
            float left
            width 33%
            height 100%
            position relative
            .footer_left_img
              display inline-block
              font-size 1.8rem
              margin-top 0.5rem
              width 40%
              .icon-hwj
                font-family iconfont
                speak none
                font-style normal
                font-weight normal
                font-variant normal
                text-transform none
                line-height 1
            .footer-text
              position absolute
              bottom 0.2rem
              width 100%
              font-size 1rem
              color #666
              text-align center
              -webkit-font-smoothing antialiased
            .icon_num
              position absolute
              top 0.4rem
              right 0.6rem
              width 1.2rem
              height 1.2rem
              line-height 1.2rem
              text-align center
              background-color #D93C27
              color #fff
              border-radius 50%
      .footer_right
        width 50%
        height 100%
        float right
        .footer_right_elm
          display inline-block
          width 50%
          height 4rem
          float left
          text-align center
          line-height 4rem
          color #fff
          font-size 1rem
        .footer_right_join
          background url("./join-cart-icon@2x.png") no-repeat center
          background-size cover
        .footer_right_buy
          background url("./buy-icon@2x.png") no-repeat center
          background-size cover
</style>
