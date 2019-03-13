import { getGoodsList } from '../api'
import {
  ADD_CART, REMOVE_CART, INCREMENT_QUANTITY, DESCREASE_QUANTITY, SET_GOODS
} from './mutation-types'

export default {
  addCart ({ state, commit }, { good, quantity }) {
    const cartItem = state.cartList.find(item => item.id === good.id)
    if (!cartItem) {
      commit(ADD_CART, { good, quantity })
    } else {
      commit(INCREMENT_QUANTITY, {
        id: good.id,
        quantity
      })
    }
  },
  descreaseCart ({ state, commit }, product) {
    const cartItem = state.items.find(item => item.name === product.name)
    if (cartItem.quantity > 1) {
      commit(DESCREASE_QUANTITY, product.name)
    } else {
      commit(REMOVE_CART, product)
    }
  },
  setGoods ({
    commit,
    state
  }) {
    getGoodsList().then(res => {
      commit(SET_GOODS, res.data)
    })
  }
}
