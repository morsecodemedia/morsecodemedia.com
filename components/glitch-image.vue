<template>
  <div class="glitch-image-container">
    <div class="slides slides--contained effect-2">
      <div class="slide slide--current">
        <div
          :class="[{'glitch--animate': glitchAnimate}, 'slide' + displaySlide]"
          class="slide__img glitch"
        >
          <div
            v-for="index in totalGlitchs"
            :key="index"
            :class="[{'glitch': (index >= glitchStep)}, 'slide'+currentSlide]"
            class="glitch__img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GlitchImage',
    data() {
      return {
        currentSlide: 0,
        displaySlide: 0,
        totalSlides: 5,
        totalGlitchs: 5,
        glitchAnimate: false,
        glitchStep: 0,
        glitchInterval: null,
        glitchSpeed: 600,
        slideShowInterval: null,
        slideShowSpeed: 8000
      }
    },
    watch: {
      currentSlide: function (newSlide, oldSlide) {
        this.glitchStep = this.totalGlitchs
        this.glitchInterval = setInterval(() => {
          this.glitchAnimate = true
          this.glitchStep--
          if (this.glitchStep < 0) {
            clearInterval(this.glitchInterval)
            this.displaySlide = this.currentSlide
            this.glitchAnimate = false
            this.$emit('updatedGlitch', 'glitch-'+this.displaySlide)
          }
        }, this.glitchSpeed)
      }
    },
    created() {
      this.slideShowInterval = setInterval(this.nextSlide, this.slideShowSpeed)
      this.nextSlide()
    },
    beforeDestroy() {
      clearInterval(this.slideShowInterval)
      clearInterval(this.glitchInterval)
    },
    methods: {
      nextSlide: function () {
        this.currentSlide = (this.currentSlide + 1 < this.totalSlides) ? this.currentSlide + 1 : 0
      }
    }
  }
</script>

