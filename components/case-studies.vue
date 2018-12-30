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
        :to="'/case-studies/' + cs.title | lowerKebab"
        :class="(index === 0) ? 'double' :
        (index % 2) ? 'horizontal' :
        (index % 3) ? 'vertical' :
        (index % 5) ? 'landscape' :
        (index % 7) ? 'skyscraper' : ''"
        class="case-study">
        <img
          :src="(cs.previewImg !== '') ? cs.previewImg : 'https://www.fillmurray.com/500/500'"
          role="presentation">
        <div class="overlay">
          <h3>{{ cs.title }}</h3>
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
    computed: {
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
      },
      caseStudiesCount() {
        return this.allCaseStudies.length
      }
    }
  }
</script>

<style lang="scss">
  // NOTES
  // (colxrow)
  // regular: 1x1
  // double: 2x2
  // horizontal: 2x1
  // vertical: 1x2
  // landscape: 4x1
  // skyscraper: 1x4
  // 1:
  //   1 landscape
  // 2:
  //   2 double
  //   2 horizontal
  // 3:
  //   1 double, 2 horizontal
  //   1 double, 2 vertical
  //   2 double, 1 landscape
  // 4:
  //   1 double, 1 vertical, 2 regular
  //   2 double, 2 landscape
  //   4 regular
  //   1 vertical, 3 horizontal

</style>