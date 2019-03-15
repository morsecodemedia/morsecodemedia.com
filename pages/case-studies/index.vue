<template>
  <section class="container">
    <siteHeader />
    <main>
      <sectionHero :hero="hero" />
      <caseStudies />
    </main>
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
          },
          { hid: 'ogtitle', property: 'og:title', content: "Case Studies | morsecodemedia.com" },
          { hid: 'ogurl', property: 'og:url', content: 'https://www.morsecodemedia.com/contact/' },
          { hid: 'ogdescription', property: 'og:description', content: 'I have a proven track record of quality web development backed by some award winning work.' },
          { hid: 'twsite', name: 'twitter:site', content: 'https://www.morsecodemedia.com/contact/' },
          { hid: 'twtitle', name: 'twitter:title', content: "Case Studies | morsecodemedia.com" },
          { hid: 'twdescription', name: 'twitter:description', content: 'I have a proven track record of quality web development backed by some award winning work.' },
          { hid: 'googlename', itemprop: 'name', content: "Case Studies | morsecodemedia.com" },
          { hid: 'googledescription', itemprop: 'description', content: 'I have a proven track record of quality web development backed by some award winning work.' }
        ],
        link: [
          { hid: 'canonical', rel: 'canonical', href: 'https://www.morsecodemedia.com/case-studies/' }
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

