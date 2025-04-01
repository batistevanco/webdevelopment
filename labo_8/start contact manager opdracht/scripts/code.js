let personen = [];
let geselecteerdeIndex = -1; // -1 betekent dat er een nieuwe persoon wordt toegevoegd


// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    // Controleer of er fouten zijn
    let fouten = document.querySelectorAll(".errorMessage:not(:empty)");
    if (fouten.length > 0) return;
    
    // Maak een persoon object
    let persoon = {
        voornaam: document.getElementById("txtVoornaam").value.trim(),
        familienaam: document.getElementById("txtFamilienaam").value.trim(),
        geboorteDatum: document.getElementById("txtGeboorteDatum").value.trim(),
        email: document.getElementById("txtEmail").value.trim(),
        aantalKinderen: document.getElementById("txtAantalKinderen").value.trim()
    };
    
    if (geselecteerdeIndex === -1) {
        // Nieuw persoon toevoegen
        personen.push(persoon);
    } else {
        // Bestaande persoon updaten
        personen[geselecteerdeIndex] = persoon;
    }
    
    updateLijst();
    document.forms[0].reset();
    geselecteerdeIndex = -1; // Reset
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
    document.forms[0].reset();
    geselecteerdeIndex = -1;
};

const updateLijst = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.innerHTML = ""; // Leegmaken
    
    personen.forEach((persoon, index) => {
        let option = document.createElement("option");
        option.textContent = `${persoon.voornaam} ${persoon.familienaam}`;
        option.value = index;
        lstPersonen.appendChild(option);
    });
};

const toonPersoon = (event) => {
    geselecteerdeIndex = event.target.value;
    let persoon = personen[geselecteerdeIndex];
    
    document.getElementById("txtVoornaam").value = persoon.voornaam;
    document.getElementById("txtFamilienaam").value = persoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = persoon.geboorteDatum;
    document.getElementById("txtEmail").value = persoon.email;
    document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;
};

// onze setup functie die de event listeners registreert
const setup = () => {
    document.getElementById("btnBewaar").addEventListener("click", bewaarBewerktePersoon);
    document.getElementById("btnNieuw").addEventListener("click", bewerkNieuwePersoon);
    document.getElementById("lstPersonen").addEventListener("change", toonPersoon);
};

window.addEventListener("load", setup);