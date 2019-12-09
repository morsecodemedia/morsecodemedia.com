<template>
  <section
    v-if="caseStudies"
    class="case-studies"
  >
    <nuxt-link
      v-for="(cs, index) in featuredCaseStudies.splice(0,5)"
      :key="index"
      v-lazy-container="{ selector: 'img' }"
      :to="'/case-studies/' + cs.title | lowerKebab"
      :class="(index === 0) ? 'regular-1 regular-2 double-3 double-4 double-5' : (index === 2) ? 'vertical-4' : (index === 3) ? 'regular-1 horizonal-2 regular-3 regular-4 vertical-5' : (index === 4) ? 'regular-1 horizontal-2 horizontal-3 landscape-4 horizontal-5' : 'regular-1 regular-2 regular-3 regular-4 regular-5'"
      class="case-study"
      role="link"
    >
      <img
        :data-src="buildImage((cs.gallery.length) ? cs.gallery[Math.floor(Math.random()*cs.gallery.length)] : null)"
        :data-loading="loadingColors[Math.floor(Math.random()*loadingColors.length)]"
        role="presentation"
      >
      <div class="overlay">
        <h3>
          {{ cs.title }}
          <br>
          <span>&mdash; View Project &mdash;</span>
        </h3>
      </div>
      <div class="badges">
        <span
          v-if="cs.awards.length > 0"
          class="has-award"
        >
          <font-awesome-icon icon="trophy" />
        </span>

        <span
          v-if="cs.needsPassword"
          class="requires-password"
        >
          <font-awesome-icon icon="lock" />
        </span>
      </div>
    </nuxt-link>
  </section>
</template>

<script>
  import Vue from 'vue'
  import VueLazyload from 'vue-lazyload'
  import { mapGetters } from 'vuex'
  import { caseStudies } from '~/components/config.json'

  Vue.use(VueLazyload, {
    preLoad: 1.3,
    attempt: 1
  })

  export default {
    filters: {
      lowerKebab: function(term) {
        return term.toLowerCase().replace(/[.\s]/g, '-').replace(/[&#,+()$~%.'":*?<>{}]/g, '' )
      }
    },
    data() {
      return {
        caseStudies: caseStudies,
        loadingColors: [
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2PQ09P7DwACogGKJIM9sQAAAABJRU5ErkJggg=='
        ]
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
      },
      ...mapGetters('casestudies', [
        'showPwdProjects'
      ])
    },
    methods: {
      buildImage(imageSrc) {
        if (imageSrc) {
          if (imageSrc.substr(0,4) === 'http') {
            return imageSrc
          } else {
            return require(`../assets/images${imageSrc}`)
          }
        }
      }
    }
  }
</script>

<style lang="scss">

</style>