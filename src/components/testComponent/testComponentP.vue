<template>
  <div class="testComponentP">
    <ul>
      <li
        v-for="(item,index) in testArr"
        :key="index"
        @click="test(item)"
        :class="{'active':item.active ? true : false}">
        <p>p1:{{item.active}}</p>
      </li>
    </ul>
    <button @click="add">添加商品</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'testComponentP',
  created () {
  },
  data () {
    return {
    }
  },
  methods: {
    test (item) {
      if (item.active) {
        this.myTest3(item)
      } else {
        this.myTest2(item)
      }
    },
    add () {
      this.myTest1({ name: '123', active: false })
    },
    ...mapMutations([
      'myTest1',
      'myTest2',
      'myTest3'
    ])
  },
  computed: {
    ...mapState([
      'testArr'
    ])
  }
}
</script>

<style lang="stylus">

</style>
