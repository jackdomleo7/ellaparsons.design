<template>
  <header class="top-app-bar">
    <h1>Ella Parsons / Graphics-Design-Creative</h1>
    <nav>
      <ul class="top-app-bar__nav-list">
        <li v-for="(navLink, index) in navLinks" :key="index" class="top-app-bar__list-item">
          <router-link :to="navLink.link" class="top-app-bar__list-link">
            {{ navLink.text }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TopAppBar extends Vue {
  private navLinks: object[] = [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'BIO',
      link: '/bio',
    },
    {
      text: 'Contact',
      link: '/contact',
    },
    {
      text: 'Work',
      link: '/work',
    },
  ];
}
</script>

<style lang="scss" scoped>
@import "../scss/colours";

.top-app-bar {
  align-items: center;
  display: flex;
  justify-content: space-around;

  &__nav {
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
      color: $grey-600;
      display: block;
      font-size: 1.3125rem;
      padding: 0.5rem;
      text-decoration: none;
      user-select: none;

      &:hover,
      &.router-link-exact-active {
        border-top: 4px solid $grey-900;
        color: $grey-900;
      }
    }
  }
}
</style>
