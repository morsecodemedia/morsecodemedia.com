<template>
  <section>
    <nav class="case-studies-filter">
      <ul>
        <li @click="filterCaseStudiesByCategory('all')">All Projects</li>
        <li @click="filterCaseStudiesByCategory('alexa-skills')">Alexa Skills</li>
        <li @click="filterCaseStudiesByCategory('conference-panels')">Conference Panels</li>
        <li @click="filterCaseStudiesByCategory('email-campaigns')">Email Campaigns</li>
        <li @click="filterCaseStudiesByCategory('ipad-presentations')">iPad Presentations</li>
        <li @click="filterCaseStudiesByCategory('mobile-apps')">Mobile Apps</li>
        <li @click="filterCaseStudiesByCategory('websites')">Websites</li>
      </ul>
    </nav>
    <article
      v-if="caseStudies"
      class="case-studies">
      <nuxt-link
        v-for="(cs, index) in allCaseStudies"
        :key="index"
        :to="'/case-studies/' + cs.title | lowerKebab">
        <div
          :class="(index === 0) ? 'big' : (index === 4) ? 'horizontal' : ''"
          class="case-study">
          <img
            :src="cs.previewImg"
            role="presentation">
          <div class="overlay">
            <h3>{{ cs.title }}</h3>
          </div>
        </div>
      </nuxt-link>
    </article>
  </section>
</template>

<script>
  import config from '~/components/config.json'

  export default {
    filters: {
      lowerKebab: function(term) {
        return term.toLowerCase().replace(/[.\s]/g, '-').replace(/[&#,+()$~%'":*?<>{}]/g, '' )
      }
    },
    data() {
      return {
        caseStudies: config.caseStudies
      }
    },
    computed : {
      allCaseStudies() {
        let activeProjects = this.caseStudies
          .filter(caseStudy => caseStudy.yearEnd === '' && caseStudy.active)
        let sortedCaseStudies = this.caseStudies
          .filter(caseStudy => caseStudy.yearEnd !== '' && caseStudy.active)
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
    },
    methods : {
      filterCaseStudiesByCategory(cat) {
        if (cat === 'all') {
          return allCaseStudies()
        } else {
          return allCaseStudies().filter(caseStudy => caseStudy.category === cat.toLowerCase().reaplce(/\s]/g, '-'))
        }
      }
    }
  }
</script>

<style lang="scss">

</style>