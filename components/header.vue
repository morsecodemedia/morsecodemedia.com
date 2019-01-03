<template>
  <header>
    <div class="logo">
      <a href="/">&lt;morsecodemedia&gt;</a>
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
  </header>
</template>

<script>
  export default {
    methods: {
      toggleMenu: function() {
        document.querySelector('.menu-btn').addEventListener('click', function() {
        if ( document.querySelector('.menu-icon').classList.contains('open') ) {
          document.querySelector('.menu-icon').classList.remove('open');
          document.querySelector('.main-nav').classList.remove('open');
          document.querySelector('.menu-label').innerHTML = 'menu';
        } else {
          document.querySelector('.menu-icon').classList.add('open');
          document.querySelector('.main-nav').classList.add('open');
          document.querySelector('.menu-label').innerHTML = 'close';
        }
      });
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
      }
    }
  }
</style>