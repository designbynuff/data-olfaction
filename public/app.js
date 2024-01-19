// Variables
let nameField = document.getElementById('name-field');
let nameButton = document.getElementById('name-button');

let userName;
let macAddress;
let ipAddress;
let device;

let materials = [];

window.addEventListener('load', () => {
    console.log('Page is loaded');

    // MODAL STUFF
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


    // Load materials.json
    fetch('data/materials.json')
        .then(response => response.json())
        .then(data => {
            materials = data;
            console.log(materials);

            // Test randomFormula
            randomFormula();
        });

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



});

// BUILDING A 20-DROP PERFUME FORMULA FROM PRE-SET MATERIALS

function randomFormula() {

    let perfumeFormula = [];
    let maxDrops = 20;

    // Ensure materials is an array before using filter
    if (!Array.isArray(materials)) {
        console.error('Materials data not loaded yet.');
        return;
    }

    let maxBase = Math.floor(Math.random() * 3) + 1; // Set Maximum Base Notes between 1 and 3
    let maxTop = Math.floor(Math.random() * 5) + 4; // Set Maximum Top Notes between 4 and 8
    let maxMid = maxDrops - maxBase - maxTop; // Set Maximum Middle Notes to fill remaining drops

    // Counters
    let currentDrops = 0;
    let currentBase = 0;
    let currentMid = 0;
    let currentTop = 0;

    // Go through materials and get all items whose category is 'base'
    let baseNotes = materials.filter(material => material.category === 'base');
    console.log(baseNotes);

    // Get Mid Notes
    let midNotes = materials.filter(material => material.category === 'mid');
    console.log(midNotes);

    // Get Top Notes
    let topNotes = materials.filter(material => material.category === 'top');
    console.log(topNotes);

    // Add a random number of drops of a random base note to the formula, until maxBase is reached
    while (currentBase < maxBase) {
        let randomBase = baseNotes[Math.floor(Math.random() * baseNotes.length)];
        let randomBaseDrops = Math.floor(Math.random() * 3) + 1;
        let base = {
            name: randomBase.name,
            drops: randomBaseDrops
        };
        perfumeFormula.push(base);
        currentBase += randomBaseDrops;
        currentDrops += randomBaseDrops;
    }

    // Add a random number of drops of a random top note to the formula, until maxTop is reached
    while (currentTop < maxTop) {
        let randomTop = topNotes[Math.floor(Math.random() * topNotes.length)];
        let randomTopDrops = Math.floor(Math.random() * 3) + 1;
        let top = {
            name: randomTop.name,
            drops: randomTopDrops
        };
        perfumeFormula.push(top);
        currentTop += randomTopDrops;
        currentDrops += randomTopDrops;
    }

    // Add a random number of drops of a random mid note to the formula, until maxDrops is reached
    while (currentDrops < maxDrops) {
        let randomMid = midNotes[Math.floor(Math.random() * midNotes.length)];
        let randomMidDrops = Math.floor(Math.random() * 3) + 1;
        let mid = {
            name: randomMid.name,
            drops: randomMidDrops
        };
        perfumeFormula.push(mid);
        currentMid += randomMidDrops;
        currentDrops += randomMidDrops;
    }

    console.log(perfumeFormula);

    // Where there are multiple instances of the same note, add the number of drops and combine into one instance
    let uniqueFormula = perfumeFormula.reduce((acc, current) => {
        const x = acc.find(item => item.name === current.name);
        if (!x) {
            return acc.concat([current]);
        } else {
            x.drops += current.drops;
            return acc;
        }
    }, []);

    console.log(uniqueFormula);

    // For each note in the formula, create a row div. In each row div, create a p element for the name, a spacer div and a p element for the number of drops
    uniqueFormula.forEach(note => {
        let row = document.createElement('div');
        row.classList.add('row');
        let material = document.createElement('p');
        material.classList.add('name');
        material.innerHTML = note.name;
        let spacer = document.createElement('div');
        spacer.classList.add('spacer');
        let quantity = document.createElement('p');
        quantity.classList.add('quantity');
        quantity.innerHTML = note.drops;
        row.appendChild(material);
        row.appendChild(spacer);
        row.appendChild(quantity);
        document.getElementById('formula').appendChild(row);
    });

}

