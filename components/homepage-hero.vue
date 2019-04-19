<template>
  <section
    v-lazy-container="{ selector: 'img' }"
    :class="glitchClass"
    class="homepage-hero">
    <article class="hero-copy">
      <header>
        <h1 class="empty-styles">
          <span
            class="hero-copy__small">Award-winning developer</span>
          <span
            class="hero-copy__large">Brandon Morse</span>
          <span
            class="hero-copy__normal">I have a <strong>passion to innovate</strong> and bring beautifully designed <strong>experiences to life</strong> through coding, testing, and <strong>just the right amount of technical magic.</strong>
            <a
              href="/about/"
              class="hero-copy__link">More about me &raquo;</a></span>
        </h1>
      </header>
    </article>
    <img
      v-if="showHeadshot"
      :data-src="buildImage(headshotImg)"
      :data-loading="loadingColors[Math.floor(Math.random()*loadingColors.length)]"
      class="headshot hero-image"
      alt="A headshot of Brandon Morse"
      role="presentation">
    <glitch
      v-else
      @updatedGlitch="whichGlitch" />
  </section>
</template>

<script>
  import Vue from 'vue'
  import VueLazyload from 'vue-lazyload'
  import glitch from '~/components/glitch-image'
  import { about } from '~/components/config.json'
  import { setTimeout } from 'timers'

  Vue.use(VueLazyload, {
    preLoad: 1.3,
    attempt: 1
  })

  export default {
    name: 'HomeHero',
    components: {
      glitch
    },
    data() {
      return {
        showHeadshot: true,
        headshotImg: about.headshot,
        glitchClass: '',
        loadingColors: [
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2PQ09P7DwACogGKJIM9sQAAAABJRU5ErkJggg=='
        ]
      }
    },
    mounted() {
      this.toggleHeadshot()
      console.log('set timeout')
    },
    methods: {
      buildImage(imageSrc) {
        if (imageSrc) {
          if (imageSrc.substr(0,4) === 'http') {
            return imageSrc
          } else {
            return require(`../assets/images${imageSrc}`)
          }
        }
      },
      whichGlitch(event) {
        this.glitchClass = event
      },
      toggleHeadshot() {
        setTimeout(() => {
          this.showHeadshot = false
        }, 5000)
        console.log('i made it here')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .homepage-hero {
    min-height: 75vh;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    margin-top: 75px;
    .hero-image,
    .glitch-image-container {
      display: none;
    }
    .hero-copy {
      align-self: center;
      grid-row-start: 1;
      grid-row-end: 2;
      grid-column-start: 1;
      grid-column-end: 13;
      padding: 25px;
      padding: 45px 10px;
      h1 {
        &.empty-styles {
          margin: 0;
          padding: 0;
          font-weight: 400;
          line-height: 0;
          display: inline-grid;
          display: -ms-inline-grid;
        }
      }
      .hero-copy__small {
        color: #54bad8;
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 20px;
        &:after {
          content: "\A";
          white-space: pre;
        }
      }
      .hero-copy__large {
        color: $dk-grey;
        font-family: 'Montserrat', sans-serif;
        font-size: 46px;
        font-weight: normal;
        line-height: 52px;
        margin-bottom: 0px;
        padding: 0;
        margin: 0 0 0 -5px;
      }
      .hero-copy__normal {
        color: $dk-grey;
        font-family: 'Montserrat', sans-serif;
        font-size: 26px;
        font-weight: 400;
        line-height: 40px;
        margin-bottom: 0px;

        strong {
          font-weight: 700;
          color: #54bad8;
        }

        .hero-copy__link {
          display: inline-block;
          font-size: 26px;
          margin-top: 10px;
          color: $dk-grey;
          text-decoration: underline #54bad8;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .homepage-hero {
      min-height: 75vh;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: auto auto 40px 60px auto 60px auto;
      grid-template-areas:
      ".  .  .  .  .  .  .  .  .  .  .  . "
      ".  .  .  .  .  .  .  .  .  .  .  . "
      "hs hs hs hs hs hs hs hs hs hs hs hs"
      "hs hs hs hs hs hs hs hs hs hs hs hs"
      "hs hs hs hs hs hs hs hs hs hs hs hs"
      "hs hs hs hs hs hs hs hs hs hs hs hs"
      ".  .  .  .  .  .  .  .  .  .  .  . ";

      .hero-image,
      .glitch-image-container {
        grid-area: hs;
        align-self: end;
        object-fit: cover;
        width: 100vw;
        min-height: 50vh;
        z-index: 0;
        display: block;
      }
      .hero-copy {
        align-self: center;
        grid-row-start: 1;
        grid-row-end: 2;
        grid-column-start: 1;
        grid-column-end: 13;
        padding: 25px;
        padding: 45px 10px;
        h1 {
          &.empty-styles {
            margin: 0;
            padding: 0;
            font-weight: 400;
            line-height: 0;
            display: inline-grid;
            display: -ms-inline-grid;
          }
        }
        .hero-copy__small {
          color: #54bad8;
          font-family: 'Montserrat', sans-serif;
          font-size: 18px;
          font-weight: bold;
          text-transform: uppercase;
          margin-bottom: 20px;
          &:after {
            content: "\A";
            white-space: pre;
          }
        }
        .hero-copy__large {
          color: $dk-grey;
          font-family: 'Montserrat', sans-serif;
          font-size: 52px;
          font-weight: normal;
          line-height: 66px;
          margin-bottom: 0px;
          padding: 0;
          margin: 0 0 0 -5px;
        }
        .hero-copy__normal {
          color: $dk-grey;
          font-family: 'Montserrat', sans-serif;
          font-size: 32px;
          font-weight: 400;
          line-height: 46px;
          margin-bottom: 0px;

          strong {
            font-weight: 700;
            color: #54bad8;
          }

          .hero-copy__link {
            display: inline-block;
            font-size: 26px;
            margin-top: 10px;
            color: $dk-grey;
            text-decoration: underline #54bad8;
          }
        }
      }
      &.glitch-0 {
        background-color: #fe787780;
        .hero-copy {
          .hero-copy__small {
            color: #fe7877;
          }
          .hero-copy__normal {
            strong {
              color: #fe7877;
            }
            .hero-copy__link {
              text-decoration: underline #fe7877;
            }
          }
        }
      }
      &.glitch-1 {
        background-color: #f7ddfa80;
        .hero-copy {
          .hero-copy__small {
            color: #f7ddfa;
          }
          .hero-copy__normal {
            strong {
              color: #f7ddfa;
            }
            .hero-copy__link {
              text-decoration: underline #f7ddfa;
            }
          }
        }
      }
      &.glitch-2 {
        background-color: #ffe87880;
        .hero-copy {
          .hero-copy__small {
            color: #ffe878;
          }
          .hero-copy__normal {
            strong {
              color: #ffe878;
            }
            .hero-copy__link {
              text-decoration: underline #ffe878;
            }
          }
        }
      }
      &.glitch-3 {
        background-color: #8ffba580;
        .hero-copy {
          .hero-copy__small {
            color: #8ffba5;
          }
          .hero-copy__normal {
            strong {
              color: #8ffba5;
            }
            .hero-copy__link {
              text-decoration: underline #8ffba5;
            }
          }
        }
      }
      &.glitch-4 {
        background-color: #78daff80;
        .hero-copy {
          .hero-copy__small {
            color: #78daff;
          }
          .hero-copy__normal {
            strong {
              color: #78daff;
            }
            .hero-copy__link {
              text-decoration: underline #78daff;
            }
          }
        }
      }
    }
  }

  @media (min-width: 992px) {
    .homepage-hero {
      grid-template-rows: repeat(4, 1fr);
      grid-template-areas:
      "hs hs hs hs hs hs hs . . . . ."
      "hs hs hs hs hs hs hs . . . . ."
      "hs hs hs hs hs hs hs . . . . ."
      "hs hs hs hs hs hs hs . . . . .";
      .hero-copy {
        z-index: 1;
        grid-row-start: 1;
        grid-row-end: 5;
        grid-column-start: 7;
        grid-column-end: 13;
        .hero-copy__small {
          font-size: 22px;
          margin-bottom: 25px;
        }
        .hero-copy__large {
          font-size: 62px;
          margin-bottom: 25px;
        }
        .hero-copy__normal {
          font-size: 26px;
          line-height: 36px;
        }
      }
      .hero-image,
      .glitch-image-container {
        object-fit: contain;
        object-position: left bottom;
        max-height: 100%;
        width: 100%;
      }
    }
  }
</style>
