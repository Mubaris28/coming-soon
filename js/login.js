document.addEventListener('DOMContentLoaded', function() {
  // Password visibility toggle
  const togglePassword = document.getElementById('toggle-password');
  const passwordInput = document.getElementById('password');
  const showPasswordIcon = document.getElementById('show-password');
  const hidePasswordIcon = document.getElementById('hide-password');
  
  if (togglePassword && passwordInput) {
    togglePassword.addEventListener('click', function() {
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
  
  // Handle login form submission
  const loginForm = document.getElementById('login-form');
  const loginBtn = document.getElementById('login-btn');
  const loginMessage = document.getElementById('login-message');
  
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic validation
      const email = document.getElementById('email').value.trim();
      const password = passwordInput.value.trim();
      
      if (!email || !password) {
        showMessage('Please fill in all fields', 'error');
        return;
      }
      
      // Simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showMessage('Please enter a valid email address', 'error');
        return;
      }
      
      // Disable button and show loading state
      loginBtn.disabled = true;
      loginBtn.textContent = 'Logging in...';
      showMessage('Logging in...', 'pending');
      
      // Simulate API call with timeout
      setTimeout(function() {
        loginMessage.className = 'text-sm mb-4 success';
        loginMessage.textContent = 'Login successful! Redirecting...';
        
        // Redirect to home page after delay
        setTimeout(function() {
          window.location.href = 'index.html';
        }, 1500);
      }, 1500);
    });
  }
  
  function showMessage(text, type) {
    if (!loginMessage) return;
    
    loginMessage.textContent = text;
    loginMessage.className = 'text-sm mb-4 ' + type;
    loginMessage.classList.remove('hidden');
  }
}); 