<<<<<<< HEAD
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

// Start typing effect
document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});


// Select all sections and nav links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

// Function to update active link
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

document.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('.project-image');
    const overlay = document.querySelector('.image-overlay');
    const zoomedImage = document.querySelector('.zoomed-image');
    const closeOverlay = document.querySelector('.close-overlay');

    // Open the image in full view when clicked
    image.addEventListener('click', () => {
        overlay.classList.add('visible');
        zoomedImage.src = image.src; // Set the zoomed image to the clicked one
    });

    // Close the overlay when clicking the close button
    closeOverlay.addEventListener('click', () => {
        overlay.classList.remove('visible');
    });

    // Close the overlay when clicking outside the image
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('visible');
        }
    });
});

// Select all project images for the zoom effect
const projectImages = document.querySelectorAll('.project-image');

// Function to track mouse movement and apply zoom effect
projectImages.forEach((image) => {
  image.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = image.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const xPercent = (x / width) * 100;
    const yPercent = (y / height) * 100;

    // Apply the zoom effect with the cursor's position
    image.style.transformOrigin = `${xPercent}% ${yPercent}%`;
    image.style.transform = 'scale(1.4)'; // Zoom in on hover
  });

  image.addEventListener('mouseleave', () => {
    // Reset the zoom effect when mouse leaves
    image.style.transformOrigin = 'center center';
    image.style.transform = 'scale(1)'; // Reset zoom
  });
});

// JavaScript to handle opening and closing the full-screen modal
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.createElement("div");
    modal.classList.add("image-overlay");
    const closeButton = document.createElement("span");
    closeButton.classList.add("close-overlay");
    closeButton.innerHTML = "&times;"; // Close button text
    modal.appendChild(closeButton);
    document.body.appendChild(modal);

    const images = document.querySelectorAll(".project-image[data-modal='true']");
    images.forEach(image => {
        image.addEventListener("click", function() {
            const modalImage = document.createElement("img");
            modalImage.src = image.src;
            modalImage.classList.add("zoomed-image");
            modal.innerHTML = ""; // Clear previous modal content
            modal.appendChild(closeButton); // Re-add the close button
            modal.appendChild(modalImage);
            modal.classList.add("visible");
        });
    });

    // Close the modal when the close button is clicked
    closeButton.addEventListener("click", function() {
        modal.classList.remove("visible");
    });

    // Close the modal when clicking outside of the image
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.classList.remove("visible");
        }
    });
=======
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

// Start typing effect
document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});


// Select all sections and nav links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

// Function to update active link
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

document.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('.project-image');
    const overlay = document.querySelector('.image-overlay');
    const zoomedImage = document.querySelector('.zoomed-image');
    const closeOverlay = document.querySelector('.close-overlay');

    // Open the image in full view when clicked
    image.addEventListener('click', () => {
        overlay.classList.add('visible');
        zoomedImage.src = image.src; // Set the zoomed image to the clicked one
    });

    // Close the overlay when clicking the close button
    closeOverlay.addEventListener('click', () => {
        overlay.classList.remove('visible');
    });

    // Close the overlay when clicking outside the image
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('visible');
        }
    });
});

// Select all project images for the zoom effect
const projectImages = document.querySelectorAll('.project-image');

// Function to track mouse movement and apply zoom effect
projectImages.forEach((image) => {
  image.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = image.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const xPercent = (x / width) * 100;
    const yPercent = (y / height) * 100;

    // Apply the zoom effect with the cursor's position
    image.style.transformOrigin = `${xPercent}% ${yPercent}%`;
    image.style.transform = 'scale(1.4)'; // Zoom in on hover
  });

  image.addEventListener('mouseleave', () => {
    // Reset the zoom effect when mouse leaves
    image.style.transformOrigin = 'center center';
    image.style.transform = 'scale(1)'; // Reset zoom
  });
});

// JavaScript to handle opening and closing the full-screen modal
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.createElement("div");
    modal.classList.add("image-overlay");
    const closeButton = document.createElement("span");
    closeButton.classList.add("close-overlay");
    closeButton.innerHTML = "&times;"; // Close button text
    modal.appendChild(closeButton);
    document.body.appendChild(modal);

    const images = document.querySelectorAll(".project-image[data-modal='true']");
    images.forEach(image => {
        image.addEventListener("click", function() {
            const modalImage = document.createElement("img");
            modalImage.src = image.src;
            modalImage.classList.add("zoomed-image");
            modal.innerHTML = ""; // Clear previous modal content
            modal.appendChild(closeButton); // Re-add the close button
            modal.appendChild(modalImage);
            modal.classList.add("visible");
        });
    });

    // Close the modal when the close button is clicked
    closeButton.addEventListener("click", function() {
        modal.classList.remove("visible");
    });

    // Close the modal when clicking outside of the image
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.classList.remove("visible");
        }
    });
>>>>>>> b755c2c8102c448203b69386128e7580177e9a10
});