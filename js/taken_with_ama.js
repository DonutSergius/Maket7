// Wait for the DOM to be fully loaded before executing the code
document.addEventListener("DOMContentLoaded", function () {
  var touchStartY;
  var touchEndY;

  // Iterate through all elements with class 'img-content' within elements with class 'img-block'
  document
      .querySelectorAll(".img-block .img-content")
      .forEach(function (imgContent) {
          // Event listener for touchstart to store the initial touch Y coordinate
          imgContent.addEventListener("touchstart", function (event) {
              touchStartY = event.touches[0].clientY;
          });

          // Event listener for touchmove to prevent default touch behavior
          imgContent.addEventListener("touchmove", function (event) {
              event.preventDefault();
          });

          // Event listener for touchend to determine swipe direction and toggle 'click' class
          imgContent.addEventListener("touchend", function (event) {
              touchEndY = event.changedTouches[0].clientY;

              if (touchEndY < touchStartY) {
                  // Swipe up, toggle 'click' class on the closest '.img-block'
                  imgContent.closest(".img-block").classList.toggle("click");
              } else {
                  // Swipe down, remove 'click' class from the closest '.img-block'
                  imgContent.closest(".img-block").classList.remove("click");
              }
          });

          // Event listener for mouseleave to remove 'click' class on mouse leave
          imgContent.addEventListener("mouseleave", function () {
              imgContent.closest(".img-block").classList.remove("click");
          });
      });
});

// Select all elements with class 'img-block'
const imgBlocks = document.querySelectorAll('.img-block');

// Iterate through each '.img-block' element
imgBlocks.forEach(imgBlock => {
  // Select relevant elements within each '.img-block'
  const likeSvg = imgBlock.querySelector('.dis-rigth svg');
  const likeCount = imgBlock.querySelector('#like-count');

  let isLiked = false;
  let likes = parseInt(likeCount.textContent);

  // Event listener for click on the like button (svg)
  likeSvg.addEventListener('click', function () {
      // Toggle like status, change SVG fill color, and update like count
      if (!isLiked) {
          likeSvg.style.fill = '#f06464'; // Liked color
          likes++;
          likeCount.textContent = likes;
      } else {
          likeSvg.style.fill = 'none'; // Default color
          likes--;
          likeCount.textContent = likes;
      }

      isLiked = !isLiked; // Toggle like status
  });
});
