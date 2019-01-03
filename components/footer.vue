<template>
  <footer>
    <div class="footer-content">
      <p v-if="footerCopy"><span>{{ footerLeader }}</span> {{ footerCopy }}</p>
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
        year: '',
        footerLeader: 'Your website should be your strongest business asset.',
        footerCopy: 'It represents your brand to the world, and needs to interface with your customers like one of the team. That’s why we start every project with a conversation — to ensure your web design, web development, and digital strategy align with your goals, every step of the way.',
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
    grid-template-rows: repeat(7, 60px);
    grid-template-areas:
    "fc  fc  fc  fc  fc  fc  fc  fc  fc  fc  fc  fc "
    "fc  fc  fc  fc  fc  fc  fc  fc  fc  fc  fc  fc "
    "fc  fc  fc  fc  fc  fc  fc  fc  fc  fc  fc  fc "
    "fc  fc  fc  fc  fc  fc  fc  fc  fc  fc  fc  fc "
    "fc  fc  fc  fc  fc  fc  fc  fc  fc  fc  fc  fc "
    "fc  fc  fc  fc  fc  fc  fc  fc  fc  fc  fc  fc "
    "fcr fcr fcr fcr fcr fcr fcr fcr fcr fcr fcr fcr";
    padding: 30px 0 0 0;
    .footer-content {
      grid-area: fc;
      p {
        color: white;
        font-family: 'Playfair Display', serif;
        font-weight: normal;
        padding: 0 20px;
        span {
          font-weight: bold;
          text-transform: uppercase;
          display: inline-flex;
          &:after {
            content: "\A";
            white-space: pre;
          }
        }
      }
    }
    .footer-copyright {
      background: #222;
      grid-area: fcr;
      height: 100%;
      margin: 20px 0 0 0;
      p {
        color: white;
        font-size: 12px;
        padding: 0 10px;
        margin: 10px 0 0 0;
        text-align: center;
      }
    }
  }
</style>