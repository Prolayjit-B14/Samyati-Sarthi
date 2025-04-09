// Initialize Google Map
function initMap() {
    const defaultLocation = { lat: 28.6139, lng: 77.2090 }; // New Delhi
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: defaultLocation,
    });
  
    new google.maps.Marker({
      position: defaultLocation,
      map: map,
      title: "Start Exploring!",
    });
  }
  
  // Placeholder for AI Assistant Interaction
  function chatWithAI(userMessage) {
    // Integrate with OpenAI or custom API here
    const responseBox = document.getElementById("ai-response");
    responseBox.innerText = "AI Assistant: Thanks for your message! We're still in development mode 🚧";
  }
  