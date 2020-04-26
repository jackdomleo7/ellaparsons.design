<template>
  <footer class="footer">
    <h3 class="footer__title">Graphics-Design-Creative</h3>
    <ul class="footer__social">
      <li v-for="(social, index) in socialLinks" :key="index" :aria-setsize="socialLinks.length" :aria-posinset="index + 1">
        <site-link type="external" :link="social.link" :aria-label="social.tooltip" data-cooltipz-dir="top" class="footer__social-link">
          <img v-if="social.image" class="footer__social-icon" :src="'/img/' + social.icon" />
          <icon v-else class="footer__social-icon" :icon="social.icon" />
        </site-link>
      </li>
    </ul>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';
import SiteLink from '@/components/SiteLink.vue';

interface ISocialLinks {
  tooltip: string;
  icon: string;
  link: string;
  image?: boolean;
}

@Component({
  components: { Icon, SiteLink },
})
export default class AppFooter extends Vue {
  private readonly socialLinks: ISocialLinks[] = [
    {
      tooltip: 'Pinterest',
      icon: 'pinterest',
      link: 'https://www.pinterest.co.uk/ellaparsons1633',
    },
    {
      tooltip: 'Instagram',
      icon: 'instagram',
      link: 'https://www.instagram.com/ella.photos00',
    },
    {
      tooltip: 'Photography on GuruShots',
      icon: 'gurushots.png',
      link: 'https://gurushots.com/ella.parsons/photos',
      image: true,
    },
    {
      tooltip: 'Dribbble',
      icon: 'dribbble',
      link: 'https://dribbble.com/Ellaparsons',
    },
    {
      tooltip: 'Logo design on DesignCrowd',
      icon: 'designcrowd.png',
      link: 'https://designers.designcrowd.co.uk/designer.aspx?designerId=842923',
      image: true,
    },
  ];
}
</script>

<style lang="scss" scoped>
.footer {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 2rem;

  @media (max-width: 845px) {
    padding: 1.5rem 1rem;
  }

  &__title {
    font-size: 1.4rem;
    font-weight: 200;
  }

  &__social {
    padding-left: 0;
    list-style-type: none;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    > li {
      margin: 0 0.5rem;
    }

    &-link {
      align-items: center;
      background-color: var(--color-grey-800);
      border-radius: 0.1875rem;
      color: var(--color-grey-50);
      display: inline-flex;
      justify-content: center;
      padding: 0.3rem;
      transition: 0.2s background-color ease-in-out;

      &:hover,
      &:focus {
        background-color: var(--color-grey-700);
        color: var(--color-grey-50);
      }
    }

    &-icon {
      height: 1.5rem;
      width: 1.5rem;
    }
  }
}
</style>
