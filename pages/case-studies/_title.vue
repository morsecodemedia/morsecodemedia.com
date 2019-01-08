<template>
  <section class="container">
    <siteHeader />
    <div
      v-for="(cs, index) in activeCaseStudy"
      :key="index">
      <div>
        <div class="case-study-intro">
          <img :src="(cs.brandLogo !== '') ? cs.brandLogo : 'https://www.fillmurray.com/75/75'">
          <h1>{{ cs.title }}</h1>
          <h2>{{ cs.overview }}</h2>
          <p>Link: <a
            :href="cs.url">{{ cs.url }}</a></p>
          <p>Worked on Project: {{ cs.yearStart }} - <span v-if="cs.yearEnd !== ''">{{ cs.yearEnd }}</span><span v-else>Present</span></p>
        </div>

        <div class="description-container">
          <div
            v-for="(des, index) in activeDescription"
            :key="index">

            <h3
              v-if="des.type === 'description' && des.title">{{ des.title }} </h3>
            <p
              v-if="des.type === 'description' && des.description"
              v-html="des.description" />

            <img
              v-if="des.type === 'image' && des.src"
              :src="des.src">
          </div>
        </div>

        <div
          v-if="cs.awards.length"
          clas="case-study-awards">
          <h3>Awards</h3>
          <ul>
            <li
              v-for="(award, index) in cs.awards"
              :key="index">
              {{ award.year }} {{ award.award }} from {{ award.organization }}
            </li>
          </ul>
        </div>
      </div>

      <div
        :class="(cs.needsPassword) ? 'show' : ''"
        class="password-overlay">
        <p>Due to contractual restrictions, I am obligated to inform you that the work for this project was done while working for an pharmaceutical advertising agency. <span
          class="btn"
          @click="showCaseStudy">Click here</span> to confirm that you want to view this project.</p>
      </div>
    </div>
    <nuxt-link
      :to="'/case-studies/'">Back To Case Studies</nuxt-link>
    <siteFooter />
  </section>
</template>

<script>
  import config from '~/components/config.json'
  import siteHeader from '~/components/header.vue'
  import siteFooter from '~/components/footer.vue'

  export default {
    components: {
      siteHeader,
      siteFooter
    },
    data() {
      return {
        caseStudies: config.caseStudies
      }
    },
    computed: {
      activeCaseStudy() {
        return this.caseStudies
          .filter(caseStudy =>
            this.$route.params.title === caseStudy.title.toLowerCase()
              .replace(/[.\s]/g, '-')
              .replace(/[&#,+()$~%'":*?<>{}]/g, '' ))
      },
      activeDescription() {
        let description = this.activeCaseStudy[0].description || []
        let images = this.activeCaseStudy[0].gallery || []
        let returnArray = []
        for (var i=0; i < Math.max(description.length, images.length); ++i) {
          if (description[i]) {
            returnArray.push({
              'type': 'description',
              'title': description[i].title,
              'description': description[i].description
              })
          }
          if (images[i]) {
            returnArray.push({
              'type': 'image',
              'src': images[i]
            })
          }
        }
        return returnArray
      }
    },
    methods: {
      showCaseStudy: function() {
        let overlay = document.getElementsByClassName('password-overlay')
        for (var i=0; i < overlay.length; ++i) {
          overlay[i].classList.remove('show')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .password-overlay {
    display: none;
    position: absolute;
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,.95);
    color: white;
    top: 0px;
    left: 0px;
    z-index: 1;
    &.show {
      display: flex;
    }
    p {
      width: 80vw;
      .btn {
        display: flex;
        background: red;
        padding: 10px;
        margin: 10px 0;
        justify-self: center;
        align-self: center;
        color: white;
        border-radius: 5px;
        cursor: pointer;
        &:before {
          content: "\A";
          white-space: pre;
        }
        &:after {
          content: "\A";
          white-space: pre;
        }
      }
    }
  }

  .description-container {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-auto-rows: 1fr;
    // grid-gap: 15px;
    div {
      grid-column: span 1;
      grid-row: span 1;
      overflow: hidden;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      &:nth-of-type(1){ background-color: #EEE; }
      &:nth-of-type(3){ background-color: #EAEAEA; }
      &:nth-of-type(5){ background-color: #EEE; }
      h3 {
        text-transform: uppercase;
        font-size: 32px;
      }
      p{
        padding: 0 20px;
      }
      img {
        object-fit: cover;
        object-position: center center;
        height: 100%;
      }
    }
  }

  @media (min-width: 768px) {
    .password-overlay {
      p {
        width: 50vw;
      }
    }
  }

  @media (min-width: 992px) {
    .password-overlay {
      p {
        width: 50vw;
      }
    }
  }

  @media (min-width: 1200px) {
    .password-overlay {
      p {
        width: 30vw;
      }
    }
  }
</style>
