(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t(13)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(3),i=t.n(r),o=(t(9),t(1));t(10),t(11);var l=function(e){return c.a.createElement("div",null,c.a.createElement("div",{className:"ImageCard-Wrapper",style:{backgroundImage:"url(".concat(e.imgUrl,")")}}))};t(12);function s(e){return c.a.createElement("div",{className:"wrapper"},c.a.createElement("input",{onChange:function(){return e.onSelectChoice(e.name)},className:"state",type:"radio",name:"app",id:e.name,value:e.name}),c.a.createElement("label",{className:"label",htmlFor:e.name},c.a.createElement("div",{className:"indicator"}),c.a.createElement("span",{className:"text"},e.name)))}var m=function(e){return c.a.createElement("div",{className:"choicesWrapper"},c.a.createElement("div",{className:"radiogroup"},Object.keys(e.choices).map((function(a){return c.a.createElement(s,{name:a,key:a,onSelectChoice:e.onSelectChoice})}))))};var u=function(){var e=Object(n.useState)(void 0),a=Object(o.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)(),s=Object(o.a)(i,2),u=s[0],d=s[1],h=Object(n.useState)(),p=Object(o.a)(h,2),f=p[0],v=(p[1],Object(n.useState)()),g=Object(o.a)(v,2),E=g[0],b=g[1];return Object(n.useEffect)((function(){d({Chameleon:"http://i.annihil.us/u/prod/marvel/i/mg/7/00/4ce59f390463f/standard_fantastic.jpg",Cyber:"http://i.annihil.us/u/prod/marvel/i/mg/1/f0/4c0040521bc06/standard_fantastic.jpg","Omega Red":"http://i.annihil.us/u/prod/marvel/i/mg/5/d0/4c003d09267ae/standard_fantastic.jpg","Victor Mancha":"http://i.annihil.us/u/prod/marvel/i/mg/b/10/4c0030f13bcaf/standard_fantastic.jpg",Ajak:"http://i.annihil.us/u/prod/marvel/i/mg/2/80/4c002f35c5215/standard_fantastic.jpg"})}),[]),Object(n.useEffect)((function(){if(u){var e=function(e){var a=Object.keys(e);return a[a.length*Math.random()<<0]}(u);r({key:e,imgUrl:u[e]})}}),[u]),c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("div",null,"Guess the Marvel character"),!0===E&&c.a.createElement("div",{className:"win"}," Congratulations, you found the good character!"),!1===E&&c.a.createElement("div",{className:"lost"}," Nope, that's not the right character")),t&&c.a.createElement(l,{imgUrl:t.imgUrl}),u&&c.a.createElement(m,{choices:u,onSelectChoice:function(e){(null===t||void 0===t?void 0:t.key)===e?b(!0):b(!1)},choiceState:null!==f&&void 0!==f?f:""}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.564909d4.chunk.js.map