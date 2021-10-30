<template>
  <footer class="footer">
    <ul class="social-list" :class="{'social-list--ios': safari}">
      <li v-for="(icon, index) in socialIcons" :key="icon.url" :aria-setsize="socialIcons.length" :aria-posinset="index + 1">
        <a :href="icon.url" rel="noopener nofollow" :aria-label="icon.text" data-cooltipz-dir="top">
          <svg-icon v-if="icon.icon" :name="icon.icon" />
          <img v-else-if="icon.img" :src="`/img/${icon.img}`" :alt="icon.text" loading="lazy" height="32" width="32" />
        </a>
      </li>
    </ul>
    <form :action="formspree" method="POST" class="contact">
      <h2 class="contact--heading">Contact me</h2>
      <div class="contact--email">
        <label class="textfield">
          Your email <span class="textfield__required" aria-hidden="true">*</span><span class="sr-only">(required)</span>
          <span class="textfield__box">
            <svg-icon name="at" />
            <input v-model="contactForm.email" @change="autosave" type="email" name="email" autocomplete="email" inputmode="email" required>
          </span>
        </label>
        <p v-if="!$v.contactForm.email.email" class="contact--error">Enter a valid email address</p>
      </div>
      <label class="textfield contact--name">
        Your name <span class="textfield__required" aria-hidden="true">*</span><span class="sr-only">(required)</span>
        <span class="textfield__box">
          <svg-icon name="user" />
          <input v-model="contactForm.name" @change="autosave" type="text" name="name" autocomplete="name" inputmode="text" required>
        </span>
      </label>
      <label class="textfield contact--message">
        Your message <span class="textfield__required" aria-hidden="true">*</span><span class="sr-only">(required)</span>
        <span class="textfield__box">
          <textarea v-model="contactForm.message" @change="autosave" name="message" inputmode="text" required />
        </span>
      </label>

      <button class="btn" type="submit" :disabled="$v.contactForm.$invalid">
        Send
      </button>
    </form>
    <p class="legal">&copy;<time :datetime="year">{{ year }}</time> Ella Parsons. <br class="legal__break" />All rights reserved.</p>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import { Validations } from 'vuelidate-property-decorators';
import { email, required } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';

import { isSafari } from '@/helpers/safari';

interface ISocial {
  text: string;
  url: string;
  icon?: string;
  img?: string;
}

interface IContactForm {
  email: string;
  name: string;
  message: string;
}

@Component({
  mixins: [validationMixin]
})
export default class SiteFooter extends Vue {
  private contactForm: IContactForm = {
    email: '',
    name: '',
    message: ''
  };

  private socialIcons: ISocial[] = [
    {
      text: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://linkedin.com/in/ellaparsons25'
    },
    {
      text: 'GuruShots',
      img: 'gurushots.png',
      url: 'https://gurushots.com/ella.parsons/photos'
    },
    {
      text: 'Etsy',
      icon: 'etsy',
      url: 'https://www.etsy.com/uk/shop/NailEnvyDesign'
    }
  ];

  @Validations()
  private validations = {
    contactForm: {
      email: {
        email,
        required
      },
      name: {
        required
      },
      message: {
        required
      }
    },
  };

  private get year(): number {
    return new Date().getFullYear();
  }

  private get formspree(): string {
    return `https://formspree.io/f/${process.env.FORMSPREE_ENDPOINT}`;
  }

  private get safari(): boolean {
    return isSafari();
  }

  private mounted(): void {
    if (sessionStorage.getItem("autosave")) {
      this.contactForm = JSON.parse(sessionStorage.getItem("autosave")!);
    }
  }

  private autosave(): void {
    sessionStorage.setItem("autosave", JSON.stringify(this.contactForm));
  }
}
</script>

<style lang="scss" scoped>
.footer {
  display: grid;
  grid-template-areas: 'social' 'contact' 'legal';
  gap: 2rem;
  position: relative;
  padding: 1.5rem 1rem;
  color: var(--color-white);
  background-color: var(--color-grey);
  box-shadow: 20px 0 80px rgba(0,0,0,.7);

  @media (min-width: 64em) {
    grid-template-areas: 'social contact' 'legal contact';
  }
}

.social-list {
  grid-area: social;
  align-self: flex-start;
  justify-self: center;
  padding-left: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  a {
    color: var(--color-black);
    display: grid;
    place-items: center;
    padding: 0.5rem;
    background-color: transparent;
    border: 4px solid var(--color-black);

    &:hover,
    &:focus {
      svg,
      img {
        transform: rotate(-10deg);
      }
    }

    svg,
    img {
      height: 2rem;
      width: 2rem;

      @media (prefers-reduced-motion: no-preference) {
        transition: 160ms ease-in-out;
        will-change: transform;
      }
    }
  }

  &--ios {
    > li {
      margin: 0 0.5rem;

      &:first-of-type {
        margin-left: 0;
      }

      &:last-of-type {
        margin-right: 0;
      }
    }
  }
}

.textfield {
  width: 100%;
  position: relative;

  &__box {
    display: flex;
    flex-direction: row-reverse;
    background-color: #fff;
    padding: 0.2rem;
    border: 1px solid;
    margin-top: 0.2rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0 2px 5px -1px, rgba(0, 0, 0, 0.3) 0 1px 3px -1px;

    &:focus-within {
      border-color: var(--color-black);
    }
  }

  &__required {
    color: var(--color-pink);
    font-size: 180%;
    position: absolute;
    top: -5px;
    margin-left: 3px;
    user-select: none;
  }

  svg {
    height: 1.8rem;
    width: 1.8rem;
    color: var(--color-grey);
  }

  input,
  textarea {
    width: 100%;
    border: none;
    background-color: transparent;

    &:focus {
      outline: none;
    }
  }

  textarea {
    resize: vertical;
    min-height: 10vmin;
  }
}

.btn {
  box-shadow: rgba(50, 50, 93, 0.25) 0 2px 5px -1px, rgba(0, 0, 0, 0.3) 0 1px 3px -1px;
  padding: 0.8rem 1rem;
  border: none;
  background-color: var(--color-white);
  color: var(--color-black);
  cursor: pointer;

  &:not( [disabled] ) {
    &:hover,
    &:focus {
      background-color: var(--color-pink);
    }
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: 160ms ease-in-out;
  }
}

.contact {
  grid-area: contact;
  display: grid;
  grid-template-areas: 'heading' 'email' 'name' 'message' 'btn';
  gap: 0.5rem;

  @media (min-width: 40em) {
    grid-template-areas: 'heading heading' 'email name' 'message message' 'btn btn';
  }

  &--heading {
    grid-area: heading;
  }

  &--email {
    grid-area: email;
  }

  &--name {
    grid-area: name;
  }

  &--message {
    grid-area: message;
  }

  &--error {
    margin: 0.2rem 0 0 0;
    font-weight: 700;
    color: var(--color-red);
  }

  .btn {
    grid-area: btn;
    justify-self: right;
    margin-top: 0.5rem;
  }
}

.legal {
  grid-area: legal;
  align-self: center;
  justify-self: center;
  text-align: center;

  &__break {
    @media (min-width: 22em) {
      display: none;
    }
  }
}
</style>
