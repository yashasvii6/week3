// Handle form submission
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual submission

    const formData = new FormData(this);

    console.log("Form Submitted:");
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value.name || value}`);
    }

    alert("Registration submitted successfully!");

    this.reset(); // Optional: also reset after submission
});

// Confirm reset action
document.getElementById("registrationForm").addEventListener("reset", function(event) {
    const confirmReset = confirm("Are you sure you want to reset the form?");
    if (!confirmReset) {
        event.preventDefault();
    }
});
