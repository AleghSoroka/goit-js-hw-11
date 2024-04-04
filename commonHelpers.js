import{i as a,S as c}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function f(s){const t="https://pixabay.com",o="/api/",i=new URLSearchParams({key:"43216617-d9e2d51a1f64026c97bc97c8e",q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${t}${o}?${i}`;return fetch(e).then(r=>r.json()).catch(r=>console.error("Error while fetching: ",r))}function m(s){return s.map(({webformatURL:t,largeImageURL:o,tags:i,likes:e,views:r,comments:n,downloads:u})=>`<li class = "list-item">
  <a class = "gallery-link" href="${o}">
    <img src = "${t}"  alt="${i}" class="gallery-image">
  </a>

  <ul class = "information-list">

    <li class="item-information-container">
      <h2 class="main-info">Likes </h2>
      <p class="info">${e}</p>
    </li>

    <li class="item-information-container">
      <h2 class="main-info"> Views </h2>
      <p class="info">${r}</p>
    </li>

    <li class="item-information-container">
      <h2 class="main-info">Comments </h2>
      <p class="info">${n}</p>
    </li>

    <li class="item-information-container">
      <h2 class="main-info">Downloads </h2>
      <p class="info">${u}</p>
    </li>

  </ul>

</li>`).join("")}const p=document.querySelector(".user_request_form"),g=document.querySelector(".gallery"),l=document.querySelector(".loading");p.addEventListener("submit",d);function d(s){s.preventDefault(),l.classList.add("loader");const t=s.target.elements.user_query.value.toLowerCase().trim().replaceAll(" ","+");if(t)f(t).then(o=>{o.hits.length?(g.innerHTML=m(o.hits),new c(".gallery-link",{captionsData:"alt"}).refresh()):a.error({backgroundColor:"red",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"There are no images matching Your request!"})}).catch(o=>{a.error({backgroundColor:"red",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"Something went wrong during your request. Please, try again later!"})}).finally(()=>l.classList.remove(".loader"));else{a.error({backgroundColor:"red",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"Please, input a valid request!"});return}}new c(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
