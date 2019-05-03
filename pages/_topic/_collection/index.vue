<template lang='pug'>
main(class='container-page')
  section(class='page')
    Hero(
      :heroData='{ headline: $t("subCategory." + $route.params.collection + ".title"), text: $t("subCategory." + $route.params.collection + ".body") }'
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


export default {
  async asyncData ({ params, store }) {
    await store.dispatch('catalog/fetchCollection', params.collection)
    return
  },
  components: {
    Hero,
    Collective
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

<style lang='sass'>
.container-page

.page

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
