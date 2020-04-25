<template>
  <header class="top-app-bar">
    <router-link to="/" class="top-app-bar__logo-link">
      <h1 class="top-app-bar__logo">Ella Parsons / Graphics-Design-Creative</h1>
    </router-link>
    <nav class="top-app-bar__nav">
      <ul class="top-app-bar__nav-list">
        <li v-for="(navLink, index) in navLinks" :key="index" class="top-app-bar__list-item">
          <router-link :to="navLink.link" class="top-app-bar__list-link">
            {{ navLink.text }}
          </router-link>
        </li>
      </ul>
    </nav>
    <section>
      <button class="mobile__hamburger-button" @click="toggleMobileNav">
        <icon class="mobile__hamburger" :icon="!isMobileNavExpanded ? 'hamburger' : 'cross'" />
      </button>
      <nav class="mobile__nav" v-if="isMobileNavExpanded">
        <ul class="mobile__list">
          <li v-for="(navLink, index) in navLinks" :key="index" class="mobile__item" @click="toggleMobileNav">
            <router-link :to="navLink.link" class="mobile__link">
              <icon class="mobile__icon" :icon="navLink.icon" />
              {{ navLink.text }}
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="mobile__nav-mask" v-if="isMobileNavExpanded" @click="toggleMobileNav"></div>
    </section>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';

@Component({
  components: { Icon }
})
export default class TopAppBar extends Vue {
  private isMobileNavExpanded: boolean = false;

  private navLinks: object[] = [
    {
      text: 'Home',
      link: '/',
      icon: 'home',
    },
    {
      text: 'BIO',
      link: '/bio',
      icon: 'user',
    },
    {
      text: 'Work',
      link: '/work',
      icon: 'pencil-ruler',
    },
  ];

  private toggleMobileNav() {
    this.isMobileNavExpanded = !this.isMobileNavExpanded;
  }
}
</script>

<style lang="scss" scoped>
.top-app-bar {
  align-items: center;
  display: flex;
  justify-content: space-around;
  padding: 2rem 3rem 0;

  @media (max-width: 845px) {
    padding: 1rem 2rem 0;
  }

  @media (max-width: 430px) {
    padding: 0.6rem 1rem 0;
  }

  &__logo {
    color: var(--color-grey-800);
    font-size: 2rem;
    font-weight: 200;

    @media (max-width: 845px) {
      font-size: 1.6rem;
    }

    @media (max-width: 430px) {
      font-size: 1.4rem;
    }

    &-link {
      padding-right: 1rem;
      text-decoration: none;
      width: 55%;

      @media (max-width: 845px) {
        width: auto;
      }
    }
  }

  &__nav {
    @media (max-width: 845px) {
      display: none;
    }

    &-list {
      list-style-type: none;
      padding-left: 0;
    }
  }

  &__list {
    &-item {
      display: inline-block;
      min-width: 3rem;
      padding: 0 1rem;
    }

    &-link {
      border-top: 4px solid transparent;
      color: var(--color-grey-700);
      display: block;
      font-size: 1.3125rem;
      padding: 0.5rem;
      text-decoration: none;
      text-transform: uppercase;
      transition: color ease-in-out 0.4s, border-top-color ease-in-out 0.4s;
      user-select: none;

      &:hover,
      &.router-link-exact-active {
        border-top-color: var(--color-grey-900);
        color: var(--color-grey-900);
      }
    }
  }
}

.mobile {
  &__hamburger,
  &__icon {
    color: var(--color-grey-50);
    height: 2.2rem;
    width: 2.2rem;

    @media (max-width: 430px) {
      height: 1.8rem;
      width: 1.8rem;
    }

    &-button {
      background-color: var(--color-grey-900);
      border: 0;
      border-radius: 0.1875rem;
      display: none;
      padding: 0.8rem;

      @media (max-width: 845px) {
        display: block;
      }
    }
  }

  &__nav {
    display: none;
    font-family: Verdana, sans-serif;
    font-size: 1.4rem;
    left: 0;
    padding: 0 2rem;
    position: absolute;
    width: 100%;
    z-index: 100;

    @media (max-width: 845px) {
      display: block;
    }

    @media (max-width: 560px) {
      padding: 0 1rem;
    }

    &-mask {
      height: 100vh;
      left: 0;
      position: absolute;
      top: 0;
      width: 100vw;
      z-index: 99;
    }
  }

  &__list {
    background-color: var(--color-grey-75);
    list-style-type: none;
    margin-bottom: 0;
    margin-top: 0.2rem;
    padding: 0.0625rem;
  }

  &__item {
    margin: 0.1rem 0;

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &__link {
    align-items: center;
    background-color: var(--color-grey-900);
    color: var(--color-grey-50);
    display: flex;
    padding: 0.6rem 2rem;
    text-decoration: none;
    user-select: none;
    width: 100%;

    &.router-link-exact-active {
      background-color: var(--color-pink);
    }
  }

  &__icon {
    margin-right: 1rem;
  }
}
</style>
