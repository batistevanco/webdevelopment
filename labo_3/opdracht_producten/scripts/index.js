const setup = () => {
    document.querySelector("#herbereken").addEventListener("click", herbereken);
}
window.addEventListener("load", setup);

const herbereken = () => {
    let prijzen = document.getElementsByClassName("prijs");
    let aantallen = document.getElementsByClassName("aantal");
    let btwTarieven = document.getElementsByClassName("btw");
    let subtotals = document.getElementsByClassName("subtotaal");
    let totaalElement = document.getElementById("totaal");
    let totaal = 0;

    for (let i = 0; i < prijzen.length; i++) {
        let prijs = parseFloat(prijzen[i].textContent.replace(" Eur", ""));
        let aantal = parseFloat(aantallen[i].value);
        let btw = parseFloat(btwTarieven[i].textContent.replace("%", "")) / 100;

        let subtotal = (prijs * aantal) * (1 + btw);
        subtotals[i].textContent = subtotal.toFixed(2) + " Eur";

        totaal += subtotal;
    }

    totaalElement.textContent = totaal.toFixed(2) + " Eur";
}
