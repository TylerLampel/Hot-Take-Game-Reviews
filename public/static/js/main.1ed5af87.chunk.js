(this["webpackJsonpreact-rails-api-project-template-client"]=this["webpackJsonpreact-rails-api-project-template-client"]||[]).push([[0],{131:function(e,t,n){},132:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(34),r=n.n(i),s=n(29),o=(n(131),n(12)),j=n(5),l=n(11),b=(n(132),n(1)),d=c.a.createContext();function u(e){var t=e.children,n=Object(a.useState)({}),c=Object(j.a)(n,2),i=c[0],r=c[1],s=Object(a.useState)(!1),o=Object(j.a)(s,2),u=o[0],O=o[1],h=Object(l.l)();return Object(a.useEffect)((function(){fetch("/me").then((function(e){return e.json()})).then((function(e){r(e),e.errors?O(!1):O(!0)}))}),[]),Object(b.jsx)(d.Provider,{value:{user:i,setUser:r,login:function(e){r(e),O(!0)},logout:function(){h("/"),r({}),O(!1)},signup:function(e){r(e),O(!0)},loggedIn:u},children:t})}var O=n(207);var h=function(){var e=Object(a.useContext)(d),t=e.user,n=e.logout,c=e.loggedIn,i=Object(l.l)();return c?Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Hot Takes Game Reviews"}),Object(b.jsxs)("h3",{children:["Hello ",t.username]}),Object(b.jsx)(O.a,{onClick:function(){fetch("/logout",{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(){n(),i("/games")}))},children:"Logout"}),Object(b.jsx)(s.b,{to:"/",children:Object(b.jsx)(O.a,{children:"Home"})}),Object(b.jsx)(s.b,{to:"/mygames",children:Object(b.jsx)(O.a,{children:"My Reviewed Games"})}),Object(b.jsx)(s.b,{to:"/games",children:Object(b.jsx)(O.a,{children:"All Games"})}),Object(b.jsx)(s.b,{to:"/addgame",children:Object(b.jsx)(O.a,{children:"Add A Game"})}),Object(b.jsx)("hr",{})]}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Hot Takes Game Reviews"}),Object(b.jsx)(s.b,{to:"/login",children:Object(b.jsx)(O.a,{children:"Login"})}),Object(b.jsx)(s.b,{to:"/signup",children:Object(b.jsx)(O.a,{children:"Signup"})}),Object(b.jsx)(s.b,{to:"/games",children:Object(b.jsx)(O.a,{children:"All Games"})})]})},m=n(199),x=n(200),g=n(212),v=n(194);var f=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),r=Object(j.a)(i,2),s=r[0],o=r[1],u=Object(a.useState)(""),h=Object(j.a)(u,2),f=h[0],p=h[1],y=Object(a.useState)([]),w=Object(j.a)(y,2),S=w[0],C=w[1],R=Object(a.useContext)(d).signup,T=Object(l.l)();return Object(b.jsx)(g.a,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,password:s,password_confirmation:f})}).then((function(e){return e.json()})).then((function(e){if(e.errors){c(""),o(""),p("");var t=e.errors.map((function(e){return Object(b.jsx)(m.a,{severity:"error",children:e})}));C(t)}else R(e),T("/")}))},children:Object(b.jsxs)("div",{children:[Object(b.jsx)(x.a,{id:"username",label:"Username",value:n,onChange:function(e){return c(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)(x.a,{id:"outlined-password-input",label:"Password",type:"password",value:s,onChange:function(e){return o(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)(x.a,{id:"outlined-password-input",label:"Password Confirmation",type:"password",value:f,onChange:function(e){return p(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)(O.a,{type:"submit",children:"Sign Up"}),Object(b.jsx)(v.a,{children:S})]})})};var p=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),r=Object(j.a)(i,2),s=r[0],o=r[1],u=Object(a.useState)(""),h=Object(j.a)(u,2),v=h[0],f=h[1],p=Object(l.l)(),y=Object(a.useContext)(d).login;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(g.a,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,password:s})}).then((function(e){return e.json()})).then((function(e){e.errors?(c(""),o(""),f(e.errors)):(y(e),p("/"))}))},children:[Object(b.jsxs)("div",{children:[Object(b.jsx)(x.a,{id:"username",label:"Username",value:n,onChange:function(e){return c(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)(x.a,{id:"outlined-password-input",label:"Password",type:"password",value:s,onChange:function(e){return o(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)(O.a,{type:"submit",children:"Log In"})]}),Object(b.jsx)("ul",{children:v&&Object(b.jsx)(m.a,{severity:"error",onClose:function(){return f(!v)},children:v})})]})})},y=n(35),w=n(202),S=n(208),C=n(218);var R=function(e){var t=e.addReview,n=e.toggleReviewForm,c=e.game_id,i=Object(a.useState)(""),r=Object(j.a)(i,2),s=r[0],o=r[1],l=Object(a.useState)(""),d=Object(j.a)(l,2),u=d[0],h=d[1],m=Object(a.useState)(1),g=Object(j.a)(m,2),v=g[0],f=g[1];return Object(b.jsx)(S.a,{elevation:8,children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a={title:s,body:u,rating:v};fetch("/games/".concat(c,"/reviews"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){t(e)})),o(""),h(""),f(""),n()},children:[Object(b.jsx)(x.a,{id:"review_title",label:"Review Title",variant:"outlined",size:"small",type:"text",value:s,onChange:function(e){return o(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)(x.a,{id:"body",label:"Body",variant:"outlined",size:"small",type:"text",value:u,onChange:function(e){return h(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)(C.a,{component:"legend",children:"Rating"}),Object(b.jsx)(w.a,{name:"rating",value:v,onChange:function(e,t){f(t)}}),Object(b.jsx)("br",{}),Object(b.jsx)(O.a,{type:"submit",size:"small",variant:"contained",color:"secondary",children:"Submit"}),Object(b.jsx)(O.a,{onClick:n,size:"small",variant:"contained",color:"secondary",children:"Cancel"})]})})};var T=function(e){var t=e.review,n=e.editReview,c=e.toggleEditReviewForm,i=Object(a.useState)(t.title),r=Object(j.a)(i,2),s=r[0],o=r[1],l=Object(a.useState)(t.body),d=Object(j.a)(l,2),u=d[0],h=d[1],m=Object(a.useState)(t.rating),g=Object(j.a)(m,2),v=g[0],f=g[1];return Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("/reviews/".concat(t.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:s,body:u,rating:v})}).then((function(e){return e.json()})).then((function(e){n(e),o(""),h(""),f(""),c()}))},children:[Object(b.jsx)(x.a,{id:"review_title",label:"Review Title",variant:"outlined",size:"small",type:"text",value:s,onChange:function(e){return o(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)(x.a,{id:"body",label:"Body",variant:"outlined",size:"small",type:"text",value:u,onChange:function(e){return h(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)(C.a,{component:"legend",children:"New Rating"}),Object(b.jsx)(w.a,{name:"rating",value:v,onChange:function(e,t){f(t)}}),Object(b.jsx)("br",{}),Object(b.jsx)(O.a,{type:"submit",size:"small",variant:"contained",color:"secondary",children:"Submit"}),Object(b.jsx)(O.a,{onClick:c,size:"small",variant:"contained",color:"secondary",children:"Cancel"})]})};var G=function(e){var t=e.review,n=e.deleteReview,c=e.editReview,i=Object(a.useContext)(d).user,r=Object(a.useState)(!1),s=Object(j.a)(r,2),o=s[0],l=s[1];function u(){i.id===t.user_id&&l(!o)}return i.id===t.user_id?Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:t.title}),o?Object(b.jsx)(T,{toggleEditReviewForm:u,review:t,editReview:c}):Object(b.jsx)(O.a,{size:"small",variant:"contained",color:"secondary",onClick:u,children:"Edit"}),Object(b.jsx)(O.a,{size:"small",variant:"contained",color:"secondary",onClick:function(){i.id===t.user_id&&fetch("/reviews/".concat(t.id),{method:"DELETE"}).then((function(e){e.ok&&n(t.id)}))},children:"Delete"}),Object(b.jsx)("br",{}),t.body,Object(b.jsx)("br",{}),Object(b.jsx)(w.a,{name:"read-only",value:t.rating,readOnly:!0})]},t.id):Object(b.jsxs)("div",{children:[Object(b.jsx)("br",{}),Object(b.jsx)("h3",{children:t.title}),Object(b.jsx)("br",{}),t.body,Object(b.jsx)("br",{}),Object(b.jsx)(w.a,{name:"read-only",value:t.rating,readOnly:!0})]},t.id)};var k=function(e){var t=e.game_id,n=e.games,c=e.setGames,i=e.game,r=Object(a.useContext)(d),s=r.loggedIn,l=r.user,u=r.setUser,h=Object(a.useState)(!1),m=Object(j.a)(h,2),x=m[0],g=m[1],f=Object(a.useState)({reviews:[]}),p=Object(j.a)(f,2),w=p[0],C=p[1];Object(a.useEffect)((function(){var e=n.find((function(e){return e.id===i.id}));C(e)}),[n]);var T=w.reviews.map((function(e){return Object(b.jsx)(S.a,{elevation:3,children:Object(b.jsx)(G,{review:e,deleteReview:k,editReview:P})},e.id)}));function k(e){var t=Object(y.a)(Object(y.a)({},w),{},{reviews:Object(o.a)(w.reviews.filter((function(t){return t.id!==e})))}),a=n.filter((function(e){return e.id!==i.id})),r=[].concat(Object(o.a)(a),[t]),s=Object(y.a)(Object(y.a)({},l),{},{games:Object(o.a)(l.games.filter((function(e){return e.id!==w.id})))});u(s),C(t),c(r)}function E(){g(!x)}function P(e){var t=Object(y.a)(Object(y.a)({},w),{},{reviews:Object(o.a)(w.reviews.map((function(t){return t.id===e.id?e:t})))}),a=n.map((function(e){return e.id===w.id?t:e}));C(t),c(a)}return s?Object(b.jsxs)("div",{children:[x?Object(b.jsx)(R,{addReview:function(e){var t=Object(y.a)(Object(y.a)({},w),{},{reviews:[].concat(Object(o.a)(w.reviews),[e])}),a=n.filter((function(e){return e.id!==i.id})),r=[].concat(Object(o.a)(a),[t]),s=Object(y.a)(Object(y.a)({},l),{},{games:[].concat(Object(o.a)(l.games),[w])});u(s),C(t),c(r)},toggleReviewForm:E,game_id:t}):Object(b.jsx)(O.a,{variant:"outlined",onClick:E,children:"Add A Review"}),Object(b.jsx)(v.a,{spacing:2,children:T})]}):Object(b.jsx)("div",{children:T})},E=n(219),P=n(215),_=n(213),F=n(214),A=n(220),D=n(197),I=n(110),L=n.n(I),z=n(221),M={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};var J=function(e){var t=e.game,n=e.deleteGame,c=e.games,i=e.setGames,r=t.id,s=t.title,o=t.image_url,l=t.age_rating,d=t.description,u=Object(a.useState)(!1),h=Object(j.a)(u,2),x=h[0],v=h[1],f=Object(a.useState)(""),p=Object(j.a)(f,2),y=p[0],w=p[1];return Object(b.jsxs)(E.a,{elevation:3,children:[y&&Object(b.jsx)(m.a,{severity:"error",onClose:function(){return w(!y)},children:y}),Object(b.jsx)(_.a,{title:s,variant:"h2",action:Object(b.jsx)(P.a,{onClick:function(){fetch("/games/".concat(r),{method:"DELETE"}).then((function(e){e.ok?n(r):w("Must be logged in to delete games")}))},children:Object(b.jsx)(L.a,{})})}),Object(b.jsx)(F.a,{component:"img",height:"250",image:o,alt:s,sx:{padding:"1em 1em 0 1em",objectFit:"contain"}}),Object(b.jsxs)(A.a,{children:[Object(b.jsxs)(C.a,{paragraph:!0,children:["Age Rating: ",l]}),Object(b.jsxs)(C.a,{variant:"body2",color:"text.secondary",children:["Descripiton: ",d]}),Object(b.jsx)(z.a,{children:Object(b.jsx)(O.a,{onClick:function(){return v(!0)},children:"Show Reviews"})}),Object(b.jsx)(D.a,{open:x,onClose:function(){return v(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(b.jsx)(g.a,{sx:M,children:Object(b.jsx)(k,{gameReviews:t.reviews,game_id:t.id,games:c,setGames:i,game:t})})})]})]})},H=n(210);var N=function(e){var t=e.games,n=e.setGames,c=e.deleteGame,i=Object(a.useContext)(d).loggedIn,r=t.map((function(e){return Object(b.jsx)(H.a,{item:!0,xs:12,md:6,lg:4,children:Object(b.jsx)(J,{game:e,deleteGame:c,games:t,setGames:n},e.id)},e.id)}));return i?Object(b.jsxs)("div",{children:[Object(b.jsx)("br",{}),Object(b.jsx)(H.a,{container:!0,spacing:3,children:r})]}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Please Login or Signup"}),Object(b.jsx)(H.a,{container:!0,spacing:3,children:r})]})};var U=function(e){var t=e.games,n=Object(a.useContext)(d),c=n.user,i=n.loggedIn,r=t.map((function(e){return e.reviews.map((function(t){return t.user_id===c.id?e:null}))}));console.log(r);var s=Object(o.a)(c.games).sort((function(e,t){return e.title>t.title?1:-1})),j=Object(o.a)(new Map(s.map((function(e){return[e.id,e]}))).values()).map((function(e){return Object(b.jsx)(H.a,{item:!0,xs:12,md:6,lg:4,children:Object(b.jsxs)(E.a,{elevation:3,children:[Object(b.jsx)(_.a,{title:e.title,variant:"h2"}),Object(b.jsx)(F.a,{component:"img",height:"250",image:e.image_url,alt:e.title,sx:{padding:"1em 1em 1em 1em",objectFit:"contain"}})]})},e.id)}));return i?Object(b.jsxs)("div",{children:[Object(b.jsxs)("h3",{children:[c.username,"'s Reviewed Games"]}),Object(b.jsx)(H.a,{container:!0,spacing:3,children:j})]}):Object(b.jsx)("div",{children:"Please log in or sign up to view your reviewed games"})};var B=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Welcom To Hot Takes Game Reviews!"}),Object(b.jsx)("p",{children:"If you are new here, please sign up!"}),Object(b.jsx)("p",{children:"If you have been here before please log in!"}),Object(b.jsx)("p",{children:'Once logged in, if you do not see the game you would like to leave a review for, then simply add the game by clicking the "Add A Game" button above!'}),Object(b.jsx)("p",{children:'Also, if you would like to see the games you have already left a review on, click the button "My Reviewed Games".'})]})},W=n(203),V=n(201),q=n(196);var K=function(e){var t=e.addGame,n=e.errorsList,c=Object(a.useState)(""),i=Object(j.a)(c,2),r=i[0],s=i[1],o=Object(a.useState)(""),d=Object(j.a)(o,2),u=d[0],h=d[1],m=Object(a.useState)("E"),f=Object(j.a)(m,2),p=f[0],y=f[1],w=Object(a.useState)(""),S=Object(j.a)(w,2),C=S[0],R=S[1],T=Object(l.l)();return Object(b.jsx)(g.a,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),t({title:r,image_url:u,age_rating:p,description:C}),T("/")},children:Object(b.jsxs)("div",{children:[Object(b.jsx)(x.a,{id:"title",label:"Title",value:r,onChange:function(e){return s(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)(x.a,{id:"image_url",label:"Image URL",value:u,onChange:function(e){return h(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)(x.a,{id:"description",label:"Description",value:C,onChange:function(e){return R(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)(W.a,{id:"age_rating",children:"Age Rating"}),Object(b.jsxs)(q.a,{labelId:"age_rating",value:p,label:"Age Rating",onChange:function(e){return y(e.target.value)},children:[Object(b.jsx)(V.a,{value:"E",children:"E"}),Object(b.jsx)(V.a,{value:"E 10+",children:"E 10+"}),Object(b.jsx)(V.a,{value:"T",children:"Teen"}),Object(b.jsx)(V.a,{value:"M 17+",children:"M 17+"}),Object(b.jsx)(V.a,{value:"A 18+",children:"A 18+"}),Object(b.jsx)(V.a,{value:"RP",children:"RP"}),Object(b.jsx)(V.a,{value:"RP 17+",children:"RP 17+"})]}),Object(b.jsx)("br",{}),Object(b.jsx)(O.a,{type:"submit",children:"Add Game"}),Object(b.jsx)(v.a,{children:n})]})})},Q=n(206),X=n(111),Y=n(205),Z=n(195);var $=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],i=Object(l.l)(),r=Object(a.useState)([]),s=Object(j.a)(r,2),d=s[0],O=s[1];Object(a.useEffect)((function(){fetch("/games").then((function(e){return e.json()})).then((function(e){c(e)}))}),[]);var x=Object(X.a)({palette:{mode:"dark",primary:{main:"#ffd600"},secondary:{main:"#f30354"}},typography:{fontFamily:"Roboto",fontWeightRegular:500,fontWeightBold:700,fontWeightMedium:600,h1:{fontFamily:"PT Sans"},h3:{fontFamily:"PT Sans"},h2:{fontFamily:"PT Sans"}}});return Object(b.jsxs)(Y.a,{theme:x,children:[Object(b.jsx)(Z.a,{}),Object(b.jsx)(u,{children:Object(b.jsxs)(Q.a,{maxWidth:"xl",children:[Object(b.jsx)(h,{}),Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/",element:Object(b.jsx)(B,{})}),Object(b.jsx)(l.a,{path:"/games",element:Object(b.jsx)(N,{games:n,setGames:c,deleteGame:function(e){var t=n.filter((function(t){return t.id!==e}));c(t)}})}),Object(b.jsx)(l.a,{path:"/mygames",element:Object(b.jsx)(U,{games:n,setGames:c})}),Object(b.jsx)(l.a,{path:"/signup",element:Object(b.jsx)(f,{})}),Object(b.jsx)(l.a,{path:"/login",element:Object(b.jsx)(p,{})}),Object(b.jsx)(l.a,{path:"/addgame",element:Object(b.jsx)(K,{addGame:function(e){fetch("/games",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){if(e.errors){var t=e.errors.map((function(e){return Object(b.jsx)(m.a,{severity:"error",children:e})}));O(t)}else c([].concat(Object(o.a)(n),[e])),i("/games")}))},errorsList:d})})]})]})})]})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,222)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(b.jsx)(s.a,{children:Object(b.jsx)($,{})}),document.getElementById("root")),ee()}},[[142,1,2]]]);
//# sourceMappingURL=main.1ed5af87.chunk.js.map