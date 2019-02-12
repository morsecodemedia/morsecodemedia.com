<template>
  <section class="container">
    <siteHeader />
    <div
      v-for="(cs, index) in activeCaseStudy"
      :key="index">
      <div>
        <div
          :style="{'background-color': cs.overview.bgColor}"
          class="case-study-intro">
          <div class="case-study-intro-copy">
            <h1 :style="{color: cs.overview.titleColor}">{{ cs.title }}</h1>
            <h2
              :style="{color: cs.overview.descriptionColor}"
              v-html="cs.overview.description" />
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

        <div
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
        </div>

        <div
          :style="{'background-color': cs.overview.bgColor}"
          class="description-container">
          <div
            v-for="(des, index) in activeDescription"
            :key="index"
            :class="(des.type === 'description') ? 'text-block' : 'img-block'"
            :style="{color: des.fontColor, 'background-color': des.bgColor}">

            <h3
              v-if="des.type === 'description' && des.title"
              :style="{'border-bottom': '4px ' + 'solid ' + des.fontColor}">{{ des.title }} </h3>
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
            role="img" />
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
    data() {
      return {
        caseStudies: config.caseStudies
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
      }
    }
  }
</script>

<style lang="scss">
  .embed-responsive {
    position: relative;
    display: block;
    height: 0;
    padding: 0;
    overflow: hidden;

    .embed-responsive-item,
    iframe,
    embed,
    object,
    video {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      border: 0;
    }
  }

  // Modifier class for 16:9 aspect ratio
  .embed-responsive-16by9 {
    padding-bottom: 56.25%;
  }
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
</style>
