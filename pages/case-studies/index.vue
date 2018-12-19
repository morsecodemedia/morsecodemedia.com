<template>
  <section class="container">
    <siteHeader />
    <caseStudiesIntro />
    <caseStudies />
    <siteFooter />
  </section>
</template>

<script>
  import siteHeader from '~/components/header.vue'
  import caseStudiesIntro from '~/components/case-studies-intro.vue'
  import caseStudies from '~/components/case-studies.vue'
  import siteFooter from '~/components/footer.vue'

  export default {
    components: {
      siteHeader,
      caseStudiesIntro,
      caseStudies,
      siteFooter
    }
  }
</script>

<style>

</style>
