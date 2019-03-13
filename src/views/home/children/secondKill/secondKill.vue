<template>
  <div class="secondKill">
    <div class="secondKill-title">
      <i class="secondKill-img"></i>
      <span class="btn-more">
        更多
        <i class="icon-more-red"></i>
      </span>
    </div>
    <div class="secondKill-content">
      <cube-scroll
        class="secondKill-wrapper"
        ref="secondKillScroll"
        :data="secondKillGoods"
        direction="horizontal"
      >
        <ul class="secondKill-list">
          <li class="secondKill-item" v-for="(item,index) in secondKillGoods" :key="index">
            <div class="item-img">
              <img :src="item.src">
            </div>
            <div class="item-text">
              <p class="price-new">￥{{item.nowPrice}}</p>
              <p class="price-old">￥{{item.oldPrice}}</p>
            </div>
          </li>
        </ul>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import res from './skGoods'

export default {
  name: 'secondKill',
  created () {
    this.secondKillGoods = res.seckillGoods
  },
  data () {
    return {
      secondKillGoods: []
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus">
.secondKill
  position relative
  margin-top 0.6rem
  background-color #fff
  width 100%
  .secondKill-title
    width 100%
    padding 0.6rem 0
    &:before
      clear both
      content ''
      display: block
    &:after
      clear both
      content ''
      display block
    .secondKill-img
      display inline-block
      float left
      width 5rem
      height 2rem
      margin-left 0.6rem
      background url("SecKill@2x.png") no-repeat center
      -webkit-background-size contain
      background-size contain
    .btn-more
      float right
      color #ed4529
      line-height 2rem
      .icon-more-red
        display inline-block
        float right
        margin 0 0.6rem
        width 1rem
        height 2rem
        background url("home_clas_more_red@2x.png") no-repeat center
        -webkit-background-size contain
        background-size contain
  .secondKill-content
    width 100%
    height 10rem
    .secondKill-wrapper
      display flex
      align-items center
      .secondKill-list
        white-space nowrap
        .secondKill-item
          width 7.5rem
          padding-bottom 0.6rem
          display inline-block
          .item-img
            position relative
            width 80%
            margin 0 auto 0.5rem
            img
              width 100%
              vertical-align middle
          .item-text
            text-align center
            .price-new
              font-size 1.2rem
              color #ed4529
            .price-old
              font-size 1rem
              text-decoration line-through

</style>
