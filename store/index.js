import Vue from 'vue'
import Vuex from 'vuex'


// modules
import error from './modules/error'
import app from './modules/app'
import auth from './modules/auth'

// import vuex
Vue.use(Vuex)


const createStore = () => {
  return new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',

    modules: {
      error,
      app,
      auth
    },

    actions: {
      async nuxtClientInit({ state, dispatch }, context) {
        try {
          dispatch('app/getData')
          return
        }
        catch (e) {
          console.error(e)
          throw e
        }
      }
    }
  })
}

export default createStore
