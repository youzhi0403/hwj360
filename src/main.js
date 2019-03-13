import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import './register'
import store from './store'
import router from './router/index'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
