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
  .section-hero {
    background: rgba(210,255,82,1);
    background: -moz-radial-gradient(center, ellipse cover, rgba(210,255,82,1) 0%, rgba(145,232,66,1) 100%);
    background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, rgba(210,255,82,1)), color-stop(100%, rgba(145,232,66,1)));
    background: -webkit-radial-gradient(center, ellipse cover, rgba(210,255,82,1) 0%, rgba(145,232,66,1) 100%);
    background: -o-radial-gradient(center, ellipse cover, rgba(210,255,82,1) 0%, rgba(145,232,66,1) 100%);
    background: -ms-radial-gradient(center, ellipse cover, rgba(210,255,82,1) 0%, rgba(145,232,66,1) 100%);
    background: radial-gradient(ellipse at center, rgba(210,255,82,1) 0%, rgba(145,232,66,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d2ff52', endColorstr='#91e842', GradientType=1 );
  }
</style>

