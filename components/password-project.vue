<template>
  <div class="password-overlay">
    <p>Due to contractual restrictions, I am obligated to inform you that the work for this project was done while working for an pharmaceutical advertising agency. <span
      class="btn"
      @click="showCaseStudy">Click here</span> to confirm that you want to view this project. Otherwise, <nuxt-link
      :to="'/case-studies/'">click here</nuxt-link> to go back to the case study listings.</p>
  </div>
</template>

<script>
  export default {
    name: 'PasswordProject',
    methods: {
      showCaseStudy: function() {
        let overlay = document.getElementsByClassName('password-overlay')
        for (var i=0; i < overlay.length; ++i) {
          overlay[i].classList.remove('show')
        }
      }
    }
  }
</script>

<style lang="scss">
  .password-overlay {
    display: none;
    position: fixed;
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,.95);
    color: white;
    top: 0px;
    left: 0px;
    z-index: 1;
    &.show {
      display: flex;
    }
    p {
      width: 80vw;
      .btn {
        display: flex;
        background: greenyellow;
        padding: 10px;
        margin: 10px 0;
        justify-self: center;
        align-self: center;
        color: black;
        text-align: center;
        border-radius: 5px;
        text-transform: uppercase;
        cursor: pointer;
        &:before {
          content: "\A";
          white-space: pre;
        }
        &:after {
          content: "\A";
          white-space: pre;
        }
      }
      a {
        color: red;
        text-decoration: underline;
      }
    }
  }

  @media (min-width: 768px) {
    .password-overlay {
      p {
        width: 50vw;
      }
    }
  }

  @media (min-width: 992px) {
    .password-overlay {
      p {
        width: 50vw;
      }
    }
  }

  @media (min-width: 1200px) {
    .password-overlay {
      p {
        width: 30vw;
      }
    }
  }
</style>
