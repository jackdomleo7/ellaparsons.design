<template>
  <header class="menu">
    <nav>
      <ul>
        <li v-for="(navItem, index) in navList" :key="navItem.url" :aria-setsize="navList.length" :aria-posinset="index + 1">
          <nuxt-link :to="navItem.url">
            {{ navItem.text }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

interface INav {
  text: string;
  url: string;
}

@Component
export default class Navigation extends Vue {
  private readonly navList: INav[] = [
    {
      text: 'Home',
      url: '/'
    },
    {
      text: 'About',
      url: '#about'
    },
    {
      text: 'Portfolio',
      url: '#portfolio'
    }
  ];
}
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1;
}
</style>
