<template>
  <div class="addressPicker">
    <cube-button @click="showAddressPicker">请选择</cube-button>
  </div>
</template>

<script>
import { provinceList, cityList, areaList } from './area'
const addressData = provinceList
addressData.forEach(province => {
  province.children = cityList[province.value]
  province.children.forEach(city => {
    city.children = areaList[city.value]
  })
})

export default {
  name: 'addressPicker',
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
    this.addressPicker = this.$createCascadePicker({
      title: 'City Picker',
      data: addressData,
      onSelect: this.selectHandle,
      onCancel: this.cancelHandle
    })
  },
  methods: {
    showAddressPicker () {
      this.addressPicker.show()
    },
    selectHandle (selectedVal, selectedIndex, selectedText) {
    },
    cancelHandle () {
    }
  }
}
</script>

<style lang="stylus">

</style>
