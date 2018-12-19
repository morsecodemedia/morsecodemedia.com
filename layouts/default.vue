<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang="scss">
  * {
    font-family: 'Muli', sans-serif;
    font-size: 22px;
    margin: 0;
    padding: 0;
  }

  .case-studies {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(153px, 1fr));
    grid-auto-rows: 75px;
    grid-auto-flow: dense;
    a {
      .case-study {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: relative;
        img {
          object-fit: cover;
          width: 100%;
          max-height: 100%;
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
          border-bottom: 1px solid #FFF;
          border-top: 1px solid #FFF;
          -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
          transition: opacity 0.35s, transform 0.35s;
          -webkit-transform: scale(0,1);
          -ms-transform: scale(0,1);
          transform: scale(0,1);
          h3 {
            text-transform: uppercase;
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
          a,
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
          a,
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
  @media (min-width: 576px) {
    .case-studies {
      grid-template-columns: repeat(auto-fit, minmax(253px, 1fr));
      grid-auto-rows: 126px;
    }
  }

  @media (min-width: 768px) {
    .case-studies {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-auto-rows: 250px;
    }
  }

  @media (min-width: 1200px) {

  }

  @media (min-width: 910px) and (max-width: 1214px) {

  }
</style>
