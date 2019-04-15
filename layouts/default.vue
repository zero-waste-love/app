<template lang='pug'>
div(class='vue-app')

  Navigation(class='vue-app__view')

  nuxt(class='vue-app__view')

  Footer(class='vue-app__footer')
</template>


<script>
import Navigation from '~/components/Navigation.vue'
import Footer from '~/components/Footer.vue'
import { mapState } from 'vuex'


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
    }
  }
}
</script>


<style lang='sass'>
.vue-app
  display: grid
  grid-template-rows: auto 1fr auto
  min-height: 100vh
  background: $pri-cl

  &__view

</style>
