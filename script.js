/* SaiVerse final script.js
   Floating WhatsApp, smooth scroll, fade-in, back-to-top
*/

// Put your WhatsApp number here (countrycode + number, no +)
const WHATSAPP_NUMBER = "918939701718"; // <- replace if you want another

document.addEventListener("DOMContentLoaded", function() {

  // Create floating WhatsApp button if not present
  if (!document.querySelector(".floating-whatsapp")) {
    const a = document.createElement("a");
    a.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent("Hi Saranya, I need consultation.");
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.className = "floating-whatsapp";
    a.innerHTML = "💬";
    document.body.appendChild(a);
  }

  // Create Back-to-top button if not present
  if (!document.getElementById("backToTop")) {
    const b = document.createElement("button");
    b.id = "backToTop";
    b.title = "Back to top";
    b.innerHTML = "↑";
    b.onclick = function(){ window.scrollTo({top:0,behavior:"smooth"}); };
    document.body.appendChild(b);
  }

  // Smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Fade-in on scroll
  const fadeSections = document.querySelectorAll("section");
  fadeSections.forEach(s => {
    s.style.opacity = 0;
    s.style.transform = "translateY(12px)";
    s.style.transition = "opacity .6s ease, transform .6s ease";
  });

  const onScroll = () => {
    const topBtn = document.getElementById("backToTop");
    if (window.scrollY > 220) topBtn.style.display = "block"; else topBtn.style.display = "none";

    fadeSections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        sec.style.opacity = 1;
        sec.style.transform = "translateY(0)";
      }
    });
  };

  window.addEventListener("scroll", onScroll);
  window.addEventListener("resize", onScroll);
  onScroll();

});
