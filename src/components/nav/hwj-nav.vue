<template>
    <div class="hwj-nav after">
      <div class="nav-item" v-for="(item,index) in items" :key="index" @click.stop.prevent="item.clickEventName">
        <div class="item-img">
          <img :src="item.img">
        </div>
        <div class="item-text">
          {{item.text}}
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'hwj-nav',
  data () {
    return {
      items: [
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
          clickEventName: this.test
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
      ]
    }
  },
  methods: {
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
    }
  }

}
</script>

<style lang="stylus">
.hwj-nav
  width 100%
  background-color #fff
  .nav-item
    float left
    width 20%
    height 6.1rem
    padding .6rem 0 .5rem
    .item-img
      width 60%
      margin 0 auto
      img
        width 100%
        vertical-align middle
    .item-text
      text-align center
      margin-top 0.5rem
</style>
