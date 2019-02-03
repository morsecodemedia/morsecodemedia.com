<template>
  <section class="container">
    <siteHeader />
    <div class="csHero">
      <div>
        <h1>Case <br >Studies</h1>
        <p>Bridging the gap between client fantasies and digital realities.</p>
      </div>
    </div>
    <caseStudies />
    <siteFooter />
  </section>
</template>

<script>
  import config from '~/components/config.json'
  import siteHeader from '~/components/header'
  import sectionIntro from '~/components/section-intro'
  import caseStudies from '~/components/case-studies'
  import siteFooter from '~/components/footer'

  export default {
    name: 'CaseStudies',
    components: {
      siteHeader,
      sectionIntro,
      caseStudies,
      siteFooter
    },
    head () {
      return {
        title: 'Case Studies | morsecodemedia.com',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: "I have a proven track record of quality web development backed by some award winning work."
          }
        ]
      }
    },
    data() {
      return {
        intro: {
          "image": "https://via.placeholder.com/950x630",
          "quote": config.about.caseStudiesQuote
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .csHero {
    background: #ffaf4b;
    background: -moz-radial-gradient(center, ellipse cover, #ffaf4b 0%, #ff920a 100%);
    background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, #ffaf4b), color-stop(100%, #ff920a));
    background: -webkit-radial-gradient(center, ellipse cover, #ffaf4b 0%, #ff920a 100%);
    background: -o-radial-gradient(center, ellipse cover, #ffaf4b 0%, #ff920a 100%);
    background: -ms-radial-gradient(center, ellipse cover, #ffaf4b 0%, #ff920a 100%);
    background: radial-gradient(ellipse at center, #ffaf4b 0%, #ff920a 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffaf4b', endColorstr='#ff920a', GradientType=1 );

    height: 75vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      h1 {
        border-bottom: 4px solid white;
        color: white;
        display: inline-block;
        font-size: 56px;
        padding: 0 0 10px 0;
        margin: 0 0 25px 0;
        text-transform: uppercase;
      }
      p {
        font-size: 24px;
        color: white;
      }
    }
  }
</style>

