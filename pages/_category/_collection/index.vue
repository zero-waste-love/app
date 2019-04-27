<template lang='pug'>
main(class='container-page')

  section(class='page')
    Hero(
      :heroData='{ headline: collection.headline, text: collection.text }'
    )
    Collective(
      :pinData='pin'
      class=''
    )

</template>


<script>
import { mapActions } from 'vuex'
import Hero from '~/components/Hero.vue'
import Collective from '~/components/Collective.vue'


export default {
  async asyncData ({ params, store }) {
    const collection = await import(`~/data/subCategory/${params.collection}.json`)
    const pin = await Promise.all(
      collection.pin.map(async id => {
        const data = await import(`~/data/pin/${id}.json`)
        return { ...data, id }
      })
    )
    console.log('collection: ', collection)
    return {
      collection,
      pin
    }
  },
  components: {
    Hero,
    Collective
  },
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {},
  async beforeRouteEnter (to, from, next) {
    if (to.params.category) {
      const category = await import(`~/data/topic/${to.params.category}.json`)
      const root = window.document.documentElement
      root.style.setProperty('--background-color', category.color)
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
