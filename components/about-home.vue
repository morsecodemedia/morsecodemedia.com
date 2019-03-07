<template>
  <section class="about-intro">
    <img
      :src="headshotImg"
      class="headshot"
      alt="A headshot of Brandon Morse"
      role="presentation">
    <blockquote class="intro-quote">
      <p v-html="quote">
    </blockquote>
  </section>
</template>

<script>
  import { about } from '~/components/config.json'

  export default {
    name: 'AboutHome',
    data() {
      return {
        headshotImg: about.headshot,
        quote: about.aboutQuote
      }
    }
  }
</script>

<style lang="scss" scoped>

  .about-intro {
    background: linear-gradient(45deg, $eggshell 0%, $offwhite 100%);
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto auto 40px 60px auto 60px auto;
    grid-template-areas:
    ".  .  .  .  .  .  .  .  .  .  .  . "
    "hs hs hs hs hs hs hs hs hs hs hs hs"
    "hs hs hs hs hs hs hs hs hs hs hs hs"
    "hs hs hs hs hs hs hs hs hs hs hs hs"
    "hs hs hs hs hs hs hs hs hs hs hs hs";
    .headshot {
      grid-area: hs;
      align-self: start;
      object-fit: cover;
      width: 100%;
      max-height: 100%;
    }
    .intro-quote {
      align-self: center;
      background: $dk-grey;
      color: $white;
      font-size: 36px;
      line-height: 1.1em;
      grid-row-start: 1;
      grid-row-end: 2;
      grid-column-start: 1;
      grid-column-end: 13;
      padding: 25px 10px;
      text-align: center;
    }
  }

  @media (min-width: 768px) {
    .about-intro {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: 60px auto auto 60px;
      grid-template-areas:
      ". . . . hs hs hs hs hs hs hs hs"
      ". . . . hs hs hs hs hs hs hs hs"
      ". . . . hs hs hs hs hs hs hs hs"
      ". . . . hs hs hs hs hs hs hs hs";
      .intro-quote {
        grid-row-start: 2;
        grid-row-end: 4;
        grid-column-start: 1;
        grid-column-end: 6;
      }
    }
  }
</style>