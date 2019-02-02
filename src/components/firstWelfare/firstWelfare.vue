<template>
  <div class="activity-banner">
    <img :src="img">
  </div>
</template>

<script>
export default {
  name: 'firstWelfare',
  data () {
    return {
      img: 'http://static.360hwj.com/group1/M00/09/3F/J2zAA1wkS2mACIRpAAMzTcxYXZI576.jpg'
    }
  }
}
</script>

<style lang="stylus" scoped>
.activity-banner
  margin-top 0.5rem
  background-color #fff
  img
    width 100%
    vertical-align middle

</style>
