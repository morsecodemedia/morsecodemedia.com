<template>
  <section
    v-lazy-container="{ selector: 'img' }"
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
      :data-src="buildImage(headshotImg)"
      :data-loading="loadingColors[Math.floor(Math.random()*loadingColors.length)]"
      class="headshot hero-image"
      alt="A headshot of Brandon Morse"
      role="presentation">
    <glitch />
  </section>
</template>

<script>
  import Vue from 'vue'
  import VueLazyload from 'vue-lazyload'
  import glitch from '~/components/glitch-image'
  import { about } from '~/components/config.json'

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
        headshotImg: about.headshot,
        loadingColors: [
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2PQ09P7DwACogGKJIM9sQAAAABJRU5ErkJggg=='
        ]
      }
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  .homepage-hero{
    background: #485563;
    background: -moz-radial-gradient(center, ellipse cover, #485563, #29323C);
    background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, #485563), color-stop(100%, #29323C));
    background: -webkit-radial-gradient(center, ellipse cover, #485563, #29323C);
    background: -o-radial-gradient(center, ellipse cover, #485563, #29323C);
    background: -ms-radial-gradient(center, ellipse cover, #485563, #29323C);
    background: radial-gradient(ellipse at center, #485563, #29323C);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#485563', endColorstr='#29323C', GradientType=1 );
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
      align-self: start;
      object-fit: cover;
      width: 100vw;
      min-height: 50vh;
      z-index: 0;
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
        color: white;
        font-family: 'Montserrat', sans-serif;
        font-size: 52px;
        font-weight: normal;
        line-height: 66px;
        margin-bottom: 0px;
        padding: 0;
        margin: 0 0 0 -5px;
      }
      .hero-copy__normal {
        color: white;
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
          display: block;
          font-size: 26px;
          margin-top: 10px;
          color: white;
        }
      }
    }
  }

  @media (min-width: 768px) {

  }

  @media (min-width: 992px) {
    .homepage-hero {
      grid-template-rows: repeat(4, 1fr);
      grid-template-areas:
      "hs hs hs hs hs hs hs hs . . . ."
      "hs hs hs hs hs hs hs hs . . . ."
      "hs hs hs hs hs hs hs hs . . . ."
      "hs hs hs hs hs hs hs hs . . . .";
      .hero-copy {
        z-index: 10;
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
