<template lang='pug'>
div(class='container-card')

  nuxt-link(
    :to='localePath({ name: cardData.routeName, params: cardData.routeParams })'
    class='card'
  )
    pre {{ $route.params }}
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
    return {}
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-card
  height: 100%
  box-shadow: $unit $unit $unit rgba(34, 34, 34, 0.1)
  overflow: hidden
  border-radius: 6px

.card
  @extend %card-container
  min-height: $unit*20
  display: grid
  align-items: end
  padding: $unit*4
  background: rgba(255, 255, 255, 0.6)

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
