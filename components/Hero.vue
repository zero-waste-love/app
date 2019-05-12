<template lang='pug'>
div(
  id='hero'
  class='container-hero'
)

  header(class='hero')
    h1(class='hero__headline') {{ heroData.headline }}
    p(class='hero__text') {{ heroData.text }}
</template>


<script>


export default {
  components: {},
  props: {
    heroData: {
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
.container-hero
  @extend %container-main

.hero
  @extend %container-content

  &__headline
    font-size: $fs1
    font-weight: 900
    text-align: center
    +mq-s
      font-size: $fs2

  &__text
    @extend %text-copy
    margin: 0 auto
    text-align: center
    // max-width: $fs*40
    margin-top: $unit*2
</style>
