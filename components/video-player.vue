<template>
  <div class="section-video-player">
    <div
      class="case-study-video embed-responsive embed-responsive-item embed-responsive-16by9">
      <div
        v-video-player:myVideoPlayer="playerOptions"
        :playsinline="playsinline"
        class="video-container video-js"
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
        @ended="onPlayerEnded($event)"
        @loadeddata="onPlayerLoadeddata($event)"
        @waiting="onPlayerWaiting($event)"
        @playing="onPlayerPlaying($event)"
        @timeupdate="onPlayerTimeupdate($event)"
        @canplay="onPlayerCanplay($event)"
        @canplaythrough="onPlayerCanplaythrough($event)"
        @ready="playerReadied"
        @statechanged="playerStateChanged($event)" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VideoPlayer',
    props: {
      video: {
        type: Object,
        required: true,
        twoWay: true,
        default: () => {}
      }
    },
    head () {
      return {
        link: [
          { rel: 'stylesheet', href: 'https://vjs.zencdn.net/7.4.1/video-js.css' }
        ]
      }
    },
    data() {
      return {
        playsinline: true,
        playerOptions: {
          muted: true,
          language: 'en',
          playbackRates: [0.5, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "/placeholder-video.mp4"
          }],
          poster: "https://www.fillmurray.com/g/900/500",
        }

      }
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      onPlayerEnded(player) {
        // console.log('player ended!', player)
      },
      onPlayerLoadeddata(player) {
        // console.log('player Loadeddata!', player)
      },
      onPlayerWaiting(player) {
        // console.log('player Waiting!', player)
      },
      onPlayerPlaying(player) {
        // console.log('player Playing!', player)
      },
      onPlayerTimeupdate(player) {
        // console.log('player Timeupdate!', player.currentTime())
      },
      onPlayerCanplay(player) {
        // console.log('player Canplay!', player)
      },
      onPlayerCanplaythrough(player) {
        // console.log('player Canplaythrough!', player)
      },
      // or listen state event
      playerStateChanged(playerCurrentState) {
        console.log('player current update state', playerCurrentState)
      },
      // player is ready
      playerReadied(player) {
        console.log('example 01: the player is readied', player)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .case-study-video {
    display: relative;
    height: 100%;
    padding: 10px;
    // &.embed-responsive {
    //   position: relative;
    //   display: block;
    //   height: 0;
    //   padding: 0;
    //   overflow: hidden;
    // }
    // &.embed-responsive-item,
    // iframe,
    // embed,
    // object,
    // video {
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   bottom: 0;
    //   height: 100%;
    //   width: 100%;
    //   border: 0;
    // }
    // &.embed-responsive-16by9 {
    //   padding-bottom: 56.25%;
    // }
    .video-js {
      position: relative;
      margin: 0 auto;
      height: 50vh;
      width: 100%;
      &.vjs-no-flex {
        .vjs-menu-button-inline {
          width: 10em;
        }
      }
      &.vjs-ended,
      &.vjs-paused,
      &.vjs-has-started {
        .vjs-big-play-button {
          display: block;
        }
      }
      &.vjs-ended {
        .vjs-loading-spinner {
          display: none;
        }
      }
      .vjs-menu-button-inline {
        &:focus,
        &:hover
        &.vjs-slider-active {
          width: 10em;
        }
        :before {
          width: 1.5em;
        }
        .vjs-menu {
          left: 3em;
        }
      }
      .vjs-seeking,
      .vjs-waiting,
      .vjs-playing,
      .vjs-controls-disabled {
        .vjs-big-play-button {
          display: none !important;
        }
      }
      .vjs-load-progress {
        &:after {
          padding: 0 .4em .3em;
        }
        div {
          display: none !important;
        }
      }
      .vjs-mouse-display {
        &:after {
          padding: 0 .4em .3em;
        }
      }
      .vjs-control {
        width: 3em;
      }
      &:hover {
        .vjs-big-play-button {
          background-color: null;
        }
      }
      .vjs-big-play-button {
        top: 50%;
        left: 50%;
        margin-left: -1.5em;
        margin-top: -1em;
        background-color: null;
        font-size: 3em;
        border-radius: 12%;
        height: 1.7em !important;
        line-height: 1.7em !important;
        margin-top: -0.85em !important;
        &:focus,
        &:active {
          background-color: null;
        }
      }
      .vjs-loading-spinner {
        border-color: null;
      }
      .vjs-control-bar2 {
        background-color: #000000;
      }
      .vjs-control-bar {
        background-color: !important;
        color: null;
        font-size: 10px;
      }
      .vjs-play-progress,
      .vjs-volume-level {
        background-color: null;
      }
    }
  }
  @media (min-width: 768px) {
    .case-study-video {
      .video-js {

      }
    }
  }
  @media (min-width: 992px) {
    .case-study-video {
      .video-js {

      }
    }
  }
  @media (min-width: 1200px) {
    .case-study-video {
      .video-js {
        height: -webkit-fill-available;
      }
    }
  }
</style>
