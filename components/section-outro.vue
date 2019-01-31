<template>
  <section class="section-outro">
    <h4
      v-html="outro.header"/>
    <div
      v-html="outro.body" />
  </section>
</template>

<script>

  export default {
    name: 'SectionOutro',
    props: {
      outro: {
        type: Object,
        required: true,
        twoWay: true,
        default: () => {}
      }
    }
  }
</script>

<style lang="scss">
</style>