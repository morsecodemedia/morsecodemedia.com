<template>
  <section class="container">
    <siteHeader />
    <h1>Contact</h1>
    <siteFooter />
  </section>
</template>

<script>
  import config from '~/components/config.json'
  import siteHeader from '~/components/header.vue'
  import siteFooter from '~/components/footer.vue'

  export default {
    components: {
      siteHeader,
      siteFooter
    },
    data() {
      return {
        config: config
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
