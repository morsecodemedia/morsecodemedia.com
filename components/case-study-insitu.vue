<template>
  <div
    class="case-study-insitu"
  >
    <img
      :data-src="buildImage(insitu.img)"
      :data-loading="loadingColors[Math.floor(Math.random()*loadingColors.length)]"
      alt=""
      role="img"
    >
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueLazyload from 'vue-lazyload'

  Vue.use(VueLazyload, {
    preLoad: 1.3,
    attempt: 1
  })

  export default {
    name: 'CaseStudyInsitu',
    props: {
      insitu: {
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
            return require(`~/static/images${imageSrc}`)
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  .case-study-insitu {
    padding: 75px 0;
    justify-items: center;
    display: flex;
    justify-content: center;
    img {
      max-width: 100%;
    }
  }
</style>
