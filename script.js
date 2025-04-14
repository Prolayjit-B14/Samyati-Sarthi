// Load Google Maps with API Key from config
function loadGoogleMaps() {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${CONFIG.GOOGLE_API_KEY}&callback=initMap`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

// Initialize Google Map
function initMap() {
  const defaultLocation = { lat: 28.6139, lng: 77.2090 }; // New Delhi

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: defaultLocation,
  });

  new google.maps.Marker({
    position: defaultLocation,
    map: map,
    title: "Explore New Delhi!",
  });
}

// AI Chat Placeholder
function chatWithAI(userMessage) {
  const responseBox = document.getElementById("ai-response");
  responseBox.innerText =
    "AI Assistant: Thanks for your message! We're still in development mode 🚧";
}

// Set up APIs
const apiKey = CONFIG.GOOGLE_API_KEY;
const defaultLat = 28.6139; // New Delhi
const defaultLng = 77.2090;

// Fetch Google Weather API Data
function fetchWeather(lat = defaultLat, lng = defaultLng) {
  const url = `https://weather.googleapis.com/v1/weather?location.latitude=${lat}&location.longitude=${lng}&key=${apiKey}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weather = document.getElementById("weather");
      const current = data.currentWeather || {};
      weather.innerHTML = `
        <strong>Weather:</strong> ${current.summary || "N/A"},
        ${current.temperature?.value || "--"}°C,
        Humidity: ${current.humidity?.value || "--"}%
      `;
    })
    .catch(console.error);
}

// Fetch Google Air Quality API Data
function fetchAirQuality(lat = defaultLat, lng = defaultLng) {
  const url = `https://airquality.googleapis.com/v1/currentConditions:lookup?key=${apiKey}`;
  const body = {
    location: {
      latitude: lat,
      longitude: lng,
    },
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((data) => {
      const airQuality = document.getElementById("air-quality");
      const aqi = data.indexes?.find((i) => i.code === "AQI_US");
      airQuality.innerHTML = `
        <strong>Air Quality:</strong> ${aqi?.aqi || "--"} (${aqi?.category || "N/A"})
      `;
    })
    .catch(console.error);
}

// Load Aerial View in iframe
function loadAerialView(lat = defaultLat, lng = defaultLng) {
  const iframe = document.getElementById("aerial-view");
  iframe.src = `https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=${lat},${lng}&zoom=18&maptype=satellite`;
}

// Load all API Features
function loadAPIFeatures(lat = defaultLat, lng = defaultLng) {
  fetchWeather(lat, lng);
  fetchAirQuality(lat, lng);
  loadAerialView(lat, lng);
}

// Load all on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  loadAPIFeatures();
  loadGoogleMaps(); // Load map JS after DOM is ready
});
// Get the button
let topButton = document.getElementById("topBtn");

// Show button when user scrolls down 100px
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};

// Scroll to the top smoothly when the button is clicked
topButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// Page loader
window.addEventListener('load', function() {
  const loader = document.querySelector('.loader-container');
  setTimeout(function() {
    loader.style.opacity = '0';
    setTimeout(function() {
      loader.style.display = 'none';
    }, 500);
  }, 1000);
});

// Initialize AOS animations
AOS.init({
  duration: 800,
  once: true
});

// Initialize destination slider
const destinationSwiper = new Swiper('.destinationSwiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.destinationSwiper .swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});

// Initialize testimonial slider
const testimonialSwiper = new Swiper('.testimonialSwiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.testimonialSwiper .swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});

// Mobile menu toggle
document.getElementById('mobileMenuBtn').addEventListener('click', function() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('hidden');
});

// Back to top button
window.onscroll = function() {
  const topBtn = document.getElementById('topBtn');
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    topBtn.classList.remove('hidden');
    topBtn.classList.add('flex', 'items-center', 'justify-center');
  } else {
    topBtn.classList.add('hidden');
    topBtn.classList.remove('flex');
  }
};

document.getElementById('topBtn').addEventListener('click', function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

// Counter animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 100;
    
    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

// Bar chart animation
document.head.insertAdjacentHTML("beforeend", `
  <style>
    @keyframes grow-bar {
      from { height: 0; }
      to { height: var(--target-height); }
    }
  </style>
`);

// Add animation for the bar chart
setTimeout(() => {
  const bars = document.querySelectorAll('[class*="bg-blue-500 rounded-t"]');
  bars.forEach(bar => {
    const height = bar.style.height;
    bar.style.setProperty('--target-height', height);
    bar.style.height = '0';
    
    setTimeout(() => {
      bar.style.animation = "grow-bar 1.5s ease forwards";
    }, 100);
  });
}, 1000);
