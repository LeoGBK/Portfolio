// Modal elements
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-description");
const modalClose = document.querySelector(".close");

// Optional: Create a "Visit Website" button
let modalButton = document.createElement("a");
modalButton.textContent = "Visit website";
modalButton.target = "_blank";
modalButton.rel = "noopener";
modalButton.classList.add("explink"); // CSS already has .explink styles
modalDesc.after(modalButton); // Insert after description <p>

// Open modal on click
document.querySelectorAll(".experience-item").forEach(item => {
    item.addEventListener("click", () => {
        const title = item.getAttribute("data-title");
        const description = item.getAttribute("data-description");
        const url = item.getAttribute("data-url");

        modalTitle.textContent = title;
        modalDesc.textContent = description;

        if (url) {
            modalButton.href = url;
            modalButton.style.display = "inline-block";
        } else {
            modalButton.style.display = "none";
        }

        modal.style.display = "flex";
    });
});

// Close modal
modalClose.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside
window.addEventListener("click", e => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
