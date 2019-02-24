import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import VueRouter from 'vue-router'

import home from './components/home/home'
import classify from './components/classify/classify'
import myself from './components/myself/myself'
import shopcart from './components/shopcart/shopcart'
import good from './components/good/good'
import goodsList from './components/goodsList/goodsList'
import selfHelp from './components/selfHelp/selfHelp'
import menuSelect from './components/menu-select/menu-select'
import goodsListMenu from './components/goodsList-menu/goodsList-menu'
import share from './components/share/share'
import assets from './components/assets/assets'
import signin from './components/signIn/signIn'
import integralShop from './components/integralShop/integralShop'
import integralGood from './components/integralGood/integralGood'
import address from './components/address/address'
import addressAdd from './components/addressAdd/addressAdd'
import addressPicker from './components/addressPicker/addressPicker'

Vue.config.productionTip = false
Vue.use(VueRouter)
const routes = [
  { path: '/', redirect: 'home' },
  { name: 'home', path: '/home', component: home },
  { name: 'classify', path: '/classify', component: classify },
  { name: 'myself', path: '/myself', component: myself },
  { name: 'shopcart', path: '/shopcart', component: shopcart },
  { name: 'good', path: '/good', component: good },
  { name: 'goodsList', path: '/goodsList', component: goodsList },
  { name: 'selfHelp', path: '/selfHelp', component: selfHelp },
  { name: 'menuSelect', path: '/menuSelect', component: menuSelect },
  { name: 'goodsListMenu', path: '/goodsListMenu', component: goodsListMenu },
  { name: 'share', path: '/share', component: share },
  { name: 'assets', path: '/assets', component: assets },
  { name: 'signin', path: '/signin', component: signin },
  { name: 'integralShop', path: '/integralShop', component: integralShop },
  { name: 'integralGood', path: '/integralGood', component: integralGood },
  { name: 'address', path: '/address', component: address },
  { name: 'addressAdd', path: '/addressAdd', component: addressAdd },
  { name: 'addressPicker', path: '/addressPicker', component: addressPicker }
]
const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
