<template lang='pug'>
div(
  class='container-navigation'
)

  nav(class='navigation')
    div(class='navigation__breadcrumb')
      nuxt-link(
        v-show='$route.name === "index"'
        class='navigation__logo'
        to='/'
      )
        img(
          v-lazy='logoImage'
          class='navigation__logo-image'
        )
      nuxt-link(
        v-show='$route.name === "category" || $route.name === "category-collection"'
        to='/'
        class='navigation__link'
      )
        | &#8249;&nbsp;
        img(
          v-lazy='logoImageSmall'
          class='navigation__logo-image navigation__logo-image--small'
        )
        | &nbsp;Start
      nuxt-link(
        v-show='$route.name === "category-collection"'
        :to='"/" + $route.params.category'
        class='navigation__link'
      ) &nbsp;&#8249; {{ $route.params.category }}

    a(
      @click='copyText'
      :class='{ success: shareButtonText !== "Share" }'
      class='navigation__link navigation__button'
    ) {{ shareButtonText }}

    input(
      ref='shareInput'
      id='shareInput'
      class='navigation__share-input'
      :value='shareURL'
      readonly
    )
</template>


<script>
import IconLogo from '~/assets/images/iconLogo.png'
import IconLogoSmall from '~/assets/images/iconLogoSmall.png'
import { mapState, mapGetters, mapMutations } from 'vuex'


export default {
  components: {
  },
  props: {},
  data () {
    return {
      logoImage: IconLogo,
      logoImageSmall: IconLogoSmall,
      shareButtonText: 'Share',
      shareURL: 'https://www.zerowaste.love'
    }
  },
  computed: {},
  methods: {
    copyText () {
      this.shareButtonText = 'Link copied 🎉'
      this.$refs.shareInput.select()
      // copy input value to clipboard
      document.execCommand('copy')
      // deselect input
      if (document.selection) document.selection.empty()
      else if (window.getSelection) window.getSelection().removeAllRanges()
      setTimeout(() => this.shareButtonText = 'Share', 2000)
    }
  }
}
</script>


<style lang='sass' scoped>
.container-navigation
  position: sticky
  z-index: 99
  top: 0
  padding: $unit $unit*10
  margin-top: 20px
  background: $pri-cl

.navigation
  @extend %container-content
  display: grid
  grid-template-columns: 1fr auto
  align-items: center

  &__breadcrumb


  &__logo

    &-image
      height: $unit*2
      mix-blend-mode: luminosity

      &--small
        transform: translateY(2px)

  &__link
    text-transform: capitalize
    font-weight: $fw-bold

  &__button
    justify-self: end
    display: grid
    grid-auto-flow: column
    grid-gap: $unit*3
    background: rgba(255, 255, 255, 0.6)
    padding: $unit $unit*3
    border-radius: 6px
    font-weight: $fw-reg

    &.success
      background: $sec-cl
      color: $white

  &__share-input
    position: fixed
    width: 1px
    height: 1px
    overflow: hidden
    opacity: 0
</style>
