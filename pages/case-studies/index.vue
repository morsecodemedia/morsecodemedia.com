<template>
  <section class="container">
    <siteHeader />
    <caseStudies />
    <siteFooter />
  </section>
</template>

<script>
  import config from '~/components/config.json'
  import siteHeader from '~/components/header'
  import sectionIntro from '~/components/section-intro'
  import caseStudies from '~/components/case-studies'
  import siteFooter from '~/components/footer'

  export default {
    components: {
      siteHeader,
      sectionIntro,
      caseStudies,
      siteFooter
    },
    metaInfo: {
      title: 'Case Studies'
    },
    data() {
      return {
        intro: {
          "image": "https://via.placeholder.com/950x630",
          "quote": config.about.caseStudiesQuote
        }
      }
    }
  }
</script>

<style>

</style>
