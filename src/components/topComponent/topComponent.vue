<template>
  <div class="topComponent">
    <div class="topComponent-header" :class="{'change':change}">
      <div class="topComponent-search center-elm">
        <i class="vertical-center icon-search"></i>
        <input name="keyword" class="search-input" placeholder="请输入搜索药品" v-model="keyword" @keyup.enter="locateToGoodList"/>
      </div>
      <div class="topComponent-news" @click.stop.prevent="locateToNews">
        <div class="icon-msg horizontal-center"></div>
        <div class="news-text">消息</div>
      </div>
    </div>
    <div class="topComponent-content" v-show="isShow">
      <div class="topComponent-content-item" v-for="(item,index) in goods" :key="index" @click.stop.prevent="locateToGoodDetail(item)">{{item.fullname}}</div>
    </div>

  </div>
</template>

<script>
import res from './goods'
export default {
  name: 'topComponent',
  data () {
    return {
      change: false,
      goods: [],
      keyword: '',
      isShow: false
    }
  },
  methods: {
    changeState (state) {
      this.change = state
    },
    init () {
      this.goods = res.data
    },
    locateToGoodList () {
      this.$router.push({ name: 'goodListNormal', params: { keyword: this.keyword } })
    },
    locateToGoodDetail (item) {
      this.$router.push({ name: 'goodDetail', params: { good: item } })
    },
    locateToNews () {
      this.$router.push({ name: 'news' })
    }
  },
  created () {
    this.init()
  },
  watch: {
    keyword: function (newVal, oldVal) {
      if (newVal === '') {
        this.isShow = false
      } else {
        this.isShow = true
      }
    }
  }
}
</script>

<style lang="stylus">
  .topComponent
    .topComponent-header
      position fixed
      width 100%
      max-width 640px
      height 3.5rem
      overflow hidden
      z-index 500
      background-color transparent
      .topComponent-search
        float left
        width 70%
        height 2rem
        line-height 2rem
        border 0 solid
        border-radius 3rem
        -webkit-border-radius 3rem
        -moz-border-radius 3rem
        background-color rgba(255,255,255,0.8)
        .icon-search
          width 1.5rem
          height 1.5rem
          left 5%
          background url("icon-search-active.png") center no-repeat
          background-size contain
          -webkit-background-size contain
        .search-input
          width 70%
          height 2rem
          margin-left 20%
          margin-right 5%
          border none
          outline none
          font-size 1.1rem
          background-color transparent
      .topComponent-news
        position relative
        float right
        width 15%
        height 3.5rem
        color rgb(255,255,255)
        .icon-msg
          top 15%
          width 1.5rem
          height 1.5rem
          background url("home_nav_news@3x.png") center no-repeat
          background-size contain
          -webkit-background-size contain
        .news-text
          position absolute
          bottom 10%
          width 100%
          font-size 0.9rem
          color #fff
          text-align center
      &.change
        background-color rgb(234,234,234)
        .icon-search
          background url("icon-search-active-dark.png") center no-repeat
          background-size contain
          -webkit-background-size contain
        .icon-msg
          background url("home_nav_news-dark@3x.png") center no-repeat
          background-size contain
          -webkit-background-size contain
        .news-text
          color rgb(165,165,165)
    .topComponent-content
      position fixed
      top 3rem
      bottom 0
      left 0
      right 0
      width 100%
      background-color #fff
      z-index 1001
      height 85%
      overflow-y scroll
      .topComponent-content-item
        padding 10px 1rem
        border-bottom 1px solid #e5e5e5
        color #2f2f2f
        line-height 1.6
</style>
