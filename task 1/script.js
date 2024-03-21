document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const loginForm = document.getElementById('loginForm');
  
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      validateContactForm();
    });
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      validateLoginForm();
    });
  
    function validateContactForm() {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      document.getElementById('nameError').textContent = name ? '' : 'Name is required.';
      document.getElementById('emailError').textContent = email ? (isValidEmail(email) ? '' : 'Invalid email format.') : 'Email is required.';
      document.getElementById('messageError').textContent = message ? '' : 'Message is required.';
  
      if (name && email && isValidEmail(email) && message) {
        // Form submission logic
        console.log('Contact form submitted successfully.');
      }
    }
  
    function validateLoginForm() {
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value;
  
      document.getElementById('usernameError').textContent = username ? '' : 'Username is required.';
      document.getElementById('passwordError').textContent = password ? '' : 'Password is required.';
  
      if (username && password) {
        // Form submission logic
        console.log('Login form submitted successfully.');
      }
    }
  
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });
  