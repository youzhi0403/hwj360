<template>
      <cube-scroll
        class="home"
        ref="homeScroll"
        :options="options"
      >
        <div class="home-wrapper">
          <search></search>
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
</template>

<script>
import search from '../search/search'
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
    Medicines,
    Brand,
    Banner,
    SelectedClassify,
    FirstWelfare,
    Welfare,
    'search': search,
    'slide': slide,
    'hwj-nav': nav,
    'seckill': seckill
  },
  data () {
    return {
      options: {
        click: false,
        directionLockThreshold: 0
      },
      CW: {},
      MedicalD: {},
      householdD: {},
      healthF: {}
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.homeScroll.refresh()
    })
  },
  methods: {
    _getCW () {
      getCW().then((res) => {
        console.log('res:', res)
        this.CW = res
        this.CW.title = 'http://m.360hwj.com/images/home_classify_1@2x.png'
        console.log(this.CW)
        console.log(this.CW.title)
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
    overflow hidden
</style>
