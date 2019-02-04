<template>
  <section class="container">
    <siteHeader />
    <sectionHero :hero="hero" />
    <caseStudies />
    <siteFooter />
  </section>
</template>

<script>
  import { about } from '~/components/config.json'
  import siteHeader from '~/components/header'
  import sectionHero from '~/components/section-hero'
  import caseStudies from '~/components/case-studies'
  import siteFooter from '~/components/footer'

  export default {
    name: 'CaseStudies',
    components: {
      siteHeader,
      sectionHero,
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
            content: "I have a proven track record of quality web development backed by some award winning work."
          }
        ]
      }
    },
    data() {
      return {
        hero: {
          "header": "Case Studies",
          "copy": about.caseStudiesQuote
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>

