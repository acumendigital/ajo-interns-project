(window.webpackJsonp=window.webpackJsonp||[]).push([[19,9],{300:function(t,e,o){var content=o(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(65).default)("67079c6e",content,!0,{sourceMap:!1})},301:function(t,e,o){"use strict";o.r(e);var n={name:"TheButton",props:{title:String,value:String},data:function(){return{}}},r=(o(302),o(36)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"button",class:t.value},[o("p",[t._v(t._s(t.title))])])}),[],!1,null,"d0fcf666",null);e.default=component.exports},302:function(t,e,o){"use strict";o(300)},303:function(t,e,o){var n=o(64)(!1);n.push([t.i,'*[data-v-d0fcf666]{font-family:"Noto Sans",sans-serif}body[data-v-d0fcf666]{position:relative}.button[data-v-d0fcf666]{font-family:"AirbnbCereal_W_lt";font-size:14px;display:flex;align-items:center;justify-content:center;border-radius:56px;height:34px;grid-gap:10px;gap:10px;transition:all .25s ease}.button p[data-v-d0fcf666]{margin:0;display:flex;flex-direction:row}.whiteBgLg[data-v-d0fcf666]{background-color:#fff;color:#041a7a;width:364px;height:56px}.whiteBgLg[data-v-d0fcf666]:hover{transform:scale(1.02);border:1px solid #fcf300;background-color:transparent;color:#fcf300}.yellowBgLg[data-v-d0fcf666]{background-color:#fcf300;color:#041a7a;width:364px;height:56px}.yellowBgLg[data-v-d0fcf666]:hover{transform:scale(1.02);border:1px solid #041a7a;background-color:transparent;color:#041a7a}',""]),t.exports=n},386:function(t,e,o){var content=o(408);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(65).default)("5429e00d",content,!0,{sourceMap:!1})},407:function(t,e,o){"use strict";o(386)},408:function(t,e,o){var n=o(64)(!1);n.push([t.i,'*[data-v-2c6e36da]{font-family:"Noto Sans",sans-serif}body[data-v-2c6e36da]{position:relative}@media screen and (max-width:428px){.login[data-v-2c6e36da]{padding:43px 32px}.login .form .title svg[data-v-2c6e36da]{color:#041a7a;font-size:32px}.login .form .title h1[data-v-2c6e36da]{font-family:"Brown";color:#041a7a;margin-top:32px}.login .form form .fields[data-v-2c6e36da]{display:flex;flex-direction:column}.login .form form .fields label[data-v-2c6e36da]{font-family:"Brown";font-weight:400;font-size:12px;margin:16px 0;color:#686868;line-height:16px}.login .form form .fields input[data-v-2c6e36da]{height:50px;margin-bottom:1rem;border:1px solid #ccc;border-radius:5px;padding:.1rem .5rem}.login .form form .fields span[data-v-2c6e36da]{font-family:"Brown";font-weight:400;font-size:12px;margin-bottom:10px;color:#686868;line-height:16px}.login .form form .methods[data-v-2c6e36da]{display:flex;flex-direction:row;align-items:center;justify-content:center;margin-top:56px}.login .form form .methods p[data-v-2c6e36da]{margin-bottom:0;padding:0 5px;font-family:"Brown";font-size:16px}.login .form form .socials .acc[data-v-2c6e36da]{display:flex;justify-content:center;align-items:center;grid-gap:40px;gap:40px;margin-top:24px}.login .form form .socials .acc svg[data-v-2c6e36da]{font-size:25px;background-color:#072ac8;color:#fff;border-radius:16px;padding:17px 29px}.login .reg[data-v-2c6e36da]{margin-top:221px;bottom:23px;flex-direction:column;justify-content:center;font-family:"Brown"}.login .reg[data-v-2c6e36da],.login .reg .btn[data-v-2c6e36da]{display:flex;align-items:center}.login .reg .btn[data-v-2c6e36da]{margin-bottom:5px;text-align:center}.login .reg .back[data-v-2c6e36da]{display:flex;flex-direction:row;align-items:center;grid-gap:5px;gap:5px}.login .reg .back a[data-v-2c6e36da]{color:#041a7a;text-decoration:none;font-weight:200}.login button[data-v-2c6e36da]{background:transparent;border:0}}',""]),t.exports=n},426:function(t,e,o){"use strict";o.r(e);var n=o(9),r=(o(42),o(82)),l=o.n(r),c={data:function(){return{email:"",password:"",userInfo:this.$store.state.userDetails}},methods:{login:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:data={email:t.email,password:t.password},l.a.post("https://ajo-app.herokuapp.com/api/auth/signin",data).then((function(e){var o=e.data;o.user.token=o.token,t.$store.commit("setUserDetails",o.user),t.$toasted.show("You have logged in successfully",{theme:"primary",position:"top-center",duration:500,type:"success"}),t.$router.push("/home")})).catch((function(e){t.$toasted.show("Please enter the correct details and try again",e,{theme:"danger",position:"top-left",duration:200,type:danger})}));case 2:case"end":return e.stop()}}),e)})))()}}},d=(o(407),o(36)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"login"},[o("section",{},[o("div",{staticClass:"form"},[o("div",{staticClass:"title"},[o("font-awesome-icon",{attrs:{icon:"x"}}),t._v(" "),o("h1",[t._v("Sign Up to Ajo")])],1),t._v(" "),o("form",{attrs:{enctype:"multipart/form-data",method:"post"},on:{submit:function(e){return t.login()}}},[o("div",{staticClass:"fields"},[t._m(0),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",name:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),t._m(1),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"email"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),o("span",{staticClass:"forgot"},[t._v("\n            Use Uppercase, Lowercase and Numeric characters*\n          ")])]),t._v(" "),o("div",[o("div",{staticClass:"btn"},[o("button",{attrs:{type:"button"},on:{click:function(e){return t.login()}}},[o("TheButton",{attrs:{title:"Sign In",value:"yellowBgLg"}})],1)])])])])]),t._v(" "),o("div",{staticClass:"reg"},[o("div",{staticClass:"back"},[o("p",[t._v("Don't have an account?")]),t._v(" "),o("nuxt-link",{attrs:{to:"/auth/register"}},[o("span",[t._v("Register")])])],1)])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("label",{attrs:{for:"email"}},[o("strong",[t._v("Email Address")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("label",{attrs:{for:"email"}},[o("strong",[t._v("Password")])])}],!1,null,"2c6e36da",null);e.default=component.exports;installComponents(component,{TheButton:o(301).default})}}]);