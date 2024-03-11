function getCurrentSection() {
  const headerHeight = 500;
  const header = document.querySelector("header");

  const sections = document.querySelectorAll("section");
  let currentSection = null;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top - headerHeight <= 50 && rect.bottom >= 50) {
      currentSection = section.id;
      header.style.boxShadow = currentSection !== "baner" ? "0 5px 15px rgba(0, 0, 0, 0.3)" : "none";
    }
  });

  return currentSection;
}

function changeMenuBackground() {
  const currentSection = getCurrentSection();
  const headerButtons = document.querySelectorAll(".menu-btn button");
  const menuButtons = document.querySelectorAll(".menu button");

  const transitionStyle = "background-color 0.3s ease, color 0.3s ease";

  if (window.innerWidth > 800) {
    headerButtons.forEach((button) => {
      const sectionId = button.getAttribute("data-section");
      button.style.transition = transitionStyle;
      if (currentSection === sectionId) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  } else {
    menuButtons.forEach((button) => {
      const sectionId = button.getAttribute("data-section");
      button.style.transition = transitionStyle;
      if (currentSection === sectionId) {
        button.style.borderTop = "6px solid #ffffff";
        button.style.color = "#ffffff";
      } else {
        button.style.borderTop = "0px solid #ffffff";
        button.style.color = "";
      }
    });
  }
}

document.addEventListener("scroll", changeMenuBackground);

function scrollToSection(sectionId) {
  const headerHeight = 50;
  const section = document.getElementById(sectionId);
  const header = document.querySelector("header");

  if (section) {
    window.scrollTo({
      top: section.offsetTop - headerHeight,
      behavior: "smooth",
    });
  }
}
