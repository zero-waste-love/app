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


  &__panel
    display: grid
    grid-auto-flow: column
    grid-template-rows: repeat(2, 1fr)
    grid-auto-columns: 320px
    grid-gap: $unit*3
    margin: 0 auto
    +mq-s
      width: 90%
      max-width: 1024px
      grid-template-columns: repeat(2, 1fr)
      grid-auto-rows: 1fr
      grid-auto-flow: row
    +mq-m
      width: 80%
      grid-template-columns: repeat(3, 1fr)

  &__slide

</style>
