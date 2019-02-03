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

  export default {
    name: 'SectionIntro',
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
    ".  .  .  .  .  .  .  .  .  .  .  . "
    "hs hs hs hs hs hs hs hs hs hs hs hs"
    "hs hs hs hs hs hs hs hs hs hs hs hs"
    "hs hs hs hs hs hs hs hs hs hs hs hs"
    "hs hs hs hs hs hs hs hs hs hs hs hs"
    ".  .  .  .  .  .  .  .  .  .  .  . ";
    .intro-image {
      grid-area: hs;
      align-self: start;
      object-fit: cover;
      width: 100vw;
      min-height: 100%;
    }
    .intro-quote {
      align-self: center;
      background: #222;
      color: white;
      font-size: 22px;
      line-height: 32px;
      grid-row-start: 1;
      grid-row-end: 2;
      grid-column-start: 1;
      grid-column-end: 13;
      padding: 25px;
      text-align: center;
      a {
        color: white;
      }
    }
  }

  @media (min-width: 768px) {
    .section-intro {
      grid-template-rows: repeat(4, 1fr);
      grid-template-areas:
      ". . . . hs hs hs hs hs hs hs hs"
      ". . . . hs hs hs hs hs hs hs hs"
      ". . . . hs hs hs hs hs hs hs hs"
      ". . . . hs hs hs hs hs hs hs hs";
      .intro-quote {
        grid-row-start: 2;
        grid-row-end: 4;
        grid-column-start: 1;
        grid-column-end: 7;
      }
    }
  }

  @media (min-width: 992px) {
    .section-intro {
      grid-template-rows: repeat(4, 1fr);
      grid-template-areas:
      ". . . . hs hs hs hs hs hs hs hs"
      ". . . . hs hs hs hs hs hs hs hs"
      ". . . . hs hs hs hs hs hs hs hs"
      ". . . . hs hs hs hs hs hs hs hs";
      .intro-quote {
        grid-row-start: 2;
        grid-row-end: 4;
        grid-column-start: 1;
        grid-column-end: 7;
      }
    }
  }
</style>