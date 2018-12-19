<template>
  <footer>
    <nav class="footer-nav">
      <ul v-if="navigation">
        <li
          v-for="nav in navigation"
          :key="nav.id">
          <a :href="nav.url">{{ nav.text }}</a>
        </li>
      </ul>
    </nav>
    <div class="footer-content">
      <p v-if="footerCopy">{{ footerCopy }}</p>
      <img
        v-if="certificationBadge"
        :src="certificationBadge.image"
        :alt="certificationBadge.altText">
    </div>
    <div class="footer-copyright">
      <p>&copy; 2005-{{ year }} MorseCodeMedia. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        navigation: [
          {
            url: '/',
            text: 'Home'
          },
          {
            url: '/about/',
            text: 'About'
          },
          {
            url: '/case-studies/',
            text: 'Case Studies'
          },
          {
            url: 'https://blog.morsecodemedia.com/',
            text: 'Blog'
          },
          {
            url: '/contact/',
            text: 'Contact'
          }
        ],
        year: '',
        footerCopy: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorum laboriosam eius vel possimus hic modi, quo eum nostrum voluptatum magnam animi aliquam assumenda eveniet tempora, excepturi odit incidunt veritatis.',
        certificationBadge: {
          image: '',
          altText: ''
        }
      }
    },
    beforeMount: function () {
      this.year = (new Date()).getFullYear()
    }
  }
</script>

<style lang="scss" scoped>
  footer {
    background: #666;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(7, 40px);
    grid-template-areas:
    "fn  fn  fn  fn  fn  fn  fc  fc  fc  fc  fc  fc "
    "fn  fn  fn  fn  fn  fn  fc  fc  fc  fc  fc  fc "
    "fn  fn  fn  fn  fn  fn  fc  fc  fc  fc  fc  fc "
    "fn  fn  fn  fn  fn  fn  fc  fc  fc  fc  fc  fc "
    "fn  fn  fn  fn  fn  fn  fc  fc  fc  fc  fc  fc "
    "fn  fn  fn  fn  fn  fn  fc  fc  fc  fc  fc  fc "
    "fcr fcr fcr fcr fcr fcr fcr fcr fcr fcr fcr fcr";
    padding: 30px 0 0 0;
    nav {
      .footer-nav {
        grid-area: fn;
        ul {
          align-self: center;
          justify-self: center;
          list-style: none;
          margin-left: 20px;
          li {
            padding: 10px 0px;
          }
        }
      }
    }
    .footer-content {
      grid-area: fc;
    }
    .footer-copyright {
      background: #222;
      grid-area: fcr;
      height: 100%;
      margin: 20px 0 0 0;
      p {
        color: white;
        padding: 5px 10px 0;
        margin: 0px;
        justify-self: center;
      }
    }
  }
</style>