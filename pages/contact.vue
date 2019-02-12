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
          },
          { hid: 'ogtitle', property: 'og:title', content: "Let's Work Together! | morsecodemedia.com" },
          { hid: 'ogurl', property: 'og:url', content: 'https://www.morsecodemedia.com/contact/' },
          { hid: 'ogdescription', property: 'og:description', content: 'Looking for a website? Need an engaging email to drive customers to your site? Just asking for advice? I can tackle whatever challenge you have.' },
          { hid: 'twsite', name: 'twitter:site', content: 'https://www.morsecodemedia.com/contact/' },
          { hid: 'twtitle', name: 'twitter:title', content: "Let's Work Together! | morsecodemedia.com" },
          { hid: 'twdescription', name: 'twitter:description', content: 'Looking for a website? Need an engaging email to drive customers to your site? Just asking for advice? I can tackle whatever challenge you have.' },
          { hid: 'googlename', itemprop: 'name', content: "Let's Work Together! | morsecodemedia.com" },
          { hid: 'googledescription', itemprop: 'description', content: 'Looking for a website? Need an engaging email to drive customers to your site? Just asking for advice? I can tackle whatever challenge you have.' }
        ],
        link: [
          { hid: 'canonical', rel: 'canonical', href: 'https://www.morsecodemedia.com/contact/' }
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
