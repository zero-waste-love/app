<template lang='pug'>
div(class='app-slider')
  div(class='app-slider__panel')
    slot
</template>


<script>

export default {
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.app-slider
  padding: 0 0 $unit*2 0
  overflow-x: auto
  -webkit-overflow-scrolling: touch

  &__panel
    width: 90%
    max-width: 1024px
    display: grid
    grid-auto-flow: column
    grid-template-rows: repeat(2, 1fr)
    grid-auto-columns: 320px
    grid-gap: $unit*3
    margin: 0 auto
    +mq-m
      width: 80%

  &__slide

    &--pin
      grid-row: 1 / -1
</style>
