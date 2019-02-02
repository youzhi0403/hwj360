<template>
  <div class="brand">
    <div class="brand_top">
      <div class="brand_top_img">
        <img :src="imgs.title">
      </div>
    </div>
    <div class="brand_content after">
      <div class="row_first">
        <div class="row_first_item">
          <img :src="imgs.num1">
        </div>
        <div class="row_first_item">
          <img :src="imgs.num2">
        </div>
      </div>
      <div class="row_second">
        <div class="row_second_item">
          <img :src="imgs.num3">
        </div>
        <div class="row_second_item">
          <img :src="imgs.num4">
        </div>
        <div class="row_second_item">
          <img :src="imgs.num5">
        </div>
        <div class="row_second_item">
          <img :src="imgs.num6">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'brand',
  data () {
    return {
      imgs: {
        title: 'http://m.360hwj.com/images/home-new/home_classify_3@2x.png',
        num1: 'http://static.360hwj.com/group1/M00/05/C2/J2zAA1qrq42AHgfJAAB1IHz2UZo485.png',
        num2: 'http://static.360hwj.com/group1/M00/05/C2/J2zAA1qrq52AawNsAAB6AuzrFTQ339.png',
        num3: 'http://static.360hwj.com/group1/M00/05/C2/J2zAA1qrs-qATd8fAAA4qGx1w_c563.png',
        num4: 'http://static.360hwj.com/group1/M00/05/C2/J2zAA1qrpkqAJwWEAABWVDLe-JE694.png',
        num5: 'http://static.360hwj.com/group1/M00/08/E5/J2zAA1u_J5yAWcJDAAB4YTcvjKM207.png',
        num6: 'http://static.360hwj.com/group1/M00/05/C2/J2zAA1qrrg2AKCCuAABf5ndq70A977.png'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .brand
    width 100%
    background-color #fff
    .brand_top
      width 100%
      padding 0.2rem 0
      margin-top 0.5rem
      .brand_top_img
        width 30%
        margin 0 auto
        img
          width 100%
          vertical-align middle
    .brand_content
      padding-bottom 0.8rem
      .row_first
        padding 0 0.2rem 0.5rem
        .row_first_item
          width 50%
          float left
          padding 0 0.2rem
          img
            width 100%
            vertical-align middle
      .row_second
        padding 0 0.2rem
        .row_second_item
          width 25%
          float left
          padding 0.3rem 0.2rem 0
          img
            width 100%
            vertical-align middle
</style>
