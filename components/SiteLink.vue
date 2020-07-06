<template>
  <nuxt-link v-if="type === 'internal'" class="link" :to="link">
    <slot />
  </nuxt-link>
  <a
    v-else
    class="link"
    :href="(type === 'email' ? 'mailto:' : type === 'tel' ? 'tel:' : '') + link + (type === 'external' ? (link.includes('?') ? '&' : '?') + 'ref=ellaparsons.design' : '')"
    :target="type === 'external' ? '_blank' : null"
    :rel="
      type === 'external' || type === 'email'
        ? 'nofollow'
        : type === 'tel'
          ? 'noopener noreferrer'
          : null
    "
  >
    <slot />
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class SiteLink extends Vue {
  @Prop({
    validator: (value: string) =>
      ['email', 'external', 'internal', 'tel'].includes(value),
    required: true
  })
  private readonly type!: string;

  @Prop({ type: [Object, String], required: true })
  private readonly link!: object | string;
}
</script>

<style lang="scss" scoped>
.link {
  font-weight: 700;
  text-decoration: underline;
}
</style>
