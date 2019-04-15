<template lang='pug'>
div(class='container-pin')

  div(
    class='pin'
  )
    img(
      v-lazy='image'
      class='pin__image'
    )
    div(class='pin__body')
      h3(
        v-if='cardData.headline'
        class='pin__headline'
      ) {{ cardData.headline }}
      p(class='') {{ cardData.text }}
      p(class='')
        | by&nbsp;
        a(
          :href='cardData.authorWebsite'
          target='_blank'
          class='pin__link'
        ) {{ cardData.author }}
      a(
        :href='cardData.authorWebsite'
        target='_blank'
        class='pin__button'
      ) {{ cardData.buttonText || 'Visit website' }}
</template>


<script>
import productImage from '~/assets/images/product.jpg'


export default {
  components: {},
  props: {
    cardData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      image: productImage
    }
  },
  computed: {},
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-pin
  height: 100%
  overflow: hidden
  border-radius: 6px

.pin
  @extend %card-container
  display: grid
  align-items: end
  height: 100%
  padding: $unit*2
  background: rgba(255, 255, 255, 1)

  &__image
    width: 100%
    box-shadow: $unit $unit $unit rgba(34, 34, 34, 0.1)
    margin-bottom: $unit*4
    border-radius: 6px

  &__body
    // padding: 0 $unit*2

  &__headline
    font-size: $fs
    font-weight: $fw-bold

  &__text
    @extend %text-copy
    margin-top: $unit

  &__link
    text-decoration: underline

  &__button
    background: rgba(255, 255, 255, 0.6)
    padding: $unit $unit*4
    border-radius: 6px
    margin: $unit*3 auto 0 auto
    text-align: center
    display: block
    white-space: nowrap
    background: $pri-cl
    box-shadow: $unit $unit $unit rgba(34, 34, 34, 0.1)
</style>
