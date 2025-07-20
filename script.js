$(document).ready(function () {
  // Team Slider
  $(".team-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    dots: true,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // Blog Slider
  $(".blog-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    dots: true,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // Testimonial Slider
  $(".testimonial-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    fade: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    infinite: true,
    prevArrow: $(".testimonial-prev"),
    nextArrow: $(".testimonial-next"),
  });

  // Custom Navigation for Testimonial Slider
  $(".testimonial-prev").click(function () {
    $(".testimonial-slider").slick("slickPrev");
  });

  $(".testimonial-next").click(function () {
    $(".testimonial-slider").slick("slickNext");
  });
});
