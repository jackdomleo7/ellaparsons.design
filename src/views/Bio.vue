<template>
  <div class="bio">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Bio extends Vue {}
</script>

<style lang="scss" scoped>
@import "../scss/colours";

.bio {
  color: $grey-900;
  margin: 1rem 2rem;

  @media (min-width: 750px){
    margin: 1rem 3rem;
  }

  @media (min-width: 1300px){
    margin: 1rem 4rem;
  }

  @media (min-width: 2000px){
    margin: 1rem 5rem;
  }

  @media (min-width: 3000px){
    margin: 1rem 6rem;
  }
}
</style>
