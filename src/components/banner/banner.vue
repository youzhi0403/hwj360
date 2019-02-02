<template>
    <div class="banner">
      <img :src="img">
    </div>
</template>

<script>
export default {
  name: 'banner',
  data () {
    return {
      img: 'http://static.360hwj.com/group1/M00/05/C1/J2zAA1qrhUqAQThSAAIGfTUeTp4019.jpg'
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  margin-top 0.5rem
  background-color #fff
  img
    width 100%
    vertical-align middle
</style>
