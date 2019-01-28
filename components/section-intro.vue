<template>
  <section class="section-intro">
    <img
      :src="intro.image"
      class="intro-image"
      role="presentation"
      alt="">
    <blockquote
      class="intro-quote"
      v-html="intro.quote" />
  </section>
</template>

<script>
  import config from '~/components/config.json'

  export default {
    props: {
      intro: {
        type: Object,
        required: true,
        twoWay: true,
        default: () => {}
      }
    }
  }
</script>

<style lang="scss">
  .section-intro {
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
    .intro-image {
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
    .section-intro {
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