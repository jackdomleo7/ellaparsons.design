<template>
  <main>
    <p v-if="$fetchState.pending">Fetching data</p>
    <template v-else>
      <h1>{{ portfolio.data.page_header[0].text }}</h1>
      <ul class="portfolio">
        <li v-for="(image, index) in portfolio.data.images" :key="image.header[0].text" :aria-setsize="portfolio.data.images.length" :aria-posinset="index + 1">
          <figure>
            <prismic-image :field="image.image" loading="lazy" height="343" width="343" />
            <figcaption>
              <h2>{{ image.header[0].text }}</h2>
              <prismic-rich-text :field="image.caption" />
            </figcaption>
          </figure>
        </li>
      </ul>
    </template>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Portfolio extends Vue {
  private portfolio!: any;

  async fetch() {
    try {
      this.portfolio = await this.$prismic.api.getSingle('portfolio');
    }
    catch(e) {
      console.error(e);
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  background-color: var(--color-grey);
  color: var(--color-white);
}

h1 {
  padding: 3rem 3rem 0 3rem;
  font-size: 2.4rem;
}

.portfolio {
  padding-left: 0;
  list-style-type: none;
  padding: 3rem 2rem;
  display: grid;
  grid-template: auto / repeat(1, 1fr);
  gap: 2rem;

  $smallest-screen: 20em;
  $image-width-plus-gap: 23em;
  @for $i from 1 through 9 {
    @media (min-width: #{$smallest-screen + ($i * $image-width-plus-gap)}) {
      grid-template-columns: repeat(#{$i + 1}, 1fr);
    }
  }

  figure {
    display: flex;
    flex-direction: column;
    align-items: center;

    > * {
      &:not(:first-child):not(:last-child) {
        margin: 0.25rem 0;
      }
    }
  }

  img {
    background-color: var(--color-white);
    max-height: 100%;
  }
}
</style>
