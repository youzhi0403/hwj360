import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import VueRouter from 'vue-router'

import home from './components/home/home'
import classify from './components/classify/classify'
import myself from './components/myself/myself'
import shopcart from './components/shopcart/shopcart'

Vue.config.productionTip = false
Vue.use(VueRouter)
const routes = [
  { path: '/', redirect: 'home' },
  { path: '/home', component: home },
  { path: '/classify', component: classify },
  { path: '/myself', component: myself },
  { path: '/shopcart', component: shopcart }
]
const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
