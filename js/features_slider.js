$(document).ready(function () {
    var $featuresDis = $(".features-dis");

    $featuresDis.slick({
      dots: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 10000,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
    });

    $featuresDis.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        var buttonId = "f_btn" + (nextSlide + 1);
        setActiveButton(buttonId);
      }
    );

    $(".features-btn button").click(function () {
      var index = $(this).index();
      $featuresDis.slick("slickGoTo", index);
      setActiveButton("f_btn" + (index + 1));
    });

    var initialSlide = $featuresDis.slick("slickCurrentSlide");
    var initialButtonId = "f_btn" + (initialSlide + 1);
    setActiveButton(initialButtonId);

    function setActiveButton(buttonId) {
      $(".features-btn button").removeClass("active");
      $("#" + buttonId).addClass("active");
    }
  });