<template>
  <ul class="works">
      <li class="menu__item" :data-img="image_oxfam">
        <span class="menu__item-text">
          <NuxtLink to="/oxfam">Oxfam</NuxtLink>
        </span>
      </li>
      <li class="menu__item" :data-img="image_oxfam">
        <span class="menu__item-text">
          <NuxtLink to="/vivaqua">Vivaqua</NuxtLink>
        </span>
      </li>
      <li class="menu__item" :data-img="image_oxfam">
        <span class="menu__item-text">
          <NuxtLink to="/convivial">Convivial</NuxtLink>
        </span>
      </li>
      <li class="menu__item" :data-img="image_oxfam">
        <span class="menu__item-text">
          <NuxtLink to="/beal">Beal</NuxtLink>
        </span>
      </li>
      <li class="menu__item" :data-img="image_oxfam">
        <span class="menu__item-text">
          <NuxtLink to="/beal">Grundey</NuxtLink>
        </span>
      </li>
      <li class="menu__item" :data-img="image_oxfam">
        <span class="menu__item-text">
          <NuxtLink to="/beal">Eurocyclo</NuxtLink>
        </span>
      </li>
    </ul>
</template>

<script>
import { Menu } from '~/plugins/menu/menu';


export default {
  data: () => ({
    image_oxfam: require('~/assets/images/pic.jpg')
  }),
  
  mounted() {

    let dataImage = document.querySelectorAll('[data-img]')
    
    let images = []
    dataImage.forEach(item => {
        images.push(item.getAttribute('data-img'))
    });

    //  Animations
    let gsap = this.$gsap
    let works = document.querySelector(".works")
    let items = works.querySelectorAll("li")

    let tl = gsap.timeline()
    tl.delay(.3)
    tl.from(items, {x: 150, duration: 1, ease: "power4.out", stagger: .25}, '0')
    tl.from(items, {opacity: 0, duration: 1, ease: "smooth.out", stagger: .25}, '0')

    let menuEl = document.querySelector('.works')
    new Menu(menuEl)

  }
}
</script>

<style lang="scss">
  .works {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    
    // position: fixed;
    // top: 0;
    // right: 0;
    // overflow: auto;
    // height: 100vh;

    li {
      width: 50%;
      font-family: $font_secondary;
      font-weight: 300;
      font-size: 6vw;
      text-transform: uppercase;
      padding: 40px 0;
      text-align: right;

      @media screen and (max-width: 1024px) {
        padding: 15px 0;
      }

      @media screen and (min-width: 1440px)  {
        font-size: 100px;
      }

      a {
        display: block;
      }
    }
  }

  .menu__item {
      position: relative;

      &:hover,
      &:focus {
        .menu__item-text a {
            color: white;
          }
      }

      &-text {
        position: relative;
        cursor: pointer;
        // padding: 3vw 0;
        display: block;
        overflow: hidden;
        

        &:hover,
        &:focus {
          z-index: 20;
        }
      }

      &-textinner {
        display: block;
        color: $cream;
      }
    }

    .js .menu__item-textinner {
      transform: translateY(100%);
    }

    .hover-reveal {
      position: absolute;
      z-index: -1;
      width: 320px;
      height: 420px;
      top: 0;
      left: 0;
      pointer-events: none;
      opacity: 0;

      @media screen and (max-width: 1024px) {
        display: none;
      }
    }
    
    .hover-reveal__inner {
      overflow: hidden;
    }
    
    .hover-reveal__inner,
    .hover-reveal__img {
      width: 100%;
      height: 100%;
      position: relative;
    }
    
    .hover-reveal__img {
      background-size: cover;
      background-position: 50% 50%;
    }
</style>