<style lang="scss" scoped>

  .glitch-image-container {
    align-self: center;
    justify-self: center;
    height: 100%;
    width: 100%;
    background: #303970;
  }

  @media (min-width: 768px) {
    .slides {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      position: relative;
      .slide {
        position: absolute;
        height: 100%;
        width: 100%;
        .slide__img {
          height: 100%;
          width: 100%;
        }
      }
    }

    .slide0 {
      background: url('~assets/images/glitch/glitch-endo-mens-health-desktop.png') center center no-repeat;
      height: 100%;
      width: 100%;
    }
    .slide1 {
      background: url('~assets/images/glitch/glitch-endo-video-library-tablet.png') center center no-repeat;
      height: 100%;
      width: 100%;
    }
    .slide2 {
      background: url('~assets/images/glitch/glitch-merion-commercial-desktop.png') center center no-repeat;
      height: 100%;
      width: 100%;
    }
    .slide3 {
      background: url('~assets/images/glitch/glitch-xtra-kickstarts-tablet.png') center center no-repeat;
      height: 100%;
      width: 100%;
    }
    .slide4 {
      background: url('~assets/images/glitch/glitch-usarl-desktop.png') center center no-repeat;
      height: 100%;
      width: 100%;
    }

    .glitch {
      overflow: hidden;
      position: relative;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: cover;
      &.glitch__img {
        display: block;
      }
    }

    .glitch__img {
      position: absolute;
      width: 100%;
      height: 100%;
      transform: translate3d(0,0,0);
      background-color: transparent;
      background-blend-mode: normal;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: cover;
      display: none;
    }

    .glitch__img:nth-child(n+2) {
      opacity: 0;
    }

    .glitch--animate {
      .glitch__img:nth-child(n+2) {
        animation-duration: 2s;
        animation-delay: 0s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
      }

      .glitch__img:nth-child(2) {
        background-color: transparent;
        background-blend-mode: none;
        animation-name: glitch-anim-1;
      }

      .glitch__img:nth-child(3) {
        background-color: transparent;
        background-blend-mode: none;
        animation-name: glitch-anim-2;
      }

      .glitch__img:nth-child(4) {
        background-color: transparent;
        background-blend-mode: none;
        animation-name: glitch-anim-3;
      }

      .glitch__img:nth-child(5) {
        background-color: #af4949;
        background-blend-mode: overlay;
        animation-name: glitch-anim-flash;
      }
    }
  }

  @media (min-width: 992px) {

  }

  @media (min-width: 1200px) {

  }

  @keyframes glitch-anim-1 {
    0%, 100% {
      opacity: 1;
      transform: translate3d(10px,0,0) scale3d(-1,-1,1);
      -webkit-clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
      clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
    }
    20% {
      -webkit-clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
      clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
    }
    30% {
      -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
      clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
    }
    40% {
      -webkit-clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
      clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
    }
    50% {
      -webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
      clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
    }
    55% {
      -webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
      clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
    }
    60% {
      -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
      clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
    }
    65% {
      -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
      clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
    }
    70% {
      -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
      clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
    }
    80% {
      -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
      clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
    }
    85% {
      -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 65%, 0 65%);
      clip-path: polygon(0 60%, 100% 60%, 100% 65%, 0 65%);
    }
    95% {
      -webkit-clip-path: polygon(0 72%, 100% 72%, 100% 78%, 0 78%);
      clip-path: polygon(0 72%, 100% 72%, 100% 78%, 0 78%);
    }
  }

  @keyframes glitch-anim-2 {
    0%, 100% {
      opacity: 1;
      transform: translate3d(calc(-1 * 10px),0,0);
      -webkit-clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
      clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
    }
    10% {
      -webkit-clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
      clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
    }
    15% {
      -webkit-clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
      clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
    }
    17% {
      -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
      clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
    }
    19% {
      -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
      clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
    }
    33% {
      -webkit-clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
      clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
    }
    35% {
      -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
      clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
    }
    40% {
      -webkit-clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
      clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
    }
    45% {
      -webkit-clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
      clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
    }
    49% {
      -webkit-clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
      clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
    }
    50% {
      -webkit-clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
      clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
    }
    55% {
      -webkit-clip-path: polygon(0 15%, 100% 15%, 100% 35%, 0 35%);
      clip-path: polygon(0 15%, 100% 15%, 100% 35%, 0 35%);
    }
    60% {
      -webkit-clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
      clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
    }
    70% {
      -webkit-clip-path: polygon(0 65%, 100% 65%, 100% 60%, 0 60%);
      clip-path: polygon(0 65%, 100% 65%, 100% 60%, 0 60%);
    }
    80% {
      -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 85%, 0 85%);
      clip-path: polygon(0 80%, 100% 80%, 100% 85%, 0 85%);
    }
    90% {
      -webkit-clip-path: polygon(0 55%, 100% 55%, 100% 65%, 0 65%);
      clip-path: polygon(0 55%, 100% 55%, 100% 65%, 0 65%);
    }
  }

  @keyframes glitch-anim-3 {
    0%, 100% {
      opacity: 1;
      transform: translate3d(0, calc(-1 * 5px), 0) scale3d(-1,-1,1);
      -webkit-clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
      clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
    }
    5% {
      -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
      clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
    }
    11% {
      -webkit-clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
      clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
    }
    20% {
      -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
      clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
    }
    25% {
      -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
      clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
    }
    35% {
      -webkit-clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
      clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
    }
    42% {
      -webkit-clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
      clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
    }
    48% {
      -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
      clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
    }
    50% {
      -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
      clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
    }
    56% {
      -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
      clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
    }
    61% {
      -webkit-clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
      clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
    }
    68% {
      -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
      clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
    }
    72% {
      -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
      clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
    }
    77% {
      -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
      clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
    }
    81% {
      -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
      clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
    }
    86% {
      -webkit-clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
      clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
    }
    90% {
      -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
      clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
    }
    92% {
      -webkit-clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
      clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
    }
    94% {
      -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
      clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
    }
  }

  @keyframes glitch-anim-flash {
    0%, 5% {
      opacity: 0.2;
      transform: translate3d(10px, 5px, 0);
    }
    5.5%, 100% {
      opacity: 0;
      transform: translate3d(0, 0, 0);
    }
  }
</style>