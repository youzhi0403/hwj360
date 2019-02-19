<template>
  <div class="searchPage">
    <div class="header-form">
      <input class="search-input" placeholder="请输入搜索药品" v-model="key">
      <button class="search-btn" @click.stop.prevent="searchGoodsList">搜药</button>
    </div>
    <div class="search-relation" v-show="recommendContent">
      <div class="relation-items" v-for="(item,index) in searchGoods" :key="index" @click.stop.prevent="locateRoute(item.name)">
        {{item.name}}
      </div>
    </div>
    <div class="content">
      <div class="search-container">
        <div class="search-title">
          热门搜索
        </div>
        <div class="search-outcome">
          <span class="outcome-box">999</span>
          <span class="outcome-box">肾宝片</span>
          <span class="outcome-box">藿香正气水</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getGoodsList } from '../../api'

export default {
  name: 'searchPage',
  data () {
    return {
      recommendContent: false,
      searchGoods: [],
      key: ''
    }
  },
  methods: {
    _getGoodsList () {
      getGoodsList().then((res) => {
        this.searchGoods = res.data
      })
    },
    locateRoute (name) {
      this.recommendContent = false
      this.$router.push({ name: 'good', params: { goodId: name } })
    },
    searchGoodsList () {
      this.recommendContent = false
      this.$router.push({ name: 'goodsList' })
    }
  },
  watch: {
    key (val) {
      if (val !== '') {
        this._getGoodsList()
        this.recommendContent = true
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
.content
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
