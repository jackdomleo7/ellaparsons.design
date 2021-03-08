<template>
  <li class="featured__section parallax" :class="{'parallax--ios featured__section--ios': iOS && safari}">
    <button class="featured__info" v-if="iOS && !showBrief" @click="showBrief = true">
      Info
      <svg-icon name="newspaper" />
    </button>
    <div v-if="showBrief" class="featured__brief" :class="{'featured__brief--ios': iOS}">
      <button class="featured__close" v-if="iOS" @click="showBrief = false">
        <svg-icon name="cross" />
        <span class="sr-only">Close</span>
      </button>
      <h3>{{ featured.header[0].text }}</h3>
      <prismic-rich-text :field="featured.brief" />
      <ul class="featured__tiles">
        <li v-if="featured.tile_1.url">
          <prismic-image :field="featured.tile_1" loading="lazy" />
        </li>
        <li v-if="featured.tile_2.url">
          <prismic-image :field="featured.tile_2" loading="lazy" />
        </li>
        <li v-if="featured.tile_3.url">
          <prismic-image :field="featured.tile_3" loading="lazy" />
        </li>
        <li v-if="featured.tile_4.url">
          <prismic-image :field="featured.tile_4" loading="lazy" />
        </li>
      </ul>
    </div>
  </li>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { isIOS, isSafari } from '@/helpers/safari';

@Component
export default class FeaturedItem extends Vue {
  private showBrief: boolean = !this.iOS;

  @Prop({
    required: true
  }) private readonly featured!: any;

  private get iOS(): boolean {
    return isIOS();
  }

  private get safari(): boolean {
    return isSafari();
  }
}
</script>

<style lang="scss" scoped>
.featured {
  &__section {
    position: relative;
    min-height: 300vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 4.5rem 1.1rem;

    &:first-of-type {
      padding-top: 6rem;
    }

    @media (min-width: 64em) {
      min-height: 250vh;
    }

    &--ios {
      min-height: 100vh;
      max-height: 100vh;
      justify-content: flex-end;
    }
  }

  &__brief {
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 50em) {
      max-width: 35vw;
    }

    h3 {
      font-size: 1.5rem;
    }

    &--ios {
      position: relative;

      > * {
        margin: 0.5rem 0;

        &:first-child {
          margin-top: 0;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  &__info {
    background-color: var(--color-black);
    border: none;
    color: var(--color-white);
    padding: 0.6rem;
    display: flex;
    align-items: center;
    max-width: 5rem;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    svg {
      height: 1.2rem;
      width: 1.2rem;
      margin-left: 0.5rem;
    }
  }

  &__close {
    background-color: var(--color-black);
    border: none;
    border-radius: 50%;
    padding: 0.6rem;
    margin: 0;
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    
    svg {
      height: 1.5rem;
      width: 1.5rem;
      color: var(--color-pink);
    }
  }

  &__tiles {
    align-items: center;
    display: grid;
    grid-template: auto / 1fr 1fr;
    gap: 1rem;
    padding-left: 0;
    list-style-type: none;

    @media (min-width: 50em) {
      gap: 2rem;
    }

    img {
      background-color: var(--color-white);
    }
  }
}
</style>
