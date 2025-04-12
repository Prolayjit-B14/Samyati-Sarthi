// packingList.js - Handles packing list generator functionality

document.addEventListener('DOMContentLoaded', function() {
    const generatePackingListBtn = document.getElementById('generatePackingList');
    const packingListResultDiv = document.getElementById('packingListResult');
    let currentDestination = '';
    let currentClimate = '';
    
    // Listen for destination updates from the main form
    document.addEventListener('destinationUpdated', function(e) {
      currentDestination = e.detail.destination;
      
      // Try to determine climate from destination
      if (currentDestination.toLowerCase().includes('bali') || 
          currentDestination.toLowerCase().includes('phuket') || 
          currentDestination.toLowerCase().includes('cancun')) {
        currentClimate = 'tropical';
      } else if (currentDestination.toLowerCase().includes('iceland') || 
                 currentDestination.toLowerCase().includes('innsbruck')) {
        currentClimate = 'cold';
      } else if (currentDestination.toLowerCase().includes('phoenix') || 
                 currentDestination.toLowerCase().includes('santa fe')) {
        currentClimate = 'desert';
      } else {
        currentClimate = 'moderate';
      }
    });
    
    generatePackingListBtn.addEventListener('click', function() {
      if (!currentDestination) {
        packingListResultDiv.innerHTML = '<p class="py-3 text-amber-600">Please complete the travel preferences form first to select a destination.</p>';
        return;
      }
      
      // Show loading state
      packingListResultDiv.innerHTML = '<div class="flex justify-center py-3"><svg class="animate-spin h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div>';
      
      // Simulate API call delay
      setTimeout(() => generatePackingList(currentClimate), 800);
    });
    
    function generatePackingList(climate) {
      // In a real app, this would call an API with the climate and destination
      // This is a simplified example with hardcoded packing lists by climate
      
      let packingHTML = `
        <div class="space-y-4">
          <h3 class="font-medium text-indigo-700">Packing List for ${currentDestination}</h3>
          
          <div>
            <h4 class="font-medium border-b border-gray-200 pb-1">Essentials (All Climates)</h4>
            <ul class="text-gray-600 grid grid-cols-2 gap-1 mt-2">
              <li>• Passport/ID</li>
              <li>• Credit/debit cards</li>
              <li>• Travel insurance</li>
              <li>• Phone charger</li>
              <li>• Medications</li>
              <li>• Toiletries</li>
              <li>• Travel adapter</li>
              <li>• First aid kit</li>
            </ul>
          </div>
      `;
      
      // Add climate-specific clothing
      packingHTML += `<div><h4 class="font-medium border-b border-gray-200 pb-1">Clothing (${climate.charAt(0).toUpperCase() + climate.slice(1)} Climate)</h4><ul class="text-gray-600 grid grid-cols-2 gap-1 mt-2">`;
      
      if (climate === 'tropical') {
        packingHTML += `
          <li>• T-shirts/tank tops</li>
          <li>• Shorts</li>
          <li>• Light dresses</li>
          <li>• Swimwear</li>
          <li>• Sandals/flip flops</li>
          <li>• Sun hat</li>
          <li>• Light rain jacket</li>
          <li>• Beach cover-up</li>
        `;
      } else if (climate === 'cold') {
        packingHTML += `
          <li>• Heavy coat/parka</li>
          <li>• Thermal base layers</li>
          <li>• Sweaters/fleece</li>
          <li>• Wool socks</li>
          <li>• Gloves/mittens</li>
          <li>• Winter hat</li>
          <li>• Scarf</li>
          <li>• Waterproof boots</li>
        `;
      } else if (climate === 'desert') {
        packingHTML += `
          <li>• Lightweight shirts</li>
          <li>• Lightweight pants</li>
          <li>• Sun hat</li>
          <li>• Bandana</li>
          <li>• Sunglasses</li>
          <li>• Light jacket (nights)</li>
          <li>• Hiking boots</li>
          <li>• Sandals</li>
        `;
      } else { // moderate
        packingHTML += `
          <li>• T-shirts</li>
          <li>• Long sleeve shirts</li>
          <li>• Pants/jeans</li>
          <li>• Light jacket</li>
          <li>• Walking shoes</li>
          <li>• Dressier outfit</li>
          <li>• Light sweater</li>
          <li>• Rain jacket</li>
        `;
      }
      
      packingHTML += '</ul></div>';
      
      // Add destination-specific items
      packingHTML += `
        <div>
          <h4 class="font-medium border-b border-gray-200 pb-1">Destination-Specific Items</h4>
          <ul class="text-gray-600 grid grid-cols-2 gap-1 mt-2">
      `;
      
      if (currentDestination.toLowerCase().includes('bali') || 
          currentDestination.toLowerCase().includes('phuket') || 
          currentDestination.toLowerCase().includes('beach')) {
        packingHTML += `
          <li>• Reef-safe sunscreen</li>
          <li>• Insect repellent</li>
          <li>• Snorkeling gear</li>
          <li>• Beach towel</li>
        `;
      } else if (currentDestination.toLowerCase().includes('iceland') || 
                 currentDestination.toLowerCase().includes('cold')) {
        packingHTML += `
          <li>• Hand/foot warmers</li>
          <li>• Waterproof gear</li>
          <li>• Thermos</li>
          <li>• Snowproof camera bag</li>
        `;
      } else if (currentDestination.toLowerCase().includes('city') || 
                 currentDestination.toLowerCase().includes('francisco')) {
        packingHTML += `
          <li>• City map/guidebook</li>
          <li>• Day bag/backpack</li>
          <li>• Portable power bank</li>
          <li>• Comfortable walking shoes</li>
        `;
      } else {
        packingHTML += `
          <li>• Guidebook</li>
          <li>• Day bag/backpack</li>
          <li>• Water bottle</li>
          <li>• Snacks</li>
        `;
      }
      
      packingHTML += '</ul></div>';
      
      // Add tech and miscellaneous
      packingHTML += `
        <div>
          <h4 class="font-medium border-b border-gray-200 pb-1">Tech & Miscellaneous</h4>
          <ul class="text-gray-600 grid grid-cols-2 gap-1 mt-2">
            <li>• Camera</li>
            <li>• E-reader/books</li>
            <li>• Headphones</li>
            <li>• Travel pillow</li>
            <li>• Reusable water bottle</li>
            <li>• Travel apps (offline)</li>
            <li>• Small backpack/day bag</li>
            <li>• Sunglasses</li>
          </ul>
        </div>
      `;
      
      packingHTML += '</div>';
      
      packingListResultDiv.innerHTML = packingHTML;
    }
  });