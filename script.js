function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace these credentials with your desired ones
    const correctUsername = '09132024';
    const correctPassword = 'rocky road';

    if (username === correctUsername && password === correctPassword) {
        window.location.href = './qr.html';
    } else {
        alert('Invalid answer. Please try again.');
    }
}