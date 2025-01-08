function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const words = [
    "Network Expert",
    "Frontend Developer",
    "Future Batman",
    "Backend Developer",
    "Full stack Developer",
    "Cybersecurity Expert",
    "Student",
];

let currentIndex = 0;
const rotatingText = document.getElementById("rotating-text");

function rotateText() {
    // Trigger text out animation
    rotatingText.style.animation = "textOut 0.5s ease-in forwards";

    // Wait for the text out animation to complete
    setTimeout(() => {
        // Update the text content
        currentIndex = (currentIndex + 1) % words.length; // Loop through words
        rotatingText.textContent = words[currentIndex];

        // Trigger text in animation
        rotatingText.style.animation = "textIn 0.5s ease-out forwards";
    }, 500); // Match the duration of the "textOut" animation
}

// Rotate text every 3 seconds
setInterval(rotateText, 2500);


// Map of section IDs to their corresponding background colors
const sectionColors = {
    profile: "#BBE6F1",    // Light Blue
    about: "#FFF9A6",      // Light Yellow
    experience: "#E1BBF1", // Soft Purple
    projects: "#FFC6C6",   // Light Pink
    contact: "#D4F1BB",    // Soft Green
};


