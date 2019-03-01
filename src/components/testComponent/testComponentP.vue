<template>
  <div class="testComponentP">
    <test-component :param3="p"></test-component>
  </div>
</template>

<script>
import TestComponent from './testComponent'
export default {
  name: 'testComponentP',
  components: { TestComponent },
  data () {
    return {
      p: 0
    }
  },
  created () {
    console.log('parent created...')
    /* var current = this
    setTimeout(function () {
      current.p = 888
    }, 1000) */
  },
  mounted () {
    console.log('parent mounted...')
    this.p = 123
  }
}
</script>

<style lang="stylus">

</style>
