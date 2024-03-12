// Get the email input element by its ID
var emailInput = document.getElementById("email");

// Add click event listener to the submit button with the ID "submit-email"
document.getElementById("submit-email").addEventListener("click", function () {
  // Get the trimmed value of the email input
  var emailValue = emailInput.value.trim();

  // Check if the email input is empty
  if (emailValue === "") {
    // Show a notification if the email is empty
    showNotification("Please enter your email.");
  } else if (!isValidEmail(emailValue)) {
    // Check if the email is not valid using the isValidEmail function
    // Show a notification if the email is not valid
    showNotification("Please enter a valid email address.");
  } else {
    // Show a success notification if the form is submitted successfully
    showNotification("Form submitted successfully!", true);
  }
});

// Function to check if the email is valid using a regular expression
function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to show a notification with a given message and style (success or error)
function showNotification(message, isSuccess) {
  // Get the notification element by its ID
  var notification = document.getElementById("notification");
  var needpad = document.getElementById("needpads");

  // Set the content, styling, and padding of the notification
  notification.textContent = message;
  notification.style.lineHeight = 0;
  notification.style.paddingTop = "15px";
  needpad.style.paddingTop = "15px";
  notification.style.color = isSuccess ? "green" : "red";

  // Clear the notification and reset the email input after 3 seconds
  setTimeout(function () {
    notification.textContent = "";
    emailInput.value = "";
  }, 3000);
}
