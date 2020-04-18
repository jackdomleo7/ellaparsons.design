<template>
  <div id="app" class="app">
    <top-app-bar></top-app-bar>
    <main class="app__main">
      <router-view/>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script lang="ts">
import 'normalize.css';
import 'cooltipz-css';

import { Component, Vue } from 'vue-property-decorator';
import TopAppBar from '@/components/TopAppBar.vue';
import AppFooter from '@/components/AppFooter.vue';

@Component({
  components: {
    TopAppBar,
    AppFooter,
  },
})
export default class App extends Vue {
  private mounted() {
    const path = localStorage.getItem('path');
    if (path) {
      localStorage.removeItem('path');
      this.$router.push(path);
    }
  }
}
</script>

<style lang="scss">
@import "scss/main";

.app {
  display: flex;
  flex-direction: column;
  height: 100vh;

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
