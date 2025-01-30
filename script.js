document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    });
});

function validateForm() {
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();
    let valid = true;

    if (name === '') {
        showError('name', 'Name is required');
        valid = false;
    } else {
        clearError('name');
    }

    if (email === '') {
        showError('email', 'Email is required');
        valid = false;
    } else if (!isValidEmail(email)) {
        showError('email', 'Email is not valid');
        valid = false;
    } else {
        clearError('email');
    }

    if (message === '') {
        showError('message', 'Message is required');
        valid = false;
    } else {
        clearError('message');
    }

    if (valid) {
        alert('Form submitted successfully!');
        // Here you can add code to actually submit the form data
    }
}

function showError(field, message) {
    const formField = document.querySelector(`#${field}`);
    const error = formField.nextElementSibling;
    error.textContent = message;
    error.style.display = 'block';
}

function clearError(field) {
    const formField = document.querySelector(`#${field}`);
    const error = formField.nextElementSibling;
    error.textContent = '';
    error.style.display = 'none';
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}