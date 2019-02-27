<template>
  <div class="selfHelp">
    <!--顶部导航栏-->
    <div class="medication-tab-page">
      <div class="tab-selection" :class="{'tab-selection-active':bodyShow}" @click.stop.prevent="body">
        按部位
      </div>
      <div class="tab-border center-elm">
      </div>
      <div class="tab-selection" @click.stop.prevent="apartment" :class="{'tab-selection-active':apartmentShow}">
        按科室
      </div>
    </div>
    <!--科室-->
    <div class="tab-selection-apartment" v-show="apartmentShow">
      <div class="left-panel">
        <cube-scroll>
          <cube-tab-bar v-model="selectedLabel" :data="tabs" @change="changeHandler"></cube-tab-bar>
        </cube-scroll>
      </div>
      <div class="right-panel">
        <cube-scroll ref="illnessScroll">
          <ul class="after">
            <li class="apartment-detail" v-for="(item,index) in scrollData" :key="index" ref="myTest">
              <div class="apartment-detail-title">
                {{item.name}}
              </div>
              <div class="apartment-detail-content">
                <a class="illness-name" v-for="(item2,index2) in item.arr" :key="index2" @click.stop.prevent="locateGoodsList(item2.name)">
                  {{item2.name}}
                </a>
              </div>
            </li>
          </ul>
        </cube-scroll>
      </div>
    </div>
    <!--部位-->
    <div class="tab-selection-body" v-show="bodyShow">
      <img src="./body.png" alt="body">
      <div class="body-apartment part-12 apartment-1" @click.stop.prevent="showPicker(0)">
        <a href="#" class="center-elm">神经血液系统</a>
      </div>
      <div class="body-apartment part-2 apartment-2" @click.stop.prevent="showPicker(1)">
        <a href="#" class="center-elm">眼睛</a>
      </div>
      <div class="body-apartment part-3 apartment-3" @click.stop.prevent="showPicker(2)">
        <a href="#" class="center-elm">鼻子</a>
      </div>
      <div class="body-apartment part-4 apartment-4" @click.stop.prevent="showPicker(3)">
        <a href="#" class="center-elm">耳朵</a>
      </div>
      <div class="body-apartment part-8 apartment-5" @click.stop.prevent="showPicker(4)">
        <a href="#" class="center-elm">腹部</a>
      </div>
      <div class="body-apartment part-9 apartment-6" @click.stop.prevent="showPicker(5)">
        <a href="#" class="center-elm">生殖、肝部</a>
      </div>
      <div class="body-apartment part-1 apartment-7" @click.stop.prevent="showPicker(6)">
        <a href="#" class="center-elm">头部</a>
      </div>
      <div class="body-apartment part-6 apartment-8" @click.stop.prevent="showPicker(7)">
        <a href="#" class="center-elm">颈肩部</a>
      </div>
      <div class="body-apartment part-5 apartment-9" @click.stop.prevent="showPicker(8)">
        <a href="#" class="center-elm">口咽部</a>
      </div>
      <div class="body-apartment part-7 apartment-10" @click.stop.prevent="showPicker(9)">
        <a href="#" class="center-elm">胸部</a>
      </div>
      <div class="body-apartment part-10 apartment-11" @click.stop.prevent="showPicker(10)">
        <a href="#" class="center-elm">四肢</a>
      </div>
      <div class="body-apartment part-11 apartment-12" @click.stop.prevent="showPicker(11)">
        <a href="#" class="center-elm">皮肤</a>
      </div>
    </div>

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
  mounted () {

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

        let current = this
        setTimeout(function () {
          current.$nextTick(() => {
            current.$refs.illnessScroll.refresh()
          })
        }, 500)
        setTimeout(function () {
          current.$nextTick(() => {
            current.$refs.illnessScroll.refresh()
          })
        }, 1000)
        setTimeout(function () {
          current.$nextTick(() => {
            current.$refs.illnessScroll.refresh()
          })
        }, 1500)
      })
      getBody().then((res) => {
        this.bodys = res.data
      })
    },
    changeHandler (label) {
      this.scrollData = this.data_map[label]
      this.$nextTick(() => {
        this.$refs.illnessScroll.scrollTo(0, 0)
        this.$refs.illnessScroll.refresh()
      })
    },
    body () {
      this.bodyShow = true
      this.apartmentShow = false
    },
    apartment () {
      this.bodyShow = false
      this.apartmentShow = true
    },
    locateGoodsList (name) {
      console.log(name)
      this.$router.push({ name: 'goodsListMenu' })
    },
    showPicker (index) {
      this.bodysShow = this.bodys[index]
      if (!this.bodyPicker) {
        console.log(this.bodysShow.arr)
        this.bodyPicker = this.$createPicker({
          title: this.bodysShow.name,
          data: [this.bodysShow.arr],
          alias: {
            value: 'value',
            text: 'name'
          },
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      } else {
        this.bodyPicker.$updateProps({
          data: [this.bodysShow.arr]
        })
      }
      this.bodyPicker.show()
    },
    selectHandle (selectedVal, selectedIndex, selectedText) {
    },
    cancelHandle () {
    }
  }
}
</script>

<style lang="stylus">
.selfHelp
  z-index 1
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
    z-index 1
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
    z-index 1
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
      .cube-tab
        height 3.5rem
        line-height 3.5rem
      .cube-tab_active
        border-bottom 0
    .right-panel
      position absolute
      top 0
      bottom 0
      left 30%
      float left
      width 70%
      padding 0 1rem 1rem
      overflow auto
      background-color #fff
      ul
        width 100%
        height 100%
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
</style>
