<template>
  <section
    v-if="caseStudies"
    class="case-studies-listing">
    <nav>
      <ul>
        <li>Alexa Skills</li>
        <li>Conference Panels</li>
        <li>Email Campaigns</li>
        <li>iPad Presentations</li>
        <li>Mobile Apps</li>
        <li>Websites</li>
      </ul>
    </nav>
    <nuxt-link
      v-for="(cs, index) in featuredCaseStudies"
      :key="index"
      :to="cs.title | lowerKebab">
      <article
        :class="cs.category | lowerKebab">
        <img
          :src="cs.previewImg"
          role="presentation">
        <div>
          <img
            :src="cs.brandLogo"
            role="presentation">
          <h3>{{ cs.title }}</h3>
          <p>{{ cs.description }}</p>
        </div>
      </article>
    </nuxt-link>
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
      featuredCaseStudies() {
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
    }
  }
</script>

<style lang="scss" scoped>
  .case-studies-listing {
    a {
      text-decoration: none;
      h3,
      p {
        text-decoration: none;
      }
      &:nth-of-type(odd) {
        article {
          grid-template-areas:
          "i i i i i i i a a a a a"
          "i i i i i i i a a a a a"
          "i i i i i i i a a a a a"
          "i i i i i i i a a a a a"
          "i i i i i i i a a a a a"
          "i i i i i i i a a a a a";
        }
      }

      &:nth-of-type(even) {
        article {
          grid-template-areas:
          "a a a a a i i i i i i i"
          "a a a a a i i i i i i i"
          "a a a a a i i i i i i i"
          "a a a a a i i i i i i i"
          "a a a a a i i i i i i i"
          "a a a a a i i i i i i i";
        }
      }
    }

    aside {
      ul {
        text-align: center;
        li {
          display: inline-block;
          margin: 0 5px;
          padding: 0 10px;
        }
      }
    }

    article {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: repeat(6, 60px);
      margin: 0 0 10px 0;

      &:hover {
        background: antiquewhite;
      }

      > img {
        grid-area: i;
        object-fit: cover;
        width: 100%;
        height: 100%;
      }

      > div {
        grid-area: a;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(6, 60px);
        grid-template-areas:
        ". . . . . . . . . . . ."
        ". I I I I I I I I I I ."
        ". . . . . . . . . . . ."
        ". T T T T T T T T T T ."
        ". D D D D D D D D D D ."
        ". . . . . . . . . . . .";

        > img {
          grid-area: I;
          justify-self: center;
        }

        > h3 {
          grid-area: T;
          text-align: center;
        }

        > p {
          grid-area: D;
          text-align: center;
        }
      }
    }
  }

  @media (min-width: 576px) {

  }

  @media (min-width: 768px) {

  }

  @media (min-width: 1200px) {

  }

</style>