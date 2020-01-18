<template>
  <div
    class="case-study-insitu"
  >
    <img
      :src="buildImage(insitu.img)"
      alt=""
      role="img"
    >
  </div>
</template>

<script>
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
