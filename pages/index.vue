<template>
  <section class="container">
    <siteHeader />
    <heroHome />
    <aboutHome />
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

import siteHeader from '~/components/header.vue'
import heroHome from '~/components/hero-home.vue'
import aboutHome from '~/components/about-home.vue'
import services from '~/components/services.vue'
import trackRecord from '~/components/track-record.vue'
import featuredCaseStudies from '~/components/featured-case-studies.vue'
import linkBarCaseStudies from '~/components/link-bar-case-studies.vue'
import siteFooter from '~/components/footer.vue'

export default {
  components: {
    siteHeader,
    heroHome,
    aboutHome,
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
  }
}
</script>

<style>

</style>
