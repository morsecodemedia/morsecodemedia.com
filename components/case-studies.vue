<template>
  <section>
    <dl
      :class="breakPoint"
      class="case-studies-filter"
      role="menu">
      <dt @click="toggleFilters">Filters:</dt>
      <dd
        v-show="showFilters"
        :class="{ active: (activeCaseStudyCategory === 'all') }"
        role="switch"
        @click="activeCaseStudyCategory = 'all'">All Projects</dd>
      <dd
        v-for="(cat, index) in activeCategories"
        v-show="showFilters"
        :key="index"
        :class="{ active: (activeCaseStudyCategory === cat.toLowerCase().replace(/\s/g, '-')) }"
        role="switch"
        @click="activeCaseStudyCategory = cat.toLowerCase().replace(/\s/g, '-')">{{ cat }}</dd>
    </dl>
    <article
      v-if="filteredCaseStudies.length > 0 && displayCaseStudies"
      class="case-studies">
      <caseStudyListing
        v-for="(cs, i) in filteredCaseStudies"
        :key="cs.id"
        :style-classes="filteredCaseStudiesClasses[i]"
        :cs="cs" />
    </article>
  </section>
</template>

<script>
  import Vue from 'vue'
  import { mapGetters, mapMutations } from 'vuex'
  import { caseStudies, landingPages } from '~/components/config.json'
  import caseStudyListing from '~/components/case-study-listing'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  library.add(faLock, faLockOpen)
  Vue.component('font-awesome-icon', FontAwesomeIcon)

  export default {
    components: {
      caseStudyListing
    },
    data() {
      return {
        displayCaseStudies: false,
        caseStudies: caseStudies,
        landingPages: landingPages,
        activeCaseStudyCategory: 'all',
        twoUpClasses: ['horizontal-2'],
        twoUpDensity: 0.6,
        threeUpClasses: ['double-3', 'horizontal-3', 'vertical-3'],
        threeUpDensity: 0.5,
        fourUpClasses: ['double-4','horizontal-4','landscape-4','vertical-4'],
        fourUpDensity: 0.5,
        fiveUpClasses: ['double-5','horizontal-5','landscape-5','vertical-5'],
        fiveUpDensity: 0.8,
        specialOffset: {
          'double': 3,
          'horizontal': 1,
          'landscape': 3,
          'vertical': 1,
          'regular': 0
        },
        showFilters: false,
        breakPoint: ''
      }
    },
    computed: {
      filteredCaseStudies() {
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
        let activeLandingPages = this.landingPages
          .filter(landingPage => landingPage.active)

        activeProjects.sort((a,b) => {
          return b.yearStart - a.yearStart
        })

        let totalProjects = activeProjects.concat(sortedCaseStudies)

        for (let counter = 0; counter < activeLandingPages.length; counter++) {
          totalProjects.splice(Math.floor(Math.random()*totalProjects.length), 0, activeLandingPages[counter])
        }

        totalProjects = totalProjects.map(cs => {
          cs.img = (cs.gallery && cs.gallery.length) ? cs.gallery[Math.floor(Math.random()*cs.gallery.length)] : 'https://www.fillmurray.com/500/500'
          return cs
        })

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
          .filter(caseStudy => this.showPwdProjects || !caseStudy.needsPassword)
          .filter(caseStudy => caseStudy.gallery.length > 0)
          .reduce((acc, csReduce) => {
            if (acc.indexOf(csReduce.category) === -1) {
              acc.push(csReduce.category)
            }
            return acc
          }, [])
      },
      caseStudiesCount() {
        return this.filteredCaseStudies.length
      },
      filteredCaseStudiesClasses() {
        let classArray = []
        let twoUpSpecialNum = Math.round(this.caseStudiesCount / 2 * this.twoUpDensity)
        let threeUpSpecialNum = Math.round(this.caseStudiesCount / 3 * this.threeUpDensity)
        let fourUpSpecialNum = Math.round(this.caseStudiesCount / 4 * this.fourUpDensity)
        let fiveUpSpecialNum = Math.round(this.caseStudiesCount / 5 * this.fiveUpDensity)
        let twoUpSpecialClasses = []
        let threeUpSpecialClasses = []
        let fourUpSpecialClasses = []
        let fiveUpSpecialClasses = []

        let twoUpCountOffset = 0
        for (let counter = 0; counter < twoUpSpecialNum; ++counter) {
          let special = this.twoUpClasses[Math.floor(this.twoUpClasses.length * Math.random())]
          let specialPrefix = special.split('-')[0]
          twoUpCountOffset += this.specialOffset[specialPrefix]
          twoUpSpecialClasses.push(special)
        }

        let threeUpCountOffset = 0
        for (let counter = 0; counter < threeUpSpecialNum; ++counter) {
          let special = this.threeUpClasses[Math.floor(this.threeUpClasses.length * Math.random())]
          let specialPrefix = special.split('-')[0]
          threeUpCountOffset += this.specialOffset[specialPrefix]
          threeUpSpecialClasses.push(special)
        }

        let fourUpCountOffset = 0
        for (let counter = 0; counter < fourUpSpecialNum; ++counter) {
          let special = this.fourUpClasses[Math.floor(this.fourUpClasses.length * Math.random())]
          let specialPrefix = special.split('-')[0]
          fourUpCountOffset += this.specialOffset[specialPrefix]
          fourUpSpecialClasses.push(special)
        }

        let fiveUpCountOffset = 0
        for (let counter = 0; counter < fiveUpSpecialNum; ++counter) {
          let special = this.fiveUpClasses[Math.floor(this.fiveUpClasses.length * Math.random())]
          let specialPrefix = special.split('-')[0]
          fiveUpCountOffset += this.specialOffset[specialPrefix]
          fiveUpSpecialClasses.push(special)
        }

        let twoUpOffset = (this.caseStudiesCount + twoUpCountOffset) % 2
        let threeUpOffset = (this.caseStudiesCount + threeUpCountOffset) % 3
        let fourUpOffset = (this.caseStudiesCount + fourUpCountOffset) % 4
        let fiveUpOffset = (this.caseStudiesCount + fiveUpCountOffset) % 5

        switch (twoUpOffset) {
          case 1:
            twoUpSpecialClasses.push('horizontal-2')
            break
        }

        switch (threeUpOffset) {
          case 2:
            threeUpSpecialClasses.push('horizontal-3')
            break
          case 1:
            threeUpSpecialClasses.push('horizontal-3')
            threeUpSpecialClasses.push('vertical-3')
            break
        }

        switch (fourUpOffset) {
          case 3:
            fourUpSpecialClasses.push('horizontal-4')
            break
          case 2:
            fourUpSpecialClasses.push('horizontal-4')
            fourUpSpecialClasses.push('vertical-4')
            break
          case 1:
            fourUpSpecialClasses.push('double-4')
            break
        }

        switch (fiveUpOffset) {
          case 4:
            fiveUpSpecialClasses.push('horizontal-5')
            break
          case 3:
            fiveUpSpecialClasses.push('horizontal-5')
            fiveUpSpecialClasses.push('vertical-5')
            break
          case 2:
            fiveUpSpecialClasses.push('double-5')
            break
          case 1:
            fiveUpSpecialClasses.push('double-5')
            fiveUpSpecialClasses.push('horizontal-5')
            break
        }

        for (let i = 0; i < this.caseStudiesCount; ++i) {
          twoUpSpecialClasses[i] = (twoUpSpecialClasses[i]) ? twoUpSpecialClasses[i] : 'regular-2'
          threeUpSpecialClasses[i] = (threeUpSpecialClasses[i]) ? threeUpSpecialClasses[i] : 'regular-3'
          fourUpSpecialClasses[i] = (fourUpSpecialClasses[i]) ? fourUpSpecialClasses[i] : 'regular-4'
          fiveUpSpecialClasses[i] = (fiveUpSpecialClasses[i]) ? fiveUpSpecialClasses[i] : 'regular-5'
        }

        this.shuffleArray(twoUpSpecialClasses)
        this.shuffleArray(threeUpSpecialClasses)
        this.shuffleArray(fourUpSpecialClasses)
        this.shuffleArray(fiveUpSpecialClasses)

        for (let i = 0; i < 2; ++i) {
          twoUpSpecialClasses.push(twoUpSpecialClasses.splice(twoUpSpecialClasses.indexOf('regular-2'), 1))
        }

        for (let i = 0; i < 3; ++i) {
          threeUpSpecialClasses.push(threeUpSpecialClasses.splice(threeUpSpecialClasses.indexOf('regular-3'), 1))
        }

        for (let i = 0; i < 4; ++i) {
          fourUpSpecialClasses.push(fourUpSpecialClasses.splice(fourUpSpecialClasses.indexOf('regular-4'), 1))
        }

        for (let i = 0; i < 5; ++i) {
          fiveUpSpecialClasses.push(fiveUpSpecialClasses.splice(fiveUpSpecialClasses.indexOf('regular-5'), 1))
        }

        if (this.caseStudiesCount === 1) {
          classArray[0] = 'landscape-3 landscape-4 landscape-5'
        } else if (this.caseStudiesCount === 2) {
          classArray[0] = 'horizontal-3 horizontal-4 regular-5'
          classArray[1] = 'regular-3 horizontal-4 landscape-5'
        } else if (this.caseStudiesCount === 3) {
          classArray[0] = 'regular-4 horizontal-5'
          classArray[1] = 'horizontal-4 regular-5'
          classArray[2] = 'regular-4 horizontal-5'
        } else if (this.caseStudiesCount === 4) {
          classArray[0] = 'double-4 horizontal-5'
          classArray[1] = 'horizontal-4 regular-5'
          classArray[2] = 'vertical-4 regular-5'
          classArray[3] = 'landscape-4 vertical-5'
        } else if (this.caseStudiesCount === 5) {
          classArray[0] = 'double-4 double-5'
          classArray[1] = 'horizontal-4 regular-5'
          classArray[2] = 'vertical-4 regular-5'
          classArray[3] = 'landscape-4 vertical-5'
          classArray[4] = 'regular-4 horizontal-5'
        } else {
          for (let i = 0; i < this.caseStudiesCount; ++i) {
            classArray[i] = ''
            classArray[i] += ' regular-1'
            classArray[i] += ' ' + twoUpSpecialClasses[i]
            classArray[i] += ' ' + threeUpSpecialClasses[i]
            classArray[i] += ' ' + fourUpSpecialClasses[i]
            classArray[i] += ' ' + fiveUpSpecialClasses[i]
          }
        }
        return classArray
      },
      ...mapGetters('casestudies', [
        'showPwdProjects'
      ])
    },
    mounted() {
      this.displayCaseStudies = true
      this.checkBreakpoint()
    },
    methods: {
      shuffleArray: function(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
      },
      ...mapMutations('casestudies', [
        'toggleProjects'
      ]),
      toggleFilters: function() {
        if (this.breakPoint === 'mobile') {
          this.showFilters = !this.showFilters
        } else {
          this.showFilters = true
        }
      },
      checkBreakpoint: function() {
        let winWidth = window.innerWidth
        if (winWidth <= 991) {
          this.breakPoint = 'mobile'
        } else if (winWidth <= 1199) {
          this.breakPoint = 'tablet'
          this.showFilters = true
        } else if (winWidth >= 1200) {
          this.breakPoint = 'desktop'
          this.showFilters = true
        }
      }
    }
  }
