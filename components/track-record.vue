<template>
  <section class="track-record">
    <p class="tr-quote">
      {{ quote }}
    </p>
  </section>
</template>

<script>
  import { about } from '~/components/config.json'

  export default {
    name: 'TrackRecord',
    data() {
      return {
        quote: about.trackRecordQuote
      }
    }
  }
</script>

<style lang="scss" scoped>

  .track-record {
    background: $dk-grey;
    padding: 40px 80px;
    .tr-quote {
      align-self: center;
      color: $white;
      font-size: 26px;
      line-height: 38px;
      padding: 30px 20px;
      text-align: center;
    }
  }
</style>