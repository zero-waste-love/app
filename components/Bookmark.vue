<template lang='pug'>
div(
  v-show='pinData.length > 0'
  class='container-bookmark'
)
  div(class='bookmark')
    h2(class='bookmark__headline') Your favorites
    Collective(
      :pinData='pinData'
      class='bookmark__collective'
    )
</template>


<script>
import Collective from '~/components/Collective.vue'

export default {
  components: {
    Collective
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
