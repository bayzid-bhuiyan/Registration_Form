document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let valid = true;
  
  // Name Validation
  const name = document.getElementById('name').value;
  if (name === '' || !/^[a-zA-Z ]+$/.test(name)) {
    document.getElementById('nameError').textContent = 'Please enter a valid name.';
    valid = false;
  } else {
    document.getElementById('nameError').textContent = '';
  }

  // Email Validation
  const email = document.getElementById('email').value;
  if (email === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email.';
    valid = false;
  } else {
    document.getElementById('emailError').textContent = '';
  }

  // Password Validation
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const passwordError = document.getElementById('passwordError');
  const confirmPasswordError = document.getElementById('confirmPasswordError');
  if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
    passwordError.textContent = 'Password must be at least 8 characters and include uppercase, lowercase, and a number.';
    valid = false;
  } else {
    passwordError.textContent = '';
  }

  if (password !== confirmPassword) {
    confirmPasswordError.textContent = 'Passwords do not match.';
    valid = false;
  } else {
    confirmPasswordError.textContent = '';
  }

  // Phone Validation
  const phone = document.getElementById('phone').value;
  if (phone === '' || !/^\d{10}$/.test(phone)) {
    document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number.';
    valid = false;
  } else {
    document.getElementById('phoneError').textContent = '';
  }
  // Final Validation Check
  if (valid) {
    alert('Form submitted successfully!');
    // You can send the form data to the server here
  }
});