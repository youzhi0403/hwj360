<template>
  <div class="home">
    <!--顶部搜索组件-->
    <topComponent ref="topComponent"></topComponent>
    <cube-scroll
      class="home-scroll"
      ref="homeScroll"
      :options="options"
      :scrollEvents="eventsArr"
      @scroll="onScrollHandle"
    >
      <div class="home-wrapper">
        <!--顶部轮播图-->
        <div class="home-slide">
          <cube-slide :data="slideItems"></cube-slide>
        </div>

        <!--导航栏-->
        <div class="home-nav after">
          <div class="nav-item" v-for="(item,index) in navItems" :key="index" @click.stop.prevent="item.clickEventName">
            <div class="nav-item-img">
              <img :src="item.img">
            </div>
            <div class="nav-item-text">
              {{item.text}}
            </div>
          </div>
        </div>

        <!--秒杀商品-->
        <div content="secondKill-wrapper">
          <secondKill></secondKill>
        </div>

        <!--用户福利-->
        <div class="welfare">
          <div class="welfare-top">
            <div class="welfare-top-img">
              <img :src="welfareImgs.title">
            </div>
          </div>
          <div class="welfare-content after">
            <div class="welfare-left">
              <img :src="welfareImgs.left">
            </div>
            <div class="welfare-right">
              <div class="welfare-right-top">
                <img :src="welfareImgs.rightTop">
              </div>
              <div class="welfare-right-bottom">
                <img :src="welfareImgs.rightBottom">
              </div>
            </div>
          </div>
        </div>

        <!--横幅-->
        <banner :img="banner[0]"></banner>

        <!--精选分类-->
        <div class="selectedClassify">
          <div class="selectedClassify-top">
            <div class="top-img">
              <img :src="classifyImgs.title">
            </div>
          </div>
          <div class="selectedClassify-content">
            <div class="row-first after">
              <div class="row-first-left">
                <img :src="classifyImgs.family">
              </div>
              <div class="row-first-right">
                <div class="row-first-right-top">
                  <img :src="classifyImgs.heartAndhead">
                </div>
                <div class="row-first-right-bottom">
                  <img :src="classifyImgs.stomach">
                </div>
              </div>
            </div>
            <div class="row-second after">
              <div class="row-second-item">
                <img :src="classifyImgs.instrument">
              </div>
              <div class="row-second-item">
                <img :src="classifyImgs.tranditionalMedical">
              </div>
              <div class="row-second-item">
                <img :src="classifyImgs.nutrition">
              </div>
            </div>
            <div class="row-third after">
              <div class="row-third-item">
                <img :src="classifyImgs.num1">
              </div>
              <div class="row-third-item">
                <img :src="classifyImgs.num2">
              </div>
              <div class="row-third-item">
                <img :src="classifyImgs.num3">
              </div>
              <div class="row-third-item">
                <img :src="classifyImgs.num4">
              </div>
              <div class="row-third-item">
                <img :src="classifyImgs.num5">
              </div>
              <div class="row-third-item">
                <img :src="classifyImgs.num6">
              </div>
              <div class="row-third-item">
                <img :src="classifyImgs.num7">
              </div>
              <div class="row-third-item">
                <img :src="classifyImgs.num8">
              </div>
            </div>
          </div>
        </div>

        <!--横幅-->
        <banner :img="banner[1]"></banner>

        <!--品牌馆-->
        <div class="brand">
          <div class="brand-top">
            <div class="brand-top-img">
              <img :src="brands.title">
            </div>
          </div>
          <div class="brand-content after">
            <div class="row-first">
              <div class="row-first-item">
                <img :src="brands.num1">
              </div>
              <div class="row-first-item">
                <img :src="brands.num2">
              </div>
            </div>
            <div class="row-second">
              <div class="row-second-item">
                <img :src="brands.num3">
              </div>
              <div class="row-second-item">
                <img :src="brands.num4">
              </div>
              <div class="row-second-item">
                <img :src="brands.num5">
              </div>
              <div class="row-second-item">
                <img :src="brands.num6">
              </div>
            </div>
          </div>
        </div>
        <!--商品列表-->
        <medicines :ms="CW"></medicines>
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
import Banner from '../banner/banner'
import { getCW, getHouseholdD, getHealthF, getMedicalD } from '../../api'
import Medicines from '../medicines/medicines'
import Download from '../download/download'
import FooterNav from '../footer-nav/footer-nav'

