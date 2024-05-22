document.getElementById('toggle-new-password').addEventListener('click', function () {
    console.log('aaaa')
    const passwordField = document.getElementById('new-password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        this.textContent = 'Hide';
    } else {
        passwordField.type = 'password';
        this.textContent = 'Show';
    }
});

document.getElementById('toggle-old-password').addEventListener('click', function () {
    const passwordField = document.getElementById('old-password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        this.textContent = 'Hide';
    } else {
        passwordField.type = 'password';
        this.textContent = 'Show';
    }
});

document.getElementById('submit-button').addEventListener('click', function (event) {
    const oldPassword = document.getElementById('old-password');
    const newPassword = document.getElementById('new-password');

    const oldPasswordErrorIcon = document.getElementById('old-password-error-icon');
    const newPasswordErrorIcon = document.getElementById('new-password-error-icon');

    let isValid = true;

    if (!validatePassword(oldPassword.value)) {
        oldPasswordErrorIcon.style.display = 'inline';
        isValid = false;
    } else {
        oldPasswordErrorIcon.style.display = 'none';
    }

    if (!validatePassword(newPassword.value)) {
        newPasswordErrorIcon.style.display = 'inline';
        isValid = false;
    } else {
        newPasswordErrorIcon.style.display = 'none';
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }

    event.preventDefault()
});

function diffPassword(oldPass,newPass) {
    return oldPass && newPass && oldPass=== newPass
}

function validatePassword(password) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/;
    return re.test(password);
}
