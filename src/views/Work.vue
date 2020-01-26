<template>
  <div class="work">
    <section class="work__gallery">
      <figure class="work__figure" v-for="(number, index) in mockNumber" :key="index">
        <img class="work__image" alt="Image" src="img/pink-wreath.png" />
      </figure>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Work extends Vue {
  private mockNumber: number = 25;
}
</script>

<style lang="scss" scoped>
@import "../scss/colours";

.work {
  padding: 1rem 3rem;

  &__gallery {
    display: grid;
    grid-gap: 1.2rem;
    grid-template: auto / 1fr;

    @media (min-width: 650px) {
      grid-template: auto / 1fr 1fr;
    }

    @media (min-width: 1000px) {
      grid-template: auto / 1fr 1fr 1fr;
    }

    @media (min-width: 1300px) {
      grid-template: auto / 1fr 1fr 1fr 1fr;
    }

    @media (min-width: 1900px) {
      grid-template: auto / 1fr 1fr 1fr 1fr 1fr;
    }
  }

  &__figure {
    align-items: center;
    display: flex;
    height: 14rem;
    justify-content: center;
  }

  &__image {
    height: 100%;
    object-fit: cover;
  }
}
</style>
