document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const stayLoggedIn = document.getElementById("stayLoggedIn").checked;

    // Validate email and password (add your own validation logic if needed)
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    // Simulate form submission
    alert(
      `Email: ${email}\nPassword: ${password}\nStay Logged In: ${stayLoggedIn}`
    );

    // Clear the form
    document.getElementById("loginForm").reset();
  });
  