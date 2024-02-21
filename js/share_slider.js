$(document).ready(function () {
    var $shareSlider = $(".share-slider");

    $shareSlider.slick({
      dots: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 100000,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
    });

    $shareSlider.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        var buttonId = "s_btn" + (nextSlide + 1);
        setActiveButton(buttonId);
      }
    );

    $(".share-slider-btn button").click(function () {
      var index = $(this).index();
      $shareSlider.slick("slickGoTo", index);
      setActiveButton("s_btn" + (index + 1));
    });

    var initialSlide = $shareSlider.slick("slickCurrentSlide");
    var initialButtonId = "s_btn" + (initialSlide + 1);
    setActiveButton(initialButtonId);

    function setActiveButton(buttonId) {
      $(".share-slider-btn button").removeClass("active");
      $("#" + buttonId).addClass("active");
    }
  });