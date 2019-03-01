<template>
  <div class="testComponent">
    {{param3}}
  </div>
</template>

<script>
export default {
  name: 'testComponent',
  data () {
    return {
      param1: '',
      param2: ''
    }
  },
  props: {
    param3: {
      type: Number,
      default: function () {
        return 678
      }
    }
  },
  created () {
    console.log('执行了created...', this.param3)
  },
  mounted () {
    console.log('执行了mounted...', this.param3)
  },
  watch: {
    param3: function (newVal, oldVal) {
      console.log('new:', newVal)
      console.log('old:', oldVal)
    }
  },
  methods: {
    change () {
      this.param1 = 123
      this.param2 = 456
      console.log(this.param1)
    }
  },
  updated: function () {
    console.log('执行了updated...')
  }
}
</script>

<style lang="stylus">

</style>
