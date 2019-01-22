<template>
  <section class="about-intro">
    <img
      :src="headshotImg"
      class="headshot"
      role="presentation">
    <blockquote class="intro-quote">
      <p>
        {{ quote }}
        <nuxt-link :to="'/about/'">More about me &raquo;</nuxt-link>
      </p>
    </blockquote>
  </section>
</template>

<script>
  import config from '~/components/config.json'

  export default {
    data() {
      return {
        headshotImg: config.about.headshot,
        quote: config.about.aboutQuote
      }
    }
  }
</script>

<style lang="scss" scoped>
  .about-intro {
    background: linear-gradient(45deg,#f9f9f9 0%,#ededed 100%);
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
      background: #222;
      color: white;
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