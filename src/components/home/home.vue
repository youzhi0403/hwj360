<template>
  <div class="home">
    <topComponent ref="topComponent"></topComponent>
    <cube-scroll
      class="home-scroll"
      ref="homeScroll"
      :options="options"
      :scrollEvents="eventsArr"
      @scroll="onScrollHandle"
    >
      <div class="home-wrapper">
        <slide></slide>
        <hwj-nav></hwj-nav>
        <div content="seckill-wrapper">
          <seckill></seckill>
        </div>
        <welfare></welfare>
        <first-welfare></first-welfare>
        <selected-classify></selected-classify>
        <banner></banner>
        <brand></brand>
        <medicines v-bind:ms="CW"></medicines>
        <medicines :ms="MedicalD"></medicines>
        <medicines :ms="householdD"></medicines>
        <medicines :ms="healthF"></medicines>
      </div>
    </cube-scroll>
    <download></download>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import slide from '../slide/slide'
import nav from '../nav/hwj-nav'
import seckill from '../seckill/seckill'
import Welfare from '../welfare/welfare'
import FirstWelfare from '../firstWelfare/firstWelfare'
import SelectedClassify from '../selectedClassify'
import Banner from '../banner/banner'
import Brand from '../brand/brand'
import { getCW, getHouseholdD, getHealthF, getMedicalD } from '../../api'
import Medicines from '../medicines/medicines'
import Download from '../download/download'
import FooterNav from '../footer-nav/footer-nav'

import topComponent from '../topComponent/topComponent'

export default {
  name: 'home',
  created () {
    this.$nextTick(() => {
      this.$refs.homeScroll.refresh()
    })
    this._getCW()
    /* console.log('CW的值：', this.CW) */
    this._getMedicalD()
    this._getHouseholdD()
    this._getHealthF()
  },
  components: {
    'topComponent': topComponent,
    FooterNav,
    Download,
    Medicines,
    Brand,
    Banner,
    SelectedClassify,
    FirstWelfare,
    Welfare,
    'slide': slide,
    'hwj-nav': nav,
    'seckill': seckill
  },
  data () {
    return {
      options: {
        click: true
      },
      eventsArr: ['scroll'],
      CW: {},
      MedicalD: {},
      householdD: {},
      healthF: {},
      topComponentActive: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.homeScroll.refresh()
    })
  },
  methods: {
    onScrollHandle (pos) {
      if (pos.y < -50 && this.topComponentActive === false) {
        this.topComponentActive = true
        this.$refs['topComponent'].changeState(this.topComponentActive)
      } else if (pos.y > -50 && this.topComponentActive === true) {
        this.topComponentActive = false
        this.$refs['topComponent'].changeState(this.topComponentActive)
      }
    },
    _getCW () {
      getCW().then((res) => {
        this.CW = res
        this.CW.title = 'http://m.360hwj.com/images/home_classify_1@2x.png'
      })
    },
    _getMedicalD () {
      getMedicalD().then((res) => {
        this.MedicalD = res
        this.MedicalD.title = 'http://m.360hwj.com/images/home_classify_210@2x.png'
      })
    },
    _getHouseholdD () {
      getHouseholdD().then((res) => {
        this.householdD = res
        this.householdD.title = 'http://m.360hwj.com/images/home_classify_244@2x.png'
      })
    },
    _getHealthF () {
      getHealthF().then((res) => {
        this.healthF = res
        this.healthF.title = 'http://m.360hwj.com/images/home_classify_242@2x.png'
      })
    }
  }
}
</script>

<style lang="stylus">
  .home
    position absolute
    top 0
    bottom 3.5rem
    left 0
    width 100%
    max-width 640px
    overflow hidden
    .home-scroll
      position relative
      height 100%
</style>
