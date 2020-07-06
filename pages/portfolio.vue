<template>
  <div class="portfolio">
    <h1>Portfolio</h1>
    <div class="bio__avatar avatar">
      <img src="/img/memoji-laptop.png" alt="Memoji">
    </div>
    <p>Below is a list of a few logo designs I have created in my spare time. The design briefs come from <a href="https://designers.designcrowd.co.uk/designer.aspx?designerId=842923" rel="nofollow noopener" target="_blank">Design Crowd</a>. I can follow a design brief really clearly and if a brief isn't provided, I use my initiative and creativity to take over to design something I hope the client likes.</p>
    <p>
      You can see <site-link link="/work" type="internal">
        here
      </site-link> for example artwork jobs I have done whilst employed at <site-link type="external" link="https://www.mirical-emblems.com">
        MiRiCal Emblems
      </site-link>.
    </p>
    <p><em>If the images aren't displaying correctly, you can view them <site-link type="external" link="https://github.com/JDomleo/ellaparsons.design/tree/master/static/img/portfolio">here</site-link>.</em></p>
    <section>
      <div v-if="activeSpotlight !== null">
        <img :src="'/img/portfolio/' + reversePortfolio()[activeSpotlight - 1].image + '.png'">
      </div>
      <ul class="masonry">
        <li v-for="(item, index) in reversePortfolio()" :key="index" :aria-setsize="portfolio.length" :aria-posinset="index + 1">
          <figure class="item" :class="item.text ? 'item--has-text' : ''" tabindex="0">
            <div class="item__img">
              <div class="item__name">
                <h2>{{ item.alt }}</h2>
              </div>
              <img :alt="'🖼️ ' + item.alt + ' logo'" :src="'/img/portfolio/' + item.image + '.png'" loading="lazy">
            </div>
            <div v-if="item.text" class="item__text">
              <h3>Design Brief</h3>
              <pre>
              <p>{{ item.text }}</p></pre>
            </div>
          </figure>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { SiteLink } from '@/components';

interface IPortfolio {
  image: string;
  alt: string;
  text?: string;
}

@Component({
  components: { SiteLink },
  head () {
    return {
      title: 'Portfolio'
    };
  }
})
export default class Portfolio extends Vue {
  private activeSpotlight: number | null = null;

  // private setActive(index: number): void {
  //   this.activeSpotlight = index + 1;
  // }

  private reversePortfolio () {
    return this.portfolio.slice().reverse();
  }

