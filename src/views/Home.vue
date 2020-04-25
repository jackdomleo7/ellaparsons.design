<template>
  <div class="home">
    <section class="home__hero hero">
      <img class="hero__img" src="/img/pink-wreath.png" alt="Pink wreath" />
      <h2 class="hero__title">Design</h2>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
}

.hero {
  align-items: center;
  display: flex;
  justify-content: center;

  &__title {
    animation-delay: 1s;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-name: bounceIn;
    animation-timing-function: linear;
    color: var(--color-grey-700);
    font-family: "Sacramento", cursive;
    font-size: 5rem;
    margin: 0;
    opacity: 0;

    @media (max-width: 380px) {
      font-size: 4.5rem;
    }
  }

  &__img {
    animation: 1s ease spin-anticlockwise;
    position: absolute;
  }
}

@keyframes spin-anticlockwise {
  0% {
    opacity: 0;
    transform: rotate(180deg);
  }

  100% {
    opacity: 1;
    transform: rotate(0deg);
  }
}
@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3) translate3d(0, 0, 0);
  }

  50% {
    opacity: 0.9;
    transform: scale(1.1);
  }

  80% {
    opacity: 1;
    transform: scale(0.89);
  }

  100% {
    opacity: 1;
    transform: scale(1) translate3d(0, 0, 0);
  }
}
</style>
