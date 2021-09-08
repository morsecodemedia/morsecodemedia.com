<template>
  <section
    v-if="caseStudies"
    class="link-bar"
  >
    <nuxt-link
      to="/case-studies/"
    >
      See More Work &raquo;
    </nuxt-link>
  </section>
</template>

<script>
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

  export default {
    name: 'LinkBar',
    data() {
      return {
        caseStudies: []
      }
    },
    mounted() {
      this.concatCaseStudies()
    },
    methods: {
      concatCaseStudies: function() {
        this.caseStudies = aerieCaseStudies.concat(alexaCaseStudies, endoMensHealthCaseStudies, endoCaseStudies, entellusCaseStudies, geoblueCaseStudies, ikeaCaseStudies, inrikiCaseStudies, ipipelineCaseStudies, joeHandCaseStudies, jspCaseStudies, merionRealtyCaseStudies, metuchenCaseStudies, patravelCaseStudies, radicavaCaseStudies, tunnellCaseStudies, usarlCaseStudies, walmartCaseStudies, xdcCaseStudies, xpdCaseStudies)
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
      text-decoration: underline #56a68d;
      text-transform: uppercase;
    }
  }
</style>
