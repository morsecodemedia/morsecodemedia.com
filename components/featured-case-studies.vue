<template>
  <section
    v-if="caseStudies"
    class="case-studies">
    <nuxt-link
      v-for="(cs, index) in featuredCaseStudies.splice(0,5)"
      :key="index"
      :to="'/case-studies/' + cs.title | lowerKebab"
      :class="(index === 0) ? 'regular-1 regular-2 double-3 double-4 double-5' : (index === 2) ? 'vertical-4' : (index === 3) ? 'regular-1 horizonal-2 regular-3 regular-4 vertical-5' : (index === 4) ? 'regular-1 horizontal-2 horizontal-3 landscape-4 horizontal-5' : 'regular-1 regular-2 regular-3 regular-4 regular-5'"
      class="case-study">
      <img
        :src="(cs.gallery.length) ? cs.gallery[Math.floor(Math.random()*cs.gallery.length)] : 'https://www.fillmurray.com/500/500'"
        role="presentation">
      <div class="overlay">
        <h3>{{ cs.title }}</h3>
      </div>
    </nuxt-link>
  </section>
</template>

<script>
  import { caseStudies } from '~/components/config.json'

  export default {
    filters: {
      lowerKebab: function(term) {
        return term.toLowerCase().replace(/[.\s]/g, '-').replace(/[&#,+()$~%.'":*?<>{}]/g, '' )
      }
    },
    data() {
      return {
        caseStudies: caseStudies,
        showPwdProjects: false
      }
    },
    computed : {
      featuredCaseStudies() {
        let activeProjects = this.caseStudies
          .filter(caseStudy => caseStudy.yearEnd === '' && caseStudy.active)
          .filter(caseStudy => this.showPwdProjects || !caseStudy.needsPassword)
          .filter(caseStudy => caseStudy.gallery.length > 0)
        let sortedCaseStudies = this.caseStudies
          .filter(caseStudy => caseStudy.yearEnd !== '' && caseStudy.active)
          .filter(caseStudy => this.showPwdProjects || !caseStudy.needsPassword)
          .filter(caseStudy => caseStudy.gallery.length > 0)
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