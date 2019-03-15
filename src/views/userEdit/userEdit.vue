<template>
  <div class="userEdit">
    <div class="myData-headImg">
      <input type="file" class="myData-file-upload" style="z-index: 999;">
      <div class="myData-item-text vertical-center">头像</div>
      <div class="myData-item-img">
        <img src="http://static.360hwj.com/group1/M00/07/A1/J2zAA1mZH6-AQ-G_AAAEadr9AHg271.png" class="icon-user-img vertical-center">
      </div>
      <i class="myData-icon-right vertical-center"></i>
    </div>

    <div class="myData-item">
      <p class="myData-item-text vertical-center">昵称</p>
      <input class="myData-item-elm vertical-center" placeholder="未填写">
      <i class="myData-icon-right vertical-center"></i>
    </div>

    <div class="myData-item">
      <p class="myData-item-text vertical-center">姓名</p>
      <input class="myData-item-elm" placeholder="保密">
      <i class="myData-icon-right vertical-center"></i>
    </div>

    <div class="myData-item">
      <p class="myData-item-text vertical-center">生日</p>
      <input class="myData-item-elm" readonly="true" placeholder="未填写">
      <i class="myData-icon-right vertical-center"></i>
    </div>

    <div class="myData-item">
      <p class="myData-item-text vertical-center">性别</p>
      <input class="myData-item-elm" readonly="true" placeholder="未填写">
      <i class="myData-icon-right vertical-center"></i>
    </div>

    <div class="myData-item">
      <p class="myData-item-text vertical-center">修改登陆密码</p>
    </div>

    <div class="myData-item">
      <p class="myData-item-text vertical-center">修改支付密码</p>
    </div>

    <button class="fixed-btn">保存</button>

  </div>
</template>

<script>
export default {
  name: 'userEdit'
}
</script>

<style lang="stylus">
  .userEdit
    width 100%
    max-width 640px
    .myData-headImg
      position relative
      width 100%
      height 6rem
      background-color #fff
      margin-bottom 0.6rem
      .myData-file-upload
        position absolute
        top 0
        left 0
        width 100%
        height 100%
        opacity 0
        z-index 999
      .myData-item-text
        left 1.5rem
        font-size 1.2rem
      .myData-item-img
        height 6rem
        .icon-user-img
          right 13%
          width 4rem
          height 4rem
          border-radius 50%
          float right
      .myData-icon-right
        position absolute
        width 0.6rem
        height 2rem
        right 1.5rem
        background url('./arrow-right@2x.png') no-repeat center
        background-size contain
    .myData-item
      width 100%
      height 4rem
      background-color #fff
      position relative
      &:not(:last-child)
        border-bottom 1px solid #E8E8E8
      .myData-item-text
        left 1.5rem
        font-size 1.2rem
      .myData-item-elm
        position absolute
        right 15%
        width 50%
        height 100%
        font-size 1.3rem
        outline none
        border none
        color #9a9a9a
        text-align right
      .myData-icon-right
        position absolute
        width 0.6rem
        height 2rem
        right 1.5rem
        background url('./arrow-right@2x.png') no-repeat center
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
