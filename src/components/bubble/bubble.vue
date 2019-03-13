<template>
  <span class="bubble">
    {{num}}
  </span>
</template>

<script>
export default {
  name: 'bubble',
  props: {
    num: {
      type: Number
    }
  }
}
</script>

<style lang="stylus">
.bubble
  position absolute
  top 0.4rem
  right 0.6rem
  width 1.2rem
  height 1.2rem
  line-height 1.2rem
  text-align center
  background-color #D93C27
  color #fff
  border-radius 50%
</style>
