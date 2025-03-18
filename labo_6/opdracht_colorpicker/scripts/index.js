const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    let saveButton = document.getElementById("saveButton");

    saveButton.addEventListener("click", saveColor);

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("input", update);
    }

    update(); // Zorgt ervoor dat de beginwaarde correct weergegeven wordt
}

const update = () => {
    let rood = document.getElementById('rood').value;
    let groen = document.getElementById('groen').value;
    let blauw = document.getElementById('blauw').value;

    document.getElementById('roodTekst').textContent = `Rood: ${rood}`;
    document.getElementById('groenTekst').textContent = `Groen: ${groen}`;
    document.getElementById('blauwTekst').textContent = `Blauw: ${blauw}`;

    let colorDemo = document.getElementsByClassName("colorDemo")[0];
    colorDemo.style.backgroundColor = `rgb(${rood}, ${groen}, ${blauw})`;
}

const saveColor = () => {
    let rood = document.getElementById('rood').value;
    let groen = document.getElementById('groen').value;
    let blauw = document.getElementById('blauw').value;
    
    let savedColorsContainer = document.createElement("div");
    savedColorsContainer.classList.add("savedColorsContainer");

    let colorSwatch = document.createElement("div");
    colorSwatch.classList.add("colorSwatch");
    colorSwatch.style.backgroundColor = `rgb(${rood}, ${groen}, ${blauw})`;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("deleteButton");
    deleteButton.addEventListener("click", () => {
        savedColorsContainer.remove();
    });

    colorSwatch.addEventListener("click", () => {
        document.getElementById('rood').value = rood;
        document.getElementById('groen').value = groen;
        document.getElementById('blauw').value = blauw;
        update();
    });

    savedColorsContainer.appendChild(colorSwatch);
    savedColorsContainer.appendChild(deleteButton);
    document.getElementById("savedColors").appendChild(savedColorsContainer);
}

window.addEventListener("load", setup);
