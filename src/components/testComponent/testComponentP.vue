<template>
  <div class="testComponentP">
    <ul>
      <li
        v-for="(item,index) in goods"
        :key="index">
        {{item.name}}
      </li>
    </ul>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'testComponentP',
  methods: {
    ...mapActions([
      'setGoods'
    ])
  },
  created () {
    this.setGoods()
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState([
      'goods'
    ])
  }
}
</script>

<style lang="stylus">

</style>
