<template>
  <div class="main_content">
    <div class="intro">
      <p>Hey, I'm a front-end designer from belgium currently working at <a href="#">Spade</a></p>
    </div>
    <ul class="works">
      <li>
       <NuxtLink to="/oxfam">Oxfam</NuxtLink>
      </li>
      <li>
       <NuxtLink to="/vivaqua">Vivaqua</NuxtLink>
      </li>
      <li>
       <NuxtLink to="/convivial">Convivial</NuxtLink>
      </li>
      <li>
       <NuxtLink to="/beal">Beal</NuxtLink>
      </li>
    </ul>
  </div>
</template>


<script>
  export default {
   
   mounted() {
      let gsap = this.$gsap
      let intro = document.querySelector(".intro")
      let works = document.querySelector(".works")
      let items = works.querySelectorAll("li")

      let tl = gsap.timeline()
      tl.delay(.3)
      tl.from(intro, {x: 25, opacity: 0, duration: 1, ease: "power4.out"})
      tl.from(items, {x: 150, duration: 1, ease: "power4.out", stagger: .25}, '0')
      tl.from(items, {opacity: 0, duration: 1, ease: "smooth.out", stagger: .25}, '0')
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
    padding-left: 40px;
    padding-right: 40px;
    position: relative;
    overflow: hidden;

    @media screen and (min-width: 1480px) {
      padding-left: calc((100vw - $max-width) / 2);
      padding-right: calc((100vw - $max-width) / 2);
    }
  }

  .intro {
    max-width: $max-width;
    margin: 0 auto;
    
    position: fixed;
    top: 120px;
    left: calc((100vw - 1440px) / 2 + 40px);
    z-index: 1;

    @media screen and (max-width: 1024px) {
      position: relative;
      top: unset;
      left: unset;
      margin-bottom: 50px;
    }

    @media screen and (min-width: 1025px) and (max-width: 1440px) {
      left: 40px;
    }

    p {
      font-size: 32px;
      font-weight: 300;
      line-height: 130%;
      max-width: 500px;
    }
  }

  .works {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    
    position: relative;
    padding-top: 40px;

    &::before {
      content: "works";
      display: inline-block;

      color: rgba(white, .4);
      font-family: $font_primary;
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 3px;
      text-transform: uppercase;

      position: absolute;
      top: 0;
      right: 0;
    }

    li {
      font-family: $font_secondary;
      font-size: 10vw;
      text-transform: uppercase;
      padding: 40px 0;

      @media screen and (max-width: 1024px) {
        padding: 15px 0;
      }

      @media screen and (min-width: 1440px)  {
        font-size: 150px;
      }
    }
  }
</style>
