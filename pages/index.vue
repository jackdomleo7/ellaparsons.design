<template>
  <div>
    <p v-if="$fetchState.pending">Fetching data</p>
    <div v-else>
      <section class="home" :style="{ backgroundImage: `url(${bgImage(homepage.data.header_background_image)})` }">
        <h1>{{ homepage.data.page_header[0].text }}</h1>
      </section>
      <section class="about" :style="{ backgroundImage: `url(${bgImage(homepage.data.about_me_background_image)})` }">
        <h2>About me</h2>
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
.home, .about {
  height: 100vh;
	width: 100vw;
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	display: grid;
	place-items: center;
}
</style>
