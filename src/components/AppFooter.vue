<template>
  <footer class="footer">
    <h3 class="footer__title">Graphics-Design-Creative</h3>
    <ul class="footer__social">
      <li v-for="(social, index) in socialLinks" :key="index" :aria-setsize="socialLinks.length" :aria-posinset="index + 1">
        <site-link type="external" :link="social.url" :aria-label="social.tooltip" data-cooltipz-dir="top" class="footer__social-link">
          <img v-if="social.iconIsImage" class="footer__social-icon" :src="'/img/' + social.icon" />
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
import CommonInfo, { IMedias } from '@/helpers/CommonInfo';

interface ISocialLinks {
  tooltip: string;
  url: string;
  icon: string;
  iconIsImage?: boolean;
}

@Component({
  components: { Icon, SiteLink },
})
export default class AppFooter extends Vue {
  private readonly socialLinks: ISocialLinks[] = [
    {
      tooltip: this.commonMedia.pinterest.platform,
      icon: this.commonMedia.pinterest.icon,
      url: this.commonMedia.pinterest.url,
      iconIsImage: this.commonMedia.pinterest.iconIsImage,
    },
    {
      tooltip: this.commonMedia.instagram.platform,
      icon: this.commonMedia.instagram.icon,
      url: this.commonMedia.instagram.url,
      iconIsImage: this.commonMedia.instagram.iconIsImage,
    },
    {
      tooltip: this.commonMedia.gurushots.platform,
      icon: this.commonMedia.gurushots.icon,
      url: this.commonMedia.gurushots.url,
      iconIsImage: this.commonMedia.gurushots.iconIsImage,
    },
    {
      tooltip: this.commonMedia.dribbble.platform,
      icon: this.commonMedia.dribbble.icon,
      url: this.commonMedia.dribbble.url,
      iconIsImage: this.commonMedia.dribbble.iconIsImage,
    },
    {
      tooltip: this.commonMedia.designcrowd.platform,
      icon: this.commonMedia.designcrowd.icon,
      url: this.commonMedia.designcrowd.url,
      iconIsImage: this.commonMedia.designcrowd.iconIsImage,
    },
  ];

  private get commonMedia(): IMedias {
    return CommonInfo.commonMedia;
  }
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
    align-items: center;
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding-left: 0;

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
