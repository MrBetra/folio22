(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{229:function(t,e,o){t.exports=o.p+"img/pic.fff0c9f.jpg"},230:function(t,e,o){var content=o(233);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(48).default)("2fefd2da",content,!0,{sourceMap:!1})},232:function(t,e,o){"use strict";o(230)},233:function(t,e,o){var r=o(47)(!1);r.push([t.i,'.footer{width:100%;max-width:1440px;margin:100px auto 0;padding:40px 40px 60px;display:flex;justify-content:space-between;position:relative}.footer__mail{font-size:28px;font-weight:300}.footer__social{display:flex;align-items:center}.footer__social li{padding-left:30px}.footer__social li a{text-transform:uppercase;letter-spacing:4px;color:#fff;font-size:10px;font-weight:500}.footer .circle{position:absolute;bottom:0;right:20%;z-index:-1;height:400px;width:600px;overflow:hidden}.footer .circle .graphic:before{content:"";width:600px;height:600px;border-radius:100%;border:1px solid #cbc4af;opacity:.3;position:absolute;top:0;right:0;z-index:-1}a{color:#f6c26c;text-decoration:none}.projet{min-height:60vh}.projet__header{height:80vh;width:100vw;padding:40px;display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative}.projet__title{font-size:8vw;font-weight:300;font-family:"Italiana",serif;text-transform:uppercase}.projet__description,.projet__title{text-align:center}.projet__img{width:100vw;height:80vh;margin:0 auto;overflow:hidden}.projet__img img{position:relative;width:100%;height:100%;-o-object-position:center;object-position:center;-o-object-fit:cover;object-fit:cover;opacity:.8;clip:rect(0,0,0,0)}.projet__content{max-width:720px;margin:0 auto;padding:60px 40px;position:relative}.projet__content p{font-size:1.2rem;line-height:180%;color:hsla(0,0%,100%,.7);margin:40px 0}',""]),t.exports=r},247:function(t,e,o){"use strict";o.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"projet__img-wrap"},[e("div",{staticClass:"projet__img"},[e("img",{attrs:{src:o(229),alt:""}})])])}],n=o(2),c=(o(40),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,content;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$content,e.next=3,o("oxfam").fetch();case 3:return content=e.sent,e.abrupt("return",{content:content});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{heroImage:{url:"",alt:"Oxfam"},images:[{url:"",alt:""}]}},mounted:function(){var t=this.$gsap,e=document.querySelector(".projet"),title=document.querySelector(".projet__title"),o=document.querySelector(".projet__description"),r=document.querySelector(".projet__img"),img=document.querySelector(".projet__img img"),n=e.getBoundingClientRect().width;console.log(n),t.timeline().delay(.3).from(title,{y:25,opacity:0,duration:1,ease:"power4.out"},".3").from(o,{y:25,opacity:0,duration:1,ease:"power4.out"},".45"),t.timeline({scrollTrigger:{trigger:r,start:"top bottom",end:"top center",scrub:1}}).from(img,{"clip-path":"inset(40% 40% 40% 40%)"})},transition:{mode:"out-in",css:!1,enter:function(t,e){},leave:function(t,e){var o=this.$gsap,title=document.querySelector(".projet__title"),r=document.querySelector(".projet__description"),n=document.querySelector(".projet__img"),img=document.querySelectorAll(".projet__img img");o.timeline({onComplete:e}).to(n,{yPercent:100,duration:2,ease:"expo.in"}).to(img,{yPercent:-100,opacity:0,duration:2,ease:"expo.in"},"0").to(r,{y:25,opacity:0,duration:1,ease:"power4.in"},"0").to(title,{y:25,opacity:0,duration:1,ease:"power4.in"},"0.25").set([title,r],{opacity:0})}}}),l=(o(232),o(27)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"projet"},[o("header",{staticClass:"projet__header"},[o("h2",{staticClass:"projet__title"},[t._v(t._s(this.content.title))]),t._v(" "),o("p",{staticClass:"projet__description"},[t._v("\n      "+t._s(this.content.description)+"\n    ")])]),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"projet__content"},[o("nuxt-content",{attrs:{document:t.content}})],1)])}),r,!1,null,null,null);e.default=component.exports}}]);