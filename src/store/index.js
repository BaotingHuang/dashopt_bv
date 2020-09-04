import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: false,
    token: false
  },
  mutations: {
    check() {
      this.state.username = localStorage.getItem('dashopt_bv_user'),
        this.state.token = localStorage.getItem('dashopt_bv_token')
    }
  },
  actions: {
  },
  modules: {
  }
})
