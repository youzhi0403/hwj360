<template>
  <div class="classify-vertical">
    <div class="classify-container">
      <div class="left-panel">
        <cube-scroll>
          <cube-tab-bar v-model="selectedLabel" :data="tabs" @change="changeHandler"></cube-tab-bar>
        </cube-scroll>
      </div>
      <div class="right-panel">
        <cube-scroll ref="scroll">
          <ul>
            <li v-for="(item,index) in scrollData" :key="index" class="list-item">
              <h1 class="title">{{item.name}}</h1>
              <ul class="after">
                <li v-for="(item2,index2) in item.arr" :key="index2" @click.stop.prevent="locateGoodListSales(item2)">
                  <div class="item2-img">
                    <img :src="item2.img">
                  </div>
                  <p class="item2-text">{{item2.name}}</p>
                </li>
              </ul>
            </li>
          </ul>
        </cube-scroll>
      </div>
    </div>
    <footer-nav :propOfRouterName="navName"></footer-nav>
  </div>
</template>

<script>
import res from './classify'
import FooterNav from '../../components/footer-nav/footer-nav'
export default {
  name: 'classify-vertical',
  components: { FooterNav },
  data () {
    return {
      navName: 'classify',
      selectedLabel: '中西药品',
      scrollData: [],
      tabs: [],
      data_map: {}
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      for (let i = 0; i < res.data.length; i++) {
        this.data_map[res.data[i].name] = res.data[i].goods
      }
      // 初始化scrollData
      this.scrollData = this.data_map[this.selectedLabel]
      // 初始化tabs
      this.tabs = Object.keys(this.data_map).map(label => ({
        label
      }))
    },
    changeHandler (label) {
      this.scrollData = this.data_map[label]
      this.$nextTick(() => {
        this.$refs.scroll.scrollTo(0, 0)
        this.$refs.scroll.refresh()
      })
    },
    locateGoodListSales (item) {
      this.$router.push({ name: 'goodListSales', params: { classifyItem: item } })
    }
  }
}
</script>

<style lang="stylus">
  .cube-scroll-list-wrapper
    .cube-tab-bar
      flex-wrap wrap
      .cube-tab
        width 100%
        flex-basis unset
        height 3.5rem
        line-height 3.5rem
        text-align center
        border-bottom 1px solid #ddd
        padding 0
        &.cube-tab_active
          border-left 2px solid #ed4529
          color ed4529
          background-color #fff
  .classify-container
    position fixed
    width 100%
    max-width 640px
    bottom 3.5rem
    top 0
    .left-panel
      position absolute
      top 0
      bottom 0
      left 0
      width 25%
      background-color #f6f6f6
      color #424242
    .right-panel
      position absolute
      top 0
      right 0
      bottom 0
      width 75%
      padding-left 0.5rem
      background-color #fff
      .list-item
        width 100%
        .title
          width 100%
          height 3rem
          color #2d2d2d
          padding-top 1.2rem
          border-bottom 1px solid #ddd
        ul
          width 100%
          li
            float left
            width 33%
            height 8rem
            .item2-img
              width 4rem
              height 4rem
              border-radius 50%
              overflow hidden
              background-color #eee7e5
              margin 1rem auto 0.5rem
              img
                width 100%
                vertical-align middle
            .item2-text
              width 100%
              text-align center
              padding-bottom 1rem
</style>
