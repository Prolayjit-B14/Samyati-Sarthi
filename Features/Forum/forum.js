// ─────────────────────────────────────────────
// ✨ Travel Forum JavaScript - Enhanced Version
// ─────────────────────────────────────────────

// Global data store for forum discussions
const forumData = {
    // Mock data for each tab category
    recent: [
      {
        id: 'r1',
        avatar: '/api/placeholder/50/50',
        username: 'Sarah Johnson',
        timePosted: '2 hours ago',
        title: 'Best hidden gems in Lisbon? Planning a week trip!',
        content: "I'm planning to spend a week in Lisbon next month and want to explore beyond the typical tourist spots. Any recommendations for hidden gems, local restaurants, or unique experiences?",
        tags: ['Portugal', 'Lisbon', 'Europe', 'City Break'],
        replies: 24,
        views: 142,
        likes: 18
      },
      {
        id: 'r2',
        avatar: '/api/placeholder/50/50',
        username: 'Mark Thompson',
        timePosted: 'Yesterday',
        title: 'Solo female travel safety tips for Southeast Asia',
        content: "My sister is planning her first solo trip to Thailand, Vietnam, and Cambodia. Would appreciate any safety tips, recommended accommodations, or general advice from experienced female travelers!",
        tags: ['Solo Travel', 'Southeast Asia', 'Safety', 'Female Travel'],
        replies: 36,
        views: 231,
        likes: 42
      },
      {
        id: 'r3',
        avatar: '/api/placeholder/50/50',
        username: 'David Chen',
        timePosted: '2 days ago',
        title: 'Must-have apps for travel in 2025?',
        content: "I'm updating my travel toolkit for an upcoming world trip. What are your essential travel apps in 2025? Looking for recommendations on navigation, translation, booking, budgeting, and anything else that's made your travels smoother!",
        tags: ['Travel Apps', 'Technology', 'Travel Tips'],
        replies: 52,
        views: 418,
        likes: 64
      },
      {
        id: 'r4',
        avatar: '/api/placeholder/50/50',
        username: 'Elena Rodriguez',
        timePosted: '3 days ago',
        title: 'Traveling with food allergies in Japan - Help!',
        content: "I have severe peanut and shellfish allergies and am planning a 2-week trip to Japan. Does anyone have experience navigating food allergies there? Looking for translation cards, restaurant recommendations, and general advice.",
        tags: ['Japan', 'Food Allergies', 'Asia', 'Food'],
        replies: 28,
        views: 196,
        likes: 32
      },
      {
        id: 'r5',
        avatar: '/api/placeholder/50/50',
        username: 'Michael Okoye',
        timePosted: '4 days ago',
        title: 'Road trip route suggestions for Southern Africa',
        content: "Planning a 3-week road trip through Southern Africa (South Africa, Namibia, Botswana, Zimbabwe). Anyone done a similar route who can share their itinerary, must-see places, and driving tips?",
        tags: ['Africa', 'Road Trip', 'Safari', 'Adventure'],
        replies: 19,
        views: 173,
        likes: 24
      }
    ],
    popular: [
      {
        id: 'p1',
        avatar: '/api/placeholder/50/50',
        username: 'Jen Williams',
        timePosted: '1 day ago',
        title: 'Which European cities are actually worth visiting in 2025?',
        content: "With overtourism being such a big issue, I'm trying to plan a 3-week Europe trip that avoids the most crowded places. Which cities do you think still offer authentic experiences without the massive crowds?",
        tags: ['Europe', 'Overtourism', 'City Break', 'Sustainable Travel'],
        replies: 89,
        views: 742,
        likes: 103
      },
      {
        id: 'p2',
        avatar: '/api/placeholder/50/50',
        username: 'Thomas Lee',
        timePosted: '3 days ago',
        title: 'New Zealand for 2 weeks - North or South Island?',
        content: "I only have 2 weeks for my New Zealand trip and can't decide whether to focus on the North or South Island. Which would you recommend for a first-time visitor who loves both hiking and cultural experiences?",
        tags: ['New Zealand', 'Oceania', 'Hiking', 'Nature'],
        replies: 67,
        views: 531,
        likes: 88
      },
      {
        id: 'p3',
        avatar: '/api/placeholder/50/50',
        username: 'Sophia Cheng',
        timePosted: '5 days ago',
        title: 'Best digital nomad hubs in 2025?',
        content: "After 5 years of working remotely around Southeast Asia, I'm looking to explore new regions. Where are the emerging digital nomad hubs with good internet, affordable living, and vibrant communities?",
        tags: ['Digital Nomad', 'Remote Work', 'Coworking', 'Long-term Travel'],
        replies: 114,
        views: 892,
        likes: 156
      },
      {
        id: 'p4',
        avatar: '/api/placeholder/50/50',
        username: 'Miguel Santos',
        timePosted: '6 days ago',
        title: 'Genuine cultural experiences in Mexico beyond the tourist zones',
        content: "I've visited Cancun and Tulum before, but now I want to experience the 'real' Mexico. Looking for recommendations on smaller towns, cultural events, and authentic experiences away from the typical tourist path.",
        tags: ['Mexico', 'Cultural Travel', 'Off the Beaten Path', 'Latin America'],
        replies: 76,
        views: 604,
        likes: 95
      },
      {
        id: 'p5',
        avatar: '/api/placeholder/50/50',
        username: 'Emma Wilson',
        timePosted: '1 week ago',
        title: 'Travel photographers: What gear are you carrying in 2025?',
        content: "As a travel photographer, I'm always trying to balance quality vs. weight/space in my bag. What camera setup and accessories are you all using these days? Has anyone switched fully to computational photography on smartphones?",
        tags: ['Photography', 'Travel Gear', 'Technology'],
        replies: 93,
        views: 712,
        likes: 87
      }
    ],
    unanswered: [
      {
        id: 'u1',
        avatar: '/api/placeholder/50/50',
        username: 'Alex Morgan',
        timePosted: '5 hours ago',
        title: 'Has anyone visited Antarctica on a budget?',
        content: "Antarctica has always been my dream destination, but the cruises are so expensive. Has anyone found more affordable ways to visit? Maybe working on a research station or volunteering opportunities?",
        tags: ['Antarctica', 'Budget Travel', 'Adventure'],
        replies: 0,
        views: 42,
        likes: 7
      },
      {
        id: 'u2',
        avatar: '/api/placeholder/50/50',
        username: 'Olivia Kim',
        timePosted: '1 day ago',
        title: 'Tips for traveling with elderly parents who have mobility issues?',
        content: "I'm planning to take my parents (both in their 70s with some mobility challenges) to Europe next summer. Looking for advice on accommodations, transportation, and destinations that would be enjoyable but not too challenging.",
        tags: ['Family Travel', 'Accessible Travel', 'Europe', 'Senior Travel'],
        replies: 0,
        views: 35,
        likes: 8
      },
      {
        id: 'u3',
        avatar: '/api/placeholder/50/50',
        username: 'Hassan Ahmed',
        timePosted: '2 days ago',
        title: 'Recommendations for Halal-friendly destinations in East Asia?',
        content: "I'm looking to explore East Asia (Japan, South Korea, Taiwan) but concerned about finding halal food options. Has anyone traveled there with similar dietary requirements? Any specific recommendations for restaurants or areas?",
        tags: ['Halal Travel', 'East Asia', 'Food', 'Religious Travel'],
        replies: 0,
        views: 28,
        likes: 5
      },
      {
        id: 'u4',
        avatar: '/api/placeholder/50/50',
        username: 'Natalie Green',
        timePosted: '3 days ago',
        title: 'Working holiday visa for Americans - best options in 2025?',
        content: "I'm an American graphic designer looking to live abroad for a year while working. Which countries currently offer the best working holiday visa options for US citizens? Australia and New Zealand seem common, but are there others?",
        tags: ['Working Holiday', 'Visas', 'Expat Life', 'Remote Work'],
        replies: 0,
        views: 63,
        likes: 12
      },
      {
        id: 'u5',
        avatar: '/api/placeholder/50/50',
        username: 'Ryan Patel',
        timePosted: '4 days ago',
        title: 'Travel insurance that covers extreme sports?',
        content: "I'm planning a trip focused on paragliding, rock climbing, and scuba diving. Most travel insurance policies I've looked at exclude 'extreme sports'. Has anyone found good comprehensive coverage for adventure activities?",
        tags: ['Travel Insurance', 'Adventure Travel', 'Extreme Sports', 'Safety'],
        replies: 0,
        views: 47,
        likes: 9
      }
    ],
    myTopics: [
      {
        id: 'm1',
        avatar: '/api/placeholder/50/50',
        username: 'You',
        timePosted: '1 week ago',
        title: 'Planning 3 months in Southeast Asia - itinerary feedback?',
        content: "I've drafted a rough 3-month itinerary for Thailand, Vietnam, Cambodia, and Indonesia. Would appreciate any feedback, especially on whether I'm trying to cover too much or if I'm missing any must-see spots!",
        tags: ['Southeast Asia', 'Long-term Travel', 'Itinerary Help'],
        replies: 14,
        views: 156,
        likes: 22
      },
      {
        id: 'm2',
        avatar: '/api/placeholder/50/50',
        username: 'You',
        timePosted: '3 weeks ago',
        title: 'Best travel credit cards with no foreign transaction fees?',
        content: "I'm looking to get a new credit card specifically for international travel. Priority would be no foreign transaction fees, good exchange rates, and travel-related perks. Any recommendations based on recent experiences?",
        tags: ['Travel Finance', 'Credit Cards', 'Money Tips'],
        replies: 23,
        views: 278,
        likes: 34
      },
      {
        id: 'm3',
        avatar: '/api/placeholder/50/50',
        username: 'You',
        timePosted: '2 months ago',
        title: 'How do you back up photos while traveling without a laptop?',
        content: "I'm planning a 6-month trip and don't want to bring my laptop, but I'll be taking lots of photos. How do you all back up your photos securely without a computer? Looking for lightweight, reliable solutions.",
        tags: ['Photography', 'Technology', 'Travel Gear', 'Data Storage'],
        replies: 31,
        views: 342,
        likes: 47
      }
    ]
  };
  
  // Pagination data - 5 pages of mock content for each tab
  const paginationData = {
    recent: Array(5).fill().map((_, pageIndex) => 
      Array(5).fill().map((_, itemIndex) => ({
        id: `r-page${pageIndex+1}-${itemIndex}`,
        avatar: '/api/placeholder/50/50',
        username: `User ${pageIndex*5 + itemIndex + 1}`,
        timePosted: `${Math.floor(Math.random() * 7) + 1} days ago`,
        title: `Recent discussion title ${pageIndex*5 + itemIndex + 1}`,
        content: `This is sample content for page ${pageIndex+1}, item ${itemIndex+1} in the Recent tab. It would contain a travel question or experience.`,
        tags: ['Sample', 'Travel', `Tag${pageIndex+1}`],
        replies: Math.floor(Math.random() * 30),
        views: Math.floor(Math.random() * 300) + 100,
        likes: Math.floor(Math.random() * 50) + 5
      }))
    ),
    popular: Array(5).fill().map((_, pageIndex) => 
      Array(5).fill().map((_, itemIndex) => ({
        id: `p-page${pageIndex+1}-${itemIndex}`,
        avatar: '/api/placeholder/50/50',
        username: `User ${pageIndex*5 + itemIndex + 1}`,
        timePosted: `${Math.floor(Math.random() * 14) + 1} days ago`,
        title: `Popular discussion title ${pageIndex*5 + itemIndex + 1}`,
        content: `This is sample content for page ${pageIndex+1}, item ${itemIndex+1} in the Popular tab. It would contain a widely discussed travel topic.`,
        tags: ['Trending', 'Popular', `Tag${pageIndex+1}`],
        replies: Math.floor(Math.random() * 100) + 50,
        views: Math.floor(Math.random() * 1000) + 500,
        likes: Math.floor(Math.random() * 200) + 50
      }))
    ),
    unanswered: Array(5).fill().map((_, pageIndex) => 
      Array(5).fill().map((_, itemIndex) => ({
        id: `u-page${pageIndex+1}-${itemIndex}`,
        avatar: '/api/placeholder/50/50',
        username: `User ${pageIndex*5 + itemIndex + 1}`,
        timePosted: `${Math.floor(Math.random() * 5) + 1} days ago`,
        title: `Unanswered question ${pageIndex*5 + itemIndex + 1}`,
        content: `This is an unanswered question for page ${pageIndex+1}, item ${itemIndex+1}. Help this traveler get some responses!`,
        tags: ['Question', 'Help Needed', `Category${pageIndex+1}`],
        replies: 0,
        views: Math.floor(Math.random() * 100) + 10,
        likes: Math.floor(Math.random() * 15)
      }))
    ),
    myTopics: Array(5).fill().map((_, pageIndex) => 
      Array(5).fill().map((_, itemIndex) => ({
        id: `m-page${pageIndex+1}-${itemIndex}`,
        avatar: '/api/placeholder/50/50',
        username: 'You',
        timePosted: `${Math.floor(Math.random() * 30) + 1} days ago`,
        title: `My topic ${pageIndex*5 + itemIndex + 1}`,
        content: `This is one of your discussion topics for page ${pageIndex+1}, item ${itemIndex+1}. You posted this to get travel advice or share experiences.`,
        tags: ['My Post', 'Travel', `Topic${pageIndex+1}`],
        replies: Math.floor(Math.random() * 40) + 5,
        views: Math.floor(Math.random() * 200) + 50,
        likes: Math.floor(Math.random() * 30) + 5
      }))
    )
  };
  
  // Current state
  let currentState = {
    activeTab: 'recent',
    currentPage: 1,
    userPosts: [] // Will store user-created discussions
  };
  
  // ✅ 1. Generate HTML for a single discussion
  function generateDiscussionHTML(discussion) {
    return `
      <div class="discussion-item" data-id="${discussion.id}">
        <div class="user-avatar">
          <img src="${discussion.avatar}" alt="User Avatar">
        </div>
        <div class="discussion-content">
          <div class="discussion-header">
            <span class="user-name">${discussion.username}</span>
            <span class="post-time">${discussion.timePosted}</span>
          </div>
          <h3 class="discussion-title"><a href="#">${discussion.title}</a></h3>
          <p>${discussion.content}</p>
          <div class="tags">
            ${discussion.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
          <div class="discussion-meta">
            <div class="meta-item">
              <span class="meta-icon">💬</span> ${discussion.replies} replies
            </div>
            <div class="meta-item">
              <span class="meta-icon">👁️</span> ${discussion.views} views
            </div>
            <div class="meta-item like-button" data-likes="${discussion.likes}">
              <span class="meta-icon">❤️</span> ${discussion.likes} likes
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
  // ✅ 2. Display discussions for the current tab and page
  function displayDiscussions() {
    const discussionsContainer = document.querySelector('.discussions');
    if (!discussionsContainer) return;
    
    // Add loading state
    discussionsContainer.innerHTML = '<div class="loading">Loading discussions...</div>';
    
    // Get the right data based on tab and page
    let dataToDisplay;
    
    // Check if this is page 1 (show default discussions)
    if (currentState.currentPage === 1) {
      dataToDisplay = forumData[currentState.activeTab];
    } else {
      // Get paginated data (page 2-5)
      const pageIndex = currentState.currentPage - 1;
      dataToDisplay = paginationData[currentState.activeTab][pageIndex];
    }
    
    // For "My Topics" tab, add any user-created posts if we're on page 1
    if (currentState.activeTab === 'myTopics' && currentState.currentPage === 1) {
      dataToDisplay = [...currentState.userPosts, ...dataToDisplay];
    }
    
    // Short timeout to simulate loading
    setTimeout(() => {
      discussionsContainer.innerHTML = dataToDisplay.map(discussion => 
        generateDiscussionHTML(discussion)
      ).join('');
      
      // Add interactivity to like buttons
      attachLikeButtonHandlers();
    }, 300);
  }
  
  // ✅ 3. Handle tab switching
  function handleTabs() {
    const tabs = document.querySelectorAll('.tab');
    
    if (!tabs.length) return;
    
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        // Get tab name
        const tabTypes = ['recent', 'popular', 'unanswered', 'myTopics'];
        const tabName = tabTypes[index];
        
        // Deactivate previous tab
        document.querySelector('.tab.active')?.classList.remove('active');
        tab.classList.add('active');
        
        // Update state and display
        currentState.activeTab = tabName;
        currentState.currentPage = 1; // Reset to page 1 when changing tabs
        
        // Update pagination display
        updatePaginationDisplay();
        
        // Display discussions for this tab
        displayDiscussions();
      });
    });
  }
  
  // ✅ 4. Handle pagination
  function handlePagination() {
    const paginationContainer = document.querySelector('.pagination');
    
    if (!paginationContainer) return;
    
    paginationContainer.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Only handle clicks on page-link elements
      if (!e.target.classList.contains('page-link')) return;
      
      const pageText = e.target.textContent;
      
      // Handle "Next" button
      if (pageText === 'Next') {
        const currentPage = currentState.currentPage;
        if (currentPage < 5) { // We have 5 pages total
          currentState.currentPage = currentPage + 1;
        }
      } else {
        // Handle numbered pages
        currentState.currentPage = parseInt(pageText);
      }
      
      // Update pagination display
      updatePaginationDisplay();
      
      // Display discussions for the new page
      displayDiscussions();
      
      // Scroll to top of discussions
      document.querySelector('.discussions').scrollIntoView({ behavior: 'smooth' });
    });
  }
  
  // ✅ 5. Update pagination display based on current page
  function updatePaginationDisplay() {
    const pageLinks = document.querySelectorAll('.page-link');
    
    if (!pageLinks.length) return;
    
    // Remove active class from all
    pageLinks.forEach(link => {
      link.classList.remove('active');
    });
    
    // Add active class to current page
    // Find the link with text matching current page number
    const currentPageLink = Array.from(pageLinks).find(
      link => link.textContent === currentState.currentPage.toString()
    );
    
    if (currentPageLink) {
      currentPageLink.classList.add('active');
    }
  }
  
  // ✅ 6. Handle likes
  function attachLikeButtonHandlers() {
    const likeButtons = document.querySelectorAll('.like-button');
    
    likeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const currentLikes = parseInt(button.getAttribute('data-likes'));
        const newLikes = button.classList.contains('liked') ? currentLikes - 1 : currentLikes + 1;
        
        // Toggle liked state
        button.classList.toggle('liked');
        
        // Update display and data attribute
        button.setAttribute('data-likes', newLikes);
        button.innerHTML = `<span class="meta-icon">❤️</span> ${newLikes} likes`;
        
        // Add heart animation
        const heart = button.querySelector('.meta-icon');
        heart.style.transition = 'transform 0.3s';
        heart.style.transform = 'scale(1.3)';
        setTimeout(() => {
          heart.style.transform = 'scale(1)';
        }, 300);
      });
    });
  }
  
  // ✅ 7. Handle action buttons (New Discussion / Find Travel Buddy)
  function handleActionButtons() {
    const newDiscussionBtn = document.querySelector('.btn-primary');
    const travelBuddyBtn = document.querySelector('.btn-accent');
    
    if (newDiscussionBtn) {
      newDiscussionBtn.addEventListener('click', () => {
        showNewDiscussionModal();
      });
    }
    
    if (travelBuddyBtn) {
      travelBuddyBtn.addEventListener('click', () => {
        showTravelBuddyModal();
      });
    }
  }
  
  // ✅ 8. New Discussion Modal
  function showNewDiscussionModal() {
    const modal = createModalElement();
    
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h2>Start a New Discussion</h2>
          <span class="close-modal">&times;</span>
        </div>
        <div class="modal-body">
          <form id="discussion-form">
            <div class="form-group">
              <label for="discussion-title">Title</label>
              <input type="text" id="discussion-title" placeholder="Give your discussion a title" required>
            </div>
            <div class="form-group">
              <label for="discussion-content">Content</label>
              <textarea id="discussion-content" rows="6" placeholder="What would you like to discuss?" required></textarea>
            </div>
            <div class="form-group">
              <label for="discussion-tags">Tags (comma separated)</label>
              <input type="text" id="discussion-tags" placeholder="e.g., Europe, Budget Travel, Food">
            </div>
            <button type="submit" class="btn btn-primary btn-block">Post Discussion</button>
          </form>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    addModalStyles();
    
    // Handle form submission
    const form = modal.querySelector('#discussion-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form values
      const title = document.getElementById('discussion-title').value;
      const content = document.getElementById('discussion-content').value;
      const tags = document.getElementById('discussion-tags').value
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);
      
      // Create new discussion
      const newDiscussion = {
        id: `user-${Date.now()}`,
        avatar: '/api/placeholder/50/50',
        username: 'You',
        timePosted: 'Just now',
        title: title,
        content: content,
        tags: tags.length > 0 ? tags : ['General'],
        replies: 0,
        views: 1,
        likes: 0
      };
      
      // Add to user posts
      currentState.userPosts.unshift(newDiscussion);
      
      // Switch to My Topics tab and refresh
      const myTopicsTab = document.querySelectorAll('.tab')[3]; // 4th tab
      myTopicsTab.click();
      
      // Show success message
      showSuccessMessage(modal, 'Your discussion has been posted!');
    });
    
    // Close button and click outside
    setupModalClose(modal);
  }
  
  // ✅ 9. Travel Buddy Modal
  function showTravelBuddyModal() {
    const modal = createModalElement();
    
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h2>Find a Travel Buddy</h2>
          <span class="close-modal">&times;</span>
        </div>
        <div class="modal-body">
          <form id="buddy-form">
            <div class="form-group">
              <label for="destination">Where are you going?</label>
              <input type="text" id="destination" placeholder="Country, city, or region" required>
            </div>
            <div class="form-group">
              <label for="travel-dates">When are you traveling?</label>
              <div class="date-inputs">
                <input type="date" id="date-from" required>
                <span>to</span>
                <input type="date" id="date-to" required>
              </div>
            </div>
            <div class="form-group">
              <label for="interests">Travel interests</label>
              <select id="interests" multiple>
                <option value="adventure">Adventure</option>
                <option value="culture">Culture & History</option>
                <option value="food">Food & Cuisine</option>
                <option value="nature">Nature & Outdoors</option>
                <option value="photography">Photography</option>
                <option value="relaxation">Relaxation</option>
              </select>
            </div>
            <button type="submit" class="btn btn-accent btn-block">Find Buddies</button>
          </form>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    addModalStyles();
    
    // Handle form submission
    const form = modal.querySelector('#buddy-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form values (we'd use these in a real app)
      const destination = document.getElementById('destination').value;
      const dateFrom = document.getElementById('date-from').value;
      const dateTo = document.getElementById('date-to').value;
      
      // Show success message
      showSuccessMessage(modal, 'Your travel buddy request has been saved! We\'ll notify you of matches.');
    });
    
    // Close button and click outside
    setupModalClose(modal);
  }
  
  // ✅ 10. Helper functions for modals
  function createModalElement() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    return modal;
  }
  
  function addModalStyles() {
    // Check if styles already exist
    if (!document.getElementById('modal-styles')) {
      const style = document.createElement('style');
      style.id = 'modal-styles';
      style.textContent = `
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.3s;
        }
        .modal-content {
          background-color: white;
          border-radius: 8px;
          max-width: 600px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
          animation: slideIn 0.3s;
        }
        .modal-header {
          padding: 16px 20px;
          border-bottom: 1px solid #eee;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .modal-body {
          padding: 20px;
        }
        .close-modal {
          font-size: 28px;
          cursor: pointer;
          color: #999;
        }
        .close-modal:hover {
          color: #333;
        }
        .form-group {
          margin-bottom: 16px;
        }
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
        }
        .form-group input, .form-group textarea, .form-group select {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        .date-inputs {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .success-message {
          text-align: center;
          padding: 30px 20px;
          font-size: 18px;
          color: #2e7d32;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .fade-out {
          animation: fadeOut 0.3s forwards;
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }
  }
  
  function setupModalClose(modal) {
    // Close button handler
    const closeButton = modal.querySelector('.close-modal');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        closeModal(modal);
      });
    }
    // Close modal when clicking outside the content
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal(modal);
    }
  });
}

