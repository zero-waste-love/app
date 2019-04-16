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
    div(class='pin__buttons')
      a(
        :href='cardData.authorWebsite'
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
import IconBookmark from '~/assets/svg/IconBookmark.svg'
import IconBookmarkActive from '~/assets/svg/IconBookmarkActive.svg'


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
      console.log('cardData: ', this.cardData)
      if (window.localStorage && localStorage.getItem('pinBookmark')) {
        const bookmarkItem = JSON.parse(localStorage.getItem('pinBookmark'))
        console.log('bookmarkItem: ', bookmarkItem)
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
      console.log(bookmarkItem)
      this.bookmark = !!bookmarkItem[this.cardData.id]
      console.log(this.bookmark)
    }
  }
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
  grid-gap: $unit*4 0
  align-items: end
  height: 100%
  padding: $unit*2
  background: rgba(255, 255, 255, 1)

  &__image
    width: 100%
    box-shadow: $unit $unit $unit rgba(34, 34, 34, 0.1)
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

  &__buttons
    display: grid
    grid-auto-flow: column
    grid-gap: $unit*2
    align-items: center

  &__button
    padding: $unit $unit*3
    border-radius: 6px
    text-align: center
    display: block
    width: min-content
    white-space: nowrap
    background: $pri-cl
    box-shadow: $unit $unit $unit rgba(34, 34, 34, 0.1)

  &__icon
    @extend %flex--row-center
    width: $unit*3
    height: $unit*3
    justify-self: end

    &-svg
      width: 100%
</style>
