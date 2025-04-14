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

// Mobile Nav Toggle
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Dynamic Navbar Loader
  let navbarPath = "Features/Navbar/navbar.html";
  const folderKeywords = [
    "Site_Data", "3D_Earth_Model", "AI_Assitance", "Destination", "Booking", "Map", "Virtual_Tour",
    "Tour_Guide", "Event_Festival", "Blog", "Cultural_Historical", "Forum"
  ];
  const currentPath = decodeURIComponent(window.location.pathname);

  for (let keyword of folderKeywords) {
    if (currentPath.includes(keyword)) {
      navbarPath = "Features/Navbar/navbar.html";
      break;
    }
  }

  fetch(navbarPath)
    .then(response => response.text())
    .then(data => {
      const navbarContainer = document.getElementById("navbar-container");
      if (navbarContainer) {
        navbarContainer.innerHTML = data;
      }
    })
    .catch(error => console.error("Error loading navbar:", error));
});
