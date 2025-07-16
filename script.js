// Signup function
function signup() {
  const username = document.getElementById('username').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Save to localStorage
  localStorage.setItem('userEmail', email);
  localStorage.setItem('userPassword', password);
  localStorage.setItem('username', username);

  alert("Registration successful!");
  window.location.href = "index.html";
}

// Login function
function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const storedEmail = localStorage.getItem('userEmail');
  const storedPassword = localStorage.getItem('userPassword');

  if (email === storedEmail && password === storedPassword) {
    alert("Login successful!");
    window.location.href = "home.html";
  } else {
    alert("Invalid credentials.");
  }
}
