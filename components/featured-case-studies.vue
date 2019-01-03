<template>
  <section
    v-if="caseStudies"
    class="case-studies">
    <nuxt-link
      v-for="(cs, index) in featuredCaseStudies"
      v-if="index < 5"
      :key="index"
      :to="'/case-studies/' + cs.title | lowerKebab"
      :class="(index === 0) ? 'double' : (index === 3) ? 'vertical' : (index === 4) ? 'horizontal' : ''"
      class="case-study">
      <img
        :src="(cs.previewImg !== '') ? cs.previewImg : 'https://www.fillmurray.com/500/500'"
        role="presentation">
      <div class="overlay">
        <h3>{{ cs.title }}</h3>
      </div>
    </nuxt-link>
  </section>
</template>

<script>
  import config from '~/components/config.json'

  export default {
    filters: {
      lowerKebab: function(term) {
        return term.toLowerCase().replace(/[.\s]/g, '-').replace(/[&#,+()$~%.'":*?<>{}]/g, '' )
      }
    },
    data() {
      return {
        caseStudies: config.caseStudies
      }
    },
    computed : {
      featuredCaseStudies() {
        let activeProjects = this.caseStudies
          .filter(caseStudy => !caseStudy.needsPassword && caseStudy.yearEnd === '' && caseStudy.active)
        let sortedCaseStudies = this.caseStudies
          .filter(caseStudy => !caseStudy.needsPassword && caseStudy.yearEnd !== '' && caseStudy.active)
          .sort((a, b) => {
            let yearEndCompare = b.yearEnd - a.yearEnd
            if (yearEndCompare === 0) {
              return b.yearStart - a.yearStart
            } else {
              return yearEndCompare
            }
          })
        activeProjects.sort((a,b) => {
          return b.yearStart - a.yearStart
        })
        return activeProjects.concat(sortedCaseStudies)
      }
    }
  }
</script>

<style lang="scss">

</style>