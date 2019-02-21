<template>
  <div class="share">
    <div class="header">
      <div class="user">
        <div class="user-img">
          <img :src="userInfo.avatar">
        </div>
        <div class="user-name">
          {{userInfo.name}}
        </div>
        <div class="user-asset" @click.stop.prevent="locateAssets">
          <i class="icon-asset vertical_center"></i>
          <div class="asset-text vertical_center">
            我的资产
          </div>
        </div>
      </div>
      <div class="vip-info">
        <div class="vip-items">
          <div class="items-title">会员数量</div>
          <div class="vip-num">{{userInfo.memberNum}}</div>
        </div>
        <div class="vip-items">
          <div class="items-title">预估收入</div>
          <div class="vip-num">￥{{userInfo.estimate}}</div>
        </div>
        <div class="vip-items">
          <div class="items-title">结算收入</div>
          <div class="vip-num">￥{{userInfo.final}}</div>
        </div>
      </div>
    </div>
    <div class="margin-well">
    </div>
    <div class="vip-content after">
      <div class="vip-content-title after">
        <div class="content-box" @click="shareShow" :class="{'shareActive':paramOfShareShow}">
          <div class="vip-content-items">
            <i class="icon-club-share center_elm"></i>
            <p>分享推广</p>
          </div>
        </div>

        <div class="content-box" @click="memberShow" :class="{'memberActive':paramOfMemberShow}">
          <div class="vip-content-items">
            <i class="icon-vip-mine center_elm"></i>
            <p>我的会员</p>
          </div>
        </div>

        <div class="content-box" @click="incomeShow" :class="{'incomeActive':paramOfIncomeShow}">
          <div class="vip-content-items">
            <i class="icon-input-detail center_elm"></i>
            <p>收入明细</p>
          </div>
        </div>
      </div>
      <div class="share-line after" v-show="paramOfShareShow">
        <div class="share-item">
          <img src="./copy.png">
          <p>复制链接</p>
        </div>
        <div class="share-item">
          <img src="./two-demension-code.png">
          <p>二维码扫描</p>
        </div>
      </div>
      <div class="share-line" v-show="paramOfMemberShow">
      </div>
      <div class="share-line" v-show="paramOfIncomeShow">
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'share',
  data () {
    return {
      userInfo: {
        'name': '13527700031',
        'avatar': 'http://static.360hwj.com/group1/M00/07/A1/J2zAA1mZH6-AQ-G_AAAEadr9AHg271.png',
        'memberNum': 0,
        'estimate': 0.01,
        'final': 0.01
      },
      paramOfShareShow: true,
      paramOfMemberShow: false,
      paramOfIncomeShow: false
    }
  },
  methods: {
    shareShow () {
      this.paramOfShareShow = true
      this.paramOfMemberShow = false
      this.paramOfIncomeShow = false
    },
    memberShow () {
      this.paramOfShareShow = false
      this.paramOfMemberShow = true
      this.paramOfIncomeShow = false
    },
    incomeShow () {
      this.paramOfShareShow = false
      this.paramOfMemberShow = false
      this.paramOfIncomeShow = true
    },
    locateAssets () {
      this.$router.push({ name: 'assets' })
    }
  }
}
</script>

<style lang="stylus">
.header
  position relative
  width 100%
  height 15rem
  line-height 1.6
  background url("./club_bg@2x.png")
  background-size cover
  .user
    position absolute
    width 100%
    height 8rem
    .user-img
      position absolute
      top 3rem
      left 2rem
      width 5.5rem
      height 5.5rem
      border-radius 5rem
      overflow hidden
      border 0.15rem solid #7155d0
      img
        width 100%
        height 100%
        vertical-align middle

    .user-name
      position absolute
      top 5rem
      left 8.5rem
      color #fff
      font-size 1.2rem
    .user-asset
      position absolute
      top 5rem
      right -1rem
      width 8rem
      height 2.2rem
      line-height 3.5rem
      border-radius 5rem
      color #fff
      background-color #562eb6
      .icon-asset
        width 1rem
        height 1rem
        background url("./club_prop@2x.png") center no-repeat
        background-size contain
        margin-left 1rem
      .asset-text
        position absolute
        margin-left 2.5rem
  .vip-info
    position absolute
    bottom 0.5rem
    left 0
    width 100%
    text-align center
    padding-top 0.5rem
    border-top 1px solid #7755d0
    .vip-items
      width 33.33%
      float left
      color #fff
      .items-title
        font-size 0.8rem
        color #e5e5e5
      .vip-num
        font-size 1.4rem
        font-weight 600
        &:nth-child(even)
          border-right 1px solid #7755d0
.margin-well
  width 100%
  height 1rem
  background-color #f4f4f4
.vip-content
  position absolute
  top 16rem
  bottom 0
  left 0
  right 0
  width 100%
  background-color #fff
  .vip-content-title
    width 100%
    text-align center
    color #6f6f6f
    border-bottom 1px solid #e5e5e5
    .content-box
      width 33.33%
      float left
      padding-bottom 1rem
      .vip-content-items
        width 100%
        position relative
        float left
        text-align center
        .icon-club-share
          width 2.5rem
          height 2.5rem
          background url("./club_share_normal@2x.png") center no-repeat
          background-size contain
        .icon-vip-mine
          width 2.5rem
          height 2.5rem
          background url("./club_member_normal@2x.png") center no-repeat
          background-size contain
        .icon-input-detail
          width 2.5rem
          height 2.5rem
          background url("./club_income_normal@2x.png") center no-repeat
          background-size contain
        p
          margin-top 5rem
          color #6f6f6f

      &.shareActive
        border-bottom 3px solid #633ac9
        .icon-club-share
          width 2.5rem
          height 2.5rem
          background url("./club_share_selected@2x.png") center no-repeat
          background-size contain
        p
          color #2f2f2f
      &.memberActive
        border-bottom 3px solid #633ac9
        .icon-vip-mine
          width 2.5rem
          height 2.5rem
          background url("./club_menber_selected@2x.png") center no-repeat
          background-size contain
        p
          color #2f2f2f
      &.incomeActive
        border-bottom 3px solid #633ac9
        .icon-input-detail
          width 2.5rem
          height 2.5rem
          background url("./club_income_selected@2x.png") center no-repeat
          background-size contain
        p
          color #2f2f2f
  .share-line
    .share-item
      width 20%
      margin 1.5rem
      float left
      img
        width 100%
        vertical-align middle
      p
        text-align center

</style>
