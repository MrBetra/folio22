(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{229:function(e,t,o){var content=o(231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(50).default)("2065e928",content,!0,{sourceMap:!1})},230:function(e,t,o){"use strict";o(229)},231:function(e,t,o){var n=o(49)(!1);n.push([e.i,'a{color:#f6c26c;text-decoration:none}.main_content{max-width:1440px;margin:0 auto;padding:0 40px;position:relative}.intro{font-size:32px;font-weight:300;line-height:130%;max-width:500px;position:absolute;top:20px;left:40px}.works{display:flex;flex-direction:column;align-items:flex-end}.works:before{content:"works selection";display:inline-block;color:hsla(0,0%,100%,.4);font-family:"Rubik",sans-serif;font-size:12px;font-weight:400;letter-spacing:3px;position:absolute;top:0;right:40px}.works:before,.works li{text-transform:uppercase}.works li{font-family:"Italiana",serif;font-size:10vw;padding:40px 0}@media screen and (min-width:1440px){.works li{font-size:150px}}',""]),e.exports=n},243:function(e,t,o){"use strict";o.r(t);var n={mounted:function(){this.animeReveal()},methods:{animeReveal:function(){var e=this.$gsap,t=document.querySelector(".works").querySelectorAll("li"),o=e.timeline();o.delay(1),o.from(t,{x:150,duration:2,ease:"power4.out",stagger:.25}),o.from(t,{opacity:0,duration:2.5,ease:"smooth.out",stagger:.25},"0")}}},r=(o(230),o(27)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"main_content"},[o("div",{staticClass:"intro"},[o("p",[e._v("Hey, I'm a front-end designer from belgium currently working at "),o("a",{attrs:{href:"#"}},[e._v("Spade")])])]),e._v(" "),o("ul",{staticClass:"works"},[o("li",[e._v("Oxfam")]),e._v(" "),o("li",[e._v("Vivaqua")]),e._v(" "),o("li",[e._v("Convivial")]),e._v(" "),o("li",[e._v("Eurocyclo")])])])}],!1,null,null,null);t.default=component.exports}}]);