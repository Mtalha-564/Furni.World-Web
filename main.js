// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
if(document.documentElement.scrollTop > 20){
nav.classList.add("header-scrolled");
}else{
nav.classList.remove("header-scrolled");
}
}
// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
a.addEventListener("click", function(){
navCollapse.classList.remove("show");
})
})

$(document).ready(function ($) {
    var team_slider = new Swiper(".team-slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        centeredSlides:true,
        autoplay: false,
        speed: 2000,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });
 //activating tab of filter
 let targets = document.querySelectorAll(".filter");
 let activeTab = 0;
 let old = 0;
 let dur = 0.4;
 let animation;

 for (let i = 0; i < targets.length; i++) {
     targets[i].index = i;
     targets[i].addEventListener("click", moveBar);
 }

 // initial position on first === All 
 gsap.set(".filter-active", {
     x: targets[0].offsetLeft,
     width: targets[0].offsetWidth
 });

 function moveBar() {
     if (this.index != activeTab) {
         if (animation && animation.isActive()) {
             animation.progress(1);
         }
         animation = gsap.timeline({
             defaults: {
                 duration: 0.4
             }
         });
         old = activeTab;
         activeTab = this.index;
         animation.to(".filter-active", {
             x: targets[activeTab].offsetLeft,
             width: targets[activeTab].offsetWidth
         });

         animation.to(targets[old], {
             color: "#0d0d25",
             ease: "none"
         }, 0);
         animation.to(targets[activeTab], {
             color: "#fff",
             ease: "none"
         }, 0);

     }

 }
 var testimonial_slider = new Swiper(".testimonial-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    centeredSlides:true,
    autoplay: false,
    speed: 2000,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        },
    },
});
});