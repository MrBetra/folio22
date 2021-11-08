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
    let logo = document.querySelector(".topbar__logo")
    let svg = logo.querySelector(".logo")

    console.log(logo)
   
    let tl = gsap.timeline()
    tl.from(logo, {opacity: 0, x: 50, duration: .5, ease: "power4.out"})
    tl.fromTo(svg, {scale: 0, opacity: 0, x: 50, rotation: -24, duration: 2, ease: "power4.out"}, {scale: 1.2, x: 0, rotation: -6, opacity: 1})
    tl.to(svg, {scale: 1, rotation: 0})
  }
}

</script>


<style lang="scss" scoped>

  .topbar {
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    z-index: 99;
    
    &__wrapper {
      position: relative;
      width: 100%;
      max-width: $max-width;
      margin: 0 auto;
      
      color: white;
      padding: 40px;
    }

    &__logo {
      display: inline-block;


      .link {
        display: flex;
        align-items: center;
      }

      .logo svg {
        transition: transform .3s ease-in-out;
      }

      &:hover,
      &:focus {
        .link {
          cursor: pointer;
        }

        .logo svg {
          transform: scale(1.1) rotate(-6deg) !important;
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
