import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  goods: [], // 商品列表
  cartList: [] // 加入购物车的商品列表
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
