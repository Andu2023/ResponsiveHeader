let navbar=document.querySelector(".navbar");
 let searchbox=document.querySelector(".search-box .bx-search");
//<i class='bx bx-x'></i>
 searchbox.addEventListener("click", ()=>{
    navbar.classList.toggle("showinput");
 if( navbar.classList.contains("showinput")){
   searchbox.classList.replace("bx-search","bx-x")
 }
else{
   searchbox.classList.replace("bx-x","bx-search")
} })
let menuBTN=document.querySelector(".navbar .bx-menu");
let closeuopenbtn=document.querySelector(".nav-links .bx-x");
let navlinks=document.querySelector(".nav-links");
menuBTN.addEventListener("click",()=>{
   navlinks.style.left="0";
})
closeuopenbtn.addEventListener("click",()=>{
   
      navlinks.style.left="-100%";
})
let navbarr=document.querySelector(".navbar");
let body=document.querySelector("body");
let nightmood=document.querySelector(".moon");
 nightmood,addEventListener("click",()=>{
   body.classList.toggle("darkbody");
   navbarr.classList.toggle("darkbody");
})
