// Document ready function to ensure DOM is fully loaded before executing the script
$(document).ready(function () {

  // Selecting elements with the class "features-dis"
  var $featuresDis = $(".features-dis");

  // Initializing the Slick slider for the selected elements
  $featuresDis.slick({
      dots: false,                    // Display navigation dots
      arrows: false,                  // Display navigation arrows
      autoplay: true,                 // Enable autoplay
      autoplaySpeed: 10000,           // Autoplay speed in milliseconds
      speed: 900,                     // Transition speed between slides
      slidesToShow: 1,                // Number of slides to show at a time
      slidesToScroll: 1,              // Number of slides to scroll
      centerMode: false               // Enable center mode
  });

  // Event listener for the "beforeChange" event of the Slick slider
  $featuresDis.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
          // Creating a button ID based on the next slide index
          var buttonId = "f_btn" + (nextSlide + 1);
          // Calling the setActiveButton function to highlight the corresponding button
          setActiveButton(buttonId);
      }
  );

  // Event listener for button clicks within elements with the class "features-btn"
  $(".features-btn button").click(function () {
      // Getting the index of the clicked button
      var index = $(this).index();
      // Navigating to the corresponding slide using Slick's "slickGoTo" method
      $featuresDis.slick("slickGoTo", index);
      // Creating a button ID based on the clicked button index
      setActiveButton("f_btn" + (index + 1));
  });

  // Getting the initial slide index of the Slick slider
  var initialSlide = $featuresDis.slick("slickCurrentSlide");
  // Creating a button ID based on the initial slide index
  var initialButtonId = "f_btn" + (initialSlide + 1);
  // Calling the setActiveButton function to highlight the initial button
  setActiveButton(initialButtonId);

  // Function to set the active state for the button with the given ID
  function setActiveButton(buttonId) {
      $(".features-btn button").removeClass("active");
      $("#" + buttonId).addClass("active");
  }
});
