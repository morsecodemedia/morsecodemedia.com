<template>
  <section class="container">
    <siteHeader />
    <main
      v-lazy-container="{ selector: 'img' }"
      v-for="(cs, index) in activeCaseStudy"
      :key="index">

      <div class="case-study-campaign-hero">
        <div class="case-study-campaign-hero-gradient" />
      </div>
      <div
        :style="{'background-color': cs.overview.bgColor}"
        class="case-study-details">
        <header class="case-study-intro-copy">
          <p
            v-if="cs.client"
            :style="{color: cs.overview.clientColor}"
            class="client-name">{{ cs.client }}</p>
          <h1
            :style="{color: cs.overview.titleColor}"
            class="case-study-title">{{ cs.title }}</h1>
          <h2
            v-if="cs.overview.description"
            :style="{color: cs.overview.descriptionColor}"
            class="case-study-overview"
            v-html="cs.overview.description" />
          <p
            :style="{color: cs.overview.descriptionColor}"
            class="case-study-meta">
            {{ cs.category }} //
            {{ cs.yearStart }} -
            <span
              v-if="cs.yearEnd !== ''"
              :style="{color: cs.overview.descriptionColor}">{{ cs.yearEnd }}</span>
            <span
              v-else
              :style="{color: cs.overview.descriptionColor}">Present</span>
          </p>
          <p>
            <a
              :style="{color: cs.overview.titleColor}"
              :href="cs.url"
              target="_blank"
              rel="noopener">{{ cs.url }}</a>
          </p>
        </header>
        <article>
          <header>
            <h3 :style="{color: cs.overview.titleColor}">Challenge</h3>
          </header>
          <div class="content-container">
            <p>The original website was built as a WordPress site. Unfortunately, the way in which it was built included altering the 'core system', leaving it unable to be updated. This meant security vulnerabilities were unable to be addressed causing the site to be hacked multiple times over the years. The fragile state of the site also meant that making minor content updates (ie, creating new pages) a more cumbersome task than it needed to be.</p>
            <p>Another challenge with the website was the 'League Manager', was a partially built out plugin that required the deletion of the prior year's teams, conferences, standings, etc. to set up the upcoming season's game management.</p>
            <p>The last challenge was that the site was not responsive.</p>
          </div>
        </article>

        <videoPlayer
          v-if="cs.video && cs.video.src"
          :video="cs.video.src"/>
        <div
          v-else
          style="overflow:hidden; margin: 20px auto;">
          <img
            :data-src="buildImage(cs.gallery[0])"
            :data-loading="loadingColors[Math.floor(Math.random()*loadingColors.length)]"
            style="width: 100%; object-fit: contain;"
            alt=""
            role="img">
        </div>

        <article
          style="margin: 45px 0;">
          <header>
            <h3 :style="{color: cs.overview.titleColor}">Solution</h3>
          </header>
          <div class="content-container">
            <p>First and foremost, we addressed the security concerns, moving the site into ProcessWire. We created a new League Manager to be an integral part of the site's content and structure. It all starts with the teams. Each team has their own page, with history, plater roster, schedule and more. Due to the scalability of league, the number of teams and conferences varied from season to season. We took this into consideration, allowing admins to define the conferences and which teams were in each for each year. By using the teams' 'ids' as references, we were able to create a history of previous years, despite if a team didn't play certain years, or was zoned into a different conference.</p>
            <p>The system also allowed for News and Video Library sections, complete with tag management. This tagging system allowed for relevant articles and videos to be dynamically pulled into the team pages as well.</p>
            <p>Another new offering provided, was a portal for users to find out how to get involved with the league, as well as current members to be able to pay their membership dues.</p>
          </div>
        </article>

        <article>
          <header>
            <h3 :style="{color: cs.overview.titleColor}">Results</h3>
          </header>
          <div class="content-container">
            <p>Since the launch of the site, it is no longer a victim of malicious attacks. Updates are able to be managed by content administrations, and no longer require a developer. Users have a more complete and engaging experience no matter which device or browser they are viewing the site.</p>
          </div>
        </article>

        <article
          v-if="cs.awards.length">
          <header>
            <h3 :style="{color: cs.overview.titleColor}">Accolades</h3>
          </header>
          <div class="content-container">
            <p
              v-for="(award, index) in cs.awards"
              :key="index"
              class="accolades">
            <span class="award-organization">{{ award.organization }}</span> {{ award.year }} {{ award.award }}</p>
          </div>
        </article>

        <div
          style="overflow:hidden; margin: 20px auto;">
          <img
            :data-src="buildImage(cs.gallery[0])"
            :data-loading="loadingColors[Math.floor(Math.random()*loadingColors.length)]"
            style="width: 100%; object-fit: contain;"
            alt=""
            role="img">
        </div>
        <div
          style="overflow:hidden; margin: 20px auto;">
          <img
            :data-src="buildImage(cs.gallery[1])"
            :data-loading="loadingColors[Math.floor(Math.random()*loadingColors.length)]"
            style="width: 100%; object-fit: contain;"
            alt=""
            role="img">
        </div>
        <div
          style="overflow:hidden; margin: 20px auto;">
          <img
            :data-src="buildImage(cs.gallery[2])"
            :data-loading="loadingColors[Math.floor(Math.random()*loadingColors.length)]"
            style="width: 100%; object-fit: contain;"
            alt=""
            role="img">
        </div>

        <caseStudyInsitu
          v-if="cs.insitu.img.length && breakPoint === 'desktop'"
          :insitu="cs.insitu" />

      </div>

      <passwordProject
        v-if="cs.needsPassword"
        :info="{id:cs.id,title:cs.title}" />

    </main>
    <siteFooter />
  </section>
