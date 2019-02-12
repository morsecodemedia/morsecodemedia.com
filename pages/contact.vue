<template>
  <section class="container">
    <siteHeader />
    <main>
      <sectionHero :hero="hero" />
    </main>
    <siteFooter />
  </section>
</template>

<script>
  import config from '~/components/config.json'
  import siteHeader from '~/components/header'
  import sectionHero from '~/components/section-hero'
  import siteFooter from '~/components/footer'

  export default {
    name: 'Contact',
    components: {
      siteHeader,
      sectionHero,
      siteFooter
    },
    head () {
      return {
        title: "Let's Work Together! | morsecodemedia.com",
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Looking for a website? Need an engaging email to drive customers to your site? Just asking for advice? I can tackle whatever challenge you have.'
          }
        ]
      }
    },
    data() {
      return {
        hero: {
          'header': "Let's Work <br>Together",
          'copy': "Looking for a website? Need an engaging email to drive customers to your site? Just asking for advice? I can't wait to tackle whatever challenge you are having."
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
