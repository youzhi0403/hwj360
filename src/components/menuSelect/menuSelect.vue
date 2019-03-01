<template>
  <div class="menuSelect">
    <cube-popup
      :position="position"
      :mask-closable="true"
      v-model="isShow"
      @mask-click="close"
    >
      <div class="left-panel">
        <div class="left-wrapper" ref="leftScroll">
          <cube-tab-bar v-model="paramOfLevel1" :data="tabs" @change="changeHandler"></cube-tab-bar>
        </div>
      </div>
      <div class="right-panel">
        <div class="right-wrapper" ref="rightScroll">
          <ul>
            <li v-for="(item,index) in scrollData" :key="index" class="list-item" @click.stop.prevent="selectMenu(item.name)" :class="{'active':paramOfLevel2===item.name}">
              {{item.name}}
            </li>
          </ul>
        </div>
      </div>
    </cube-popup>
  </div>

</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'menuSelect',
  data () {
    return {
      tabs: [],
      scrollData: [],
      data_map: {},
      position: 'top',
      isShow: true,
      paramOfLevel1: '',
      paramOfLevel2: ''
    }
  },
  props: {
    level1: {
      type: String,
      default: function () {
        return ''
      }
    },
    level2: {
      type: String,
      default: function () {
        return ''
      }
    },
    level1Index: {
      type: Number,
      default: function () {
        return 0
      }
    },
    level2Index: {
      type: Number,
      default: function () {
        return 0
      }
    },
    initData: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  created () {
    this.paramOfLevel1 = this.level1
    this.paramOfLevel2 = this.level2
    this.init()
  },
  mounted () {
    this._initScroll()
  },
  updated: function () {
    console.log('执行了update...')
  },
  methods: {
    _initScroll () {
      this.leftScroll = new BScroll(this.$refs['leftScroll'], {
        click: true
      })
      this.rightScroll = new BScroll(this.$refs['rightScroll'], {
        click: true
      })
    },
    init () {
      for (let i = 0; i < this.initData.length; i++) {
        this.data_map[this.initData[i].name] = this.initData[i].arr
      }
      // 初始化scrollData
      this.scrollData = this.data_map[this.level1]

      // 初始化tabs
      this.tabs = Object.keys(this.data_map).map(label => ({
        label
      }))
    },
    changeHandler (label) {
      this.scrollData = this.data_map[label]
      this.$nextTick(() => {
        this.rightScroll.scrollTo(0, 0)
        this.rightScroll.refresh()
      })
    },
    selectMenu (name) {
      this.paramOfLevel2 = name
      this.$emit('selectMenu', this.paramOfLevel2)
    },
    close (e) {
      this.$emit('close', e)
    }
  }
}
</script>

<style lang="stylus">
  .menuSelect
    .cube-popup
      top 3rem
      .cube-popup-mask
        background-color #9e9e9e
        opacity 0.2
    .left-panel
      width 30%
      height 15rem
      overflow auto
      background-color #e2e2e2
      float left
      .left-wrapper
        width 100%
        height 100%
        .cube-tab-bar
          display block
          .cube-tab
            width 100%
            height 3rem
            line-height 3rem
            text-align center
            border-bottom 1px solid #ddd
            padding 0
            display inline-block
            &.cube-tab_active
              background-color #fff
    .right-panel
      width 70%
      height 15rem
      background-color #fff
      float left
      .right-wrapper
        height 100%
        overflow hidden
        ul
          width 100%
          overflow auto
          .list-item
            height 3rem
            line-height 3rem
            text-align left
            padding-left 1rem
            margin-right 1rem
            font-size 0.9rem
            &.active
              background url("./med_screen_Check@2x.png") no-repeat right
              background-size 1rem
              color #ed4529
</style>
