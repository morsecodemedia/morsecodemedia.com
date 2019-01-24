<template>
  <section class="container">
    <siteHeader />
    <sectionIntro :intro="intro" />

    <div class="description-container">
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
    </div>

    <siteFooter />
  </section>
</template>

<script>
  import config from '~/components/config.json'
  import siteHeader from '~/components/header'
  import sectionIntro from '~/components/section-intro'
  import siteFooter from '~/components/footer'

  export default {
    components: {
      siteHeader,
      sectionIntro,
      siteFooter
    },
    data() {
      return {
        about: config.about,
        intro: {
          "image": "https://via.placeholder.com/950x630",
          "quote": config.about.aboutQuote
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .case-studies-intro {
    background: linear-gradient(45deg,#f9f9f9 0%,#ededed 100%);
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto auto 40px 60px auto 60px auto;
    grid-template-areas:
    ".  .  .  .  .  .  .  .  .  .  .  . "
    "hs hs hs hs hs hs hs hs hs hs hs hs"
    "hs hs hs hs hs hs hs hs hs hs hs hs"
    "hs hs hs hs hs hs hs hs hs hs hs hs"
    "hs hs hs hs hs hs hs hs hs hs hs hs";
    .intro-image {
      grid-area: hs;
      align-self: start;
      object-fit: cover;
      width: 100%;
      max-height: 100%;
    }
    .intro-quote {
      align-self: center;
      background: #222;
      color: white;
      font-size: 36px;
      line-height: 1.1em;
      grid-row-start: 1;
      grid-row-end: 2;
      grid-column-start: 1;
      grid-column-end: 13;
      padding: 25px 10px;
      text-align: center;
    }
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
      // align-items: center;
      flex-direction: column;
      // justify-content: center;
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
      }
      img {
        object-fit: contain;
        object-position: center center;
        height: 100%;
      }
    }
  }

  @media (min-width: 768px) {
    .case-studies-intro {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: 60px auto auto 60px;
      grid-template-areas:
      ". . . . hs hs hs hs hs hs hs hs"
      ". . . . hs hs hs hs hs hs hs hs"
      ". . . . hs hs hs hs hs hs hs hs"
      ". . . . hs hs hs hs hs hs hs hs";
      .intro-quote {
        grid-row-start: 2;
        grid-row-end: 4;
        grid-column-start: 1;
        grid-column-end: 8;
      }
    }
  }
</style>
