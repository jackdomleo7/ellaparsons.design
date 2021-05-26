<template>
  <main>
    <h1>{{ photography.data.page_header[0].text }}</h1>
    <ul class="photography">
      <li v-for="(picture, index) in imagesLatestFirst()" :key="picture" :aria-setsize="photography.data.pictures.length" :aria-posinset="index + 1">
        <prismic-image :field="picture.picture" loading="lazy" height="330" width="586" />
      </li>
    </ul>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  head() {
    return {
      title: 'Photography'
    }
  }
})
export default class Photography extends Vue {
  async asyncData ({ $prismic, error }: any) {
    const photography = await $prismic.api.getSingle('photography')
    if (photography) {
      return { photography }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }

  private imagesLatestFirst(): any {
    // @ts-ignore
    return this.photography.data.pictures.reverse();
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

.photography {
  padding-left: 0;
  list-style-type: none;
  padding: 3rem 2rem;
  display: grid;
  grid-template: auto / repeat(1, 1fr);
  gap: 2rem;

  $smallest-screen: 20em;
  $image-width-plus-gap: 38.625em;
  @for $i from 1 through 9 {
    @media (min-width: #{$smallest-screen + ($i * $image-width-plus-gap)}) {
      grid-template-columns: repeat(#{$i + 1}, 1fr);
    }
  }

  img {
    background-color: var(--color-white);
    max-height: 100%;
  }
}
</style>