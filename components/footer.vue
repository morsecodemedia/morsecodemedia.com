<template>
  <footer>
    <div class="footer-copyright">
      <p>&copy; 2005-{{ year }} MorseCodeMedia. All rights reserved.</p>
      <ul
        v-if="config.about.socialMedia.length">
        <li
          v-for="(sm, index) in config.about.socialMedia"
          v-if="sm.url"
          :key="index">
          <a
            :href="sm.url"
            target="_blank">
            {{ sm.title }}
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
  import config from '~/components/config.json'

  export default {
    data() {
      return {
        config: config,
        year: '',
        footerLeader: 'Your website should be your strongest business asset.',
        footerCopy: 'It represents your brand to the world, and needs to interface with your customers like one of the team. That’s why we start every project with a conversation — to ensure your web design, web development, and digital strategy align with your goals, every step of the way.'
      }
    },
    beforeMount: function () {
      this.year = (new Date()).getFullYear()
    }
  }
</script>

<style lang="scss" scoped>
  footer {
    background: #222;
    padding: 10px 0;
    .footer-copyright {
      p {
        color: white;
        font-size: 12px;
        padding: 0 10px;
        text-align: center;
      }
      ul {
        text-align: center;
        li {
          display: inline-block;
          a {
            color: white;
            font-size: 12px;
            padding: 0 10px;
          }
        }
      }
    }
  }
</style>