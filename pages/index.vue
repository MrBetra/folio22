<template>
  <div class="main_content">
    <!-- <div class="intro">
      <p>Hey, I'm a front-end designer from belgium currently working at <a href="#">Spade</a></p>
    </div> -->
    <Menu />
  </div>
</template>


<script>
  export default {
    
    mounted() {

      //  Animation
      let gsap = this.$gsap
      let intro = document.querySelector(".intro")

      let tl = gsap.timeline()
      tl.delay(.3)
      tl.from(intro, {x: 25, opacity: 0, duration: 1, ease: "power4.out"})
   },

   transition: {
     css: false,
     mode: 'out-in',

     enter: function(el, done) {
        
     },

     leave: function(el, done) {
        let gsap = this.$gsap
        let intro = el.querySelector(".intro")
        let works = el.querySelector(".works")
        let items = works.querySelectorAll("li")

        let tl = gsap.timeline({onComplete: done})
        tl.delay(.3)
        tl.to(intro, {y: 25, opacity: 0, duration: .6, ease: "power4.in"})
        tl.to(items, {y: 50, opacity: 0, duration: .6, ease: "power4.in", stagger: .15}, '0')
     }
   },
 }
</script>

<style lang="scss">
  .main_content {
    width: 100vw;
    padding-top: 50px;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 150px;
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 1024px) {
      padding: 0 25px;
    }

    @media screen and (min-width: 1480px) {
      padding-left: calc((100vw - $max-width) / 2);
      padding-right: calc((100vw - $max-width) / 2);
    }
  }

  .intro {
    max-width: $max-width;
    margin: 0 auto;
    padding-top: 140px;

    @media screen and (min-width: $max-width) {
      position: fixed;
      top: 100px;
      left: calc((100vw - 1440px) / 2 + 40px);
      z-index: 1;
      height: 100vh;
      padding-top: 0;
    }
    

    p {
      font-size: 18px;
      font-weight: 400;
      line-height: 140%;
      max-width: 500px;
    }
  }
</style>
