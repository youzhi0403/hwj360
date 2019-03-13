<template>
  <div class="search">
    <div class="header-form">
      <input class="search-input" placeholder="请输入搜索药品" v-model="keyword" @keyup.enter="locateToGoodList">
      <button class="search-btn" @click.stop.prevent="locateToGoodList">搜药</button>
    </div>
    <div class="search-relation" v-show="isShow">
      <div class="relation-items" v-for="(item,index) in goods" :key="index" @click.stop.prevent="locateToGoodDetail(item)">
        {{item.fullname}}
      </div>
    </div>
    <div class="search-content">
      <div class="search-container">
        <div class="search-title">
          热门搜索
        </div>
        <div class="search-outcome">
          <span class="outcome-box" v-for="(item,index) in items" :key="index" @click.stop.prevent="">{{item}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import res from './goods'
export default {
  name: 'search',
  data () {
    return {
      isShow: false,
      goods: [],
      keyword: '',
      items: ['感冒灵', '正骨水']
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.goods = res.data
    },
    locateToGoodList () {
      this.$router.push({ name: 'goodListNormal', params: { keyword: this.keyword } })
    },
    locateToGoodDetail (item) {
      this.$router.push({ name: 'goodDetail', params: { good: item } })
    }
  },
  watch: {
    keyword (newVal, oldVal) {
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
  .header-form
    width 100%
    max-width 640px
    overflow hidden
    height 3rem
    line-height 3rem
    background-color #fff
    display flex
    justify-content flex-start
    z-index 500
    padding 0.25rem 1rem
    .search-input
      width 80%
      height 2.5rem
      padding-left 1rem
      border 1px solid #D1D1D1
    .search-btn
      width 20%
      height 2.5rem
      border-top-right-radius 5px
      border-bottom-right-radius 5px
      box-shadow none
      outline none
      background-color #ed4529
      border 1px solid #ed4529
      color #fff
  .search-relation
    position fixed
    top 3.5rem
    bottom 0
    left 0
    right 0
    width 100%
    background-color #fff
    z-index 1000
    .relation-items
      padding 10px 1rem
      border-bottom 1px solid #e5e5e5
      color #2f2f2f
      line-height 1.6
  .search-content
    padding 0
    width 100%
    max-width 640px
    .search-container
      width 100%
      background-color #fff
      .search-title
        position relative
        width 100%
        height 4rem
        line-height 4rem
        text-indent 1rem
        color #a5a5a5
      .search-outcome
        width 100%
        padding 0 1rem 1rem
        color #9a9a9a
        .outcome-box
          display inline-block
          height 1.5rem
          line-height 1.5rem
          padding 0 0.5rem
          border 1px solid #9e9e9e
          border-radius 5rem
          margin 0.5rem 0.2rem

</style>
