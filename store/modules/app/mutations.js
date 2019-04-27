export default {
  RECORD_SCROLL_POSITION ({ scroll }) {
    scroll.y = window.scrollY
  },
  TOGGLE_MENU ({ menu }) {
    menu.isOpen = !menu.isOpen
  },
  SET_DATA (store, { data }) {
    store.data = data
    console.log('data: ', store.data)
  }
}
