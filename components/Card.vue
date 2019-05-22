<template lang='pug'>
div(
  :class='{ "container-card--coming-soon": cardData.routeName === "topic" && comingSoon.includes(cardData.id) }'
  class='container-card'
)
  nuxt-link(
    :to='cardData.routeName === "topic" && comingSoon.includes(cardData.id) ? "#" : localePath({ name: cardData.routeName, params: cardData.routeParams })'
    class='card'
  )
    h3(
      v-if='cardData.headline'
      class='card__headline'
    ) {{ cardData.headline }}
    DynamicIcon(
      v-if='cardData.imageIcon'
      :icon='cardData.imageIcon'
      class='card__icon'
    )
</template>


<script>
import DynamicIcon from '~/components/DynamicIcon.vue'


export default {
  components: {
    DynamicIcon
  },
  props: {
    cardData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      comingSoon: [
        'living-room',
        'office',
        'on-the-go'
      ]
    }
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-card
  display: flex
  box-shadow: $unit $unit $unit rgba(34, 34, 34, 0.1)
  overflow: hidden
  border-radius: 6px

  &--coming-soon
    opacity: 0.5
    box-shadow: unset

    & .card
      cursor: default

.card
  @extend %card-container
  flex: 1
  min-height: $unit*20
  display: grid
  align-items: end
  padding: $unit*4

  &__headline
    grid-column: 1 / 2
    font-weight: $fw-bold
    font-size: $fs1

  &__text
    @extend %text-copy
    margin-top: $unit

  &__icon
    grid-column: 2 / 3
    justify-self: end
    width: $unit*12
    mix-blend-mode: multiply
</style>
