<template lang='pug'>
div(class='container-pin')
  div(
    class='pin'
  )
    img(
      v-lazy='cardData.images[0].src'
      class='pin__image'
    )
    div(class='pin__body')
      h3(
        v-if='cardData.title'
        class='pin__headline'
      ) {{ cardData.title }}
      p(class='pin__text') {{ cardData.description.body }}
      p(class='pin__author')
        | by&nbsp;
        a(
          :href='cardData.description.authorWebsite'
          target='_blank'
          class='pin__link'
        ) {{ cardData.description.author }}
    div(class='pin__buttons')
      a(
        :href='cardData.description.authorWebsite'
        target='_blank'
        class='pin__button'
      ) {{ cardData.buttonText || 'Visit website' }}
      a(class='pin__icon')
        IconBookmark(
          v-show='!bookmark'
          @click='toggleBookmark'
          class='pin__icon-svg'
        )
        IconBookmarkActive(
          v-show='bookmark'
          @click='toggleBookmark'
          class='pin__icon-svg'
        )
</template>


<script>
import productImage from '~/assets/images/product.jpg'
import IconBookmark from '~/assets/svg/iconBookmark.svg'
import IconBookmarkActive from '~/assets/svg/iconBookmarkActive.svg'


export default {
  components: {
    IconBookmark,
    IconBookmarkActive
  },
  props: {
    cardData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      image: productImage,
      bookmark: false
    }
  },
  computed: {},
  methods: {
    setBookmark () {
      if (window.localStorage && localStorage.getItem('pinBookmark')) {
        const bookmarkItem = JSON.parse(localStorage.getItem('pinBookmark'))
        bookmarkItem[this.cardData.id] = this.bookmark
        localStorage.setItem('pinBookmark', JSON.stringify(bookmarkItem))
      }
      else if (window.localStorage && !localStorage.getItem('pinBookmark')) {
        localStorage.setItem('pinBookmark', JSON.stringify({ [this.cardData.id]: this.bookmark }))
      }
      console.log('set -> ', localStorage.getItem('pinBookmark'))
    },

    destroyBookmark () {
      if (localStorage.getItem('pinBookmark')) {
        const bookmarkItem = JSON.parse(localStorage.getItem('pinBookmark'))
        delete bookmarkItem[this.cardData.id]
        localStorage.removeItem('pinBookmark')
        localStorage.setItem('pinBookmark', JSON.stringify(bookmarkItem))
      }
    },

    toggleBookmark () {
      this.bookmark = !this.bookmark
      this.bookmark ? this.setBookmark() : this.destroyBookmark()
      console.log('bookmark: ', this.bookmark)
      this.$emit('bookmark', this.bookmark)
      this.bookmark &&
        this.$toast.show('Bookmark added 📌', {
          action : {
            text: 'View',
            onClick: (e, toastObject) => {
              this.$router.push({ name: 'index'})
            }
          }
        })
      // this.$toast.show('Bookmark removed 🗑')
    }
  },
  mounted () {
    if (localStorage.getItem('pinBookmark')) {
      const bookmarkItem = JSON.parse(localStorage.getItem('pinBookmark'))
      this.bookmark = !!bookmarkItem[this.cardData.id]
    }
  }
}
</script>


<style lang='sass' scoped>
.container-pin
  height: 100%
  overflow: hidden
  border-radius: 6px
  padding: $unit*2

  &:hover
    background: $grey

.pin
  @extend %card-container
  height: 100%
  min-height: $unit*16
  display: grid
  grid-template-columns: 1fr auto
  grid-template-rows: auto auto
  grid-gap: $unit*4 $unit*2
  // background: rgba(255, 255, 255, 1)
  +mq-m
    grid-template-rows: unset
    grid-template-columns: unset
    grid-auto-flow: row

  &__image
    width: $unit*7
    display: none
    // box-shadow: $unit $unit $unit rgba(34, 34, 34, 0.1)
    border-radius: 6px
    justify-self: end
    grid-row: 1 / 2
    grid-column: 2 / 3
    +mq-xs
      display: unset
      width: $unit*10
    +mq(560)
      display: none
    +mq-s
      display: unset
      grid-column: unset
    +mq-m
      grid-row: unset
      grid-column: unset
      width: 100%

  &__body
    padding: 0 $unit
    display: flex
    flex-direction: column
    text-overflow: ellipsis
    grid-row: 1 / 2
    grid-column: 1 / 2
    +mq-s
      height: unset
    +mq-m
      grid-row: unset
      grid-column: unset

  &__headline
    font-size: $fs
    font-weight: $fw-bold

  &__text
    @extend %text-copy
    margin-top: $unit
    text-overflow: ellipsis

  &__author
    text-overflow: ellipsis

  &__link
    text-decoration: underline
    text-overflow: ellipsis

  &__buttons
    grid-row: 2 / 3
    grid-column: 1 / 3
    display: grid
    grid-auto-flow: column
    grid-gap: $unit*2
    align-self: end
    align-items: center
    padding: 0 $unit $unit $unit
    display: none
    +mq-m
      grid-row: unset
      grid-column: unset

  &__button
    padding: $unit $unit*3
    border-radius: 6px
    text-align: center
    display: block
    width: min-content
    white-space: nowrap
    background: $pri-cl
    // box-shadow: $unit $unit $unit rgba(34, 34, 34, 0.1)

  &__icon
    @extend %flex--row-center
    width: $unit*3
    height: $unit*3
    justify-self: end

    &-svg
      width: 100%
</style>
