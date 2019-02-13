<template>
    <div class="shopcart">
      <!--<goods-list></goods-list>-->
      <goods-filter></goods-filter>
    </div>
</template>

<script>
import GoodsList from '../goodsList/goodsList'
import GoodsFilter from '../goodsFilter/goodsFilter'
export default {
  name: 'shopcart',
  components: { GoodsFilter, GoodsList }
}
</script>

<style scoped>

</style>
