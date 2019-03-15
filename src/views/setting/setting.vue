<template>
  <div class="setting">
    <div class="setting-item">
      <div class="icon"><img src="./set_help@2x.png" class="icon-img vertical-center"></div>
      <div class="setting-name">帮助中心</div>
      <i class="icon-right vertical-center"></i>
    </div>

    <div class="setting-item">
      <div class="icon"><img src="./set_suggest@2x.png" class="icon-img vertical-center"></div>
      <div class="setting-name">意见反馈</div>
      <i class="icon-right vertical-center"></i>
    </div>

    <div class="setting-item">
      <div class="icon"><img src="./set_proto@3x.png" class="icon-img vertical-center"></div>
      <div class="setting-name">用户协议</div>
      <i class="icon-right vertical-center"></i>
    </div>

    <div class="setting-item">
      <div class="icon"><img src="./set_us@2x.png" class="icon-img vertical-center"></div>
      <div class="setting-name">关于我们</div>
      <i class="icon-right vertical-center"></i>
    </div>

    <div class="setting-item">
      <div class="icon"><img src="./set_edition@2x.png" class="icon-img vertical-center"></div>
      <div class="setting-name">版本信息</div>
      <div class="version-info vertical-center">更新至2.0版本</div>
      <i class="icon-right vertical-center"></i>
    </div>

    <button class="fixed-btn">切换账号</button>
  </div>
</template>

<script>
export default {
  name: 'setting'
}
</script>

<style lang="stylus">
.setting
  max-width 640px
  width 100%
  background-color #fff
  .setting-item
    position relative
    width 100%
    height 4rem
    border-top 1px solid #e5e5e5
    padding-left 2rem
    .icon
      position relative
      width 10%
      height 4rem
      float left
      .icon-img
        display block
        width 1.5rem
    .setting-name
      width 55%
      height 4rem
      line-height 4rem
      font-size 1.2rem
      float left
    .icon-right
      right 5%
      display block
      width 1.2rem
      height .8rem
      background url('./arrow-right@2x.png') center no-repeat
      background-size contain
    .version-info
      position absolute
      right 10%
      width 50%
      height 4rem
      line-height 4rem
      font-size 1.3rem
      outline none
      border none
      color #ed4529
      text-align right
  .fixed-btn
    position fixed
    display block
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
