document.addEventListener('DOMContentLoaded', function() {
  // Handle password visibility toggle
  const passwordInput = document.getElementById('password');
  const togglePasswordButton = document.getElementById('toggle-password');
  const showPasswordIcon = document.getElementById('show-password');
  const hidePasswordIcon = document.getElementById('hide-password');

  if (togglePasswordButton && passwordInput) {
    togglePasswordButton.addEventListener('click', function() {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showPasswordIcon.classList.add('hidden');
        hidePasswordIcon.classList.remove('hidden');
      } else {
        passwordInput.type = 'password';
        showPasswordIcon.classList.remove('hidden');
        hidePasswordIcon.classList.add('hidden');
      }
    });
  }

  // Handle signup form submission
  const signupForm = document.getElementById('signup-form');
  const fullNameInput = document.getElementById('full-name');
  const emailInput = document.getElementById('email');
  const termsCheckbox = document.getElementById('terms');
  const submitButton = document.getElementById('signup-btn');
  const messageElement = document.getElementById('signup-message');

  if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validate form
      const fullName = fullNameInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (!fullName) {
        showMessage('Please enter your full name.', 'error');
        return;
      }
      
      if (!email || !emailRegex.test(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
      }
      
      if (password.length < 8) {
        showMessage('Password must be at least 8 characters long.', 'error');
        return;
      }
      
      if (!termsCheckbox.checked) {
        showMessage('You must agree to the Terms of Service and Privacy Policy.', 'error');
        return;
      }
      
      // Disable form elements during submission
      disableForm(true);
      showMessage('Creating your account...', 'pending');
      
      // Simulate API call (replace with actual API call in production)
      setTimeout(() => {
        // Randomly success or error for demo purposes
        const isSuccess = Math.random() > 0.2; // 80% success rate
        
        if (isSuccess) {
          showMessage('Your account has been created successfully!', 'success');
          
          // Redirect to home page after successful signup
          setTimeout(() => {
            window.location.href = 'index.html';
          }, 1500);
        } else {
          showMessage('There was an error creating your account. Please try again later.', 'error');
          disableForm(false);
        }
      }, 1500);
    });
  }
  
  function disableForm(disabled) {
    fullNameInput.disabled = disabled;
    emailInput.disabled = disabled;
    passwordInput.disabled = disabled;
    termsCheckbox.disabled = disabled;
    submitButton.disabled = disabled;
  }
  
  function showMessage(text, type) {
    if (!messageElement) return;
    
    messageElement.textContent = text;
    messageElement.className = 'text-sm mb-4 ' + type;
    
    // Remove existing classes and add the new one
    messageElement.classList.remove('success', 'error', 'pending', 'hidden');
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
}); 