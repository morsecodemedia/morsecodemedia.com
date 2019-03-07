<template>
  <section class="container">
    <siteHeader />
    <main>
      <sectionHero :hero="hero" />
      <div class="form-container">
        <form
          @submit.prevent="validateForm">
          <p>
            <span class="input input--yoshiko">
              <input
                id="input-10"
                v-model="name"
                class="input__field input__field--yoshiko"
                type="text">
              <label
                class="input__label input__label--yoshiko"
                for="input-10">
                <span
                  class="input__label-content input__label-content--yoshiko"
                  data-content="Name">Name</span>
              </label>
            </span>
          </p>

          <p>
            <span class="input input--yoshiko">
              <input
                id="input-11"
                v-model="email"
                class="input__field input__field--yoshiko"
                type="email">
              <label
                class="input__label input__label--yoshiko"
                for="input-11">
                <span
                  class="input__label-content input__label-content--yoshiko"
                  data-content="Email Address">Email Address</span>
              </label>
            </span>
          </p>

          <p>
            <span class="input input--yoshiko">
              <textarea
                id="input-12"
                v-model="message"
                class="input__field input__field--yoshiko"/>
              <label
                class="input__label input__label--yoshiko"
                for="input-12">
                <span
                  class="input__label-content input__label-content--yoshiko"
                  data-content="Message">Message</span>
              </label>
            </span>
          </p>

          <p>
            <button
              id="submit-form"
              :class="validatedClass"
              class="submit"
              type="submit"/>
          </p>
        </form>
      </div>
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
        },
        validatedClass: '',
        showThankYou: false,
        name: '',
        email: '',
        message: ''
      }
    },
    methods: {
      timeout: function(delay, args) {
        return new Promise(function(resolve) {
          setTimeout(resolve, delay, args);
        })
      },
      validateForm: async function() {
        // this.validatedClass = 'submitted'
        // await this.timeout(1000)
        // validate name, email and message
        // if validated
          //this.validatedClass = ''
          //await this.timeout(425)
          //this.validatedClass = 'validated'
          //await this.timeout(1000)
          // Hide Form and show thank you message
        // else
          // this.validatedClass = 'error'
          // put error classes on form fields as needed
          // await this.timeout(1500)
          // this.validatedClass = ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .form-container {
    background: purple;
    padding: 20px;
  }
  .input {
    position: relative;
    z-index: 1;
    display: inline-block;
    margin: 1em;
    max-width: 350px;
    width: calc(100% - 2em);
    vertical-align: top;
  }

  .input__field {
    position: relative;
    display: block;
    float: right;
    padding: 0.8em;
    width: 60%;
    border: none;
    border-radius: 0;
    background: #f0f0f0;
    color: #aaa;
    font-weight: 400;
    -webkit-appearance: none; /* for box shadows to show on iOS */
  }

  .input__field:focus {
    outline: none;
  }

  .input__label {
    display: inline-block;
    float: right;
    padding: 0 1em;
    width: 40%;
    color: #696969;
    font-weight: bold;
    font-size: 70.25%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .input__label-content {
    position: relative;
    display: block;
    padding: 1.6em 0;
    width: 100%;
  }

  .input__field--yoshiko {
    width: 100%;
    background-color: #d0d1d0;
    border: 2px solid transparent;
    -webkit-transition: background-color 0.25s, border-color 0.25s;
    transition: background-color 0.25s, border-color 0.25s;
  }

  .input__label--yoshiko {
    width: 100%;
    text-align: left;
    position: absolute;
    bottom: 100%;
    pointer-events: none;
    overflow: hidden;
    padding: 0 1.25em;
    -webkit-transform: translate3d(0, 3em, 0);
    transform: translate3d(0, 3em, 0);
    -webkit-transition: -webkit-transform 0.25s;
    transition: transform 0.25s ;
    -webkit-transition-timing-function: ease-in-out;
    transition-timing-function: ease-in-out;
  }

  .input__label-content--yoshiko {
    color: #8B8C8B;
    padding: 0.25em 0;
    -webkit-transition: -webkit-transform 0.25s;
    transition: transform 0.25s;
    -webkit-transition-timing-function: ease-in-out;
    transition-timing-function: ease-in-out;
  }

  .input__label-content--yoshiko::after {
    content: attr(data-content);
    position: absolute;
    font-weight: 800;
    bottom: 100%;
    left: 0;
    height: 100%;
    width: 100%;
    color: #a3d39c;
    padding: 0.25em 0;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.85em;
  }

  .input__field--yoshiko:focus + .input__label--yoshiko,
  .input--filled .input__label--yoshiko {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .input__field--yoshiko:focus + .input__label--yoshiko .input__label-content--yoshiko,
  .input--filled .input__label-content--yoshiko {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  .input__field--yoshiko:focus + .input__field--yoshiko,
  .input--filled .input__field--yoshiko {
    background-color: transparent;
    border-color: #a3d39c;
  }
</style>
