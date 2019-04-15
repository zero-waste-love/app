<template lang='pug'>
div(class='container-footer')

  footer(class='footer')
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
  padding: $unit*10 $unit*10 $unit*2 $unit*10

.footer
  @extend %container-content
  display: grid
  grid-template-columns: auto auto 1fr
  grid-gap: 0 $unit*3

  &__link
    font-size: 12px

  &__copywrite
    justify-self: end
    font-size: 12px
</style>
