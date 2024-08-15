document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('loginForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Check if username and password match admin credentials
        if (username === 'admin' && password === 'password') {
            // Redirect to admin dashboard
            window.location.href = 'admin-dashboard.html';
        }
        // Check if username and password match customer credentials
        else if (username === 'customer' && password === '1234') {
            // Redirect to customer dashboard
            window.location.href = 'customer-dashboard.html';
        } else {
            // Display an error message
            alert('Invalid username or password. Please try again.');
        }
    });
});
