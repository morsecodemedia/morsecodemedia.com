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
        v-for="(cs, index) in filteredCaseStudies"
        :key="index"
        :to="'/case-studies/' + cs.title | lowerKebab"
        :class="filteredCaseStudiesClasses[index]"
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
        activeCaseStudyCategory: 'all',
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
        }
      }
    },
    computed: {
      filteredCaseStudies() {
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
        return this.filteredCaseStudies.length
      },
      filteredCaseStudiesClasses() {
        let classArray = []
        let threeUpSpecialNum = Math.round(this.caseStudiesCount / 3 * this.threeUpDensity)
        let fourUpSpecialNum = Math.round(this.caseStudiesCount / 4 * this.fourUpDensity)
        let fiveUpSpecialNum = Math.round(this.caseStudiesCount / 5 * this.fiveUpDensity)
        let threeUpSpecialClasses = []
        let fourUpSpecialClasses = []
        let fiveUpSpecialClasses = []

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

        let threeUpOffset = (this.caseStudiesCount + threeUpCountOffset) % 3
        let fourUpOffset = (this.caseStudiesCount + fourUpCountOffset) % 4
        let fiveUpOffset = (this.caseStudiesCount + fiveUpCountOffset) % 5

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
          threeUpSpecialClasses[i] = (threeUpSpecialClasses[i]) ? threeUpSpecialClasses[i] : 'regular-3'
          fourUpSpecialClasses[i] = (fourUpSpecialClasses[i]) ? fourUpSpecialClasses[i] : 'regular-4'
          fiveUpSpecialClasses[i] = (fiveUpSpecialClasses[i]) ? fiveUpSpecialClasses[i] : 'regular-5'
        }

        this.shuffleArray(threeUpSpecialClasses)
        this.shuffleArray(fourUpSpecialClasses)
        this.shuffleArray(fiveUpSpecialClasses)

        for (let i = 0; i < 3; ++i) {
          threeUpSpecialClasses.push(threeUpSpecialClasses.splice(threeUpSpecialClasses.indexOf('regular-3'), 1))
        }

        for (let i = 0; i < 4; ++i) {
          fourUpSpecialClasses.push(fourUpSpecialClasses.splice(fourUpSpecialClasses.indexOf('regular-4'), 1))
        }

        for (let i = 0; i < 5; ++i) {
          fiveUpSpecialClasses.push(fiveUpSpecialClasses.splice(fiveUpSpecialClasses.indexOf('regular-5'), 1))
        }

        for (let i = 0; i < this.caseStudiesCount; ++i) {
          classArray[i] = ''
          classArray[i] += ' regular-1'
          classArray[i] += ' regular-2'
          classArray[i] += ' ' + threeUpSpecialClasses[i]
          classArray[i] += ' ' + fourUpSpecialClasses[i]
          classArray[i] += ' ' + fiveUpSpecialClasses[i]
        }
        return classArray
      }
    },
    methods: {
      shuffleArray: function(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
      }
    }
  }
</script>

<style lang="scss">

</style>