function closeModal(modal) {
  // Add fade-out animation
  modal.classList.add('fade-out');
  
  // Remove after animation completes
  setTimeout(() => {
    modal.remove();
  }, 300);
}

function showSuccessMessage(modal, message) {
  // Replace form with success message
  const modalBody = modal.querySelector('.modal-body');
  modalBody.innerHTML = `
    <div class="success-message">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <p>${message}</p>
    </div>
  `;
  
  // Close after delay
  setTimeout(() => {
    closeModal(modal);
  }, 3000);
}

// ✅ 11. Search functionality
function setupSearch() {
  const searchForm = document.querySelector('.search-form');
  
  if (!searchForm) return;
  
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchInput = searchForm.querySelector('input[type="search"]');
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm.length < 2) return; // Require at least 2 characters
    
    // Show loading state
    const discussionsContainer = document.querySelector('.discussions');
    discussionsContainer.innerHTML = '<div class="loading">Searching discussions...</div>';
    
    // Simulate search delay
    setTimeout(() => {
      // Search across all tabs
      let results = [];
      
      // Search in all forum data
      Object.values(forumData).forEach(discussions => {
        const matchingDiscussions = discussions.filter(discussion => {
          return (
            discussion.title.toLowerCase().includes(searchTerm) ||
            discussion.content.toLowerCase().includes(searchTerm) ||
            discussion.tags.some(tag => tag.toLowerCase().includes(searchTerm))
          );
        });
        
        results = [...results, ...matchingDiscussions];
      });
      
      // Also search in user posts
      const matchingUserPosts = currentState.userPosts.filter(discussion => {
        return (
          discussion.title.toLowerCase().includes(searchTerm) ||
          discussion.content.toLowerCase().includes(searchTerm) ||
          discussion.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
      });
      
      results = [...results, ...matchingUserPosts];
      
      // Display results
      if (results.length > 0) {
        discussionsContainer.innerHTML = `
          <div class="search-results-header">
            <h2>Search Results for "${searchTerm}"</h2>
            <button class="btn btn-text clear-search">Clear Search</button>
          </div>
          ${results.map(discussion => generateDiscussionHTML(discussion)).join('')}
        `;
        
        // Add handler for "Clear Search" button
        const clearButton = discussionsContainer.querySelector('.clear-search');
        clearButton.addEventListener('click', () => {
          searchInput.value = '';
          displayDiscussions();
        });
        
        // Add interactivity to like buttons in search results
        attachLikeButtonHandlers();
      } else {
        discussionsContainer.innerHTML = `
          <div class="search-results-header">
            <h2>No Results for "${searchTerm}"</h2>
            <button class="btn btn-text clear-search">Clear Search</button>
          </div>
          <div class="no-results">
            <p>We couldn't find any discussions matching your search.</p>
            <p>Try different keywords or check your spelling.</p>
          </div>
        `;
        
        // Add handler for "Clear Search" button
        const clearButton = discussionsContainer.querySelector('.clear-search');
        clearButton.addEventListener('click', () => {
          searchInput.value = '';
          displayDiscussions();
        });
      }
    }, 500);
  });
}

