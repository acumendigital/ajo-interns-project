(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{307:function(o,t,e){var content=e(319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,e(66).default)("b3fe8fb8",content,!0,{sourceMap:!1})},318:function(o,t,e){"use strict";e(307)},319:function(o,t,e){var n=e(65)(!1);n.push([o.i,'*{font-family:"Noto Sans",sans-serif}.nav,body{position:relative}.nav{display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:0 32px;margin-top:45px}.nav svg{color:#9a9400;cursor:pointer}.nav img{width:20px}.nav .page-enter-active,.nav .page-leave-active{transition:opacity 1.5s}.nav .page-enter,.nav .page-leave-active{opacity:0}.drop-container{position:absolute;top:0;width:100%;background-color:#fff;z-index:2;padding-bottom:2rem}.drop-container .drop-header{display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-top:34px;padding:0 1rem}.drop-container .drop-header .title{display:flex;flex-direction:row;align-items:center;grid-gap:10px;gap:10px;text-decoration:none}.drop-container .drop-header .title h1{font-family:"AirbnbCereal_W_Md";color:#041a7a;cursor:pointer}.drop-container .drop-header .title svg{color:#9a9400;cursor:pointer}.drop-container .drop-header svg{color:#041a7a;cursor:pointer}.drop-container .drop-items{padding:.5rem 1rem;display:flex;flex-direction:column}.drop-container .drop-items a{font-family:"AirbnbCereal_W_lt";color:#393939;padding-bottom:1.5rem;padding-top:.8rem;border-bottom:.5px solid #c7c4c4;text-decoration:none}.drop-container .drop-items .logout{padding-top:15px;color:#041a7a;cursor:pointer}',""]),o.exports=n},325:function(o,t,e){"use strict";e.r(t);var n={data:function(){return{showDropdown:!1}},methods:{toggleDropdown:function(){console.log("tada"),this.showDropdown,this.showDropdown},closeDropDown:function(){this.showDropdown,this.showDropdown},logout:function(){this.$store.commit("setUserDetails",{}),this.$router.push("/mobile"),console.log("User Logged Out")}}},r=(e(318),e(36)),component=Object(r.a)(n,(function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",[e("div",{directives:[{name:"show",rawName:"v-show",value:o.showDropdown,expression:"showDropdown"}],staticClass:"drop-container",staticStyle:{display:"block"}},[e("div",{staticClass:"drop-header"},[e("div",{staticClass:"title",on:{click:function(t){o.showDropdown=!o.showDropdown}}},[e("font-awesome-icon",{attrs:{icon:"dove"}}),o._v(" "),e("h1",[o._v("AJO")])],1),o._v(" "),e("div",[e("font-awesome-icon",{attrs:{icon:"xmark"},on:{click:function(t){o.showDropdown=!o.showDropdown}}})],1)]),o._v(" "),e("div",{staticClass:"drop-items"},[e("nuxt-link",{attrs:{to:"/mobile"}},[o._v("Wishlists")]),o._v(" "),e("nuxt-link",{attrs:{to:"/mobile"}},[o._v("Past Trips")]),o._v(" "),e("nuxt-link",{attrs:{to:"/home"}},[o._v("Home")]),o._v(" "),e("div",{staticClass:"logout",on:{click:o.logout}},[o._v("Log out")])],1)]),o._v(" "),e("div",{staticClass:"nav"},[e("font-awesome-icon",{attrs:{icon:"bars"},on:{click:function(t){o.showDropdown=!o.showDropdown}}}),o._v(" "),e("div",[e("nuxt-link",{attrs:{to:"/mobile"}},[e("svg",{staticClass:"bi bi-person-circle",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}}),o._v(" "),e("path",{attrs:{"fill-rule":"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"}})])])],1)],1)])}),[],!1,null,null,null);t.default=component.exports}}]);