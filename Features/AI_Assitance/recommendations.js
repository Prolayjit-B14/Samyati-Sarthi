// Main function to generate recommendations
function generateRecommendations() {
    // Get form values (assuming these form elements exist elsewhere)
    const destination = document.getElementById('destination')?.value || '';
    const budget = document.getElementById('budget')?.value || 'medium';
    const duration = parseInt(document.getElementById('duration')?.value || '7');
    const interests = Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(el => el.value);
    const seasonPreference = document.getElementById('season')?.value || 'summer';
    
    // Validate inputs
    if (!destination) {
      showError("Please select a destination");
      return;
    }
    
    // Generate recommendations
    const recommendations = createPersonalizedRecommendations(destination, budget, duration, interests, seasonPreference);
    
    // Display the recommendations
    displayRecommendations(recommendations);
  }
  
  // Create personalized recommendations based on user preferences
  function createPersonalizedRecommendations(destination, budget, duration, interests, season) {
    // Sample recommendation data structure
    const recommendation = {
      destination: destination,
      headline: `Your Perfect ${duration}-Day ${capitalizeFirstLetter(destination)} Trip`,
      summary: generateSummary(destination, budget, season),
      activities: generateActivities(destination, interests, budget),
      accommodations: generateAccommodations(destination, budget),
      dining: generateDiningOptions(destination, budget),
      totalEstimatedCost: calculateEstimatedCost(destination, budget, duration),
      bestTimeToVisit: determineBestTime(destination, season)
    };
    
    return recommendation;
  }
  
  // Display recommendations in the UI
  function displayRecommendations(recommendations) {
    const recommendationContainer = document.getElementById('recommendation');
    
    const content = `
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-2xl font-bold text-indigo-800">${recommendations.headline}</h3>
          <p class="text-gray-600 mt-2">${recommendations.summary}</p>
        </div>
        
        <div class="border-t border-b border-gray-200 py-4">
          <h4 class="font-semibold text-indigo-700 mb-2">Recommended Activities</h4>
          <ul class="list-disc pl-5 text-gray-700">
            ${recommendations.activities.map(activity => `<li>${activity}</li>`).join('')}
          </ul>
        </div>
        
        <div class="border-b border-gray-200 py-4">
          <h4 class="font-semibold text-indigo-700 mb-2">Accommodations</h4>
          <ul class="list-disc pl-5 text-gray-700">
            ${recommendations.accommodations.map(accommodation => `<li>${accommodation}</li>`).join('')}
          </ul>
        </div>
        
        <div class="border-b border-gray-200 py-4">
          <h4 class="font-semibold text-indigo-700 mb-2">Dining Options</h4>
          <ul class="list-disc pl-5 text-gray-700">
            ${recommendations.dining.map(dining => `<li>${dining}</li>`).join('')}
          </ul>
        </div>
        
        <div class="grid grid-cols-2 gap-4 py-4">
          <div>
            <h4 class="font-semibold text-indigo-700 mb-2">Estimated Budget</h4>
            <p class="text-lg font-bold text-green-600">$${recommendations.totalEstimatedCost}</p>
          </div>
          <div>
            <h4 class="font-semibold text-indigo-700 mb-2">Best Time to Visit</h4>
            <p class="text-gray-700">${recommendations.bestTimeToVisit}</p>
          </div>
        </div>
        
        <div class="mt-6 flex justify-center">
          <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300" onclick="saveRecommendation()">
            Save This Itinerary
          </button>
        </div>
      </div>
    `;
    
    recommendationContainer.innerHTML = content;
  }
  
  // Helper function to show error messages
  function showError(message) {
    const recommendationContainer = document.getElementById('recommendation');
    recommendationContainer.innerHTML = `
      <div class="bg-red-50 p-4 rounded-lg text-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="text-red-700">${message}</p>
      </div>
    `;
  }
  
  // Save recommendation functionality
  function saveRecommendation() {
    alert("Your itinerary has been saved! You can access it in your account.");
  }
  
  // Helper function to capitalize first letter
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  // Generate destination summary based on preferences
  function generateSummary(destination, budget, season) {
    const summaries = {
      paris: {
        low: "Experience the magic of Paris on a budget, focusing on free attractions and local eateries.",
        medium: "Enjoy the perfect balance of iconic sights and hidden gems in the enchanting City of Light.",
        high: "Indulge in a luxurious Parisian experience with premium accommodations and exclusive activities."
      },
      tokyo: {
        low: "Discover Tokyo's vibrant culture while keeping costs low with strategic planning.",
        medium: "Explore the perfect mix of modern and traditional Japan with this balanced Tokyo itinerary.",
        high: "Experience the ultimate Tokyo adventure with high-end dining and premium experiences."
      },
      newyork: {
        low: "See the Big Apple on a budget with free attractions and affordable dining options.",
        medium: "Experience the energy of NYC with this well-balanced itinerary of must-see attractions.",
        high: "Indulge in the ultimate New York luxury experience with premium shows and fine dining."
      },
      bali: {
        low: "Discover paradise on a budget with this affordable Bali adventure.",
        medium: "Experience the perfect balance of relaxation and adventure in beautiful Bali.",
        high: "Indulge in luxury villas and exclusive experiences in this tropical paradise."
      }
    };
    
    const defaultSummary = `Discover the wonders of ${capitalizeFirstLetter(destination)} with this personalized itinerary tailored to your preferences.`;
    
    return summaries[destination.toLowerCase()]?.[budget.toLowerCase()] || defaultSummary;
  }
  
  // Generate activities based on destination and interests
  function generateActivities(destination, interests, budget) {
    const activityDatabase = {
      paris: {
        cultural: ["Visit the Louvre Museum", "Explore Montmartre", "Tour Notre-Dame Cathedral"],
        adventure: ["Climb the Eiffel Tower stairs", "Bike tour along the Seine", "Day trip to Disneyland Paris"],
        relaxation: ["Picnic in Luxembourg Gardens", "Seine River cruise", "Spa day at a Parisian hammam"],
        food: ["Cheese tasting in Le Marais", "Cooking class with a French chef", "Wine tasting in Saint-Germain"]
      },
      tokyo: {
        cultural: ["Visit Senso-ji Temple", "Tour the Imperial Palace grounds", "Experience a traditional tea ceremony"],
        adventure: ["Climb Mount Fuji (seasonal)", "Mario Kart city tour", "Visit DisneySea Theme Park"],
        relaxation: ["Relax in an onsen hot spring", "Meditate at a Buddhist temple", "Stroll through Shinjuku Gyoen"],
        food: ["Sushi making class", "Explore Tsukiji Outer Market", "Food tour in Shibuya"]
      },
      newyork: {
        cultural: ["Visit the Metropolitan Museum of Art", "Tour the Museum of Modern Art", "Walk across Brooklyn Bridge"],
        adventure: ["Helicopter tour over Manhattan", "Bike through Central Park", "Climb to the Top of the Rock"],
        relaxation: ["Picnic in Central Park", "Spa day in Manhattan", "Sunset sail around Manhattan"],
        food: ["Food tour in Greenwich Village", "Pizza tour in Brooklyn", "Visit Chelsea Market"]
      },
      bali: {
        cultural: ["Visit Uluwatu Temple", "Explore Ubud's art scene", "Attend a traditional Kecak dance"],
        adventure: ["Surf lessons in Kuta", "White water rafting", "Mount Batur sunrise trek"],
        relaxation: ["Yoga retreat in Ubud", "Balinese massage", "Beach day at Nusa Dua"],
        food: ["Balinese cooking class", "Visit Ubud food market", "Seafood dinner in Jimbaran Bay"]
      }
    };
    
    // If the destination isn't in our database, return generic activities
    if (!activityDatabase[destination.toLowerCase()]) {
      return [
        "Visit the main cultural attractions",
        "Try local cuisine at popular restaurants",
        "Explore natural landscapes and viewpoints",
        "Shop for souvenirs at local markets"
      ];
    }
    
    // Filter activities based on interests
    let activities = [];
    interests.forEach(interest => {
      const interestActivities = activityDatabase[destination.toLowerCase()][interest.toLowerCase()];
      if (interestActivities) {
        activities = [...activities, ...interestActivities];
      }
    });
    
    // If no specific interests were selected, include a mix of everything
    if (activities.length === 0) {
      Object.values(activityDatabase[destination.toLowerCase()]).forEach(categoryActivities => {
        activities.push(categoryActivities[0]); // Add the first activity from each category
      });
    }
    
    // If too many activities, limit the number based on budget
    const activityLimits = { low: 5, medium: 7, high: 10 };
    const limit = activityLimits[budget.toLowerCase()] || 5;
    
    return activities.slice(0, limit);
  }
  
  // Generate accommodation recommendations
  function generateAccommodations(destination, budget) {
    const accommodations = {
      paris: {
        low: ["Budget-friendly hostel in Montmartre", "Affordable Airbnb in the 11th arrondissement"],
        medium: ["Boutique hotel in Le Marais", "Comfortable apartment near the Eiffel Tower"],
        high: ["Luxury hotel on Champs-Élysées", "5-star experience with Seine views"]
      },
      tokyo: {
        low: ["Capsule hotel in Shinjuku", "Budget ryokan in Asakusa"],
        medium: ["Business hotel in Shibuya", "Modern apartment in Roppongi"],
        high: ["Luxury hotel in Ginza", "Traditional high-end ryokan experience"]
      },
      newyork: {
        low: ["Budget hotel in Queens", "Hostel in Manhattan's Upper West Side"],
        medium: ["Boutique hotel in Chelsea", "Comfortable apartment in Brooklyn"],
        high: ["Luxury hotel in Midtown", "Premium suite with Central Park views"]
      },
      bali: {
        low: ["Guesthouse in Kuta", "Budget villa in Ubud"],
        medium: ["Beachfront hotel in Seminyak", "Private villa with pool in Canggu"],
        high: ["Luxury resort in Nusa Dua", "Premium villa with private staff in Uluwatu"]
      }
    };
    
    // Default accommodations if destination isn't in our database
    if (!accommodations[destination.toLowerCase()]) {
      return [
        budget === 'low' ? "Budget-friendly hostels and guesthouses" : "",
        budget === 'medium' ? "Mid-range hotels and private apartments" : "",
        budget === 'high' ? "Luxury hotels and premium resorts" : "",
      ].filter(item => item !== "");
    }
    
    return accommodations[destination.toLowerCase()][budget.toLowerCase()] || ["Standard accommodations based on availability"];
  }
  
  // Generate dining recommendations
  function generateDiningOptions(destination, budget) {
    const dining = {
      paris: {
        low: ["Budget-friendly bistros in student areas", "Grab baguette sandwiches from local bakeries"],
        medium: ["Classic French bistros with prix fixe menus", "Wine and cheese tastings"],
        high: ["Michelin-starred restaurants", "Exclusive dining with Eiffel Tower views"]
      },
      tokyo: {
        low: ["Affordable ramen shops", "100-yen sushi conveyor belt restaurants"],
        medium: ["Izakaya dining experiences", "Department store food halls"],
        high: ["Michelin-starred sushi experiences", "High-end teppanyaki restaurants"]
      },
      newyork: {
        low: ["Famous pizza slices", "Ethnic eateries in Queens"],
        medium: ["Classic New York delis", "Trendy restaurants in Brooklyn"],
        high: ["Fine dining in Manhattan", "Celebrity chef restaurants"]
      },
      bali: {
        low: ["Local warungs with authentic Balinese food", "Night market food stalls"],
        medium: ["Beachfront seafood restaurants", "Farm-to-table experiences in Ubud"],
        high: ["Luxury cliff-top dining in Uluwatu", "Five-star resort restaurants"]
      }
    };
    
    // Default dining options if destination isn't in our database
    if (!dining[destination.toLowerCase()]) {
      return [
        "Sample local street food for authentic flavors",
        "Visit popular restaurants recommended by locals",
        "Experience traditional cuisine at specialty restaurants"
      ];
    }
    
    return dining[destination.toLowerCase()][budget.toLowerCase()] || ["Standard dining options based on local cuisine"];
  }
  
  // Calculate estimated cost based on destination, budget and duration
  function calculateEstimatedCost(destination, budget, duration) {
    const costPerDay = {
      paris: { low: 100, medium: 250, high: 500 },
      tokyo: { low: 80, medium: 200, high: 450 },
      newyork: { low: 120, medium: 300, high: 600 },
      bali: { low: 50, medium: 150, high: 350 }
    };
    
    const defaultCosts = { low: 75, medium: 200, high: 400 };
    
    const dailyCost = costPerDay[destination.toLowerCase()]?.[budget.toLowerCase()] || defaultCosts[budget.toLowerCase()] || 200;
    
    return (dailyCost * duration).toLocaleString();
  }
  
  // Determine best time to visit based on destination and season preference
  function determineBestTime(destination, preferredSeason) {
    const bestTimesByDestination = {
      paris: {
        spring: "April to June for comfortable weather and blooming gardens",
        summer: "June to August for festivals and outdoor dining",
        fall: "September to November for fewer crowds and beautiful foliage",
        winter: "December to February for Christmas markets and romantic ambiance"
      },
      tokyo: {
        spring: "March to May for cherry blossom season",
        summer: "June to August for festivals and outdoor activities",
        fall: "September to November for comfortable weather and autumn colors",
        winter: "December to February for winter illuminations and fewer tourists"
      },
      newyork: {
        spring: "April to June for blooming parks and moderate temperatures",
        summer: "June to August for outdoor events and rooftop bars",
        fall: "September to November for beautiful fall colors and comfortable weather",
        winter: "December to February for holiday decorations and possible snow"
      },
      bali: {
        spring: "April to June for good weather before peak season",
        summer: "June to August for dry season (peak tourist season)",
        fall: "September to November for fewer crowds and still good weather",
        winter: "December to March for lush landscapes (but with occasional rain)"
      }
    };
    
    const defaultTimes = {
      spring: "Spring offers comfortable temperatures and fewer crowds",
      summer: "Summer is perfect for outdoor activities and longer daylight hours",
      fall: "Fall features beautiful foliage and comfortable temperatures",
      winter: "Winter offers unique cultural experiences and potentially lower prices"
    };
    
    return bestTimesByDestination[destination.toLowerCase()]?.[preferredSeason.toLowerCase()] || 
           defaultTimes[preferredSeason.toLowerCase()] ||
           "Any time of year is great to visit, depending on your weather preferences";
  }
  
  // Initialize the page
  document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the generate button (assuming it exists)
    const generateButton = document.getElementById('generateButton');
    if (generateButton) {
      generateButton.addEventListener('click', generateRecommendations);
    }
    
    // Optional: Add sample data for demonstration purposes
    // Uncomment this to automatically show a sample recommendation when page loads
    /*
    setTimeout(() => {
      const sampleRecommendation = createPersonalizedRecommendations(
        'paris', 'medium', 7, ['cultural', 'food'], 'spring'
      );
      displayRecommendations(sampleRecommendation);
    }, 500);
    */
  });