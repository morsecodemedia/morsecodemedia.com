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
      <h3>Challenge</h3>
      <p>The original website was built as a WordPress site. Unfortunately, the way in which it was built included altering the 'core system', leaving it unable to be updated. This meant security vulnerabilities were unable to be addressed causing the site to be hacked multiple times over the years. The fragile state of the site also meant that making minor content updates (ie, creating new pages) a more cumbersome task than it needed to be.</p>
      <p>Another challenge with the website was the 'League Manager', was a partially built out plugin that required the deletion of the prior year's teams, conferences, standings, etc. to set up the upcoming season's game management.</p>
      <p>The last challenge was that the site was not responsive.</p>
    </article>
    <div>
      VIDEO
    </div>
    <article>
      <h3>Solution</h3>
      <p>First and foremost, we addressed the security concerns, moving the site into ProcessWire. We created a new League Manager to be an integral part of the site's content and structure. It all starts with the teams. Each team has their own page, with history, plater roster, schedule and more. Due to the scalability of league, the number of teams and conferences varied from season to season. We took this into consideration, allowing admins to define the conferences and which teams were in each for each year. By using the teams' 'ids' as references, we were able to create a history of previous years, despite if a team didn't play certain years, or was zoned into a different conference.</p>
      <p>The system also allowed for News and Video Library sections, complete with tag management. This tagging system allowed for relevant articles and videos to be dynamically pulled into the team pages as well.</p>
      <p>Another new offering provided, was a portal for users to find out how to get involved with the league, as well as current members to be able to pay their membership dues.</p>
    </article>
    <article>
      <h3>Results</h3>
      <p>Since the launch of the site, it is no longer a victim of malicious attacks. Updates are able to be managed by content administrations, and no longer require a developer. Users have a more complete and engaging experience no matter which device or browser they are viewing the site.</p>
    </article>
    <article>
      <h3>Accolades</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>Omnis excepturi laborum distinctio perferendis</p>
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
      font-size: 14px;
      opacity: .5;
      margin-bottom: unset;
      span {
        font-size: 14px;
      }
    }
    a {
      font-size: 14px;
      color: rgb(229, 0, 46);
    }
  }
  @media (min-width: 768px) {

  }
  @media (min-width: 992px) {

  }
  @media (min-width: 1200px) {

  }
</style>