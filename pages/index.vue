<template>
  <main>
    <p v-if="$fetchState.pending">Fetching data</p>
    <div v-else>
      <section class="parallax name" :class="{'parallax--ios': iOS && safari}" :style="{ backgroundImage: `url(${bgImage(homepage.data.header_background_image)})` }">
        <div class="name__fixed">
          <h1 class="name__heading">{{ homepage.data.page_header[0].text }}</h1>
        </div>
      </section>
      <section id="about" class="about parallax center" :class="{'parallax--ios': iOS && safari}" :style="{ backgroundImage: `url(${bgImage(homepage.data.about_background_image)})` }">
        <div>
          <h2>{{ homepage.data.about_header[0].text }}</h2>
          <prismic-rich-text class="about__description" :class="{'about__description--ios': safari}" :field="homepage.data.about_description" />
        </div>
      </section>
      <section id="featured" class="featured">
        <h2>{{ homepage.data.featured_header[0].text }}</h2>
        <ul>
          <FeaturedItem v-for="(featured, index) in homepage.data.featured" :key="featured.header[0].text" :featured="featured" :aria-setsize="homepage.data.featured.length" :aria-posinset="index + 1" :style="{ backgroundImage: `url(${bgImage(featured.background_image)})` }"></FeaturedItem>
        </ul>
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { isIOS, isSafari } from '@/helpers/safari';

@Component({
  head() {
    return {
      title: 'Home'
    }
  }
})
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

  private get iOS(): boolean {
    return isIOS();
  }

  private get safari(): boolean {
    return isSafari();
  }

  private bgImage(image: any): string {
    const screenMaxWidth: Record<string, number> = {
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
    height: 100vh;
    width: 100vw;

    @media (min-width: 38em) {
      grid-template-areas: '. .' '. .' '. name';
    }

    h1 {
      font-weight: 400;
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

  &--ios {
    background-attachment: scroll;
  }
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

    &--ios {
      ::v-deep > * {
        margin: 0.25rem 0;

        &:first-of-type {
          margin-top: 0;
        }

        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
  }
}

.featured {
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
}
</style>
