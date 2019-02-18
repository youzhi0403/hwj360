<template>
    <div class="shopcart">
      <goods-list></goods-list>
      <!--<goods-filter></goods-filter>-->
      <!--<suspend></suspend>-->
    </div>
</template>

<script>
import GoodsList from '../goodsList/goodsList'
import GoodsFilter from '../goodsFilter/goodsFilter'
import Suspend from '../suspend/suspend'
export default {
  name: 'shopcart',
  components: { Suspend, GoodsFilter, GoodsList }
}
</script>

<style lang="stylus">

</style>
