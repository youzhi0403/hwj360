<template>
  <div class="medicines">
    <div class="medicines_top">
      <p class="top_content center_elm">
        <img :src="ms.title" v-if="ms.title">
      </p>
      <p class="top_icon">
        <em class="vertical_center right_icon"></em>
      </p>
    </div>
    <div class="medicines_content">
      <ul class="after" v-if="ms.data">
        <li class="medicine_item" v-for="(item,index) in ms.data" :key="index" v-on:click.stop.prevent="selectGood">
          <div class="medicine_item_img horizontal_center">
            <img :src="item.src">
          </div>
          <div class="medicine_item_text">
            <p>{{item.name}}</p>
            <p class="price">￥{{item.price}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'medicines',
  data () {
    return {
      goodId: '123'
    }
  },
  props: {
    ms: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  created () {

  },
  mounted () {
    /* console.log('mounted:', this.ms) */
  },
  methods: {
    selectGood () {
      console.log('进来selectGood...')
      this.$router.push({ name: 'good', params: { goodId: this.goodId } })
    }
  }
}
</script>

<style lang="stylus" scoped>
.medicines
  width 100%
  background-color #fff
  margin-top 0.6rem
  .medicines_top
    position relative
    width 100%
    height 3rem
    line-height 3rem
    .top_content
      padding-left 1rem
      width 9rem
      img
        width 100%
        vertical-align middle
    .top_icon
      height 3rem
      padding-right 3rem
      position relative
      float right
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
      .right_icon
        right 1.5rem
        top 50%
        position absolute
        width 1.3rem
        height 1.3rem
        background url("./right_icon.png") no-repeat center
        background-size cover
  .medicines_content
    width 100%
    ul
      width 100%
      height 100%
      box-sizing border-box
      border-right 1px solid #F3F3F3
      border-bottom 1px solid #F3F3F3
      .medicine_item
        float left
        box-sizing border-box
        width 50%
        height 14rem
        position relative
        border-left 1px solid #F3F3F3
        border-top 1px solid #F3F3F3
        .medicine_item_img
          width 55%
          height 5rem
          top 1rem
          img
            width 100%
            vertical-align middle
        .medicine_item_text
          position absolute
          width 100%
          height 4.5rem
          bottom 1rem
          p
            padding 0 0.8rem
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
</style>
