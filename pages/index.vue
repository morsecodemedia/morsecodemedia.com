<template>
  <section class="container">
    <siteHeader />
    <heroHome />
    <sectionIntro :intro="intro" />
    <services />
    <trackRecord />
    <featuredCaseStudies />
    <linkBarCaseStudies />
    <siteFooter />
  </section>
</template>

<script>
import Vue from 'vue'
import Meta from 'vue-meta'

Vue.use(Meta)

import config from '~/components/config.json'
import siteHeader from '~/components/header'
import heroHome from '~/components/hero-home'
import sectionIntro from '~/components/section-intro'
import services from '~/components/services'
import trackRecord from '~/components/track-record'
import featuredCaseStudies from '~/components/featured-case-studies'
import linkBarCaseStudies from '~/components/link-bar-case-studies'
import siteFooter from '~/components/footer'

export default {
  components: {
    siteHeader,
    heroHome,
    sectionIntro,
    services,
    trackRecord,
    featuredCaseStudies,
    linkBarCaseStudies,
    siteFooter
  },
  metaInfo: {
    title: 'The Porfolio of Brandon Morse',
    titleTemplate: '%s | morsecodemedia',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
    data() {
      return {
        intro: {
          "image": config.about.headshot,
          "quote": config.about.homeQuote
        }
      }
    }
}
</script>

<style>

</style>
