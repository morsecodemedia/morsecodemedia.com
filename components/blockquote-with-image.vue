<template>
  <section
    v-lazy-container="{ selector: 'img' }"
    class="bq-w-img">
    <img
      :data-src="buildImage(bqwi.image)"
      :data-loading="loadingColors[Math.floor(Math.random()*loadingColors.length)]"
      class="bqwi-image"
      role="presentation"
      alt="">
    <blockquote
      class="bqwi-quote"
      v-html="bqwi.quote" />
  </section>
</template>

<script>
  import Vue from 'vue'
  import VueLazyload from 'vue-lazyload'

  Vue.use(VueLazyload, {
    preLoad: 1.3,
    attempt: 1
  })

  export default {
    name: 'BlockquoteWithImg',
    props: {
      bqwi: {
        type: Object,
        required: true,
        twoWay: true,
        default: () => {}
      }
    },
    data() {
      return {
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

<style lang="scss">

  .bq-w-img {
    background: linear-gradient(45deg, $eggshell 0%, $offwhite 100%);
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
    .bqwi-image {
      grid-area: hs;
      align-self: start;
      object-fit: cover;
      width: 100vw;
      min-height: 50vh;
    }
    .bqwi-quote {
      align-self: center;
      background: $dk-grey;
      color: $white;
      font-size: 22px;
      line-height: 32px;
      grid-row-start: 1;
      grid-row-end: 2;
      grid-column-start: 1;
      grid-column-end: 13;
      padding: 25px;
      text-align: center;
      a {
        color: $white;
      }
    }
  }

  @media (min-width: 768px) {
    .bq-w-img {
      grid-template-rows: repeat(4, 1fr);
      grid-template-areas:
      ". . . . hs hs hs hs hs hs hs hs"
      ". . . . hs hs hs hs hs hs hs hs"
      ". . . . hs hs hs hs hs hs hs hs"
      ". . . . hs hs hs hs hs hs hs hs";
      .bqwi-quote {
        grid-row-start: 2;
        grid-row-end: 4;
        grid-column-start: 1;
        grid-column-end: 7;
      }
    }
  }

  @media (min-width: 992px) {
    .bq-w-img {
      grid-template-rows: repeat(4, 1fr);
      grid-template-areas:
      ". . . . hs hs hs hs hs hs hs hs"
      ". . . . hs hs hs hs hs hs hs hs"
      ". . . . hs hs hs hs hs hs hs hs"
      ". . . . hs hs hs hs hs hs hs hs";
      .bqwi-quote {
        grid-row-start: 2;
        grid-row-end: 4;
        grid-column-start: 1;
        grid-column-end: 7;
      }
      .bqwi-image {
        object-fit: contain;
        object-position: right;
        max-height: 60vh;
        width: 100%;
      }
    }
  }
</style>