<template>
  <div>
    <header class="topbar">
      <div class="topbar__wrapper">
        <div class="topbar__logo">
          <NuxtLink to="/" class="link">
            <Logo />
            <h1 class="topbar__title">
              Rémi Lejeune
              <span>digital artisan</span>
            </h1>
          </NuxtLink>
        </div>
      </div>
    </header>
    <Nuxt />
    <footer class="footer">
      <a href="#" class="footer__mail">hello@remilejeune.be</a>
      <ul class="footer__social">
        <li><a href="#">linkedin</a></li>
        <li><a href="#">instagram</a></li>
        <li><a href="#">github</a></li>
      </ul>
      <div class="circle"><span class="graphic"></span></div>
    </footer>
  </div>
</template>
<script>
export default {

  mounted() {
    let gsap = this.$gsap
    let header = document.querySelector(".topbar")
    let logo = document.querySelector(".topbar__logo")
    let svg = logo.querySelector(".logo")
   
    // let tl = gsap.timeline()
    // tl.from(logo, {opacity: 0, duration: 1, scale: 0, ease: "power4.out"})
    // tl.from(svg, {duration: 1, scale: 10, ease: "power4.out"}, '0')

    // let tl_scroll = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: header,
    //     pin: true,
    //     pinSpacing: false,
    //     start: "top top", // trigger / viewport
    //     end: "bottom center", // trigger / viewport
    //     scrub: 1,
    //   }
    // })
  }
}

</script>


<style lang="scss">

  .topbar {
    position: fixed;
    top: 0;
    z-index: 999;
    
    
    &__wrapper {
      position: relative;
      width: max-content;
      color: white;
      padding: 40px;

      display: flex;
    }

    &__logo {
      position: relative;

      .link {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .logo svg {
        transition: transform .3s ease-in-out;

        path {
          fill: rgba(white, .9);
        }
      }

      &:hover,
      &:focus {
        .link {
          cursor: pointer;
        }

        .logo svg {
          transform: scale(1.05) rotate(-6deg) !important;
        }
      }
    }

    &__title {
      font-size: 14px;
      color: white;

      display: flex;
      flex-direction: column;
      padding-left: 20px;

      margin-left: 20px;
      position: relative;

      &::before {
        content: '';
        width: 1px;
        height: 20px;
        background: rgba(white, .1);

        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }

      span {
        display: inline-block;
        font-size: 9px;
        font-weight: bold;
        color: $cream;
        text-transform: uppercase;
      }
    }
  }

</style>
