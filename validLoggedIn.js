document.addEventListener('DOMContentLoaded', () => {
    // Check if the user is logged in
    if (localStorage.getItem('isLoggedIn') === 'true') {
        // The user is logged in, display the username and password
        const username = localStorage.getItem('username');
        const password = localStorage.getItem('password');

        document.querySelector('#username').textContent = username;
        document.querySelector('#password').textContent = password;
    } else {
        // The user is not logged in, redirect to the login page
        window.location.href = "login.html";
    }
});