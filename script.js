// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your message has been sent!");
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});

// Simple Hover Effect for Projects
document.querySelectorAll(".project").forEach(project => {
    project.addEventListener("mouseenter", function() {
        this.style.transform = "scale(1.05)";
        this.style.transition = "0.3s";
    });

    project.addEventListener("mouseleave", function() {
        this.style.transform = "scale(1)";
    });
});