document.addEventListener("DOMContentLoaded",function(){[].slice.call(document.querySelectorAll(".card")).forEach(a=>{a.style.borderRadius=a.className.match("card_size_s")?"22px":"23px"});var a=document.querySelector(".card.card_size_s:last-child");a.innerHTML="<div class=\"card-heading\"><div class=\"card-icon-wrap\"><img class=\"card-icon\" src=\"img/kettle.svg\"></div><h3 class=\"card-title\">\u0412\u043E\u0434\u0430 \u0432\u0441\u043A\u0438\u043F\u0435\u043B\u0430</h3> </div><div class=\"card-specs\"><p class=\"card-source\">\u0427\u0430\u0439\u043D\u0438\u043A</p><p class=\"card-time card-time_block\">16:20, \u0421\u0435\u0433\u043E\u0434\u043D\u044F</p></div>";const b=document.querySelector(".buttons-wrap"),c=document.querySelector(".card_size_m:nth-child(8) .card-description");setTimeout(function(){const a=document.querySelector(".buttons-wrap .button_yellow"),d=document.createElement("div"),e=document.createElement("p"),f=document.createElement("ol"),g=document.createElement("li"),h=document.createElement("li");d.setAttribute("class","purchase-list-wrap"),e.setAttribute("class","card-description card-description_big description_critical"),e.textContent="\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043A\u0443\u043F\u043E\u043A:",f.setAttribute("class","purchase-list"),g.setAttribute("class","purchase-list__item"),g.textContent="\u0425\u043B\u0435\u0431",h.setAttribute("class","purchase-list__item"),h.textContent="\u041C\u043E\u043B\u043E\u043A\u043E",d.appendChild(e),d.appendChild(f),f.appendChild(g),f.appendChild(h),a.onclick=()=>{c.replaceWith(d),b.style.display="none"}},500),document.getElementsByClassName("header-menu__switcher")[0].addEventListener("click",function(){document.getElementsByClassName("header-menu")[0].classList.toggle("header-menu_active")})},!1);