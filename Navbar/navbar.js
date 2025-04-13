document.addEventListener("DOMContentLoaded", function () {
  let navbarPath = "Navbar/navbar.html";
  const folderKeywords = ["Site_Data", "3D_Earth_Model", "AI_Assitance","Destination","Booking","Map","Virtual_Tour","Tour_Guide","Event_Festival", "Blog","Cultural_Historical", "Forum"];
  const currentPath = decodeURIComponent(window.location.pathname);

  for (let keyword of folderKeywords) {
    if (currentPath.includes(keyword)) {
      navbarPath = "../Navbar/navbar.html";
      break;
    }
  }

  fetch(navbarPath)
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;

      // ✅ Setup scroll bar after navbar is added
      window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        const scrollProgress = document.getElementById('scroll-progress');
        if (scrollProgress) {
          scrollProgress.style.width = `${scrollPercent}%`;
        }
      });

      // ✅ Toggle mobile nav after navbar is added
      const navToggle = document.getElementById('nav-toggle');
      const navMenu = document.getElementById('mobile-menu');
      if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
          navMenu.classList.toggle('hidden');
        });
      }
    })
    .catch(error => console.error("Navbar load error:", error));
});