  private portfolio: IPortfolio[] = [
    {
      image: 'fey-fia',
      alt: 'Fey Fia'
    },
    {
      image: 'fey-fia-2',
      alt: 'Fey Fia'
    },
    {
      image: 'fey-fia-3',
      alt: 'Fey Fia'
    },
    {
      image: 'kate-galea',
      alt: 'Kate Galea',
      text: `Looking for a logo that is fun, has some spunk and is classy for a Date Coach and singles events business. Preferably shades of red and white. I've attached an example of something basic that I made up, looking to expand on something like that. Like the idea of the red heart, open to changes. Would like something that looks 3D if possible. I want something that people say WOW when they see it.

Target Market(s)

Single men and women - Age 30-50

Logo Text: Kate Galea`
    },
    {
      image: 'aligned',
      alt: 'Aligned',
      text: 'I am in need a logo design for my established company, with a new DBA called \'Aligned Living.\' Aligned Living coaching services assist clients in implementing actionable strategies for dealing with the affects of stress on their body, mind, emotion and therefore relationships. The goal is to cultivate Self-Care through Self-Awareness, Mindfulness, Self-Insight.'
    },
    {
      image: 'framework',
      alt: 'Framework'
    },
    {
      image: 'hearty-kitchens',
      alt: 'Hearty Kitchens'
    },
    {
      image: 'honest-conversations',
      alt: 'Honest Conversations',
      text: 'Need a logo designed for a new Australian business called "Honest Conversations". We work with people (about 65% male and 35% women) aged about 45 years and older, who are experiencing at least moderate levels of dissatisfaction in their life. They may feel like they haven\'t been on the right path in life, their life has lost meaning and enthusiasm as they\'ve aged and now they are seeking something more from life, but they\'re not sure what exactly. Perhaps they\'ve played life on autopilot, conforming to expectations and responsibilities. Ultimately they are deep thinkers, searching for more. They have a high level of intelligence, not measured by traditional standards. I like the colours of nature: greens, blues, oranges (sunrise and sunset), shades of grey and brown. I am drawn to the idea nature, winding pathways, water, animals , etcetera. I am also very open to suggestions about colour and logo in other areas if you have something in mind. I prefer flowing lines and curves, over geometrical hard edged shapes, but I am open to suggestions in the other direction too if you feel its appropriate.. The final design should communicate honesty, trust, hope, compassion and courage. It needs to feel inviting and welcoming, like they are "coming home", a sense of reconnecting with themselves, or with something wonderful. The logo should have a timeless, enduring yet somewhat modern feel to it. It needs to appeal to both sexes, but have a bit of a masculine/strength to it. Perhaps a little bit of abstract, but not too much. Some logos that appealed to me are attached. I would like to use this for other areas of marketing including website, business cards, etc so it needs to be able to be expanded and reduced in size accordingly.'
    },
    {
      image: 'honest-conversations-2',
      alt: 'Honest Conversations',
      text: 'Need a logo designed for a new Australian business called "Honest Conversations". We work with people (about 65% male and 35% women) aged about 45 years and older, who are experiencing at least moderate levels of dissatisfaction in their life. They may feel like they haven\'t been on the right path in life, their life has lost meaning and enthusiasm as they\'ve aged and now they are seeking something more from life, but they\'re not sure what exactly. Perhaps they\'ve played life on autopilot, conforming to expectations and responsibilities. Ultimately they are deep thinkers, searching for more. They have a high level of intelligence, not measured by traditional standards. I like the colours of nature: greens, blues, oranges (sunrise and sunset), shades of grey and brown. I am drawn to the idea nature, winding pathways, water, animals , etcetera. I am also very open to suggestions about colour and logo in other areas if you have something in mind. I prefer flowing lines and curves, over geometrical hard edged shapes, but I am open to suggestions in the other direction too if you feel its appropriate.. The final design should communicate honesty, trust, hope, compassion and courage. It needs to feel inviting and welcoming, like they are "coming home", a sense of reconnecting with themselves, or with something wonderful. The logo should have a timeless, enduring yet somewhat modern feel to it. It needs to appeal to both sexes, but have a bit of a masculine/strength to it. Perhaps a little bit of abstract, but not too much. Some logos that appealed to me are attached. I would like to use this for other areas of marketing including website, business cards, etc so it needs to be able to be expanded and reduced in size accordingly.'
    },
    {
      image: 'porter-and-bull-coffee',
      alt: 'Porter & Cull Coffee',
      text: 'Coffee bean brand.'
    },
    {
      image: 'real',
      alt: 'REAL',
      text: 'Estate agents.'
    },
    {
      image: 'seattle-ortho-arts',
      alt: 'Seattle Ortho Arts',
      text: `I am a physical therapist based in Seattle, Washington opening a new clinic. My clientele includes outdoors athletes who love the greater outdoors and performing artists, namely ballet/modern dancers. I would like to explore logos that are very simple, modern, and sharp, and play with the following imagery: mountains, osprey in flight (bird of prey), movement, dance, wind, momentum. I love simple lines, geometry, diamonds, and circles, black/white or neutrals. The ideas of mountains or osprey are to depict rising/soaring to great heights, being fierce, and the natural world. The ideas of movement, dance, wind and momentum speak to my interest in movement/exercise.

Target Market(s):

Outdoor athletes (runners, hikers, mountaineers, kayakers, cyclists, etc.) and performing artists (dancers, musicians, aerial artists) in need of physical therapy, 25-65 age group, men and women but design must be gender neutral.

Industry/Entity Type: Health

Logo Text: Seattle Ortho Arts`
    },
    {
      image: 'smoke-house-breckenridge',
      alt: 'Smoke House Breckenridge',
      text: `We need a logo design for a Texas style smokehouse located in Breckenridge Colorado . The name of the restaurant is Whiskey Star Smokehouse, the interior is vintage and rustic with a ton of rusted metal and reclaimed wood. We will feature 100+ Whiskeys and authentic Texas Smokehouse Brisket. The logo should include the name Breckenridge somewhere in it and the logo should work for all forms of retail as we sell a ton of clothing and hats. THANKS!

Logo Text: Whiskey Star - Smokehouse - Breckenridge Co`
    },
    {
      image: 'vinus-vitamins',
      alt: 'Vinus Vitamins',
      text: 'Older womens health brand'
    },
    {
      image: 'street-meet',
      alt: 'Street Meet',
      text: 'Photogrphy group training brand'
    },
    {
      image: 'bcx',
      alt: 'BCX Studio',
      text: `I want a logo for a new salesforce consulting business based in Singapore. We provide business consulting and implementation services to help our customers in the CRM(customer relationship management) & CX(customer experience) digital transformation journey. We sell and implement complete salesforce CRM solutions. We also develop our own loyalty program application with ready white label web and mobile apps to turn customers to loyal advocates. The 2 founders have over 50 years of CRM/CX experience and now move ahead to start their own business. The company name is BCX Studio. "BCX" is Beacon of Customer Experience and we are here to help and guide you in your CX digital transformation journey, so that you can connect to your customers in a whole new way. "Studio" is to provide the vibe of creativity for we also custom build applications.I have provided some samples/ideas of what I am looking at. The 2 big right arrows represent the 2 founders and it also looks like a B. The small left arrow forms a C and the cross(X) of the 2 big arrows forms a X, which gives the look of BCX. What I would like is to play around the shape, size and colors of the 3 arrows and also the font/size/color of the text "BCX Studio". I am looking for not more than 3 colors and nice font(s) that speak creativity. However, you don't have to follow what I have provided, any creative ideas and designs are welcome.

Industry/Entity Type: It Professional

Logo Text: BCX Studio`
    },
    {
      image: 'bcx-2',
      alt: 'BCX Studio',
      text: `I want a logo for a new salesforce consulting business based in Singapore. We provide business consulting and implementation services to help our customers in the CRM(customer relationship management) & CX(customer experience) digital transformation journey. We sell and implement complete salesforce CRM solutions. We also develop our own loyalty program application with ready white label web and mobile apps to turn customers to loyal advocates. The 2 founders have over 50 years of CRM/CX experience and now move ahead to start their own business. The company name is BCX Studio. "BCX" is Beacon of Customer Experience and we are here to help and guide you in your CX digital transformation journey, so that you can connect to your customers in a whole new way. "Studio" is to provide the vibe of creativity for we also custom build applications.I have provided some samples/ideas of what I am looking at. The 2 big right arrows represent the 2 founders and it also looks like a B. The small left arrow forms a C and the cross(X) of the 2 big arrows forms a X, which gives the look of BCX. What I would like is to play around the shape, size and colors of the 3 arrows and also the font/size/color of the text "BCX Studio". I am looking for not more than 3 colors and nice font(s) that speak creativity. However, you don't have to follow what I have provided, any creative ideas and designs are welcome.

Industry/Entity Type: It Professional

Logo Text: BCX Studio`
    },
    {
      image: 'attracthead',
      alt: 'Attracthead',
      text: `We are looking to refresh our logo. We are a digital agency that help our customers attract business and sales through digital campaigns across multiple platforms. We want a logo that reflects our digital business of communicating with and attracting the right people (target groups). "Attracthead" plays with the similar sounding "attracted".

Target Market(s): Business owners, marketers.

Logo Text: AttractHead

Colors: Designer to choose colors to be used in the design.`
    },
    {
      image: 'attracthead-2',
      alt: 'Attracthead',
      text: `We are looking to refresh our logo. We are a digital agency that help our customers attract business and sales through digital campaigns across multiple platforms. We want a logo that reflects our digital business of communicating with and attracting the right people (target groups). "Attracthead" plays with the similar sounding "attracted".

Target Market(s): Business owners, marketers.

Logo Text: AttractHead

Colors: Designer to choose colors to be used in the design.`
    },
    {
      image: 'seek-and-surrender',
      alt: 'Seek & Surrender',
      text: `1.) Company/Product/Service name to be used in the logo 

Seek and Surrender 

2.) Tell me a little more about your product/service... 

Seek and Surrender is a contemporary and fashionable Apparel/Accessories lifestyle brand that will be faith and inspirational/motivational based and rooted. Seek and Surrender's mission is to empower and inspire the world through powerful verbiage apparel and accessories that speak your values, but are also on-trend. This will be on online eCommerce brand that will eventually scale into a nationwide retail brand. A portion of proceeds will go to various charities and organizations.`
    },
    {
      image: 'seek-and-surrender-2',
      alt: 'Seek & Surrender',
      text: `1.) Company/Product/Service name to be used in the logo 

Seek and Surrender 

2.) Tell me a little more about your product/service... 

Seek and Surrender is a contemporary and fashionable Apparel/Accessories lifestyle brand that will be faith and inspirational/motivational based and rooted. Seek and Surrender's mission is to empower and inspire the world through powerful verbiage apparel and accessories that speak your values, but are also on-trend. This will be on online eCommerce brand that will eventually scale into a nationwide retail brand. A portion of proceeds will go to various charities and organizations.`
    },
    {
      image: 'hss',
      alt: 'HSS',
      text: `Harmony Soul and Spirits is company dedicated to food, drinks and friends. Looking for an emblem type Logo.

Logo Text: HSS`
    },
    {
      image: 'caseway',
      alt: 'Caseway',
      text: `Design a logo "C" with the words caseway below for a national retail phone shop

Logo Text: Letter "C" caseway under.`
    },
    {
      image: 'moon-spark',
      alt: 'Moonspark',
      text: 'Womens Jewellery brand.'
    },
    {
      image: 'i-memorized-that',
      alt: 'I Memorized That!',
      text: 'Online courses brand.'
    },
    {
      image: 'vapemall',
      alt: 'Vapemall',
      text: `Online site name is ‘Vapemall’. Would like to have a simple but stylish logo.

Logo Text: Vapemall`
    },
    {
      image: 'onsite-processing',
      alt: 'Onsite Processing & Trading Inc.',
      text: `We have started a new business from scratch. Our company name is Onsite Processing and Trading Inc. The objective of the company is to cut and process scrap metals, but what differentiates us from other processing companies is that we use Bonfiglioli's unique, latest, and powerful equipment, the guillotine shear. The Bonfiglioli ‘‘Squalo” vertical guillotine shears are the best metal scrap shears available in the market. We will be wielding this equipment to process all kinds of metals more efficiently than other companies. Therefore, our processing system is very efficient and compassionate. We need to create a logo that helps us to represent the uniqueness of the service that our company provides to process these different metals, simplify the work, maximize the value of the product, and minimize environmental and safety concerns. We do not have any specific colour requirements at the moment, since we don't have an exact idea of what we are looking for. We would appreciate some suggestions/recommendations that you could provide us for our logo design.

Target Market(s): Demolition companies and scrap yards. Anyone that has scrap metals that needs to be processed.

Logo Text: Onsite Processing and Trading Inc.

Colors: Designer to choose colors to be used in the design.`
    },
    {
      image: 'e-taqreer',
      alt: 'e Taqreer',
      text: `A small team plans on starting up an online business focused on selling digital services such as content creation, executive reporting, research material, social media management, presentations, and other digital services. Our services are geared towards individuals and businesses. Our name is based on an Arabic word. Our name is eTaqreer. The "e" is quite obvious - electronic which is the way our services are delivered. Taqreer means report in Arabic. Taqreer can be applied to any type of such report content such as presentations, reports, research content, etc.


Target Market(s): Individuals and businesses

Logo Text: eTaqreer`
    },
    {
      image: 'etb',
      alt: 'Electronic Transaction Business AG'
    }
  ];
}
</script>

