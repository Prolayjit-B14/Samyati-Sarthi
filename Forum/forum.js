// ─────────────────────────────────────────────
// ✨ Travel Forum JavaScript Functionality
// ─────────────────────────────────────────────

// ✅ 1. Search Functionality
function handleSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-btn');
  
    searchButton.addEventListener('click', () => {
      const query = searchInput.value.trim();
      if (query) {
        alert(`Searching for: "${query}"...`);
        // Future: Redirect or filter content based on query
      }
    });
  
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        searchButton.click();
      }
    });
  }
  
  // ✅ 2. Tabs Switching (Recent, Popular, Following)
  function handleTabs() {
    const tabs = document.querySelectorAll('.tab');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Deactivate previous
        document.querySelector('.tab.active')?.classList.remove('active');
        tab.classList.add('active');
  
        const tabName = tab.innerText.trim().toLowerCase();
        console.log(`Switched to tab: ${tabName}`);
        // Future: Filter content by category
      });
    });
  }
  
  // ✅ 3. Pagination Control
  function handlePagination() {
    const pages = document.querySelectorAll('.page-link');
  
    pages.forEach(page => {
      page.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.page-link.active')?.classList.remove('active');
        page.classList.add('active');
  
        const pageNum = page.innerText;
        console.log(`Switched to page: ${pageNum}`);
        // Future: Load posts for selected page
      });
    });
  }
  
  // ✅ 4. Action Buttons (New Discussion / Find Travel Buddy)
  function handleActionButtons() {
    const newDiscussionBtn = document.querySelector('.btn-primary');
    const travelBuddyBtn = document.querySelector('.btn-accent');
  
    newDiscussionBtn.addEventListener('click', () => {
      alert('Opening New Discussion Form...');
      // Future: Show form modal or redirect to new-discussion.html
    });
  
    travelBuddyBtn.addEventListener('click', () => {
      alert('Launching Travel Buddy Finder...');
      // Future: Redirect or open buddy finder tool
    });
  }
  
  // ✅ 5. Hover Effect on Trending Topics (Optional UX Enhancement)
  function enhanceTrendingTopics() {
    const trendingItems = document.querySelectorAll('.trending-topics li');
  
    trendingItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = '#f0f8ff';
      });
  
      item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = '';
      });
    });
  }
  
  // ✅ 6. Initialize All Events on Page Load
  document.addEventListener('DOMContentLoaded', () => {
    handleSearch();
    handleTabs();
    handlePagination();
    handleActionButtons();
    enhanceTrendingTopics();
  });
  