<template>
    <div class="shopcart">
      <search-page></search-page>
    </div>
</template>

<script>
import SearchCom from '../searchCom/searchCom'
import SearchPage from '../searchPage/searchPage'
export default {
  name: 'shopcart',
  components: { SearchPage, SearchCom }
}
</script>

<style lang="stylus">

</style>
