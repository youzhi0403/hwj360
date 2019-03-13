<template>
  <ul class="goodList after">
    <li class="goodItem" v-for="(item,index) in goods" :key="index" @click="locateToGoodDetail(item)">
      <div class="goodItem-img horizontal-center">
        <img :src="item.image">
      </div>
      <div class="goodItem-text">
        <p>{{item.fullname}}</p>
        <p class="price">￥{{item.price}}</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'goodList',
  props: {
    goods: {
      type: Array,
      default () {
        return [{
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
        }]
      }
    }
  },
  methods: {
    locateToGoodDetail (good) {
      this.$router.push({ name: 'goodDetail', params: { good: good } })
    }
  }
}
</script>

<style lang="stylus">
.goodList
  width 100%
  border-top 1px solid #E2E2E2
  line-height 1.6
  .goodItem
    float left
    width 49%
    height 18rem
    position relative
    background-color #fff
    margin-bottom 1%
    &:nth-child(odd)
      width 50%
      margin-right 1%
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
      .price
        color #D93C27
</style>
