// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS animations
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true
    });
  
    // Page Loader
    setTimeout(() => {
      const loader = document.querySelector('.loader-container');
      if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
          loader.style.display = 'none';
        }, 500);
      }
    }, 1500);
  
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
  
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
  
    // Search Toggle
    const searchToggle = document.getElementById('searchToggle');
    const fullScreenSearch = document.getElementById('fullScreenSearch');
    const closeSearch = document.getElementById('closeSearch');
  
    if (searchToggle && fullScreenSearch && closeSearch) {
      searchToggle.addEventListener('click', () => {
        fullScreenSearch.classList.remove('hidden');
        fullScreenSearch.querySelector('input').focus();
      });
  
      closeSearch.addEventListener('click', () => {
        fullScreenSearch.classList.add('hidden');
      });
    }
  
    // Language Selector
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
  
    if (languageBtn && languageDropdown) {
      languageBtn.addEventListener('click', () => {
        languageDropdown.classList.toggle('hidden');
      });
  
      // Close language dropdown when clicking outside
      document.addEventListener('click', (e) => {
        if (!languageBtn.contains(e.target) && !languageDropdown.contains(e.target)) {
          languageDropdown.classList.add('hidden');
        }
      });
    }
  
    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    if (scrollToTopBtn) {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
          scrollToTopBtn.classList.remove('hidden');
        } else {
          scrollToTopBtn.classList.add('hidden');
        }
      });
  
      scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  
    // Sticky Navbar
    const navbar = document.getElementById('navbar-container');
    let lastScrollTop = 0;
    
    if (navbar) {
      window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
          navbar.classList.add('navbar-scrolled');
        } else {
          navbar.classList.remove('navbar-scrolled');
        }
        
        if (scrollTop > lastScrollTop && scrollTop > 200) {
          navbar.style.transform = 'translateY(-100%)';
        } else {
          navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
      });
    }
  
    // Counter Animation
    const counters = document.querySelectorAll('.counter');
    
    if (counters.length > 0) {
      const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute('data-target'));
            let count = 0;
            const updateCounter = () => {
              const increment = target / 100;
              if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count);
                setTimeout(updateCounter, 10);
              } else {
                counter.innerText = target;
              }
            };
            updateCounter();
            observer.unobserve(counter);
          }
        });
      }, { threshold: 0.5 });
  
      counters.forEach(counter => {
        counterObserver.observe(counter);
      });
    }
  
    // Initialize Swiper sliders
    // Destination Slider
    const destinationSwiper = new Swiper('.destinationSwiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.destinationSwiper .swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-next-dest',
        prevEl: '.swiper-prev-dest'
      },
      breakpoints: {
        640: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      }
    });
  
    // Testimonial Slider
    const testimonialSwiper = new Swiper('.testimonialSwiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: '.testimonialSwiper .swiper-pagination',
        clickable: true
      },
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      }
    });
  
    // Favorite buttons on destination cards
    const favButtons = document.querySelectorAll('.destination-fav-btn');
    
    if (favButtons.length > 0) {
      favButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const icon = btn.querySelector('i');
          icon.classList.toggle('far');
          icon.classList.toggle('fas');
          icon.classList.toggle('text-red-500');
          
          // Add animation
          btn.classList.add('animate-favorite');
          setTimeout(() => {
            btn.classList.remove('animate-favorite');
          }, 500);
        });
      });
    }
  
    // Technology Accordion
    const accordionHeaders = document.querySelectorAll('.tech-accordion-header');
    
    if (accordionHeaders.length > 0) {
      accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
          const content = header.nextElementSibling;
          const icon = header.querySelector('i');
          
          // Toggle current accordion
          content.classList.toggle('hidden');
          icon.classList.toggle('rotate-180');
          
          // Close other accordions (uncomment for exclusive behavior)
          /*
          accordionHeaders.forEach(otherHeader => {
            if (otherHeader !== header) {
              const otherContent = otherHeader.nextElementSibling;
              const otherIcon = otherHeader.querySelector('i');
              otherContent.classList.add('hidden');
              otherIcon.classList.remove('rotate-180');
            }
          });
          */
        });
      });
    }
  
    // Trending Tags
    const trendingTags = document.querySelectorAll('.trending-tag');
    
    if (trendingTags.length > 0) {
      trendingTags.forEach(tag => {
        tag.addEventListener('click', (e) => {
          e.preventDefault();
          trendingTags.forEach(t => t.classList.remove('active'));
          tag.classList.add('active');
        });
      });
    }
  
    // 3D Earth Globe Simulation
    const earthContainer = document.querySelector('.earth-globe');
    
    if (earthContainer && window.THREE) {
      // Basic Three.js setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, earthContainer.offsetWidth / earthContainer.offsetHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      
      renderer.setSize(earthContainer.offsetWidth, earthContainer.offsetHeight);
      earthContainer.appendChild(renderer.domElement);
      
      // Create Earth sphere
      const geometry = new THREE.SphereGeometry(5, 32, 32);
      const texture = new THREE.TextureLoader().load('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg');
      const material = new THREE.MeshPhongMaterial({ 
        map: texture,
        shininess: 15 
      });
      const earth = new THREE.Mesh(geometry, material);
      scene.add(earth);
      
      // Add ambient and directional light
      const ambientLight = new THREE.AmbientLight(0x404040, 1);
      scene.add(ambientLight);
      
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 3, 5);
      scene.add(directionalLight);
      
      camera.position.z = 10;
      
      // Earth rotation animation
      const animate = function() {
        requestAnimationFrame(animate);
        earth.rotation.y += 0.001;
        renderer.render(scene, camera);
      };
      
      animate();
      
      // Earth controls
      const zoomIn = document.querySelector('.earth-control-btn[title="Zoom In"]');
      const zoomOut = document.querySelector('.earth-control-btn[title="Zoom Out"]');
      const resetView = document.querySelector('.earth-control-btn[title="Reset View"]');
      
      if (zoomIn && zoomOut && resetView) {
        zoomIn.addEventListener('click', () => {
          if (camera.position.z > 6) camera.position.z -= 0.5;
        });
        
        zoomOut.addEventListener('click', () => {
          if (camera.position.z < 15) camera.position.z += 0.5;
        });
        
        resetView.addEventListener('click', () => {
          camera.position.z = 10;
        });
      }
      
      // Handle window resize
      window.addEventListener('resize', () => {
        camera.aspect = earthContainer.offsetWidth / earthContainer.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(earthContainer.offsetWidth, earthContainer.offsetHeight);
      });
    }
  
    // Location Marker Hover Effect
    const locationMarkers = document.querySelectorAll('.location-marker');
    
    if (locationMarkers.length > 0) {
      locationMarkers.forEach(marker => {
        marker.addEventListener('mouseenter', () => {
          marker.querySelector('.location-popup').style.display = 'block';
        });
        
        marker.addEventListener('mouseleave', () => {
          marker.querySelector('.location-popup').style.display = 'none';
        });
      });
    }
  
    // Form Submission with basic validation
    const forms = document.querySelectorAll('form');
    
    if (forms.length > 0) {
      forms.forEach(form => {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          
          // Basic validation
          let valid = true;
          const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="date"], select');
          
          inputs.forEach(input => {
            if (!input.value.trim()) {
              valid = false;
              input.classList.add('error');
              
              input.addEventListener('input', () => {
                input.classList.remove('error');
              }, { once: true });
            }
          });
          
          if (valid) {
            // Show success message or redirect
            alert('Thank you! Your form has been submitted successfully.');
            form.reset();
          } else {
            alert('Please fill in all required fields.');
          }
        });
      });
    }
  
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    if (navLinks.length > 0) {
      navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          const targetId = link.getAttribute('href');
          
          if (targetId.startsWith('#') && targetId !== '#') {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
              const navbarHeight = navbar ? navbar.offsetHeight : 0;
              const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
              
              window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
              });
              
              // Close mobile menu if open
              if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
              }
            }
          }
        });
      });
    }
  });