<template>
  <section class="container">
    <siteHeader />
    <div
      v-for="(cs, index) in activeCaseStudy"
      :key="index">
      <div>
        <p><img :src="(cs.brandLogo !== '') ? cs.brandLogo : 'https://www.fillmurray.com/75/75'"></p>
        <p>Title: {{ cs.title }}</p>
        <p>Description: {{ cs.description }}</p>
        <p>Link: <a
          :href="cs.url">{{ cs.url }}</a></p>
        <p>Worked on Project: {{ cs.yearStart }} - <span v-if="cs.yearEnd !== ''">{{ cs.yearEnd }}</span><span v-else>Present</span></p>
      </div>
      <div
        :class="(cs.needsPassword) ? 'show' : ''"
        class="password-overlay">
        <p>Due to contractual restrictions, I am obligated to inform you that the work for this project was done while working for an pharmaceutical advertising agency. <span
          class="btn"
          @click="showCaseStudy">Click here</span> to confirm that you want to view this project.</p>
      </div>
    </div>
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
