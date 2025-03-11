const setup = () => {
    document.getElementById("btnValideer").addEventListener("click", valideer);
};

const valideer = () => {
    let geldig = true;

    geldig &= valideerVoornaam();
    geldig &= valideerFamilienaam();
    geldig &= valideerGeboortedatum();
    geldig &= valideerEmail();
    geldig &= valideerAantalKinderen();

    if (geldig) {
        alert("Proficiat!");
    }
};

const valideerVoornaam = () => {
    let voornaam = document.getElementById("voornaam").value.trim();
    let error = document.getElementById("error-voornaam");

    if (voornaam.length > 30) {
        toonFout("max. 30 karakters", "voornaam");
        return false;
    } else {
        verwijderFout("voornaam");
        return true;
    }
};

const valideerFamilienaam = () => {
    let familienaam = document.getElementById("familienaam").value.trim();
    
    if (familienaam.length === 0) {
        toonFout("verplicht veld", "familienaam");
        return false;
    }
    if (familienaam.length > 50) {
        toonFout("max 50 karakters", "familienaam");
        return false;
    }
    
    verwijderFout("familienaam");
    return true;
};

const valideerGeboortedatum = () => {
    let geboortedatum = document.getElementById("geboortedatum").value.trim();
    let regex = /^\d{4}-\d{2}-\d{2}$/;

    if (geboortedatum.length === 0) {
        toonFout("verplicht veld", "geboortedatum");
        return false;
    }
    if (!regex.test(geboortedatum)) {
        toonFout("formaat is niet jjjj-mm-dd", "geboortedatum");
        return false;
    }

    verwijderFout("geboortedatum");
    return true;
};

const valideerEmail = () => {
    let email = document.getElementById("email").value.trim();
    let regex = /^[^@]+@[^@]+$/;

    if (email.length === 0) {
        toonFout("verplicht veld", "email");
        return false;
    }
    if (!regex.test(email)) {
        toonFout("geen geldig email adres", "email");
        return false;
    }

    verwijderFout("email");
    return true;
};

const valideerAantalKinderen = () => {
    let aantal = document.getElementById("aantalKinderen").value.trim();
    let getal = parseInt(aantal);

    if (isNaN(getal) || getal < 0) {
        toonFout("is geen positief getal", "aantalKinderen");
        return false;
    }
    if (getal >= 99) {
        toonFout("is te vruchtbaar", "aantalKinderen");
        return false;
    }

    verwijderFout("aantalKinderen");
    return true;
};

const toonFout = (boodschap, veld) => {
    document.getElementById(`error-${veld}`).textContent = boodschap;
    document.getElementById(veld).classList.add("invalid");
};

const verwijderFout = (veld) => {
    document.getElementById(`error-${veld}`).textContent = "";
    document.getElementById(veld).classList.remove("invalid");
};

window.addEventListener("load", setup);
