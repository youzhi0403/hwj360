<template>
    <div class="welfare">
      <div class="welfare-top">
        <div class="welfare-top-img">
          <img :src="imgs.title">
        </div>
      </div>
      <div class="welfare-content after">
        <div class="welfare-left">
          <img :src="imgs.left">
        </div>
        <div class="welfare-right">
          <div class="welfare-right-top">
            <img :src="imgs.rightTop">
          </div>
          <div class="welfare-right-bottom">
            <img :src="imgs.rightBottom">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'welfare',
  data () {
    return {
      imgs: {
        title: 'http://m.360hwj.com/images/home-new/home_classify_1@2x.png',
        left: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xCvVKAFlQmAAFhiL2WSVQ660.gif',
        rightTop: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xChPSADfTiAAEBqI442rA648.jpg',
        rightBottom: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xCloaAL-d0AAEKPhFrA2c826.jpg'
      }
    }
  }
}
</script>

<style lang="stylus">
.welfare
  width 100%
  background-color #fff
  .welfare-top
    width 100%
    padding 0.2rem 0
    margin-top 0.5rem
    .welfare-top-img
      width 30%
      margin 0 auto
      img
        width 100%
        vertical-align middle
  .welfare-content
    border-top 1px solid #e8e8e8
    width 100%
    .welfare-left
      border-right 1px solid #e8e8e8
      width 50%
      float left
      img
        width 100%
        vertical-align middle
    .welfare-right
      width 50%
      float left
      .welfare-right-top
        border-bottom 1px solid #e8e8e8
        img
          width 100%
          vertical-align middle
      .welfare-right-bottom
        img
          width 100%
          vertical-align middle
</style>
