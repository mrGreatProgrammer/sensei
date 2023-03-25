const currentYearEl = document.querySelector('time');
const currentDate = new Date().getFullYear();

currentYearEl.textContent= currentDate;


// SLIDER
$(".center").slick({
  dots: true,
  infinite: true,
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2500,
  variableWidth: true
  
});


