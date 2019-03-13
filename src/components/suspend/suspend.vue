<template>
  <div class="suspend">

    <div class="open-button" @click.stop.prevent="change">
      <span class="burger burger-1" :class="{'burger-1-active':extend}">

      </span>
      <span class="burger burger-2" :class="{'burger-2-active':extend}">

      </span>
      <span class="burger burger-3" :class="{'burger-3-active':extend}">

      </span>
    </div>

    <div class="gooey-menu-item gooey-menu-item-first" :class="{'active-first':extend}" @click.stop.prevent="locateToHome">
      <img src="./home.png" class="gooey-menu-item-icon">
    </div>
    <div class="gooey-menu-item gooey-menu-item-second" :class="{'active-second':extend}" @click.stop.prevent="locateToSearch">
      <img src="./search.png" class="gooey-menu-item-icon">
    </div>
    <div class="gooey-menu-item gooey-menu-item-third" :class="{'active-third':extend}" @click.stop.prevent="locateToService">
      <img src="./service.png" class="gooey-menu-item-icon">
    </div>

  </div>
</template>

<script>
export default {
  name: 'suspend',
  data () {
    return {
      extend: false
    }
  },
  methods: {
    change () {
      this.extend = !this.extend
    },
    locateToHome () {
      this.$router.push({ name: 'home' })
    },
    locateToSearch () {
      this.$router.push({ name: 'search' })
    },
    locateToService () {
      this.$router.push({ name: 'service' })
    }
  }
}
</script>

<style lang="stylus">
.suspend
  position fixed
  min-width 100px
  min-height 100px
  z-index 20
  bottom 20%
  .open-button
    position absolute
    right -16rem
    bottom -3rem
    width 50px
    height 50px
    background-color rgb(237,69,41)
    line-height 50px
    border-radius 50%
    z-index 999
    .burger-1
      position absolute
      left 12.5px
      top 25px
      width 25px
      height 3px
      font-size 0.8rem
      background #fff
      display block
      transform translate3d(0,-8px,0)
      transition transform 200ms
      &.burger-1-active
        transform translate3d(0,0,0) rotate(45deg)
    .burger-2
      position absolute
      top 25px
      left 12.5px
      width 25px
      height 3px
      font-size 0.8rem
      background #fff
      display block
      transform translate3d(0,0,0)
      transition transform 200ms
      &.burger-2-active
        transform translate3d(0,0,0) scale(0.1,1)
    .burger-3
      position absolute
      top 25px
      left 12.5px
      width 25px
      height 3px
      font-size 0.8rem
      background #fff
      display block
      transform translate3d(0,8px,0)
      transition transform 200ms
      &.burger-3-active
        transform translate3d(0,0,0) rotate(-45deg)
  .gooey-menu-item
    position absolute
    right -16rem
    bottom -3rem
    width 50px
    height 50px
    border-radius 50%
    color white
    background-color rgb(237,69,41)
    line-height 50px
    text-align center
    img
      width 50%
      vertical-align middle
  .gooey-menu-item-first
    z-index 998
    transform translate3d(0px,0px,0px)
    transition transform cubic-bezier(0.8,0.84,0.44,1.3) 100ms
    &.active-first
      transform translate3d(-4rem,-3.6rem,0px)
  .gooey-menu-item-second
    z-index 998
    transform translate3d(0px,0px,0px)
    transition transform cubic-bezier(0.8,0.84,0.44,1.3) 200ms
    &.active-second
      transform translate3d(0,-6rem,0px)
  .gooey-menu-item-third
    z-index 998
    transform translate3d(0px,0px,0px)
    transition transform cubic-bezier(0.8,0.84,0.44,1.3) 300ms
    &.active-third
      transform translate3d(-6rem,0.5rem,0px)

</style>
