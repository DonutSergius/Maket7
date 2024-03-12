$(document).ready(function () {
  // Select the share-slider element using jQuery
  var $shareSlider = $(".share-slider");

  // Initialize the slick slider with specified settings
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

  // Event handler triggered before changing slides
  $shareSlider.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
          // Generate button ID based on the next slide index
          var buttonId = "s_btn" + (nextSlide + 1);
          // Set the active button based on the next slide
          setActiveButton(buttonId);
      }
  );

  // Click event handler for share-slider-btn buttons
  $(".share-slider-btn button").click(function () {
      // Get the index of the clicked button
      var index = $(this).index();
      // Change the slick slider to the corresponding slide
      $shareSlider.slick("slickGoTo", index);
      // Set the active button based on the clicked index
      setActiveButton("s_btn" + (index + 1));
  });

  // Get the initial slide index and set the corresponding initial active button
  var initialSlide = $shareSlider.slick("slickCurrentSlide");
  var initialButtonId = "s_btn" + (initialSlide + 1);
  setActiveButton(initialButtonId);

  // Function to set the active button based on the provided buttonId
  function setActiveButton(buttonId) {
      // Remove the 'active' class from all buttons and add it to the specified button
      $(".share-slider-btn button").removeClass("active");
      $("#" + buttonId).addClass("active");
  }
});
