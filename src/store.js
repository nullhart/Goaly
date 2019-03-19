import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Days: [2]

  },
  mutations: {
    remove: function (context,day) {
      delete this.state.Days.splice(this.state.Days.indexOf(day), 1)
      console.log(`delete index ${day.Days}`)
    }

  },
  actions: {
    remove: function ({
      commit
    }, day) {
      commit('remove', day)
      console.log(`remove day ${day}`)

    }

  }
})