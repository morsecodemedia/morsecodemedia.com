<template>
  <section class="container">
    <siteHeader />
    <sectionHero :hero="hero" />

    <div style="display:flex;">
      <div style="width:45vw; height:50vh;">
        <img
          src="https://www.morsecodemedia.com/site/assets/files/1016/bmorse-headshot-1.jpg"
          style="width:50vw; height:50vh; display: flex;">
      </div>

      <div style="width:50vw; height:50vh;">
        <p v-html="about.aboutQuote" />
        <p v-html="about.trackRecordQuote" />
      </div>
    </div>

    <div class="description-container">
      <div>
        <h2>Work History</h2>
        <ul>
          <li
            v-for="(work, index) in about.workHistory"
            :key="index">
            {{ work.title }} at {{ work.company }} {{ work.yearStart }}-{{ work.yearEnd }}
          </li>
        </ul>
        <p>More about my career on <a
          href="https://www.linkedin.com/in/brandonmorse"
          target="_blank">LinkedIn</a></p>
      </div>
      <div>
        <h2>Recognition</h2>
        <ul>
          <li
            v-for="(award, index) in about.awards"
            :key="index">
            {{ award.count }} {{ award.award }} ({{ award.organization }})
          </li>
        </ul>
      </div>
    </div>

    <div style="display: flex;">
      <h2>Certifications</h2>
      <ul>
        <li
          v-for="(cert, index) in about.certifications"
          :key="index">
          {{ cert.certification }} ({{ cert.organization }})
          <br>
          <span>{{ cert.certificationStart }}-{{ cert.certificationEnd }}</span>
        </li>
      </ul>
    </div>

    <siteFooter />
  </section>
</template>

<script>
  import { about } from '~/components/config.json'
  import siteHeader from '~/components/header'
  import sectionHero from '~/components/section-hero'
  import siteFooter from '~/components/footer'

  export default {
    name: 'About',
    components: {
      siteHeader,
      sectionHero,
      siteFooter
    },
    head () {
      return {
        title: 'About Brandon Morse | morsecodemedia.com',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: "Get the quick pitch of who Brandon Morse is and his past experience as a developer."
          }
        ]
      }
    },
    data() {
      return {
        about: about,
        hero: {
          "header": "About Me",
          "copy": "I have a passion to innovate and develop digital experiences."
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .section-hero {
    background: rgba(147,206,222,1);
    background: -moz-radial-gradient(center, ellipse cover, rgba(147,206,222,1) 0%, rgba(117,189,209,1) 41%, rgba(73,165,191,1) 100%);
    background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, rgba(147,206,222,1)), color-stop(41%, rgba(117,189,209,1)), color-stop(100%, rgba(73,165,191,1)));
    background: -webkit-radial-gradient(center, ellipse cover, rgba(147,206,222,1) 0%, rgba(117,189,209,1) 41%, rgba(73,165,191,1) 100%);
    background: -o-radial-gradient(center, ellipse cover, rgba(147,206,222,1) 0%, rgba(117,189,209,1) 41%, rgba(73,165,191,1) 100%);
    background: -ms-radial-gradient(center, ellipse cover, rgba(147,206,222,1) 0%, rgba(117,189,209,1) 41%, rgba(73,165,191,1) 100%);
    background: radial-gradient(ellipse at center, rgba(147,206,222,1) 0%, rgba(117,189,209,1) 41%, rgba(73,165,191,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#93cede', endColorstr='#49a5bf', GradientType=1 );
  }
  .description-container {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-auto-rows: 1fr;
    div {
      grid-column: span 1;
      grid-row: span 1;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      padding: 35px;
      h2 {
        justify-self: center;
        border-bottom: 4px solid #222;
        display: inline-block;
        font-size: 32px;
        padding: 0 0 15px 0;
        margin: 0 0 15px 0;
        text-transform: uppercase;
        text-align: center;
      }
      p {
        padding: 0 20px;
        margin: 0 0 20px 0;
      }
      img {
        object-fit: contain;
        object-position: center center;
        height: 100%;
      }
    }
  }

  @media (min-width: 768px) {

  }

  @media (min-width: 992px) {

  }
</style>
