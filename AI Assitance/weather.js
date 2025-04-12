// weather.js - Handles weather information functionality
document.addEventListener('DOMContentLoaded', function() {
    const weatherResultDiv = document.getElementById('weatherResult');
    const weatherTabButton = document.querySelector('[data-tab="weatherTab"]');
    let currentDestination = '';
    
    // Listen for destination updates from the main form
    document.addEventListener('destinationUpdated', function(e) {
      currentDestination = e.detail.destination;
      
      // Auto-update weather info when destination changes
      if (currentDestination) {
        updateWeatherInfo(currentDestination);
      }
    });
    
    // Also update weather when tab is clicked (in case it wasn't loaded before)
    weatherTabButton.addEventListener('click', function() {
      if (currentDestination) {
        updateWeatherInfo(currentDestination);
      }
    });
    
    function updateWeatherInfo(destination) {
      // Show loading state
      weatherResultDiv.innerHTML = '<div class="flex justify-center py-3"><svg class="animate-spin h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div>';
      
      // Simulate API call delay
      setTimeout(() => showWeatherInfo(destination), 800);
    }
    
    function showWeatherInfo(destination) {
      // In a real app, this would call a weather API with the destination
      // This is a simplified example with hardcoded weather info for common destinations
      
      let weatherHTML = '';
      destination = destination.toLowerCase();
      
      if (destination.includes('bali')) {
        weatherHTML = getBaliWeather();
      } else if (destination.includes('paris') || destination.includes('france')) {
        weatherHTML = getParisWeather();
      } else if (destination.includes('tokyo') || destination.includes('japan')) {
        weatherHTML = getTokyoWeather();
      } else if (destination.includes('new york')) {
        weatherHTML = getNewYorkWeather();
      } else if (destination.includes('london') || destination.includes('uk')) {
        weatherHTML = getLondonWeather();
      } else {
        // Generic weather info for unknown destinations
        weatherHTML = getGenericWeather(destination);
      }
      
      weatherResultDiv.innerHTML = weatherHTML;
      
      // Initialize any tooltips or interactive elements if needed
      initWeatherInteractivity();
    }
    
    function getBaliWeather() {
      return `
        <div class="space-y-4">
          <h3 class="font-medium text-indigo-700">Climate in Bali, Indonesia</h3>
          <p class="text-gray-700">Bali has a tropical climate with year-round warm temperatures and two distinct seasons:</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4 class="font-medium text-blue-700">Dry Season (April-September)</h4>
              <ul class="text-gray-600 space-y-1 mt-2">
                <li>• Average temperature: 27-30°C (80-86°F)</li>
                <li>• Low humidity, sunny days</li>
                <li>• Minimal rainfall</li>
                <li>• Best time for outdoor activities</li>
              </ul>
            </div>
            <div class="bg-blue-50 p-3 rounded">
              <h4 class="font-medium text-blue-700">Wet Season (October-March)</h4>
              <ul class="text-gray-600 space-y-1 mt-2">
                <li>• Average temperature: 26-29°C (78-84°F)</li>
                <li>• Higher humidity</li>
                <li>• Short, heavy rainfall (usually afternoons)</li>
                <li>• Lush green landscapes</li>
              </ul>
            </div>
          </div>
          <p class="text-gray-700 text-sm">The water temperature remains pleasant year-round at 27-29°C (80-84°F).</p>
        </div>
      `;
    }
    
    function getParisWeather() {
      return `
        <div class="space-y-4">
          <h3 class="font-medium text-indigo-700">Climate in Paris, France</h3>
          <p class="text-gray-700">Paris has a temperate oceanic climate with four distinct seasons:</p>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="bg-blue-50 p-3 rounded">
              <h4 class="font-medium text-blue-700">Spring (March-May)</h4>
              <ul class="text-gray-600 space-y-1 mt-2">
                <li>• Average temperature: 7-18°C (45-64°F)</li>
                <li>• Blooming gardens, occasional showers</li>
                <li>• Moderate rainfall</li>
              </ul>
            </div>
            <div class="bg-blue-50 p-3 rounded">
              <h4 class="font-medium text-blue-700">Summer (June-August)</h4>
              <ul class="text-gray-600 space-y-1 mt-2">
                <li>• Average temperature: 15-25°C (59-77°F)</li>
                <li>• Long daylight hours</li>
                <li>• Occasional heatwaves</li>
              </ul>
            </div>
            <div class="bg-blue-50 p-3 rounded">
              <h4 class="font-medium text-blue-700">Fall (September-November)</h4>
              <ul class="text-gray-600 space-y-1 mt-2">
                <li>• Average temperature: 7-21°C (45-70°F)</li>
                <li>• Beautiful foliage, crisp air</li>
                <li>• Increasing rainfall</li>
              </ul>
            </div>
            <div class="bg-blue-50 p-3 rounded">
              <h4 class="font-medium text-blue-700">Winter (December-February)</h4>
              <ul class="text-gray-600 space-y-1 mt-2">
                <li>• Average temperature: 3-8°C (37-46°F)</li>
                <li>• Gray skies, occasional frost</li>
                <li>• Rare snowfall</li>
              </ul>
            </div>
          </div>
          <p class="text-gray-700 text-sm">Best times to visit: Late spring (May-June) and early fall (September) for pleasant temperatures and fewer crowds.</p>
        </div>
      `;
    }
    
    function getTokyoWeather() {
      return `
        <div class="space-y-4">
          <h3 class="font-medium text-indigo-700">Climate in Tokyo, Japan</h3>
          <p class="text-gray-700">Tokyo has a humid subtropical climate with distinct seasons:</p>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="bg-blue-50 p-3 rounded">
              <h4 class="font-medium text-blue-700">Spring (March-May)</h4>
              <ul class="text-gray-600 space-y-1 mt-2">
                <li>• Average temperature: 9-21°C (48-70°F)</li>
                <li>• Cherry blossom season (late March-early April)</li>
                <li>• Mild and pleasant</li>
              </ul>
            </div>
            <div class="bg-blue-50 p-3 rounded">
              <h4 class="font-medium text-blue-700">Summer (June-August)</h4>
              <ul class="text-gray-600 space-y-1 mt-2">
                <li>• Average temperature: 20-31°C (68-88°F)</li>
                <li>• Hot and humid</li>
                <li>• Rainy season in June</li>
              </ul>
            </div>
            <div class="bg-blue-50 p-3 rounded">
              <h4 class="font-medium text-blue-700">Fall (September-November)</h4>
              <ul class="text-gray-600 space-y-1 mt-2">
                <li>• Average temperature: 14-26°C (57-79°F)</li>
                <li>• Colorful autumn foliage</li>
                <li>• Comfortable temperatures</li>
              </ul>
            </div>
            <div class="bg-blue-50 p-3 rounded">
              <h4 class="font-medium text-blue-700">Winter (December-February)</h4>
              <ul class="text-gray-600 space-y-1 mt-2">
                <li>• Average temperature: 2-12°C (36-54°F)</li>
                <li>• Cold and dry</li>
                <li>• Occasional snowfall</li>
              </ul>
            </div>
          </div>
          <p class="text-gray-700 text-sm">Best times to visit: Spring (March-May) for cherry blossoms and fall (October-November) for autumn colors.</p>
        </div>
      `;
    }
    
    function getNewYorkWeather() {
      return `
        <div class="space-y-4">
          <h3 class="font-medium text-indigo-700">Climate in New York City, USA</h3>
          <p class="text-gray-700">New York City has a humid continental climate with four distinct seasons:</p>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="bg-blue-50 p-3 rounded">
              <h4 class="font-medium text-blue-700">Spring (March-May)</h4>
              <ul class="text-gray-600 space-y-1 mt-2">
                <li>• Average temperature: 5-22°C (41-72°F)</li>
                <li>• Unpredictable, variable weather</li>
                <li>• Cherry blossoms in April</li>
              </ul>
            </div>
            <div class="bg-blue-50 p-3 rounded">
              <h4 class="font-medium text-blue-700">Summer (June-August)</h4>
              <ul class="text-gray-600 space-y-1 mt-2">
                <li>• Average temperature: 18-30°C (64-86°F)</li>
                <li>• Hot and humid</li>
                <li>• Occasional thunderstorms</li>
              </ul>
            </div>
            <div class="bg-blue-50 p-3 rounded">
              <h4 class="font-medium text-blue-700">Fall (September-November)</h4>
              <ul class="text-gray-600 space-y-1 mt-2">
                <li>• Average temperature: 7-23°C (45-73°F)</li>
                <li>• Colorful foliage in Central Park</li>
                <li>• Mild and pleasant</li>
              </ul>
            </div>
            <div class="bg-blue-50 p-3 rounded">
              <h4 class="font-medium text-blue-700">Winter (December-February)</h4>
              <ul class="text-gray-600 space-y-1 mt-2">
                <li>• Average temperature: -3-7°C (27-45°F)</li>
                <li>• Cold with snow</li>
                <li>• Occasional blizzards</li>
              </ul>
            </div>
          </div>
          <p class="text-gray-700 text-sm">Best times to visit: Late spring (May) and early fall (September-October) for pleasant temperatures and outdoor activities.</p>
        </div>
      `;
    }
    
    function getLondonWeather() {
      return `
        <div class="space-y-4">
          <h3 class="font-medium text-indigo-700">Climate in London, UK</h3>
          <p class="text-gray-700">London has a temperate oceanic climate with mild temperatures year-round:</p>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="bg-blue-50 p-3 rounded">
              <h4 class="font-medium text-blue-700">Spring (March-May)</h4>
              <ul class="text-gray-600 space-y-1 mt-2">
                <li>• Average temperature: 5-17°C (41-63°F)</li>
                <li>• Blooming parks and gardens</li>
                <li>• Occasional showers</li>
              </ul>
            </div>
            <div class="bg-blue-50 p-3 rounded">
              <h4 class="font-medium text-blue-700">Summer (June-August)</h4>
              <ul class="text-gray-600 space-y-1 mt-2">
                <li>• Average temperature: 14-23°C (57-73°F)</li>
                <li>• Long daylight hours</li>
                <li>• Mild with occasional warm spells</li>
              </ul>
            </div>
            <div class="bg-blue-50 p-3 rounded">
              <h4 class="font-medium text-blue-700">Fall (September-November)</h4>
              <ul class="text-gray-600 space-y-1 mt-2">
                <li>• Average temperature: 8-19°C (46-66°F)</li>
                <li>• Golden autumn colors</li>
                <li>• Increasing rainfall</li>
              </ul>
            </div>
            <div class="bg-blue-50 p-3 rounded">
              <h4 class="font-medium text-blue-700">Winter (December-February)</h4>
              <ul class="text-gray-600 space-y-1 mt-2">
                <li>• Average temperature: 2-9°C (36-48°F)</li>
                <li>• Chilly and damp</li>
                <li>• Occasional frost, rare snow</li>
              </ul>
            </div>
          </div>
          <p class="text-gray-700 text-sm">Best times to visit: Late spring and summer (May-August) for the most pleasant weather and outdoor events.</p>
        </div>
      `;
    }
    
    function getGenericWeather(destination) {
      // Clean up destination name for display
      let displayName = destination.split(',')[0];
      displayName = displayName.trim().replace(/\b\w/g, l => l.toUpperCase());
      
      return `
        <div class="text-center py-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-indigo-200 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 class="font-medium text-indigo-700">Weather for ${displayName}</h3>
          <p class="text-gray-600 mt-2">Detailed weather information not available for this destination.</p>
          <div class="mt-4">
            <button id="requestWeatherInfo" class="text-indigo-600 text-sm underline hover:text-indigo-800">
              Request weather information
            </button>
          </div>
        </div>
      `;
    }
    
    function initWeatherInteractivity() {
      // Add event listeners for any interactive elements
      const requestButton = document.getElementById('requestWeatherInfo');
      if (requestButton) {
        requestButton.addEventListener('click', function() {
          alert('Thank you for your request! We\'ll add weather information for this destination soon.');
        });
      }
      
      // Add any other interactive functionality here
    }
  });