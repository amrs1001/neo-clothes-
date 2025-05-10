function togglePasswordVisibility(id) {
    const input = document.getElementById(id);
    if (input.type === 'password') {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
}

function validateForm() {
    let valid = true;

    const fullName = document.getElementById('Name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('password2').value.trim();
    const termsAccepted = document.getElementById('check').checked;

    // Reset errors
    document.getElementById('fullNameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
    document.getElementById('termsError').textContent = '';

    // Full Name validation
    if (fullName === '') {
        document.getElementById('fullNameError').textContent = 'Full Name is required.';
        valid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        valid = false;
    }

    // Phone validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = 'Invalid phone number format. It should be a 10-digit number.';
        valid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        valid = false;
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        valid = false;
    }

    // Terms and Conditions validation
    if (!termsAccepted) {
        document.getElementById('termsError').textContent = 'You must accept the terms and conditions.';
        valid = false;
    }

    return valid;
}