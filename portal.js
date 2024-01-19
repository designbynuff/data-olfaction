//MOVED PORTAL SUBMISSION STUFF HERE, WON'T USE IN BERLIN.

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

// When button is clicked, get name
nameButton.addEventListener('click', () => {
    // Get name from input field
    userName = nameField.value;
    console.log(userName);

    // Get IP Address

    // Get MAC Address

    // Get Device Type


    //     <div class="info">
    //     <h1 class="typewriter">Welcome, <span id="name"></span></h1>
    //     <p class="typewriter">Your MAC address is <span id="mac-address"></span></p>
    //     <p class="typewriter">Your IP address is <span id="ip-address"></span></p>
    //     <p class="typewriter">Your device is <span id="device"></span></p>
    //     <p class="typewriter">Random animated text that makes it look like stuff is happening as we sniff your
    //         packets for 30-60s</p>
    // </div>

    // Set Name in Welcome Page
    document.getElementById('name').innerHTML = userName;

    // Set MAC Address in Welcome Page
    document.getElementById('mac-address').innerHTML = macAddress;

    // Set IP Address in Welcome Page
    document.getElementById('ip-address').innerHTML = ipAddress;

    // Set Device Type in Welcome Page
    document.getElementById('device').innerHTML = device;

    // Set Amount of Time to Sniff Packets
    let time = 30;

    // Read Packets from File Every [Interval]

    // For Each Packet, Create a Paragraph and Append to Info Div

    // Once Packets Displayed, Show Button to Continue to Formula Page
    document.getElementById('formula-btn').style.display = 'block';

});