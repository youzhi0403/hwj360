<template>
  <div class="seckill">
    <div class="seckill-title">
      <i class="seckill-img"></i>
      <span class="btn-more">
        更多
        <i class="icon-more-red"></i>
      </span>
    </div>
    <div class="seckill-content">
      <cube-scroll
        class="seckill-wrapper"
        ref="seckillScroll"
        :data="seckillGoods"
        direction="horizontal"
      >
        <ul class="seckill-list">
          <li class="seckill-item" v-for="(item,index) in seckillGoods" :key="index">
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
import { getSeckillGoods } from '../../api'

export default {
  name: 'seckill',
  created () {
    this._getSeckillGoods()
    this.$nextTick(() => {
      this.$refs.seckillScroll.refresh()
    })
  },
  data () {
    return {
      seckillGoods: []
    }
  },
  methods: {
    _getSeckillGoods () {
      getSeckillGoods().then((seckillGoods) => {
        this.seckillGoods = seckillGoods.data
      })
    }
  }
}
</script>

<style lang="stylus">
.seckill
  position relative
  margin-top 0.6rem
  background-color #fff
  width 100%
  .seckill-title
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
    .seckill-img
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

  .seckill-content
    width 100%
    height 10rem
    .seckill-wrapper
      display flex
      align-items center
      .seckill-list
        white-space nowrap
        .seckill-item
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
