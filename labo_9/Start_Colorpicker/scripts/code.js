const initialize = () => {
    document.getElementById("btnSave").addEventListener("click", saveSwatch);
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        // we moeten zowel op het input als het change event reageren,
        // zie http://stackoverflow.com/questions/18544890
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }

    restoreSliderValues();
    restoreSwatches();

    update();
};

const saveSwatch = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    // voeg swatch toe
    addSwatchComponent(red, green, blue);

    // bewaar kleurinfo van alle swatches in local storage
    storeSwatches();
};

const setColorPickerFromSwatch = (event) => {
    // gebruik event.currentTarget om zeker de swatch-div te pakken
    const swatch = event.currentTarget;
    const red   = swatch.getAttribute("data-red");
    const green = swatch.getAttribute("data-green");
    const blue  = swatch.getAttribute("data-blue");

    document.getElementById("sldRed").value   = red;
    document.getElementById("sldGreen").value = green;
    document.getElementById("sldBlue").value  = blue;

    // handmatig update aanroepen voor labels en preview
    update();
};

const deleteSwatch = (event) => {
    event.stopPropagation();
    let swatchComponents = document.getElementById("swatchComponents");
    let button = event.target;
    let swatch = button.parentNode;
    swatchComponents.removeChild(swatch);

    // bewaar kleurinfo van alle swatches in local storage
    storeSwatches();
};

const update = () => {
    let red = document.getElementById("sldRed").value;
    document.getElementById("lblRed").innerHTML = red;

    let green = document.getElementById("sldGreen").value;
    document.getElementById("lblGreen").innerHTML = green;

    let blue = document.getElementById("sldBlue").value;
    document.getElementById("lblBlue").innerHTML = blue;

    let swatch = document.getElementById("swatch");
    swatch.style.background = "rgb(" + red + "," + green + "," + blue + ")";

    storeSliderValues();
};


window.addEventListener("load", initialize);