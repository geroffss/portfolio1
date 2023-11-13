document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.signupForm form');
    form.addEventListener('submit', validSignUp);
});

function validSignUp(event) {
    event.preventDefault(); // Prevent form submission

    // Get form and form inputs
    const form = event.target;
    const usernameInput = form.querySelector('#lgUsername');
    const passwordInput = form.querySelector('#lgPassword');
    const emailInput = form.querySelector('#lgEmail');

    // Check if all input fields are filled out
    if (usernameInput.value && passwordInput.value && emailInput.value) {
        // If all input fields are filled out, create an alert message with the username and password
        const alertMessage = `You signed up successfully!\nUsername: ${usernameInput.value}\nPassword: ${passwordInput.value}`;

        // Show the alert message
        alert(alertMessage);

        // Redirect the user to index.html
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('loginTimestamp', Date.now().toString());
        window.location.href = 'index.html';
    } else {
        // If any input field is empty, show an error message
        alert('Please fill out all input fields.');
    }
}