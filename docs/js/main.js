//Swiper
new Swiper(".Proof__slider", {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 1000,
    },
    1190: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});

console.log("hello");

function Details() {
  $(".Form__popup-details").toggleClass("Active");
  $(".Form__popup").toggleClass("Active");
}
function flavor() {
  $(".Form__popup-flavor-block").toggleClass("Active");
  $(".Form__popup-flavor").toggleClass("Active");
}
function Click() {
  $(".Form").addClass("Active");
  $(".footer__block").addClass("Active");
  $("body").addClass("Active");
}
function exit() {
  $(".Form").removeClass("Active");
  $(".footer__block").removeClass("Active");
  $("body").removeClass("Active");
  $(".Form__card1").removeClass("Active");
  $(".Form__card2").removeClass("Active");
  $(".Form__card3").removeClass("Active");
}
