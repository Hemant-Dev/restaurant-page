(()=>{"use strict";function e(e){const t=document.createElement("p");return t.textContent=e,t}const t=function(){const t=document.querySelector(".main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");return t.classList.add("home"),t.appendChild(e("Best pizza in your country")),t.appendChild(e("Made with passion since 1988")),t.appendChild(e("Order online or visit the nearest store!")),t}())};function n(e,t){const n=document.createElement("div");n.classList.add("menu-item");const a=document.createElement("h2");a.textContent=e;const o=document.createElement("p");o.textContent=t;const c=document.createElement("img");return c.src="",c.alt="",n.appendChild(a),n.appendChild(o),n}function a(){const e=document.createElement("header");e.classList.add("header");const a=document.createElement("h1");return a.classList.add("restaurant-name"),a.textContent="Base Tadka",e.appendChild(a),e.appendChild(function(){const e=document.createElement("nav"),a=document.createElement("button");a.classList.add("button-nav"),a.textContent="Home",a.addEventListener("click",(e=>{e.target.classList.contains("active")||(o(a),t())}));const c=document.createElement("button");c.classList.add("button-nav"),c.textContent="Menu",c.addEventListener("click",(e=>{e.target.classList.contains("active")||(o(c),function(){const e=document.querySelector(".main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("menu"),e.appendChild(n("Salsiccia","Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil")),e.appendChild(n("Disgustoso","Tomato sauce, Bacon, Pineapple, Olives, Basil")),e.appendChild(n("Colorato","Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil")),e.appendChild(n("Pomodoro","Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli")),e.appendChild(n("Crema","White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil")),e.appendChild(n("Carne","Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli")),e}())}())}));const d=document.createElement("button");return d.classList.add("button-nav"),d.textContent="Contact",d.addEventListener("click",(e=>{e.target.classList.contains("active")||(o(d),function(){const e=document.querySelector(".main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("p");t.textContent="📞 123 456 789";const n=document.createElement("p");n.textContent="🏠 Hollywood Boulevard 42, Los Angeles, USA";const a=document.createElement("img");return a.src="",a.alt="Base Tadka Location",e.appendChild(t),e.appendChild(n),e.appendChild(a),e}())}())})),e.appendChild(a),e.appendChild(c),e.appendChild(d),e}()),e}function o(e){document.querySelectorAll(".button-nav").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}!function(){const e=document.querySelector(".content");e.appendChild(a()),e.appendChild(function(){const e=document.createElement("main");return e.classList.add("main"),e.setAttribute("id","main"),e}()),e.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("p");t.textContent=`Copyright © ${(new Date).getFullYear()} Hemant-Dev`;const n=document.createElement("a");return n.href="",e.appendChild(t),e.appendChild(n),e}()),o(document.querySelector(".button-nav")),t()}()})();