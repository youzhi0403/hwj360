import {
  ADD_CART,
  REMOVE_CART,
  INCREMENT_QUANTITY,
  DESCREASE_QUANTITY,
  SET_GOODS,
  ACTIVE_GOOD,
  CANCLE_GOOD,
  ACTIVE_ALL,
  CANCLE_ALL

} from './mutation-types'
import Vue from 'vue'

export default {
  // 加入购物车
  [ADD_CART] (state, { good, quantity }) {
    Vue.set(good, 'active', false)
    Vue.set(good, 'quantity', quantity)
    state.cartList.push(good)
  },
  // 商品数量加quantity
  [INCREMENT_QUANTITY] (state, { name, quantity }) {
    const cartItem = state.cartList.find(item => item.name === name)
    cartItem.quantity += quantity
  },
  // 将商品移除购物车
  [REMOVE_CART] (state, good) {
    for (let i = 0; i < state.cartItems.length; i++) {
      if (state.cartItems[i].name === good.name) {
        state.cartList.splice(i, 1)
        break
      }
    }
  },
  // 商品数量减1
  [DESCREASE_QUANTITY] (state, name) {
    const cartItem = state.cartList.find(item => item.name === name)
    cartItem.quantity--
  },
  // 将购物车列表存入vuex
  [SET_GOODS] (state, goods) {
    state.goods = goods
  },
  // 选中指定商品
  [ACTIVE_GOOD] (state, good) {
    const cartItem = state.cartList.find(item => item.name === good.name)
    cartItem.active = true
    cartItem.quantity++
    cartItem.price++
    /* console.log('active_good:', state.cartList[0].active) */
  },
  // 取消选中的商品
  [CANCLE_GOOD] (state, good) {
    const cartItem = state.cartList.find(item => item.name === good.name)
    cartItem.active = false
    /* console.log('cancel_good:', state.cartList[0].active) */
  },
  // 选中所有购物车的商品
  [ACTIVE_ALL] (state) {
    state.cartList.map(function (item) {
      item.active = true
    })
  },
  // 取消选中所有购物车的商品
  [CANCLE_ALL] (state) {
    state.cartList.map(function (item) {
      console.log('mutation cancel...')
      item.active = false
    })
  },
  // 测试
  myTest1 (state, good) {
    good.active = false
    state.testArr.push(good)
  },
  // 测试2
  myTest2 (state, good) {
    const cartItem = state.testArr.find(item => item.name === good.name)
    cartItem.active = true
  },
  // 测试3
  myTest3 (state, good) {
    const cartItem = state.testArr.find(item => item.name === good.name)
    cartItem.active = false
  }
}
