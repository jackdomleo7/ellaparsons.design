<template>
  <div>
    <p v-if="$fetchState.pending">Fetching data</p>
    <div v-else>
      <section class="parallax center" :style="{ backgroundImage: `url(${bgImage(homepage.data.header_background_image)})` }">
        <h1>{{ homepage.data.page_header[0].text }}</h1>
      </section>
      <section class="parallax center" :style="{ backgroundImage: `url(${bgImage(homepage.data.about_me_background_image)})` }">
        <h2>About me</h2>
      </section>
      <section class="portfolio">
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

.portfolio {
  > ul {
    padding-left: 0;
    margin: 0;
    list-style-type: none;
  }

  &__section {
    position: relative;

    &:nth-child(odd) {
      .portfolio__brief {
        bottom: 0;
      }
    }

    &:nth-child(even) {
      .portfolio__brief {
        top: 0;
      }
    }
  }

  &__brief {
    padding: 3rem;
    background-color: rgba(255, 255, 255, 0.6);
    display: inline-flex;
    width: 30rem;
    position: absolute;
    left: 0;
  }
}
</style>
