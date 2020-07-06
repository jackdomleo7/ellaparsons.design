<template>
  <div id="app" class="app">
    <app-header />
    <main class="app__main">
      <nuxt />
    </main>
    <app-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { AppHeader, AppFooter } from '@/components';

@Component({
  components: {
    AppHeader,
    AppFooter
  }
})
export default class Default extends Vue {}
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-x: hidden;

  &__main {
    flex: 1;

    > * {
      animation: fadeIn 2s;
    }
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
