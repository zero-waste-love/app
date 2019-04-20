<template lang='pug'>
div(class='container-menu')
  div(class='menu')
    AppSlider(class='menu__list')
      Pin(
        :cardData='{ headline: "Introduction video", text: "Learn more about dental hygiene", image, author: "Zero Waste Love", authorWebsite: "authorwebsite.com", buttonText: "Watch video", id: "tooth-paste--0" }'
        class='app-slider__slide app-slider__slide--pin collective__pin'
      )
      Card(
        v-for='(card, i) in menuData'
        :key='card.headline + i'
        :cardData='{ id: card.id, headline: card.headline, path: $route.params.category + "/" + card.id }'
        class='app-slider__slide menu__card'
      )
</template>


<script>
import AppSlider from '~/components/AppSlider.vue'
import Card from '~/components/Card.vue'
import Pin from '~/components/Pin.vue'


export default {
  components: {
    AppSlider,
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


.menu

  &__list


  &__item

  &__card
</style>
