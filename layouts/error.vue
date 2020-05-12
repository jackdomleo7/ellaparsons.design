<template>
  <section class="page-not-found">
    <h1 class="page-not-found__404">{{ error.statusCode === 404 ? '404' : 'Error' }}</h1>
    <div class="page-not-found__description">
      <h2 class="page-not-found__sorry">Sorry!</h2>
      <p class="page-not-found__message">{{ error.statusCode === 404 ? 'The page you\'re looking for was not found' : 'An error occured' }}</p>
    </div>
  </section>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class Error extends Vue {
    @Prop() private readonly error!: string;
  }
</script>

<style lang="scss" scoped>
.page-not-found {
  display: grid;
  grid-template: auto / 1fr 1fr;
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);

  @media (max-width: 620px) {
    grid-template: auto auto / 1fr;
  }

  &__404 {
    border-right: 1px solid var(--color-grey-900);
    font-size: 8rem;
    margin: 0;
    padding: 3rem 1rem 3rem 0;
    text-align: center;

    @media (max-width: 620px) {
      border-bottom: 1px solid var(--color-grey-900);
      border-right: 0;
      font-size: 6rem;
      padding: 2rem 0;
    }
  }

  &__description {
    margin: auto 0;
    padding-left: 1.5rem;

    @media (max-width: 620px) {
      padding: 2rem 0;
    }
  }

  &__sorry {
    font-size: 5rem;
    margin-bottom: 2rem;
    margin-top: 0;
    text-align: center;
    text-transform: uppercase;

    @media (max-width: 620px) {
      font-size: 3.5rem;
    }
  }

  &__message {
    font-size: 1.125rem;
    margin-bottom: 0;
    text-transform: capitalize;

    @media (max-width: 620px) {
      font-size: 1rem;
    }
  }
}
</style>
