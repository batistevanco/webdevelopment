// scripts/script.js

// Globale opslag voor alle aangemaakte tafels
let tafelData = [];

// handige functie om alle child-nodes van een element te verwijderen
const verwijderAlleChildren = (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
};

// setup: eventlistener koppelen aan de Go!-knop
const setup = () => {
    document.getElementById("button")
        .addEventListener("click", genereerTafel);
};

window.addEventListener("load", setup);

// functie om een nieuwe tafel toe te voegen en de weergave te verversen
const genereerTafel = () => {
    const invoerElement = document.getElementById("inputtext");
    const tekst = invoerElement.value.trim();
    const getal = Number(tekst);

    // validatie dat er een geldig getal is ingevoerd
    if (tekst === "" || isNaN(getal)) {
        alert("Voer alstublieft een geldig getal in.");
        return;
    }

    // bepaal huidige tijd in HH:MM:SS (24uursformaat)
    const tijdString = new Date()
        .toLocaleTimeString('nl-NL', { hour12: false });

    // voeg de nieuwe tafel toe aan de globale array
    tafelData.push({ getal, tijdString });

    // maak het inputveld leeg
    invoerElement.value = "";

    // ververs alle tafels in de container
    const container = document.getElementById("tafel");
    verwijderAlleChildren(container);

    tafelData.forEach(entry => {
        // wrapper voor elke tafel
        const wrapper = document.createElement("div");
        wrapper.className = "tafel-container";

        // header met titel en tijd
        const header = document.createElement("div");
        header.className = "tafel-header";
        header.textContent = `Tafel van ${entry.getal} aangemaakt op: ${entry.tijdString}`;
        wrapper.appendChild(header);

        // rijen 1 t/m 10
        for (let i = 1; i <= 10; i++) {
            const rij = document.createElement("div");
            rij.className = "tafel-rij";
            rij.textContent = `${entry.getal} × ${i} = ${entry.getal * i}`;
            // elke even rij lichtgrijs maken
            if (i % 2 === 0) {
                rij.classList.add("even");
            }
            wrapper.appendChild(rij);
        }

        // voeg deze tafel toe aan de pagina
        container.appendChild(wrapper);
    });
};