</template>

<script>
  import Vue from 'vue'
  import VueLazyload from 'vue-lazyload'
  import config from '~/components/config.json'
  import siteHeader from '~/components/header'
  import siteFooter from '~/components/footer'
  import passwordProject from '~/components/password-project'
  import caseStudyInsitu from '~/components/case-study-insitu'

  Vue.use(VueLazyload, {
    preLoad: 1.3,
    attempt: 1
  })

  export default {
    components: {
      siteHeader,
      caseStudyInsitu,
      passwordProject,
      siteFooter
    },
    data() {
      return {
        caseStudies: config.caseStudies,
        loadingColors: [
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2PQ09P7DwACogGKJIM9sQAAAABJRU5ErkJggg=='
        ],
        breakPoint: ''
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
    mounted() {
      this.checkBreakpoint()
    },
    methods: {
      buildImage(imageSrc) {
        if (imageSrc) {
          if (imageSrc.substr(0,4) === 'http') {
            return imageSrc
          } else {
            return require(`../../assets/images${imageSrc}`)
          }
        }
      },
      checkBreakpoint: function() {
        let winWidth = window.innerWidth
        if (winWidth <= 991) {
          this.breakPoint = 'mobile'
        } else if (winWidth <= 1199) {
          this.breakPoint = 'tablet'
        } else if (winWidth >= 1200) {
          this.breakPoint = 'desktop'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .case-study-details {
    // background-color: rgb(26, 27, 105);
    padding: 20px;
  }
  .case-study-campaign-hero {
    position: relative;
    height: 75vh;
    background: url('http://images.performgroup.com/di/library/sportal_com_au/f8/be/tonga-rlwc_12djhscro2zgt1lgcakr0g00z3.jpg') right top no-repeat;
    background-size: cover;
    margin: -20px 0;
  }
  .case-study-campaign-hero-gradient {
    background: rgba(26,27,105,1);
    background: -moz-linear-gradient(45deg, rgba(26,27,105,1) 0%, rgba(26,27,105,0.49) 61%, rgba(26,27,105,0.18) 86%, rgba(26,27,105,0) 100%);
    background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(26,27,105,1)), color-stop(61%, rgba(26,27,105,0.49)), color-stop(86%, rgba(26,27,105,0.18)), color-stop(100%, rgba(26,27,105,0)));
    background: -webkit-linear-gradient(45deg, rgba(26,27,105,1) 0%, rgba(26,27,105,0.49) 61%, rgba(26,27,105,0.18) 86%, rgba(26,27,105,0) 100%);
    background: -o-linear-gradient(45deg, rgba(26,27,105,1) 0%, rgba(26,27,105,0.49) 61%, rgba(26,27,105,0.18) 86%, rgba(26,27,105,0) 100%);
    background: -ms-linear-gradient(45deg, rgba(26,27,105,1) 0%, rgba(26,27,105,0.49) 61%, rgba(26,27,105,0.18) 86%, rgba(26,27,105,0) 100%);
    background: linear-gradient(45deg, rgba(26,27,105,1) 0%, rgba(26,27,105,0.49) 61%, rgba(26,27,105,0.18) 86%, rgba(26,27,105,0) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1a1b69', endColorstr='#1a1b69', GradientType=1 );
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
  h1 {
    // color: rgb(229, 0, 46);
    font-size: calc(72px/1.5);
    margin-bottom: 15px;
  }
  h2 {
    // color: $white;
    font-size: calc(48px/1.5);
    margin-bottom: 15px;
  }
  h3 {
    // color: rgb(229, 0, 46);
  }
  p {
    color: white;
    &.client-name {
      margin-bottom: 10px;
    }
    &.case-study-meta {
      font-size: .9em;
      opacity: .5;
      margin-bottom: unset;
      span {
        font-size: .9em;
      }
    }
    &.accolades {
      font-size: .9em;
      .award-organization {
        display: block;
        font-weight: 700;
        &:after {
          content: "\A";
          white-space: pre;
        }
      }
    }
    a {
      font-size: 14px;
      // color: rgb(229, 0, 46);
    }
  }

  @media (min-width: 768px) {
    h2 {
      max-width: 75vw;
    }
  }
  @media (min-width: 992px) {
    .case-study-details {
      padding: 20px 4rem;
    }
    h2 {
      max-width: 55vw;
    }
    article {
      display: inline-flex;
      header {
        width: 25vw;
      }
      .content-container {
        max-width: 65vw;
      }
    }
  }
  @media (min-width: 1200px) {
    h2 {
      max-width: 40vw;
    }
    article {
      .content-container {
        max-width: 50vw;
      }
    }
  }
</style>