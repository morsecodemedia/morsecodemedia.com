<template>
  <section class="section-outro">
    <header>
      <h4
        v-html="outro.header" />
    </header>
    <div
      v-html="outro.body" />
  </section>
</template>

<script>

  export default {
    name: 'SectionOutro',
    props: {
      outro: {
        type: Object,
        required: true,
        twoWay: true,
        default: () => {}
      }
    }
  }
</script>

<style lang="scss">

  .section-outro{
    background: #485563;
    background: -moz-radial-gradient(center, ellipse cover, #485563, #29323C);
    background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, #485563), color-stop(100%, #29323C));
    background: -webkit-radial-gradient(center, ellipse cover, #485563, #29323C);
    background: -o-radial-gradient(center, ellipse cover, #485563, #29323C);
    background: -ms-radial-gradient(center, ellipse cover, #485563, #29323C);
    background: radial-gradient(ellipse at center, #485563, #29323C);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#485563', endColorstr='#29323C', GradientType=1 );
    color: $white;
    padding: 80px 125px 80px 40px;
    min-height: 50vh;
    h4 {
      border-bottom: 2px solid $white;
      display: inline-block;
      font-size: 32px;
      margin: 0 0 45px 0;
      padding: 0 75px 15px 0;
      text-transform: uppercase;
    }
    p {
      font-weight: 400;
      font-size: 26px;
      line-height: 36px;
      a {
        color: inherit;
        text-decoration: underline #56a68d;
      }
    }
  }

  @media (min-width: 768px) {

  }

  @media (min-width: 992px) {

  }

  @media (min-width: 1200px) {

  }
</style>