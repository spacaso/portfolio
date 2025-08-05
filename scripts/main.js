// Scroll reveal animation using Intersection Observer
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".section, .project-card");

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
        observerInstance.unobserve(entry.target); // Animate once
      }
    });
  }, {
    threshold: 0.1
  });

  revealElements.forEach(el => observer.observe(el));
});
