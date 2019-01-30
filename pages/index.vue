<template>
  <section class="container">
    <siteHeader />
    <heroHome />
    <sectionIntro :intro="intro" />
    <services />
    <trackRecord />
    <featuredCaseStudies />
    <linkBarCaseStudies />
    <sectionOutro :outro="outro" />
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
  import sectionOutro from '~/components/section-outro'
  import services from '~/components/services'
  import trackRecord from '~/components/track-record'
  import featuredCaseStudies from '~/components/featured-case-studies'
  import linkBarCaseStudies from '~/components/link-bar-case-studies'
  import siteFooter from '~/components/footer'

  export default {
    name: 'Home',
    components: {
      siteHeader,
      heroHome,
      sectionIntro,
      sectionOutro,
      services,
      trackRecord,
      featuredCaseStudies,
      linkBarCaseStudies,
      siteFooter
    },
    head () {
      return {
        title: 'The Portfolio of Brandon Morse | morsecodemedia.com',
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
          "image": config.about.headshot,
          "quote": config.about.homeQuote
        },
        outro: {
          "header": 'Your website should be your strongest business asset.',
          "body": 'It represents your brand to the world, and needs to interface with your customers like one of the team. That’s why I start every project with a conversation — to ensure your web design, web development, and digital strategy align with your goals, every step of the way.'
        }
      }
    }
  }
</script>

<style>

</style>
