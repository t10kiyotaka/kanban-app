import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)
// Define the state of Auth and Board to administrate them in the `State` of Vuex.
const state = {
  auth: { // State of Auth 
    token: null,  // Initialize with null
    userId: null  // Initialize with null
  },
  board: { // State of Board
    lists: [] // Initialize State of `TaskList` with empty
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
})