import topComponent from '../topComponent/topComponent'
import secondKill from '../secondKill/secondKill'

export default {
  name: 'home',
  data () {
    return {
      /* 轮播图图片 */
      slideItems: [
        {
          url: '',
          image: 'http://static.360hwj.com/group1/M00/09/CC/J2zAA1xPtNGARhjTAANznzJzvHY103.jpg'
        },
        {
          url: '',
          image: 'http://static.360hwj.com/group1/M00/09/8B/J2zAA1w2naKAY3jZAAF7W3NwIJ4495.jpg'
        },
        {
          url: '',
          image: 'http://static.360hwj.com/group1/M00/08/F0/J2zAA1vW0t2AbLEeAAORfvqnMoE038.jpg'
        }
      ],
      /* 导航栏数据 */
      navItems: [
        {
          img: 'http://m.360hwj.com/images/0130/1.png',
          text: '全部分类',
          clickEventName: this.locateToClassify
        },
        {
          img: 'http://m.360hwj.com/images/0130/2.png',
          text: '自助找药',
          clickEventName: this.locateToSelfHelp
        },
        {
          img: 'http://m.360hwj.com/images/0130/3.png',
          text: '推广分享',
          clickEventName: this.locateToShare
        },
        {
          img: 'http://m.360hwj.com/images/0130/4.png',
          text: '客服咨询',
          clickEventName: this.test
        },
        {
          img: 'http://m.360hwj.com/images/0130/5.png',
          text: '签到有礼',
          clickEventName: this.locateToSignin
        },
        {
          img: 'http://m.360hwj.com/images/0130/6.png',
          text: '男性专区',
          clickEventName: this.test
        },
        {
          img: 'http://m.360hwj.com/images/0130/7.png',
          text: '女性专区',
          clickEventName: this.test
        },
        {
          img: 'http://m.360hwj.com/images/0130/8.png',
          text: '中药饮片',
          clickEventName: this.test
        },
        {
          img: 'http://m.360hwj.com/images/0130/9.png',
          text: '成人用品',
          clickEventName: this.test
        },
        {
          img: 'http://m.360hwj.com/images/0130/10.png',
          text: '超值兑换',
          clickEventName: this.test
        }
      ],
      options: {
        click: true
      },
      eventsArr: ['scroll'],
      CW: {},
      MedicalD: {},
      householdD: {},
      healthF: {},
      topComponentActive: false,
      /* 用户福利图片 */
      welfareImgs: {
        title: 'http://m.360hwj.com/images/home-new/home_classify_1@2x.png',
        left: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xCvVKAFlQmAAFhiL2WSVQ660.gif',
        rightTop: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xChPSADfTiAAEBqI442rA648.jpg',
        rightBottom: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xCloaAL-d0AAEKPhFrA2c826.jpg'
      },
      /* 横幅图片 */
      banner: [
        'http://static.360hwj.com/group1/M00/09/3F/J2zAA1wkS2mACIRpAAMzTcxYXZI576.jpg',
        'http://static.360hwj.com/group1/M00/05/C1/J2zAA1qrhUqAQThSAAIGfTUeTp4019.jpg'
      ],
      /* 精选分类图片 */
      classifyImgs: {
        title: 'http://m.360hwj.com/images/home-new/home_classify_2@2x.png',
        family: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xDJQCAa7wCAADgz5woQ-8927.gif',
        heartAndhead: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xCwkCAVDnqAAEodlkBzHA815.jpg',
        stomach: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xCwyOAF9_CAAE0xjF2T-0197.jpg',
        instrument: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xDJ5GAf4XCAAEg8wtAwLw702.jpg',
        tranditionalMedical: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xDJ6iAYHsCAAE25i_sOh4154.jpg',
        nutrition: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xDJ0aABz0dAAFExU6imak376.jpg',
        num1: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xDFSWAJZaFAABHxyWSjMk393.jpg',
        num2: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xDFZyACRLXAABHnqeiE9U604.jpg',
        num3: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xDFlyAA5bQAABCGdUUtVU340.jpg',
        num4: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xDFy6Af7V7AABJ_QqZ-R0742.jpg',
        num5: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xDF-iAKkDhAABRA_Y81cY366.jpg',
        num6: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xDGGuACygZAABHT7xfC_Y079.jpg',
        num7: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xDGOmAL770AABGhEhpfQc550.jpg',
        num8: 'http://static.360hwj.com/group1/M00/09/C6/J2zAA1xDGf-AeCGFAABTKkKemQo093.jpg'
      },
      /* 品牌图片 */
      brands: {
        title: 'http://m.360hwj.com/images/home-new/home_classify_3@2x.png',
        num1: 'http://static.360hwj.com/group1/M00/05/C2/J2zAA1qrq42AHgfJAAB1IHz2UZo485.png',
        num2: 'http://static.360hwj.com/group1/M00/05/C2/J2zAA1qrq52AawNsAAB6AuzrFTQ339.png',
        num3: 'http://static.360hwj.com/group1/M00/05/C2/J2zAA1qrs-qATd8fAAA4qGx1w_c563.png',
        num4: 'http://static.360hwj.com/group1/M00/05/C2/J2zAA1qrpkqAJwWEAABWVDLe-JE694.png',
        num5: 'http://static.360hwj.com/group1/M00/08/E5/J2zAA1u_J5yAWcJDAAB4YTcvjKM207.png',
        num6: 'http://static.360hwj.com/group1/M00/05/C2/J2zAA1qrrg2AKCCuAABf5ndq70A977.png'
      }
    }
  },
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
    Banner,
    'secondKill': secondKill
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
    },
    locateToClassify () {
      this.$router.push({ name: 'classify' })
    },
    locateToSelfHelp () {
      this.$router.push({ name: 'selfHelp' })
    },
    locateToShare () {
      this.$router.push({ name: 'share' })
    },
    test () {
      console.log('test...')
    },
    locateToSignin () {
      this.$router.push({ name: 'signin' })
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
      .home-wrapper
        .home-nav
          width 100%
          background-color #fff
          .nav-item
            float left
            width 20%
            height 6.1rem
            padding .6rem 0 .5rem
            .nav-item-img
              width 60%
              margin 0 auto
              img
                width 100%
                vertical-align middle
            .nav-item-text
              text-align center
              margin-top 0.5rem
        .welfare
          width 100%
          background-color #fff
          .welfare-top
            width 100%
            padding 0.2rem 0
            margin-top 0.5rem
            .welfare-top-img
              width 30%
              margin 0 auto
              img
                width 100%
                vertical-align middle
          .welfare-content
            border-top 1px solid #e8e8e8
            width 100%
            .welfare-left
              border-right 1px solid #e8e8e8
              width 50%
              float left
              img
                width 100%
                vertical-align middle
            .welfare-right
              width 50%
              float left
              .welfare-right-top
                border-bottom 1px solid #e8e8e8
                img
                  width 100%
                  vertical-align middle
              .welfare-right-bottom
                img
                  width 100%
                  vertical-align middle
        .selectedClassify
          width 100%
          background-color #fff
          .selectedClassify-top
            width 100%
            padding 0.2rem 0
            margin-top 0.5rem
            .top-img
              width 30%
              margin 0 auto
              img
                width 100%
                vertical-align center
          .selectedClassify-content
            border-top 1px solid #e8e8e8
            .row-first
              .row-first-left
                border-right 1px solid #e8e8e8
                width 50%
                float left
                img
                  width 100%
                  vertical-align middle
              .row-first-right
                width 50%
                float left
                img
                  width 100%
                  vertical-align middle
                .row-first-right-top
                  border-bottom 1px solid #e8e8e8
            .row-second
              border-top 1px solid #e8e8e8
              .row-second-item
                border-right 1px solid #e8e8e8
                width 33.3%
                float left
                img
                  width 100%
                  vertical-align middle
            .row-third
              .row-third-item
                width 27%
                float left
                border-top 1px solid #e8e8e8
                &:not(:nth-child(4n))
                  border-right 1px solid #e8e8e8
                &:nth-child(4n-2)
                  width 23%
                &:nth-child(4n-1)
                  width 23%
        .brand
          width 100%
          background-color #fff
          .brand-top
            width 100%
            padding 0.2rem 0
            margin-top 0.5rem
            .brand-top-img
              width 30%
              margin 0 auto
              img
                width 100%
                vertical-align middle
          .brand-content
            padding-bottom 0.8rem
            .row-first
              padding 0 0.2rem 0.5rem
              .row-first-item
                width 50%
                float left
                padding 0 0.2rem
                img
                  width 100%
                  vertical-align middle
            .row-second
              padding 0 0.2rem
              .row-second-item
                width 25%
                float left
                padding 0.3rem 0.2rem 0
                img
                  width 100%
                  vertical-align middle
</style>
