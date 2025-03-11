// Select elements
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeModal = document.querySelector(".close");

// Get all experience links
const experienceLinks = document.querySelectorAll("#experience a");

experienceLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default action

        const titleElement = link.querySelector("h4");
        const descriptionElement = link.querySelector("p");

        if (titleElement && descriptionElement) {
            modalTitle.textContent = titleElement.textContent;
            modalDescription.textContent = descriptionElement.textContent;
            modal.style.display = "flex"; // Show modal
        }
    });
});

// Close modal when clicking on the close button
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside of the content
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
