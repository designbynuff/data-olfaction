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
    nameField.addEventListener('input', () => {
        if (nameField.value) {
            nameButton.innerHTML = 'Ready →';
        } else {
            nameButton.innerHTML = 'Ready';
        }
    });

    // Execute a function when the user presses a key on the keyboard
    nameField.addEventListener("keypress", function (event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            nameButton.click();
        }
    });

    // When button is clicked, get name and send to server
    nameButton.addEventListener('click', () => {
        // Get name from input field
        userName = nameField.value;
        console.log(userName);

        // Send name to server
        socket.emit('name', name);
    });

    // Get the modal
    // var modal = document.getElementById("myModal");

    // // Get the button that opens the modal
    // var modalBtn = document.getElementById("info");

    // // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("close")[0];

    // // When the user clicks on the button, open the modal
    // modalBtn.onclick = function () {
    //     modal.style.display = "block";
    // }

    // // When the user clicks on <span> (x), close the modal
    // span.onclick = function () {
    //     modal.style.display = "none";
    // }

    // // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function (event) {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //     }
    // }

});