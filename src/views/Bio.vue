<template>
  <div class="bio">
    <h1>Ella Parsons | BIO</h1>
    <h2>I'm a Trainee Graphic Artist.</h2>
    <p>
      I'm Ella Parsons and I love anything and everything to do with design. I am currently working for a label printing company, <site-link type="external" link="https://www.mirical-emblems.com">MiRiCal Emblems</site-link>, and my job is to edit and recreate customers artwork so it is print ready. 
    </p>
    <p>
      Even though I enjoy my job and I have learnt so many skills whilst I have been here, I would love to put my skills to more practice and let my creativity flow even further.
    </p>
    <p>
      In my free time, I love taking photos and being outdoors. Some of these can be found on my <site-link type="external" :link="commonMedia.gurushots.url">{{ commonMedia.gurushots.platform }}</site-link> and <site-link type="external" :link="commonMedia.instagram.url">{{ commonMedia.instagram.platform }}</site-link> pages. I also enjoy art, going to music shows and festivals and playing the piano.
    </p>
    <p>
      I also use a website called <site-link type="external" :link="commonMedia.designcrowd.url">{{ commonMedia.designcrowd.platform }}</site-link> where I enter logo design competitions, but my primary use of this is to practice reading briefs and being creative while sticking to what the customer has asked for. Businesses could be looking for anything from a logo design to a t-shirt design. They use a brief so the designers have an idea about what they are looking for. Visit my <site-link type="external" :link="commonMedia.designcrowd.url">{{ commonMedia.designcrowd.platform }}</site-link>, <site-link type="external" :link="commonMedia.dribbble.url">{{ commonMedia.dribbble.platform }}</site-link> and <site-link type="external" :link="commonMedia.pinterest.url">{{ commonMedia.pinterest.platform }}</site-link> pages for some of my work.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SiteLink from '@/components/SiteLink.vue';
import CommonInfo, { IMedias } from '@/helpers/CommonInfo.ts';

@Component({
  components: { SiteLink },
})
export default class Bio extends Vue {
  private get commonMedia(): IMedias {
    return CommonInfo.commonMedia;
  }
}
</script>

<style lang="scss" scoped>
.bio {
  color: var(--color-grey-900);
  margin: 1rem 2rem;
  max-width: 62.5em;

  @media (min-width: 750px) {
    margin: 1rem 3rem;
  }

  @media (min-width: 1300px) {
    margin: 1rem 4rem;
  }

  @media (min-width: 2000px) {
    margin: 1rem 5rem;
  }

  @media (min-width: 3000px) {
    margin: 1rem 6rem;
  }
}
</style>
