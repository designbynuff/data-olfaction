// Variables
let nameField = document.getElementById('name-field');
let nameButton = document.getElementById('name-button');

let userName;
let macAddress;
let ipAddress;
let device;

window.addEventListener('load', () => {
    console.log('Page is loaded');


    //PORTAL SUBMISSION STUFF (MAYBE MOVE TO SEPARATE FUNCTIONS?)

    // When input field has something in it, add right arrow arrow to button
    // nameField.addEventListener('input', () => {
    //     if (nameField.value) {
    //         nameButton.innerHTML = 'Ready →';
    //     } else {
    //         nameButton.innerHTML = 'Ready';
    //     }
    // });

    // Execute a function when the user presses a key on the keyboard
    // nameField.addEventListener("keypress", function (event) {
    //     // If the user presses the "Enter" key on the keyboard
    //     if (event.key === "Enter") {
    //         // Cancel the default action, if needed
    //         event.preventDefault();
    //         // Trigger the button element with a click
    //         nameButton.click();
    //     }
    // });

    // When button is clicked, get name and send to server
    // nameButton.addEventListener('click', () => {
    //     // Get name from input field
    //     userName = nameField.value;
    //     console.log(userName);

    //     // Send name to server
    //     socket.emit('name', name);
    // });

    // Get the modal
    var modal = document.getElementById("my-modal");

    // Get the button that opens the modal
    var modalBtn = document.getElementById("modal-btn");

    // Get the x that closes the modal
    var closeBtn = document.getElementById("close-btn");

    // When the user clicks on the button, open the modal
    modalBtn.addEventListener('click', () => {
        console.log('opening modal');
        modal.style.display = "block";
    });

    // When the user clicks on (x), close the modal
    closeBtn.addEventListener('click', () => {
        console.log('closing modal');
        modal.style.display = "none";
    });

});