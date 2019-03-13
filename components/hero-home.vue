<template>
  <section class="hero">
    <article class="hero-copy">
      <header>
        <h1 class="empty-styles">
          <span class="hero-copy__small">{{ heroDescriptor }}</span>
          <span class="hero-copy__large">{{ heroName }}</span>
          <span class="hero-copy__normal">{{ heroStatement }}</span>
        </h1>
      </header>
    </article>
    <aside class="hero-image">
      <div class="content">
        <div class="slides slides--contained effect-2">
          <div class="slide slide--current">
            <div
              :class="'slide' + displaySlide"
              class="slide__img glitch">
              <div
                v-for="index in totalGlitchs"
                :key="index"
                :class="[{'glitch': (index >= glitchStep)}, 'slide'+currentSlide]"
                class="glitch__img"/>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </section>
</template>

<script>
  import { homepageHero } from '~/components/config.json'

  export default {
    name: 'HeroHome',
    data() {
      return {
        heroDescriptor: homepageHero.heroDescriptor,
        heroName: homepageHero.heroName,
        heroStatement: homepageHero.heroStatement,
        currentSlide: 0,
        displaySlide: 0,
        totalSlides: 2,
        totalGlitchs: 5,
        glitchStep: 0,
        glitchInterval: null,
        glitchSpeed: 100,
        slideShowInterval: null,
        slideShowSpeed: 4000
      }
    },
    watch: {
      currentSlide: function (newSlide, oldSlide) {
        this.glitchStep = this.totalGlitchs
        this.glitchInterval = setInterval(() => {
          this.glitchStep--
          if (this.glitchStep <= 0) {
            clearInterval(this.glitchInterval)
            this.displaySlide = this.currentSlide
          }
        }, this.glitchSpeed)
      }
    },
    created() {
      this.slideShowInterval = setInterval(() => {
        this.currentSlide = (this.currentSlide + 1 < this.totalSlides) ? this.currentSlide + 1 : 0
      }, this.slideShowSpeed)
    },
    beforeDestroy() {
      clearInterval(this.slideShowInterval)
      clearInterval(this.glitchInterval)
    }
  }
</script>

<style lang="scss" scoped>

  .hero {
    background: $eggshell;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto auto auto auto 45px;
    grid-template-areas:
    "hc hc hc hc hc hc hc hc hc hc hc hc"
    "hc hc hc hc hc hc hc hc hc hc hc hc"
    "hi hi hi hi hi hi hi hi hi hi hi hi"
    "hi hi hi hi hi hi hi hi hi hi hi hi"
    ".  .  .  .  .  .  .  .  .  .  .  .";
    .hero-copy {
      grid-area: hc;
      padding: 45px 10px;
      h1 {
        &.empty-styles {
          margin: 0;
          padding: 0;
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
        font-family: 'Montserrat', sans-serif;
        font-size: 52px;
        font-weight: normal;
        line-height: 66px;
        margin-bottom: 0px;
        padding: 0;
        margin: 0 0 0 -5px;
      }
      .hero-copy__normal {
        font-family: 'Montserrat', sans-serif;
        font-size: 32px;
        font-weight: normal;
        line-height: 46px;
        margin-bottom: 0px;
      }
    }
    .hero-image {
      grid-area: hi;
      align-self: center;
      justify-self: center;
    }
  }

  @media (min-width: 768px) {
    .hero {
      grid-template-rows: 45px auto auto auto auto 45px;
      grid-template-areas:
      ".  .  .  .  .  .  .  .  .  .  .  ."
      "hc hc hc hc hc hc hc hi hi hi hi hi"
      "hc hc hc hc hc hc hc hi hi hi hi hi"
      "hc hc hc hc hc hc hc hi hi hi hi hi"
      "hc hc hc hc hc hc hc hi hi hi hi hi"
      ".  .  .  .  .  .  .  .  .  .  .  .";
      .hero-copy {
        padding: 30px 10px 45px;
      }
    }
  }
  @media (min-width: 992px) {
    .hero {
      .hero-copy {
        padding: 45px 10px;
        .hero-copy__small {
          font-size: 22px;
          margin-bottom: 25px;
        }
        .hero-copy__large {
          font-size: 62px;
          margin-bottom: 25px;
        }
        .hero-copy__normal {
          font-size: 38px;
        }
      }
    }
  }
  @media (min-width: 1200px) {
    .hero {
      .hero-copy {
        .hero-copy__large {
          font-size: 82px;
        }
        .hero-copy__normal {
          font-size: 46px;
        }
      }
    }
  }
</style>