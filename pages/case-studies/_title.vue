<template>
  <section class="container">
    <siteHeader />
    <main>
      <div
        v-for="(cs, index) in activeCaseStudy"
        :key="index">
        <div>
          <div
            :style="{'background-color': cs.overview.bgColor}"
            class="case-study-intro">
            <div class="case-study-intro-copy">
              <header>
                <h1 :style="{color: cs.overview.titleColor}">{{ cs.title }}</h1>
                <h2
                  :style="{color: cs.overview.descriptionColor}"
                  v-html="cs.overview.description" />
              </header>
              <p><a
                :style="{color: cs.overview.titleColor}"
                :href="cs.url"
                target="_blank"
                rel="noopener">{{ cs.url }}</a></p>
              <p
                :style="{color: cs.overview.descriptionColor}"
                class="case-study-meta">
                {{ cs.category }} //
                {{ cs.yearStart }} - <span
                  v-if="cs.yearEnd !== ''"
                  :style="{color: cs.overview.descriptionColor}">{{ cs.yearEnd }}</span><span
                    v-else
                    :style="{color: cs.overview.descriptionColor}">Present</span>
              </p>
              <div class="scroll-downs">
                <div
                  :style="{border: '2px ' + 'solid ' + cs.overview.titleColor}"
                  class="mousey">
                  <div
                    :style="{'background-color': cs.overview.titleColor}"
                    class="scroller"/>
                </div>
              </div>
            </div>
          </div>

          <!-- <div
            v-if="cs.video"
            :style="{'background-color': cs.overview.bgColor}"
            class="case-study-video embed-responsive embed-responsive-16by9">
            <iframe
              :src="'https://player.vimeo.com/video/' + cs.video"
              width="1200"
              height="360"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen />
          </div> -->
          <div class="case-study-video embed-responsive embed-responsive-item embed-responsive-16by9">
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

          <div
            :style="{'background-color': cs.overview.bgColor}"
            class="description-container">
            <div
              v-for="(des, index) in activeDescription"
              :key="index"
              :class="(des.type === 'description') ? 'text-block' : 'img-block'"
              :style="{color: des.fontColor, 'background-color': des.bgColor}">
              <header>
                <h3
                  v-if="des.type === 'description' && des.title"
                  :style="{'border-bottom': '4px ' + 'solid ' + des.fontColor}">{{ des.title }} </h3>
              </header>
              <p
                v-if="des.type === 'description' && des.description"
                v-html="des.description" />

              <img
                v-if="des.type === 'image' && des.src"
                :src="des.src"
                alt=""
                role="img">
            </div>
          </div>

          <div
            v-if="cs.awards.length"
            class="case-study-awards">
            <h3>Awards</h3>
            <ul>
              <li
                v-for="(award, index) in cs.awards"
                :key="index">
                {{ award.year }} {{ award.award }} <nobr>from {{ award.organization }}</nobr>
              </li>
            </ul>
          </div>

          <div
            v-if="cs.insitu.img.length"
            :style="{background: 'linear-gradient' + '(135deg, ' + cs.insitu.color1 + ' 0%, ' + cs.insitu.color2 + ' 100%)'}"
            class="case-study-insitu">
            <img
              :src="cs.insitu.img"
              alt=""
              role="img">
          </div>
        </div>

        <div
          :class="(cs.needsPassword) ? 'show' : ''"
          class="password-overlay">
          <p>Due to contractual restrictions, I am obligated to inform you that the work for this project was done while working for an pharmaceutical advertising agency. <span
            class="btn"
            @click="showCaseStudy">Click here</span> to confirm that you want to view this project. Otherwise, <nuxt-link
            :to="'/case-studies/'">click here</nuxt-link> to go back to the case study listings.</p>
        </div>
      </div>
    </main>
    <siteFooter />
  </section>
</template>

