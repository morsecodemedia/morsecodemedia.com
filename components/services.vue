<template>
  <section
    v-if="services"
    class="services">
    <article
      v-for="service in services"
      :key="service.id">
      <h3>{{ service.title }}</h3>
      <p>{{ service.description }}</p>
    </article>
  </section>
</template>

<script>
  import config from '~/components/config.json'

  export default {
    data() {
      return {
        services: config.services
      }
    }
  }
</script>

<style lang="scss" scoped>
  .services {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto auto;
    article {
      padding: 30px;
      &:nth-of-type(odd) {
        background: #ededed;
      }
      &:nth-of-type(even) {
        background: #efefef;
      }
      h3 {
        font-family: 'Muli', sans-serif;
        font-size: 27px;
        text-transform: uppercase;
      }
      p {
        font-family: 'Playfair Display', serif;
        font-size: 18px;
      }
    }
  }
  @media (min-width: 768px) {
    .services {
      grid-template-columns: repeat(2, 1fr);
      article {
        padding: 40px;
      }
    }
  }
  @media (min-width: 992px) {
    .services {
      grid-template-columns: repeat(3, 1fr);
      article {
      }
    }
  }
  @media (min-width: 1200px) {
    .services {
      grid-template-columns: repeat(3, 1fr);
      article {
        padding: 80px;
      }
    }
  }
</style>