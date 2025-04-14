// Scroll Progress Bar
window.addEventListener("scroll", () => {
  const scrollProgress = document.getElementById("scroll-progress");
  const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  if (scrollProgress) {
    scrollProgress.style.width = scrolled + "%";
  }
});

// Mobile Nav Toggle + Navbar Load
document.addEventListener("DOMContentLoaded", () => {
  // Mobile Nav Toggle
  const navToggle = document.getElementById("nav-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Load Navbar
  const currentPath = decodeURIComponent(window.location.pathname);
  let navbarPath = "Features/Navbar/navbar.html";

  const nestedDirs = [
    "Site_Data", "3D_Earth_Model", "AI_Assitance", "Destination",
    "Booking", "Map", "Virtual_Tour", "Tour_Guide", "Event_Festival",
    "Blog", "Cultural_Historical", "Forum"
  ];

  for (let keyword of nestedDirs) {
    if (currentPath.includes(keyword)) {
      navbarPath = "../Navbar/navbar.html";
      break;
    }
  }

  fetch(navbarPath)
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;
    })
    .catch(err => console.error("Navbar load error:", err));
});
