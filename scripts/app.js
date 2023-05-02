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


// MODALS
const modalOverlay = document.querySelector(".modal-overlay");
const modals = document.querySelectorAll(".modal");
const cancelBtn = document.querySelectorAll(".btn__exit");

const modalBtns = document.querySelectorAll(".modalBtn");

modalBtns.forEach((el) => {
  el.addEventListener("click", (e) => {
    let path = e.currentTarget.getAttribute("data-path");

    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });

    document
      .querySelector(`[data-target='${path}']`)
      .classList.add("modal--visible");
    modalOverlay.classList.add("modal-overlay--visible");
  });
});

modalOverlay.addEventListener("click", (e) => {
  console.log(e.target);

  if (e.target == modalOverlay) {
    modalOverlay.classList.remove("modal-overlay--visible");
    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code == "Escape") {
    modalOverlay.classList.remove("modal-overlay--visible");
    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });
  }
});

cancelBtn.forEach((canc) => {
  canc.addEventListener("click", () => {
    modalOverlay.classList.remove("modal-overlay--visible");
    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });
  });
});