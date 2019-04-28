<template lang='pug'>
div(
  class='container-bookmark'
)
  div(class='bookmark')
    h2(class='bookmark__headline') Your favorites
    Collective(
      :pinData='bookmarks'
      class='bookmark__collective'
    )
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
import Collective from '~/components/Collective.vue'

export default {
  components: {
    Collective
  },
  props: {},
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      bookmarks: 'catalog/bookmarks'
    })
  },
  methods: {
    async getBookmarks () {
      if (localStorage.getItem('pinBookmark')) {
        const bookmarkItem = JSON.parse(localStorage.getItem('pinBookmark'))
        const pinIds = Object.keys(bookmarkItem)
        await this.fetchBookmarks(pinIds)
      }
    },


    ...mapActions({
      fetchBookmarks: 'catalog/fetchBookmarks'
    })
  },
  mounted () {
    this.getBookmarks()
  }
}
</script>


<style lang='sass' scoped>
.container-bookmark
  @extend %container-main
  // padding-top: unset
  // padding-bottom: unset
  background: $grey
  margin-top: $unit*5

.bookmark


  &__headline
    @extend %container-content
    font-weight: $fw-bold
    font-size: $fs1
    margin-bottom: $unit*4

  &__collective
    padding: unset !important

  &__item
    padding: $unit*2 $unit*1.5
    display: grid
    grid-auto-rows: 1fr 1fr
    grid-auto-flow: dense
    grid-gap: $unit*3

  &__card

</style>