// ✅ 12. Notification system
function setupNotifications() {
  const notificationBell = document.querySelector('.notification-bell');
  
  if (!notificationBell) return;
  
  const notificationCount = document.createElement('span');
  notificationCount.className = 'notification-count';
  notificationCount.textContent = '3';
  notificationBell.appendChild(notificationCount);
  
  // Dropdown for notifications
  const notificationsDropdown = document.createElement('div');
  notificationsDropdown.className = 'notifications-dropdown';
  notificationsDropdown.innerHTML = `
    <div class="notification-header">
      <h3>Notifications</h3>
      <button class="mark-read">Mark all as read</button>
    </div>
    <div class="notification-list">
      <div class="notification-item unread">
        <div class="notification-avatar">
          <img src="/api/placeholder/40/40" alt="User Avatar">
        </div>
        <div class="notification-content">
          <p><strong>Laura Smith</strong> replied to your discussion about backpacking in Peru.</p>
          <span class="notification-time">10 minutes ago</span>
        </div>
      </div>
      <div class="notification-item unread">
        <div class="notification-avatar">
          <img src="/api/placeholder/40/40" alt="User Avatar">
        </div>
        <div class="notification-content">
          <p><strong>Michael Johnson</strong> liked your post about travel photography tips.</p>
          <span class="notification-time">2 hours ago</span>
        </div>
      </div>
      <div class="notification-item unread">
        <div class="notification-avatar">
          <img src="/api/placeholder/40/40" alt="User Avatar">
        </div>
        <div class="notification-content">
          <p>You have a new travel buddy match for your trip to Japan!</p>
          <span class="notification-time">Yesterday</span>
        </div>
      </div>
      <div class="notification-item">
        <div class="notification-avatar">
          <img src="/api/placeholder/40/40" alt="User Avatar">
        </div>
        <div class="notification-content">
          <p>Your discussion about European train travel is trending!</p>
          <span class="notification-time">2 days ago</span>
        </div>
      </div>
    </div>
    <div class="notification-footer">
      <a href="#">View all notifications</a>
    </div>
  `;
  
  document.body.appendChild(notificationsDropdown);
  
  // Add styles for notifications
  const style = document.createElement('style');
  style.textContent = `
    .notification-bell {
      position: relative;
      cursor: pointer;
    }
    .notification-count {
      position: absolute;
      top: -8px;
      right: -8px;
      background-color: #ff4757;
      color: white;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .notifications-dropdown {
      position: absolute;
      top: 60px;
      right: 20px;
      width: 360px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.15);
      display: none;
      z-index: 100;
      overflow: hidden;
    }
    .notification-header {
      padding: 15px;
      border-bottom: 1px solid #eee;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .notification-header h3 {
      margin: 0;
      font-size: 16px;
    }
    .mark-read {
      background: none;
      border: none;
      color: #4e8cff;
      cursor: pointer;
      font-size: 14px;
    }
    .notification-list {
      max-height: 320px;
      overflow-y: auto;
    }
    .notification-item {
      padding: 15px;
      display: flex;
      border-bottom: 1px solid #f2f2f2;
    }
    .notification-item.unread {
      background-color: #f8f9fa;
    }
    .notification-avatar {
      margin-right: 12px;
    }
    .notification-avatar img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .notification-content p {
      margin: 0 0 5px;
      font-size: 14px;
      line-height: 1.4;
    }
    .notification-time {
      color: #999;
      font-size: 12px;
    }
    .notification-footer {
      padding: 12px;
      text-align: center;
      border-top: 1px solid #eee;
    }
    .notification-footer a {
      color: #4e8cff;
      text-decoration: none;
      font-size: 14px;
    }
    .show-notifications {
      display: block;
      animation: fadeIn 0.2s;
    }
  `;
  document.head.appendChild(style);
  
  // Toggle dropdown
  let isOpen = false;
  notificationBell.addEventListener('click', () => {
    if (isOpen) {
      notificationsDropdown.classList.remove('show-notifications');
    } else {
      // Position dropdown correctly
      const bellRect = notificationBell.getBoundingClientRect();
      notificationsDropdown.style.top = (bellRect.bottom + 10) + 'px';
      notificationsDropdown.style.right = (window.innerWidth - bellRect.right) + 'px';
      notificationsDropdown.classList.add('show-notifications');
    }
    isOpen = !isOpen;
  });
  
  // Close when clicking elsewhere
  document.addEventListener('click', (e) => {
    if (isOpen && !notificationBell.contains(e.target) && !notificationsDropdown.contains(e.target)) {
      notificationsDropdown.classList.remove('show-notifications');
      isOpen = false;
    }
  });
  
  // Mark all as read
  const markReadButton = notificationsDropdown.querySelector('.mark-read');
  markReadButton.addEventListener('click', () => {
    const unreadItems = notificationsDropdown.querySelectorAll('.notification-item.unread');
    unreadItems.forEach(item => {
      item.classList.remove('unread');
    });
    
    // Remove notification count
    notificationCount.style.display = 'none';
  });
}

