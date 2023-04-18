const currentYearEl = document.querySelector("time");
const currentDate = new Date().getFullYear();

currentYearEl.textContent = currentDate;

// SLIDER
// $(".center").slick({
//   dots: true,
//   infinite: true,
//   centerMode: true,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   autoplay: true,
//   autoplaySpeed: 2500,
//   variableWidth: true,
// });

$(".center").slick({
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 2500,
  variableWidth: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 968,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
});

const burgerBtn = document.querySelector(".burger__btn");
const burgerMenu = document.querySelector(".burger__menu");

const isBurgerOpened = false;

function toggleVisibleBurger() {
  if (burgerBtn.classList.contains("burger__btn--opened")) {
    burgerBtn.classList.remove("burger__btn--opened");
    burgerMenu.classList.remove("burger__menu--opened");
    burgerBtn.classList.add("burger__btn--closed");
    burgerMenu.classList.add("burger__menu--closed");
  } else {
    burgerBtn.classList.add("burger__btn--opened");
    burgerMenu.classList.add("burger__menu--opened");
    burgerBtn.classList.remove("burger__btn--closed");
    burgerMenu.classList.remove("burger__menu--closed");
  }
}
