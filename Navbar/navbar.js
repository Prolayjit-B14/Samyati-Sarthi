document.addEventListener("DOMContentLoaded", function () {
  let navbarPath = "";

  // Dynamically detect the correct relative path
  if (window.location.pathname.includes("Site%20Data") || window.location.pathname.includes("Site Data")) {
    navbarPath = "../Navbar/navbar.html";
  } else {
    navbarPath = "Navbar/navbar.html";
  }

  fetch(navbarPath)
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;
    })
    .catch(error => console.error("Navbar load error:", error));
});

        // Setup scroll bar after navbar is added
        window.addEventListener('scroll', () => {
          const scrollTop = window.scrollY;
          const docHeight = document.body.scrollHeight - window.innerHeight;
          const scrollPercent = (scrollTop / docHeight) * 100;
          document.getElementById('scroll-progress').style.width = `${scrollPercent}%`;
        });
  
        // Toggle mobile nav
        document.getElementById('nav-toggle').addEventListener('click', () => {
          document.getElementById('mobile-menu').classList.toggle('hidden');
        });

  