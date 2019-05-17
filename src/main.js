import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './style/reset.css'

Vue.config.productionTip = false

import ajax from './ajax/index'
Vue.use(ajax)

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
