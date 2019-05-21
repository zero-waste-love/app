<template lang='pug'>
main(class='container-page')
  section(class='page')
    div(class='page__hero-container')
      DynamicIcon(
        v-if='$route.params.collection'
        :icon='`illu-subCategory-${$route.params.collection}`'
        class='page__hero-image'
      )
    Hero(
      :heroData='{ headline: $t("subCategory." + $route.params.collection + ".title"), text: $t("subCategory." + $route.params.collection + ".body") }'
      class='page__hero'
    )
    Collective(
      :pinData='activeProducts'
      class=''
    )
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
import Hero from '~/components/Hero.vue'
import Collective from '~/components/Collective.vue'
import DynamicIcon from '~/components/DynamicIcon.vue'

export default {
  async asyncData ({ params, store }) {
    await store.dispatch('catalog/fetchCollection', params.collection)
    return
  },
  components: {
    Hero,
    Collective,
    DynamicIcon
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      activeProducts: 'catalog/activeProducts'
    })
  },
  mounted () {},
  methods: {},
  async beforeRouteEnter (to, from, next) {
    if (!!to.params.topic) {
      // const topic = await import(`~/data/topic/${to.params.topic}.json`)
      // const root = window.document.documentElement
      // root.style.setProperty('--background-color', topic.color)
    }
    next()
  }
}
</script>

<style lang='sass' scoped>
.container-page

.page

  &__hero
    padding-top: $unit*5 !important
    +mq-s
      padding-top: $unit*10 !important

  &__hero-container
    width: 90%
    max-width: 180px
    margin: $unit*5 auto 0 auto
    +mq-m
      width: 50%

  &__hero-image
    mix-blend-mode: multiply

  &__list
    display: grid
    grid-gap: $unit*8 0

  &__item
    display: grid
    grid-gap: $unit*2 0

  &__header
    @extend %container-main
    padding-top: unset
    padding-bottom: unset

  &__text
    @extend %container-content
    font-weight: $fw-bold
    font-size: $fs

</style>
