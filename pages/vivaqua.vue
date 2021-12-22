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
    const content = await $content('vivaqua').fetch()
    return {
      content
    }
  },

  data() {
    return {
      heroImage: { url: "", alt: "Vivaqua" },
      images: [
        { url: "", alt: "" }
      ],
    }
  },

  mounted() {
    let gsap = this.$gsap
    let projet = document.querySelector(".projet")
    let title = document.querySelector(".projet__title")
    let description = document.querySelector(".projet__description")
    let imgContainer = document.querySelector(".projet__img")
    let img = document.querySelector(".projet__img img")

    let width = projet.getBoundingClientRect().width
    console.log(width)

    let tl = gsap.timeline()
    tl.delay(.3)
    .from(title, {y: 25, opacity: 0, duration: 1, ease: "power4.out"}, '.3')
    .from(description, {y: 25, opacity: 0, duration: 1, ease: "power4.out"}, '.45')
    // .to(img, {width: 1440, duration: 2, ease: "expo.out"})

    let tl_img = gsap.timeline({
      scrollTrigger: {
        trigger: imgContainer,
        start: "top bottom", // trigger / viewport
        end: "top center", // trigger / viewport
        scrub: 1,
        // markers: true,
      }
    })

    tl_img.from(img, {
      "clip-path": "inset(40% 40% 40% 40%)",
    })
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
  // Style from oxfam.vue
</style>