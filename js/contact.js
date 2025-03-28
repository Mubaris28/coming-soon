document.addEventListener('DOMContentLoaded', function() {
  // Initialize page animation
  const contactPage = document.getElementById('contact-page');
  if (contactPage) {
    // Make the contact page immediately visible with a smooth transition
    setTimeout(() => {
      contactPage.style.opacity = '1';
    }, 100);
  }

  // Set the current year in footer
  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
  
  // Apply animation classes with delays
  const cards = document.querySelectorAll('.animate-card');
  cards.forEach((card, index) => {
    card.style.setProperty('--animation-order', index + 1);
  });

  // Handle contact form submission
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');
  const consentCheckbox = document.getElementById('consent');
  const submitButton = document.getElementById('submit-btn');
  const messageElement = document.getElementById('contact-message');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validate form
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const subject = subjectInput.value.trim();
      const message = messageInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (!name) {
        showMessage('Please enter your full name.', 'error');
        return;
      }
      
      if (!email || !emailRegex.test(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
      }
      
      if (!subject) {
        showMessage('Please enter a subject for your message.', 'error');
        return;
      }
      
      if (!message) {
        showMessage('Please enter your message.', 'error');
        return;
      }
      
      if (!consentCheckbox.checked) {
        showMessage('You must consent to storing your information.', 'error');
        return;
      }
      
      // Disable form elements during submission
      disableForm(true);
      showMessage('Sending your message...', 'pending');
      
      // Simulate API call (replace with actual API call in production)
      setTimeout(() => {
        // Randomly success or error for demo purposes
        const isSuccess = Math.random() > 0.2; // 80% success rate
        
        if (isSuccess) {
          showMessage('Your message has been sent successfully! We\'ll get back to you soon.', 'success');
          contactForm.reset();
        } else {
          showMessage('There was an error sending your message. Please try again later.', 'error');
        }
        
        // Re-enable form elements
        disableForm(false);
      }, 1500);
    });
  }
  
  function disableForm(disabled) {
    nameInput.disabled = disabled;
    emailInput.disabled = disabled;
    subjectInput.disabled = disabled;
    messageInput.disabled = disabled;
    consentCheckbox.disabled = disabled;
    submitButton.disabled = disabled;
  }
  
  function showMessage(text, type) {
    if (!messageElement) return;
    
    messageElement.textContent = text;
    
    // Remove existing classes and add the new one
    messageElement.classList.remove('success', 'error', 'pending', 'hidden');
    messageElement.classList.add(type);
    
    // Show the message
    messageElement.classList.remove('hidden');
    
    // Auto-hide error messages after 5 seconds
    if (type === 'error') {
      setTimeout(() => {
        messageElement.classList.add('hidden');
      }, 5000);
    }
  }
});
