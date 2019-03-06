export default {
  totalPrice: state => {
    let result = 0
    state.cartList.map(function (item) {
      if (item.active) {
        result += item.price
      }
    })
    return result
  }
}
