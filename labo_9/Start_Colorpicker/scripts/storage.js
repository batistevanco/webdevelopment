// storage.js - versie met volledig uitgeschreven variabelen en functienamen

// één global object met alle sleutel- en configuratiewaarden
let global = {
    SLIDERS_KEY: 'colorpicker-sliders',
    SWATCHES_KEY: 'colorpicker-swatches',
    sliderIds: ['Red', 'Green', 'Blue']
};

// sla de sliderwaarden
const storeSliderValues = () => {
    // maak lege array voor de drie waarden
    const sliderWaarden = [];

    // loop door elk kleurcomponent (“Red”, “Green”, “Blue”)
    for (let i = 0; i < global.sliderIds.length; i++) {
        const kleurNaam = global.sliderIds[i];
        const schuifElement = document.getElementById(`sld${kleurNaam}`);
        // lees de waarde uit en zet om naar Number
        const waarde = Number(schuifElement.value);
        sliderWaarden.push(waarde);
    }

    // schrijf de array naar localStorage
    localStorage.setItem(global.SLIDERS_KEY, JSON.stringify(sliderWaarden));
};


// herstel de sliderwaarden uit localStorage en zet ze terug op de schuifregelaars
const restoreSliderValues = () => {
    // haal de opgeslagen JSON‑tekst op of gebruik een lege array als fallback
    const opgeslagenTekst = localStorage.getItem(global.SLIDERS_KEY) || '[]';
    // zet de tekst om naar een array van getallen
    const opgeslagenWaarden = JSON.parse(opgeslagenTekst);
    // loop over elke waarde en zet deze terug op de corresponderende schuifregelaar
    opgeslagenWaarden.forEach((kleurWaarde, index) => {
        const kleurComponentNaam = global.sliderIds[index];
        const schuifElement = document.getElementById(`sld${kleurComponentNaam}`);
        schuifElement.value = kleurWaarde;
    });
};

// sla de swatches op
const storeSwatches = () => {
    // selecteer alle swatch-elementen
    const swatchElementen = document.querySelectorAll('#swatchComponents .swatch');
    const swatchWaardenLijst = [];

    // loop door elk element
    for (let i = 0; i < swatchElementen.length; i++) {
        const swatchElement = swatchElementen[i];
        // lees per kleurcomponent de data-attribute uit
        const roodWaarde  = Number(swatchElement.getAttribute('data-red'));
        const groenWaarde = Number(swatchElement.getAttribute('data-green'));
        const blauwWaarde = Number(swatchElement.getAttribute('data-blue'));

        // voeg de triple toe aan de lijst
        swatchWaardenLijst.push([roodWaarde, groenWaarde, blauwWaarde]);
    }

    // schrijf de lijst naar localStorage
    localStorage.setItem(global.SWATCHES_KEY, JSON.stringify(swatchWaardenLijst));
};

// herstel alle kleurstaaltjes uit localStorage en bouw ze weer op in de pagina
const restoreSwatches = () => {
    // haal de opgeslagen JSON‑tekst op of gebruik een lege array
    const opgeslagenTekst = localStorage.getItem(global.SWATCHES_KEY) || '[]';
    // zet de tekst om in een array van kleur‑triples
    const swatchWaardenLijst = JSON.parse(opgeslagenTekst);
    // voor elke set [rood, groen, blauw] een nieuwe swatch aanmaken
    swatchWaardenLijst.forEach(([rood, groen, blauw]) => {
        addSwatchComponent(rood, groen, blauw);
    });
};