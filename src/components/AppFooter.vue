<template>
  <footer class="footer">
    <h3 class="footer__title">Graphics-Design-Creative</h3>
    <a href="https://gurushots.com/ella.parsons/photos" aria-label="Photography on GuruShots" data-cooltipz-dir="top" target="_blank" rel="noreferrer" class="footer__social-link">
      <svg class="footer__social-icon">
        <use xlink:href="assets/svg-sprite.svg#icon-camera"></use>
      </svg>
    </a>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AppFooter extends Vue {}
</script>

<style lang="scss" scoped>
@import "../scss/colours";

.footer {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 2rem;

  @media (max-width: 845px) {
    padding: 1.5rem 1rem;
  }

  &__title {
    font-size: 1.4rem;
    font-weight: 200;
  }

  &__social {
    &-link {
      background-color: $grey-800;
      border-radius: 0.1875rem;
      color: $grey-50;
      padding: 0.3rem;
      transition: 0.2s background-color ease-in-out;

      &:hover {
        background-color: $pink;
      }
    }

    &-icon {
      height: 1.5rem;
      width: 1.5rem;
    }
  }
}
</style>
