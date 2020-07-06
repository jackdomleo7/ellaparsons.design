<template>
  <section>
    <h2>Contact me</h2>
    <form
      action="https://formspree.io/xqkyydzk"
      method="POST"
      class="contact"
    >
      <label class="textfield">
        Your email:
        <input type="email" name="email">
      </label>
      <label class="textfield">
        Your name:
        <input type="text" name="name">
      </label>
      <label class="textfield">
        Your message:
        <textarea name="message" />
      </label>

      <button class="btn" type="submit">
        Send
      </button>
    </form>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Contact extends Vue {}
</script>

<style lang="scss" scoped>
.textfield {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  input,
  textarea {
    width: 100%;
    border-radius: 10vmin;
    border: 1px solid var(--color-grey-800);
    padding: 1rem 1.5rem;
    background: var(--color-grey-50);
    color: var(--color-grey-900);

    &:focus {
      border-color: var(--color-pink);
    }
  }

  textarea {
    resize: vertical;
    min-height: 20vmin;
    border-radius: 5vmin;
  }
}

.btn {
  border-radius: 10vmin;
  border: 1px solid var(--color-grey-800);
  background: var(--color-grey-50);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.7rem 1.4rem;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 160ms ease;

  &:hover,
  &:focus {
    background: var(--color-grey-800);
    color: var(--color-grey-50);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
}

.contact {
  display: grid;
  grid-template-areas: "email" "name" "message" "btn";
  gap: 1.5rem;

  @media (min-width: 40em) {
    grid-template-areas: "email name" "message message" "btn btn";
  }

  .textfield {
    &:nth-child(1) {
      grid-area: email;
    }

    &:nth-child(2) {
      grid-area: name;
    }

    &:nth-child(3) {
      grid-area: message;
    }
  }

  .btn {
    grid-area: btn;
    justify-self: right;
  }
}
</style>
