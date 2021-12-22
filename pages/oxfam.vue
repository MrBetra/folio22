<template>
    <div class="projet">
      <header class="projet__header">
        <h2 class="projet__title">{{ this.content.title }}</h2>
        <p class="projet__description">
          {{ this.content.description }}
        </p>
      </header>
      <div class="projet__img-wrap">
        <div class="projet__img">
          <img src="~/assets/images/pic.jpg" alt="">
        </div>
      </div>

      <div class="projet__content">
        <nuxt-content :document="content" />
      </div>
    </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const content = await $content('oxfam').fetch()
    return {
      content
    }
  },

  data() {
    return {
      heroImage: { url: "", alt: "Oxfam" },
      images: [
        { url: "", alt: "" }
      ],
    }
  },

  mounted() {
    let gsap = this.$gsap
    let projet = document.querySelector(".projet")
    let header = projet.querySelector(".projet__header")
    let title = projet.querySelector(".projet__title")
    let description = projet.querySelector(".projet__description")
    let imgContainer = projet.querySelector(".projet__img")
    let img = projet.querySelector(".projet__img img")

    // 
    let tl = gsap.timeline()
    tl.delay(.3)
    .from(title, {y: 25, opacity: 0, duration: 1, ease: "power4.out"}, '.3')
    .from(description, {y: 25, opacity: 0, duration: 1, ease: "power4.out"}, '.45')


    // Animation big image
    let tl_img = gsap.timeline({
      scrollTrigger: {
        trigger: imgContainer,
        start: "top bottom", // trigger / viewport
        end: "top center", // trigger / viewport
        scrub: 1,
        // markers: true,
      }
    })
    tl_img.from(img, { "clip-path": "inset(40% 40% 40% 40%)", opacity: 0 })

    // Animation titre + desc
    let tl_fade = gsap.timeline({
      scrollTrigger: {
        trigger: header,
        pin: true,
        pinSpacing: false,
        start: "top top", // trigger / viewport
        end: "bottom top", // trigger / viewport
        scrub: .1,
      }
    })
    tl_fade.to(header, {y: -50, scale: .8, opacity: 0.3})
    tl_fade.to(header, {y: 0, opacity: 0})
  },

  transition: {
    mode: 'out-in',
    css: false,

    enter: function (el, done) {
      
    },

    leave: function (el, done) {
      let gsap = this.$gsap
      let title = document.querySelector(".projet__title")
      let description = document.querySelector(".projet__description")
      let imgContainer = document.querySelector(".projet__img")
      let img = document.querySelectorAll(".projet__img img")

      let tl = gsap.timeline({onComplete: done})
      tl.to(imgContainer, {yPercent: 100, duration: 2, ease: "expo.in"})
      .to(img, {yPercent: -100, opacity: 0, duration: 2, ease: "expo.in"}, "0")
      .to(description, {y: 25, opacity: 0, duration: 1, ease: "power4.in"}, "0")
      .to(title, {y: 25, opacity: 0, duration: 1, ease: "power4.in"}, "0.25")
      .set([title, description], {opacity: 0})
    }
  }
}
</script>

<style lang="scss">
  .projet {
    // padding-top: 120px;
    min-height: 60vh;

    &__header {
      height: 80vh;
      width: 100vw;
      padding: 40px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      position: relative;
    }
    
    &__title {
      font-size: 15vw;
      font-weight: 300;
      font-family: $font_secondary;
      text-transform: uppercase;
      text-align: center;
      position: relative;

      // &:before {
      //   content: "";
      //   height: 30vw;
      //   width: 30vw;
      //   border-radius: 100%;
      //   background: $cream;
      //   opacity: .8;

      //   position: absolute;
      //   top: 50%;
      //   left: 50%;
      //   transform: translate(-50%, -50%);
      //   z-index: -1;
      // }
    }

    &__description {
      text-align: center;
    }

    &__img {
        width: 100vw;
        height: 80vh;
        margin: 0 auto;
        overflow: hidden;

        img {
          position: relative;
          width: 100%;
          height: 100%;
          object-position: center;
          object-fit: cover;

          // opacity: .8;
          clip: rect(0, 0, 0, 0);
        }
      }

    &__content {
      max-width: calc($max-width / 2);
      margin: 0 auto;
      padding: 60px 40px;
      position: relative;

      p {
        font-size: 1.2rem;
        line-height: 180%;
        color: rgba(white, .7);
        margin: 40px 0;
      }
    }
  }
  
</style>