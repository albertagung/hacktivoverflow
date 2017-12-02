import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

let initialState = {
  posts: []
}

export default new Vuex.Store({
  state: {
    ...initialState
  },
  mutations,
  actions
})