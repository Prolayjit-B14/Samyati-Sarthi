// Inside components/footer.js
document.addEventListener("DOMContentLoaded", function () {
  const nestedDirs = ["Site_Data", "3D_Earth_Model", "AI_Assitance","Destination","Booking","Map","Virtual_Tour","Tour_Guide","Event_Festival", "Blog","Cultural_Historical", "Forum"];
  const currentPath = decodeURIComponent(window.location.pathname); // Convert %20 to space
  let path = "Features/Footer/footer.html";

  // If current path includes any of the nested directory names, adjust the path
  for (let dir of nestedDirs) {
    if (currentPath.includes(dir)) {
      path = "../Footer/footer.html";
      break;
    }
  }

  fetch(path)
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer-container").innerHTML = data;
    })
    .catch(err => console.error("Footer load error:", err));
});

// Tech Enhanced Footer Script
document.addEventListener('DOMContentLoaded', function() {
    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
      } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
      }
    });
    
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Cookie Consent
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptCookiesBtn = document.getElementById('accept-cookies');
    const declineCookiesBtn = document.getElementById('decline-cookies');
    const customizeCookiesBtn = document.getElementById('customize-cookies');
    
    if (!localStorage.getItem('cookieConsent')) {
      setTimeout(() => {
        cookieConsent.classList.remove('hidden');
      }, 2000);
    }
    
    acceptCookiesBtn.addEventListener('click', function() {
      localStorage.setItem('cookieConsent', 'accepted');
      cookieConsent.classList.add('hidden');
      // Enable AI personalization and analytics
      console.log('Smart cookies enabled - AI personalization activated');
    });
    
    declineCookiesBtn.addEventListener('click', function() {
      localStorage.setItem('cookieConsent', 'declined');
      cookieConsent.classList.add('hidden');
      // Disable non-essential cookies
      console.log('Non-essential cookies declined - Limited functionality');
    });
    
    customizeCookiesBtn.addEventListener('click', function() {
      // In a real implementation, this would open a cookie settings modal
      alert('Cookie customization panel would open here with granular controls');
    });
    
    // Feature Card Animations
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.boxShadow = '';
      });
    });
    
    // Tech Theme Toggle (Example)
    const themeToggle = document.createElement('button');
    themeToggle.className = 'fixed bottom-6 left-6 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg z-50';
    themeToggle.innerHTML = '<i class="fas fa-magic"></i>';
    themeToggle.title = 'Toggle Tech Theme';
    document.body.appendChild(themeToggle);
    
    themeToggle.addEventListener('click', function() {
      document.body.classList.toggle('tech-theme-active');
      const isActive = document.body.classList.contains('tech-theme-active');
      localStorage.setItem('techTheme', isActive ? 'active' : 'inactive');
      
      if (isActive) {
        // Apply futuristic theme styles
        document.documentElement.style.setProperty('--primary-color', '#00f0ff');
        document.documentElement.style.setProperty('--secondary-color', '#ff00f0');
        console.log('Futuristic tech theme activated');
      } else {
        // Revert to default theme
        document.documentElement.style.removeProperty('--primary-color');
        document.documentElement.style.removeProperty('--secondary-color');
      }
    });
    
    // Check for saved theme preference
    if (localStorage.getItem('techTheme') === 'active') {
      document.body.classList.add('tech-theme-active');
      themeToggle.click(); // Trigger the theme change
    }
    
    // Animate tech badges on scroll
    const techBadges = document.querySelectorAll('.feature-card .icon-container');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transform = 'scale(1.1)';
          entry.target.style.transition = 'transform 0.5s ease, background-color 0.5s ease';
          setTimeout(() => {
            entry.target.style.transform = 'scale(1)';
          }, 500);
        }
      });
    }, { threshold: 0.1 });
    
    techBadges.forEach(badge => {
      observer.observe(badge);
    });
  });