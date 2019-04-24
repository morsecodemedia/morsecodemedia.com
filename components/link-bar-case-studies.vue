<template>
  <section
    v-if="caseStudies"
    class="link-bar">
    <a
      href="/case-studies/">See More Work &gt;</a>
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
      text-decoration: underline #54bad8;
      text-transform: uppercase;
    }
  }
</style>