</script>

<style lang="scss">
  .case-studies-filter {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-align: center;
    dt {
      margin: 10px 0 10px 10px;
      padding: 0;
      display: block;
      cursor: pointer;
      text-transform: uppercase;
    }
    dd {
      cursor: pointer;
      display: block;
      margin: 0 10px 10px;
      &:before,
      &:after {
        display: inline-block;
        opacity: 0;
        -webkit-transition: -webkit-transform 0.3s, opacity 0.2s;
        -moz-transition: -moz-transform 0.3s, opacity 0.2s;
        transition: transform 0.3s, opacity 0.2s;
      }
      &:before {
        margin-right: 10px;
        content: '[';
        -webkit-transform: translateX(20px);
        -moz-transform: translateX(20px);
        transform: translateX(20px);
      }
      &:after {
        margin-left: 10px;
        content: ']';
        -webkit-transform: translateX(-20px);
        -moz-transform: translateX(-20px);
        transform: translateX(-20px);
      }
      &:hover,
      &.active {
        text-decoration: none;
        &:before,
        &:after {
          opacity: 1;
          -webkit-transform: translateX(0px);
          -moz-transform: translateX(0px);
          transform: translateX(0px);
        }
      }
    }
  }
  @media (min-width: 768px) {

  }

  @media (min-width: 992px) {
    .case-studies-filter {
      text-align: left;
      dt {
        cursor: unset;
        display: inline-block;
      }
      dd {
        display: inline-block;
        margin: 0 10px;
      }
    }
  }

  @media (min-width: 1200px) {

  }
</style>
