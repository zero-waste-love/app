<template lang='pug'>
main(
  :style='{ backgroundColor: category.color }'
  class='container-page'
)

  section(class='page')
    Hero(
      :heroData='{ headline: category.headline, text: category.text }'
    )
    ul(class='page__list')
      li(
        v-for='(card, i) in subCategory'
        :key='card + i'
        class='page__item'
      )
        header(class='page__header')
          h2(class='page__headline') {{ card.headline }}
        Category(
          :menuData='card.collection'
        )
</template>


<script>
import { mapActions } from 'vuex'
import Hero from '~/components/Hero.vue'
import Category from '~/components/Category.vue'


export default {
  async asyncData ({ params, store }) {
    const category = await import(`~/data/category/${params.category}.json`)
    const subCategory = await Promise.all(
      category.subCategory.map(async id => {
        const data = await import(`~/data/subCategory/${id}.json`)
        const collection = await Promise.all(
          data.collection.map(async collectionId =>
            await import(`~/data/collection/${collectionId}.json`)
          )
        )
        return { ...data, id, collection: [...collection] }
      })
    )
    return {
      category,
      subCategory
    }
  },
  components: {
    Hero,
    Category
  },
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {},
  async beforeRouteEnter (to, from, next) {
    if (to.params.category) {
      const category = await import(`~/data/category/${to.params.category}.json`)
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
