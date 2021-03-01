<template>
  <header class="menu" v-on-clickaway="closeNav">
    <button class="menu__toggle" aria-label="Toggle menu" @click="showNav = !showNav" @mouseenter="showNav = true">
      <div class="fries" :class="{'fries--open': showNav}">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
    <transition name="fade">
      <nav v-show="showNav" class="menu__nav">
        <ul>
          <li v-for="(navItem, index) in navList" :key="navItem.url" :aria-setsize="navList.length" :aria-posinset="index + 1">
            <nuxt-link :to="navItem.url">
              {{ navItem.text }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </transition>
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
  private showNav: boolean = false;

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

  private closeNav(): void {
    this.showNav = false;
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 160ms;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.menu {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1;

  &__toggle {
    padding: 0.8rem;
    border-radius: 50%;
    background-color: var(--color-black);
    border: none;
    cursor: pointer;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    @media (min-width: 48em) {
      padding: 1rem;
    }

    &:hover {
      box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    }
  }

  &__nav {
    font-family: 'It Is Definitely Possible', cursive;
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 1.1rem;
    background-color: var(--color-black);
    color: var(--color-pink);
    font-size: 1.5rem;
    padding: 1rem;
    text-align: right;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    &::before {
      content: '';
      position: absolute;
      bottom: 100%;
      right: 1.4rem;
      border: 8px solid transparent;
      border-bottom-color: var(--color-black);

      @media (min-width: 48em) {
        right: 1.7rem;
        border-width: 10px;
      }
    }

    @media (min-width: 48em) {
      font-size: 2.2rem;
    }

    ul {
      padding-left: 0;
      margin: 0;
      list-style-type: none;
    }

    a {
      color: var(--color-pink);
      text-decoration: none;
      transition: 160ms ease;

      &:hover, &:focus {
        color: var(--color-white);
      }
    }
  }
}

.fries {
  width: 30px;
  height: 15px;
	position: relative;
	transform: rotate(0deg);
	transition: 0.5s ease-in-out;
  margin: 7.5px 0;

	span {
		display: block;
		position: absolute;
		height: 2px;
		width: 50%;
		background-color: var(--color-pink);
		opacity: 1;
		transform: rotate(0deg);
		transition: 0.25s ease-in-out;
    will-change: left;

		&:nth-child(even) {
			left: 50%;
			border-radius: 0 9px 9px 0;
		}

		&:nth-child(odd) {
			left: 0px;
			border-radius: 9px 0 0 9px;
		}

		&:nth-child(1),
		&:nth-child(2) {
			top: 0px;
      will-change: top;
		}

		&:nth-child(3),
		&:nth-child(4) {
			top: 8px;
			width: 36%;
      will-change: opacity;
		}

		&:nth-child(3) {
			left: 29%;
		}

		&:nth-child(4) {
			left: 64%;
		}

		&:nth-child(5),
		&:nth-child(6) {
			top: 16px;
      will-change: top;
		}
	}

	&--open {
		span {
			&:nth-child(1),
			&:nth-child(6) {
				transform: rotate(45deg);
			}

			&:nth-child(2),
			&:nth-child(5) {
				transform: rotate(-45deg);
			}

      &:nth-child(1),
			&:nth-child(2) {
				top: 5px;
			}

			&:nth-child(1) {
				left: 5px;
			}

			&:nth-child(2) {
				left: calc(50% - 5px);
			}

			&:nth-child(3),
			&:nth-child(4) {
				opacity: 0;
			}

			&:nth-child(3) {
				left: -50%;
			}

			&:nth-child(4) {
				left: 100%;
			}

      &:nth-child(5),
			&:nth-child(6) {
				top: 10px;
			}

			&:nth-child(5) {
				left: 5px;
			}

			&:nth-child(6) {
				left: calc(50% - 5px);
			}
		}
	}

  @media (min-width: 48em) {
    width: 40px;
	  height: 25px;

    span {
      height: 5px;

      &:nth-child(3),
      &:nth-child(4) {
        top: 10px;
      }

      &:nth-child(5),
      &:nth-child(6) {
        top: 20px;
      }
    }

    &--open {
      span {
        &:nth-child(5),
        &:nth-child(6) {
          top: 16px;
        }
      }
    }
  }
}
</style>
