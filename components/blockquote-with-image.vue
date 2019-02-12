<template>
  <section class="bq-w-img">
    <img
      :src="bqwi.image"
      class="bqwi-image"
      role="presentation"
      alt="An image to accompany the quote, however, it provides no additional information and the message is still conveyed without its inclusion.">
    <blockquote
      class="bqwi-quote"
      v-html="bqwi.quote" />
  </section>
</template>

<script>
  export default {
    name: 'BlockquoteWithImg',
    props: {
      bqwi: {
        type: Object,
        required: true,
        twoWay: true,
        default: () => {}
      }
    }
  }
</script>

<style lang="scss">
  .bq-w-img {
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
    .bqwi-image {
      grid-area: hs;
      align-self: start;
      object-fit: cover;
      width: 100vw;
      min-height: 50vh;
    }
    .bqwi-quote {
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
    .bq-w-img {
      grid-template-rows: repeat(4, 1fr);
      grid-template-areas:
      ". . . . hs hs hs hs hs hs hs hs"
      ". . . . hs hs hs hs hs hs hs hs"
      ". . . . hs hs hs hs hs hs hs hs"
      ". . . . hs hs hs hs hs hs hs hs";
      .bqwi-quote {
        grid-row-start: 2;
        grid-row-end: 4;
        grid-column-start: 1;
        grid-column-end: 7;
      }
    }
  }

  @media (min-width: 992px) {
    .bq-w-img {
      grid-template-rows: repeat(4, 1fr);
      grid-template-areas:
      ". . . . hs hs hs hs hs hs hs hs"
      ". . . . hs hs hs hs hs hs hs hs"
      ". . . . hs hs hs hs hs hs hs hs"
      ". . . . hs hs hs hs hs hs hs hs";
      .bqwi-quote {
        grid-row-start: 2;
        grid-row-end: 4;
        grid-column-start: 1;
        grid-column-end: 7;
      }
      .bqwi-image {
        object-fit: contain;
        max-height: 50vh;
      }
    }
  }
</style>