<style lang="scss" scoped>
.portfolio {
  margin: 0 auto;
  max-width: 72em;
  padding: 1rem 0;
  text-align: center;

  @media (min-width: 48em) {
    padding: 1rem 3rem;
  }
}

.masonry {
  column-count: 1;
  column-gap: 1em;
  margin: 1.5em;
  padding: 0;
  column-gap: 1.5em;
  list-style-type: none;

  @media screen and (min-width: 41em) {
    column-count: 2;
  }

  li {
    display: inline-block;
    width: 100%;
  }
}

.item {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: var(--color-grey-50);
    padding: 1em;
    margin: 0 0 1.5em;
    width: 100%;
    transition: 1s ease all;
    box-shadow: 2px 2px 4px 0 var(--color-grey-400);
    text-align: left;

    &:hover, &:focus, &:focus-within {
      .item__name {
        opacity: 1;
      }
    }

    &__img {
      display: flex;
      justify-content: center;
      cursor: pointer;
      position: relative;
    }

    &__name {
      background: fade-out(#fff, 0.1);
      text-align: center;
      width: 100%;
      position: absolute;
      opacity: 1;
      transition: all 160ms ease;

      h2 {
        font-size: 1rem;
      }

      @media screen and (min-width: 41em) {
        opacity: 0;
      }
    }

    &__text {
      max-height: 0;
      transition: all 250ms ease;
      overflow-x: hidden;
      padding: 0 0.5rem;
      margin-bottom: 0;
      cursor: text;

      h3 {
        margin-bottom: 0;
      }

      pre {
        white-space: break-spaces;
        margin: 0;

        p {
          margin: 0;
        }
      }
    }

    &--has-text {
      position: relative;

      &:hover, &:focus, &:focus-within {
        .item__text {
          max-height: 15rem;
          overflow-y: auto;
          margin-bottom: 1rem;
        }

        &::after {
          transform: rotate(-135deg) translateX(-50%);
        }
      }

      &::after {
        content: '';
        height: 1rem;
        width: 1rem;
        border: 4px solid var(--color-grey-700);
        border-left-color: transparent;
        border-top-color: transparent;
        transform: rotate(45deg) translateX(-50%);
        position: absolute;
        left: 50%;
        bottom: 0.5rem;
        transition: all 160ms ease;
      }
    }
}
</style>
