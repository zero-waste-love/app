<template lang='pug'>
main(class='container-index')
  Hero(
    :heroData='{ headline: $t("index.title"), text: $t("index.body") }'
  )
  Menu(
    :menuData='topic'
  )
  Bookmark(

  )
</template>


<script>
import Hero from '~/components/Hero.vue'
import Menu from '~/components/Menu.vue'
import Bookmark from '~/components/Bookmark.vue'
import navigationData from '~/data/navigation.json'
import { mapState } from 'vuex'

export default {
  async asyncData ({ params, store }) {

    return
  },
  components: {
    Hero,
    Menu,
    Bookmark
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      topic: state => state.app.data
    })
  },
  mounted () {
    const root = window.document.documentElement
    root.style.setProperty('--background-color', '#ffffff')
  }
}
</script>

<style lang='sass' scoped>
.container-index

.index

</style>
