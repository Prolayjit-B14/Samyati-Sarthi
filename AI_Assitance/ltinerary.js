// itinerary.js - Handles itinerary generator functionality

document.addEventListener('DOMContentLoaded', function() {
    const generateItineraryBtn = document.getElementById('generateItinerary');
    const itineraryResultDiv = document.getElementById('itineraryResult');
    let currentDestination = '';
    
    // Listen for destination updates from the main form
    document.addEventListener('destinationUpdated', function(e) {
      currentDestination = e.detail.destination;
    });
    
    generateItineraryBtn.addEventListener('click', function() {
      if (!currentDestination) {
        itineraryResultDiv.innerHTML = '<p class="py-3 text-amber-600">Please complete the travel preferences form first to select a destination.</p>';
        return;
      }
      
      // Show loading state
      itineraryResultDiv.innerHTML = '<div class="flex justify-center py-3"><svg class="animate-spin h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div>';
      
      // Simulate API call delay
      setTimeout(() => generateItinerary(currentDestination), 800);
    });
    
    function generateItinerary(destination) {
      // In a real app, this would call an API with the destination
      // This is a simplified example with hardcoded itineraries
      
      let itineraryHTML = '';
      
      if (destination.toLowerCase().includes('bali')) {
        itineraryHTML = `
          <div class="space-y-4">
            <h3 class="font-medium text-indigo-700">5-Day Bali Itinerary</h3>
            
            <div class="border-l-2 border-indigo-200 pl-4">
              <h4 class="font-medium">Day 1: Arrival & Ubud</h4>
              <ul class="text-gray-600 space-y-1">
                <li>• Morning: Arrive at Ngurah Rai International Airport</li>
                <li>• Afternoon: Check into accommodation in Ubud</li>
                <li>• Evening: Dinner at a local warung (restaurant)</li>
              </ul>
            </div>
            
            <div class="border-l-2 border-indigo-200 pl-4">
              <h4 class="font-medium">Day 2: Ubud Exploration</h4>
              <ul class="text-gray-600 space-y-1">
                <li>• Morning: Visit Sacred Monkey Forest Sanctuary</li>
                <li>• Afternoon: Explore Ubud Palace and markets</li>
                <li>• Evening: Attend a traditional Balinese dance performance</li>
              </ul>
            </div>
            
            <div class="border-l-2 border-indigo-200 pl-4">
              <h4 class="font-medium">Day 3: Temples & Rice Terraces</h4>
              <ul class="text-gray-600 space-y-1">
                <li>• Morning: Visit Tegalalang Rice Terraces</li>
                <li>• Afternoon: Explore Tirta Empul Temple</li>
                <li>• Evening: Sunset at Tanah Lot Temple</li>
              </ul>
            </div>
            
            <div class="border-l-2 border-indigo-200 pl-4">
              <h4 class="font-medium">Day 4: Beach Day</h4>
              <ul class="text-gray-600 space-y-1">
                <li>• Morning: Travel to Seminyak or Kuta Beach</li>
                <li>• Afternoon: Beach time and water activities</li>
                <li>• Evening: Seafood dinner on the beach</li>
              </ul>
            </div>
            
            <div class="border-l-2 border-indigo-200 pl-4">
              <h4 class="font-medium">Day 5: Departure</h4>
              <ul class="text-gray-600 space-y-1">
                <li>• Morning: Last-minute shopping</li>
                <li>• Afternoon: Spa treatment</li>
                <li>• Evening: Departure from Ngurah Rai International Airport</li>
              </ul>
            </div>
          </div>
        `;
      } else if (destination.toLowerCase().includes('iceland') || destination.toLowerCase().includes('reykjavik')) {
        itineraryHTML = `
          <div class="space-y-4">
            <h3 class="font-medium text-indigo-700">5-Day Iceland Itinerary</h3>
            
            <div class="border-l-2 border-indigo-200 pl-4">
              <h4 class="font-medium">Day 1: Arrival & Reykjavik</h4>
              <ul class="text-gray-600 space-y-1">
                <li>• Morning: Arrive at Keflavik International Airport</li>
                <li>• Afternoon: Explore Reykjavik city center</li>
                <li>• Evening: Dinner at a local restaurant</li>
              </ul>
            </div>
            
            <div class="border-l-2 border-indigo-200 pl-4">
              <h4 class="font-medium">Day 2: Golden Circle</h4>
              <ul class="text-gray-600 space-y-1">
                <li>• Morning: Visit Thingvellir National Park</li>
                <li>• Afternoon: Geysir geothermal area & Gullfoss waterfall</li>
                <li>• Evening: Return to Reykjavik</li>
              </ul>
            </div>
            
            <div class="border-l-2 border-indigo-200 pl-4">
              <h4 class="font-medium">Day 3: South Coast</h4>
              <ul class="text-gray-600 space-y-1">
                <li>• Morning: Seljalandsfoss & Skógafoss waterfalls</li>
                <li>• Afternoon: Black sand beach at Reynisfjara</li>
                <li>• Evening: Stay in Vik area</li>
              </ul>
            </div>
            
            <div class="border-l-2 border-indigo-200 pl-4">
              <h4 class="font-medium">Day 4: Blue Lagoon</h4>
              <ul class="text-gray-600 space-y-1">
                <li>• Morning: Return to Reykjavik area</li>
                <li>• Afternoon: Relax at the Blue Lagoon</li>
                <li>• Evening: Farewell dinner in Reykjavik</li>
              </ul>
            </div>
            
            <div class="border-l-2 border-indigo-200 pl-4">
              <h4 class="font-medium">Day 5: Departure</h4>
              <ul class="text-gray-600 space-y-1">
                <li>• Morning: Last-minute shopping in Reykjavik</li>
                <li>• Afternoon: Transfer to Keflavik Airport</li>
                <li>• Evening: Departure</li>
              </ul>
            </div>
          </div>
        `;
      } else if (destination.toLowerCase().includes('san francisco')) {
        itineraryHTML = `
          <div class="space-y-4">
            <h3 class="font-medium text-indigo-700">5-Day San Francisco Itinerary</h3>
            
            <div class="border-l-2 border-indigo-200 pl-4">
              <h4 class="font-medium">Day 1: Arrival & Downtown</h4>
              <ul class="text-gray-600 space-y-1">
                <li>• Morning: Arrive at San Francisco International Airport</li>
                <li>• Afternoon: Check into hotel, explore Union Square</li>
                <li>• Evening: Dinner in Chinatown</li>
              </ul>
            </div>
            
            <div class="border-l-2 border-indigo-200 pl-4">
              <h4 class="font-medium">Day 2: Golden Gate & Parks</h4>
              <ul class="text-gray-600 space-y-1">
                <li>• Morning: Visit Golden Gate Bridge</li>
                <li>• Afternoon: Explore Golden Gate Park</li>
                <li>• Evening: Sunset at Twin Peaks</li>
              </ul>
            </div>
            
            <div class="border-l-2 border-indigo-200 pl-4">
              <h4 class="font-medium">Day 3: Alcatraz & Fisherman's Wharf</h4>
              <ul class="text-gray-600 space-y-1">
                <li>• Morning: Ferry to Alcatraz Island</li>
                <li>• Afternoon: Fisherman's Wharf & Pier 39</li>
                <li>• Evening: Seafood dinner at the wharf</li>
              </ul>
            </div>
            
            <div class="border-l-2 border-indigo-200 pl-4">
              <h4 class="font-medium">Day 4: Local Neighborhoods</h4>
              <ul class="text-gray-600 space-y-1">
                <li>• Morning: Explore Mission District</li>
                <li>• Afternoon: Visit Haight-Ashbury</li>
                <li>• Evening: Dinner in North Beach (Little Italy)</li>
              </ul>
            </div>
            
            <div class="border-l-2 border-indigo-200 pl-4">
              <h4 class="font-medium">Day 5: Departure</h4>
              <ul class="text-gray-600 space-y-1">
                <li>• Morning: Cable car ride</li>
                <li>• Afternoon: Last-minute shopping</li>
                <li>• Evening: Departure from SFO</li>
              </ul>
            </div>
          </div>
        `;
      } else {
        itineraryHTML = `
          <div class="p-3 bg-indigo-50 rounded text-indigo-700">
            <p>We'll create a custom itinerary for ${destination}. This would typically be generated based on the destination's top attractions and your preferences.</p>
            <p class="mt-2">For this demo, we've shown example itineraries for Bali, Iceland, and San Francisco.</p>
          </div>
        `;
      }
      
      itineraryResultDiv.innerHTML = itineraryHTML;
    }
  });