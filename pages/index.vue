<template>
  <div>
    <p v-if="$fetchState.pending">Fetching data</p>
    <div class="home" v-else :style="{ backgroundImage: `url(${bgImage})` }">
      <h1>{{ homepage.data.page_header[0].text }}</h1>
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

  private get bgImage(): string {
    const header_background_image = this.homepage.data.header_background_image;
    
    if (window.matchMedia('(min-width: calc(120em + 1px))').matches) {
      return header_background_image.url;
    }
    else if (window.matchMedia('(min-width: calc(64em + 1px))').matches) {
      return header_background_image.laptop.url;
    }
    else if (window.matchMedia('(min-width: calc(48em + 1px))').matches) {
      return header_background_image.tablet.url;
    }
    else {
      return header_background_image.mobile.url;
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
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
