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
export default class App extends Vue {}
</script>

<style lang="scss">
@import "scss/main";
</style>
