<template>
  <footer>
    <div class="footer-copyright">
      <ul
        v-if="about.socialMedia.length"
      >
        <li
          v-for="(sm, index) in about.socialMedia.filter((sm)=>sm.url)"
          :key="index"
        >
          <a
            :href="sm.url"
            :aria-label="'morsecodemedia on ' + sm.title.toLowerCase()"
            target="_blank"
            rel="noopener"
            role="link"
          >
            <font-awesome-icon
              :icon="['fab', sm.title.toLowerCase()]"
            />
          </a>
        </li>
      </ul>
      <p>&copy; 2005-{{ year }} MorseCodeMedia. <nobr>All rights reserved.</nobr></p>
    </div>
  </footer>
</template>

<script>
  import Vue from 'vue'
  import { about } from '~/components/config.json'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faGithub, faLinkedin, faStackOverflow, faSalesforce } from '@fortawesome/free-brands-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  library.add(faGithub, faLinkedin, faStackOverflow, faSalesforce)
  Vue.component('font-awesome-icon', FontAwesomeIcon)

  export default {
    name: 'Footer',
    data() {
      return {
        about: about,
        year: ''
      }
    },
    beforeMount: function () {
      this.year = (new Date()).getFullYear()
    }
  }
</script>

<style lang="scss" scoped>

  footer {
    background: $dk-grey;
    padding: 10px 0;
    .footer-copyright {
      p {
        color: $white;
        font-size: 16px;
        padding: 0 10px;
        text-align: center;
      }
      ul {
        text-align: center;
        margin-bottom: 15px;
        li {
          display: inline-block;
          a {
            color: $white;
            font-size: 18px;
            padding: 0 10px;
          }
        }
      }
    }
  }
</style>