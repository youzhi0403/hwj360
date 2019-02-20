<template>
    <div class="shopcart">
      <menu-select></menu-select>
    </div>
</template>

<script>
import SelfHelp from '../selfHelp/selfHelp'
import GoodsListMenu from '../goodsList-menu/goodsList-menu'
import MenuSelect from '../menu-select/menu-select'
export default {
  name: 'shopcart',
  components: { MenuSelect, GoodsListMenu, SelfHelp }
}
</script>

<style lang="stylus">

</style>
