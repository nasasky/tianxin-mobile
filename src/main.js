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


import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css';
import {Picker} from 'mint-ui';
Vue.component(Picker.name, Picker);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
