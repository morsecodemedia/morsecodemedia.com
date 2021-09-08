<template>
  <section class="container">
    <siteHeader />
    <main>
      <sectionHero :hero="hero" />

      <div class="about-1up">
        <div class="content-block">
          <h2>My Story</h2>
          <p v-html="about.aboutQuote" />
          <div v-html="about.aboutDetails" />
          <p v-html="about.trackRecordQuote" />
        </div>
      </div>

      <div class="about-2up">
        <div class="content-block content-block--left">
          <h3>Work History</h3>
          <ul>
            <li
              v-for="(work, index) in about.workHistory"
              :key="index"
            >
              <span class="dates">{{ work.yearStart }}-<span v-if="work.yearEnd">{{ work.yearEnd }}</span><span v-else>Present</span></span><br>
              {{ work.title }} at {{ work.company }}
            </li>
          </ul>
          <p>
            More about my career on <a
              href="https://www.linkedin.com/in/brandonmorse"
              target="_blank"
              rel="noopener"
            >LinkedIn</a>
          </p>
        </div>
        <div class="content-block content-block--right">
          <h3>Recognition</h3>
          <ul>
            <li
              v-for="(award, index) in about.awards"
              :key="index"
            >
              <span class="awardOrg">{{ award.organization }}</span>
              <br>
              {{ award.count }} {{ award.award }}
            </li>
          </ul>
        </div>
      </div>

      <div class="about-1up">
        <div class="content-block content-block--center">
          <h3>Certifications</h3>
          <ul>
            <li
              v-for="(cert, index) in about.certifications"
              :key="index"
            >
              <span class="dates">{{ cert.certificationStart }}-<span v-if="cert.certificationEnd">{{ cert.certificationEnd }}</span><span v-else>Current</span></span>
              <br>
              {{ cert.certification }}
              <br>
              <span class="certOrg">({{ cert.organization }})</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
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
            content: 'Get the quick pitch of who Brandon Morse is and his past experience as a developer.'
          },
          { hid: 'ogtitle', property: 'og:title', content: "About Brandon Morse | morsecodemedia.com" },
          { hid: 'ogurl', property: 'og:url', content: 'https://www.morsecodemedia.com/about/' },
          { hid: 'ogdescription', property: 'og:description', content: 'Get the quick pitch of who Brandon Morse is and his past experience as a developer.' },
          { hid: 'twsite', name: 'twitter:site', content: 'https://www.morsecodemedia.com/about/' },
          { hid: 'twtitle', name: 'twitter:title', content: "About Brandon Morse | morsecodemedia.com" },
          { hid: 'twdescription', name: 'twitter:description', content: 'Get the quick pitch of who Brandon Morse is and his past experience as a developer.' },
          { hid: 'googlename', itemprop: 'name', content: "About Brandon Morse | morsecodemedia.com" },
          { hid: 'googledescription', itemprop: 'description', content: 'Get the quick pitch of who Brandon Morse is and his past experience as a developer.' }
        ],
        link: [
          { hid: 'canonical', rel: 'canonical', href: 'https://www.morsecodemedia.com/about/' }
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

<style lang="scss">
  .about-1up {
    display: flex;
    width: 100vw;
    min-height: 50vh;
    align-content: center;
    justify-content: center;
    padding: 35px 0;
    .content-block {
      height: 100%;
      width: 90%;
      &--center {
        text-align: left;
      }
    }
  }

  .about-2up {
    display: block;
    width: 100vw;
    min-height: 50vh;
    justify-content:center;
    align-content: center;
    .content-block {
      height: 100%;
      &--left {
        padding: 0 20px;
        text-align: left;
      }
      &--right {
        padding: 0 20px;
        text-align: left;
      }
    }
  }

  .about-1up,
  .about-2up {
    h3 {
      position: relative;
      display: inline-block;
      &:after {
        display: block;
        width: 50px;
        height: 10px;
        background-color: $dk-grey;
        position: absolute;
        top: 0;
        left: 50%;
      }
    }
    ul {
      list-style: none;
      li {
        span {
          &.dates,
          &.awardOrg,
          &.certOrg {
            font-size: .8em;
          }
        }
      }
    }
    a {
      color: $dk-grey;
      text-decoration: underline #56A68D;
    }
  }

  @media (min-width: 768px) {
    .about-1up {
      .content-block {
        width: 75%;
        &--center {
          text-align: center;
        }
      }
    }
    .about-2up {
      display: flex;
      .content-block {
        height: 100%;
        width: 50vw;
        &--left {
          padding: 0 40px 0 20px;
          text-align: right;
        }
        &--right {
          padding: 0 20px 0 40px;
          text-align: left;
        }
      }
    }
  }

  @media (min-width: 992px) {
    .about-1up {
      .content-block {
        width: 60%;
      }
    }
  }

  @media (min-width: 1200px) {
    .about-1up {
      .content-block {
        width: 50%;
      }
    }
  }
</style>
