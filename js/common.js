document.addEventListener('DOMContentLoaded', function() {
  // Set the current year in footer
  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
  
  // Animate page appearance
  const pages = [
    document.getElementById('home-page'),
    document.getElementById('login-page'),
    document.getElementById('signup-page'),
    document.getElementById('privacy-page'),
    document.getElementById('terms-page')
    // Removed contact-page as it's handled in contact.js
  ];
  
  // Find the active page
  const activePage = pages.find(page => page !== null);
  if (activePage) {
    // Delay slightly to ensure DOM is ready
    setTimeout(() => {
      activePage.style.opacity = '1';
    }, 100);
  }
  
  // Initialize animation order for cards with .animate-card class
  const animatedCards = document.querySelectorAll('.animate-card');
  animatedCards.forEach((card, index) => {
    card.style.setProperty('--animation-order', index + 1);
  });
  
  // Initialize back links
  const backLinks = document.querySelectorAll('.back-link');
  backLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      
      // Navigate immediately without delay
      window.location.href = href;
    });
  });
  
  // Handle mobile navigation toggle if present
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Handle back-to-top button if present
  const backToTopButton = document.getElementById('back-to-top');
  
  if (backToTopButton) {
    // Initially hide the button
    backToTopButton.style.display = 'none';
    
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    });
    
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Handle accordion toggles if present
  const accordionToggles = document.querySelectorAll('.accordion-toggle');
  
  if (accordionToggles.length > 0) {
    accordionToggles.forEach(toggle => {
      toggle.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const icon = this.querySelector('.accordion-icon');
        
        // Toggle the content visibility
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
          if (icon) icon.classList.remove('rotate-180');
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
          if (icon) icon.classList.add('rotate-180');
        }
      });
    });
  }
}); 