// ✅ 13. Tag filtering
function setupTagFiltering() {
  const discussionsContainer = document.querySelector('.discussions');
  
  if (!discussionsContainer) return;
  
  // Event delegation for tag clicks
  discussionsContainer.addEventListener('click', (e) => {
    // Check if a tag was clicked
    if (e.target.classList.contains('tag')) {
      const tag = e.target.textContent;
      
      // Show a toast notification
      showToast(`Filtering by tag: ${tag}`);
      
      // Get all discussions across tabs that match this tag
      let filteredDiscussions = [];
      
      // Search in all forum data
      Object.values(forumData).forEach(discussions => {
        const matchingDiscussions = discussions.filter(discussion => {
          return discussion.tags.some(t => t === tag);
        });
        
        filteredDiscussions = [...filteredDiscussions, ...matchingDiscussions];
      });
      
      // Also search in user posts
      const matchingUserPosts = currentState.userPosts.filter(discussion => {
        return discussion.tags.some(t => t === tag);
      });
      
      filteredDiscussions = [...filteredDiscussions, ...matchingUserPosts];
      
      // Display filtered results
      discussionsContainer.innerHTML = `
        <div class="search-results-header">
          <h2>Discussions tagged with "${tag}"</h2>
          <button class="btn btn-text clear-search">Clear Filter</button>
        </div>
        ${filteredDiscussions.map(discussion => generateDiscussionHTML(discussion)).join('')}
      `;
      
      // Add handler for "Clear Filter" button
      const clearButton = discussionsContainer.querySelector('.clear-search');
      clearButton.addEventListener('click', () => {
        displayDiscussions();
      });
      
      // Add interactivity to like buttons in filtered results
      attachLikeButtonHandlers();
    }
  });
  
  // Toast notification function
  function showToast(message) {
    // Create toast element if it doesn't exist
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
      
      // Add styles
      const style = document.createElement('style');
      style.textContent = `
        .toast {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #333;
          color: white;
          padding: 12px 24px;
          border-radius: 4px;
          font-size: 14px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.2);
          z-index: 1000;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .toast.show {
          opacity: 1;
        }
      `;
      document.head.appendChild(style);
    }
    
    // Set message and show
    toast.textContent = message;
    toast.classList.add('show');
    
    // Hide after 3 seconds
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
}

