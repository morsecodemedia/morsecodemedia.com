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
    name: 'CaseStudies',
    components: {
      siteHeader,
      sectionIntro,
      caseStudies,
      siteFooter
    },
    head () {
      return {
        title: 'Case Studies | morsecodemedia.com',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: ""
          }
        ]
      }
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
