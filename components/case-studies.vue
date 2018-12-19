<template>
  <section>
    <nav class="case-studies-filter">
      <ul>
        <li @click="activeCaseStudyCategory = 'all'">All Projects</li>
        <li
          v-for="(cat, index) in activeCategories"
          :key="index"
          @click="activeCaseStudyCategory = cat.toLowerCase().replace(/\s/g, '-')">{{ cat }}</li>
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
          :class="(index === 0) ? 'horizontal' : (index === 4) ? 'horizontal' : ''"
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
        caseStudies: config.caseStudies,
        activeCaseStudyCategory: 'all'
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
        let totalProjects = activeProjects.concat(sortedCaseStudies)
        if (this.activeCaseStudyCategory !== 'all') {
          return totalProjects
            .filter(caseStudy => {
              return caseStudy.category.toLowerCase().replace(/\s/g, '-') === this.activeCaseStudyCategory
            })
        } else {
          return totalProjects
        }
      },
      activeCategories() {
        return this.caseStudies
          .filter(caseStudy => caseStudy.active)
          .reduce((acc, csReduce) => {
            if (acc.indexOf(csReduce.category) === -1) {
              acc.push(csReduce.category)
            }
            return acc
          }, [])
      }
    }
  }
</script>

<style lang="scss">

</style>