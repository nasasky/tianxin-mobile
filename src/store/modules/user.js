const account = {
  state: {
    user: {}
  },

  getter: {
    user: state => state.user
  },

  mutations: {
    SET_USER: (state, user) => {
      state.user = user
    }
  },

  actions: {
    setUser: ({commit}, user) => {
      commit('SET_USER', user)
    }
  }

}

export default account