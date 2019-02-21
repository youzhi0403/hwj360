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

Vue.config.productionTip = false
Vue.use(VueRouter)
const routes = [
  { path: '/', redirect: 'home' },
  { path: '/home', component: home },
  { name: 'classify', path: '/classify', component: classify },
  { path: '/myself', component: myself },
  { path: '/shopcart', component: shopcart },
  { name: 'good', path: '/good', component: good },
  { name: 'goodsList', path: '/goodsList', component: goodsList },
  { name: 'selfHelp', path: '/selfHelp', component: selfHelp },
  { name: 'menuSelect', path: '/menuSelect', component: menuSelect },
  { name: 'goodsListMenu', path: '/goodsListMenu', component: goodsListMenu },
  { name: 'share', path: '/share', component: share },
  { name: 'assets', path: '/assets', component: assets },
  { name: 'signin', path: '/signin', component: signin }
]
const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
