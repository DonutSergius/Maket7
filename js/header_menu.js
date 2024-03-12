// Function to get the currently visible section based on scroll position
function getCurrentSection() {
  const headerHeight = 500; // Height of the header
  const header = document.querySelector("header"); // Selecting the header element

  const sections = document.querySelectorAll("section"); // Selecting all sections
  let currentSection = null;

  // Loop through each section to determine the current visible section
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect(); // Get the position of the section
    if (rect.top - headerHeight <= 50 && rect.bottom >= 50) {
      currentSection = section.id;
      // Apply box shadow to the header based on the current section
      header.style.boxShadow = currentSection !== "banner" ? "0 5px 15px rgba(0, 0, 0, 0.3)" : "none";
    }
  });

  return currentSection;
}

// Function to change the menu background based on the current visible section
function changeMenuBackground() {
  const currentSection = getCurrentSection();
  const headerButtons = document.querySelectorAll(".menu-btn button"); // Selecting header buttons
  const menuButtons = document.querySelectorAll(".menu button"); // Selecting menu buttons

  const transitionStyle = "background-color 0.3s ease, color 0.3s ease";

  // Update styles for header buttons based on the current visible section
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
    // Update styles for menu buttons for smaller screens
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

// Event listener for scroll events to trigger the change in menu background
document.addEventListener("scroll", changeMenuBackground);

// Function to scroll to a specific section when a menu button is clicked
function scrollToSection(sectionId) {
  const headerHeight = 50;
  const section = document.getElementById(sectionId);
  const header = document.querySelector("header");

  // Scroll to the selected section with a smooth behavior
  if (section) {
    window.scrollTo({
      top: section.offsetTop - headerHeight,
      behavior: "smooth",
    });
  }
}
