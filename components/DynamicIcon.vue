<template lang='pug'>
  component(:is='dynamicIcon')
</template>


<script>

export default {
  components: {},
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {
    dynamicIcon () {
      return () => import(
        /* webpackChunkName: "icons" */
        /* webpackMode: "lazy-once" */
        `../assets/svg/${this.icon}.svg`
      )
    }
  },
  methods: {}
}
</script>


<style lang='sass' scoped>

</style>
