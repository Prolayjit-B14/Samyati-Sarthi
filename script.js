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
  
