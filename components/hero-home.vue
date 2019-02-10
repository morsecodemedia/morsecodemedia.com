<template>
  <section class="hero">
    <article class="hero-copy">
      <p class="hero-copy__small">{{ heroDescriptor }}</p>
      <p class="hero-copy__large">{{ heroName }}</p>
      <p class="hero-copy__normal">{{ heroStatement }}</p>
    </article>
    <aside class="hero-image">
      <img
        class="hero-image"
        src="#"
        alt="Glitch Images Go Here">
    </aside>
  </section>
</template>

<script>
  import { homepageHero } from '~/components/config.json'

  export default {
    name: 'HeroHome',
    data() {
      return {
        heroDescriptor: homepageHero.heroDescriptor,
        heroName: homepageHero.heroName,
        heroStatement: homepageHero.heroStatement
      }
    }
  }
</script>

<style lang="scss" scoped>
  .hero {
    background: #f9f9f9;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto auto auto auto 45px;
    grid-template-areas:
    "hc hc hc hc hc hc hc hc hc hc hc hc"
    "hc hc hc hc hc hc hc hc hc hc hc hc"
    "hi hi hi hi hi hi hi hi hi hi hi hi"
    "hi hi hi hi hi hi hi hi hi hi hi hi"
    ".  .  .  .  .  .  .  .  .  .  .  .";
    .hero-copy {
      grid-area: hc;
      padding: 45px 10px;
      .hero-copy__small {
        color: #54bad8;
        font-size: 18px;
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 0px;
      }
      .hero-copy__large {
        font-size: 52px;
        line-height: 66px;
        margin-bottom: 0px;
      }
      .hero-copy__normal {
        font-size: 32px;
        line-height: 46px;
        margin-bottom: 0px;
      }
    }
    .hero-image {
      grid-area: hi;
      align-self: center;
      justify-self: center;
    }
  }

  @media (min-width: 768px) {
    .hero {
      grid-template-rows: 45px auto auto auto auto 45px;
      grid-template-areas:
      ".  .  .  .  .  .  .  .  .  .  .  ."
      "hc hc hc hc hc hc hc hi hi hi hi hi"
      "hc hc hc hc hc hc hc hi hi hi hi hi"
      "hc hc hc hc hc hc hc hi hi hi hi hi"
      "hc hc hc hc hc hc hc hi hi hi hi hi"
      ".  .  .  .  .  .  .  .  .  .  .  .";
      .hero-copy {
        padding: 30px 10px 45px;
      }
    }
  }
  @media (min-width: 992px) {
    .hero {
      .hero-copy {
        padding: 45px 10px;
        .hero-copy__small {
          font-size: 22px;
          margin-bottom: 25px;
        }
        .hero-copy__large {
          font-size: 62px;
          margin-bottom: 25px;
        }
        .hero-copy__normal {
          font-size: 38px;
        }
      }
    }
  }
  @media (min-width: 1200px) {
    .hero {
      .hero-copy {
        .hero-copy__large {
          font-size: 82px;
        }
        .hero-copy__normal {
          font-size: 46px;
        }
      }
    }
  }
</style>