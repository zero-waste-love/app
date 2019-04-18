<template lang='pug'>
div(class='container-menu')
  div(class='menu')

    carousel(
      v-if='isBrowser'
      class='menu__list'
      :paginationEnabled='false'
      :perPageCustom='[[0, 2], [520, 3], [1624, 4]]'
      :scrollPerPage='false'
      :speed='500'
    )
      slide(
        class='menu__item'
      )
        Pin(
          :cardData='{ headline: "Introduction video", text: "Learn more about dental hygiene", image, author: "Zero Waste Love", authorWebsite: "authorwebsite.com", buttonText: "Watch video", id: "tooth-paste--0" }'
          class='collective__pin'
        )
      slide(
        v-for='(card, i) in menuData'
        :key='card.headline + i'
        class='menu__item'
      )
        Card(
          :cardData='{ id: menuData[i].id, headline: menuData[i].headline, path: $route.params.category + "/" + menuData[i].id }'
          class='menu__card'
        )
        Card(
          :cardData='{ id: menuData[i].id, headline: menuData[i].headline, path: $route.params.category + "/" + menuData[i].id }'
          class='menu__card'
        )
</template>


<script>
import Card from '~/components/Card.vue'
import Pin from '~/components/Pin.vue'

export default {
  components: {
    Card,
    Pin
  },
  props: {
    menuData: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      isBrowser: false,
      image: ''
    }
  },
  computed: {},
  methods: {},
  mounted () {
    this.isBrowser = true
  }
}
</script>


<style lang='sass' scoped>
.container-menu
  @extend %container-main
  padding-top: unset
  padding-bottom: unset

.menu
  @extend %container-content

  &__list


  &__item
    padding: $unit*2 $unit*1.5
    display: grid
    grid-auto-rows: 1fr 1fr
    grid-auto-flow: dense
    grid-gap: $unit*3

  &__card
</style>
