<template lang='pug'>
div(class='container-card')

  nuxt-link(
    :to='{ path: cardData.path }'
    class='card'
  )
    h3(
      v-if='cardData.headline'
      class='card__headline'
    ) {{ cardData.headline }}
</template>


<script>

export default {
  components: {},
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
  display: grid
  align-items: end
  height: 100%
  padding: $unit*4
  background: rgba(255, 255, 255, 0.6)


  &__headline
    font-size: $fs1
    font-weight: $fw-bold

  &__text
    @extend %text-copy
    margin-top: $unit
</style>
