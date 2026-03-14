import"./style-9wOPuaAa.js";const o=[{image:"/slide1.jpg",link:"https://www.ebay.com/usr/swexchange",title:"Checkout the Bay for our items, find yours today"},{image:"/slide2.jpg",link:"https://www.mercari.com/u/swexchange/?sv=0",title:"Cloths and Wearables from the South West on Mercari"},{image:"/slide3.jpg",link:"https://www.whatnot.com/user/tylerswexchange",title:"Live Auctions on Whatnot"}];let t=0,l;function d(){const i=document.getElementById("slideshow");if(!i||o.length===0)return;const e=o[t],n=i.querySelector(".slide-link");n&&n.remove(),i.innerHTML=`
    <a href="${e.link}" target="_blank" rel="noopener noreferrer" class="slide-link" style="display:block; width:100%; height:100%;">
      <div class="slide-bg fade-in" style="background-image: url('${e.image}');">
        <div class="slide-overlay">
          <h2>${e.title}</h2>
          <span class="slide-cta">Click to view our store →</span>
        </div>
      </div>
    </a>
  `,document.querySelectorAll(".slide-dot").forEach((s,c)=>{c===t?s.classList.add("center-diamond"):s.classList.remove("center-diamond")})}function h(){t=(t+1)%o.length,d()}function a(){l&&clearInterval(l),l=window.setInterval(h,4e3)}document.addEventListener("DOMContentLoaded",()=>{d(),a(),document.querySelectorAll(".slide-dot").forEach(e=>{e.addEventListener("click",n=>{const r=n.target;t=parseInt(r.getAttribute("data-index")||"0",10),d(),a()})})});
