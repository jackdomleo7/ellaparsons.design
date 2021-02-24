<template>
  <main>
    <p v-if="$fetchState.pending">Fetching data</p>
    <div v-else>
      <section class="parallax name" :style="{ backgroundImage: `url(${bgImage(homepage.data.header_background_image)})` }">
        <div class="name__fixed">
          <h1 class="name__heading">{{ homepage.data.page_header[0].text }}</h1>
        </div>
      </section>
      <section id="about" class="about parallax center" :style="{ backgroundImage: `url(${bgImage(homepage.data.about_background_image)})` }">
        <div>
          <h2>{{ homepage.data.about_header[0].text }}</h2>
          <prismic-rich-text class="about__description" :field="homepage.data.about_description" />
        </div>
      </section>
      <section id="portfolio" class="portfolio">
        <h2>{{ homepage.data.portfolio_header[0].text }}</h2>
        <ul>
          <li class="portfolio__section parallax" v-for="(portfolio, index) in homepage.data.portfolio" :key="portfolio.header[0].text" :aria-setsize="homepage.data.portfolio.length" :aria-posinset="index + 1" :style="{ backgroundImage: `url(${bgImage(portfolio.background_image)})` }">
            <div class="portfolio__brief">
              <h3>{{ portfolio.header[0].text }}</h3>
              <prismic-rich-text :field="portfolio.brief" />
              <ul class="portfolio__tiles">
                <li v-if="portfolio.tile_1.url">
                  <prismic-image :field="portfolio.tile_1" />
                </li>
                <li v-if="portfolio.tile_2.url">
                  <prismic-image :field="portfolio.tile_2" />
                </li>
                <li v-if="portfolio.tile_3.url">
                  <prismic-image :field="portfolio.tile_3" />
                </li>
                <li v-if="portfolio.tile_4.url">
                  <prismic-image :field="portfolio.tile_4" />
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

type Dictionary<T> = { [key: string]: T };

@Component
export default class Index extends Vue {
  private homepage!: any;

  async fetch() {
    try {
      this.homepage = await this.$prismic.api.getSingle('homepage');
    }
    catch(e) {
      console.error(e);
    }
  }

  private bgImage(image: any): string {
    const screenMaxWidth: Dictionary<number> = {
      laptop: 1920,
      tablet: 1024,
      mobile: 768
    };

    const pxToEm = (px: number): string => {
      return `${px / 16}em`;
    };

    if (window.matchMedia(`(min-width: calc(${pxToEm(screenMaxWidth.laptop)} + 1px))`).matches || window.innerWidth > screenMaxWidth.laptop) {
      return image.url;
    }
    else if (window.matchMedia(`(min-width: calc(${pxToEm(screenMaxWidth.tablet)} + 1px))`).matches || window.innerWidth > screenMaxWidth.tablet) {
      return image.laptop.url;
    }
    else if (window.matchMedia(`(min-width: calc(${pxToEm(screenMaxWidth.mobile)} + 1px))`).matches || window.innerWidth > screenMaxWidth.mobile) {
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

    @media (min-width: 38em) {
      grid-template-areas: '. .' '. .' '. name';
    }
  }

  &__heading {
    font-family: "Allison Script Regular", cursive;
    color: var(--color-pink);
    font-size: 2.8rem;
    grid-area: name;

    @media (min-width: 64em) {
      font-size: 4rem;
    }

    @media (min-width: 88em) {
      font-size: 5.5rem;
    }

    @media (min-width: 106em) {
      font-size: 7rem;
    }
  }
}

.parallax {
  min-height: 100vh;
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
  display: grid;
  grid-template-areas: '. . about';
  padding: 1rem 0;

  > div {
    grid-area: about;
    color: var(--color-white);
    padding: 1rem;
    margin: 1.5rem;
    background-color: rgba(71, 74, 81, 0.6);
    backdrop-filter: blur(5px);

    @media (min-width: 64em) {
      background-color: transparent;
      max-width: 40vw;
    }

    @media (min-width: 88em) {
      max-width: 30vw;
    }
  }

  &__description {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.8rem;
    font-size: 0.875rem;

    @media (min-width: 64em) {
      font-size: 1rem;
    }
  }
}

.portfolio {
  position: relative;

  h2 {
    margin: 1rem;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(5px);
    position: absolute;
    z-index: 1;
  }

  > ul {
    padding-left: 0;
    margin: 0;
    list-style-type: none;
  }

  &__section {
    position: relative;
    min-height: 300vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 4.5rem 1.1rem;

    &:first-of-type {
      padding-top: 6rem;
    }

    @media (min-width: 64em) {
      min-height: 250vh;
    }
  }

  &__brief {
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 50em) {
      max-width: 35vw;
    }

    h3 {
      font-size: 1.5rem;
    }
  }

  &__tiles {
    align-items: center;
    display: grid;
    grid-template: auto / 1fr 1fr;
    gap: 1rem;
    padding-left: 0;
    list-style-type: none;

    @media (min-width: 50em) {
      gap: 2rem;
    }

    img {
      background-color: var(--color-white);
    }
  }
}
</style>
