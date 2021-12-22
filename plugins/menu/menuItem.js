import { gsap } from 'gsap';
import { map, lerp, clamp, getMousePos } from '~/plugins/menu/utils';

export const MenuItem = function(el, pos, animeProps) {
    let requestId, firstRAFCycle
    // const images = Object.entries(require('../img/*.jpg'));
    let mItems = document.querySelectorAll('[data-img]')
    
    let images = []
    mItems.forEach(item => {
        images.push(item.getAttribute('data-img'))
    });
    
    // console.log(images)
    
    // track the mouse position
    let mousepos = {x: 0, y: 0};
    // cache the mouse position
    let mousePosCache = mousepos;
    let direction = {x: mousePosCache.x - mousepos.x, y: mousePosCache.y - mousepos.y};
    
    // update mouse position when moving the mouse
    window.addEventListener('mousemove', ev => mousepos = getMousePos(ev));
    
    // el is the <a> with class "menu__item"
    let DOM = {el: el};
    // position in the Menu
    let inMenuPosition = pos;
    // menu item properties that will animate as we move the mouse around the menu
    let animatableProperties = animeProps;
    // the item text
    DOM.textInner = DOM.el.querySelector('.menu__item-textinner');
    // create the image structure
    layout();
    // initialize some events
    initEvents();

    let bounds = {
        el: DOM.el.getBoundingClientRect(),
        reveal: DOM.reveal.getBoundingClientRect()
    }
    
    // create the image structure
    // we want to add/append to the menu item the following html:
    // <div class="hover-reveal">
    //   <div class="hover-reveal__inner" style="overflow: hidden;">
    //     <div class="hover-reveal__img" style="background-image: url(pathToImage);">
    //     </div>
    //   </div>
    // </div>

    function layout() {
        // console.log(DOM)
        // this is the element that gets its position animated (and perhaps other properties like the rotation etc..)
        DOM.reveal = document.createElement('div');
        DOM.reveal.className = 'hover-reveal';
        // the next two elements could actually be only one, the image element
        // adding an extra wrapper (revealInner) around the image element with overflow hidden, gives us the possibility to scale the image inside
        DOM.revealInner = document.createElement('div');
        DOM.revealInner.className = 'hover-reveal__inner';
        DOM.revealImage = document.createElement('div');
        DOM.revealImage.className = 'hover-reveal__img';
        DOM.revealImage.style.backgroundImage = `url(${images[inMenuPosition]})`;

        // console.log(this.inMenuPosition)

        DOM.revealInner.appendChild(DOM.revealImage);
        DOM.reveal.appendChild(DOM.revealInner);
        DOM.el.appendChild(DOM.reveal);
    }

    // calculate the position/size of both the menu item and reveal element
    function calcBounds() {
        bounds = {
            el: DOM.el.getBoundingClientRect(),
            reveal: DOM.reveal.getBoundingClientRect()
        };
    }

    // bind some events
    function initEvents() {
        let mouseenterFn = (ev) => {
            // show the image element
            showImage();
            firstRAFCycle = true;
            // start the render loop animation (rAF)
            loopRender();
        };
        let mouseleaveFn = () => {
            // stop the render loop animation (rAF)
            stopRendering();
            // hide the image element
            hideImage();
        };
        
        DOM.el.addEventListener('mouseenter', mouseenterFn);
        DOM.el.addEventListener('mouseleave', mouseleaveFn);
    }
    // show the image element
    function showImage() {
        // kill any current tweens
        gsap.killTweensOf(DOM.revealInner);
        gsap.killTweensOf(DOM.revealImage);
        
        let tl = gsap.timeline({
            onStart: () => {
                // show the image element
                DOM.reveal.style.opacity = 1;
                // set a high z-index value so image appears on top of other elements
                gsap.set(DOM.el, {zIndex: images.length});
            }
        })

        // animate the image wrap
        .to(DOM.revealInner, {
            duration: .2,
            ease: 'Sine.easeOut',
            startAt: {x: direction.x < 0 ? '-100%' : '100%'},
            x: '0%'
        })

        // animate the image element
        .to(DOM.revealImage, {
            duration: .2,
            ease: 'Sine.easeOut',
            startAt: {x: direction.x < 0 ? '100%': '-100%'},
            x: '0%'
        }, 0);
    }

    // hide the image element
   function hideImage() {
        // kill any current tweens
        gsap.killTweensOf(DOM.revealInner);
        gsap.killTweensOf(DOM.revealImage);

        let tl = gsap.timeline({
            onStart: () => {
                gsap.set(DOM.el, {zIndex: 1});
            },
            onComplete: () => {
                gsap.set(DOM.reveal, {opacity: 0});
            }
        })
        .to(DOM.revealInner, {
            duration: .2,
            ease: 'Sine.easeOut',
            x: direction.x < 0 ? '100%' : '-100%'
        })
        .to(DOM.revealImage, {
            duration: .2,
            ease: 'Sine.easeOut',
            x: direction.x < 0 ? '-100%' : '100%'
        }, 0);
    }

    // start the render loop animation (rAF)
    function loopRender() {
        if ( !requestId ) {
            requestId = requestAnimationFrame(() => render());
        }
    }

    // stop the render loop animation (rAF)
    function stopRendering() {
        if ( requestId ) {
            window.cancelAnimationFrame(requestId);
            requestId = undefined;
        }
    }

    // translate the item as the mouse moves
    function render() {
        requestId = undefined;
        // calculate position/sizes the first time
        if ( firstRAFCycle ) {
            calcBounds();
        }

        // calculate the mouse distance (current vs previous cycle)
        const mouseDistanceX = clamp(Math.abs(mousePosCache.x - mousepos.x), 0, 100);
        // direction where the mouse is moving
        direction = {x: mousePosCache.x - mousepos.x, y: mousePosCache.y - mousepos.y};
        // updated cache values
        mousePosCache = {x: mousepos.x, y: mousepos.y};

        // new translation values
        //! the center of the image element is positioned where the mouse is
        animatableProperties.tx.current = Math.abs(mousepos.x - bounds.el.left) - bounds.reveal.width/2;
        animatableProperties.ty.current = Math.abs(mousepos.y - bounds.el.top - window.scrollY) - bounds.reveal.height/2;
        
        // new rotation value
        animatableProperties.rotation.current = firstRAFCycle ? 0 : map(mouseDistanceX,0,100,0,direction.x < 0 ? 60 : -60);
        
        // set up the interpolated values
        // for the first cycle, both the interpolated values need to be the same so there's no "lerped" animation between the previous and current state
        animatableProperties.tx.previous = firstRAFCycle ? animatableProperties.tx.current : lerp(animatableProperties.tx.previous, animatableProperties.tx.current, animatableProperties.tx.amt);
        animatableProperties.ty.previous = firstRAFCycle ? animatableProperties.ty.current : lerp(animatableProperties.ty.previous, animatableProperties.ty.current, animatableProperties.ty.amt);
        animatableProperties.rotation.previous = firstRAFCycle ? animatableProperties.rotation.current : lerp(animatableProperties.rotation.previous, animatableProperties.rotation.current, animatableProperties.rotation.amt);
        
        // set styles
        gsap.set(DOM.reveal, {
            x: animatableProperties.tx.previous,
            y: animatableProperties.ty.previous,
            rotation: animatableProperties.rotation.previous,
        });

        // loop
        firstRAFCycle = false;
        loopRender();
    }
}