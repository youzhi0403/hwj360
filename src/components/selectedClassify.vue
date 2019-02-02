<template>
    <div class="selectedClassify">
      <div class="selectedClassify_top">
        <div class="top_img">
          <img :src="img.title">
        </div>
      </div>
      <div class="selectedClassify_content">
        <div class="row_first after">
          <div class="row_first_left">
            <img :src="img.family">
          </div>
          <div class="row_first_right">
            <div class="row_first_right_top">
              <img :src="img.heartAndhead">
            </div>
            <div class="row_first_right_bottom">
              <img :src="img.stomach">
            </div>
          </div>
        </div>
        <div class="row_second after">
          <div class="row_second_item">
            <img :src="img.instrument">
          </div>
          <div class="row_second_item">
            <img :src="img.tranditionalMedical">
          </div>
          <div class="row_second_item">
            <img :src="img.nutrition">
          </div>
        </div>
        <div class="row_third after">
          <div class="row_third_item">
            <img :src="img.num1">
          </div>
          <div class="row_third_item">
            <img :src="img.num2">
          </div>
          <div class="row_third_item">
            <img :src="img.num3">
          </div>
          <div class="row_third_item">
            <img :src="img.num4">
          </div>
          <div class="row_third_item">
            <img :src="img.num5">
          </div>
          <div class="row_third_item">
            <img :src="img.num6">
          </div>
          <div class="row_third_item">
            <img :src="img.num7">
          </div>
          <div class="row_third_item">
            <img :src="img.num8">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'selectedClassify',
  data () {
    return {
      img: {
        title: 'http://m.360hwj.com/images/home-new/home_classify_2@2x.png',
        family: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xDJQCAa7wCAADgz5woQ-8927.gif',
        heartAndhead: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xCwkCAVDnqAAEodlkBzHA815.jpg',
        stomach: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xCwyOAF9_CAAE0xjF2T-0197.jpg',
        instrument: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xDJ5GAf4XCAAEg8wtAwLw702.jpg',
        tranditionalMedical: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xDJ6iAYHsCAAE25i_sOh4154.jpg',
        nutrition: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xDJ0aABz0dAAFExU6imak376.jpg',
        num1: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xDFSWAJZaFAABHxyWSjMk393.jpg',
        num2: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xDFZyACRLXAABHnqeiE9U604.jpg',
        num3: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xDFlyAA5bQAABCGdUUtVU340.jpg',
        num4: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xDFy6Af7V7AABJ_QqZ-R0742.jpg',
        num5: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xDF-iAKkDhAABRA_Y81cY366.jpg',
        num6: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xDGGuACygZAABHT7xfC_Y079.jpg',
        num7: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xDGOmAL770AABGhEhpfQc550.jpg',
        num8: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xDGf-AeCGFAABTKkKemQo093.jpg'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.selectedClassify
  width 100%
  background-color #fff
  .selectedClassify_top
    width 100%
    padding 0.2rem 0
    margin-top 0.5rem
    .top_img
      width 30%
      margin 0 auto
      img
        width 100%
        vertical-align center
  .selectedClassify_content
    border-top 1px solid #e8e8e8
    .row_first
      .row_first_left
        border-right 1px solid #e8e8e8
        width 50%
        float left
        img
          width 100%
          vertical-align middle
      .row_first_right
        width 50%
        float left
        img
          width 100%
          vertical-align middle
        .row_first_right_top
          border-bottom 1px solid #e8e8e8

    .row_second
      border-top 1px solid #e8e8e8
      .row_second_item
        border-right 1px solid #e8e8e8
        width 33.3%
        float left
        img
          width 100%
          vertical-align middle
    .row_third
      .row_third_item
        width 27%
        float left
        border-top 1px solid #e8e8e8
        &:not(:nth-child(4n))
          border-right 1px solid #e8e8e8
        &:nth-child(4n-2)
          width 23%
        &:nth-child(4n-1)
          width 23%
</style>
