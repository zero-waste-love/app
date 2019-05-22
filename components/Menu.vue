<template lang='pug'>
div(class='container-menu')
  div(class='menu')
    ul(class='menu__list')
      li(
        v-for='(card, i) in menuData'
        :key='card + i'
        class='menu__item'
      )
        Card(
          :cardData='{ headline: $t("topic." + card.handle + ".title"), id: card.handle, path: card.handle, imageIcon: card.imageIcon, routeName: "topic", routeParams: { topic: card.handle } }'
          :style='{ backgroundColor: `rgba(${card.color}, 1)` }'
          class='menu__card'
        )
    h2(
      class='menu__headline'
    ) ...more topics coming soon
</template>


<script>
import Card from '~/components/Card.vue'


export default {
  components: {
    Card
  },
  props: {
    menuData: {
      type: Array,
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
.container-menu
  @extend %container-main

.menu
  @extend %container-content

  &__list
    display: grid
    grid-template-columns: repeat(1, 1fr)
    grid-gap: $unit*3
    +mq-s
      grid-template-rows: repeat(1, $unit*20)
      grid-template-columns: repeat(2, 1fr)
    +mq-m
      grid-template-columns: repeat(3, 1fr)

  &__item
    display: flex

  &__card
    flex: 1

  &__headline
    text-align: right
    font-weight: $fw-bold
    font-size: $fs
    color: $dark
    margin-top: $unit
</style>
