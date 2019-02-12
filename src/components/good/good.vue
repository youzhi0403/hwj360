<template>
  <div class="good">
    <div class="carousel-container">
      <cube-slide :data="imgs"></cube-slide>
    </div>
    <!--产品文字介绍-->
    <div class="product_detail_text">
      <p class="product_name">
        <span class="yaodian">自营</span>
        {{name}}
      </p>
      <p class="product_price">
        <span class="product_price_new">
          <span class="sign_money">￥</span>
          {{now}}
        </span>
        <span class="product_price_old">￥{{old}}</span>
        <span class="product_sold">销售{{sellCount}}件</span>
      </p>
      <em class="line"></em>
      <p class="product_function">
        <span>功能主治:</span>
        {{description}}
      </p>
      <p class="product_function">
        <span>生产厂家:</span>
        {{manufacturer}}
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
              <span class="activity-detail">{{discountDescription}}</span>
            </span>
          </div>
        </div>
      </div>
      <em class="line"></em>
    </div>
    <div id="goodsDetail">
      <img :src="warnImg">
      <div id="goodsParameter">
        <div class="goodsParameter-box">
          <div class="goodsParameter-box-left">
            商品编号
          </div>
          <div class="goodsParameter-box-right">
            {{number}}
          </div>
        </div>

        <div class="goodsParameter-box">
          <div class="goodsParameter-box-left">
            商品类型
          </div>
          <div class="goodsParameter-box-right">
            {{type}}
          </div>
        </div>

        <div class="goodsParameter-box">
          <div class="goodsParameter-box-left">
            功能主治
          </div>
          <div class="goodsParameter-box-right">
            {{description}}
          </div>
        </div>

        <div class="goodsParameter-box">
          <div class="goodsParameter-box-left">
            生产厂家
          </div>
          <div class="goodsParameter-box-right">
            {{manufacturer}}
          </div>
        </div>

        <div class="goodsParameter-box">
          <div class="goodsParameter-box-left">
            批准文号
          </div>
          <div class="goodsParameter-box-right">
            国药准字{{approvalNumber}}
            <br>
            <a href="#">国家食药局查询</a>
          </div>
        </div>

        <div class="goodsParameter-box">
          <div class="goodsParameter-box-left">
            产品规格
          </div>
          <div class="goodsParameter-box-right">
            {{standard}}
          </div>
        </div>

        <div class="goodsParameter-box">
          <div class="goodsParameter-box-left">
            用法用量
          </div>
          <div class="goodsParameter-box-right">
            {{dosage}}
          </div>
        </div>

        <div class="goodsParameter-box">
          <div class="goodsParameter-box-left">
            通用名称
          </div>
          <div class="goodsParameter-box-right">
            {{commonName}}
          </div>
        </div>

        <div class="goodsParameter-box">
          <div class="goodsParameter-box-left">
            不良反应
          </div>
          <div class="goodsParameter-box-right">
            {{adverseReaction}}
          </div>
        </div>

        <div class="goodsParameter-box">
          <div class="goodsParameter-box-left">
            禁忌
          </div>
          <div class="goodsParameter-box-right">
            {{taboo}}
          </div>
        </div>
      </div>
      <img v-for="(item,index) in imgs" :key="index" :src="item.image">
      <img :src="descriptionImg1">
      <img :src="descriptionImg2">

      <div class="product_doctorTuijian">
        <div class="product_doctorTuijian_top">
          <div class="icon_doctor">
            <img src="./recommend.png">
          </div>
          <p class="product_doctorTuijian_top_text">药师推荐</p>
        </div>
        <div class="product_doctorTuijian_content">
          <ul class="product_doctorTuijian_elms after">
            <li class="product_doctorTuijian_elm" v-for="(item,index) in recommendMedicines" :key="index">
              <div class="horizontal_center product_doctorTuijian_img">
                <img :src="item.img">
              </div>
              <div class="horizontal_center product_doctorTuijian_text">
                <p class="tuijian_product_name">{{item.name}}</p>
                <p class="product_doctorTuijian_price">{{item.price}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer_left">
        <ul class="footer_left_elms after">
          <li class="footer_left_elm">
            <a class="footer_left_img horizontal_center">
              <img src="">
            </a>
            <p class="footer-text">首页</p>
          </li>

          <li class="footer_left_elm">
            <a class="footer_left_img horizontal_center">
              <p class="icon-kefu"></p>
            </a>
            <p class="footer-text">客服</p>
          </li>

          <li class="footer_left_elm">
            <a class="footer_left_img horizontal_center">
              <p class="icon-cart"></p>
            </a>
            <p class="footer-text">购物车</p>
            <span class="icon_num" id="shop-cart-count">3</span>
          </li>

        </ul>
      </div>
      <div class="footer_right">
        <a class="footer_right_elm footer_right_join">加入购物车</a>
        <a class="footer_right_elm footer_right_buy">立即购买</a>
      </div>
    </div>
    <search-com></search-com>

  </div>
</template>

<script>
import { getFoodD } from '../../api'
import SearchCom from '../searchCom/searchCom'
export default {
  name: 'good',
  components: { SearchCom },
  data () {
    return {
      adverseReaction: '',
      approvalNumber: '',
      commonName: '',
      description: '',
      descriptionImg1: '',
      descriptionImg2: '',
      discountDescription: '',
      dosage: '',
      imgs: [],
      manufacturer: '',
      name: '',
      now: '',
      number: '',
      old: '',
      otc: '',
      recommendMedicines: [],
      sellCount: '',
      standard: '',
      taboo: '',
      type: '',
      warnImg: ''
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      getFoodD().then((res) => {
        this.adverseReaction = res.data.adverseReaction
        this.approvalNumber = res.data.approvalNumber
        this.commonName = res.data.commonName
        this.description = res.data.description
        this.descriptionImg1 = res.data.descriptionImg1
        this.descriptionImg2 = res.data.descriptionImg2
        this.discountDescription = res.data.discountDescription
        this.dosage = res.data.dosage
        this.imgs = Array.prototype.map.call(res.data.imgs, function (x) {
          return {
            url: '',
            image: x.img
          }
        })
        this.manufacturer = res.data.manufacturer
        this.name = res.data.name
        this.now = res.data.now
        this.number = res.data.number
        this.old = res.data.old
        this.otc = res.data.otc
        this.recommendMedicines = res.data.recommendMedicines
        this.sellCount = res.data.sellCount
        this.standard = res.data.standard
        this.taboo = res.data.taboo
        this.type = res.data.type
        this.warnImg = res.data.warnImg
        console.log(this.imgs)
      })
    }
  }
}
</script>

<style lang="stylus">
.good
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
        .product_doctorTuijian_elms
          width 100%
          height 100%
          .product_doctorTuijian_elm
            float left
            width 50%
            height 18rem
            border-right 1px solid #E2E2E2
            border-bottom 1px solid #E2E2E2
            position relative
            .product_doctorTuijian_img
              position absolute
              width 80%
              max-width 165px
              top 2rem
              left 50%
              transform translate(-50%,0)
              img
                width 100%
                vertical-align middle
            .product_doctorTuijian_text
              position absolute
              width 95%
              bottom 1rem
              left 50%
              transform translate(-50%,0)
              font-size 1rem
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              .tuijian_product_name
                display -webkit-box
                -webkit-box-orient vertical
                overflow hidden
                -webkit-line-clamp 2
                white-space normal
                height 3rem
              .product_doctorTuijian_price
                color #D93C27


</style>
