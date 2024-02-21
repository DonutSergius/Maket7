document.addEventListener("DOMContentLoaded", function () {
    var touchStartY;
    var touchEndY;

    document
      .querySelectorAll(".img-block .img-content")
      .forEach(function (imgContent) {
        imgContent.addEventListener("touchstart", function (event) {
          touchStartY = event.touches[0].clientY;
        });

        imgContent.addEventListener("touchmove", function (event) {
          // Запобігаємо прокрутці сторінки
          event.preventDefault();
        });

        imgContent.addEventListener("touchend", function (event) {
          touchEndY = event.changedTouches[0].clientY;

          if (touchEndY < touchStartY) {
            // Підняти блок, якщо виконані умови підняття
            imgContent.closest(".img-block").classList.toggle("click");
          } else {
            // Опустити блок, якщо не виконується умова підняття
            imgContent.closest(".img-block").classList.remove("click");
          }
        });

        imgContent.addEventListener("mouseleave", function () {
          imgContent.closest(".img-block").classList.remove("click");
        });
      });
  });
  document.addEventListener("DOMContentLoaded", function () {
    let isClicked = false;

    document
      .querySelectorAll(".dis-rigth svg")
      .forEach(function (svgElement) {
        svgElement.addEventListener("click", function () {
          svgElement.classList.toggle("click");
          isClicked = !isClicked;
        });
      });
  });