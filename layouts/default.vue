<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    head () {
      return {
        title: 'The Porfolio of Brandon Morse | morsecodemedia.com',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Brandon Morse (morsecodemedia) is an award-winning web developer who has a passion to innovate and develop digital experiences.'
          },
          { hid: 'ogtitle', property: 'og:title', content: 'The Porfolio of Brandon Morse | morsecodemedia.com' },
          { hid: 'ogsitename', property: 'og:site_name', content: 'morsecodemedia.com' },
          { hid: 'ogtype', property: 'og:type', content: 'website' },
          { hid: 'ogurl', property: 'og:url', content: 'https://www.morsecodemedia.com/my-special-page' },
          { hid: 'ogimage', property: 'og:image', content: 'https://www.morsecodemedia.com/my-special-image.jpg' },
          { hid: 'ogdescription', property: 'og:description', content: 'Brandon Morse (morsecodemedia) is an award-winning web developer who has a passion to innovate and develop digital experiences.' },

          // Twitter card
          { hid: 'twcard', name: 'twitter:card', content: 'summary' },
          { hid: 'twsite', name: 'twitter:site', content: 'https://www.morsecodemedia.com/my-special-page' },
          { hid: 'twtitle', name: 'twitter:title', content: 'The Porfolio of Brandon Morse | morsecodemedia.com' },
          { hid: 'twdescription', name: 'twitter:description', content: 'Brandon Morse (morsecodemedia) is an award-winning web developer who has a passion to innovate and develop digital experiences.' },
          { hid: 'twcreator', name: 'twitter:creator', content: '@morsecodemedia' },
          { hid: 'twimage', name: 'twitter:image:src', content: 'https://www.morseodemedia.com/my-special-image.jpg' },

          // Google / Schema.org markup:
          { hid: 'googlename', itemprop: 'name', content: 'The Porfolio of Brandon Morse | morsecodemedia.com' },
          { hid: 'googledescrition', itemprop: 'description', content: 'Brandon Morse (morsecodemedia) is an award-winning web developer who has a passion to innovate and develop digital experiences.' },
          { hid: 'googleimage', itemprop: 'image', content: 'https://www.my-site.com/my-special-image.jpg '}
        ]
      }
    }
  }
</script>

