// Highlight the current navigation page
const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

// Contact form submission
const contactForm = document.querySelector("#contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Thank you! Your message has been received.");

        contactForm.reset();
    });
}

// Button click animation
document.querySelectorAll("button, .btn").forEach(button => {
    button.addEventListener("click", function() {
        this.classList.add("clicked");

        setTimeout(() => {
            this.classList.remove("clicked");
        }, 200);
    });
});