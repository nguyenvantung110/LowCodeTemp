document.getElementById('toggle-password').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        this.textContent = 'Hide';
    } else {
        passwordField.type = 'password';
        this.textContent = 'Show';
    }
});

document.getElementById('submit-button').addEventListener('click', function () {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const emailErrorIcon = document.getElementById('email-error-icon');
    const passwordErrorIcon = document.getElementById('password-error-icon');

    let isValid = true;

    if (!validateEmail(email.value)) {
        emailErrorIcon.style.display = 'inline';
        isValid = false;
    } else {
        emailErrorIcon.style.display = 'none';
    }

    if (!validatePassword(password.value)) {
        passwordErrorIcon.style.display = 'inline';
        isValid = false;
    } else {
        passwordErrorIcon.style.display = 'none';
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/;
    return re.test(password);
}
