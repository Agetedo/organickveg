
$('.navigatsiya div').on('click', () => {
  $('.navigatsiya div').toggleClass('active');
  $('.navigatsiya nav').toggleClass('open');
  $('.navigatsiya nav ul').toggleClass('show');
});
for (let a = 1; a <= $(".navigatsiya ul li").length; a++) {
  $(".navigatsiya ul li:nth-child(" + a + ")").css("animation-delay", "." + (a + 1) + "s");
}

$(function () {
  $('.testimonial-block__slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: false,
  });
});