<script>
  import config from '~/components/config.json'
  import siteHeader from '~/components/header.vue'
  import siteFooter from '~/components/footer.vue'

  export default {
    components: {
      siteHeader,
      siteFooter
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
        caseStudies: config.caseStudies,
        playsinline: true,

        // videojs options
        playerOptions: {
          muted: true,
          language: 'en',
          playbackRates: [0.5, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "/placeholder-video.mp4"
          }],
          // poster: "/static/images/author.jpg",
        }

      }
    },
    computed: {
      activeCaseStudy() {
        return this.caseStudies
          .filter(caseStudy =>
            this.$route.params.title === caseStudy.title.toLowerCase()
              .replace(/[.\s]/g, '-')
              .replace(/[&#,+()$~%'":*?<>{}]/g, '' ))
      },
      activeDescription() {
        let description = this.activeCaseStudy[0].description || []
        let images = this.activeCaseStudy[0].gallery || []
        let returnArray = []
        for (var i=0; i < Math.max(description.length, images.length); ++i) {
          if (description[i] && description[i].description !== '') {
            returnArray.push({
              'type': 'description',
              'title': description[i].title,
              'description': description[i].description,
              'fontColor': description[i].fontColor,
              'bgColor': description[i].bgColor
              })
          }
          if (images[i]) {
            if (description[i]) {
              returnArray.push({
                'type': 'image',
                'src': images[i],
                'fontColor': description[i].fontColor,
                'bgColor': description[i].bgColor
              })
            } else {
              let newi = i - 2
              returnArray.push({
                'type': 'image',
                'src': images[i],
                'fontColor': description[newi].fontColor,
                'bgColor': description[newi].bgColor
              })
            }
          }
        }
        return returnArray
      }
    },
    methods: {
      showCaseStudy: function() {
        let overlay = document.getElementsByClassName('password-overlay')
        for (var i=0; i < overlay.length; ++i) {
          overlay[i].classList.remove('show')
        }
      },
      nextCaseStudy: function() {
        router.go(1)
        next()
      },
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

<style lang="scss">


  // Modifier class for 16:9 aspect ratio

  .password-overlay {
    display: none;
    position: fixed;
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,.95);
    color: white;
    top: 0px;
    left: 0px;
    z-index: 1;
    &.show {
      display: flex;
    }
    p {
      width: 80vw;
      .btn {
        display: flex;
        background: greenyellow;
        padding: 10px;
        margin: 10px 0;
        justify-self: center;
        align-self: center;
        color: black;
        text-align: center;
        border-radius: 5px;
        text-transform: uppercase;
        cursor: pointer;
        &:before {
          content: "\A";
          white-space: pre;
        }
        &:after {
          content: "\A";
          white-space: pre;
        }
      }
      a {
        color: red;
        text-decoration: underline;
      }
    }
  }
  .case-study-intro {
    width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .case-study-intro-copy {
      text-align: center;
      padding: 0 40px;
      h1 {
        font-size: calc(72px/1.5);
        margin-bottom: 25px;
      }
      h2 {
        font-size: calc(48px/1.5);
        margin-bottom: 25px;
      }
      p {
        margin-bottom: 25px;
        &.case-study-meta {
          font-size: 14px;
          opacity: .5;
          span {
            font-size: 14px;
          }
        }
      }
      .scroll-downs {
        width: 34px;
        height: 55px;
        position: relative;
        margin: auto;
        top: 0;
        left: 0;
        bottom: -650px;
        right: 0px;
        .mousey {
          width: 3px;
          padding: 10px 15px;
          height: 35px;
          border-radius: 25px;
          opacity: 0.75;
          box-sizing: content-box;
          .scroller {
            width: 3px;
            height: 10px;
            border-radius: 25%;
            animation-name: scroll;
            animation-duration: 2.2s;
            animation-timing-function: cubic-bezier(.15,.41,.69,.94);
            animation-iteration-count: infinite;
          }
        }
      }

      @keyframes scroll {
        0% { opacity: 0; }
        10% { transform: translateY(0); opacity: 1; }
        100% { transform: translateY(15px); opacity: 0;}
      }
    }
  }
  .description-container {
    display: grid;
    grid-template-columns: 1fr;
    min-height: 50vh;
    div {
      grid-column: span 1;
      overflow: hidden;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: start;
      &.img-block {
        height: 50vh;
      }
      h3 {
        text-transform: uppercase;
        font-size: 32px;
        padding: 0 0 15px 0;
        margin: 20px 0 15px 0;
        text-transform: uppercase;
      }
      span {
        display: block;
        padding: 0 20px;
        p {
          margin-bottom: 20px;
        }
      }
      p {
        padding: 0 20px;
        margin-bottom: 20px;
        a {
          color: inherit;
        }
      }
      img {
        justify-self: center;
        object-fit: cover;
        object-position: center center;
        height: 100%;
        width: 100vw;
      }
    }
  }
  .case-study-insitu {
    padding: 75px 0;
    justify-items: center;
    display: flex;
    justify-content: center;
    img {
      max-width:100%;
    }
  }
  .case-study-awards {
    background: #efefef;
    padding: 35px;
    text-align: center;
    h3 {
      border-bottom: 4px solid #222;
      display: inline-block;
      font-size: 32px;
      padding: 0 0 15px 0;
      margin: 0 0 15px 0;
      text-transform: uppercase;
      text-align: center;
    }
    ul {
      list-style: none;
      li {
        margin: 0 0 15px;
      }
    }
  }

  @media (min-width: 768px) {
    .password-overlay {
      p {
        width: 50vw;
      }
    }
    .case-study-intro {
      .case-study-intro-copy {
        padding: 0 40px;
        h1 {
          font-size: 72px;
          margin-bottom: 25px;
        }
        h2 {
          font-size: 48px;
          margin-bottom: 25px;
        }
        p {
          margin-bottom: 25px;
          &.case-study-meta {
            font-size: 14px;
            span {
              font-size: 14px;
            }
          }
        }
      }
    }
    .description-container {
      div {
        p {
          padding: 0 40px;
        }
        img {
          object-fit: cover;
        }
      }
    }
  }

  @media (min-width: 992px) {
    .password-overlay {
      p {
        width: 50vw;
      }
    }
    .description-container {
      display: grid;
      grid-template-columns: repeat(2, 50%);
      grid-auto-rows: 1fr;
      div {
        grid-column: span 1;
        grid-row: span 1;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        &.img-block {
          min-height: 100vh;
        }
        img {
          object-fit: cover;
        }
      }
    }
  }

  @media (min-width: 1200px) {
    .password-overlay {
      p {
        width: 30vw;
      }
    }
    .description-container {
      div {
        img {
          object-fit: contain;
        }
      }
    }
  }

  .case-study-video {
    display: flex;
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
      margin: 0 auto;
      height: -webkit-fill-available;
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
</style>
