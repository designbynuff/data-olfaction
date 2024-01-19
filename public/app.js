// Variables
let nameField = document.getElementById('name-field');
let nameButton = document.getElementById('name-button');

let userName;
let macAddress;
let ipAddress;
let device;

let materials = [];

// Declare top mid and base notes, JSON is killing me
let topNotes = ['Bergamot', 'Grapefruit'];
let midNotes = ['White Tea', 'Cherry Blossoms', 'Ylang-Ylang', 'Rose', 'Gardenia', 'Jasmine', 'Violet', 'Neroli', 'Peach', 'Cypress', 'Mint', 'Lemongrass', 'Rosemary'];
let baseNotes = ['Cedar', 'Sandalwood', 'Frankincense', 'Tea Tree', 'Eucalyptus'];

// Set #welcome-info and #formula-info to display none
document.getElementById('welcome-container').style.display = 'none';
document.getElementById('formula-container').style.display = 'none';

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


    console.log(topNotes);
    console.log(midNotes);
    console.log(baseNotes);

    // Load materials.json
    // fetch('data/materials.json')
    //     .then(response => response.json())
    //     .then(data => {
    //         // Push the data obejct into the materials array
    //         materials = data.materials;
    //         console.log(materials);
    //     });

    randomFormula();

    // When welcome-btn clicked, hide home-container and show welcome-container
    document.getElementById('welcome-btn').addEventListener('click', () => {
        console.log('welcome-btn clicked');
        document.getElementById('home-container').style.display = 'none';
        document.getElementById('welcome-container').style.display = 'block';
    });

    // When formula-btn clicked, hide welcome-container and show formula-container
    document.getElementById('formula-btn').addEventListener('click', () => {
        console.log('formula-btn clicked');
        document.getElementById('welcome-container').style.display = 'none';
        document.getElementById('formula-container').style.display = 'block';
    });

    // When reset-btn clicked, reload the page
    document.getElementById('reset-btn').addEventListener('click', () => {
        console.log('reset-btn clicked');
        location.reload();
    });

});

// BUILDING A 20-DROP PERFUME FORMULA FROM PRE-SET MATERIALS

function randomFormula() {

    console.log('randomFormula function called', materials);

    let perfumeFormula = [];
    let maxDrops = 20;

    // materials.forEach(element => {
    //     console.log(element)
    // });

    console.log('maximum drops = ' + maxDrops);

    // Ensure materials is an array before using filter
    // if (!Array.isArray(materials)) {
    //     console.error('Materials data not loaded yet.');
    //     return;
    // }

    let maxBase = Math.floor(Math.random() * 3) + 1; // Set Maximum Base Notes between 1 and 3
    console.log('maximum base notes = ' + maxBase);

    let maxTop = Math.floor(Math.random() * 5) + 4; // Set Maximum Top Notes between 4 and 8
    console.log('maximum top notes = ' + maxTop);

    let maxMid = maxDrops - maxBase - maxTop; // Set Maximum Middle Notes to fill remaining drops
    console.log('maximum mid notes = ' + maxMid);

    // Counters
    let currentDrops = 0;
    console.log('current drops = ' + currentDrops);

    let currentBase = 0;
    console.log('current base notes = ' + currentBase);

    let currentMid = 0;
    console.log('current mid notes = ' + currentMid);

    let currentTop = 0;
    console.log('current top notes = ' + currentTop);

    // Create separate arrays for base, mid and top notes
    // let baseNotes = [];
    // let midNotes = [];
    // let topNotes = [];

    // for (let i = 0; i < materials.length; i++) {
    //     let currentMaterial = materials[i];

    //     if (currentMaterial.category === 'base') {
    //         baseNotes.push(currentMaterial);
    //     } else if (currentMaterial.category === 'mid') {
    //         midNotes.push(currentMaterial);
    //     } else if (currentMaterial.category === 'top') {
    //         topNotes.push(currentMaterial);
    //     }

    //     i++;
    // }



    // console.log('Base Notes:', baseNotes);
    // console.log('Mid Notes:', midNotes);
    // console.log('Top Notes:', topNotes);

    // Add a random number of drops of a random base note to the formula, until maxBase is reached
    while (currentBase < maxBase) {
        let randomBase = baseNotes[Math.floor(Math.random() * baseNotes.length)];
        console.log('picking ' + randomBase);

        // Create a random number of drops between 1 and (maxBase - currentBase)
        let randomBaseDrops = Math.floor(Math.random() * (maxBase - currentBase)) + 1;

        let base = {
            name: randomBase,
            drops: randomBaseDrops
        };

        console.log('adding ' + base.name + ' to formula');

        perfumeFormula.push(base);

        console.log('formula is ' + JSON.stringify(perfumeFormula));


        currentBase += randomBaseDrops;
        currentDrops += randomBaseDrops;

        console.log('current base drops = ' + currentDrops);
        console.log('current base notes = ' + currentBase);
    }

    // Add a random number of drops of a random top note to the formula, until maxTop is reached
    while (currentTop < maxTop) {
        let randomTop = topNotes[Math.floor(Math.random() * topNotes.length)];
        console.log('picking ' + randomTop);

        let randomTopDrops = Math.floor(Math.random() * (maxTop - currentTop)) + 1;

        let top = {
            name: randomTop,
            drops: randomTopDrops
        };
        perfumeFormula.push(top);

        console.log('formula is ' + JSON.stringify(perfumeFormula));

        currentTop += randomTopDrops;
        currentDrops += randomTopDrops;

        console.log('current top drops = ' + currentDrops);
        console.log('current top notes = ' + currentTop);
    }

    // Add a random number of drops of a random mid note to the formula, until maxDrops is reached
    while (currentDrops < maxDrops) {
        let randomMid = midNotes[Math.floor(Math.random() * midNotes.length)];
        console.log('picking ' + randomMid);

        let randomMidDrops = Math.floor(Math.random() * (maxMid - currentMid)) + 1;

        let mid = {
            name: randomMid,
            drops: randomMidDrops
        };
        perfumeFormula.push(mid);

        console.log('formula is ' + JSON.stringify(perfumeFormula));

        currentMid += randomMidDrops;
        currentDrops += randomMidDrops;

        console.log('current mid drops = ' + currentDrops);
        console.log('current mid notes = ' + currentMid);
    }

    console.log('Final formula is ' + JSON.stringify(perfumeFormula));

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

    console.log('Unique formula: ' + JSON.stringify(uniqueFormula));

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
        if (note.drops === 1) {
            quantity.innerHTML = note.drops + ' drop';
        } else {
            quantity.innerHTML = note.drops + ' drops';
        }
        row.appendChild(material);
        row.appendChild(spacer);
        row.appendChild(quantity);
        document.getElementById('formula').appendChild(row);
    });

}

