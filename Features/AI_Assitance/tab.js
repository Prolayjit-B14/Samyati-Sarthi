// tabs.js - Manages the tabs system in the right column

document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Set up tab switching
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        const tabId = this.dataset.tab;
        
        // Hide all tab contents
        tabContents.forEach(content => {
          content.classList.add('hidden');
        });
        
        // Show selected tab content
        document.getElementById(tabId).classList.remove('hidden');
        
        // Update active tab styling
        tabButtons.forEach(btn => {
          btn.classList.remove('text-indigo-700', 'bg-indigo-50', 'border-b-2', 'border-indigo-600');
          btn.classList.add('text-gray-600', 'hover:bg-gray-50');
        });
        
        this.classList.remove('text-gray-600', 'hover:bg-gray-50');
        this.classList.add('text-indigo-700', 'bg-indigo-50', 'border-b-2', 'border-indigo-600');
      });
    });
    
    // Default to first tab being active (itinerary tab)
    // No need to add code here since it's already set in the HTML
  });