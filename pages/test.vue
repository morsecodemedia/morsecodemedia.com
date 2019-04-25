<template>
  <section class="case-study-details">
    <div class="case-study-campaign-hero">
      <div class="case-study-campaign-hero-gradient" />
    </div>
    <header>
      <p class="client-name">USA Rugby League</p>
      <h1 class="case-study-title">USA Rugby League</h1>
      <h2 class="case-study-overview">The official website of the US Association of Rugby League.</h2>
      <p class="case-study-meta">Websites // 2012 - 2016</p>
      <p><a href="https://www.usarl.org/">https://www.usarl.org/</a></p>
    </header>
    <article>
      <header>
        <h3>Challenge</h3>
      </header>
      <div class="content-container">
        <p>The original website was built as a WordPress site. Unfortunately, the way in which it was built included altering the 'core system', leaving it unable to be updated. This meant security vulnerabilities were unable to be addressed causing the site to be hacked multiple times over the years. The fragile state of the site also meant that making minor content updates (ie, creating new pages) a more cumbersome task than it needed to be.</p>
        <p>Another challenge with the website was the 'League Manager', was a partially built out plugin that required the deletion of the prior year's teams, conferences, standings, etc. to set up the upcoming season's game management.</p>
        <p>The last challenge was that the site was not responsive.</p>
      </div>
    </article>
    <div>
      VIDEO
    </div>
    <article>
      <header>
        <h3>Solution</h3>
      </header>
      <div class="content-container">
        <p>First and foremost, we addressed the security concerns, moving the site into ProcessWire. We created a new League Manager to be an integral part of the site's content and structure. It all starts with the teams. Each team has their own page, with history, plater roster, schedule and more. Due to the scalability of league, the number of teams and conferences varied from season to season. We took this into consideration, allowing admins to define the conferences and which teams were in each for each year. By using the teams' 'ids' as references, we were able to create a history of previous years, despite if a team didn't play certain years, or was zoned into a different conference.</p>
        <p>The system also allowed for News and Video Library sections, complete with tag management. This tagging system allowed for relevant articles and videos to be dynamically pulled into the team pages as well.</p>
        <p>Another new offering provided, was a portal for users to find out how to get involved with the league, as well as current members to be able to pay their membership dues.</p>
      </div>
    </article>
    <article>
      <header>
        <h3>Results</h3>
      </header>
      <div class="content-container">
        <p>Since the launch of the site, it is no longer a victim of malicious attacks. Updates are able to be managed by content administrations, and no longer require a developer. Users have a more complete and engaging experience no matter which device or browser they are viewing the site.</p>
      </div>
    </article>
    <article>
      <header>
        <h3>Accolades</h3>
      </header>
      <div class="content-container">
        <p class="accolades"><span class="award-organization">Davey Awards</span> 2015 Silver Davey Award</p>
        <p class="accolades"><span class="award-organization">W3 Awards</span> 2015 Silver W3 Award</p>
      </div>
    </article>
    <div>
      Slideshow
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Test'
  }
</script>

<style lang="scss" scoped>
  .case-study-details {
    background-color: rgb(26, 27, 105);
    padding: 20px;
  }
  .case-study-campaign-hero {
    position: relative;
    height: 75vh;
    background: url('http://images.performgroup.com/di/library/sportal_com_au/f8/be/tonga-rlwc_12djhscro2zgt1lgcakr0g00z3.jpg') right top no-repeat;
    background-size: cover;
    margin: -20px -20px 0;
  }
  .case-study-campaign-hero-gradient {
    background: rgba(26,27,105,1);
background: -moz-linear-gradient(45deg, rgba(26,27,105,1) 0%, rgba(26,27,105,0.49) 61%, rgba(26,27,105,0.18) 86%, rgba(26,27,105,0) 100%);
background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(26,27,105,1)), color-stop(61%, rgba(26,27,105,0.49)), color-stop(86%, rgba(26,27,105,0.18)), color-stop(100%, rgba(26,27,105,0)));
background: -webkit-linear-gradient(45deg, rgba(26,27,105,1) 0%, rgba(26,27,105,0.49) 61%, rgba(26,27,105,0.18) 86%, rgba(26,27,105,0) 100%);
background: -o-linear-gradient(45deg, rgba(26,27,105,1) 0%, rgba(26,27,105,0.49) 61%, rgba(26,27,105,0.18) 86%, rgba(26,27,105,0) 100%);
background: -ms-linear-gradient(45deg, rgba(26,27,105,1) 0%, rgba(26,27,105,0.49) 61%, rgba(26,27,105,0.18) 86%, rgba(26,27,105,0) 100%);
background: linear-gradient(45deg, rgba(26,27,105,1) 0%, rgba(26,27,105,0.49) 61%, rgba(26,27,105,0.18) 86%, rgba(26,27,105,0) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1a1b69', endColorstr='#1a1b69', GradientType=1 );
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
  h1 {
    color: rgb(229, 0, 46);
    font-size: calc(72px/1.5);
    margin-bottom: 15px;
  }
  h2 {
    color: $white;
    font-size: calc(48px/1.5);
    margin-bottom: 15px;
  }
  h3 {
    color: rgb(229, 0, 46);
  }
  p {
    color: white;
    &.client-name {
      margin-bottom: 10px;
    }
    &.case-study-meta {
      font-size: .9em;
      opacity: .5;
      margin-bottom: unset;
      span {
        font-size: .9em;
      }
    }
    &.accolades {
      font-size: .9em;
      .award-organization {
        display: block;
        font-weight: 700;
        &:after {
          content: "\A";
          white-space: pre;
        }
      }
    }
    a {
      font-size: 14px;
      color: rgb(229, 0, 46);
    }
  }

  @media (min-width: 768px) {
    h2 {
      max-width: 75vw;
    }
  }
  @media (min-width: 992px) {
    .case-study-details {
      padding: 20px 4rem;
    }
    h2 {
      max-width: 55vw;
    }
    article {
      display: inline-flex;
      header {
        width: 25vw;
      }
      .content-container {
        max-width: 65vw;
      }
    }
  }
  @media (min-width: 1200px) {
    h2 {
      max-width: 40vw;
    }
    article {
      .content-container {
        max-width: 50vw;
      }
    }
  }
</style>