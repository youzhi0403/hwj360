import {
  ADD_CART,
  REMOVE_CART,
  INCREMENT_QUANTITY,
  DESCREASE_QUANTITY,
  SET_GOODS,
  ACTIVE_GOOD,
  CANCLE_GOOD,
  ACTIVE_ALL,
  CANCLE_ALL,
  ADD_ADDRESS,
  REMOVE_ADDRESS,
  EDIT_ADDRESS,
  EDIT_ADDRESS_DEFAULT,
  INCREMENT_SIGNDAYS,
  INCREMENT_INTEGRALS,
  CHANGE_ISSIGN
} from './mutation-types'
import Vue from 'vue'
import { uuid } from '../utils/utils'

export default {
  // 加入购物车
  [ADD_CART] (state, { good, quantity }) {
    Vue.set(good, 'active', false)
    Vue.set(good, 'quantity', quantity)
    state.cartList.push(good)
  },
  // 商品数量加quantity
  [INCREMENT_QUANTITY] (state, { id, quantity }) {
    const cartItem = state.cartList.find(item => item.id === id)
    cartItem.quantity += quantity
  },
  // 将商品移除购物车
  [REMOVE_CART] (state) {
    for (let i = state.cartList.length - 1; i > -1; i--) {
      if (state.cartList[i].active) {
        state.cartList.splice(i, 1)
      }
    }
  },
  // 商品数量减1
  [DESCREASE_QUANTITY] (state, id) {
    const cartItem = state.cartList.find(item => item.id === id)
    console.log(cartItem)
    cartItem.quantity--
  },
  // 将购物车列表存入vuex
  [SET_GOODS] (state, goods) {
    state.goods = goods
  },
  // 选中指定商品
  [ACTIVE_GOOD] (state, good) {
    const cartItem = state.cartList.find(item => item.id === good.id)
    cartItem.active = true
  },
  // 取消选中的商品
  [CANCLE_GOOD] (state, good) {
    const cartItem = state.cartList.find(item => item.id === good.id)
    cartItem.active = false
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
  // 添加地址
  [ADD_ADDRESS] (state, addressObj) {
    addressObj.id = uuid()
    if (addressObj.isDefault) {
      // 先取消默认地址
      for (let i = 0; i < state.address.length; i++) {
        if (state.address[i].isDefault) {
          state.address[i].isDefault = false
        }
      }
      state.address.push(addressObj)
    } else {
      state.address.push(addressObj)
    }
  },
  // 删除地址
  [REMOVE_ADDRESS] (state, addressObj) {
    for (let i = state.address.length - 1; i > -1; i--) {
      if (state.address[i].id === addressObj.id) {
        state.address.splice(i, 1)
        break
      }
    }
  },
  // 编辑地址
  [EDIT_ADDRESS] (state, addressObj) {
    if (addressObj.isDefault) {
      for (let i = state.address.length - 1; i > -1; i--) {
        if (state.address[i].id === addressObj.id) {
          state.address[i] = addressObj
        } else {
          state.address[i].isDefault = false
        }
      }
    } else {
      for (let i = state.address.length - 1; i > -1; i--) {
        if (state.address[i].id === addressObj.id) {
          state.address[i] = addressObj
        }
      }
    }
  },
  // 修改默认地址
  [EDIT_ADDRESS_DEFAULT] (state, addressObj) {
    for (let i = state.address.length - 1; i > -1; i--) {
      state.address[i].isDefault = false
    }
    for (let i = state.address.length - 1; i > -1; i--) {
      if (state.address[i].id === addressObj.id) {
        state.address[i].isDefault = true
        break
      }
    }
  },
  // 连续签到天数+1
  [INCREMENT_SIGNDAYS] (state) {
    state.signDays++
  },
  // 增加积分
  [INCREMENT_INTEGRALS] (state, integrals) {
    state.integrals += integrals
  },
  [CHANGE_ISSIGN] (state) {
    state.isSign = true
  },
  // 测试
  myTest1 (state, good) {
    good.active = false
    state.testArr.push(good)
  },
  // 测试2
  myTest2 (state, good) {
    const cartItem = state.testArr.find(item => item.id === good.id)
    cartItem.active = true
  },
  // 测试3
  myTest3 (state, good) {
    const cartItem = state.testArr.find(item => item.id === good.id)
    cartItem.active = false
  }
}
