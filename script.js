function submitForm(event) {
    event.preventDefault();

    // Simple validation (you may want to enhance this)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!name || !email || !username || !password) {
        alert('Please fill in all fields.');
        return;
    }

    // Here, you can send the data to the server for further processing (not implemented in this example)

    // Redirect to the confirmation page
    window.location.href = 'confirmation.html';
}