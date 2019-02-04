<template>
  <div class="section-hero">
    <div>
      <h1 v-html="hero.header" />
      <p v-html="hero.copy" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SectionHero',
    props: {
      hero: {
        type: Object,
        required: true,
        twoWay: true,
        default: () => {}
      }
    }
  }
</script>

<style lang="scss">
  .section-hero {
    background: #ffaf4b;
    background: -moz-radial-gradient(center, ellipse cover, #ffaf4b 0%, #ff920a 100%);
    background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, #ffaf4b), color-stop(100%, #ff920a));
    background: -webkit-radial-gradient(center, ellipse cover, #ffaf4b 0%, #ff920a 100%);
    background: -o-radial-gradient(center, ellipse cover, #ffaf4b 0%, #ff920a 100%);
    background: -ms-radial-gradient(center, ellipse cover, #ffaf4b 0%, #ff920a 100%);
    background: radial-gradient(ellipse at center, #ffaf4b 0%, #ff920a 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffaf4b', endColorstr='#ff920a', GradientType=1 );

    height: 75vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      width: 75vw;
      h1 {
        border-bottom: 4px solid white;
        color: white;
        display: inline-block;
        font-size: 56px;
        padding: 0 0 10px 0;
        margin: 0 0 25px 0;
        text-transform: uppercase;
      }
      p {
        color: white;
      }
    }
  }
  @media (min-width: 768px) {
    .section-hero {
      div {
        h1 {
          font-size: 72px;
        }
      }
    }
  }
</style>
