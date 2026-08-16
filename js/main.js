// Dynamic Navbar Loader
export async function loadNavbar() {
  const navContainer = document.getElementById("navbar-placeholder");
  if (!navContainer) return;
  try {
    const res = await fetch("navbar.html");
    if (res.ok) {
      navContainer.innerHTML = await res.text();
      highlightActiveLink();
    }
  } catch (err) {
    console.error("Failed to load navbar:", err);
  }
}

// Highlight current active page link
function highlightActiveLink() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll(".navbar a");
  links.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
}

// Global Intersection Observer for Scroll Animations
export function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
      }
    });
  });
  document.querySelectorAll(".animate-fade-up").forEach(el => observer.observe(el));
}

// Safe YouTube Video ID Extractor
export function extractYouTubeId(url) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

document.addEventListener("DOMContentLoaded", () => {
  loadNavbar();
  initAnimations();
});