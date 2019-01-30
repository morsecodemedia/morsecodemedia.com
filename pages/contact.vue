<template>
  <section class="container">
    <siteHeader />
    <sectionIntro :intro="intro" />
    <siteFooter />
  </section>
</template>

<script>
  import config from '~/components/config.json'
  import siteHeader from '~/components/header'
  import sectionIntro from '~/components/section-intro'
  import siteFooter from '~/components/footer'

  export default {
    name: 'Contact',
    components: {
      siteHeader,
      sectionIntro,
      siteFooter
    },
    head () {
      return {
        title: 'Let\'s Work Together! | morsecodemedia.com',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: "Looking for a website? Need an engaging email to drive customers to your site? Just asking for advice? I can\'t wait to tackle whatever challenge you are having."
          }
        ]
      }
    },
    data() {
      return {
        intro: {
          "image": "https://via.placeholder.com/950x630",
          "quote": config.about.contactQuote
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
