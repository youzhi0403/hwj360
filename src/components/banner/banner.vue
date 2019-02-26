<template>
    <div class="banner">
      <img :src="img">
    </div>
</template>

<script>
export default {
  name: 'banner',
  props: {
    img: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus">
.banner
  margin-top 0.5rem
  background-color #fff
  img
    width 100%
    vertical-align middle
</style>
