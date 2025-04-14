// Main JavaScript for the Cultural & Historical Sites page

document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initFAQs();
    initAnimations();
    loadDynamicContent();
    initSiteCardHovers();
    
    // Scroll to section when clicking navigation links
    initSmoothScrolling();
    
    // Load navbar and footer components
    loadNavbar();
    loadFooter();
  });
  
  // Initialize FAQ accordion functionality
  function initFAQs() {
    const faqToggles = document.querySelectorAll('.faq-toggle');
    
    faqToggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        const icon = toggle.querySelector('i');
        
        // Toggle active class
        content.classList.toggle('hidden');
        content.classList.toggle('active');
        icon.classList.toggle('rotate-180');
        
        // Close other FAQs
        faqToggles.forEach(otherToggle => {
          if (otherToggle !== toggle) {
            const otherContent = otherToggle.nextElementSibling;
            const otherIcon = otherToggle.querySelector('i');
            
            otherContent.classList.add('hidden');
            otherContent.classList.remove('active');
            otherIcon.classList.remove('rotate-180');
          }
        });
      });
    });
  }
  
  // Initialize scroll animations
  function initAnimations() {
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
      const animateItems = document.querySelectorAll('.featured-site, section h2, .grid');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1
      });
      
      animateItems.forEach(item => {
        observer.observe(item);
      });
    }
  }
  
  // Initialize smooth scrolling for navigation links
  function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        e.preventDefault();
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for navbar height
            behavior: 'smooth'
          });
        }
      });
    });
  }
  
  // Initialize site card hover effects
  function initSiteCardHovers() {
    const siteCards = document.querySelectorAll('.featured-site');
    
    siteCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      });
    });
  }
  
  // Load content dynamically (placeholder for real API calls)
  function loadDynamicContent() {
    // This would normally fetch data from an API
    console.log('Loading dynamic content...');
    
    // Simulate map loading
    const mapElement = document.getElementById('cultural-map');
    if (mapElement) {
      setTimeout(() => {
        mapElement.innerHTML = `
          <div class="text-center">
            <i class="fas fa-map-marked-alt text-blue-600 text-5xl mb-4"></i>
            <p class="text-gray-700">Map data loaded successfully</p>
          </div>
        `;
      }, 1500);
    }
  }
