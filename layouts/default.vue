<template lang='pug'>
div(
  class='vue-app'
  :style='{ background: `rgba(${activeColor}, 1)` }'
)

  Navigation(class='vue-app__view')

  nuxt(class='vue-app__view')

  Footer(class='vue-app__footer')
</template>


<script>
import Navigation from '~/components/Navigation.vue'
import Footer from '~/components/Footer.vue'
import { mapState, mapGetters } from 'vuex'


export default {
  components: {
    Navigation,
    Footer
  },
  data () {
    return {}
  },
  computed: {
    error () {
      return this.$store.state.error
    },


    ...mapGetters({
      activeColor: 'app/activeColor'
    })
  }
}
</script>


<style lang='sass'>
.vue-app
  display: grid
  grid-template-rows: auto 1fr auto
  min-height: 100vh
  transition: background-color 500ms

  &__view

</style>
