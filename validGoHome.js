document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.loginForm form');
    form.addEventListener('submit', validGoHome);
});

function validGoHome(event) {
    event.preventDefault(); // Prevent form submission

    // Get form inputs
    const username = document.querySelector('#sgUsername');
    const password = document.querySelector('#sgPassword');

    // Validate form inputs
    if (username.value && password.value) {
        alert("You have successfully signed in!");

        // Store the username and password in the local storage
        localStorage.setItem('username', username.value);
        localStorage.setItem('password', password.value);

        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('loginTimestamp', Date.now().toString());
        window.location.href = "index.html";
    } else {
        alert("Please fill in all fields.");
    }
}