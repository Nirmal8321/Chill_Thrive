// main.js
// Chill Thrive Website JavaScript

// Booking Form Logic
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // Show confirmation message
    const message = document.getElementById("successMessage");
    message.innerText =
      "Thank you " +
      name +
      "! Your " +
      service +
      " session is booked on " +
      date +
      " at " +
      time +
      ".";

    // Reset form
    bookingForm.reset();
  });
}
