<template>
  <div>
    <p v-if="$fetchState.pending">Fetching data</p>
    <div v-else>
      <section class="parallax name" :style="{ backgroundImage: `url(${bgImage(homepage.data.header_background_image)})` }">
        <div class="name__fixed">
          <h1 class="name__heading">{{ homepage.data.page_header[0].text }}</h1>
        </div>
      </section>
      <section id="about" class="about parallax center" :style="{ backgroundImage: `url(${bgImage(homepage.data.about_me_background_image)})` }">
        <h2>About me</h2>
      </section>
      <section id="portfolio" class="portfolio">
        <ul>
          <li class="portfolio__section parallax" v-for="(portfolio, index) in homepage.data.portfolio" :key="portfolio" :aria-setsize="homepage.data.portfolio.length" :aria-posinset="index + 1" :style="{ backgroundImage: `url(${bgImage(portfolio.background_image)})` }">
            <prismic-rich-text class="portfolio__brief" :field="portfolio.brief" />
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Index extends Vue {
  private homepage!: any;

  async fetch() {
    try {
      this.homepage = await this.$prismic.api.getSingle('homepage');
      console.log(this.homepage);
    }
    catch(e) {
      console.error(e);
    }
  }

  private bgImage(image: any): string {
    const pxToEm = (px: number): string => {
      return `${px / 16}em`;
    };

    if (window.matchMedia(`(min-width: calc(${pxToEm(1920)} + 1px))`).matches) {
      return image.url;
    }
    else if (window.matchMedia(`(min-width: calc(${pxToEm(1024)} + 1px))`).matches) {
      return image.laptop.url;
    }
    else if (window.matchMedia(`(min-width: calc(${pxToEm(768)} + 1px))`).matches) {
      return image.tablet.url;
    }
    else {
      return image.mobile.url;
    }
  }
}
</script>

<style lang="scss" scoped>
.name {

  &__fixed {
    display: grid;
    grid-template-areas: '.' '.' 'name';
    place-items: center;
    position: fixed;
    height: 100%;
    width: 100%;

    @media (min-width: 600px) {
      grid-template-areas: '. .' '. .' '. name';
    }
  }

  &__heading {
    font-family: "Allison Script Regular", cursive;
    color: var(--color-pink);
    font-size: 2.8rem;
    grid-area: name;

    @media (min-width: 1024px) {
      font-size: 4rem;
    }

    @media (min-width: 1600px) {
      font-size: 6rem;
    }
  }
}

.parallax {
  height: 100vh;
	width: 100vw;
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}

.center {
  display: grid;
	place-items: center;
}

.about {
  position: relative;
}

.portfolio {
  > ul {
    padding-left: 0;
    margin: 0;
    list-style-type: none;
  }

  &__section {
    position: relative;
    height: 200vh;
  }

  &__brief {
    padding: 3rem;
    background-color: rgba(255, 255, 255, 0.6);
    display: inline-flex;
    position: absolute;
    left: 0;
    bottom: 1.25rem;
    max-width: 60vw;
  }
}
</style>
