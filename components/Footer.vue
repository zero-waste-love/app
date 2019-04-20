<template lang='pug'>
div(class='container-footer')

  footer(class='footer')
    div(class='footer__links')
      a(class='footer__link') Imprint
      a(class='footer__link') Privacy Policy
    p(class='footer__copywrite') {{ copywrite }}
</template>


<script>

export default {
  components: {},
  props: {},
  data () {
    return {
      copywrite: 'Made with love in Munich, Germany & Portland, OR, USA'
    }
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-footer
  padding: $unit*10 0 $unit*2 0

.footer
  @extend %container-content
  display: grid
  +mq-s
    display: grid
    grid-template-columns: auto 1fr
    grid-gap: 0 $unit*3

  &__links
    display: grid
    grid-auto-columns: min-content
    grid-auto-flow: column
    grid-gap: 0 $unit*3
    justify-content: center

  &__link
    font-size: 12px
    white-space: nowrap

  &__copywrite
    font-size: 12px
    text-align: center
    +mq-s
      justify-self: end
</style>
