// Floating WhatsApp button click
document.addEventListener("DOMContentLoaded", function() {
  const whatsappBtn = document.createElement("a");
  whatsappBtn.href = "https://wa.me/919361157556"; // your WhatsApp number here
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

// Back to top button
window.addEventListener("scroll", function() {
  const topBtn = document.getElementById("backToTop");
  if (window.scrollY > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
