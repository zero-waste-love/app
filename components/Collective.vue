<template lang='pug'>
div(class='container-collective')
  section(class='collective')
    ul(class='collective__list')
      li(
        v-for='(pin, i) in pinData'
        :key='pin + i'
        class='collective__item'
      )
        Pin(
          :cardData='pin'
          class='collective__pin'
        )
</template>


<script>
import Pin from '~/components/Pin.vue'


export default {
  components: {
    Pin
  },
  props: {
    pinData: {
      type: Array,
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
.container-collective
  @extend %container-main
  // background: $white

.collective
  @extend %container-content

  &__list
    // display: grid
    // grid-auto-rows: auto
    // grid-gap: $unit*3
    // +mq(560)
    //   grid-template-columns: repeat(2, 1fr)
    // +mq-m
    //   grid-template-columns: repeat(3, 1fr)
    //   grid-gap: $unit*4
    columns: 300px 3

  &__item
    display: inline-block
    margin: $unit $unit/4
    width: 100%

</style>
