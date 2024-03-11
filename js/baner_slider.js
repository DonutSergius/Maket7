$(document).ready(function () {
    var $banerSlider = $(".baner-slider");

    $banerSlider.slick({
      dots: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 100000,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
    });

    $banerSlider.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        var buttonId = "btn" + (nextSlide + 1);
        setActiveButton(buttonId);
      }
    );

    $(".slider-btn button").click(function () {
      var index = $(this).index();
      $banerSlider.slick("slickGoTo", index);
      setActiveButton("btn" + (index + 1));
    });

    var initialSlide = $banerSlider.slick("slickCurrentSlide");
    var initialButtonId = "btn" + (initialSlide + 1);
    setActiveButton(initialButtonId);

    function setActiveButton(buttonId) {
      $(".slider-btn button").removeClass("active");
      $("#" + buttonId).addClass("active");
    }
});