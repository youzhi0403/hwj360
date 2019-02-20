<template>
  <div class="menu-select">
    <div class="left-panel">
      <cube-scroll>
        <cube-tab-bar v-model="selectedLabel" :data="tabs" @change="changeHandler"></cube-tab-bar>
      </cube-scroll>
    </div>

    <div class="right-panel">
      <cube-scroll ref="scroll">
        <ul>
          <li v-for="(item,index) in scrollData" :key="index" class="list-item" @click.stop.prevent="selectMenu(item.name)" :class="{'active':selectedMenu===item.name}">
            {{item.name}}
          </li>
        </ul>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import { getBody } from '../../api'

export default {
  name: 'menu-select',
  data () {
    return {
      selectedLabel: '神经血液系统',
      tabs: [],
      scrollData: [],
      data_map: {},
      selectedMenu: ''
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      getBody().then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          this.data_map[res.data[i].name] = res.data[i].arr
        }
        // 初始化scrollData
        this.scrollData = this.data_map[this.selectedLabel]
        // 初始化tabs
        this.tabs = Object.keys(this.data_map).map(label => ({
          label
        }))
      })
    },
    changeHandler (label) {
      this.scrollData = this.data_map[label]
      this.$nextTick(() => {
        this.$refs.scroll.scrollTo(0, 0)
        this.$refs.scroll.refresh()
      })
    },
    selectMenu (name) {
      console.log(name)
      this.selectedMenu = name
      this.$emit('selectMenu', name)
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
        height 3rem
        line-height 3rem
        text-align center
        border-bottom 1px solid #ddd
        padding 0
        &.cube-tab_active
          color ed4529
          background-color #fff
  .menu-select
    position fixed
    top 3rem
    z-index 1001
    width 100%
    max-width 640px
    .left-panel
      position absolute
      top 0
      bottom 0
      left 0
      width 30%
      height 15rem
      overflow auto
      background-color #e2e2e2
      z-index 20
    .right-panel
      position absolute
      top 0
      right 0
      bottom 0
      width 70%
      height 15rem
      background-color #fff
      z-index 20
      ul
        width 100%
        height 100%
        overflow auto
        .list-item
          height 3rem
          line-height 3rem
          text-align left
          padding-left 1rem
          margin-right 1rem
          &.active
            color red
</style>
