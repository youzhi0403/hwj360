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
  { name: 'selfHelp', path: '/selfHelp', component: selfHelp }
]
const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
