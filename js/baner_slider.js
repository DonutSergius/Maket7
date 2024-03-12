// Ensure the document is ready before executing the code
$(document).ready(function () {
  // Select the banner slider element
  var $banerSlider = $(".baner-slider");

  // Initialize the slick slider with specified settings
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

  // Event handler for before changing slides
  $banerSlider.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
          // Generate button ID based on the next slide
          var buttonId = "btn" + (nextSlide + 1);
          // Set the active button
          setActiveButton(buttonId);
      }
  );

  // Event handler for button clicks within the slider navigation
  $(".slider-btn button").click(function () {
      // Get the index of the clicked button
      var index = $(this).index();
      // Move the slider to the selected index
      $banerSlider.slick("slickGoTo", index);
      // Set the active button based on the selected index
      setActiveButton("btn" + (index + 1));
  });

  // Get the initial slide and set the corresponding initial button as active
  var initialSlide = $banerSlider.slick("slickCurrentSlide");
  var initialButtonId = "btn" + (initialSlide + 1);
  setActiveButton(initialButtonId);

  // Function to set the active button based on the provided button ID
  function setActiveButton(buttonId) {
      $(".slider-btn button").removeClass("active");
      $("#" + buttonId).addClass("active");
  }
});
