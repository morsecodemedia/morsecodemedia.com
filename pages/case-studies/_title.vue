<template>
  <section class="container">
    <siteHeader />
    <div
      v-for="(cs, index) in activeCaseStudy"
      :key="index">
      <div
        v-if="cs.needsPassword === false">
        <p><img :src="(cs.brandLogo !== '') ? cs.brandLogo : 'https://www.fillmurray.com/75/75'"></p>
        <p>Title: {{ cs.title }}</p>
        <p>Description: {{ cs.description }}</p>
        <p>Link: <a
          :href="cs.url">{{ cs.url }}</a></p>
        <p>Worked on Project: {{ cs.yearStart }} - <span v-if="cs.yearEnd !== ''">{{ cs.yearEnd }}</span><span v-else>Present</span></p>
      </div>
      <div
        v-else>
        <p>Due to blah blah blah, you need a password to view this case study. Click here to request permission to view this project.</p>
      </div>
    </div>
    <siteFooter />
  </section>
</template>

<script>
  import config from '~/components/config.json'
  import siteHeader from '~/components/header.vue'
  import siteFooter from '~/components/footer.vue'

  export default {
    data() {
      return {
        caseStudies: config.caseStudies
      }
    },
    computed: {
      activeCaseStudy() {
        return this.caseStudies
          .filter(caseStudy =>
            this.$route.params.title === caseStudy.title.toLowerCase()
              .replace(/[.\s]/g, '-')
              .replace(/[&#,+()$~%'":*?<>{}]/g, '' ))
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