// ✅ 14. User profile dropdown
function setupUserProfile() {
  const userAvatar = document.querySelector('.user-avatar-top');
  
  if (!userAvatar) return;
  
  // Create dropdown element
  const profileDropdown = document.createElement('div');
  profileDropdown.className = 'profile-dropdown';
  profileDropdown.innerHTML = `
    <div class="profile-header">
      <img src="/api/placeholder/60/60" alt="Your Avatar" class="profile-pic">
      <div class="profile-info">
        <h3>Your Name</h3>
        <p>Travel enthusiast</p>
      </div>
    </div>
    <div class="profile-menu">
      <a href="#" class="profile-menu-item">
        <span class="profile-icon">👤</span>
        My Profile
      </a>
      <a href="#" class="profile-menu-item">
        <span class="profile-icon">⚙️</span>
        Account Settings
      </a>
      <a href="#" class="profile-menu-item">
        <span class="profile-icon">✉️</span>
        Messages
      </a>
      <a href="#" class="profile-menu-item">
        <span class="profile-icon">📝</span>
        My Discussions
      </a>
      <a href="#" class="profile-menu-item">
        <span class="profile-icon">❤️</span>
        Saved Items
      </a>
      <a href="#" class="profile-menu-item logout">
        <span class="profile-icon">🚪</span>
        Log Out
      </a>
    </div>
  `;
  
  document.body.appendChild(profileDropdown);
  
  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    .user-avatar-top {
      cursor: pointer;
    }
    .profile-dropdown {
      position: absolute;
      top: 60px;
      right: 10px;
      width: 280px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.15);
      display: none;
      z-index: 100;
      overflow: hidden;
    }
    .profile-header {
      background: linear-gradient(135deg, #4e8cff 0%, #2d6ad9 100%);
      color: white;
      padding: 20px;
      display: flex;
      align-items: center;
    }
    .profile-pic {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: 3px solid white;
      margin-right: 15px;
    }
    .profile-info h3 {
      margin: 0;
      font-size: 18px;
    }
    .profile-info p {
      margin: 5px 0 0;
      font-size: 14px;
      opacity: 0.9;
    }
    .profile-menu {
      padding: 10px 0;
    }
    .profile-menu-item {
      display: flex;
      align-items: center;
      padding: 12px 20px;
      color: #333;
      text-decoration: none;
      transition: background-color 0.2s;
    }
    .profile-menu-item:hover {
      background-color: #f5f5f5;
    }
    .profile-icon {
      margin-right: 12px;
      font-size: 16px;
    }
    .logout {
      border-top: 1px solid #eee;
      margin-top: 5px;
      color: #ff4757;
    }
    .show-profile {
      display: block;
      animation: fadeIn 0.2s;
    }
  `;
  document.head.appendChild(style);
  
  // Toggle dropdown
  let isOpen = false;
  userAvatar.addEventListener('click', () => {
    if (isOpen) {
      profileDropdown.classList.remove('show-profile');
    } else {
      // Position dropdown correctly
      const avatarRect = userAvatar.getBoundingClientRect();
      profileDropdown.style.top = (avatarRect.bottom + 10) + 'px';
      profileDropdown.style.right = (window.innerWidth - avatarRect.right) + 'px';
      profileDropdown.classList.add('show-profile');
    }
    isOpen = !isOpen;
  });
  
  // Close when clicking elsewhere
  document.addEventListener('click', (e) => {
    if (isOpen && !userAvatar.contains(e.target) && !profileDropdown.contains(e.target)) {
      profileDropdown.classList.remove('show-profile');
      isOpen = false;
    }
  });
  
  // Add menu item functionality
  const myDiscussionsMenuItem = profileDropdown.querySelector('.profile-menu-item:nth-child(4)');
  myDiscussionsMenuItem.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Switch to My Topics tab
    document.querySelectorAll('.tab')[3].click();
    
    // Close dropdown
    profileDropdown.classList.remove('show-profile');
    isOpen = false;
  });
}

// ✅ 15. Dark mode toggle
function setupDarkMode() {
  // Create the toggle button
  const darkModeToggle = document.createElement('button');
  darkModeToggle.className = 'dark-mode-toggle';
  darkModeToggle.innerHTML = '🌙';
  document.body.appendChild(darkModeToggle);
  
  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    .dark-mode-toggle {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #4e8cff;
      color: white;
      border: none;
      font-size: 20px;
      cursor: pointer;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      transition: transform 0.3s;
      z-index: 99;
    }
    .dark-mode-toggle:hover {
      transform: scale(1.1);
    }
    .dark-mode {
      transition: background-color 0.3s, color 0.3s;
    }
    body.dark-mode {
      background-color: #1a1a2e;
      color: #e6e6e6;
    }
    .dark-mode .forum-container {
      background-color: #16213e;
    }
    .dark-mode .tabs {
      background-color: #0f3460;
    }
    .dark-mode .tab {
      color: #ccc;
    }
    .dark-mode .tab.active {
      background-color: #16213e;
      color: #fff;
    }
    .dark-mode .discussion-item {
      background-color: #1a1a2e;
      border-color: #2e2e4c;
    }
    .dark-mode .discussion-title a {
      color: #4e8cff;
    }
    .dark-mode .tag {
      background-color: #0f3460;
      color: #e6e6e6;
    }
    .dark-mode .pagination a {
      background-color: #16213e;
      color: #e6e6e6;
    }
    .dark-mode .search-form input {
      background-color: #16213e;
      color: #e6e6e6;
      border-color: #2e2e4c;
    }
  `;
  document.head.appendChild(style);
  
  // Check for saved preference
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '☀️';
  }
  
  // Handle toggle click
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    
    // Save preference
    localStorage.setItem('darkMode', isDark);
    
    // Update toggle icon
    darkModeToggle.innerHTML = isDark ? '☀️' : '🌙';
    
    // Add animation effect
    darkModeToggle.style.transform = 'scale(1.2)';
    setTimeout(() => {
      darkModeToggle.style.transform = 'scale(1)';
    }, 300);
  });
}

// ✅ 16. Initialize all functionalities
function initForum() {
  // Initial display
  displayDiscussions();
  
  // Setup all interactive features
  handleTabs();
  handlePagination();
  updatePaginationDisplay();
  handleActionButtons();
  setupSearch();
  setupNotifications();
  setupTagFiltering();
  setupUserProfile();
  setupDarkMode();
  
  // Add welcome toast
  setTimeout(() => {
    showToast('Welcome to the Travel Forum!');
  }, 1000);
}

// ✅ 17. Helper function for toast messages (used by multiple functions)
function showToast(message) {
  // Create toast element if it doesn't exist
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      .toast {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #333;
        color: white;
        padding: 12px 24px;
        border-radius: 4px;
        font-size: 14px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s;
      }
      .toast.show {
        opacity: 1;
      }
    `;
    document.head.appendChild(style);
  }
  
  // Set message and show
  toast.textContent = message;
  toast.classList.add('show');
  
  // Hide after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// ✅ 18. Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initForum);