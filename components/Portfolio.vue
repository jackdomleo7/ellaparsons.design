<template>
  <li class="portfolio__section parallax" :class="{'parallax--ios portfolio__section--ios': iOS && safari}">
    <button class="portfolio__info" v-if="iOS && !showBrief" @click="showBrief = true">
      Info
      <svg-icon name="newspaper" />
    </button>
    <div v-if="showBrief" v-rellax="{speed: iOS ? 0 : -6, center: true}" class="portfolio__brief" :class="{'portfolio__brief--ios': iOS}">
      <button class="portfolio__close" v-if="iOS" @click="showBrief = false">
        <svg-icon name="cross" />
        <span class="sr-only">Close</span>
      </button>
      <h3>{{ portfolio.header[0].text }}</h3>
      <prismic-rich-text :field="portfolio.brief" />
      <ul class="portfolio__tiles" :class="{'portfolio__tiles--ios': safari}">
        <li v-if="portfolio.tile_1.url">
          <prismic-image :field="portfolio.tile_1" />
        </li>
        <li v-if="portfolio.tile_2.url">
          <prismic-image :field="portfolio.tile_2" />
        </li>
        <li v-if="portfolio.tile_3.url">
          <prismic-image :field="portfolio.tile_3" />
        </li>
        <li v-if="portfolio.tile_4.url">
          <prismic-image :field="portfolio.tile_4" />
        </li>
      </ul>
    </div>
  </li>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { isIOS, isSafari } from '@/helpers/safari';

@Component
export default class Portfolio extends Vue {
  private showBrief: boolean = !this.iOS;

  @Prop({
    required: true
  }) private readonly portfolio!: any;

  private get iOS(): boolean {
    return isIOS();
  }

  private get safari(): boolean {
    return isSafari();
  }
}
</script>

<style lang="scss" scoped>
.portfolio {
  &__section {
    position: relative;
    min-height: 300vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
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

    &--ios {
      > li {
        margin: 0.5rem;

        @media (min-width: 50em) {
          margin: 1rem;
        }

        &:nth-child(1) {
          margin-left: 0;
          margin-top: 0;
        }

        &:nth-child(2) {
          margin-top: 0;
          margin-right: 0;
        }

        &:nth-child(3) {
          margin-left: 0;
          margin-bottom: 0;
        }

        &:nth-child(4) {
          margin-bottom: 0;
          margin-right: 0;
        }
      }
    }
  }
}
</style>
