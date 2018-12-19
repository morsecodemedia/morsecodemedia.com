<template>
  <section class="hero">
    <article class="hero-copy">
      <p class="hero-copy__small">{{ heroDescriptor }}</p>
      <p class="hero-copy__large">{{ heroName }}</p>
      <p class="hero-copy__normal">{{ heroStatement }}</p>
    </article>
    <aside class="hero-image">
      <img
        src="#"
        alt="Broken Image">
    </aside>
  </section>
</template>

<script>
  import config from '~/components/config.json'

  export default {
    data() {
      return {
        heroDescriptor: config.homepageHero.heroDescriptor,
        heroName: config.homepageHero.heroName,
        heroStatement: config.homepageHero.heroStatement
      }
    }
  }
</script>

<style lang="scss" scoped>
  .hero {
    background: #f9f9f9;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 45px auto auto auto auto 45px;
    grid-template-areas:
    ".  .  .  .  .  .  .  .  .  .  .  ."
    "hc hc hc hc hc hc hc hc hc hc hc hc"
    "hc hc hc hc hc hc hc hc hc hc hc hc"
    "hi hi hi hi hi hi hi hi hi hi hi hi"
    "hi hi hi hi hi hi hi hi hi hi hi hi"
    ".  .  .  .  .  .  .  .  .  .  .  .";
    .hero-copy {
      font-family: 'Muli', sans-serif;
      grid-area: hc;
      padding: 45px 10px;
      .hero-copy__small {
        color: #54bad8;
        font-size: 18px;
        font-weight: bold;
        text-transform: uppercase;
      }
      .hero-copy__large {
        font-size: 52px;
      }
      .hero-copy__normal {
        font-size: 32px;
      }
    }
    .hero-image {
      background: rosybrown;
      grid-area: hi;
      align-self: center;
      justify-self: center;
    }
  }
  @media (min-width: 768px) {
    .hero {
      grid-template-areas:
      ".  .  .  .  .  .  .  .  .  .  .  ."
      "hc hc hc hc hc hc hi hi hi hi hi hi"
      "hc hc hc hc hc hc hi hi hi hi hi hi"
      "hc hc hc hc hc hc hi hi hi hi hi hi"
      "hc hc hc hc hc hc hi hi hi hi hi hi"
      ".  .  .  .  .  .  .  .  .  .  .  .";
      .hero-copy {
        padding: 45px 10px;
        .hero-copy__small {
          font-size: 18px;
        }
        .hero-copy__large {
          font-size: 52px;
        }
        .hero-copy__normal {
          font-size: 32px;
        }
      }
    }
  }
  @media (min-width: 992px) {
    .hero {
      .hero-copy {
        padding: 45px 10px;
        .hero-copy__small {
          font-size: 22px;
        }
        .hero-copy__large {
          font-size: 62px;
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
        padding: 45px 10px;
        .hero-copy__small {
          font-size: 22px;
        }
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