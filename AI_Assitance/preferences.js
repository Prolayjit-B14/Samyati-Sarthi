// preferenceForm.js - Handles the travel preferences form

document.addEventListener('DOMContentLoaded', function() {
    const preferenceForm = document.getElementById('preferenceForm');
    const recommendationDiv = document.getElementById('recommendation');
  
    preferenceForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Collect form data
      const destinationType = document.getElementById('destinationType').value;
      const climate = document.getElementById('climate').value;
      const duration = document.getElementById('duration').value;
      const travelWith = document.getElementById('travelWith').value;
      
      // Get selected activities
      const activities = [];
      document.querySelectorAll('input[name="activity"]:checked').forEach(checkbox => {
        activities.push(checkbox.value);
      });
      
      // Get budget
      let budget = '';
      document.querySelectorAll('input[name="budget"]').forEach(radio => {
        if (radio.checked) {
          budget = radio.value;
        }
      });
      
      // Get dates
      const startDate = document.getElementById('startDate').value;
      const endDate = document.getElementById('endDate').value;
      
      // Get specific destination if any
      const specificDestination = document.getElementById('specificDestination').value;
      
      // Generate recommendation based on preferences
      generateRecommendation({
        destinationType,
        climate,
        duration,
        travelWith,
        activities,
        budget,
        startDate,
        endDate,
        specificDestination
      });
    });
  
    function generateRecommendation(preferences) {
      // This would typically involve an API call or complex logic
      // For demo purposes, we'll generate a simple recommendation
      
      let recommendationHTML = '<div class="space-y-4">';
      
      // Generate destination recommendations based on preferences
      if (preferences.specificDestination) {
        recommendationHTML += `<h3 class="text-lg font-semibold text-indigo-700">Destination: ${preferences.specificDestination}</h3>`;
      } else {
        let destinations = [];
        
        // Example logic for suggesting destinations
        if (preferences.climate === 'tropical' && preferences.destinationType === 'international') {
          destinations = ['Bali, Indonesia', 'Phuket, Thailand', 'Cancún, Mexico'];
        } else if (preferences.climate === 'cold' && preferences.destinationType === 'international') {
          destinations = ['Reykjavik, Iceland', 'Innsbruck, Austria', 'Queenstown, New Zealand'];
        } else if (preferences.climate === 'desert' && preferences.destinationType === 'domestic') {
          destinations = ['Phoenix, Arizona', 'Palm Springs, California', 'Santa Fe, New Mexico'];
        } else {
          destinations = ['San Francisco, California', 'Boston, Massachusetts', 'Charleston, South Carolina'];
        }
        
        recommendationHTML += `
          <h3 class="text-lg font-semibold text-indigo-700">Recommended Destinations</h3>
          <ul class="space-y-1 pl-5 list-disc">
            ${destinations.map(dest => `<li>${dest}</li>`).join('')}
          </ul>
        `;
      }
      
      // Add recommendations based on activities
      if (preferences.activities.length > 0) {
        recommendationHTML += `
          <h3 class="text-lg font-semibold text-indigo-700">Suggested Activities</h3>
          <ul class="space-y-1 pl-5 list-disc">
        `;
        
        if (preferences.activities.includes('adventure')) {
          recommendationHTML += '<li>Hiking trails and outdoor adventures</li>';
        }
        if (preferences.activities.includes('relaxation')) {
          recommendationHTML += '<li>Spa experiences and beach relaxation</li>';
        }
        if (preferences.activities.includes('culture')) {
          recommendationHTML += '<li>Museum tours and historical landmarks</li>';
        }
        if (preferences.activities.includes('wildlife')) {
          recommendationHTML += '<li>Wildlife safaris and nature reserves</li>';
        }
        if (preferences.activities.includes('foodie')) {
          recommendationHTML += '<li>Culinary tours and cooking classes</li>';
        }
        if (preferences.activities.includes('photography')) {
          recommendationHTML += '<li>Scenic viewpoints and photography hotspots</li>';
        }
        
        recommendationHTML += '</ul>';
      }
      
      // Add accommodation recommendations based on budget
      recommendationHTML += `
        <h3 class="text-lg font-semibold text-indigo-700">Accommodation Recommendations</h3>
        <p class="text-gray-700">
      `;
      
      if (preferences.budget === 'low') {
        recommendationHTML += 'Consider hostels, budget hotels, or vacation rentals to maximize your budget.';
      } else if (preferences.budget === 'medium') {
        recommendationHTML += 'Look for 3-4 star hotels, boutique accommodations, or well-reviewed Airbnb options.';
      } else if (preferences.budget === 'high') {
        recommendationHTML += 'Treat yourself to luxury resorts, 5-star hotels, or premium villa rentals for the ultimate experience.';
      } else {
        recommendationHTML += 'Various accommodations are available to suit your needs.';
      }
      
      recommendationHTML += '</p>';
      
      // Add travel tips based on who they're traveling with
      if (preferences.travelWith) {
        recommendationHTML += `
          <h3 class="text-lg font-semibold text-indigo-700">Travel Tips</h3>
          <p class="text-gray-700">
        `;
        
        if (preferences.travelWith === 'solo') {
          recommendationHTML += 'Consider staying at social hostels or joining group tours to meet fellow travelers.';
        } else if (preferences.travelWith === 'couple') {
          recommendationHTML += 'Look for romantic dining spots and couples activities like sunset cruises.';
        } else if (preferences.travelWith === 'family') {
          recommendationHTML += 'Choose accommodations with kid-friendly amenities and plan for family-oriented activities.';
        } else if (preferences.travelWith === 'friends') {
          recommendationHTML += 'Opt for vacation rentals that can accommodate your group and look for shared experiences.';
        }
        
        recommendationHTML += '</p>';
      }
      
      recommendationHTML += '</div>';
      
      // Update the recommendation div
      recommendationDiv.innerHTML = recommendationHTML;
      
      // Also update the helper tools with the new destination
      document.dispatchEvent(new CustomEvent('destinationUpdated', { 
        detail: { 
          destination: preferences.specificDestination || 
                      (preferences.climate === 'tropical' ? 'Bali, Indonesia' : 
                       preferences.climate === 'cold' ? 'Reykjavik, Iceland' : 
                       'San Francisco, California') 
        } 
      }));
    }
  });