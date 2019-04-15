<template lang='pug'>
main(class='container-index')
  Hero(
    :heroData='heroData'
  )
  Menu(
    :menuData='menuData'
  )
</template>


<script>
import Hero from '~/components/Hero.vue'
import Menu from '~/components/Menu.vue'
import navigationData from '~/data/navigation.json'

export default {
  async asyncData ({ params, store }) {
    const categories = await Promise.all(
      navigationData.category.map(async id => {
        const data = await import(`~/data/category/${id}.json`)
        const subCategory = await Promise.all(
          data.subCategory.map(async subId =>
            await import(`~/data/subCategory/${subId}.json`)
          )
        )
        return { ...data, id, subCategory }
      })
    )
    return {
      menuData: categories,
      heroData: { headline: 'Lets get started', text: 'Mingle around and find alternatives for every-day products' }
    }
  },
  components: {
    Hero,
    Menu
  },
  data () {
    return {}
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
