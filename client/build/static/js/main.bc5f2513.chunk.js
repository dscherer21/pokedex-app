(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e,a,t){e.exports=t(39)},19:function(e,a,t){},20:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),l=t(12),c=t.n(l),r=(t(19),t(2)),m=(t(20),t(13)),s=t.n(m),i=["none","bug","dark","dragon","electric","fairy","fighting","fire","flying","ghost","grass","ground","ice","normal","poison","psychic","rock","steel","water"];var p=function(e){return o.a.createElement("form",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xl-12"},o.a.createElement("label",{htmlFor:"pokemonName"},"Pok\xe9mon Name:")),o.a.createElement("div",{className:"col-xl-12"},o.a.createElement("input",{name:"pokemonName",placeholder:"Type Pok\xe9mon Name Here",onChange:function(a){return e.setPokemonName(a.target.value.toLowerCase())}}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xl-12"},o.a.createElement("label",{htmlFor:"type1"},"Pok\xe9mon Type 1:")),o.a.createElement("div",{className:"col-xl-12"},o.a.createElement("select",{name:"type1",id:"type1",onChange:function(a){return e.setPokemonType1(a.target.value)}},i.map((function(e,a){return o.a.createElement("option",{value:e,key:a},e)}))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xl-12"},o.a.createElement("button",{className:"btn btn-primary",onClick:e.apiCall},"Search"))))};var d=function(){var e=Object(n.useState)("none"),a=Object(r.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(),m=Object(r.a)(c,2),i=m[0],d=m[1],u=Object(n.useState)(),h=Object(r.a)(u,2),y=h[0],E=h[1],g=Object(n.useState)(o.a.createElement("h5",null,o.a.createElement("p",null,"If you know the name of the Pokemon you are trying to find, type it's name into the 'Pok\xe9mon Name' field. You can also search by Pokemon type by using the dropdown menus. Click the 'Search' button once you are ready to search."),o.a.createElement("p",{style:{color:"red"}},"Note: If you are searching by name, please leave the 'Type' fields set to 'None.'"))),f=Object(r.a)(g,2),v=f[0],k=f[1];return Object(n.useEffect)((function(){"none"===t||i?"none"===t&&i&&E("pokemon/"+i):E("type/"+t)}),[i,t]),o.a.createElement("div",{className:"App",path:"/"},o.a.createElement("div",{className:"pokeball"},o.a.createElement("h1",{className:"pokemonFont",style:{fontSize:"65px"}},"David's Pok\xe9Dex")),o.a.createElement("div",{id:"octagon"},o.a.createElement(p,{setPokemonName:d,setPokemonType1:l,apiCall:function(e){console.log("Search Button clicked!"),console.log("Pokemon Type 1: "+t),console.log("Pokemon Name: "+i),e.preventDefault(),k(o.a.createElement("h5",null,"Searching...")),s.a.get("https://pokeapi.co/api/v2/"+y).then((function(e){var a;(console.log(e.data.pokemon),console.log(e),void 0===e.data.pokemon)?(e.data.types[1]&&(a="/"+e.data.types[1].type.name.charAt(0).toUpperCase()+e.data.types[1].type.name.slice(1)),k(o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xl-12"},o.a.createElement("h1",null,e.data.name.charAt(0).toUpperCase()+e.data.name.slice(1))),o.a.createElement("div",{className:"col-xl-12"},o.a.createElement("img",{className:"spriteImage",src:e.data.sprites.front_default,alt:"Image of a "+e.data.name+"."})),o.a.createElement("div",{className:"col-xl-12"},o.a.createElement("h2",null,"Type: ",e.data.types[0].type.name.charAt(0).toUpperCase()+e.data.types[0].type.name.slice(1),a)),o.a.createElement("div",{className:"col-xl-12"},o.a.createElement("h2",null,"Average Height: ",(.3280839895*e.data.height).toFixed(2)," ft")),o.a.createElement("div",{className:"col-xl-12"},o.a.createElement("h2",null,"Average Weight: ",(e.data.weight/4.5359237).toFixed(2)," lbs"))))):k()})).catch((function(e){console.log(e)})).finally((function(){}))}}),v))};t(38),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.bc5f2513.chunk.js.map