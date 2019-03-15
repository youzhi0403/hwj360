import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  goods: [], // 商品列表
  cartList: [], // 加入购物车的商品列表
  testArr: [], // 测试
  // 地址
  address: [
    {
      id: 1,
      name: '张三',
      telephone: 13256485169,
      region: '广东省 揭阳市 普宁市',
      definiteRegion: '流沙广达北路体育西',
      isDefault: true
    }
  ],
  // 用户信息
  username: '张三',
  member: [],
  shareLink: 'http://m.360hwj.com/share/78072/67345_aV7IQXgovl1XFPX3',
  assets: 0.00,
  avatar: 'http://static.360hwj.com/group1/M00/07/A1/J2zAA1mZH6-AQ-G_AAAEadr9AHg271.png',
  integrals: 65, // 积分
  signDays: 2, // 连续签到的天数
  isSign: false, // 今日是否签到
  nickname: 'youzhi', // 昵称
  birthday: '', // 生日
  sex: '男'
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
