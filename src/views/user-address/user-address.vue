<template>
  <div class="user-address">
    <div class="address-empty" v-show="address.length === 0">
      <div class="banner-container">
        <div class="banner">
        </div>
        <div class="banner-tips">
        </div>
      </div>
      <button class="fixed-btn-md" @click.stop.prevent="locateAddressAdd">
        添加一个新的地址
      </button>
    </div>

    <div class="address-non-empty" v-show="address.length > 0">
      <button class="fixed-btn-md" @click.stop.prevent="addAddress">添加一个新的地址</button>
      <div class="userAddress">
        <div class="user-border-top">
        </div>
        <div class="user">
          <div class="user-item" v-for="(item,index) in address" :key="index">
            <div class="user-info">
              <div class="user-info-name">{{item.name}}</div>
              <div class="user-info-tel">{{item.telephone}}</div>
            </div>
            <div class="user-info-address">
              {{item.region}}&nbsp;{{item.definiteRegion}}
            </div>
            <div class="set-normal">
              <i class="icon-check vertical_center" :class="{'active':item.isDefault}"></i>
              <div class="set-normal-text vertical_center" @click.stop.prevent="setDefault(item)" :class="{'active':item.isDefault}">设为默认</div>
            </div>
            <i class="icon-edit" @click.stop.prevent="editAddress(item)"></i>
            <i class="icon-del" @click.stop.prevent="delAddress(item)"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'user-address',
  methods: {
    locateAddressAdd () {
      this.$router.push({ name: 'addressAdd' })
    },
    editAddress (item) {
      this.$router.push({ name: 'addressEdit', params: { item: item } })
    },
    delAddress (item) {
      this.REMOVE_ADDRESS(item)
    },
    setDefault (item) {
      this.EDIT_ADDRESS_DEFAULT(item)
    },
    ...mapMutations([
      'REMOVE_ADDRESS',
      'EDIT_ADDRESS',
      'EDIT_ADDRESS_DEFAULT'
    ]),
    addAddress () {
      this.$router.push({ name: 'addressAdd' })
    }
  },
  computed: {
    ...mapState([
      'address'
    ])
  }
}
</script>

<style lang="stylus">
.user-address
  position absolute
  bottom 0
  top 0
  overflow hidden
  width 100%
  max-width 640px
  background-color #fff
  .address-empty
    padding 5rem 0
    .banner-container
      .banner
        width 10rem
        height 8rem
        background url("./sddress_empty@2x.png")
        background-size contain
        margin 2rem auto 2rem
      .banner-tips
        text-align center
        color #a5a5a5
    .fixed-btn-md
      max-width 640px
      width 85%
      height 3.5rem
      line-height 3.5rem
      margin 0.5rem 7.5% 0.5rem
      border-radius 0.2rem
      border 1px solid #f09c8e
      outline none
      bottom 0
      background-color transparent
      color #ed4529
      text-align center
      font-size 1.2rem
      margin-top 10rem
  .address-non-empty
    .fixed-btn-md
      max-width 640px
      width 85%
      height 3.5rem
      line-height 3.5rem
      margin 0.5rem 7.5% 0.5rem
      border-radius 0.2rem
      border 1px solid #f09c8e
      outline none
      bottom 0
      background-color transparent
      color #ed4529
      text-align center
      font-size 1.2rem
    .userAddress
      .user-border-top
        height 0.4rem
        background url("./letter-border.png") center no-repeat
        background-size cover
      .user
        position relative
        width 100%
        .user-item
          position relative
          width 100%
          padding-right 15%
          background-color #fff
          margin-bottom 0.8rem
          .user-info
            width 100%
            height 3rem
            line-height 3rem
            font-size 1.2rem
            padding-left 1rem
            .user-info-name
              width 25%
              display inline-block
              text-align center
            .user-info-tel
              width 65%
              display inline-block
          .user-info-address
            width 100%
            padding-left 2rem
          .set-normal
            position relative
            width 100%
            height 3rem
            .icon-check
              left 2rem
              width 1rem
              height 1rem
              background url("./check_gray@2x.png") center no-repeat
              background-size contain
              &.active
                background url("./check_red@2x.png") center no-repeat
                background-size contain
            .set-normal-text
              left 3.3rem
              font-size 0.8rem
              &.active
                color red
          .icon-edit
            position absolute
            right 8%
            top 10%
            width 1.2rem
            height 1.2rem
            background url("./edit@2x.png") center no-repeat
            background-size contain
          .icon-del
            position absolute
            right 8%
            bottom 10%
            width 1.4rem
            height 1.4rem
            background url("./delete@2x.png") center no-repeat
            background-size contain
</style>
