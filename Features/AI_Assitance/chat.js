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
    async function processMessage(userInput) {
      // Convert to lowercase for easier matching
      const input = userInput.toLowerCase();
      
      // Show typing indicator to simulate the assistant thinking
      showTypingIndicator();

      const apiResponse = await (await fetch(`https://samyati-sarthi.netlify.app/api/chatbot?prompt=${input}`)).json();

      if (apiResponse.status == 'error') {
        addMessage("Oops! Something went wrong :<")
        return hideTypingIndicator();
      }

      addMessage(apiResponse.response);
      hideTypingIndicator();
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