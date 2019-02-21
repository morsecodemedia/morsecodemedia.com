<template>
  <section class="section-outro">
    <header>
      <h4
        v-html="outro.header"/>
    </header>
    <p
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
    background: rgba(147,206,222,1);
    background: -moz-radial-gradient(center, ellipse cover, rgba(147,206,222,1) 0%, rgba(117,189,209,1) 41%, rgba(73,165,191,1) 100%);
    background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, rgba(147,206,222,1)), color-stop(41%, rgba(117,189,209,1)), color-stop(100%, rgba(73,165,191,1)));
    background: -webkit-radial-gradient(center, ellipse cover, rgba(147,206,222,1) 0%, rgba(117,189,209,1) 41%, rgba(73,165,191,1) 100%);
    background: -o-radial-gradient(center, ellipse cover, rgba(147,206,222,1) 0%, rgba(117,189,209,1) 41%, rgba(73,165,191,1) 100%);
    background: -ms-radial-gradient(center, ellipse cover, rgba(147,206,222,1) 0%, rgba(117,189,209,1) 41%, rgba(73,165,191,1) 100%);
    background: radial-gradient(ellipse at center, rgba(147,206,222,1) 0%, rgba(117,189,209,1) 41%, rgba(73,165,191,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#93cede', endColorstr='#49a5bf', GradientType=1 );

    color: $white;
    padding: 80px 125px 80px 40px;
    h4 {
      border-bottom: 4px solid $white;
      display: inline-block;
      font-size: 32px;
      margin: 0 0 45px 0;
      padding: 0 75px 15px 0;
      text-transform: uppercase;
    }
    p {
      font-size: 26px;
    }
  }

  @media (min-width: 768px) {

  }

  @media (min-width: 992px) {

  }

  @media (min-width: 1200px) {

  }
</style>