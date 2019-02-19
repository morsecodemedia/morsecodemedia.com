<template>
  <div
    :style="{background: 'linear-gradient' + '(135deg, ' + insitu.color1 + ' 0%, ' + insitu.color2 + ' 100%)'}"
    class="case-study-insitu">
    <img
      :src="insitu.img"
      alt=""
      role="img">
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
