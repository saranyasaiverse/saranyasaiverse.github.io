/* ------------------------------------------
   SaiVerse Website 2024 – Script
   Interactive + Functional Features
------------------------------------------- */

// Floating WhatsApp button
document.addEventListener("DOMContentLoaded", function() {
  const whatsappBtn = document.createElement("a");
  whatsappBtn.href = "https://wa.me/918939701718"; // Replace with your WhatsApp number
  whatsappBtn.target = "_blank";
  whatsappBtn.className = "floating-whatsapp";
  whatsappBtn.innerHTML = "💬";
  document.body.appendChild(whatsappBtn);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Back to top button visibility
window.addEventListener("scroll", function() {
  const topBtn = document.getElementById("backToTop");
  if (window.scrollY > 250) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Simple fade-in animation for sections
const sections = document.querySelectorAll("section");
const fadeInOnScroll = () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", fadeInOnScroll);
window.addEventListener("load", fadeInOnScroll);
