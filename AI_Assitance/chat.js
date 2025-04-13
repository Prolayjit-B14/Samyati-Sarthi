// Initialize chat functionality when document is loaded
document.addEventListener('DOMContentLoaded', () => {
    const chatInput = document.getElementById('chatInput');
    const sendChat = document.getElementById('sendChat');
    const chatHistory = document.getElementById('chatHistory');
    
    // Typing indicator element
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'mb-3';
    typingIndicator.innerHTML = `
      <p class="bg-indigo-100 text-gray-700 p-3 rounded-lg inline-block typing-indicator">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </p>
    `;
    
    // Add CSS for typing indicator
    const style = document.createElement('style');
    style.textContent = `
      .typing-indicator {
        display: flex;
        align-items: center;
        gap: 4px;
        min-width: 60px;
      }
      .dot {
        width: 8px;
        height: 8px;
        background-color: #6366f1;
        border-radius: 50%;
        animation: bounce 1.4s infinite ease-in-out;
      }
      .dot:nth-child(1) { animation-delay: -0.32s; }
      .dot:nth-child(2) { animation-delay: -0.16s; }
      @keyframes bounce {
        0%, 80%, 100% { transform: scale(0); }
        40% { transform: scale(1); }
      }
    `;
    document.head.appendChild(style);
  
    // More comprehensive travel knowledge base
    const travelKnowledge = {
      destinations: {
        paris: {
          description: "Paris, the City of Light, is the capital of France known for its art, culture, and cuisine.",
          attractions: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral", "Montmartre", "Champs-Élysées"],
          food: "Croissants, baguettes, macarons, coq au vin, and plenty of wine and cheese.",
          tips: "Best time to visit is April-June or September-October. The Paris Museum Pass can save you money if visiting multiple attractions.",
          language: "French is the official language. Basic phrases like 'Bonjour' (hello) and 'Merci' (thank you) are appreciated."
        },
        tokyo: {
          description: "Tokyo is Japan's busy capital that mixes ultramodern with traditional.",
          attractions: ["Shibuya Crossing", "Tokyo Skytree", "Senso-ji Temple", "Meiji Shrine", "Shinjuku Gyoen"],
          food: "Sushi, ramen, tempura, yakitori, and matcha-flavored treats.",
          tips: "Get a Suica or Pasmo card for easy travel on public transportation. Tokyo is extremely safe but can be crowded.",
          language: "Japanese is the main language. Learning 'Arigatou' (thank you) and 'Sumimasen' (excuse me/sorry) is helpful."
        },
        nyc: {
          description: "New York City is a global metropolis known for its iconic skyline and cultural diversity.",
          attractions: ["Statue of Liberty", "Central Park", "Empire State Building", "Broadway", "Times Square"],
          food: "Pizza, bagels, cheesecake, hot dogs, and diverse international cuisine.",
          tips: "The subway is the best way to get around. Purchase a MetroCard for public transportation.",
          language: "English is the primary language, but you'll hear languages from around the world."
        },
        rome: {
          description: "Rome, Italy's capital, is a sprawling city with nearly 3,000 years of globally influential art, architecture, and culture.",
          attractions: ["Colosseum", "Vatican City", "Trevi Fountain", "Roman Forum", "Pantheon"],
          food: "Pasta carbonara, cacio e pepe, pizza, gelato, and espresso.",
          tips: "Visit major attractions early in the morning or late afternoon to avoid crowds. Buy tickets online in advance.",
          language: "Italian is the official language. 'Grazie' (thank you) and 'Per favore' (please) are useful phrases."
        },
        bali: {
          description: "Bali is an Indonesian island known for its forested volcanic mountains, beaches, and coral reefs.",
          attractions: ["Ubud Monkey Forest", "Uluwatu Temple", "Tegallalang Rice Terraces", "Mount Batur", "Kuta Beach"],
          food: "Nasi goreng, satay, babi guling (suckling pig), and fresh seafood.",
          tips: "Rent a scooter to explore but be careful with traffic. Always negotiate prices at markets.",
          language: "Balinese and Indonesian are spoken. 'Terima kasih' means thank you."
        }
      },
      general_tips: [
        "Always keep digital copies of your important documents in cloud storage you can access anywhere.",
        "Notify your bank and credit card companies about your travel plans to avoid blocked transactions.",
        "Consider getting travel insurance, especially for longer trips or adventure activities.",
        "Pack a basic first aid kit with essentials like pain relievers, bandages, and any prescription medications.",
        "Download offline maps of your destination before your trip.",
        "Learn a few basic phrases in the local language - locals appreciate the effort!",
        "Research local customs and etiquette before arriving to avoid cultural misunderstandings.",
        "Use a money belt or anti-theft bag in crowded tourist areas.",
        "Check if your destination requires any special vaccinations or visa requirements well in advance."
      ],
      transportation_tips: [
        "Public transportation is often the most economical and environmentally friendly way to explore cities.",
        "Many major cities offer tourist passes that include unlimited public transportation and attraction discounts.",
        "For long journeys between cities, overnight trains can save on accommodation costs.",
        "Ride-sharing apps are available in many countries and can be more predictable than local taxis.",
        "Consider renting bicycles in bike-friendly cities for a fun and healthy way to sightsee."
      ],
      packing_tips: [
        "Pack versatile clothing items that can be layered and mixed-matched.",
        "Roll clothes instead of folding to save space and reduce wrinkles.",
        "Bring a universal power adapter if traveling internationally.",
        "Pack a reusable water bottle that you can refill (check if tap water is safe at your destination).",
        "Consider packing a portable charger for your electronic devices."
      ]
    };
  
    // Function to add a message to the chat history
    function addMessage(text, isUser = false) {
      const messageDiv = document.createElement('div');
      messageDiv.className = 'mb-3 ' + (isUser ? 'text-right' : '');
  
      const messageP = document.createElement('p');
      messageP.className = isUser 
        ? 'bg-purple-600 text-white p-3 rounded-lg inline-block max-w-3xl'
        : 'bg-indigo-100 text-gray-700 p-3 rounded-lg inline-block max-w-3xl';
      messageP.textContent = text;
  
      messageDiv.appendChild(messageP);
      chatHistory.appendChild(messageDiv);
      
      // Auto scroll to bottom of chat history
      chatHistory.scrollTop = chatHistory.scrollHeight;
    }
  
    // Show typing indicator
    function showTypingIndicator() {
      chatHistory.appendChild(typingIndicator);
      chatHistory.scrollTop = chatHistory.scrollHeight;
    }
  
    // Hide typing indicator
    function hideTypingIndicator() {
      if (typingIndicator.parentNode === chatHistory) {
        chatHistory.removeChild(typingIndicator);
      }
    }
  
    // Process user input and generate response with advanced natural language understanding
    function processMessage(userInput) {
      // Convert to lowercase for easier matching
      const input = userInput.toLowerCase();
      
      // Show typing indicator to simulate the assistant thinking
      showTypingIndicator();
      
      // Generate appropriate response based on user input with a delay to simulate typing
      setTimeout(() => {
        hideTypingIndicator();
        
        let response = '';
        
        // Check for greetings
        if (input.match(/\b(hi|hello|hey|howdy|greetings)\b/)) {
          response = "Hello! I'm your travel assistant. Where are you planning to visit?";
        }
        // Check for thank you
        else if (input.match(/\b(thanks|thank you|thx)\b/)) {
          response = "You're welcome! Feel free to ask if you have any other travel questions.";
        }
        // Check for goodbye
        else if (input.match(/\b(bye|goodbye|see you|farewell)\b/)) {
          response = "Goodbye! Have a wonderful trip and safe travels!";
        }
        // Check for specific destinations
        else if (input.includes('paris') || input.includes('france')) {
          if (input.includes('food') || input.includes('eat')) {
            response = `In Paris, you must try: ${travelKnowledge.destinations.paris.food}`;
          } else if (input.includes('see') || input.includes('attraction') || input.includes('visit')) {
            response = `Top attractions in Paris include: ${travelKnowledge.destinations.paris.attractions.join(', ')}.`;
          } else if (input.includes('language') || input.includes('speak')) {
            response = travelKnowledge.destinations.paris.language;
          } else {
            response = `${travelKnowledge.destinations.paris.description} ${travelKnowledge.destinations.paris.tips}`;
          }
        }
        else if (input.includes('tokyo') || input.includes('japan')) {
          if (input.includes('food') || input.includes('eat')) {
            response = `In Tokyo, you must try: ${travelKnowledge.destinations.tokyo.food}`;
          } else if (input.includes('see') || input.includes('attraction') || input.includes('visit')) {
            response = `Top attractions in Tokyo include: ${travelKnowledge.destinations.tokyo.attractions.join(', ')}.`;
          } else if (input.includes('language') || input.includes('speak')) {
            response = travelKnowledge.destinations.tokyo.language;
          } else {
            response = `${travelKnowledge.destinations.tokyo.description} ${travelKnowledge.destinations.tokyo.tips}`;
          }
        }
        else if (input.includes('new york') || input.includes('nyc')) {
          if (input.includes('food') || input.includes('eat')) {
            response = `In NYC, you must try: ${travelKnowledge.destinations.nyc.food}`;
          } else if (input.includes('see') || input.includes('attraction') || input.includes('visit')) {
            response = `Top attractions in NYC include: ${travelKnowledge.destinations.nyc.attractions.join(', ')}.`;
          } else if (input.includes('language') || input.includes('speak')) {
            response = travelKnowledge.destinations.nyc.language;
          } else {
            response = `${travelKnowledge.destinations.nyc.description} ${travelKnowledge.destinations.nyc.tips}`;
          }
        }
        else if (input.includes('rome') || input.includes('italy')) {
          if (input.includes('food') || input.includes('eat')) {
            response = `In Rome, you must try: ${travelKnowledge.destinations.rome.food}`;
          } else if (input.includes('see') || input.includes('attraction') || input.includes('visit')) {
            response = `Top attractions in Rome include: ${travelKnowledge.destinations.rome.attractions.join(', ')}.`;
          } else if (input.includes('language') || input.includes('speak')) {
            response = travelKnowledge.destinations.rome.language;
          } else {
            response = `${travelKnowledge.destinations.rome.description} ${travelKnowledge.destinations.rome.tips}`;
          }
        }
        else if (input.includes('bali') || input.includes('indonesia')) {
          if (input.includes('food') || input.includes('eat')) {
            response = `In Bali, you must try: ${travelKnowledge.destinations.bali.food}`;
          } else if (input.includes('see') || input.includes('attraction') || input.includes('visit')) {
            response = `Top attractions in Bali include: ${travelKnowledge.destinations.bali.attractions.join(', ')}.`;
          } else if (input.includes('language') || input.includes('speak')) {
            response = travelKnowledge.destinations.bali.language;
          } else {
            response = `${travelKnowledge.destinations.bali.description} ${travelKnowledge.destinations.bali.tips}`;
          }
        }
        // Check for general tips requests
        else if (input.includes('tip') || input.includes('advice')) {
          if (input.includes('pack')) {
            const randomTip = travelKnowledge.packing_tips[Math.floor(Math.random() * travelKnowledge.packing_tips.length)];
            response = `Packing tip: ${randomTip}`;
          } else if (input.includes('transport') || input.includes('travel') || input.includes('get around')) {
            const randomTip = travelKnowledge.transportation_tips[Math.floor(Math.random() * travelKnowledge.transportation_tips.length)];
            response = `Transportation tip: ${randomTip}`;
          } else {
            const randomTip = travelKnowledge.general_tips[Math.floor(Math.random() * travelKnowledge.general_tips.length)];
            response = `Travel tip: ${randomTip}`;
          }
        }
        // Check for destination recommendations
        else if (input.includes('where') && (input.includes('go') || input.includes('visit') || input.includes('recommend'))) {
          const destinations = Object.keys(travelKnowledge.destinations);
          const randomDest = destinations[Math.floor(Math.random() * destinations.length)];
          const dest = travelKnowledge.destinations[randomDest];
          response = `You might enjoy ${randomDest.charAt(0).toUpperCase() + randomDest.slice(1)}! ${dest.description} Popular attractions include ${dest.attractions.slice(0, 3).join(', ')}.`;
        }
        // Default response
        else {
          response = "I'm not sure I understand. You can ask me about specific destinations like Paris, Tokyo, NYC, Rome, or Bali. Or ask for general travel tips, packing advice, or transportation suggestions!";
        }
        
        addMessage(response);
      }, 800 + Math.random() * 800); // Random delay between 800-1600ms to simulate typing
    }
  
    // Event listener for send button
    sendChat.addEventListener('click', () => {
      if (chatInput.value.trim() !== '') {
        const userMessage = chatInput.value;
        addMessage(userMessage, true);
        processMessage(userMessage);
        chatInput.value = '';
      }
    });
    
    // Event listener for Enter key press
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && chatInput.value.trim() !== '') {
        const userMessage = chatInput.value;
        addMessage(userMessage, true);
        processMessage(userMessage);
        chatInput.value = '';
      }
    });
  
    // Focus input on load
    chatInput.focus();
  });