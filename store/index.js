import Vue from 'vue'
import Vuex from 'vuex'


// modules
import error from './modules/error'
import app from './modules/app'
import auth from './modules/auth'
import catalog from './modules/catalog'

// import vuex
Vue.use(Vuex)


const createStore = () => {
  return new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',

    modules: {
      error,
      app,
      auth,
      catalog
    },

    actions: {
      async nuxtServerInit({ dispatch }, context) {
        try {
          return
        }
        catch (e) {
          console.error(e)
          throw e
        }
      },

      async nuxtClientInit({ state, dispatch }, context) {
        try {
          await dispatch('app/getData')
          // await dispatch('catalog/fetchCollection')
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
