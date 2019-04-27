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
    // const categories = await Promise.all(
    //   navigationData.topic.map(async id => {
    //     const data = await import(`~/data/topic/${id}.json`)
    //     const subCategory = await Promise.all(
    //       data.subCategory.map(async subId =>
    //         await import(`~/data/category/${subId}.json`)
    //       )
    //     )
    //     return { ...data, id, subCategory }
    //   })
    // )
    // return {
    //   menuData: [], //categories,
    //   heroData: { headline: $t('index.title'), text: 'Mingle around and find alternatives for every-day products' }
    // }
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
