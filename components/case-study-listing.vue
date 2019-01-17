<template>
  <nuxt-link
    v-lazy-container="{ selector: 'img' }"
    :to="'/case-studies/' + cs.title | lowerKebab"
    :class="styleClasses"
    class="case-study">
    <img
      :data-src="cs.img"
      :data-loading="loadingColors[Math.floor(Math.random()*loadingColors.length)]"
      role="presentation">
    <div class="overlay">
      <h3>{{ cs.title }}</h3>
    </div>
  </nuxt-link>
</template>

<script>
  import Vue from 'vue'
  import VueLazyload from 'vue-lazyload'

  Vue.use(VueLazyload, {
    preLoad: 1.3,
    attempt: 1
  })

  export default {
    filters: {
      lowerKebab: function(term) {
        return term.toLowerCase().replace(/[.\s]/g, '-').replace(/[&#,+()$~%'":*?<>{}]/g, '' )
      }
    },
    props: {
      cs: {
        type: Object,
        required: true,
        twoWay: true,
        default: () => {}
      },
      styleClasses: {
        type: String,
        required: false,
        default: ''
      }
    },
    data() {
      return {
        loadingColors: [
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2PQ09P7DwACogGKJIM9sQAAAABJRU5ErkJggg=='
        ]
      }
    }
  }
</script>

<style lang="scss">

</style>
