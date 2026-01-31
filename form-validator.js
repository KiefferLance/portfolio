function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var isValid = true;

    // Clear previous messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('successMessage').textContent = '';

    // Validate name
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }

    // Validate email
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (email.indexOf('@') === -1) {
        document.getElementById('emailError').textContent = 'Email must contain @';
        isValid = false;
    }

    // Validate password
    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required';
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
        isValid = false;
    }

    // Show success if all valid
    if (isValid) {
        document.getElementById('successMessage').textContent = 'Form submitted successfully!';
    }
}
