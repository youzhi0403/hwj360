<template>
  <div class="selfHelp">
    <div class="medication-tab-page">
      <div class="tab-selection" :class="{'tab-selection-active':bodyShow}" @click.stop.prevent="body">
        按部位
      </div>
      <div class="tab-border center_elm">
      </div>
      <div class="tab-selection" @click.stop.prevent="apartment" :class="{'tab-selection-active':apartmentShow}">
        按科室
      </div>
    </div>
    <div class="tab-selection-body" v-show="bodyShow">
      <img src="./body.png" alt="body">
      <div class="body-apartment part-12 apartment-1" @click.stop.prevent="bodyListShow(0)">
        <a href="#" class="center_elm">神经血液系统</a>
      </div>
      <div class="body-apartment part-2 apartment-2" @click.stop.prevent="bodyListShow(1)">
        <a href="#" class="center_elm">眼睛</a>
      </div>
      <div class="body-apartment part-3 apartment-3" @click.stop.prevent="bodyListShow(2)">
        <a href="#" class="center_elm">鼻子</a>
      </div>
      <div class="body-apartment part-4 apartment-4" @click.stop.prevent="bodyListShow(3)">
        <a href="#" class="center_elm">耳朵</a>
      </div>
      <div class="body-apartment part-8 apartment-5" @click.stop.prevent="bodyListShow(4)">
        <a href="#" class="center_elm">腹部</a>
      </div>
      <div class="body-apartment part-9 apartment-6" @click.stop.prevent="bodyListShow(5)">
        <a href="#" class="center_elm">生殖、肝部</a>
      </div>
      <div class="body-apartment part-1 apartment-7" @click.stop.prevent="bodyListShow(6)">
        <a href="#" class="center_elm">头部</a>
      </div>
      <div class="body-apartment part-6 apartment-8" @click.stop.prevent="bodyListShow(7)">
        <a href="#" class="center_elm">颈肩部</a>
      </div>
      <div class="body-apartment part-5 apartment-9" @click.stop.prevent="bodyListShow(8)">
        <a href="#" class="center_elm">口咽部</a>
      </div>
      <div class="body-apartment part-7 apartment-10" @click.stop.prevent="bodyListShow(9)">
        <a href="#" class="center_elm">胸部</a>
      </div>
      <div class="body-apartment part-10 apartment-11" @click.stop.prevent="bodyListShow(10)">
        <a href="#" class="center_elm">四肢</a>
      </div>
      <div class="body-apartment part-11 apartment-12" @click.stop.prevent="bodyListShow(11)">
        <a href="#" class="center_elm">皮肤</a>
      </div>
    </div>
    <div class="tab-selection-apartment" v-show="apartmentShow">
      <div class="left-panel">
        <cube-scroll>
          <cube-tab-bar v-model="selectedLabel" :data="tabs" @change="changeHandler"></cube-tab-bar>
        </cube-scroll>
      </div>
      <div class="right-panel">
        <cube-scroll ref="scroll">
          <div class="apartment-detail" v-for="(item,index) in scrollData" :key="index">
            <div class="apartment-detail-title">
              {{item.name}}
            </div>
            <div class="apartment-detail-content">
              <a class="illness-name" v-for="(item2,index2) in item.arr" :key="index2">
                {{item2.name}}
              </a>
            </div>
          </div>
        </cube-scroll>
      </div>
    </div>

    <transition name="fold">
      <div class="bodyList-popup" v-show="bodyList">
        <div class="toolbar">
          <div class="toolbar-inner">
            <a href="#" class="picker-button close-select" @click.stop.prevent="bodyListHide">取消</a>
            <h1 class="title">{{bodysShow.name}}</h1>
          </div>
        </div>
        <div class="bodyList-cells">
          <div class="bodyList-cell" v-for="(item,index) in bodysShow.arr" :key="index">
            <p>{{item.name}}</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { getIllness, getBody } from '../../api'

