<template>
  <div id="app">
    <top-app-bar></top-app-bar>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TopAppBar from '@/components/TopAppBar.vue';

@Component({
  components: {
    TopAppBar,
  },
})
export default class App extends Vue {
  private mounted() {
    let path = localStorage.getItem('path');
    if (path) {
      localStorage.removeItem('path');
      this.$router.push(path);
    }
  }
}
</script>

<style lang="scss">
@import "scss/main";

main {
  min-height: 80vh;

  > * {
    animation: fadeIn 2s;
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
