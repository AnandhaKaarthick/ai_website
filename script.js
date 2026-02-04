// Navigation functionality
const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");
const menuToggle = document.querySelector(".menu-toggle");
const navLinksContainer = document.querySelector(".nav-links");

// Page navigation
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);

    // Update active states
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    // Show target page
    pages.forEach((page) => {
      page.classList.remove("active");
      if (page.id === targetId) {
        page.classList.add("active");
        window.scrollTo(0, 0);
      }
    });

    // Close mobile menu
    navLinksContainer.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});

// Mobile menu toggle
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinksContainer.classList.toggle("active");
});

// Smooth scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".scroll-animate").forEach((el) => {
  observer.observe(el);
});

// Form submission
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Simulate form submission
    alert(
      `Thank you, ${data.name}! We've received your message and will get back to you at ${data.email} within 24 hours.`,
    );

    // Reset form
    contactForm.reset();
  });
}

// Add scroll effect to navbar
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    nav.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
  } else {
    nav.style.boxShadow = "none";
  }

  lastScroll = currentScroll;
});

// Initialize animations on page load
window.addEventListener("load", () => {
  document.querySelectorAll(".scroll-animate").forEach((el, index) => {
    setTimeout(() => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("visible");
      }
    }, index * 100);
  });
});