export default {
  name: 'selfHelp',
  data () {
    return {
      bodyShow: true,
      apartmentShow: false,
      bodyList: false,
      selectedLabel: '内科',
      scrollData: [],
      tabs: [],
      data_map: {},
      bodys: [],
      bodysShow: []
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      getIllness().then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          this.data_map[res.data[i].name] = res.data[i].classification
        }
        // 初始化scrollData
        this.scrollData = this.data_map[this.selectedLabel]
        // 初始化tabs
        this.tabs = Object.keys(this.data_map).map(label => ({
          label
        }))
      })
      getBody().then((res) => {
        this.bodys = res.data
      })
    },
    changeHandler (label) {
      this.scrollData = this.data_map[label]
      this.$nextTick(() => {
        this.$refs.scroll.scrollTo(0, 0)
        this.$refs.scroll.refresh()
      })
    },
    body () {
      this.bodyShow = true
      this.apartmentShow = false
    },
    apartment () {
      this.bodyShow = false
      this.apartmentShow = true

      this.bodyList = false
    },
    bodyListShow (index) {
      this.bodysShow = this.bodys[index]
      console.log('bodysShow:', this.bodysShow)
      this.bodyList = true
    },
    bodyListHide () {
      this.bodyList = false
    }
  }
}
</script>

<style lang="stylus">
.selfHelp
  z-index 1000
  .medication-tab-page
    position relative
    float left
    width 100%
    max-width 640px
    border-top 1px solid #e5e5e5
    border-bottom 1px solid #e5e5e5
    background-color #fff
    .tab-selection
      float left
      width 50%
      height 4rem
      line-height 4rem
      text-align center
      font-size 1.2rem
      color #2f2f2f
    .tab-border
      width 1px
      height 1rem
      background-color #e5e5e5
    .tab-selection-active
      border-bottom 2px solid #ed4529
  .tab-selection-body
    position absolute
    z-index 1000
    top 4.1rem
    bottom 0
    width 100%
    max-width 640px
    img
      width 100%
      height 100%
      vertical-align middle
    .body-apartment
      position absolute
      width 4rem
      height 4rem
      border-radius 5rem
      text-align center
      background-color #a5cca1
      a
        width 90%
        color #fff
    .apartment-1
      top 5%
      left 5%
    .apartment-2
      top 20%
      left 5%
    .apartment-3
      top 35%
      left 5%
    .apartment-4
      top 50%
      left 5%
    .apartment-5
      top 65%
      left 5%
    .apartment-6
      top 80%
      left 5%
    .apartment-7
      top 5%
      right 6%
    .apartment-8
      top 20%
      right 6%
    .apartment-9
      top 35%
      right 6%
    .apartment-10
      top 50%
      right 6%
    .apartment-11
      top 65%
      right 6%
    .apartment-12
      top 80%
      right 6%
  .tab-selection-apartment
    position absolute
    top 4.1rem
    bottom 0
    width 100%
    max-width 640px
    float left
    z-index 1000
    .left-panel
      position absolute
      top 0
      bottom 0
      width 30%
      float left
      text-align center
      font-size 1.2rem
      color #2f2f2f
      background-color #f4f4f4
      overflow auto
    .right-panel
      position absolute
      top 0
      bottom 0
      left 30%
      float left
      width 70%
      padding 0 1rem 1rem
      overflow auto
      .apartment-detail
        float left
        .apartment-detail-title
          width 100%
          height 3rem
          line-height 3rem
          font-size 1.1rem
          border-bottom 1px solid #e5e5e5
        .apartment-detail-content
          float left
          padding-top 1rem
          .illness-name
            display block
            float left
            margin 0.5rem 0.2rem
            border 1px solid #e5e5e5
            border-radius 5rem
            padding 0.3rem 0.8rem
            color #717171
  .bodyList-popup
    position fixed
    left 0
    bottom 0
    z-index 1000
    width 100%
    transition all 0.5s
    transform translate3d(0,0,0)
    &.fold-enter,&.fold-leave-to
      transform translate3d(0,100%,0)
    .toolbar
      height 1.5
      line-height 1.5
      background #f7f7f8
      font-size 0.85rem
      color #3d4145
      width 100%
      position relative
      .toolbar-inner
        position relative
        height 2.2rem
        display flex
        text-align center
        .picker-button
          position absolute
          right 0
          box-sizing border-box
          height 2.2rem
          line-height 2.2rem
          color #04BE02
          z-index 1
          padding 0 0.5rem
        .title
          position absolute
          display block
          padding 0
          font-weight 400
          line-height 2.2rem
          text-align center
          white-space nowrap
          width 100%
    .bodyList-cells
      position relative
      max-height 16rem
      overflow-x hidden
      overflow-y auto
      text-align left
      background-color #fff
      line-height 1.4
      font-size 17px
      .bodyList-cell
        position relative
        display flex
        padding 10px 5px
        align-items center
</style>
