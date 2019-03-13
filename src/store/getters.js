export default {
  // 商品总价格
  totalPrice: state => {
    let result = 0
    state.cartList.map(function (item) {
      if (item.active) {
        result += item.price * item.quantity
      }
    })
    return result
  },
  // 选中商品的种数
  totalNumber: state => {
    let result = 0
    state.cartList.map(function (item) {
      if (item.active) {
        result++
      }
    })
    return result
  },
  // 选中商品的数量
  totalGoodsNumber: state => {
    let result = 0
    for (let i = 0; i < state.cartList.length; i++) {
      if (state.cartList[i].active) {
        result += state.cartList[i].quantity
      }
    }
    return result
  },
  // 购物车商品是否全选
  getterOfAllSelect: state => {
    let result = true
    state.cartList.map(function (item) {
      if (!item.active) {
        result = false
      }
    })
    return result
  },
  // 购物车商品总数量
  shopcartNumber: state => {
    return state.cartList.length
  },
  // 购物车商品是否有一个激活
  oneActive: state => {
    for (let i = 0; i < state.cartList.length; i++) {
      if (state.cartList[i].active) {
        return true
      }
    }
    return false
  },
  // 默认地址
  defaultAddress: state => {
    for (let i = 0; i < state.address.length; i++) {
      if (state.address[i].isDefault) {
        return state.address[i]
      }
    }
    return null
  },
  // 选中的商品
  activeGoods: state => {
    let result = []
    for (let i = 0; i < state.cartList.length; i++) {
      if (state.cartList[i].active) {
        result.push(state.cartList[i])
      }
    }
    return result
  }
}
