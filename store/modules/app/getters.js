export default {
  activeColor (state, getters, rootState, rootGetters) {
    const { route } = rootState
    const { data } = state
    const x = data.find(d => d.handle === route.params.topic)
    const color = x ? x.color : '255, 255, 255'
    return color
  },
}
