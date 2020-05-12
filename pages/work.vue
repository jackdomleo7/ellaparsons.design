<template>
  <div class="work">
    <p>
      Below are some artwork jobs/logos I have done during my time at <site-link type="external" link="https://www.mirical-emblems.com">
        MiRiCal Emblems
      </site-link>.
    </p>
    <p>
      For other designs and photography I have done, please see a collection of my portfolio on <site-link type="external" :link="commonMedia.pinterest.url">
        {{ commonMedia.pinterest.platform }}
      </site-link>, <site-link type="external" :link="commonMedia.instagram.url">
        {{ commonMedia.instagram.platform }}
      </site-link>, <site-link type="external" :link="commonMedia.gurushots.url">
        {{ commonMedia.gurushots.platform }}
      </site-link>, <site-link type="external" :link="commonMedia.dribbble.url">
        {{ commonMedia.dribbble.platform }}
      </site-link> and <site-link type="external" :link="commonMedia.designcrowd.url">
        {{ commonMedia.designcrowd.platform }}
      </site-link>.
    </p>
    <section>
      <ul class="work__gallery">
        <li v-for="(image, index) in images" :key="index" :aria-setsize="images.length" :aria-posinset="index + 1">
          <figure class="work__figure" :aria-label="image.alt" data-cooltipz-dir="top">
            <img class="work__image" :alt="'🖼️ ' + image.alt + ' logo'" :src="'/img/work/' + image.image + '.png'" loading="lazy">
          </figure>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SiteLink from '@/components/SiteLink.vue';
import CommonInfo, { IMedias } from '@/middleware/CommonInfo';

interface IWorkImage {
  image: string;
  alt: string;
}

@Component({
  components: { SiteLink }
})
export default class Work extends Vue {
  private get commonMedia (): IMedias {
    return CommonInfo.commonMedia;
  }

  private images: IWorkImage[] = [
    {
      image: 'pizza-express-pizzeria',
      alt: 'Pizza Express Pizzeria'
    },
    {
      image: 'royal-air-force-rowing',
      alt: 'Royal Air Force Rowing'
    },
    {
      image: 'liverpool-fc',
      alt: 'Liverpool Football Club'
    },
    {
      image: 'nhs-laundry',
      alt: 'NHS Laundry'
    },
    {
      image: 'spar',
      alt: 'SPAR'
    },
    {
      image: 'virgin-media-business',
      alt: 'Virgin Media Business'
    },
    {
      image: 'stagecoach',
      alt: 'Stagecoach'
    },
    {
      image: 'stihl',
      alt: 'STIHL'
    },
    {
      image: 'bamct',
      alt: 'BAM Construction Training'
    },
    {
      image: 'general-electric',
      alt: 'General Electric'
    },
    {
      image: 'stand-fast',
      alt: 'Stand Fast'
    },
    {
      image: 'juste-de-lencre',
      alt: 'Juste de L\'encre'
    },
    {
      image: 'simon-gibson',
      alt: 'Simon Gibson Transport'
    },
    {
      image: 'peter',
      alt: 'PETER'
    },
    {
      image: 'alford',
      alt: 'ALFORD'
    },
    {
      image: 'aemt',
      alt: 'AEMT'
    },
    {
      image: 'muckendork-zeiselmauer',
      alt: 'Muckendork Zeiselmauer'
    },
    {
      image: 'ville-de-mery-sur-oise',
      alt: 'Ville de Mery Sur Oise'
    },
    {
      image: 'jugend-arbeit',
      alt: 'Jugend Arbeit'
    },
    {
      image: 'ambever',
      alt: 'Ambever'
    },
    {
      image: 'i-jump-trampoline-park',
      alt: 'I-Jump Trampoline Park'
    },
    {
      image: 'm2-construction',
      alt: 'M2 Construction'
    },
    {
      image: 'charcuterie-joubert-cap-ferret',
      alt: 'Charcuterie Joubert Cap Ferret'
    },
    {
      image: 'university-of-bath',
      alt: 'University of Bath'
    },
    {
      image: 'mc2-therapeutics',
      alt: 'MC2 Therapeutics'
    },
    {
      image: 'the-new-philly',
      alt: 'The New Philly'
    },
    {
      image: 'sogielec',
      alt: 'Sogielec'
    },
    {
      image: 'air-products',
      alt: 'Air Products'
    },
    {
      image: 'karl-hugo',
      alt: 'Karl Hugo Mechanical Engineering'
    },
    {
      image: 'mmg',
      alt: 'MMG Carrocerias'
    },
    {
      image: 'dubness',
      alt: 'DubNess'
    }
  ];
}
</script>

<style lang="scss" scoped>
.work {
  margin: 0 auto;
  max-width: 72em;
  padding: 1rem 0;
  text-align: center;

  @media (min-width: 48em) {
    padding: 1rem 3rem;
  }

  &__gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding-left: 0;
  }

  &__figure {
    align-items: center;
    display: flex;
    height: 14rem;
    justify-content: center;
    margin: 1rem;
    width: 14rem;
  }

  &__image {
    max-height: 100%;
    object-fit: cover;
    width: 100%;
    image-rendering: pixelated;
  }
}
</style>
