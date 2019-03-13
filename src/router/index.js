import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home/home'
import userAddress from '../views/user-address/user-address'
import addressAdd from '../views/addressAdd/addressAdd'
import addressEdit from '../views/addressEdit/addressEdit'
import classifyHorizontal from '../views/classify-horizontal/classify-horizontal'
import classify from '../views/classify-vertical/classify-vertical'
import goodDetail from '../views/goodDetail/goodDetail'
import goodListMenu from '../views/goodList-menu/goodList-menu'
import goodListSales from '../views/goodList-sales/goodList-sales'
import goodListNormal from '../views/goodList-normal/goodList-normal'
import myself from '../views/myself/myself'
import search from '../views/search/search'
import selfHelp from '../views/selfHelp/selfHelp'
import service from '../views/service/service'
import shopcart from '../views/shopcart/shopcart'
import pay from '../views/pay/pay'
import share from '../views/share/share'
import assets from '../views/assets/assets'
import signIn from '../views/sign-in/sign-in'
import exchange from '../views/exchange/exchange'
import goodDetailIntegrals from '../views/goodDetail-integrals/goodDetail-integrals'
import addressSelect from '../components/addressSelect/addressSelect'

const routes = [
  { path: '/', redirect: 'home' },
  { name: 'home', path: '/home', component: home, props: true },
  { name: 'userAddress', path: '/user-address', component: userAddress },
  { name: 'addressAdd', path: '/addressAdd', component: addressAdd },
  { name: 'classifyHorizontal', path: '/classifyHorizontal', component: classifyHorizontal },
  { name: 'classify', path: '/classify', component: classify },
  { name: 'goodDetail', path: '/goodDetail', component: goodDetail, props: true },
  { name: 'goodListMenu', path: '/goodListMenu', component: goodListMenu, props: true },
  { name: 'goodListSales', path: '/goodListSales', component: goodListSales, props: true },
  { name: 'goodListNormal', path: '/goodListNormal', component: goodListNormal, props: true },
  { name: 'myself', path: '/myself', component: myself },
  { name: 'search', path: '/search', component: search },
  { name: 'selfHelp', path: '/selfHelp', component: selfHelp },
  { name: 'service', path: '/service', component: service },
  { name: 'shopcart', path: '/shopcart', component: shopcart },
  { name: 'pay', path: '/pay', component: pay },
  { name: 'addressEdit', path: '/addressEdit', component: addressEdit, props: true },
  { name: 'share', path: '/share', component: share },
  { name: 'assets', path: '/assets', component: assets },
  { name: 'signIn', path: '/signIn', component: signIn },
  { name: 'exchange', path: '/exchange', component: exchange },
  { name: 'goodDetailIntegrals', path: '/goodDetailIntegrals', component: goodDetailIntegrals, props: true },
  { name: 'addressSelect', path: '/addressSelect', component: addressSelect }

]
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})
export default router
