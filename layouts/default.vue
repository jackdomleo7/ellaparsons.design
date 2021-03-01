<template>
  <div>
    <Navigation />
    <Nuxt />
    <SiteFooter />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Default extends Vue {}
</script>
