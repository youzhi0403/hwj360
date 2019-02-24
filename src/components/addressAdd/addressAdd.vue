<template>
  <div class="addressAdd">
    <div class="contact-info">
      <div class="contact-info-elm">
        <div class="contact-info-elm-left">
          联系人
        </div>
        <div class="contact-info-elm-right">
          <input placeholder="请输入联系人姓名" />
        </div>
      </div>

      <div class="contact-info-elm">
        <div class="contact-info-elm-left">
          手机号
        </div>
        <div class="contact-info-elm-right">
          <input placeholder="请输入手机号码" />
        </div>
      </div>

      <div class="contact-info-elm">
        <div class="contact-info-elm-left">
          地区
        </div>
        <div class="contact-info-elm-right">
          <input placeholder="请选择地区" readonly @click="showAddressPicker"/>
        </div>
      </div>

      <div class="contact-info-elm-textarea">
        <div class="contact-info-elm-textarea-title">
          详细地址
        </div>
        <div class="contact-info-elm-textarea-content">
          <textarea name="address" placeholder="请输入详细地址，为确保您的物品不会丢失">
          </textarea>
        </div>
      </div>

    </div>
    <div class="center-set-normal">
      <i class="icon-check-gray vertical_center"></i>
      <div class="center-set-normal-text">
        设为默认收货地址
      </div>
    </div>
    <button class="fixed-btn">
      保存
    </button>

  </div>
</template>

<script>
import { provinceList, cityList, areaList } from './area'
const addressData = provinceList
addressData.forEach(province => {
  province.children = cityList[province.value]
  province.children.forEach(city => {
    city.children = areaList[city.value]
  })
})
export default {
  name: 'addressAdd',
  mounted () {
    this.addressPicker = this.$createCascadePicker({
      title: 'City Picker',
      data: addressData,
      onSelect: this.selectHandle,
      onCancel: this.cancelHandle
    })
  },
  methods: {
    showAddressPicker () {
      this.addressPicker.show()
    }
  }
}
</script>

<style lang="stylus">
.addressAdd
  .contact-info
    width 100%
    margin-bottom 1rem
    background-color #fff
    .contact-info-elm
      width 100%
      height 4rem
      line-height 4rem
      font-size 1.1rem
      border-bottom 1px solid #e5e5e5
      .contact-info-elm-left
        width 25%
        height 4rem
        float left
        text-align left
        padding-left 1.5rem
      .contact-info-elm-right
        width 65%
        height 4rem
        float left
        text-indent 1rem
        input
          border none
          outline none
          width 90%
          font-size 1.1rem
    .contact-info-elm-textarea
      padding-bottom 1.5rem
      .contact-info-elm-textarea-title
        width 100%
        height 4rem
        line-height 4rem
        font-size 1.1rem
        text-align left
        padding-left 1.5rem
      .contact-info-elm-textarea-content
        textarea
          border none
          outline none
          font-size 1.1rem
          width 90%
          margin 0 1.5rem
          resize none
          font-family "PingFang"
  .center-set-normal
    position relative
    width 50%
    margin 0 auto
    text-align center
    .icon-check-gray
      left 1rem
      width 1rem
      height 1rem
      background url("./check_gray@2x.png")
      background-size contain

  .fixed-btn
    position fixed
    max-width 640px
    width 100%
    height 3.5rem
    line-height 3.5rem
    border none
    outline none
    bottom 0
    background-color #ed4529
    color #fff
    text-align center
    font-size 1.3rem
</style>
