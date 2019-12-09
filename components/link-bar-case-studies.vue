<template>
  <section
    v-if="caseStudies"
    class="link-bar"
  >
    <nuxt-link
      to="/case-studies/"
    >
      See More Work &raquo;
    </nuxt-link>
  </section>
</template>

<script>
  import { caseStudies } from '~/components/config.json'

  export default {
    name: 'LinkBar',
    data() {
      return {
        caseStudies: caseStudies
      }
    }
  }
</script>

<style lang="scss" scoped>

  .link-bar {
    background: #303970;
    padding: 45px 25px;
    a {
      color: $white;
      font-size: 24px;
      text-decoration: underline #56a68d;
      text-transform: uppercase;
    }
  }
</style>