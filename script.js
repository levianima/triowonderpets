function login() {
    const q1 = document.getElementById('q1').value;
    const q2 = document.getElementById('q2').value;
    const q3 = document.getElementById('q3').value;
    const q4 = document.getElementById('q4').value;

    if (q1 === '07152024') { // question1
        if (q2 === 'rocky road' || q2 === 'ROCKY ROAD' || q2 === 'rockyroad' || q2 === 'ROCKYROAD' || q2 === 'Rocky Road' || q2 === 'RockyRoad') { // question2
            if (q3 === '0' || q3 === 'zero' || q3 === 'Zero' || q3 === 'ZERO') { // question3
                if (q4 === 'mayo' || q4 === 'Mayo' || q4 === 'MAYO' || q4 === 'japmayo' || q4 === 'JAPMAYO' || q4 === 'JapMayo' || q4 === 'jap mayo' || q4 === 'JAP MAYO' || q4 === 'Jap mayo' || q4 === 'Jap Mayo' || q4 === 'mayonnaise' || q4 === 'Mayonnaise' || q4 === 'MAYONNAISE') { // question4
                    window.location.href = './qr.html';
                } else {
                    alert('Invalid answer. Please try again.');
                }
            } else {
                alert('Invalid answer. Please try again.');
            }
        } else {
            alert('Invalid answer. Please try again.');
        }
    } else {
        alert('Invalid answer. Please try again.');
    }
}

// Get the input field
var input = document.getElementById("q1");
// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("myBtn").click();
    }
});

// Get the input field
var input = document.getElementById("q2");
// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("myBtn").click();
    }
});
// Get the input field
var input = document.getElementById("q3");
// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("myBtn").click();
    }
});
// Get the input field
var input = document.getElementById("q4");
// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("myBtn").click();
    }
});