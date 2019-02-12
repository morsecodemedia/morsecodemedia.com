<template>
  <header>
    <div class="masthead">
      <div class="logo">
        <a
          href="/"
          role="link">
          <span>&lt;</span>morsecodemedia<span>&gt;</span>
        </a>
      </div>
      <div
        class="menu-btn"
        aria-label="Menu"
        aria-controls="navigation"
        role="button"
        @click="toggleMenu">
        <div class="menu-icon">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div class="menu-label">Menu</div>
      </div>
    </div>
    <nav
      v-if="navigation.length > 0"
      class="main-nav">
      <ul
        class="site-nav">
        <li
          v-for="nav in navigation"
          :key="nav.index">
          <a
            :href="nav.url"
            role="menuitem">
            {{ nav.text }}
          </a>
        </li>
      </ul>
      <ul
        v-if="socialMedia.length"
        class="social-nav">
        <li
          v-for="(sm, index) in socialMedia.filter((sm)=>sm.url)"
          :key="index">
          <a
            :href="sm.url"
            target="_blank"
            rel="noopener"
            role="link">
            <font-awesome-icon
              :icon="['fab', sm.title.toLowerCase()]" />
          </a>
        </li>
      </ul>
      <ul
        class="user-pref">
        <li
          @click="toggleProjects"
          role="switch">
          <span
            v-if="!showPwdProjects">
            <font-awesome-icon
              icon="lock" />
            &nbsp;
            Show Protected Case Studies
          </span>
          <span
            v-else>
            <font-awesome-icon
              icon="lock-open" />
            &nbsp;
            Hide Protected Case Studies
          </span>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  import Vue from 'vue'
  import { mapGetters, mapMutations } from 'vuex'
  import { navigation, about } from '~/components/config.json'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
  import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  library.add(faGithub, faLinkedin, faStackOverflow, faLock, faLockOpen)
  Vue.component('font-awesome-icon', FontAwesomeIcon)

  export default {
    name: 'Header',
    data() {
      return {
        viewMenu: false,
        top: '0px',
        left: '0px',
        navigation: navigation,
        socialMedia: about.socialMedia
      }
    },
    computed: {
      ...mapGetters('casestudies', [
        'showPwdProjects'
      ])
    },
    methods: {
      toggleMenu: function() {
        if ( document.querySelector('.menu-icon').classList.contains('open') ) {
          document.querySelector('.menu-icon').classList.remove('open')
          document.querySelector('.main-nav').classList.remove('open')
          document.querySelector('.menu-label').innerHTML = 'menu'
        } else {
          document.querySelector('.menu-icon').classList.add('open')
          document.querySelector('.main-nav').classList.add('open')
          document.querySelector('.menu-label').innerHTML = 'close'
        }
      },
      ...mapMutations('casestudies', [
        'toggleProjects'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  header {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;
    .masthead {
      background: #222;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: auto auto;
      grid-template-areas:
      "logo logo logo logo logo logo logo logo logo logo logo mbtn";
      .logo {
        background: #222;
        color: white;
        font-size: 26px;
        grid-area: logo;
        padding: 10px;
        align-self: center;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        span {
          font-size: 32px;
          line-height: 0;
          position: relative;
          top: 4px;
          display: inline-block;
          margin: 0;
          padding: 0;
        }
        & > a,
        & > a:visited,
        & > a:hover {
          color: white;
          text-decoration: none;
        }
      }
      .menu-btn {
        background: #333;
        color: white;
        cursor: pointer;
        grid-area: mbtn;
        padding: 10px;
        text-align: center;
        .menu-icon {
          -webkit-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          transform: rotate(0deg);
          -webkit-transition: .5s ease-in-out;
          -moz-transition: .5s ease-in-out;
          -o-transition: .5s ease-in-out;
          transition: .5s ease-in-out;
          span {
            display: block;
            position: absolute;
            height: 3px;
            width: 50%;
            background: white;
            border-radius: 9px;
            opacity: 1;
            left: 25%;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition: .25s ease-in-out;
            -moz-transition: .25s ease-in-out;
            -o-transition: .25s ease-in-out;
            transition: .25s ease-in-out;
            &:nth-child(1) {
              top: 0px;
            }
            &:nth-child(2),
            &:nth-child(3) {
              top: 10px;
            }
            &:nth-child(4) {
              top: 20px;
            }
          }
          &.open {
            span {
              &:nth-child(1) {
                top: 10px;
                width: 0%;
                left: 50%;
              }
              &:nth-child(2) {
                -webkit-transform: rotate(45deg);
                -moz-transform: rotate(45deg);
                -o-transform: rotate(45deg);
                transform: rotate(45deg);
              }
              &:nth-child(3) {
                -webkit-transform: rotate(-45deg);
                -moz-transform: rotate(-45deg);
                -o-transform: rotate(-45deg);
                transform: rotate(-45deg);
              }
              &:nth-child(4) {
                top: 10px;
                width: 0%;
                left: 50%;
              }
            }
          }
        }
        .menu-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 18px;
          margin-top: 30px;
          text-transform: uppercase;
          pointer-events: none;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      }
    }
    .main-nav {
      display: none;
      position: sticky;
      height: 100vh;
      width: 100vw;
      align-items: center;
      justify-content: center;
      background: #222;
      &.open {
        display: flex;
        align-content: space-between;
        flex-direction: column;
      }
      ul {
        list-style-type: none;
        li {
          text-align: center;
          color: white;
          a {
            color: white;
            font-size: 32px;
            text-decoration: none;
            text-transform: uppercase;
            &:hover {
              cursor: pointer;
              text-decoration: underline;
            }
          }
        }
        &.site-nav {
          height: 50vh;
          list-style-type: none;
          align-content: space-between;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
        }
        &.social-nav {
          li {
            display: inline-block;
            margin: 0 15px 0 0;
            a {
              font-size: 18px;
              padding: 0 15px;
            }
          }
        }
        &.user-pref {
          li {
            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
</style>