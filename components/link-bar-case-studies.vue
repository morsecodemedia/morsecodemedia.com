<template>
  <section
    v-if="caseStudies"
    class="link-bar">
    <a href="/case-studies/">See More Work &gt;</a>
  </section>
</template>

<script>
  import config from '~/components/config.json'

  export default {
    data() {
      return {
        caseStudies: config.caseStudies
      }
    }
  }
</script>

<style lang="scss" scoped>
  .link-bar {
    background: white;
    padding: 45px 25px;
    a {
      color: #222;
      font-size: 24px;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
</style>