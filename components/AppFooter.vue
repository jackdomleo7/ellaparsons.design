<template>
  <footer class="footer">
    <h3 class="footer__title">Graphics-Design-Creative</h3>
    <ul class="footer__social">
      <li v-for="(social, index) in socialLinks" :key="index" :aria-setsize="socialLinks.length" :aria-posinset="index + 1">
        <site-link type="external" :link="social.url" :aria-label="social.tooltip" data-cooltipz-dir="top" class="footer__social-link">
          <img v-if="social.iconIsImage" :src="'/img/' + social.icon" />
          <svg-icon v-else :name="social.icon" />
        </site-link>
      </li>
    </ul>
    <p class="footer__copy"><small>&copy;{{ new Date().getFullYear() }} <site-link type="external" link="https://ellaparsons.design">Ella Parsons</site-link>, <site-link type="external" link="https://jackdomleo.dev">Jack Domleo</site-link>. <br/>All rights reserved.</small></p>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SiteLink from '@/components/SiteLink.vue';
import CommonInfo, { IMedias } from '@/middleware/CommonInfo';

interface ISocialLinks {
  tooltip: string;
  url: string;
  icon: string;
  iconIsImage?: boolean;
}

@Component({
  components: { SiteLink },
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
  padding: 2.5rem 2rem;

  @media (max-width: 845px) {
    padding: 1rem;
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
      height: 1.8rem;
      justify-content: center;
      padding: 0.3rem;
      transition: 0.2s background-color ease-in-out;
      width: 1.8rem;

      &:hover,
      &:focus {
        background-color: var(--color-grey-700);
        color: var(--color-grey-50);
      }
    }
  }

  &__copy {
    margin-bottom: 0;
    text-align: center;

    br {
      @media (min-width: 370px) {
        display: none;
      }
    }
  }
}
</style>