<style lang="scss">
  * {
    font-family: 'Montserrat', sans-serif;
    font-display: auto;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Karla', sans-serif;
    font-display: auto;
    nobr {
      font-family: 'Karla', sans-serif;
      font-display: auto;
    }
    span {
      font-family: 'Karla', sans-serif;
      font-display: auto;
    }
  }

  h1 {
    font-size: 72px;
    margin-bottom: 25px;
  }

  h2 {
    font-size: 52px;
    margin-bottom: 25px;
  }

  h3 {
    font-size: 36px;
    padding-bottom: 15px;
    margin-bottom: 15px;
    text-transform: uppercase;
  }

  h4 {
    font-size: 30px;
  }

  h5 {
    font-size: 26px;
  }

  p {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 25px;
  }

  ul,
  ol {
    li {
      font-size: 20px;
      margin-bottom: 10px;
    }
    margin-bottom: 25px;
  }

  sup {
    vertical-align: super;
    font-size: 50%;
  }

  .case-studies {
    display: grid;
    grid-gap: 2px;
    grid-auto-flow: dense;
    a {
      &.case-study {
        display: flex;
        text-align: center;
        position: relative;
        overflow: hidden;
        img {
          object-fit: cover;
          height: 100%;
          width: 100%;
          -webkit-transition: all 0.35s;
          transition: all 0.35s;
        }
        .overlay {
          position: absolute;
          overflow: hidden;
          width: 80%;
          height: 80%;
          left: 10%;
          top: 10%;
          border-top: 1px solid #FFF;
          border-bottom: 1px solid #FFF;
          opacity: 1;
          filter: alpha(opacity=100);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        h3 {
          text-align: center;
          position: relative;
          justify-self: center;
          font-size: 22px;
          background-color: transparent;
          color: #FFF;
          padding: 1em 0;
        }
        p {
          color: #FFF;
          padding: 1em 0;
        }
        p,
        h3 {
          opacity: 1;
          filter: alpha(opacity=100);
          -webkit-transform: translate3d(0,0,0);
          transform: translate3d(0,0,0);
        }
        img {
          filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.6" /><feFuncG type="linear" slope="0.6" /><feFuncB type="linear" slope="0.6" /></feComponentTransfer></filter></svg>#filter');
          filter: brightness(0.6);
          -webkit-filter: brightness(0.6);
        }
      }
    }

  }
  .link-bar {
    background: white;
    padding: 45px 25px;
    a {
      color: #222;
      font-size: 24px;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
  nav {
    &.case-studies-filter {
      ul {
        text-align: center;
        li {
          display: inline-block;
          margin: 0 5px;
          padding: 20px 10px;
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
          &.disabled {
            color: #999;
            pointer-events: none;
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 72px;
    }
    h2 {
      font-size: 52px;
    }
    h3 {
      font-size: 36px;
    }
    h4 {
      font-size: 30px;
    }
    h5 {
      font-size: 26px;
    }
    p {
      font-size: 20px;
    }
    ul {
      li {
        font-size: 20px;
      }
    }
  }

  @media (min-width: 992px) {
    h1 {
      font-size: 72px;
    }
    h2 {
      font-size: 52px;
    }
    h3 {
      font-size: 36px;
    }
    h4 {
      font-size: 30px;
    }
    h5 {
      font-size: 26px;
    }
    p {
      font-size: 20px;
    }
    ul {
      li {
        font-size: 20px;
      }
    }
    .case-studies {
      a {
        &.case-study {
          .overlay {
            position: absolute;
            overflow: hidden;
            width: 80%;
            height: 80%;
            left: 10%;
            top: 10%;
            border-bottom: 1px solid #FFF;
            border-top: 1px solid #FFF;
            -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
            transition: opacity 0.35s, transform 0.35s;
            -webkit-transform: scale(0,1);
            -ms-transform: scale(0,1);
            transform: scale(0,1);
            h3 {
              text-align: center;
              position: relative;
              justify-self: center;
              font-size: 22px;
              background-color: transparent;
              color: #FFF;
              padding: 1em 0;
              opacity: 0;
              filter: alpha(opacity=0);
              -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
              transition: opacity 0.35s, transform 0.35s;
              -webkit-transform: translate3d(0,-100%,0);
              transform: translate3d(0,-100%,0);
            }
            p {
              color: #FFF;
              padding: 1em 0;
              opacity: 0;
              filter: alpha(opacity=0);
              -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
              transition: opacity 0.35s, transform 0.35s;
              -webkit-transform: translate3d(0,100%,0);
              transform: translate3d(0,100%,0);
            }
          }
          img {
            filter: none;
          }
          &:hover {
            cursor: pointer;
            .overlay {
              opacity: 1;
              filter: alpha(opacity=100);
              -webkit-transform: scale(1);
              -ms-transform: scale(1);
              transform: scale(1);
              display: flex;
              align-items: center;
              justify-content: center;
            }
            img {
              filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.6" /><feFuncG type="linear" slope="0.6" /><feFuncB type="linear" slope="0.6" /></feComponentTransfer></filter></svg>#filter');
              filter: brightness(0.6);
              -webkit-filter: brightness(0.6);
            }
            p,
            h3 {
              opacity: 1;
              filter: alpha(opacity=100);
              -webkit-transform: translate3d(0,0,0);
              transform: translate3d(0,0,0);
            }
          }
        }
      }
    }
  }
  @media (max-width: 514px) { // 1 up
    .case-studies {
      grid-template-columns: 1fr;
      grid-auto-rows: 150px;
    }
    .regular-1 {
      grid-column: span 1;
      grid-row: span 1;
    }
  }
  @media (min-width: 515px) and (max-width: 767px) { // 2 up
    .case-studies {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 250px;
    }
    .regular-2 {
      grid-column: span 1;
      grid-row: span 1;
    }
    .double-2 {
      grid-column: span 2;
      grid-row: span 2;
    }
    .horizontal-2 {
      grid-column: span 2;
      grid-row: span 1;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) { // 3 up
    .case-studies {
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 250px;
    }
    .regular-3 {
      grid-column: span 1;
      grid-row: span 1;
    }
    .double-3 {
      grid-column: span 2;
      grid-row: span 2;
    }
    .horizontal-3 {
      grid-column: span 2;
      grid-row: span 1;
    }
    .landscape-3 {
      grid-column: span 4;
      grid-row: span 1;
    }
    .vertical-3 {
      grid-column: span 1;
      grid-row: span 2;
    }
  }
  @media (min-width: 992px) and (max-width: 1200px) { // 4 up
    .case-studies {
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 250px;
    }
    .regular-4 {
      grid-column: span 1;
      grid-row: span 1;
    }
    .double-4 {
      grid-column: span 2;
      grid-row: span 2;
    }
    .horizontal-4 {
      grid-column: span 2;
      grid-row: span 1;
    }
    .landscape-4 {
      grid-column: span 4;
      grid-row: span 1;
    }
    .vertical-4 {
      grid-column: span 1;
      grid-row: span 2;
    }
  }

  @media (min-width: 1200px) { // 5 up
    .case-studies {
      grid-template-columns: repeat(5, 1fr);
      grid-auto-rows: 300px;
    }
    .regular-5 {
      grid-column: span 1;
      grid-row: span 1;
    }
    .double-5 {
      grid-column: span 2;
      grid-row: span 2;
    }
    .horizontal-5 {
      grid-column: span 2;
      grid-row: span 1;
    }
    .landscape-5 {
      grid-column: span 4;
      grid-row: span 1;
    }
    .vertical-5 {
      grid-column: span 1;
      grid-row: span 2;
    }
  }

</style>
