<template>
  <footer class="footer">
    <h3 class="footer__title">Graphics-Design-Creative</h3>
    <div>
      <site-link type="external" link="https://gurushots.com/ella.parsons/photos" aria-label="Photography on GuruShots" data-cooltipz-dir="top" class="footer__social-link">
        <icon class="footer__social-icon" icon="camera" />
      </site-link>
      <site-link type="external" link="https://designers.designcrowd.co.uk/designer.aspx?designerId=842923" aria-label="Logo design on DesignCrowd" data-cooltipz-dir="top" class="footer__social-link">
        <icon class="footer__social-icon" icon="object-group" />
      </site-link>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';
import SiteLink from '@/components/SiteLink.vue';

@Component({
  components: { Icon, SiteLink },
})
export default class AppFooter extends Vue {}
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
    &-link {
      align-items: center;
      background-color: var(--color-grey-800);
      border-radius: 0.1875rem;
      color: var(--color-grey-50);
      display: inline-flex;
      justify-content: center;
      margin: 0 0.5rem;
      padding: 0.3rem;
      transition: 0.2s background-color ease-in-out;
    }

    &-icon {
      height: 1.5rem;
      width: 1.5rem;
    }
  }
}
</style>
