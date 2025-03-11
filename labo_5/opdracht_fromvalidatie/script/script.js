const setup = () => {
    document.getElementById("btnValideer").addEventListener("click", valideer);
};

const valideer = () => {
    let geldig = true;

    let voornaam = document.getElementById("voornaam");
    let errVoornaam = document.getElementById("error-voornaam");
    if (voornaam.value.trim().length > 30) {
        errVoornaam.textContent = "Max. 30 karakters";
        voornaam.classList.add("invalid");
        geldig = false;
    } else {
        errVoornaam.textContent = "";
        voornaam.classList.remove("invalid");
    }

    let familienaam = document.getElementById("familienaam");
    let errFamilienaam = document.getElementById("error-familienaam");
    if (familienaam.value.trim() === "") {
        errFamilienaam.textContent = "Verplicht veld";
        familienaam.classList.add("invalid");
        geldig = false;
    } else if (familienaam.value.trim().length > 50) {
        errFamilienaam.textContent = "Max. 50 karakters";
        familienaam.classList.add("invalid");
        geldig = false;
    } else {
        errFamilienaam.textContent = "";
        familienaam.classList.remove("invalid");
    }

    let geboortedatum = document.getElementById("geboortedatum");
    let errGeboortedatum = document.getElementById("error-geboortedatum");
    let regexDatum = /^\d{4}-\d{2}-\d{2}$/;
    if (!regexDatum.test(geboortedatum.value.trim())) {
        errGeboortedatum.textContent = "Formaat is niet jjjj-mm-dd";
        geboortedatum.classList.add("invalid");
        geldig = false;
    } else {
        errGeboortedatum.textContent = "";
        geboortedatum.classList.remove("invalid");
    }

    let email = document.getElementById("email");
    let errEmail = document.getElementById("error-email");
    if (!email.value.includes("@") || email.value.startsWith("@") || email.value.endsWith("@")) {
        errEmail.textContent = "Geen geldig e-mailadres";
        email.classList.add("invalid");
        geldig = false;
    } else {
        errEmail.textContent = "";
        email.classList.remove("invalid");
    }

    let aantalKinderen = document.getElementById("aantalKinderen");
    let errAantalKinderen = document.getElementById("error-aantalKinderen");
    let aantal = parseInt(aantalKinderen.value.trim(), 10);
    if (isNaN(aantal) || aantal < 0 || aantal >= 99) {
        errAantalKinderen.textContent = "Moet tussen 0 en 98 zijn";
        aantalKinderen.classList.add("invalid");
        geldig = false;
    } else {
        errAantalKinderen.textContent = "";
        aantalKinderen.classList.remove("invalid");
    }

    if (geldig) {
        alert("Proficiat!");
    }
};

window.addEventListener("load", setup);
