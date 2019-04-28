import Vue from 'vue'

export default {
  SET_COLLECTION (state, { handle, products }) {
    state.collection[handle] = products
    console.log('SET_COLLECTION - Updated State: ', state.collection)
  },

  SET_BOOKMARK (state, { id, product }) {
    Vue.set(state.bookmark, id, product)
    console.log('SET_BOOKMARK - Updated State: ', state.bookmark)
  }
}
