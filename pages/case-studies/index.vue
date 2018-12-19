<template>
  <section class="container">
    <siteHeader />
    <caseStudies />
    <siteFooter />
  </section>
</template>

<script>
import siteHeader from '~/components/header.vue'
import caseStudies from '~/components/case-studies.vue'
import siteFooter from '~/components/footer.vue'

export default {
  components: {
    siteHeader,
    caseStudies,
    siteFooter
  }
}
</script>

<style>
  * {
    font-family: 'Muli', sans-serif;
    font-size: 22px;
    margin: 0;
    padding: 0;
  }
</style>
