<template>
  <div>
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

    @media (min-width: 64em) {
      background-color: transparent;
      max-width: 40vw;
    }

    @media (min-width: 88em) {
      max-width: 30vw;
    }
  }

  h2 {
    font-size: 1.5rem;

    @media (min-width: 64em) {
      font-size: 2rem;
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
