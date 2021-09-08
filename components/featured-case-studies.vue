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
  import { aerieCaseStudies } from '~/assets/configs/aerie-case-studies.json'
  import { alexaCaseStudies } from '~/assets/configs/alexa-case-studies.json'
  import { endoMensHealthCaseStudies } from '~/assets/configs/emh-case-studies.json'
  import { endoCaseStudies } from '~/assets/configs/endo-case-studies.json'
  import { entellusCaseStudies } from '~/assets/configs/entellus-case-studies.json'
  import { geoblueCaseStudies } from '~/assets/configs/geoblue-case-studies.json'
  import { ikeaCaseStudies } from '~/assets/configs/ikea-case-studies.json'
  import { inrikiCaseStudies } from '~/assets/configs/inriki-case-studies.json'
  import { ipipelineCaseStudies } from '~/assets/configs/ipipeline-case-studies.json'
  import { joeHandCaseStudies } from '~/assets/configs/joe-hand-case-studies.json'
  import { jspCaseStudies } from '~/assets/configs/jsp-case-studies.json'
  import { merionRealtyCaseStudies } from '~/assets/configs/mcr-case-studies.json'
  import { metuchenCaseStudies } from '~/assets/configs/metuchen-case-studies.json'
  import { patravelCaseStudies } from '~/assets/configs/patravel-case-studies.json'
  import { radicavaCaseStudies } from '~/assets/configs/radicava-case-studies.json'
  import { tunnellCaseStudies } from '~/assets/configs/tunnell-case-studies.json'
  import { usarlCaseStudies } from '~/assets/configs/usarl-case-studies.json'
  import { walmartCaseStudies } from '~/assets/configs/walmart-case-studies.json'
  import { xdcCaseStudies } from '~/assets/configs/xdc-case-studies.json'
  import { xpdCaseStudies } from '~/assets/configs/xpd-case-studies.json'

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
        caseStudies: [],
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
    mounted() {
      this.concatCaseStudies()
    },
    methods: {
      concatCaseStudies: function() {
        this.caseStudies = aerieCaseStudies.concat(alexaCaseStudies, endoMensHealthCaseStudies, endoCaseStudies, entellusCaseStudies, geoblueCaseStudies, ikeaCaseStudies, inrikiCaseStudies, ipipelineCaseStudies, joeHandCaseStudies, jspCaseStudies, merionRealtyCaseStudies, metuchenCaseStudies, patravelCaseStudies, radicavaCaseStudies, tunnellCaseStudies, usarlCaseStudies, walmartCaseStudies, xdcCaseStudies, xpdCaseStudies)
      },
      buildImage(imageSrc) {
        if (imageSrc) {
          if (imageSrc.substr(0,4) === 'http') {
            return imageSrc
          } else {
            return require(`/static/images${imageSrc}`)
          }
        }
      }
    }
  }
</script>

<style lang="scss">

</style>