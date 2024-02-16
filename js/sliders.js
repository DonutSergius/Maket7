let currentIndex = 0;
let intervalId;

document.addEventListener("DOMContentLoaded", function () {
    const mentors = document.querySelectorAll(".baner_img");
    const MentorsContainer = document.querySelector(".baner-slider");
    const sliderButtonsContainer = document.querySelector(".baner-button");
    const mentorId = 'iPhone';
    var elementOnPage = 1;

    createButtons(mentorId, sliderButtonsContainer, MentorsContainer, mentors, elementOnPage);
    showCourses(MentorsContainer, mentorId, mentors, elementOnPage, sliderButtonsContainer);
});


function createButtons(nameId, sliderButtonsContainer, container, nameBlock, elementOnPage) {
    sliderButtonsContainer.innerHTML = "";
    if(nameBlock.length>1){
    for (let i = 0; i < nameBlock.length; i++) {
        const button = document.createElement("button");
        button.textContent = "";
        button.id = nameId + i;
        button.addEventListener("click", () => {
            clearInterval(intervalId);
            currentIndex = i;
            container.style.opacity = 0;
            setTimeout(() => showCourses(container, nameId, nameBlock, elementOnPage, sliderButtonsContainer), 500);
        });
        sliderButtonsContainer.appendChild(button);
    }    
    }
}
//
//  Вивід відповідного елемента/елементів
function showCourses(container, nameId, nameBlock, count, sliderButtonsContainer) {
    container.innerHTML = "";
    var coursesPerPage = count;

    const lastIndex = nameBlock.length - 1;

    // Ініціалізуємо currentIndex на початку
    if (typeof currentIndex === 'undefined') {
        currentIndex = 0;
    }

    if (sliderButtonsContainer.children.length > 1) {
        document.getElementById(nameId + `${(currentIndex - 1 + nameBlock.length) % nameBlock.length}`).style.backgroundColor = "transparent";
        document.getElementById(nameId + `${currentIndex}`).style.backgroundColor = "#ffffff";
        document.getElementById(nameId + `${(currentIndex + 1) % nameBlock.length}`).style.backgroundColor = "transparent";
    }
    

    const startIndex = currentIndex;
    const endIndex = (currentIndex + coursesPerPage) % nameBlock.length;

    // Гортання елементів по колу
    if (startIndex < endIndex) {
        const visibleCourses = Array.from(nameBlock).slice(startIndex, endIndex);
        visibleCourses.forEach((course) => {
            const clonedCourse = course.cloneNode(true);
            container.appendChild(clonedCourse);
        });
    } else {
        const visibleCourses = Array.from(nameBlock)
            .slice(startIndex)
            .concat(Array.from(nameBlock).slice(0, endIndex));
        visibleCourses.forEach((course) => {
            const clonedCourse = course.cloneNode(true);
            container.appendChild(clonedCourse);
        });
    }

    container.style.transition = "opacity 0.5s ease-in-out";
    container.style.opacity = 1;
}