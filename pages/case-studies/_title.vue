<template>
  <section class="container">
    <siteHeader />
    <main
      v-for="(cs, index) in activeCaseStudy"
      :key="index"
      v-lazy-container="{ selector: 'img' }"
    >
      <div
        :style="{'background-image': 'url('+buildImage(cs.campaignImg)+')'}"
        class="case-study-campaign-hero"
      />
      <div
        :style="{'background-color': cs.overview.bgColor}"
        class="case-study-details"
      >
        <header
          style="margin-top: -100px; position: relative;"
          class="case-study-intro-copy"
        >
          <p
            v-if="cs.client"
            :style="{color: cs.overview.clientColor}"
            class="client-name"
          >
            {{ cs.client }}
          </p>
          <h1
            :style="{color: cs.overview.titleColor}"
            class="case-study-title"
          >
            {{ cs.title }}
          </h1>
          <h2
            v-if="cs.overview.description"
            :style="{color: cs.overview.descriptionColor}"
            class="case-study-overview"
            v-html="cs.overview.description"
          />
          <p
            :style="{color: cs.overview.descriptionColor}"
            class="case-study-meta"
          >
            {{ cs.category }} //
            {{ cs.yearStart }} -
            <span
              v-if="cs.yearEnd !== ''"
              :style="{color: cs.overview.descriptionColor}"
            >{{ cs.yearEnd }}</span>
            <span
              v-else
              :style="{color: cs.overview.descriptionColor}"
            >Present</span>
          </p>
          <p>
            <a
              :style="{color: cs.overview.titleColor}"
              :href="cs.url"
              target="_blank"
              rel="noopener"
            >{{ cs.url }}</a>
          </p>
        </header>
        <article
          v-if="cs.description.length"
        >
          <header>
            <h3 :style="{color: cs.overview.titleColor}">
              {{ cs.description[0].title }}
            </h3>
          </header>
          <div
            :style="{color: cs.overview.copyColor}"
            class="content-container"
            v-html="cs.description[0].description"
          />
        </article>

        <videoPlayer
          v-if="cs.video && cs.video.src"
          :video="cs.video.src"
        />
        <div
          v-else-if="cs.gallery.length > 0"
          style="overflow:hidden; max-width: 900px; margin: 40px auto;"
        >
          <img
            :data-src="buildImage(cs.gallery[0])"
            :data-loading="loadingColors[Math.floor(Math.random()*loadingColors.length)]"
            style="width: 100%; object-fit: contain;"
            alt=""
            role="img"
          >
        </div>

        <article
          v-for="(des, descriptionIndex) in activeDescription"
          :key="descriptionIndex"
          style="margin: 45px 0;"
        >
          <header>
            <h3
              v-if="des.type === 'description' && des.title"
              :style="{color: cs.overview.titleColor}"
            >
              {{ des.title }}
            </h3>
          </header>
          <div
            v-if="des.type === 'description' && des.description"
            :style="{color: cs.overview.copyColor}"
            class="content-container"
            v-html="des.description"
          />
        </article>

        <article
          v-if="cs.awards.length"
          style="margin: 45px 0;"
        >
          <header>
            <h3 :style="{color: cs.overview.titleColor}">
              Accolades
            </h3>
          </header>
          <div class="content-container">
            <p
              v-for="(award, awardIndex) in cs.awards"
              :key="awardIndex"
              :style="{color: cs.overview.copyColor}"
              class="accolades"
            >
              <span class="award-organization">{{ award.organization }}</span> {{ award.year }} {{ award.award }}
            </p>
          </div>
        </article>

        <no-ssr>
          <siema
            v-if="cs.gallery.length > 2"
            ref="siema"
            :options="siemaOptions"
            auto-play
            class="siema"
          >
            <div
              v-for="(img, galleryIndex) in cs.gallery"
              :key="galleryIndex"
              class="slide"
            >
              <img
                :src="buildImage(img)"
                style="width: 100%; object-fit: contain;"
                alt=""
                role="img"
              >
            </div>
          </siema>
        </no-ssr>

        <caseStudyInsitu
          v-if="cs.insitu.img.length && breakPoint === 'desktop'"
          :insitu="cs.insitu"
        />
      </div>

      <passwordProject
        v-if="cs.needsPassword"
        :info="{id:cs.id,title:cs.title}"
      />
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
  import videoPlayer from '~/components/video-player'
  import passwordProject from '~/components/password-project'
  import caseStudyInsitu from '~/components/case-study-insitu'

  Vue.use(VueLazyload, {
    preLoad: 1.3,
    attempt: 1
  })

  export default {
    components: {
      siteHeader,
      videoPlayer,
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
        breakPoint: '',
        siemaOptions: {
          duration: 200,
          easing: 'ease-out',
          perPage: 1,
          startIndex: 0,
          draggable: true,
          multipleDrag: true,
          threshold: 20,
          loop: true,
          rtl: false
        }
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
        let returnArray = []
        for (var i=1; i < Math.max(description.length); ++i) {
          if (description[i] && description[i].description !== '') {
            returnArray.push({
              'type': 'description',
              'title': description[i].title,
              'description': description[i].description,
              'fontColor': description[i].fontColor,
              'bgColor': description[i].bgColor
              })
          }
        }
        return returnArray
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
    padding: 20px;
  }
  .case-study-campaign-hero {
    position: relative;
    height: 75vh;
    background-position: right center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: -20px 0;
  }
  h1 {
    font-size: calc(72px/1.5);
    margin-bottom: 15px;
  }
  h2 {
    font-size: calc(48px/1.5);
    margin-bottom: 15px;
  }
  p {
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
      color: inherit;
      font-size: 14px;
      &:visited,
      &:active,
      &:hover {
        color: inherit;
      }
    }
  }

  .siema {
    margin: 20px auto;
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
    .siema {
      max-width: 900px;
      margin: 20px auto 40px;
    }
  }
  @media (min-width: 1200px) {
    .case-study-campaign-hero {
      height: 80vh;
    }
    h2 {
      max-width: 40vw;
    }
    article {
      .content-container {
        max-width: 50vw;
      }
    }
    .siema {
      max-width: 1100px;
    }
  }
</style>