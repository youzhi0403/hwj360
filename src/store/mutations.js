import {
  ADD_CART,
  REMOVE_CART,
  INCREMENT_QUANTITY,
  DESCREASE_QUANTITY,
  SET_GOODS

} from './mutation-types'

export default {
  // 加入购物车
  [ADD_CART] (state, product) {
    product.quantity = 1
    state.cartItems.push(product)
  },
  // 商品数量加1
  [INCREMENT_QUANTITY] (state, name) {
    const cartItem = state.cartItems.find(item => item.name === name)
    cartItem.quantity++
  },
  // 将商品移除购物车
  [REMOVE_CART] (state, product) {
    for (let i = 0; i < state.cartItems.length; i++) {
      if (state.cartItems[i].name === product.name) {
        state.cartItems.splice(i, 1)
        break
      }
    }
  },
  // 商品数量减1
  [DESCREASE_QUANTITY] (state, name) {
    const cartItem = state.cartItems.find(item => item.name === name)
    cartItem.quantity--
  },
  // 将购物车列表存入vuex
  [SET_GOODS] (state, goods) {
    state.goods = goods
  }
}
