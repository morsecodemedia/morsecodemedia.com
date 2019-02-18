<template>
  <div class="case-study-video">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe
        src="https://www.youtube.com/embed/P6d5_a-tPAg"
        class="embed-responsive-item"
        allowfullscreen />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VideoPlayer'
  }
</script>

<style lang="scss">
  .case-study-video {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
    "vd vd vd vd vd vd vd vd vd vd vd vd";
    padding: 20px;
    .embed-responsive {
      grid-area: vd;
      max-width: 100%;
      width: 100%;
      justify-self: center;
      object-fit: cover;

      &::before {
        display: block;
        content: "";
      }

      &.embed-responsive-16by9 {
        position: relative;
        display: block;
        width: 100%;
        padding: 0;
        overflow: hidden;
        padding-bottom: 56.25%;
      }

      .embed-responsive-item,
      iframe,
      embed,
      object,
      video {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
      }
    }
  }
  @media (min-width: 768px) {}
  @media (min-width: 992px) {
    .case-study-video {
      grid-template-rows: auto auto auto;
      grid-template-areas:
      ". .  .  .  .  .  .  .  .  .  .  . "
      ". vd vd vd vd vd vd vd vd vd vd . "
      ". .  .  .  .  .  .  .  .  .  .  . ";
    }
  }
  @media (min-width: 1200px) {}
</style>
