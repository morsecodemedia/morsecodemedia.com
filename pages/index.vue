<template>
  <section class="container">
    <siteHeader />
    <main>
      <heroHome />
      <services />
      <featuredCaseStudies />
      <linkBarCaseStudies />
      <sectionOutro :outro="outro" />
    </main>
    <siteFooter />
  </section>
</template>

<script>
  import Vue from 'vue'
  import Meta from 'vue-meta'

  Vue.use(Meta)

  import { about } from '~/components/config.json'
  import siteHeader from '~/components/header'
  import heroHome from '~/components/homepage-hero'
  import sectionOutro from '~/components/section-outro'
  import services from '~/components/services'
  import featuredCaseStudies from '~/components/featured-case-studies'
  import linkBarCaseStudies from '~/components/link-bar-case-studies'
  import siteFooter from '~/components/footer'

  export default {
    name: 'Home',
    components: {
      siteHeader,
      heroHome,
      sectionOutro,
      services,
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
            content: "Brandon Morse is an award-winning web developer, based out of New Jersey, USA."
          },
        ]
      }
    },
    data() {
      return {
        outro: {
          "header": 'Your website should be your strongest business asset.',
          "body": '<p>It represents your brand to the world, and needs to interface with your customers like one of the team. That\'s why I start every project with a conversation &mdash; to ensure your web design, web development, and digital strategy align with your goals, every step of the way.</p><p><a href="/contact/">Let\'s Have A Conversation &raquo;</a></p>'
        }
      }
    }
  }
</script>
