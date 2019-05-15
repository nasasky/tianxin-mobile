import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

Vue.use(Vuex)

export const strict = false

export default new Vuex.Store({
  modules
})