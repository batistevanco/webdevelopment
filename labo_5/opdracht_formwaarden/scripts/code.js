const setup = () => {
    let btnValideer = document.getElementById("btnValideer");
    btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
    toonResultaat();
};

const toonResultaat = () => {
    let isRoker = document.getElementById("chkRoker").checked ? "is roker" : "is geen roker";
    
    let moedertaal = document.querySelector('input[name="moedertaal"]:checked');
    moedertaal = moedertaal ? `moedertaal is ${moedertaal.value}` : "moedertaal is niet geselecteerd";
    
    let favorieteBuur = document.getElementById("favorieteBuur").value;
    
    let bestellingSelect = document.getElementById("bestelling");
    let bestelling = [];
    for (let option of bestellingSelect.options) {
        if (option.selected) {
            bestelling.push(option.value);
        }
    }
    bestelling = bestelling.length > 0 ? `bestelling bestaat uit ${bestelling.join(" ")}` : "geen bestelling geselecteerd";

    console.log(isRoker);
    console.log(moedertaal);
    console.log(`favoriete buurland is ${favorieteBuur}`);
    console.log(bestelling);
};

window.addEventListener("load", setup);
