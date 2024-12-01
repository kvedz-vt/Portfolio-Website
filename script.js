// Typing Effect
const typedTextSpan = document.querySelector(".typing-text span");
const words = ["Apprentice Mechanic", "Developer", "Game Designer", "Professional Gamer", "3D Modeler"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        // Deleting characters
        typedTextSpan.textContent = currentWord.substring(0, charIndex--);
    } else {
        // Adding characters
        typedTextSpan.textContent = currentWord.substring(0, charIndex++);
    }

    // When word is completely typed
    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); // Pause before deleting
        return;
    }

    // When word is completely deleted
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Move to the next word
    }

    setTimeout(typeEffect, isDeleting ? 100 : 200); // Adjust typing/deleting speed
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Active Link Highlighting
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

function updateActiveLink() {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50; // Adjust for any header height
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}

document.addEventListener("scroll", updateActiveLink);

// Zoom-On-Hover Effect
const projectImages = document.querySelectorAll(".project-image");

projectImages.forEach((image) => {
    image.addEventListener("mousemove", (e) => {
        const { left, top, width, height } = image.getBoundingClientRect();
        const xPercent = ((e.clientX - left) / width) * 100;
        const yPercent = ((e.clientY - top) / height) * 100;

        // Smoothly move the zoom based on the cursor position
        image.style.transformOrigin = `${xPercent}% ${yPercent}%`;
        image.style.transform = "scale(1.4)";
        image.style.transition = "transform 0.2s ease, transform-origin 0.2s ease"; // Smooth effect
    });

    image.addEventListener("mouseleave", () => {
        // Reset the zoom effect smoothly
        image.style.transformOrigin = "center center";
        image.style.transform = "scale(1)";
        image.style.transition = "transform 0.2s ease, transform-origin 0.2s ease"; // Smooth reset
    });
});

// Full-Screen Modal for Images
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.createElement("div");
    modal.classList.add("image-overlay");

    const closeButton = document.createElement("span");
    closeButton.classList.add("close-overlay");
    closeButton.innerHTML = "&times;";
    modal.appendChild(closeButton);

    const modalImage = document.createElement("img");
    modalImage.classList.add("zoomed-image");
    modal.appendChild(modalImage);
    document.body.appendChild(modal);

    projectImages.forEach((image) => {
        image.addEventListener("click", () => {
            // Set the modal image source to the clicked image
            modalImage.src = image.src;
            modal.classList.add("visible");
        });
    });

    // Close the modal when the close button is clicked
    closeButton.addEventListener("click", () => {
        modal.classList.remove("visible");
    });

    // Close the modal when clicking outside the image
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("visible");
        }
    });
});
