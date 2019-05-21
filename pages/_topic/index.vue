<template lang='pug'>
main(
  class='container-page'
)

  section(class='page')
    div(class='page__hero-container')
      DynamicIcon(
        v-if='$route.params.topic'
        :icon='`illu-topic-${$route.params.topic}-hero`'
        class='page__hero-image'
      )
    Hero(
      :heroData='{ headline: $t("topic." + $route.params.topic + ".title"), text: $t("topic." + $route.params.topic + ".body") }'
      class='page__hero'
    )
    ul(class='page__list')
      li(
        v-for='(card, i) in category'
        :key='card + i'
        class='page__item'
      )
        header(
          v-show='category.length > 1'
          class='page__header'
        )
          h2(class='page__headline') {{ $t("category." + card.handle + ".title") }}
        Category(
          :menuData='card.subCategory'
        )
</template>


<script>
import { mapState, mapActions } from 'vuex'
import Hero from '~/components/Hero.vue'
import Category from '~/components/Category.vue'
import DynamicIcon from '~/components/DynamicIcon.vue'

export default {
  async asyncData ({ params, store }) {
    // const category = await import(`~/data/topic/${params.category}.json`)
    // const subCategory = await Promise.all(
    //   category.subCategory.map(async id => {
    //     const data = await import(`~/data/category/${id}.json`)
    //     const collection = await Promise.all(
    //       data.collection.map(async collectionId =>
    //         await import(`~/data/subCategory/${collectionId}.json`)
    //       )
    //     )
    //     return { ...data, id, collection: [...collection] }
    //   })
    // )
    // return {
    //   category: [],
    //   subCategory: []
    // }
  },
  components: {
    Hero,
    Category,
    DynamicIcon
  },
  data () {
    return {}
  },
  computed: {
    category () {
      const topic = this.topic.find(t => t.handle === this.$route.params.topic)
      return topic ? topic.category : []
    },


    ...mapState({
      topic: state => state.app.data
    })
  },
  mounted () {},
  methods: {},
  async beforeRouteEnter (to, from, next) {
    if (!!to.params.topic) {
      const topic = await import(`~/data/topic/${to.params.topic}.json`)
      const root = window.document.documentElement
      root.style.setProperty('--background-color', topic.color)
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
    max-width: 600px
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
    overflow: hidden

  &__header
    @extend %container-main
    padding-top: unset
    padding-bottom: unset

  &__headline
    @extend %container-content
    font-weight: $fw-bold
    font-size: $fs1

</style>
