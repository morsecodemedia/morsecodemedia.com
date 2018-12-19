<template>
  <section class="track-record">
    <p class="tr-quote">{{ quote }}</p>
  </section>
</template>

<script>
  import config from '~/components/config.json'

  export default {
    data() {
      return {
        quote: config.about.trackRecordQuote
      }
    }
  }
</script>

<style lang="scss" scoped>
  .track-record {
    background: #222;
    padding: 25px;
    .tr-quote {
      align-self: center;
      color: white;
      font-size: 22px;
      padding: 30px 20px;
      text-align: center;
    }
  }
</style>