<template>
  <nuxt-link
    :to="'/case-studies/' + cs.title | lowerKebab"
    :class="styleClasses"
    class="case-study">
    <img
      :src="cs.img"
      role="presentation">
    <div class="overlay">
      <h3>{{ cs.title }}</h3>
    </div>
  </nuxt-link>
</template>

<script>
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
        default: () => {}
      },
      styleClasses: {
        type: String,
        required: false,
        default: ''
      }
    }
  }
</script>

<style lang="scss">

</style>