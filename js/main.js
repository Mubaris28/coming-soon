document.addEventListener('DOMContentLoaded', function() {
  // Set the current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Apply animation classes with delays
  const cards = document.querySelectorAll('.animate-card');
  cards.forEach((card, index) => {
    card.style.setProperty('--animation-order', index);
  });
  
  // Handle form submission
  const subscribeForm = document.getElementById('subscribe-form');
  const emailInput = document.getElementById('email-input');
  const submitButton = document.getElementById('submit-btn');
  const messageElement = document.getElementById('message');
  
  if (subscribeForm) {
    subscribeForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validate email format
      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (!email) {
        showMessage('Please enter your email address.', 'error');
        return;
      }
      
      if (!emailRegex.test(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
      }
      
      // Disable form elements during submission
      emailInput.disabled = true;
      submitButton.disabled = true;
      showMessage('Submitting...', 'pending');
      
      // Simulate API call (replace with actual API call in production)
      setTimeout(() => {
        // Randomly success or error for demo purposes
        const isSuccess = Math.random() > 0.3; // 70% success rate
        
        if (isSuccess) {
          showMessage('Thank you! You\'ve been added to our waitlist.', 'success');
          subscribeForm.reset();
        } else {
          showMessage('Something went wrong. Please try again later.', 'error');
        }
        
        // Re-enable form elements
        emailInput.disabled = false;
        submitButton.disabled = false;
      }, 1500);
    });
  }
  
  function showMessage(text, type) {
    if (!messageElement) return;
    
    messageElement.textContent = text;
    messageElement.className = 'text-sm mt-2 mb-6 ' + type;
    
    // Remove existing classes and add the new one
    messageElement.classList.remove('success', 'error', 'pending');
    messageElement.classList.add(type);
    
    // Show the message
    messageElement.style.display = 'block';
    
    // Auto-hide error messages after 5 seconds
    if (type === 'error') {
      setTimeout(() => {
        messageElement.style.display = 'none';
      }, 5000);
    }
  }
  
  // Social media icon hover animations
  const socialIcons = document.querySelectorAll('.social-icon');
  socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px)';
      this.style.transition = 'transform 0.3s ease';
    });
    
    icon.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
}); 