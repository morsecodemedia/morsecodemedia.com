<template>
  <header>
    <div class="masthead">
      <div class="logo">
        <a
          href="/"
          @contextmenu="openMenu">&lt;morsecodemedia&gt;</a>
      </div>
      <div
        class="menu-btn"
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
      <ul>
        <li
          v-for="nav in navigation"
          :key="nav.index">
          <a
            :href="nav.url">
            {{ nav.text }}
          </a>
        </li>
      </ul>
    </nav>
    <nav
      v-el="right"
      v-if="viewMenu"
      id="right-click-menu"
      tabindex="-1"
      class="hidden-menu"
      @click="closeMenu">
      <ul>
        <li @click="showPwdProjects = !showPwdProjects">Toggle Hidden Case Studies</li>
        <li>Download PDF Resume</li>
      </ul>
    </nav>
  </header>
</template>

<script>
  import config from '~/components/config.json'

  export default {
    data() {
      return {
        viewMenu: false,
        top: '0px',
        left: '0px',
        navigation: config.navigation
      }
    },
    methods: {
      toggleMenu: function() {
        document.querySelector('.menu-btn').addEventListener('click', function() {
          if ( document.querySelector('.menu-icon').classList.contains('open') ) {
            document.querySelector('.menu-icon').classList.remove('open')
            document.querySelector('.main-nav').classList.remove('open')
            document.querySelector('.menu-label').innerHTML = 'menu'
          } else {
            document.querySelector('.menu-icon').classList.add('open')
            document.querySelector('.main-nav').classList.add('open')
            document.querySelector('.menu-label').innerHTML = 'close'
          }
        })
      },
      setMenu: function(top, left) {
        largestHeight = window.innerHeight - this.$$.right.offsetHeight - 25
        largestWidth = window.innerWidth - this.$$.right.offsetWidth - 25
        if (top > largestHeight) top = largestHeight
        if (left > largestWidth) left = largestWidth
        this.top = top + 'px'
        this.left = left + 'px'
      },
      closeMenu: function() {
        this.viewMenu = false
      },
      openMenu: function(e) {
        this.viewMenu = true
        Vue.nextTick(function() {
          this.$$.right.focus()
          this.setMenu(e.y, e.x)
        }.bind(this))
        e.preventDefault()
      }
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
      }
      ul {
        justify-self: center;
        list-style-type: none;
        li {
          margin-bottom: 55px;
          text-align: center;
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
      }
    }
    .hidden-menu {
      background: #222;
      border: 1px solid #BDBDBD;
      box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);
      display: block;
      list-style: none;
      margin: 0;
      padding: 0;
      position: absolute;
      z-index: 9999;
      width: 250px;
      li {
        border-bottom: 1px solid #E0E0E0;
        display: block;
        color: white;
        font-size: 12px;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        padding: 10px 0px;
        width: 100%;
        &:last-child {
          border-bottom: none;
        }
        &:hover {
          background: #1E88E5;
          color: #FAFAFA;
          cursor: pointer;
        }
      }
    }
  }
</style>