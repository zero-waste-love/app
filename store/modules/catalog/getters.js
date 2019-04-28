export default {
  activeProducts (state, getters, rootState, rootGetters) {
    const { route } = rootState
    const { collection } = state
    const activeCollection = collection[route.params.collection]
    return activeCollection || []
  },

  bookmarks (state) {
    const { bookmark } = state
    return Object.values(bookmark)
  }
}
