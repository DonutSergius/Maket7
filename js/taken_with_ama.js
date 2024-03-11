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
       
          event.preventDefault();
        });

        imgContent.addEventListener("touchend", function (event) {
          touchEndY = event.changedTouches[0].clientY;

          if (touchEndY < touchStartY) {
 
            imgContent.closest(".img-block").classList.toggle("click");
          } else {
  
            imgContent.closest(".img-block").classList.remove("click");
          }
        });

        imgContent.addEventListener("mouseleave", function () {
          imgContent.closest(".img-block").classList.remove("click");
        });
      });
  });


const imgBlocks = document.querySelectorAll('.img-block');


imgBlocks.forEach(imgBlock => {
  const likeSvg = imgBlock.querySelector('.dis-rigth svg');
  const likeCount = imgBlock.querySelector('#like-count');

  let isLiked = false;
  let likes = parseInt(likeCount.textContent);

  likeSvg.addEventListener('click', function () {
    if (!isLiked) {
      likeSvg.style.fill = '#f06464';
      likes++;
      likeCount.textContent = likes;
    } else {
      likeSvg.style.fill = 'none';
      likes--;
      likeCount.textContent = likes;
    }

    isLiked = !isLiked;
  });
});
