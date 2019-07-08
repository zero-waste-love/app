<template lang='pug'>
div(
  class='container-navigation'
  :style='{ background: `rgba(${activeColor}, 0.9)` }'
)
  nav(class='navigation')
    div(class='navigation__breadcrumb')
      nuxt-link(
        v-show='$route.path === "/"'
        class='navigation__logo'
        to='/'
      )
        span(class='navigation__icon-logo')
          IconLogo(class='navigation__icon-logo-svg')
      nuxt-link(
        v-show='!!$route.params.topic || !!$route.params.collection || $route.path.includes("/pages/")'
        to='/'
        class='navigation__link'
      )
        span(class='navigation__icon-logo')
          IconLogoMini(class='navigation__icon-logo-svg')
        | &nbsp;{{ $t('links.home') }}&nbsp;
      nuxt-link(
        v-show='$route.params.topic && $route.params.collection'
        :to='"/" + $route.params.topic'
        class='navigation__link'
      )
        span(class='navigation__icon')
          IconChevron(class='navigation__icon-svg')
        | &nbsp;{{ $route.params.topic }}

</template>


<script>
import IconLogo from '~/assets/svg/icon-logo.svg'
import IconChevron from '~/assets/svg/iconChevron.svg'
import IconLogoMini from '~/assets/svg/icon-logo-mini.svg'
import { mapState, mapGetters, mapMutations } from 'vuex'


export default {
  components: {
    IconLogo,
    IconLogoMini,
    IconChevron
  },
  props: {},
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      activeColor: 'app/activeColor'
    })
  },
  methods: {}
}
</script>


<style lang='sass' scoped>
.container-navigation
  position: sticky
  z-index: 99
  top: 0
  padding: $unit 0
  transition: background-color 500ms

.navigation
  @extend %container-content
  display: grid
  grid-template-columns: 1fr auto
  align-items: center

  &__breadcrumb
    display: flex

  &__link
    font-weight: $fw-bold
    text-transform: capitalize
    display: flex

  &__icon
    @extend %flex--row-center

    &-svg
      width: $unit*1.5
      transform: rotate(-90deg)

    &-logo

      &-svg
        height: $unit*2

  &__button
    justify-self: end
    display: grid
    grid-auto-flow: column
    grid-gap: $unit*3
    background: rgba(255, 255, 255, 0.6)
    padding: $unit $unit*3
    border-radius: 6px
    font-weight: $fw-reg
    text-transform: none

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
