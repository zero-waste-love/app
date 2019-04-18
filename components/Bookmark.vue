<template lang='pug'>
div(
  v-show='pinData.length > 0'
  class='container-bookmark'
)
  div(class='bookmark')
    h2(class='bookmark__headline') Your favorites

    carousel(
      v-if='isBrowser'
      class='bookmark__list'
      :paginationEnabled='false'
      :perPageCustom='[[0, 2], [520, 3], [1624, 4]]'
      :scrollPerPage='false'
      :speed='500'
    )
      slide(
        v-for='(card, i) in pinData'
        :key='card.headline + i'
        class='bookmark__item'
      )
        Pin(
          :cardData='card'
          @bookmark='getBookmarks'
          class='bookmark__pin'
        )
</template>


<script>
import Pin from '~/components/Pin.vue'


export default {
  components: {
    Pin
  },
  props: {},
  data () {
    return {
      isBrowser: false,
      pinData: []
    }
  },
  computed: {},
  methods: {
    async getBookmarks () {
      if (localStorage.getItem('pinBookmark')) {
        const bookmarkItem = JSON.parse(localStorage.getItem('pinBookmark'))
        console.log(bookmarkItem)
        const pinIds = Object.keys(bookmarkItem)
        const pin = await Promise.all(
          pinIds.map(async id => {
            const data = await import(`~/data/pin/${id}.json`)
            return { ...data, id }
          })
        )
        this.pinData = pin
      }
    }
  },
  mounted () {
    this.isBrowser = true
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
  @extend %container-content

  &__headline
    font-weight: $fw-bold
    font-size: $fs1
    margin-bottom: $unit*4

  &__list


  &__item
    padding: $unit*2 $unit*1.5
    display: grid
    grid-auto-rows: 1fr 1fr
    grid-auto-flow: dense
    grid-gap: $unit*3

  &__card

</style>
