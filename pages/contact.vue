<template>
  <section class="container">
    <siteHeader />
    <sectionIntro :intro="intro" />
    <siteFooter />
  </section>
</template>

<script>
  import config from '~/components/config.json'
  import siteHeader from '~/components/header'
  import sectionIntro from '~/components/section-intro'
  import siteFooter from '~/components/footer'

  export default {
    components: {
      siteHeader,
      sectionIntro,
      siteFooter
    },
    data() {
      return {
        intro: {
          "image": "https://via.placeholder.com/950x630",
          "quote": config.about.contactQuote
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
