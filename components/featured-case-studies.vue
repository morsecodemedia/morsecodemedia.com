<template>
  <section
    v-if="caseStudies"
    class="featured-case-studies">
    <!-- <nuxt-link
      v-for="(cs, index) in featuredCaseStudies"
      v-if="index < 5"
      :key="index"
      :to="'/case-studies/' + cs.title | lowerKebab"> -->
    <div
      v-for="(cs, index) in featuredCaseStudies"
      v-if="index < 5"
      :key="index"
      :class="(index === 0) ? 'big' : (index === 4) ? 'horizontal' : ''"
      class="case-study">
      <img
        :src="cs.previewImg"
        role="presentation">
      <div class="overlay">
        <h3>{{ cs.title }}</h3>
      </div>
    </div>
    <!-- </nuxt-link> -->
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

<style lang="scss" scoped>
  .featured-case-studies {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(153px, 1fr));
    grid-auto-rows: 75px;
    grid-auto-flow: dense;
    > div.case-study {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      position: relative;
      > img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        -webkit-transition: all 0.35s;
        transition: all 0.35s;
      }
      .overlay {
        position: absolute;
        overflow: hidden;
        width: 80%;
        height: 80%;
        left: 10%;
        top: 10%;
        border-bottom: 1px solid #FFF;
        border-top: 1px solid #FFF;
        -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
        transition: opacity 0.35s, transform 0.35s;
        -webkit-transform: scale(0,1);
        -ms-transform: scale(0,1);
        transform: scale(0,1);
        h3 {
          text-transform: uppercase;
          text-align: center;
          position: relative;
          justify-self: center;
          font-size: 22px;
          background-color: transparent;
          color: #FFF;
          padding: 1em 0;
          opacity: 0;
          filter: alpha(opacity=0);
          -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
          transition: opacity 0.35s, transform 0.35s;
          -webkit-transform: translate3d(0,-100%,0);
          transform: translate3d(0,-100%,0);
        }
        a,
        p {
          color: #FFF;
          padding: 1em 0;
          opacity: 0;
          filter: alpha(opacity=0);
          -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
          transition: opacity 0.35s, transform 0.35s;
          -webkit-transform: translate3d(0,100%,0);
          transform: translate3d(0,100%,0);
        }
      }
      &:hover {
        .overlay {
          opacity: 1;
          filter: alpha(opacity=100);
          -webkit-transform: scale(1);
          -ms-transform: scale(1);
          transform: scale(1);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        img {
          filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.6" /><feFuncG type="linear" slope="0.6" /><feFuncB type="linear" slope="0.6" /></feComponentTransfer></filter></svg>#filter');
          filter: brightness(0.6);
          -webkit-filter: brightness(0.6);
        }
        a,
        p,
        h3 {
          opacity: 1;
          filter: alpha(opacity=100);
          -webkit-transform: translate3d(0,0,0);
          transform: translate3d(0,0,0);
        }
      }
    }
    .big {
      grid-column: span 2;
      grid-row: span 2;
    }
  }
  .link-bar {
    background: white;
    padding: 45px 25px;
    a {
      color: #222;
      font-size: 24px;
      text-decoration: none;
      text-transform: uppercase;
    }
  }

  @media (min-width: 576px) {
    .featured-case-studies {
      grid-template-columns: repeat(auto-fit, minmax(253px, 1fr));
      grid-auto-rows: 126px;
    }
  }

  @media (min-width: 768px) {
    .featured-case-studies {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-auto-rows: 250px;
    }
  }

  @media (min-width: 1200px) {
    .featured-case-studies .horizontal {
      grid-column: span 1;
      grid-row: span 1;
    }
  }

  @media (min-width: 910px) and (max-width: 1214px) {
    .featured-case-studies .horizontal {
      grid-column: span 2;
      grid-row: span 1;
    }
  }
</style>